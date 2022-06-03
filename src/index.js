import CoinService from './coin-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.css/styles.css';

function clearFields() {
  $('#current').val("");
  $('.showErrors').text("");
  $('.showRate').text("");
}

function getElements(response) {
  if (response.result === "success"); {
    $('.showRate').text(`The rate of exchange is ${response.conversion_rate}%`);
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
async function makeApiCall(rate) {
  const response = await CoinService.getExchange(rate);
  getElements(response);
}

$(document).ready(function() {
  $('#coinTotal').click(function() {
    let rate = $('#current').val();
    console.log(rate);
    clearFields();
  });
});