// ## 3. Enums and Conditional Logic

// ### Scenario:
// You are building a small task manager. Each task can have a status: Pending, InProgress, or Completed.
// Use an enum to represent these statuses and write a function that prints a message based on the task’s status.

// ### Instructions:

// Create an enum called TaskStatus.

// Write a function checkStatus that takes the enum as a parameter.

// Use a switch or if statement to display different messages.

enum TaskStatus {
    Pending="Pending",
    InProgress="InProgress",
    Completed="Completed"
}
function checkStatus(status:TaskStatus){
    if (status===TaskStatus.Pending){
        console.log ("The task is pending")
    }else
        if (status===TaskStatus.InProgress){
            console.log("Task in progress")
        }else
            if (status===TaskStatus.Completed){
                console.log("done")
            }
}
checkStatus(TaskStatus.Pending)
checkStatus(TaskStatus.Completed)