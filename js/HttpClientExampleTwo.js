// Get all gists for user 'randyburden' and output the Url and Description of each gist to the JavaScript console
httpClient.get( 'http://www.vigshakri.com/PWA/test.php', null, function(xhr) {
  //console.log( JSON.parse( xhr.responseText ) );
  var gists = JSON.parse( xhr.responseText );
  var list = [];
  for( var i = 0; i < gists.length; i++ ) {
    list.push( { Url: gists[i].html_url, Description: gists[i].description } );
  }
  console.log( list );
});