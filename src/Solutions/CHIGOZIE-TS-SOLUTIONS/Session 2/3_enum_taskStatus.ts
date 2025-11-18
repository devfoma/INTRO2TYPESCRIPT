// my solution 3
enum TaskStatus {
  Pending,
  InProgress,
  Completed,
}
function workOnTask(status: TaskStatus): void {
  if (status === TaskStatus.Pending) {
    console.log("Task is pending. Please your task will start soon.");
  } else if (status === TaskStatus.InProgress) {
    console.log("Task is currently in progress...");
  } else if (status === TaskStatus.Completed) {
    console.log("Task has been completed successfully!");
  }
}
workOnTask(TaskStatus.Pending);
workOnTask(TaskStatus.InProgress);
workOnTask(TaskStatus.Completed);
