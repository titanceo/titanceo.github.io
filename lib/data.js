var menuTypeScript ={
  submenu:[
    {
      label:'Types,Type Inference y Type keyword',
      file:"typeScript/types.html",
      tags:[""]
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