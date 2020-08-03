

var response = fetch('/secret').then(function(response) {
    return response.json();
  }).then(function(responseJson) {
    var clientSecret = responseJson.client_secret;
    // Call stripe.confirmCardPayment() with the client secret.
  });