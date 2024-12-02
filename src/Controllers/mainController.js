const {
    writeDBService,
    getAllService,
    getTodoService,
    deleteTodoService,
    updateTodoService,
    filterTodoService

} = require('../Services/mainService');

const writeDBControllers = (req, res) => {
    try {
        const data = req.body;
        const resdata = writeDBService(data);
        console.log(data);

        return res.status(201).json({
            message: 'Successfully to write data in DB',
            success: true,
            data: resdata,
            err: {}
        });


    } catch (error) {
        console.log('Something went wrong in controller level (writeDB)');
        return res.status(500).json({
            message: 'Failed to write data in DB',
            success: false,
            data: {},
            err: {}
        });
    }
}

const getAllTodoController = async (req, res) => {
    try {

        const response = await getAllService();
        return res.status(200).json({
            message: "Successfully Fetched all data",
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to fetch data ",
            success: false,
            err: error.message,
            data: {}
        });

    }
}

const getTodoController = async (req, res) => {
    try {
        const id = req.query.id;
       
        
        const response = await getTodoService(id);
        return res.status(200).json({
            message: "Successfully Fetched  data",
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to fetch data ",
            success: false,
            err: error.message,
            data: {}
        });

    }
}

const deleteTodoController = async (req, res) => {
    try {
        const id = req.query.id;

        const response = await deleteTodoService(id);
        return res.status(200).json({
            message: `Successfully delete  todo id ${id}`,
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to fetch data ",
            success: false,
            err: error.message,
            data: {}
        });

    }
}


const updateTodoController = async (req, res) => {
    try {
        const id = req.query.id;
        const data = req.body;

        console.log("controller ", id , data);
        
        const response = await updateTodoService(id, data);
        return res.status(200).json({
            message: `Successfully update  todo id ${id}`,
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to update data ",
            success: false,
            err: error.message || error,
            data: {}
        });

    }
}

const filterTodoController = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        
        const response = await filterTodoService(data);

        return res.status(200).json({
            message: `Successfully filter  todo id `,
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to update data ",
            success: false,
            err: error.message || error,
            data: {}
        });

    }
}

module.exports = {
    writeDBControllers,
    getAllTodoController,
    getTodoController,
    deleteTodoController,
    updateTodoController,
    filterTodoController
}

