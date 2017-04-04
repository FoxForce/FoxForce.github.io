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

    document.getElementById('footer').innerHTML='<div class="container"> <div class="row"><div class="col-md-4"> <p class="text"> <strong>Get to Know Us</strong></p> <p class="text"><a href="#acerca">Who we are</a></p> <p class="text"> Our History </p> <p class="text"> <a href="organization.html">Our team <a/></p> </div><div class="col-md-4"><center> <img class="img-responsive" src="resources/footer_icon.png"><br> <img class="img-responsive" src="resources/footer_text.png"><br> <p class="text"><a href="mailto:foxforce@cetys.edu.mx"> foxforce@cetys.edu.mx </a></p></center></div> <div class="col-md-4 text-align-right"> <p class="text"> <strong>Connect</strong></p> <p class="text"><a href="http://www.facebook.com/foxforcesae">facebook</a> </p> <p class="text"><a href="https://www.instagram.com/fox.force.aerodesign/">instagram</a></p><p class="text"> <a href="#donate"> Donate</a> </p> </div></div>';
    
}

function moveToText(){
    $('html body').animate({scrollTop: $('#acerca').offset().top }, 1000);
}
