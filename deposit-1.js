document.getElementById('depositButton').addEventListener('click',function(){
    const newDepositAmount = getInputFiledValue('depositInput');
    const preDepositTotal = getTotalElementByid('deposit-total');
    const currentDepositTotal = preDepositTotal +newDepositAmount;
    setAmountTotalbyId('deposit-total',currentDepositTotal)

    const preBalanceTotal = getTotalElementByid('balance-total');
    const currentBalanceTotal= preBalanceTotal +newDepositAmount;
    setAmountTotalbyId('balance-total',currentBalanceTotal );
})