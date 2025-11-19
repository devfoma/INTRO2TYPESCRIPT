type typeId = string | number;

function aliaseFuction(Id: typeId): typeId{
    return `Employee ID: E${Id}`
}

console.log(aliaseFuction(1234))