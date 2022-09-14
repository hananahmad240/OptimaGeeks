// [
//     {
//          id: string
//         name:string,
//         todo:[
//             {
//                  id: string
//                 title:string,
//                 dueDate:Date,
//                 marker:boolean
//             }
//         ]
//     }
// ]

const { v4 } = require('uuid')


let db = []





const getAllListService = () => {
    if (db.length > 0)
        return db.map(x => { return { id: x.id, name: x.name } })
    else
        return []
}


const getListByIdService = (id) => {
    return db.find(x => x.id === id) ?? {}
}

const adddListService = (name) => {


    db.push({
        id: v4(),
        name, todo: []
    })
    return db

}


const updateListByIdService = (id, updatedListName) => {

    const foundIndex = db.findIndex(x => x.id == id);
    if (foundIndex >= 0) {
        db[foundIndex] = {
            ...db[foundIndex],
            name: updatedListName
        }
    }
    return db;
}


const deleteListByIdService = (id) => {
    db = db.filter(x => x.id !== id)
    return db
}




// TODO


const getAllTodosByListIdService = (listId) => {

    return db.find(x => x.id === listId) ?? {}

}

const getTodoByIdService = (listId, todoId) => {

    const foundListItem = db.find(x => x.id === listId);
    if (foundListItem) {
        const foundTodoItem = foundListItem.todo.find(y => y.id === todoId);
        if (foundTodoItem)
            return foundTodoItem
        else
            return {}

    } else
        return {}

}



const addTodoByListIdService = (listId, title, dueDate) => {
    const foundIndex = db.findIndex(x => x.id == listId);

    if (foundIndex >= 0) {
        console.log(foundIndex);
        db[foundIndex].todo.push(
            {
                id: v4(),
                title, dueDate,
                marked: false
            }
        )
    }
    // return db
    return db[foundIndex]


}

const updateTodoByListIdService = (listId, todoId, title, dueDate) => {
    const foundIndex = db.findIndex(x => x.id == listId);
    if (foundIndex >= 0) {
        const todoItemIndex = db[foundIndex].todo.findIndex(y => y.id === todoId);
        if (todoItemIndex >= 0) {
            db[foundIndex].todo[todoItemIndex] = {
                ...db[foundIndex].todo[todoItemIndex],
                title,
                dueDate
            }
        }
    }
    // return db
    return db[foundIndex]

}


const updateTodoMarkAsDoneByListIdService = (listId, todoId) => {
    const foundIndex = db.findIndex(x => x.id == listId);
    if (foundIndex >= 0) {
        const todoItemIndex = db[foundIndex].todo.findIndex(y => y.id === todoId);
        if (todoItemIndex >= 0) {
            db[foundIndex].todo[todoItemIndex] = {
                ...db[foundIndex].todo[todoItemIndex],
                marked: true
            }
        }
    }
    // return db
    return db[foundIndex]

}

const deleteTodoByListIdService = (listId, todoId) => {
    const foundIndex = db.findIndex(x => x.id == listId);
    if (foundIndex >= 0) {
        const todoItems = db[foundIndex].todo.filter(y => y.id !== todoId);
        db[foundIndex].todo = todoItems
    }
    // return db
    return db[foundIndex]
}





module.exports = {
    getAllListService,
    getListByIdService,
    updateListByIdService,
    deleteListByIdService,
    adddListService,


    getAllTodosByListIdService,
    getTodoByIdService,
    addTodoByListIdService,
    updateTodoByListIdService,
    updateTodoMarkAsDoneByListIdService,
    deleteTodoByListIdService
}