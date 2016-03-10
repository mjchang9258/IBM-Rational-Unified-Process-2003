
function openHelpFile (book , fileName)
{
var prefix = 'ms-help://MS.VSCC/ratl-help/';
var postfix = '/';
var helpWindow = open(prefix + book + postfix + fileName + '.htm','rational_xde_online_help');
helpWindow.focus();
}

function ReferenceHelpTopic (topicname, book , fileName)
{
   document.write("<img src=\"../../images/helpbook.gif\"width=\"16\" height=\"16\">");
   document.write("<a href=\"JavaScript:openHelpFile('" + book+"','"+fileName+"');\">"+topicname+"</a>");
}
