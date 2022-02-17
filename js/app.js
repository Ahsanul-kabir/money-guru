function getInputValue(moneyAmountId, isClearField) {
    const getAmount = document.getElementById(moneyAmountId);
    const amount = parseFloat(getAmount.value)
    if (isClearField == true) {
        getAmount.value = ''
    }
    return amount
}
// Take input

function calculateExpense(foodExpense, rentExpense, clothesExpense) {
    totalExpense = foodExpense + rentExpense + clothesExpense
    return totalExpense
}
// Calculate Expense

function calculateBalance(incomeValue, foodExpense, rentExpense, clothesExpense) {
    totalBalance = incomeValue - (foodExpense + rentExpense + clothesExpense)
    return totalBalance
}
// Calculate Balance

document.getElementById('calculate-total').addEventListener('click', function () {
    const incomeValue = getInputValue('income-value', false)
    const foodExpense = getInputValue('food-expense', false)
    const rentExpense = getInputValue('rent-expense', false)
    const clothesExpense = getInputValue('clothes-expense', false)

    const errorAlert = document.getElementById('error');
    const successAlert = document.getElementById('success');

    if (incomeValue >= 0 && foodExpense >= 0 && rentExpense >= 0 && clothesExpense >= 0) {
        const allExpense = calculateExpense(foodExpense, rentExpense, clothesExpense)
        const totalExpense = document.getElementById('total-expense')
        totalExpense.innerText = allExpense
        totalExpense.style.color = ''

        const balance = calculateBalance(incomeValue, foodExpense, rentExpense, clothesExpense)
        const balanceValue = document.getElementById('balance-value')
        balanceValue.innerText = balance
        balanceValue.style.color = ''

        if (allExpense > incomeValue) {
            alert('Expense More!!')
            totalExpense.innerText = 'You can not expense more from your income!!!'
            totalExpense.style.color = 'red'
            balanceValue.innerText = `${(-balance)}$ money need more!!!`
            balanceValue.style.color = 'red'
        }
        // balance upper case validation

        successAlert.style.display = 'block';
        return errorAlert.style.display = 'none';
        // check for valid input case
    }
    else if (incomeValue < 0 || foodExpense < 0 || rentExpense < 0 || clothesExpense < 0) {
        successAlert.style.display = 'none';
        return errorAlert.style.display = 'block';
    }    // check for negative input
    else {
        successAlert.style.display = 'none';
        return errorAlert.style.display = 'block';
    }    // check for string or etc
})
// Calculate Total Balance

document.getElementById('calculate-save-amount').addEventListener('click', function () {
    const incomeValue = getInputValue('income-value', true)
    const foodExpense = getInputValue('food-expense', true)
    const rentExpense = getInputValue('rent-expense', true)
    const clothesExpense = getInputValue('clothes-expense', true)

    const balance = calculateBalance(incomeValue, foodExpense, rentExpense, clothesExpense)

    const savePercentage = getInputValue('save-percentage') // save-percentage
    const saveAmount = incomeValue * (savePercentage / 100)
    if (saveAmount.length == 1) {
        saveAmount.toFixed(1)
    }
    const inputSaveAmount = document.getElementById('save-amount')
    inputSaveAmount.innerText = saveAmount
    inputSaveAmount.style.color = ''

    const remainingBalance = balance - saveAmount// remaining-balance
    if (remainingBalance.length == 1) {
        remainingBalance.toFixed(1)
    }
    const inputRemainingBalance = document.getElementById('remaining-balance')
    inputRemainingBalance.innerText = remainingBalance
    inputRemainingBalance.style.color = ''

    if (saveAmount > balance) {
        alert('Saving Not Possible!!')
        inputSaveAmount.innerText = "You can't save money because it's more from your balance!!!"
        inputSaveAmount.style.color = 'red'
        inputRemainingBalance.innerText = `At least ${(-remainingBalance)}$ money need more for saving!!!`
        inputRemainingBalance.style.color = 'red'
    }
    // balance upper case validation
})
// Calculate Save Amount