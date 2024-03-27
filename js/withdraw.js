document.getElementById('withdrawButton').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdrawInput');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount =parseFloat(withdrawFieldString);
    withdrawField.value = '';
    
    const withdrawElement = document.getElementById('withdraw-total');
    const preWithdrawElementString = withdrawElement.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawElementString);

    const withdrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawElement.innerText=withdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceString);

    const totalBalance = preBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText=totalBalance;

})