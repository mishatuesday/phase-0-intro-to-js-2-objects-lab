const employee = {
        name: "Sam",
        streetAddress: "123 Anyroad St"
};

function updateEmployeeWithKeyAndValue (obj, key, value) {
    const returnValue = {...obj};
    returnValue[key] = value;
    return returnValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey (obj, key) {
    const returnValue = {...obj};
    delete returnValue[key];
    return returnValue;
}

function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj[key];
    return obj;
}