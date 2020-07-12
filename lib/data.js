var menuTypeScript ={
  submenu:[
    {
      label:'Types',
      file:"typeScript/types.html",
      highlight:true,
      tags:["tipos","types"]
    },
    {
      label:'Decorators',
      file:"typeScript/decorators.html",
      highlight:true,
      tags:["decorators","extender"]
    }
  ]
}

var subMenus={
  typeScript:menuTypeScript
}

var menu = {
  menu:[
    {
      label:'TypeScript',
      icon:'merge_type',
      submenuString:"typeScript",
      submenuJSON:menuTypeScript
    },
    {
      label:'Patrones de diseño',
      icon:'design_services'
    }
  ]
}

export {menu,subMenus,menuTypeScript};