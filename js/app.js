function getInputValue(moneyAmountId) {
    const getAmount = document.getElementById(moneyAmountId);
    const amount = parseFloat(getAmount.value)
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
    const incomeValue = getInputValue('income-value')
    const foodExpense = getInputValue('food-expense')
    const rentExpense = getInputValue('rent-expense')
    const clothesExpense = getInputValue('clothes-expense')

    const allExpense = calculateExpense(foodExpense, rentExpense, clothesExpense)
    document.getElementById('total-expense').innerText = allExpense

    const balance = calculateBalance(incomeValue, foodExpense, rentExpense, clothesExpense)
    document.getElementById('balance-value').innerText = balance
})
// Calculate Total Balance