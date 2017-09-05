//Importation de la Class todoList.

import {TodoList} from "../modele/todolist";

const todoList: TodoList = new TodoList();

//Utilise la function ajouter.
todoList.ajouter("aligouliga");

//Utilise la function supprimer.
todoList.ajouter("aligouliga");
console.log(todoList.lister());

