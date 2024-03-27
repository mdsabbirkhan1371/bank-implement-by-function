document.getElementById('withdrawButton').addEventListener('click',function(){
    const newWithdrawAmount  = getInputFiledValue('withdrawInput');

    const preWithdrawTotal =getTotalElementByid('withdraw-total');
    const currentWithdrawTotal = preWithdrawTotal +newWithdrawAmount;
    setAmountTotalbyId('withdraw-total',currentWithdrawTotal);
    
    const preBalanceTotal = getTotalElementByid('balance-total');
    const currentBalanceTotal = preBalanceTotal -newWithdrawAmount;
    setAmountTotalbyId('balance-total',currentBalanceTotal)

})