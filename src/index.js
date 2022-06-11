import { getExchange } from './coin-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearFields() {
  $('#current').val("");
  $('.showErrors').text("");
  $('.showRate').text("");
}

function getElements(response, rate, usdAmount) {
  if (rate === "AUD") { 
    $('.showRate').text(`Your rate of exchange is ${(response.conversion_rates.AUD * usdAmount).toFixed(2)}`);
  } else if (rate === "MMK") {
    $('.showRate').text(`Your rate of exchange is ${(response.conversion_rates.MMK * usdAmount).toFixed(2)}`);
  } else if (rate === "MVR") {
    $('.showRate').text(`Your rate of exchange is ${(response.conversion_rates.MVR * usdAmount).toFixed(2)}`);
  } else if (rate === "THB") {
    $('.showRate').text(`Your rate of exchange is ${(response.conversion_rates.THB * usdAmount).toFixed(2)}`);
  } else if (rate === "UAH")
    $('.showRate').text(`Your rate of exchange is ${(response.conversion_rates.UAH * usdAmount).toFixed(2)}`);
} 
async function makeApiCall(rate, usdAmount) {
  const response = await getExchange();
  if (!response) {
    $(".error").html('<h3><em>There has been an error processing your request</em></h3>');
  } else {
    getElements(response, rate, usdAmount);
  }
}
$(document).ready(function() {
  $('#currencyForm').submit(function(event) {
    event.preventDefault();
    let rate = $('.otherCurrency').val();
    let usdAmount = parseInt($('#usdInput').val()); 
    makeApiCall(rate, usdAmount);
    clearFields();
  });
});

