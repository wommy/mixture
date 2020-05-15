function noDiscriminate( obj ) {
    var r = obj;
    if (confirm("By continuing, you agree to not discriminate based on content.") == true) {
        open(r, "_blank");
    }
}

function toggle(obj) {
	var el = document.getElementById(obj);
	el.style.display = (el.style.display != 'none' ? 'none' : '' );
	document.getElementById('hamburger').style.visibility = (document.getElementById('hamburger').style.visibility != '' ? '' : 'hidden' );
}