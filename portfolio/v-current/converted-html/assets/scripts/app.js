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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-66620717-1', 'auto');
ga('send', 'pageview');