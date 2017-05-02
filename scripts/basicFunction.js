setHeaderAndFooter();

document.getElementById('menu').onclick=function(){
    document.getElementById('menu-options').style.display= (document.getElementById('menu-options').style.display == 'none' ||
							    !document.getElementById('menu-options').hasAttribute('style') ? 'block' : 'none');
    return false;
};


function setHeaderAndFooter(){
    if(window.location.pathname.indexOf("index.html") !== -1 || window.location.pathname === "/")
	      document.getElementById('header').innerHTML='<nav class="navbar navbar-default"><center><a class="navbar-brand"  href="#"><img alt="Brand" src="resources/Fox_IconWhite.png" style="margin-left:2em;" width="70em" height="40em"></a><a href="#" id="menu"> <i class="fa fa-bars fa-3x menu"  aria-hidden="true"></i> </a> <ul id="menu-options" class=" navbar-nav"><li> <a href="#acerca" class="text-menu"> About Us </a> </li><li> <a href="organization.html" class="text-menu"> Our team </a> </li> <li> <a href="#contacto" class="text-menu"> Contact </a> </li> <li> <a class="text-menu-donate" href="#donar"> Donate </a> </li></ul></center></div></nav>';
    else
        document.getElementById('header').innerHTML='<nav class="navbar navbar-black"><center><a class="navbar-brand"  href="index.html"><img alt="Brand" src="resources/Fox_IconWhite.png" style="margin-left:2em;" width="70em" height="40em"></a><a href="#" id="menu"> <i class="fa fa-bars fa-3x menu"  aria-hidden="true"></i> </a> <ul id="menu-options-black" class=" navbar-nav"><li> <a href="index.html#acerca" class="text-menu-black"> About Us </a> </li><li> <a href="organization.html" class="text-menu-black"> Our team </a> </li> <li> <a href="index.html#contacto" class="text-menu-black"> Contact </a> </li> <li> <a class="text-menu-donate-black" href="index.html#donar"> Donate </a> </li></ul></center></div></nav>';

    document.getElementById('footer').innerHTML='<div class="container"> <div class="row"><div class="col-md-6"><center><p style="font-size:21px"><strong>Contact</strong> FoxForce@cetys.edu.mx</p><p style="font-size:14px"> About | History | Gallery | Team | Sponsors </p></center> </div> <div class="col-md-6"><center> <p></p><p style="font-size: 21px">Facebook | Instagram | <strong>Donate</strong></p> </center></div></div></div>';
    
}

function moveToText(){
    $('html,body').animate({scrollTop: $('#acerca').offset().top }, 1000);
}
