const express = require("express");
const router = express.Router();

const {
    writeDBControllers,
    getAllTodoController,
    getTodoController,
    deleteTodoController,
    updateTodoController,
    filterTodoController

} = require("../../Controllers/mainController");


router.get('/', (req, res) => {
    try {
        return res.status(200).json({
            message: 'Welcome home',
            success: true,
            data: {},
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in v1/index.js routing ");
        // throw error;
        return res.status(500).json({
            message: 'Welcome home',
            success: true,
            data: {},
            err: {}
        });

    }
})

router.post('/create', writeDBControllers);
router.get('/todos', getAllTodoController);
router.get('/todo', getTodoController);
router.delete('/delTodo', deleteTodoController);
router.patch('/upTodo', updateTodoController);
router.get('/filterTodo', filterTodoController);



module.exports = router;