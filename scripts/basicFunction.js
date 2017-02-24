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

    document.getElementById('footer').innerHTML='<div class="container"> <div class="row"><div class="col-md-6 text-align-left"> <div class="col-md-6 col-xs-6"><p> Proyecto de Aeroespacial de SAE Aerodesign</p><p>Ubicación: Mexicali, B.C. <p>Correo: foxforce@cetys.edu.mx</p> </div> <div class="col-md-6 col-xs-6"> <p class="big">Enlaces:</p><p><a href="index.html"> Inicio </a> </p> <p> Acerca </p> <p> Ediciones pasadas </p> <p> </p></div> </div> <div class="col-md-6 text-align-right"><a href="mailto:foxforce@cetys.edu.mx"> <i class="fa fa-envelope fa-3x"></i></a> <a href="http://www.facebook.com/foxforcesae"><i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a><a href="https://www.instagram.com/fox.force.aerodesign/"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a></div> </div></div>';
    
}

function moveToText(){
    $('html body').animate({scrollTop: $('#acerca').offset().top }, 1000);
}
