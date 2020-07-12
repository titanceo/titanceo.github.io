import {compileTemplate} from './lib/compileTemplate.js';
import {menu,subMenus} from './lib/data.js';

const ct = new compileTemplate();

ct.actionCompile('template_menu',menu,'menu')

window.showMenu = function(valor){
  ct.actionCompile('template_submenu',subMenus[valor],'submenu');
}

window.showContent = function(file){
  
  $.ajax({
    url: file,
    dataType: "html"
  }).done(function(html){
    document.getElementById('content').innerHTML=html;
  });
}

