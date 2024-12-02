const {Op, where} = require("sequelize");

const {Todo} = require('../models/index');

class CURD {

     fitersTodos = async(filter) => {

        try {
            var condn = {};

            if(filter.id)
                condn.id= filter.id;

            if(filter.title)
                condn.title = { [Op.like]: `${filter.title}%` };

            if(filter.complete !== undefined)  
                condn.complete= filter.complete;

            const data = await Todo.findAll({
                where: condn,
            });

            return data;

        } catch (error) {
            console.log("Something went wrong in repository level");
            throw error;
            
        }

    }

    async updateCom(id, data) {
        try {
           const todo = await Todo.findByPk(id);
           if(data.complete)
                todo.complete= data.complete;

            await todo.save();
                
            return todo;
        } catch (error) {
            console.log('Something went wrong in repo level (updating complete data) ');
            throw error.message;
        }
    }

  async  write(data){
        try {
            const res = await Todo.create(data);
            return res;
        } catch (error) {
            console.log('Something went wrong in repo level (writing data) ');
            throw error.message;
        }
    }

    async getAllTodo(){
        try {
            const res = await Todo.findAll();
           
            
            return res;
        } catch (error) {
            console.log('Something went wrong in repo level (writing data) ');
            throw error.message;
        }
    }
    
    async getTodo(data){
        try {
            const res = await Todo.findAll({
                where: {
                    id:data
                },
            });
            return res;
        } catch (error) {
            console.log('Something went wrong in repo level (writing data) ');
            throw error.message;
        }
    }

    async deleteTodo(data){
        try {
            const res = await Todo.destroy({
                where: {
                    id:data
                }
            });
            return res;
        } catch (error) {
            console.log('Something went wrong in repo level (deleting data) ');
            throw error.message;
        }
    }
    
    async updateTodo(idUs,data){
        try {
            const res = await Todo.update(
                data,
                {
                where: {
                    id:idUs
                },
                returning: true
            });
            return res;
        } catch (error) {
            console.log('Something went wrong in repo level (updating data) ');
            throw error.message;
        }
    }

}

module.exports= CURD; 