(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[446],{78446:function(e,t,r){"use strict";r.r(t),r.d(t,{CostCenterModule:function(){return A}});var n=r(38583),i=r(99763),s=r(3679),o=r(12859),c=r(85685),u=r(37716),a=r(50016),l=r(36987);const d=function(){return["../list"]};function m(e,t){1&e&&(u.TgZ(0,"a",12),u._UZ(1,"nb-icon",13),u.qZA()),2&e&&u.Q6J("routerLink",u.DdM(1,d))}let p=(()=>{class e extends c.e{constructor(e,t){super(e,new o.wG),this.injector=e,this.ccService=t}buildResourceForm(){this.resourceForm=this.formBuilder.group({id:[0],costCenterName:[null,s.kI.required],isActive:[!0,s.kI.required]})}getServiceCall(){return this.ccService.get.bind(this.ccService)}putServiceCall(){return this.ccService.update.bind(this.ccService)}postServiceCall(){return this.ccService.add.bind(this.ccService)}jsonDataToResourceFn(e){return Object.assign(new o.wG,e)}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.zs3),u.Y36(o.ht))},e.\u0275cmp=u.Xpm({type:e,selectors:[["ng-component"]],features:[u.qOj],decls:24,vars:8,consts:[[3,"formGroup","submit"],[1,"container"],["routerLinkActive","router-link-active",3,"routerLink",4,"ngIf"],[3,"errorList"],[1,"form-group","row"],["for","inputName",1,"label","col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","nbInput","","fullWidth","","id","inputName","placeholder","Nome","id","costCenterName","formControlName","costCenterName"],[1,"col-sm-3","label"],["id","isActive","formControlName","isActive","fullWidth","",3,"selected"],[3,"value"],["nbButton","","status","primary","type","submit",3,"disabled"],["routerLinkActive","router-link-active",3,"routerLink"],["icon","arrow-back"]],template:function(e,t){1&e&&(u.TgZ(0,"form",0),u.NdJ("submit",function(){return t.submitForm()}),u.TgZ(1,"div",1),u.TgZ(2,"nb-card"),u.TgZ(3,"nb-card-header"),u.YNc(4,m,2,2,"a",2),u._uU(5," Client Info"),u.qZA(),u.TgZ(6,"nb-card-body"),u._UZ(7,"ngx-page-alerts",3),u.TgZ(8,"div",4),u.TgZ(9,"label",5),u._uU(10,"Nome do projeto"),u.qZA(),u.TgZ(11,"div",6),u._UZ(12,"input",7),u.qZA(),u.qZA(),u.TgZ(13,"div",4),u.TgZ(14,"label",8),u._uU(15,"Status"),u.qZA(),u.TgZ(16,"div",6),u.TgZ(17,"nb-select",9),u.TgZ(18,"nb-option",10),u._uU(19,"Ativo"),u.qZA(),u.TgZ(20,"nb-option",10),u._uU(21,"Inativo"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(22,"button",11),u._uU(23),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.Q6J("formGroup",t.resourceForm),u.xp6(4),u.Q6J("ngIf",!t.isNew),u.xp6(3),u.Q6J("errorList",t.serverErrorMessages),u.xp6(10),u.Q6J("selected",!0),u.xp6(1),u.Q6J("value",!0),u.xp6(2),u.Q6J("value",!1),u.xp6(2),u.Q6J("disabled",t.resourceForm.invalid),u.xp6(1),u.Oqu(t.isNew?"Cadastrar":"Atualizar"))},directives:[s._Y,s.JL,s.sg,a.Asz,a.ndF,n.O5,a.yKW,l.d,a.h8i,s.Fj,s.JJ,s.u,a.rs,a.q51,a.DPz,i.yS,i.Od,a.fMN],styles:[""]}),e})();var g=r(8595),v=r(70419);const Z=[{path:"list",component:(()=>{class e extends g.d{constructor(e,t){super(e),this.injector=e,this.ccService=t,this.settings.columns={id:{title:"id",type:"number"},costCenterName:{title:"Nome do Centro de Custo",type:"string"},isActive:{title:"Ativo",type:"string"}}}getServiceCall(){return this.ccService.list.bind(this.ccService)}fetchId(e){return e.id}deleteServiceCall(){return this.ccService.delete.bind(this.ccService)}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.zs3),u.Y36(o.ht))},e.\u0275cmp=u.Xpm({type:e,selectors:[["ng-component"]],features:[u.qOj],decls:7,vars:3,consts:[[1,"container"],[3,"errorList","errorListChange"],[3,"settings","source","deleteConfirm","custom"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"nb-card"),u.TgZ(2,"nb-card-header"),u._uU(3,"Centros de Custo"),u.qZA(),u.TgZ(4,"nb-card-body"),u.TgZ(5,"ngx-page-alerts",1),u.NdJ("errorListChange",function(e){return t.serverErrorMessages=e}),u.qZA(),u.TgZ(6,"ng2-smart-table",2),u.NdJ("deleteConfirm",function(e){return t.deleteResource(e.data)})("custom",function(e){return t.onCustomAction(e)}),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(5),u.Q6J("errorList",t.serverErrorMessages),u.xp6(1),u.Q6J("settings",t.settings)("source",t.source))},directives:[a.Asz,a.ndF,a.yKW,l.d,v.T5],styles:[""]}),e})()},{path:"new",component:p},{path:":id",component:p}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[i.Bz.forChild(Z)],i.Bz]}),e})();var b=r(65108);let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[n.ez,f,b.m]]}),e})()}}]);