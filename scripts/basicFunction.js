window.onresize=setHeader;
let horizontalMenuIsHidden=false;
setHeaderAndFooter();
setHeader();

function setHeader(){
    if(window.innerWidth<1024 && !horizontalMenuIsHidden){
	document.getElementsByClassName("pure-menu-list")[0].style.display="none";
	organizeItems("block");
	document.getElementsByClassName("fa-bars")[0].style.display="block";
	horizontalMenuIsHidden=true;
    }
    else if(horizontalMenuIsHidden){
	document.getElementsByClassName("pure-menu-list")[0].style.display="inline-block";
	organizeItems("inline-block");
	document.getElementsByClassName("fa-bars")[0].style.display="none";
	horizontalMenuIsHidden=false;
    }
}

function organizeItems(typeDisplay){
    let menuItems;

    document.getElementsByClassName("pure-menu-heading")[0].style.display=typeDisplay;
    menuItems=document.getElementsByClassName("pure-menu-item");
    for(c=0; c<menuItems.length; c++)
	menuItems[c].style.display=typeDisplay;
}

function displayOptions(){
    if(document.getElementsByClassName("pure-menu-list")[0].style.display=="none"){
	document.getElementsByClassName("pure-menu-list")[0].style.display="inline-block";
    }
    else{
	document.getElementsByClassName("pure-menu-list")[0].style.display="none";
    }
}

function setHeaderAndFooter(){
    document.getElementById('header').innerHTML='<div class="pure-menu pure-menu-horizontal pure-menu-fixed"><a class="pure-menu-heading" href="index.html">Fox Force</a><a onClick="displayOptions()"><i class="fa-menu fa fa-bars fa-2x" style="display:none" aria-hidden="true"></i></a><ul class="pure-menu-list"><li class="pure-menu-item"> <a class="pure-menu-link" href="about.html"> Acerca de Nosotros </a> </li><li class="pure-menu-item"> <a class="pure-menu-link" href="history.html"> Ediciones Previas </a> </li><li class="pure-menu-item"> <a class="pure-menu-link" href="sponsors.html"> Patrocinadores </a> </li><li class="pure-menu-item"> <a class="pure-menu-link" href="donate.html"> Donar </a> </li><li class="pure-menu-item"> <a class="pure-menu-link" href="contact.html"> Contactanos </a> </li></ul></div>';
    document.getElementById('footer').innerHTML='<p class="footer-text"> &middot; Encuentranos &middot; </p><center><a href="http://www.facebook.com/foxforcesae"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a><a href="https://github.com/FoxForce"> <i class="fa fa-github fa-2x" aria-hidden="true"></i></a><a href="https://www.instagram.com/fox.force.aerodesign/"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></center>';
}
