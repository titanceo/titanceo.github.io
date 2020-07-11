import {compileTemplate} from './lib/compileTemplate.js';
import {menu} from './lib/data.js';

const ct = new compileTemplate();

ct.actionCompile('template_menu',menu,'menu')