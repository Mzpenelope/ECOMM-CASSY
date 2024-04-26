/*
 * Scattered Photo and Video Gallery by 54ka
 * =================================================
 * 
 * ffka-sc-photo.js v2.48
 * https://www.54ka.org/apps/scattered-photo-and-video-gallery
 *
 * Scattered Photo Gallery by 54ka is licensed under the GPLv3 
 * http://choosealicense.com/licenses/gpl-3.0
 *
 * Copyright (c) 2021, www.54ka.org
*/

/////////////////////////////////////////////////////////////////
// Customise ////////////////////////////////////////////////////

// Image size - For the long side
var PhotoSize = 599;

// Border size - use 0 if you don't wanna image border
var BorderSize = 10;

// Photos Shadow - from 0 to 99
var PhotoShadow = 30;

// Fullscreen or limit in parent element
// true - Fullscreen - Use Browser size 
// false - Use element size
var Screen = true;

// Scattering type
// true - Internally 
// false - Externally
var Scattering = true;

// Scattered Variation - 1,2,3 or 4
// 1 - Scattered
// 2 - Straight 
// 3 - Scattered 3D 
// 4 - Straight 3D
var Arstr = 1;

// Photo info
// true - Show info 
// false - Hide info
var PhotoInfo = true;

// Info screen Design - 1,2 or 3
// 1 - Touched under the picture
// 2 - Below the photo
// 3 - Overlay on the photo
var Info_Style = 2;

// Dots Navigation
// true - Show Navigation 
// false - Hide Navigation
var ShowNavigation = true;

// Slideshow Settings ///////////////////////////////////////////

// Auto Slideshow
// true - Auto play slide show 
// false - Disable slide show
var AutoSlideShow = false;

// Slideshow time duration in seconds
var TimeDuration = 2;

// END Customise ////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////



