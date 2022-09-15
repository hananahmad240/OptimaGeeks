import { all } from 'redux-saga/effects';

import {
    getAllListsSage,
    getListByIdSage,
    updateListByIdSage,
    deleteListByIdSage,
    createListSage
} from './listsSaga'


import {
    getAllTodosSaga,
    getTodoByIdSaga,
    updateTodoByIdSaga,
    deleteTodoByIdSaga,
    createTodoByListIdSaga,
    updateTodoMarkAsDoneByIdSaga
} from './todoSaga'

export default function* rootSage() {
    yield all([
        getAllListsSage(),
        getListByIdSage(),
        updateListByIdSage(),
        deleteListByIdSage(),
        createListSage(),

        getAllTodosSaga(),
        getTodoByIdSaga(),
        updateTodoByIdSaga(),
        deleteTodoByIdSaga(),
        createTodoByListIdSaga(),
        updateTodoMarkAsDoneByIdSaga()
    ])
}