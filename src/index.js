import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './giphy-services.js';
import GiphyRandomService from './giphy-random.js';

function clearFields() {
  $('#search').val("");
  
}

$(document).ready(function() {
  $('#Giphysearch').click(function() {
    
    let search = $('#search').val();
    clearFields();
    let promise = GiphyService.getGiphy(search);
    promise.then(function(response) {
      const body = JSON.parse(response);
      const giphylink=body.data[0].images.original.url;
      $('.showgiphy').attr("src",giphylink);
      
    }, function(error) {
      $('.showErrors').text(`there was a error to show your image:${error}`);
    });
  });
  $('#GiphyRandom').click(function() {
    let promiseRandom = GiphyRandomService.getRandomGiphy();
    promiseRandom.then(function(response){
      const body = JSON.parse(response);
     
      $('.showRandom').attr("src",body.data.images.original.url);
    },function(error){
      $('.showErrors').text(`there was a error to show your image:${error}`);
    });

  });  
});