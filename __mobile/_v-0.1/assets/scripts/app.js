// function toggle(obj) {

// our dollar function
function $() {
	var elements = new Array();
	for (var i = 0; i < arguments.length; i++) {
		var element = arguments[i];
		if (typeof element == 'string')
			element = document.getElementById(element);
		if (arguments.length == 1)
			return element;
		elements.push(element);
	}
	return elements;
}

// and now our improved toggler!
function toggle(obj) {
	var el = $(obj);
	el.style.display = (el.style.display != 'none' ? 'none' : '' );
	document.getElementById('hamburger').style.visibility = (document.getElementById('hamburger').style.visibility != '' ? '' : 'hidden' );
}

	// var el = document.getElementById(obj);
	// var mobileNav = document.getElementById("mobileNav");
	// el.style.display = (el.style.display != 'none' ? 'none' : 'block' );
	// mobileNav.style.background = (mobileNav.style.background != 'hsla(220, 75%, 45%, .6)' ? 'hsla(220, 75%, 45%, .6)' : 'none' );
	// var ham = document.getElementById('hamburger');
	// ham.style.left = (ham.style.left != '8rem' ? '8rem' : '0' );
	////alert("butts");
// }