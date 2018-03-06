var quotes = [
  {"quote": "To burn, a fire needed fuel",
"author": "Steven Erikson"},
{"quote": "Don't let anyone ever make you feel like you don't deserve what you want",
"author": "Heath Ledger"},
{"quote": "Without pain, without sacrifice, we would have nothing",
"author": "Tyler Durden"},
{"quote": "Do the best you can, with what you have, where you are",
"author": "Theodore Roosevelt"}
];

$(document).ready(function(){
  $("#changeQuote").click (function(){
    $(".quote").html("Button Clicked");
    //console.log(quotes[1]);
    console.log("Click worked");

    
    $.ajax({
      type: 'GET',
      url: 'quotes.json',
      dataType: 'json',
      mimeType: "application/json",
      success: function(val){
        console.log(val);
        $('.quote').html(JSON.stringify(val));
      },
      cache: false 
    });
    
    

    /*
    var quoteURL = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";    
    $.ajax({
      type: 'GET',
      url: quoteURL,
      dataType: 'json',
      success: function(val){
        console.log(val);
        $('.quote').html(JSON.stringify(val));
      },
      cache: false
    });
    */        
    /*
    var quoteURL = "https://thesimpsonsquoteapi.glitch.me/quotes";
    $.getJSON(quoteURL, function(val){
      console.log(val);
      $('.quote').html(JSON.stringify(val));
    });
    */    
  });
}); 
