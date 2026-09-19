const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const completeCount = document.querySelector("#complete-count")
const cancelBtn = document.querySelector("#cancel-btn")


// Get todos from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

console.log(todos);

let editTodoId = null;


// ================= SAVE TODOS =================

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}


// ================= FORM SUBMIT =================

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoValue = todoInput.value.trim();

    if (!todoValue) {
        return;
    }

    console.log({ editTodoId, todoValue });


    // ================= EDITING =================

    if (editTodoId) {

        todos = todos.map((todo) => {

            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }

            return todo;
        });


    } else {

        // ================= ADDING =================

        const newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        };

        todos.push(newTodo);
    }


    // Save updated todos
    saveTodos();

    cancelEdit();

    renderTodo();
});



// ================= RENDER TODOS =================

function renderTodo() {

    todoList.innerHTML = "";

    todos.forEach((todo) => {

        const li = document.createElement("li");

        li.className =
            "flex gap-2 border border-slate-300 p-4 rounded-xl";

        li.dataset.id = todo.id;

        li.innerHTML = `
            <input
                data-action="toggle"
                ${todo.isCompleted ? "checked" : ""}
                type="checkbox"
            >

            <p class="flex-1 ${
                todo.isCompleted
                    ? "line-through text-red-400"
                    : ""
            }">
                ${todo.text}
            </p>

            <div class="flex gap-2">

                <button
                    data-action="edit"
                    class="px-2.5 py-1 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded transition-colors cursor-pointer">
                    Edit
                </button>

                <button
                    data-action="delete"
                    class="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors cursor-pointer">
                    Delete
                </button>

            </div>
        `;

        todoList.append(li);
    });


    // Total tasks
    taskCount.textContent = `TASKS (${todos.length})`;


    // Completed tasks
    completeCount.textContent =
        `COMPLETED: ${
            todos.filter((todo) => todo.isCompleted).length
        }`;
}


renderTodo();



// ================= EVENT DELEGATION =================

todoList.addEventListener("click", (e) => {

    const li = e.target.closest("li");

    // Agar li par click nahi hua
    if (!li) {
        return;
    }

    const id = li.dataset.id;

    const action = e.target.dataset.action;


    // DELETE
    if (action === "delete") {
        deleteTodo(id);
    }


    // EDIT
    if (action === "edit") {
        startEdit(id);
    }


    // TOGGLE COMPLETE
    if (action === "toggle") {

        todos = todos.map((todo) => {

            if (todo.id === Number(id)) {

                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                };
            }

            return todo;
        });


        saveTodos();

        renderTodo();
    }
});



// ================= DELETE TODO =================

function deleteTodo(id) {

    todos = todos.filter((todo) => {
        return todo.id !== Number(id);
    });


    saveTodos();

    renderTodo();
}



// ================= START EDIT =================

function startEdit(id) {

    editTodoId = id;

    const currentTodo = todos.find((todo) => {
        return todo.id === Number(id);
    });


    if (!currentTodo) {
        return;
    }


    todoInput.value = currentTodo.text;


    formBtn.textContent = "Update";

    formBtn.className =
        "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";


    cancelBtn.classList.remove("hidden");
}



// ================= CANCEL EDIT =================

function cancelEdit() {

    editTodoId = null;

    todoInput.value = "";


    formBtn.textContent = "Add";

    formBtn.className =
        "px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-pointer";


    cancelBtn.classList.add("hidden");
}



// ================= CANCEL BUTTON =================

cancelBtn.addEventListener("click", (e) => {

    e.preventDefault();

    cancelEdit();
});