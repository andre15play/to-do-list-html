// --- variaveis --- .js -->

const tasklist = document.getElementById('tasklist');
const taskinput = document.getElementById('taskinput');

// --- funcoes --- .js -->

function addTask() {
    const taskText = taskinput.value.trim();
    if (taskText !== "") {

        const maxText = taskText.substring(0, 35);

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${maxText}</span>
            <button class = "editButton" onClick = "editTask(this)">Editar</button>
            <button class = "deleteButton" onClick = "deleteTask(this)">Excluir</button>
        `;
        tasklist.appendChild(li);
        taskinput.value = "";
    }
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newText = prompt("Edite a tarefa:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}

function deleteTask(button){
    const li = button.parentElement;
    tasklist.removeChild(li);
}