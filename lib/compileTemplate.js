class compileTemplate{

  constructor(){}

  actionCompile(idTemplate,data,idCompiled){
    const template = document.getElementById(idTemplate).innerHTML;
    const compile = Handlebars.compile(template);
    const compiledHTML = compile(data);
    document.getElementById(idCompiled).innerHTML=compiledHTML;
  }
}

export {compileTemplate};

