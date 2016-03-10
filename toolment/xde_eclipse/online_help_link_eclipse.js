
function openHelpFile (book , fileName)
{
var port = "127.0.0.1:1768"
var prefix = 'http://'+ port + '/help/content/help:/com.rational.';
var postfix = '.help/';
var helpWindow = open(prefix + book + postfix + fileName + '.htm','rational_xde_online_help');
helpWindow.focus();
}

function ReferenceHelpTopic (topicname, book , fileName)
{
   document.write("<img src=\"../../images/helpbook.gif\"width=\"16\" height=\"16\">");
   document.write("<a href=\"JavaScript:openHelpFile('" + book+"','"+fileName+"');\">"+topicname+"</a>");
}
