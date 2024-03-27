// get input value by id 

function getInputFiledValue (inputId){
    const inputFieldValueElement = document.getElementById(inputId);
    const inputFieldValueElementString = inputFieldValueElement.value;
    const inputFieldValue = parseFloat(inputFieldValueElementString);
    inputFieldValueElement.value = '';
    return inputFieldValue;
}

function getTotalElementByid (elementId){
    const totalElement = document.getElementById(elementId);
    const totalElementString = totalElement.innerText;
    const totalAmount = parseFloat(totalElementString);
    return totalAmount;
    
}

function setAmountTotalbyId (elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}