let callStack = [];
const taskInput = document.getElementById('task_input');
const addTaskButton = document.getElementById('add_task_button');
const undoTaskButton = document.getElementById('undo_task_button');
const taskPipeline = document.getElementById('task_pipeline');
function displayPipeline() {
if (callStack.length === 0) {
taskPipeline.textContent = "No tasks in the pipeline.";
} else {
taskPipeline.textContent = callStack.join(' -> ');
}
}
function addTask() {
const taskName = taskInput.value.trim();
console.log(taskName,"task name");
if (taskName === "") {
alert("Please enter a task name!");
return;
}
callStack.push(taskName);
taskInput.value = '';
displayPipeline();
}
function undoTask() {
if (callStack.length === 0) {
alert("No tasks to undo.");
return;
}
callStack.pop();
displayPipeline();
}
addTaskButton.addEventListener('click', addTask);
undoTaskButton.addEventListener('click', undoTask);
displayPipeline();
