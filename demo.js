let tasks = [];
const taskbody = document.getElementById("taskbody");
const taskform = document.getElementById("task-form");
const noTasksMessage = document.getElementById("noTasksMessage");
const submitbutton = document.getElementById("submit");
let isediting = false;
let currenttaskid = null;
const fetchurl = "https://68a582352a3deed2960dbd2c.mockapi.io/form/name";

function fetchdata() {
    fetch(fetchurl)
        .then(res => res.json())
        .then(data => {
            tasks = data;
            rendertask();
            alert("Task load Successfully");
        })
        .catch(error => console.log("Error fetching tasks:", error));
}

function rendertask() {
    if (tasks.length === 0) {
        noTasksMessage.style.display = "block";
        taskbody.innerHTML = "";
    } else {
        noTasksMessage.style.display = "none";
        taskbody.innerHTML = tasks.map(task =>`
            <tr>
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.email}</td>
            <td>${task.phone}</td>
            <td>${task.address}</td>
            <td>
            <div class="action-button">
            <button onclick="editTask('${task.id}')">Edit</button>
                <button class="delete-button" onclick="deleteTask('${task.id}')">Delete</button>
            </div>
            </td>
            </tr>`)
            .join("");
    }
}

// taskform
taskform.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (isediting) {
        fetch(`${fetchurl}/${currenttaskid}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name, email, phone, address })
        })
            .then(res => res.json())
            .then(updatedtask => {
                tasks = tasks.map(task =>
                    task.id === updatedtask.id ? updatedtask : task
                );
                rendertask();
                resetForm();
                alert("Task Updated Successfully")
            })
            .catch(error => console.log("Error updating task:", error));
    } else {
        fetch(fetchurl, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name, email, phone, address })
        })
            .then(res => res.json())
            .then(newtask => {
                tasks.push(newtask);
                rendertask();
                resetForm();
                alert("Task Added Successfully.")
            })
            .catch(error => console.log("Error adding task:", error));
    }
});
function editTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    isediting = true;
    currenttaskid = id;
    submitbutton.textContent = "Edit Task";
    document.getElementById("name").value = task.name;
    document.getElementById("email").value = task.email;
    document.getElementById("phone").value = task.phone;
    document.getElementById("address").value = task.address;
}
function deleteTask(id) {
    fetch(`${fetchurl}/${id}`, {
        method: "DELETE",
    })
        .then((res) => {
            if (res.ok) {
                tasks = tasks.filter((task) => task.id !== id);
                rendertask();
                alert("Task deleted successfully.");
            }
        })
        .catch((error) => console.log("Error deleting task:", error));
}
function resetForm() {
    isediting = false;
    currenttaskid = null;
    taskform.reset();
    submitbutton.textContent = "Add Task";
}


