const loginArea = document.getElementById("login-area");
const loginBtn = document.getElementById("login");
const tranArea = document.getElementById("transaction-area")

const currentBalance = document.getElementById("currentBalance");
const currentDeposit = document.getElementById("currentDeposit");
const currentWithdraw = document.getElementById("currentWithdraw");

const depositAmount = document.getElementById("depositAmount");
const withdrawAmount = document.getElementById("withdrawAmount");

const addDeposit = document.getElementById("addDeposit");
const addWithdraw = document.getElementById("addWithdraw");



loginBtn.addEventListener("click", () => {
    loginArea.style.display = "none";
    tranArea.style.display = 'block';
});


let deposit = 0, withdraw = 0, total = +currentBalance.innerText;

console.log(currentBalance.innerText)


addDeposit.addEventListener("click", () => {
    deposit += +depositAmount.value
    total += +depositAmount.value

    currentDeposit.innerText = deposit
    currentBalance.innerText = total

    depositAmount.value = ''


});


addWithdraw.addEventListener("click", () => {


    if ((+withdrawAmount.value) < total) {
        withdraw += +withdrawAmount.value
        total -= +withdrawAmount.value
        currentWithdraw.innerText = withdraw
        currentBalance.innerText = total
        withdrawAmount.value = ''
    } else {
        withdrawAmount.value = ''
        return alert("Please enter withdraw amount less than Balance")

    }

});












