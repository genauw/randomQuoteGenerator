$(document).ready(function(){
  $("#localQuote").click (function(){         
    var combined = "";
    $.ajax({
      type: 'GET',
      url: 'quotes.json',
      dataType: 'json',
      mimeType: "application/json",
      success: function(json){
        var count = Object.keys(json).length;
        var randomInt = Math.floor(Math.random() * count);
        
        var quote = "\"" + json[randomInt].quote + "\"";
        var author = json[randomInt].author;
        combined = quote + '<br>' + ' - ' + author;
        $(".quote").html(combined);
        
        var tweetLink = "https://twitter.com/intent/tweet?" + "text=" + combined.replace("<br>", "") + "&via=genauw&hashtags=quotes,freecodecamp";
        $("#tweet").attr("href", tweetLink);
      },
      cache: false 
    });      
  });

  $("#randomQuote").click(function(){
    var quoteURL = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";    
    var combined = "";   
    $.ajax({
      type: 'GET',
      url: quoteURL,
      dataType: 'json',
      success: function(json){
        //console.log(json);
        //$('.quote').html(JSON.stringify(json));
        json.map(function(val){
          //var keys = Object.keys(val);                              
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
    var combined = "";
    $.getJSON(quoteURL, function(json){
      //console.log(json);
      //$('.quote').html(JSON.stringify(json));
      //console.log(json.quote);
      json.map(function(val){
        //var keys = Object.keys(val);
        var quote = "\"" + val.quote + "\"";
        var author = val.character;
        combined = quote + "<br>" + " - " + author;
        $(".quote").html(combined);
      });
      var tweetLink = "https://twitter.com/intent/tweet?" + "text=" + combined.replace("<br>", "") + "&via=genauw&hashtags=quotes,freecodecamp" ;
      $("#tweet").attr("href", tweetLink);
    });
  });
}); 
