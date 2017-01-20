document.getElementById('menu').onclick=function(){
    document.getElementById('menu-options').style.display= (document.getElementById('menu-options').style.display == 'none' ||
							    !document.getElementById('menu-options').hasAttribute('style') ? 'block' : 'none');
    return false;
};

setHeaderAndFooter();

function setHeaderAndFooter(){
    
    document.getElementById('footer').innerHTML='<a href="mailto:foxforce@cetys.edu.mx"> <i class="fa fa-envelope fa-4x"></i></a> <a href="http://www.facebook.com/foxforcesae"><i class="fa fa-facebook-official fa-4x" aria-hidden="true"></i></a><a href="https://www.instagram.com/fox.force.aerodesign/"><i class="fa fa-instagram fa-4x" aria-hidden="true"></i></a>';
    
}
