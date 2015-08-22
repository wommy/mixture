function toggle(obj) {
	var el = document.getElementById(obj);
	el.style.display = (el.style.display != 'none' ? 'none' : '' );
	document.getElementById('hamburger').style.visibility = (document.getElementById('hamburger').style.visibility != '' ? '' : 'hidden' );
}