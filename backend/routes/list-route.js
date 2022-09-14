const express = require("express");

const {listController} = require('../controller');


const router = express.Router();


router.route("/").get(listController.getAllListController).post(listController.adddListController);
router.route("/:id").get(listController.getListByIdController).put(listController.updateListByIdController).delete(listController.deleteListByIdController);


router.route("/:id/todo").get(listController.getAllTodosByListIdController).post(listController.addTodoByListIdController)
router.route("/:id/todo/:todoId").get(listController.getTodoByIdController).put(listController.updateTodoByListIdController).delete(listController.deleteTodoByListIdController)
router.route("/:id/todo/:todoId/markAsDone").put(listController.updateTodoMarkAsDoneByListIdController)



module.exports = router;
