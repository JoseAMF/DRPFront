!function(){function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[307],{32778:function(i,n,r){"use strict";r.r(n),r.d(n,{HomeModule:function(){return T}});var o=r(38583),s=r(99763),c=r(37716),a=r(86665),l=r(12859),u=r(50016),m=function(t){return[t]};function p(t,i){if(1&t&&(c.TgZ(0,"nb-list-item",2),c._uU(1),c.qZA()),2&t){var e=i.$implicit,n=c.oxw();c.Q6J("routerLink",c.VKq(2,m,n.URL+e.id)),c.xp6(1),c.hij(" ",e.id+" - "+e.sri," ")}}var f=function(){var i=function(){function i(e){t(this,i),this.claimService=e,this.Title="",this.StatusFilter="",this.URL="",this.Claims=[]}return e(i,[{key:"ngOnInit",value:function(){var t=this;0===this.Claims.length&&this.claimService.list().subscribe(function(i){t.Claims=t.StatusFilter?i.filter(function(i){return i.status===t.StatusFilter}):i})}}]),i}();return i.\u0275fac=function(t){return new(t||i)(c.Y36(l.Uk))},i.\u0275cmp=c.Xpm({type:i,selectors:[["ngx-claim-list-component"]],inputs:{Title:"Title",StatusFilter:"StatusFilter",URL:"URL",Claims:"Claims"},decls:5,vars:3,consts:[[3,"size"],["routerLinkActive","router-link-active","style","cursor: pointer;",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","router-link-active",2,"cursor","pointer",3,"routerLink"]],template:function(t,i){1&t&&(c.TgZ(0,"nb-card",0),c.TgZ(1,"nb-card-header"),c._uU(2),c.qZA(),c.TgZ(3,"nb-list"),c.YNc(4,p,2,4,"nb-list-item",1),c.qZA(),c.qZA()),2&t&&(c.Q6J("size","medium"),c.xp6(2),c.Oqu(i.Title),c.xp6(2),c.Q6J("ngForOf",i.Claims))},directives:[u.Asz,u.ndF,u.zP_,o.sg,u.qBV,s.Od,s.rH],styles:[""]}),i}();function v(t,i){1&t&&(c.TgZ(0,"div",2),c._UZ(1,"ngx-claim-list-component",3),c.qZA()),2&t&&(c.xp6(1),c.Q6J("Title","Pendente Cota\xe7\xe3o")("URL","/Claim/budget/")("StatusFilter","Em Cadastro"))}function d(t,i){1&t&&(c.TgZ(0,"div",2),c._UZ(1,"ngx-claim-list-component",3),c.qZA()),2&t&&(c.xp6(1),c.Q6J("Title","Pendente Aprova\xe7\xe3o")("URL","/Claim/approve/")("StatusFilter","Pendente Aprova\xe7\xe3o"))}function h(t,i){1&t&&(c.TgZ(0,"div",2),c._UZ(1,"ngx-claim-list-component",3),c.qZA()),2&t&&(c.xp6(1),c.Q6J("Title","Reprovados")("URL","/Claim/budget/")("StatusFilter","Reprovado"))}function g(t,i){1&t&&(c.TgZ(0,"div",2),c._UZ(1,"ngx-claim-list-component",3),c.qZA()),2&t&&(c.xp6(1),c.Q6J("Title","Pendente Compensa\xe7\xe3o")("URL","/Claim/compensate/")("StatusFilter","Aprovado"))}var C,L,Z=[{path:"",component:(C=function(){function i(e){t(this,i),this.nbAuthService=e,this.permissionLevel=""}return e(i,[{key:"ngOnInit",value:function(){var t=this;this.nbAuthService.getToken().subscribe(function(i){t.setPermissions(i)})}},{key:"setPermissions",value:function(t){var i=t.getPayload();i["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"].includes("Gerencia")?this.permissionLevel="Gerencia":i["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"].includes("Compras")?this.permissionLevel="Compras":i["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"].includes("Orcamentario")&&(this.permissionLevel="Orcamentario")}}]),i}(),C.\u0275fac=function(t){return new(t||C)(c.Y36(a._o))},C.\u0275cmp=c.Xpm({type:C,selectors:[["ng-component"]],decls:5,vars:4,consts:[[1,"row"],["class","col-12 col-md-4",4,"ngIf"],[1,"col-12","col-md-4"],[3,"Title","URL","StatusFilter"]],template:function(t,i){1&t&&(c.TgZ(0,"div",0),c.YNc(1,v,2,3,"div",1),c.YNc(2,d,2,3,"div",1),c.YNc(3,h,2,3,"div",1),c.YNc(4,g,2,3,"div",1),c.qZA()),2&t&&(c.xp6(1),c.Q6J("ngIf","Compras"===i.permissionLevel),c.xp6(1),c.Q6J("ngIf","Gerencia"===i.permissionLevel),c.xp6(1),c.Q6J("ngIf","Compras"===i.permissionLevel),c.xp6(1),c.Q6J("ngIf","Compras"===i.permissionLevel))},directives:[o.O5,f],styles:[""]}),C)}],b=function(){var i=function i(){t(this,i)};return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[s.Bz.forChild(Z)],s.Bz]}),i}(),y=r(65108),A=function(){var i=function i(){t(this,i)};return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[o.ez,u.zyh,u.COg,s.Bz]]}),i}(),T=((L=function i(){t(this,i)}).\u0275fac=function(t){return new(t||L)},L.\u0275mod=c.oAB({type:L}),L.\u0275inj=c.cJS({imports:[[o.ez,b,y.m,A]]}),L)}}])}();