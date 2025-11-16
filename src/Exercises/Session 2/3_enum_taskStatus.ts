// ## 3. Enums and Conditional Logic

// ### Scenario:
// You are building a small task manager. Each task can have a status: Pending, InProgress, or Completed.
// Use an enum to represent these statuses and write a function that prints a message based on the task’s status.

// ### Instructions:

// Create an enum called TaskStatus.

// Write a function checkStatus that takes the enum as a parameter.

// Use a switch or if statement to display different messages.

enum TaskStatus {
    Pending,
    InProgress,
    Completed,
}

const status = (Status: TaskStatus) => {
    if (Status === TaskStatus.Pending) {
        console.log('Pending');
    }else if(Status === TaskStatus.InProgress){
        console.log('In Progress');
    }else if(Status === TaskStatus.Completed){
        console.log('Completed');
        
    }
}

const Result: TaskStatus = TaskStatus.Completed;
status(Result);
