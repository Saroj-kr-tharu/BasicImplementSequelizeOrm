const CURD = require('../Repository/CURD');

const curd = new CURD();


const writeDBService  = (data) => {
    try {
        const res = curd.write(data);
        return res;
    } catch (error) {
        console.log("Something went wrong in service layer (writeDBService)");
        throw error;
        
    }
}

const getAllService= async() => {
    try {
        
        const res = await curd.getAllTodo();
        
        
        return res;

    } catch (error) {
        console.log("Something went wrong in service layer (getAllService) ");
        throw error;
        
    }
}

const getTodoService= async(data) => {
    try {
        
        const res = await curd.getTodo(data);
        return res;

    } catch (error) {
        console.log("Something went wrong in service layer (getAllService) ");
        throw error;
        
    }
}

const deleteTodoService= async(data) => {
    try {
        
        const res = await curd.deleteTodo(data);
        return res;

    } catch (error) {
        console.log("Something went wrong in service layer (getAllService) ");
        throw error;
        
    }
}

const updateTodoService= async(id,data) => {
    try {
        
        const res = await curd.updateTodo(id,data);
        return res;

    } catch (error) {
        console.log("Something went wrong in service layer (updateTodoService) ");
        throw error;
        
    }
}

const filterTodoService= async(data) => {
    try {
        
        const res = await curd.fitersTodos(data);
        return res;

    } catch (error) {
        console.log("Something went wrong in service layer (updateTodoService) ");
        throw error;
        
    }
}


module.exports = {
    writeDBService,
    getAllService,
    getTodoService,
    deleteTodoService,
    updateTodoService,
    filterTodoService
}