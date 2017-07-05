console.log( 'js' );
var jokeQuestion;
var punchLine;
var whoseJoke;

$( document ).ready( function(){
  console.log( 'JQ' );
  displayJokes();
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    jokeQuestion = $('#questionIn').val();
    punchLine = $('#punchlineIn').val();
    whoseJoke = $('#whoseJokeIn').val();
    console.log(jokeQuestion);
    console.log(punchLine);
    console.log(whoseJoke);
    $('#outputDiv').empty();
    postJoke();
  }); // end addJokeButton on click
}); // end doc ready

function postJoke() {
$.ajax({
  type: 'POST',
  url: '/addjokes',
  data: { whoseJoke: whoseJoke,
          jokeQuestion: jokeQuestion,
          punchLine: punchLine},
  success: function(response) {
    console.log(response);
    displayJokes();
  }
});
}

function displayJokes() {
$.ajax({
  type: 'GET',
  url: '/terribleJokes',
  success: function(response) {
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      $('#outputDiv').append('<p>' + response[i].jokeQuestion +
      response[i].punchLine + '</p>','<p>' + response[i].whoseJoke + '</p>');
    }
  }
});
} //get jokes from server and append to DOM
