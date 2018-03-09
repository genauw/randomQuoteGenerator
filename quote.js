/*
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
*/

$(document).ready(function(){
  $("#localQuote").click (function(){    
    var combined = "";    
    //$(".quote").html("Button Clicked");
    //console.log(quotes[1]);
    //console.log("Click worked");

    //local JSON call
    $.ajax({
      type: 'GET',
      url: 'quotes.json',
      dataType: 'json',
      mimeType: "application/json",
      success: function(json){
        console.log(json);
        $('.quote').html(JSON.stringify(json));
      },
      cache: false 
    });      
  });

  $("#randomQuote").click(function(){
    var quoteURL = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";    
    $.ajax({
      type: 'GET',
      url: quoteURL,
      dataType: 'json',
      success: function(json){
        //console.log(json);
        //$('.quote').html(JSON.stringify(json));
        json.map(function(val){
          var keys = Object.keys(val);                              
          var quote = "\"" + $(val.content).text() + "\"";
          var author = val.title;
          combined = quote + '<br>' + " - " + author;
          $('.quote').html(combined);
        });
        var tweetLink = "https://twitter.com/intent/tweet?" + "text=" + combined.replace("<br>","") + "&via=genauw&hashtags=quotes,freecodecamp";
        $("#tweet").attr("href",tweetLink);
      },
      cache: false
    });  
  });
  $("#simpsonsQuote").click(function(){
    var quoteURL = "https://thesimpsonsquoteapi.glitch.me/quotes";
    $.getJSON(quoteURL, function(json){
      console.log(json);
      $('.quote').html(JSON.stringify(json));
    });
  });
}); 
