//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\barse\b/g, "forehead");
	v = v.replace(/\bass\b/g, "forehead");
	v = v.replace(/\bcunt\b/g, "cat");
	v = v.replace(/\bfuck\b/g, "hug");
	v = v.replace(/\bshit\b/g, "poop");
	v = v.replace(/\bdick\b/g, "cat");
	v = v.replace(/\bArse\b/g, "Forehead");
	v = v.replace(/\bAss\b/g, "Forehead");
	v = v.replace(/\bCunt\b/g, "Cat");
	v = v.replace(/\bFuck\b/g, "Hug");
	v = v.replace(/\bShit\b/g, "Poop");
	v = v.replace(/\bDick\b/g, "Cat");
	
	textNode.nodeValue = v;
}