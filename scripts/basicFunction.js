window.onresize=setHeader;
let horizontalMenuIsHidden=false;
setHeader();

function setHeader(){
    if(window.innerWidth<1024 && !horizontalMenuIsHidden){
	console.log("hi");
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
    console.log(window.innerWidth);
}
function organizeItems(typeDisplay){
    let menuItems;
    document.getElementsByClassName("pure-menu-heading")[0].style.display=typeDisplay;
    menuItems=document.getElementsByClassName("pure-menu-item");
    for(c=0; c<menuItems.length; c++)
	menuItems[c].style.display=typeDisplay;
}

function displayOptions(){
    if(document.getElementsByClassName("pure-menu-list")[0].style.display=="none")
	document.getElementsByClassName("pure-menu-list")[0].style.display="inline-block";
    else
	document.getElementsByClassName("pure-menu-list")[0].style.display="none";
}
