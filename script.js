const buyButton = document.getElementById('buyButton');
const paymentNote = document.getElementById('paymentNote');

buyButton.addEventListener('click', (event) => {
  const paymentUrl = buyButton.dataset.paymentUrl.trim();
  if (!paymentUrl) {
    event.preventDefault();
    paymentNote.textContent = 'Checkout is not connected yet. Add your real payment URL in index.html.';
    paymentNote.scrollIntoView({behavior:'smooth', block:'center'});
  }
});
