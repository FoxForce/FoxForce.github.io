document.getElementById('menu').onclick=function(){
    document.getElementById('menu-options').style.display= (document.getElementById('menu-options').style.display == 'none' ? 'block' : 'none');
    return false;
};

setHeaderAndFooter();

function setHeaderAndFooter(){
    document.getElementById('footer').innerHTML='<center><a href="http://www.facebook.com/foxforcesae"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a><a href="https://github.com/FoxForce"> <i class="fa fa-github fa-2x" aria-hidden="true"></i></a><a href="https://www.instagram.com/fox.force.aerodesign/"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></center>';
}
