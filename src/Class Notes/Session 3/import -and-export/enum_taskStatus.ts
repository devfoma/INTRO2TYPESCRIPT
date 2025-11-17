//   Session 2 - Task 3
//   Topic: Enums and Conditional Logic 
//  Description: Use enum to represent task status and print messages.

export enum TaskStatus {
  Pending,
  InProgress,
  Completed,
}

export function checkStatus(status: TaskStatus): void {
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

checkStatus(TaskStatus.Pending);
checkStatus(TaskStatus.Completed);