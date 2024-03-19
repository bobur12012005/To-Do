let form = document.forms.addTodo
let todos = []

form.onsubmit = (e) => {
    e.preventDefault()

    let todo = {
        id: Math.random(),
        task: new FormData(form).get('todo'),
        status: false,
        time: new Date()
    }
    
    if (todo.task.trim() !== '') {
        todos.push(todo)
        console.log(todos);
    }
}