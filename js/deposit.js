document.getElementById('depositButton').addEventListener('click',function(){
    const depositInputField = document.getElementById('depositInput');
    const depositInputFieldString =depositInputField.value;
    const newdepositAmount = parseFloat(depositInputFieldString);

    depositInputField.value = '';
    
    const depositElement=document.getElementById('deposit-total');
    const preDepositElementString = depositElement.innerText;
    const preDepositTotal = parseFloat(preDepositElementString);

    const currentDepositTotal = preDepositTotal +newdepositAmount;
    depositElement.innerText= currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceString = balanceTotalElement.innerText;
    const preBalanceTotal =parseFloat(preBalanceString);

    const totalBalance =preBalanceTotal+newdepositAmount;
    balanceTotalElement.innerText = totalBalance;
})