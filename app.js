const tg = window.Telegram.WebApp;

tg.ready();

document.getElementById("user").innerText =
  tg.initDataUnsafe?.user
    ? "Hello, " + tg.initDataUnsafe.user.first_name
    : "Opened outside Telegram";

function connectWallet() {
  alert("TON Wallet connection coming soon");
}

function buyVND() {
  const amount = document.getElementById("amount").value;
  alert("Buy VND: " + amount);
}

function sellVND() {
  const amount = document.getElementById("amount").value;
  alert("Sell VND: " + amount);
}
