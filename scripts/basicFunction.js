setHeaderAndFooter();
    

document.getElementById('menu').onclick=function(){
    document.getElementById('menu-options').style.display= (document.getElementById('menu-options').style.display == 'none' ||
							    !document.getElementById('menu-options').hasAttribute('style') ? 'block' : 'none');
    return false;
};

function setHeaderAndFooter(){
    if(location.pathname.split('/').slice(-1) === 'index.html')
	document.getElementById('header').innerHTML='<nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand"  href="#"><img alt="Brand" src="resources/Fox_IconWhite.png" style="margin-left:2em;" width="70em" height="40em"></a><a href="#" id="menu"> <i class="fa fa-bars fa-3x menu"  aria-hidden="true"></i> </a><ul id="menu-options" class="nav navbar-nav"><li> <a class="text-uppercase" href="#acerca"> <big>S</big>obre <big>n</big>osotros </a> </li><li> <a class="text-uppercase" href="#contacto"> <big>C</big>ontáctanos </a> </li><li> <a class="text-uppercase" href="#donar"> <big>D</big>onar </a> </li></ul></div></div></nav>';
    else
	document.getElementById('header').innerHTML='<nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand"  href="index.html"><img alt="Brand" src="resources/Fox_IconWhite.png" style="margin-left:2em;" width="70em" height="40em"></a><a href="index.html" id="menu"> <i class="fa fa-bars fa-3x menu"  aria-hidden="true"></i> </a><ul id="menu-options" class="nav navbar-nav"><li> <a class="text-uppercase" href="index.html#acerca"> <big>S</big>obre <big>n</big>osotros </a> </li><li> <a class="text-uppercase" href="index.html#contacto"> <big>C</big>ontáctanos </a> </li><li> <a class="text-uppercase" href="#donar"> <big>D</big>onar </a> </li></ul></div></div></nav>';
    
    document.getElementById('footer').innerHTML='<div class="container"> <div class="row"><div class="col-md-6 text-align-left"> <div class="col-md-6 col-xs-6"><p> Proyecto de Aeroespacial de SAE Aerodesign</p><p>Ubicación: Mexicali, B.C. <p>Correo: foxforce@cetys.edu.mx</p> </div> <div class="col-md-6 col-xs-6"> <p class="big">Enlaces:</p><p><a href="index.html"> Inicio </a> </p> <p> Acerca </p> <p> Ediciones pasadas </p> <p> </p></div> </div> <div class="col-md-6 text-align-right"><a href="mailto:foxforce@cetys.edu.mx"> <i class="fa fa-envelope fa-3x"></i></a> <a href="http://www.facebook.com/foxforcesae"><i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a><a href="https://www.instagram.com/fox.force.aerodesign/"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a></div> </div></div>';
    
}
