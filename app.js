const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;

if (user) {
  document.getElementById("user").innerText =
    `Welcome, ${user.first_name}`;
} else {
  document.getElementById("user").innerText =
    "Opened outside Telegram";
}

function buyVND() {
  const amount = document.getElementById("amount").value;
  if (!amount) {
    alert("Enter amount");
    return;
  }

  tg.showAlert("Buy request sent: " + amount + " VND");
}

function sellVND() {
  const amount = document.getElementById("amount").value;
  if (!amount) {
    alert("Enter amount");
    return;
  }

  tg.showAlert("Sell request sent: " + amount + " VND");
} function connectWallet() {tg.showAlert("TON Wallet connect coming next 🔗");