// !!! Don't touch under this line !!! //////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
var fadeOutEl=document.getElementById("preload_overlay");fadeOutEl&&window.addEventListener("load",function(){var a=setInterval(function(){fadeOutEl.style.opacity||(fadeOutEl.style.opacity=1);0<fadeOutEl.style.opacity?fadeOutEl.style.opacity-=.1:(clearInterval(a),fadeOutEl.remove())},50)});var elmntWrp=document.getElementById("ffka_sc_wrap");
(function(){for(var a=[],c=elmntWrp.querySelectorAll("img"),b=0;b<c.length;b++)a.push({img:c[b].src,alt:c[b].alt,srcset:c[b].srcset});elmntWrp.innerHTML="";c=[];var f=1===window.Info_Style?"info_i":2===window.Info_Style?"info_ii":3===window.Info_Style?"info_iii":"info_hide";for(b=0;b<a.length;b++){var g=a[b].alt?'<div class="'+f+'"><span>'+a[b].alt+"</span></div>":"";elmntWrp.innerHTML+='<div class="photo" id="frame_'+b+'" srcset="'+(a[b].srcset?a[b].srcset:"")+'" onclick="image(this);"><div class="slide"><img class="photo_img" src="'+
a[b].img+'" alt="'+a[b].alt+'" >'+(window.PhotoInfo?g:"")+"</div></div>";c.push("frame_"+b)}sort(random([0,a.length]));var d=setInterval(function(){document.getElementById("frame_"+(b-1))&&(clearInterval(d),setTimeout(function(){imageFunction()},100*b))},100);"undefined"!==typeof AutoSlideShow&&AutoSlideShow&&slideShow(c)})();
function sort(a){var c=select(".photo"),b=[];for(d=0;d<c.length;d++)c[d].className=c[d].className.replace(/\s*selected_IMG\s*/," "),c[d].style.left="",c[d].style.top="",c[d].style.margin="",c[d].style.transform="rotate(0deg) scale(1)",c[d].style["-webkit-transform"]="rotate(0deg) scale(1)",b.push(c[d]);d=select("#frame_"+a);d.className+=" selected_IMG";d=b.splice(a,1)[0];a=d.getAttribute("srcset");addVideoFrame(a,d);window.Screen?(c=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight):(c=elmntWrp.offsetWidth,d=elmntWrp.offsetHeight);if(window.Scattering){a=c/c+window.PhotoSize/2;var f=d/d+window.PhotoSize/2,g=d;ffka_margin=-a/2+"px 0 0 "+-a/2+"px"}else a=c/c,f=d/d,g=d,ffka_margin=" ";for(var d=0;d<b.length;d++)if(ffka_x=Math.floor(Math.random()*(c-a))+a,ffka_y=Math.floor(Math.random()*(g-f))+f,Screen&&(ffka_x-=elmntWrp.offsetLeft,ffka_y-=elmntWrp.offsetTop),b[d].style.left=ffka_x+"px",b[d].style.top=
ffka_y+"px",b[d].style.margin=ffka_margin,1===window.Arstr)b[d].style.transform="rotate("+random([-150,150])+"deg) scale(0.7)",b[d].style["-webkit-transform"]="rotate("+random([-150,150])+"deg) scale(0.7)";else if(2===window.Arstr)b[d].style.transform="scale(0.7)",b[d].style["-webkit-transform"]="scale(0.7)";else if(3===window.Arstr)b[d].style.transform="rotate("+random([-150,150])+"deg) perspective("+random([300,600])+"px) rotateY("+random([10,65])+"deg) scale(0.7)",b[d].style["-webkit-transform"]=
"rotate("+random([-150,150])+"deg) perspective("+random([300,600])+"px) rotateY("+random([10,65])+"deg) scale(0.7)";else if(4===window.Arstr){var e=[-10,-20,-30,-40,-50,-60,10,20,30,40,50,60];e=e[Math.floor(Math.random()*e.length)];b[d].style.transform="perspective("+random([300,600])+"px) rotateY("+e+"deg) scale(0.7)";b[d].style["-webkit-transform"]="perspective("+random([300,600])+"px) rotateY("+e+"deg) scale(0.7)"}else b[d].style.transform="rotate("+random([-150,150])+"deg) scale(0.7)",b[d].style["-webkit-transform"]=
"rotate("+random([-150,150])+"deg) scale(0.7)"}function random(a){var c=Math.min(a[0],a[1]);return Math.floor(Math.random()*(Math.max(a[0],a[1])-c)+c)}
function imageFunction(){for(var a=document.getElementsByClassName("slide"),c=document.getElementsByClassName("photo_img"),b=0;b<c.length;b+=1){var f=c[b].clientWidth,g=c[b].clientHeight,d=window.PhotoSize,e=window.BorderSize,h=window.PhotoShadow;percentW=d/f;percentH=d/g;new_height=g*percentW;new_width=f*percentH;f>g?(a[b].setAttribute("style","width:"+(d+2*e)+"px; height:"+(new_height+2*e)+"px; left:"+(-d/2-e)+"px; top:"+(-new_height/2-e)+"px; box-shadow: 0 0 20px rgba(0,0,0,0."+h+");"),c[b].setAttribute("style",
"width:"+d+"px; height:auto; border: "+e+"px solid #fff;")):(a[b].setAttribute("style","width:"+(new_width+2*e)+"px; height:"+(d+2*e)+"px; left:"+(-new_width/2-e)+"px; top:"+(-d/2-e)+"px; box-shadow: 0 0 20px rgba(0,0,0,0."+h+");"),c[b].setAttribute("style","width: auto; height:"+d+"px; border: "+e+"px solid #fff;"))}a=window.BorderSize;c=window.Info_Style;f=1===c?document.getElementsByClassName("info_i"):3===c?document.getElementsByClassName("info_iii"):0;for(b=0;b<f.length;b+=1)1===c?(g=0===a?a=
10:0,f[b].setAttribute("style","padding:"+g+"px "+a+"px "+a+"px "+a+"px;")):3===c&&(0===a&&(a=10),f[b].setAttribute("style","margin:"+a+"px;"));!0===window.ShowNavigation&&navigationButtons();elmntWrp.setAttribute("style","opacity:1;")}function select(a){var c="."==a.substr(0,1)?"getElementsByClassName":"getElementById";return document[c](a.substr(1))}
function image(a){var c=a.getAttribute("srcset");addVideoFrame(c,a);c=a.className;var b=a.id.split("_")[1];return/selected_IMG/.test(c)?a.className=c:sort(b)}var similar_video_url;
function addVideoFrame(a,c){if(a!==similar_video_url){var b=document.getElementById("active_video");b&&b.remove();a&&(c.childNodes[0].innerHTML+='<iframe id="active_video" class="video" src="'+a+'"style="width: calc(100% - '+2*window.BorderSize+"px); height: calc(100% - "+2*window.BorderSize+"px); left: "+window.BorderSize+"px; top: "+window.BorderSize+'px; allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" allow="fullscreen" allowfullscreen"></iframe>');
similar_video_url=a}}function navigationButtons(){var a=document.getElementsByClassName("photo"),c=document.createElement("div");c.setAttribute("id","sc_nav");elmntWrp.appendChild(c);var b=document.createElement("div");c.appendChild(b);for(c=0;c<a.length;c++){var f=a[c].getAttribute("id");b.innerHTML+='<span onclick="slide(x='+f+');"></span>'}}function slide(a){a=a.getAttribute("id");document.getElementById(a).click()}
function slideShow(a){function c(){b++;b>a.length&&(b=1);$("#"+a[b-1]).trigger("click");setTimeout(c,1E3*window.TimeDuration)}var b=0;c()};


document.addEventListener("DOMContentLoaded", function () {
  var searchField = document.getElementById("searchField");
  var searchDropdown = document.getElementById("searchDropdown");

  // Toggle dropdown when search field is clicked
  searchField.addEventListener("click", function () {
    if (searchDropdown.style.display === "block") {
      searchDropdown.style.display = "none";
    } else {
      searchDropdown.style.display = "block";
    }
  });

  // Hide dropdown when clicking outside of it
  window.addEventListener("click", function (event) {
    if (
      event.target !== searchField &&
      event.target !== searchDropdown &&
      !searchDropdown.contains(event.target)
    ) {
      searchDropdown.style.display = "none";
    }
  });
});
