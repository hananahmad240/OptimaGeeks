const { listService } = require("../service");


const getAllListController = async (req, res) => {
    try {
        const data = listService.getAllListService();
        return res.send(data).status(200)
    } catch (error) {
        res.status(400);
    }
};

const getListByIdController = async (req, res) => {
    try {
        const listId = req.params.id;
        const data = listService.getListByIdService(listId);
        return res.send(data).status(200)
    } catch (error) {
        res.status(400);

    }
};

const adddListController = async (req, res) => {
    try {
        const { name } = req.body
        const data = listService.adddListService(name);
        return res.send(data).status(201)
    } catch (error) {
        res.status(400);

    }
};

const updateListByIdController = async (req, res) => {
    try {
        const listId = req.params.id;
        const { name } = req.body

        const data = listService.updateListByIdService(listId, name);
        return res.send(data).status(200)

    } catch (error) {
        res.status(400);

    }
};

const deleteListByIdController = async (req, res) => {
    try {
        const listId = req.params.id;
        const data = listService.deleteListByIdService(listId);
        return res.send(data).status(200)
    } catch (error) {
        res.status(400);

    }
};






// --------TODO
const getAllTodosByListIdController = async (req, res) => {
    try {
        const listId = req.params.id;
        const data = listService.getAllTodosByListIdService(listId);
        return res.send(data).status(200)

    } catch (error) {
        res.status(400);

    }
};

const getTodoByIdController = async (req, res) => {
    try {
        const { id, todoId } = req.params;
        const data = listService.getTodoByIdService(id, todoId);
        return res.send(data).status(200)

    } catch (error) {
        res.status(400);

    }
};


const addTodoByListIdController = async (req, res) => {
    try {
        const listId = req.params.id;
        const { title, dueDate } = req.body;
        console.log("yes", listId, req.body);

        const data = listService.addTodoByListIdService(listId, title, dueDate);
        return res.send(data).status(200)

    } catch (error) {
        res.status(400);

    }
};


const updateTodoByListIdController = async (req, res) => {
    try {
        const { id, todoId } = req.params;
        const { title, dueDate } = req.body


        const data = listService.updateTodoByListIdService(id, todoId, title, dueDate);
        return res.send(data).status(200)

    } catch (error) {
        res.status(400);

    }
};


const updateTodoMarkAsDoneByListIdController = async (req, res) => {
    try {
        const { id, todoId } = req.params;
        const data = listService.updateTodoMarkAsDoneByListIdService(id, todoId);
        return res.send(data).status(200)

    } catch (error) {
        res.status(400);

    }
};


const deleteTodoByListIdController = async (req, res) => {
    try {
        const { id, todoId } = req.params;

        const data = listService.deleteTodoByListIdService(id, todoId);
        return res.send(data).status(200)

    } catch (error) {
        res.status(400);

    }
};


module.exports = {
    getAllListController,
    getListByIdController,
    adddListController,
    updateListByIdController,
    deleteListByIdController,


    getAllTodosByListIdController,
    getTodoByIdController,
    addTodoByListIdController,
    updateTodoByListIdController,
    updateTodoMarkAsDoneByListIdController,
    deleteTodoByListIdController
}