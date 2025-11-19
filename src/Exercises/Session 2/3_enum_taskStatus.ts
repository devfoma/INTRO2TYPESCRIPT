enum taskStatus {
    Pending,
    InProgress,
    Completed,
}

function checkStatus(task: taskStatus): void{
    if (task === taskStatus.Pending){
        console.log('this task is pending')
    } if(task === taskStatus.InProgress){
         console.log("This task is incomplete")
    }if (task === taskStatus.Completed){
        console.log("This is complete")
    }
}