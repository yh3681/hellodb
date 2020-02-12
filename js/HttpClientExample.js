// Get all gists for user 'randyburden' and output the Url and Description of each gist to the JavaScript console
httpClient.get( 'https://api.github.com/users/randyburden/gists', null, function(xhr) {
  //console.log( JSON.parse( xhr.responseText ) );
  var gists = JSON.parse( xhr.responseText );
  var list = [];
  for( var i = 0; i < gists.length; i++ ) {
    list.push( { Url: gists[i].html_url, Description: gists[i].description } );
  }
  console.log( list );
});