<html>
<head>
<title>Maximum of Three Values</title>
<style type = "text/css">
 p { margin: 0; }
</style>
 <script>
 var input1 = window.prompt( "Enter first number", "0" );
var input2 = window.prompt( "Enter second number", "0" );
var input3 = window.prompt( "Enter third number", "0" );
var value1 = parseFloat( input1 );
var value2 = parseFloat( input2 );
var value3 = parseFloat( input3 );
var maxValue = maximum( value1, value2, value3 )
document.writeln( "<p>First number: " + value1 + "</p>" + "<p>Second number: " + value2 + "</p>" + "<p>Third number: " + value3 + "</p>" +
"<p>Maximum is: " + maxValue + "</p>" );
function maximum( x, y, z )
{
 return Math.max( x, Math.max( y, z ) );
} // end function maximum
</script>
</head><body></body>
</html>
