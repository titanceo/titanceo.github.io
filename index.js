import {compileTemplate} from './lib/compileTemplate.js';
import {menu,subMenus} from './lib/data.js';

const ct = new compileTemplate();

ct.actionCompile('template_menu',menu,'menu')

window.showMenu = function(valor){
  ct.actionCompile('template_submenu',subMenus[valor],'submenu');
}

window.showContent = function(file,highlight = true){
  
  $.ajax({
    url: file,
    dataType: "html"
  }).done(function(html){
    document.getElementById('content').innerHTML=html;
    if(highlight){
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  });
}

