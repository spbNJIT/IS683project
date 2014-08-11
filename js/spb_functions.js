$(function() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
      icons: icons, collapsible: true
    });
    $( "#toggle" ).button().click(function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }
    });
});

function clicked2() {
	var user_choice = window.confirm('Sorry, user registration is currently disabled until further development.');
	if(user_choice==true) {
		window.location='index.html';  // you can also use element.submit() if your input type='submit' 
	} else {
		return false;
	}
}