

const form = document.getElementById('payment-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  // Form data (payment-form)
  const username = form.username.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const amount = form.amount.value;
  const currency = form.currency.value;

  // Create the Volt API request
  const url = 'https://api.volt.io/payment';
  const data = {
    api_username: 'ave637b436fadff01.86527928@volt.io',
    api_password: '%Ntg03f@$X4FC*96M&!l2JLq8Rj#1dh1',
    client_id: '00df623f-fb0c-4c5a-b2a7-88d469d08809',
    client_secret: '57999661-a43b-4fde-bf76-3d11e61f4b16',
    username,
    email,
    phone,
    amount,
    currency,
  };

  // Make the Volt API request
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    // Redirect to the link with the POST request
    const link = result.link;
    const redirectForm = document.createElement('form');
    redirectForm.method = 'post';
    redirectForm.action = link;
    document.body.appendChild(redirectForm);
    redirectForm.submit();
  })
  .catch(error => console.error(error));
});