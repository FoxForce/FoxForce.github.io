setHeaderAndFooter();

document.getElementById('menu').onclick=function(){
    document.getElementById('menu-options').style.display= (document.getElementById('menu-options').style.display == 'none' ||
							    !document.getElementById('menu-options').hasAttribute('style') ? 'block' : 'none');
    return false;
};


function setHeaderAndFooter(){
    var isMainPage = window.location.pathname.indexOf("index.html") !== -1 || window.location.pathname === "/";
    
    var navbarInnerHTML = '<nav class="navbar navbar-default"><a class="navbar-brand"  href="#"><img alt="Brand" src="resources/Fox_IconWhite.png" style="margin-left:2em;" width="70em" height="40em"></a><a href="' + (isMainPage?'#': 'index.html')+ '" id="menu"> <i class="fa fa-bars fa-3x menu"  aria-hidden="true"></i> </a> <ul id="menu-options" class="navbar-nav"><li> <a href="' + (isMainPage ? '#':'index.html')+ '" class="text-menu"> Home </a> </li> <li> <a href="history.html" class="text-menu"> History </a> </li> <li> <a href="organization.html" class="text-menu"> Team </a> </li> <li> <a href="' +(isMainPage? '#contacto':'index.html#contacto' ) +'" class="text-menu"> Contact </a> </li> <li> <a class="text-menu" href="'+(isMainPage? '#donar':'index.html#donar') +'"> Donate </a> </li></ul></div></nav>'
    
    var footerInnerHTML='<div class="container"> <div class="row"><div class="col-md-6"><p class="footer-social"><strong>Contact</strong> FoxForce@cetys.edu.mx</p><p id="footer-page-structure"> <a href="' + (isMainPage ? '#acerca' :'index.html#acerca')  + '">About</a> | <a href="history.html">History</a> |  <a href="organization.html">Team</a> | Sponsors </p> </div> <div class="col-md-6"><p class="footer-social"> <a href="https://www.facebook.com/foxforcesae">Facebook</a> | <a href="https://www.instagram.com/fox.force.aerodesign/">Instagram</a> | <strong><a id href="#">Donate</a></strong> </p></div></div></div>';
    
    document.getElementById('header').innerHTML= navbarInnerHTML;
    document.getElementById('footer').innerHTML=footerInnerHTML;
}

function moveToText(address){
    $('html,body').animate({scrollTop: $(address).offset().top }, 1000);
}
