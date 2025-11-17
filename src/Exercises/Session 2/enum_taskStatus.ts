/*
Enums and Conditional Logic

### Scenario:
You are building a small task manager. Each task can have a status: Pending, InProgress, or Completed.
Use an enum to represent these statuses and write a function that prints a message based on the task’s status.

### Instructions:

Create an enum called TaskStatus.

Write a function checkStatus that takes the enum as a parameter.

Use a switch or if statement to display different messages.
*/
enum TaskStatus {
  Pending,
  InProgress,
  Completed,
}

function checkStatus(status: TaskStatus): void {
  switch (status) {
    case TaskStatus.Pending:
      console.log("Task is pending. Please start soon.");
      break;
    case TaskStatus.InProgress:
      console.log("Task is currently in progress...");
      break;
    case TaskStatus.Completed:
      console.log("Task has been completed successfully!");
      break;
    default:
      console.log("Unknown task status.");
  }
}


