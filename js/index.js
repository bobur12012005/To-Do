import { reload } from "./ui.js";

let form = document.forms.addTodo
let todos = []
let container = document.querySelector('.container')

form.onsubmit = (e) => {
    e.preventDefault()

    let todo = {
        id: Math.random(),
        task: new FormData(form).get('todo'),
        status: false,
        time: new Date().toLocaleTimeString() + ` (${new Date().toLocaleDateString()})`
    }

    if (todo.task.trim() !== '') {
        todos.push(todo)
        reload(todos, container)
    }
}