
var ControlTopAry = [
"../images/ni_RationalDotCom.gif", "http://www.rational.com", "Rational Home Page",
"../images/ni_RationalProducts.gif", "http://www.rational.com/products", "Rational Products",
"../images/ni_RDN.gif", "http://www.rational.net/rupcenter", "Rational Developer Network"];


if (document.layers)
{
	document.write ("<layer id=\"IconsOn\" name=\"IconsOn\" visibility=\"show\" top=\"1\">");
}
else
{
	document.write ("<div id=\"IconsOn\" style=\"position:absolute;top:1;visibility:show;\">");
}

document.write ("<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"right\" summary=\"control_strip\"><tr><td align=\"right\"><a href=\"javascript:void(null);\" onclick=\"MM_showHideLayers(\'IconsOn\',\'\',\'hide\');\"><img src=\"../images/ni_handle.gif\" width=\"13\" height=\"18\" border=\"0\" alt=\"Click on this handle to collapse the Online Properties Tab\" name=\"handle\" id=\"handle\" name=\"handle\" id=\"handle\" /></a>");


for (var i=0; i<ControlTopAry.length; i++) 
	{
var imgSrc = ControlTopAry[i];		
var href = ControlTopAry[++i];
var alt = ControlTopAry[++i];

document.write("<a href=\"" + href + "\" target=\"_blank\"><img src=\"" + imgSrc + "\" border=\"0\" alt=\"" + alt + "\" /></a>");
}



document.write ("</tr></table>");

if (document.layers)
{
	document.write ("</layer>");
}
else
{
	document.write ("</div>");
}