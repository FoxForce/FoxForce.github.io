setHeaderAndFooter();

document.getElementById('menu').onclick=function(){
    document.getElementById('menu-options').style.display= (document.getElementById('menu-options').style.display == 'none' ||
							    !document.getElementById('menu-options').hasAttribute('style') ? 'block' : 'none');
    return false;
};

function setHeaderAndFooter(){
    document.getElementById('header').innerHTML='<nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand"  href="#"><img alt="Brand" src="resources/Fox_IconWhite.png" style="margin-left:1em;" width="70em" height="40em"></a><a href="#" id="menu"> <i class="fa fa-bars fa-3x menu"  aria-hidden="true"></i> </a><ul id="menu-options" class="nav navbar-nav"><li> <a class="text-uppercase" href="#acerca"> <big>S</big>obre <big>n</big>osotros </a> </li><li> <a class="text-uppercase" href="#contacto"> <big>C</big>ontáctanos </a> </li><li> <a class="text-uppercase" href="#donar"> <big>D</big>onar </a> </li></ul></div></div></nav>';
    
    document.getElementById('footer').innerHTML='<a href="mailto:foxforce@cetys.edu.mx"> <i class="fa fa-envelope fa-4x"></i></a> <a href="http://www.facebook.com/foxforcesae"><i class="fa fa-facebook-official fa-4x" aria-hidden="true"></i></a><a href="https://www.instagram.com/fox.force.aerodesign/"><i class="fa fa-instagram fa-4x" aria-hidden="true"></i></a>';
    
}
