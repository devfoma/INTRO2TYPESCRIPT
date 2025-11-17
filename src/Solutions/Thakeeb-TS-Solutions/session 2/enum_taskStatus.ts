enum TaskStatus {
  pending = "pending",
  inProgress = "in progress",
  completed = "completed",
  failed = "failed",
}
function checkTaskStatus(status: TaskStatus){
  if (TaskStatus.pending === "pending") {
    console.log("Task is currently pending.");
  } else if (TaskStatus.inProgress === "in progress") {
    console.log("Task is in progress.");
  } else if (TaskStatus.completed === "completed") {
    console.log("Task has been completed.");
  } else {
    console.log("Task has failed.");
  }
}
checkTaskStatus(TaskStatus.pending);