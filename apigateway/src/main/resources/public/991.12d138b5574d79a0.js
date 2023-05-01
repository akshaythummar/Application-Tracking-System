"use strict";(self.webpackChunkfinal_project_structure=self.webpackChunkfinal_project_structure||[]).push([[991],{6991:(bt,v,c)=>{c.r(v),c.d(v,{ManageApplicantModule:()=>ht});var s=c(6895),f=c(9299),y=c(397),r=c(4006),m=c(5412),t=c(4650),u=c(2555),g=c(4859),C=c(7957),h=c(3238),x=c(4144),d=c(9549),_=c(4385),A=c(1948);function O(n,i){if(1&n&&(t.TgZ(0,"div",15),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("Applicant Review : ",t.lcZ(2,1,e.data.firstname+" "+e.data.lastname),"")}}function F(n,i){1&n&&(t.TgZ(0,"div",15),t._uU(1,"Batch Review"),t.qZA())}function P(n,i){if(1&n&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function S(n,i){1&n&&(t.TgZ(0,"div",17)(1,"mat-radio-group",18)(2,"mat-label"),t._uU(3,"Save for future reference?"),t.qZA(),t.TgZ(4,"mat-radio-button",19),t._uU(5,"Yes"),t.qZA(),t.TgZ(6,"mat-radio-button",20),t._uU(7,"No"),t.qZA()()())}function N(n,i){if(1&n&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}let w=(()=>{class n{constructor(e,a,o){this.fb=e,this.data=a,this._aService=o,this.options=["Unsatisfactory","Below Expectation","Meets Expectation","Exceeds Expectation","Outstanding"],this.datePipe=new s.uU("en-US"),this.rejectionHide=!1,this.isSubmitForm=!1}rejectionToggle(e){this.rejectionHide="Rejected"===e}ngOnInit(){console.log("data",this.data),this.statuses=this._aService.getStatuses(),this.feedbackForm=this.fb.group({status:new r.NI("Pending",{validators:[r.kI.required]}),review:new r.NI("",{validators:[r.kI.required]}),futureRef:new r.NI("false"),end_date:new r.NI("")}),console.log(this.data)}submitFeedback(){if(this.isSubmitForm=!0,this.feedbackForm.value.end_date=this.datePipe.transform(new Date,"yyyy/mm/dd hh:mm:ss"),Array.isArray(this.data)){let e=[];this.data.forEach(o=>{e.push({id:o.id,trackingId:o.trackingId})}),this._aService.bulkFeedback({ids:e,data:this.feedbackForm.value})}else{let e=this.feedbackForm.value;e.tracking={tid:this.data.trackingId},e.id=this.data.id,this._aService.updateFeedback(e)}this.feedbackForm.reset()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(m.WI),t.Y36(u.d))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-feedback"]],decls:23,vars:8,consts:[["class","dialog-title",4,"ngIf","ngIfElse"],["bulkTitle",""],["mat-dialog-content","",1,"feedback-modal"],["action","",3,"formGroup"],["appearance","outline"],["formControlName","status",3,"valueChange"],[3,"value",4,"ngFor","ngForOf"],["class","radio-group",4,"ngIf"],["appearance","outline",1,"example-full-width"],["type","text","placeholder","Pick one","aria-label","Number","matInput","","formControlName","review",3,"matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],["align","end"],["mat-raised-button","","type","submit","mat-dialog-close","","color","primary",3,"disabled","click"],["mat-raised-button","","mat-dialog-close","","color","primary"],[1,"dialog-title"],[3,"value"],[1,"radio-group"],["aria-label","","formControlName","futureRef"],["color","primary","value","true"],["color","primary","value","false"]],template:function(e,a){if(1&e&&(t.YNc(0,O,3,3,"div",0),t.YNc(1,F,2,0,"ng-template",null,1,t.W1O),t.TgZ(3,"div",2)(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Status"),t.qZA(),t.TgZ(8,"mat-select",5),t.NdJ("valueChange",function(l){return a.rejectionToggle(l)}),t.YNc(9,P,2,2,"mat-option",6),t.qZA()(),t.YNc(10,S,8,0,"div",7),t.TgZ(11,"mat-form-field",8)(12,"mat-label"),t._uU(13,"Feedback"),t.qZA(),t._UZ(14,"input",9),t.TgZ(15,"mat-autocomplete",10,11),t.YNc(17,N,2,2,"mat-option",6),t.qZA()()(),t.TgZ(18,"mat-dialog-actions",12)(19,"button",13),t.NdJ("click",function(){return a.submitFeedback()}),t._uU(20,"Update"),t.qZA(),t.TgZ(21,"button",14),t._uU(22,"Cancel"),t.qZA()()()),2&e){const o=t.MAs(2),l=t.MAs(16);t.Q6J("ngIf",a.data.firstname)("ngIfElse",o),t.xp6(4),t.Q6J("formGroup",a.feedbackForm),t.xp6(5),t.Q6J("ngForOf",a.statuses),t.xp6(1),t.Q6J("ngIf",a.rejectionHide),t.xp6(4),t.Q6J("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",a.options),t.xp6(2),t.Q6J("disabled",a.feedbackForm.invalid)}},dependencies:[s.sg,s.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,g.lW,C.XC,h.ey,C.ZL,x.Nt,d.KE,d.hX,_.gD,A.VQ,A.U0,m.ZT,m.xY,m.H8,s.rS],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.dialog-title[_ngcontent-%COMP%]{display:flex;height:50px;padding-left:10px;align-items:center;font-size:large;font-weight:700;color:#fff;vertical-align:middle;background-color:var(--main-color)}.radio-group[_ngcontent-%COMP%]{margin-bottom:20px}.applicant_details[_ngcontent-%COMP%]{padding:10px;margin-bottom:25px}.action-btn-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}"]}),n})();var Z=c(6783);function I(n,i){if(1&n&&(t.TgZ(0,"div",12),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("Promote Applicant : ",t.lcZ(2,1,e.data.firstname+" "+e.data.lastname),"")}}function U(n,i){1&n&&(t.TgZ(0,"div",12),t._uU(1,"Batch Promotion"),t.qZA())}function J(n,i){if(1&n&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("value",e.stageName),t.xp6(1),t.Oqu(e.stageName)}}function q(n,i){if(1&n&&(t.ynx(0),t.YNc(1,J,2,2,"mat-option",13),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.isActive)}}function Q(n,i){if(1&n&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e.roundName),t.xp6(1),t.Oqu(e.roundName)}}let Y=(()=>{class n{constructor(e,a,o,l){this.fb=e,this.data=a,this._aService=o,this.iService=l,this.options=["Technical Skill","Communication Skills","Other"],this.customReason=!0,this.datePipe=new s.uU("en-US"),this.isFormSubmitted=!1}stageChange(e){if(this.stages){let a=this.stages.findIndex(o=>o.stageName===e);this.rounds=this.stages[a].rounds}}ngOnInit(){this.promotionForm=this.fb.group({stage:new r.NI("",{validators:[r.kI.required]}),round:new r.NI("",{validators:[r.kI.required]}),start_date:new r.NI(""),end_date:new r.NI(""),status:new r.NI("Pending")}),this.iService.getStages().subscribe(e=>this.stages=e),this.statuses=this._aService.getStatuses()}submitForm(){if(this.isFormSubmitted=!0,this.promotionForm.value.end_date=this.datePipe.transform(new Date,"yyyy/mm/dd hh:mm:ss"),this.promotionForm.value.start_date=this.datePipe.transform(new Date,"yyyy/mm/dd hh:mm:ss"),Array.isArray(this.data)){let e=[];this.data.forEach(o=>{e.push({trackingId:o.trackingId})}),this._aService.bulkPromote({ids:e,data:this.promotionForm.value})}else{let e=this.promotionForm.value;e.tracking={tid:this.data.trackingId},this._aService.promoteApplicant(e)}this.promotionForm.reset()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(m.WI),t.Y36(u.d),t.Y36(Z.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-promote"]],decls:20,vars:6,consts:[["class","dialog-title",4,"ngIf","ngIfElse"],["bulkTitle",""],["mat-dialog-content","",1,"feedback-modal"],["action","",3,"formGroup"],["appearance","outline"],["formControlName","stage",3,"valueChange"],[4,"ngFor","ngForOf"],["formControlName","round"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-raised-button","","type","submit","mat-dialog-close","","color","primary",3,"disabled","click"],["mat-raised-button","","mat-dialog-close","","color","primary"],[1,"dialog-title"],[3,"value",4,"ngIf"],[3,"value"]],template:function(e,a){if(1&e&&(t.YNc(0,I,3,3,"div",0),t.YNc(1,U,2,0,"ng-template",null,1,t.W1O),t.TgZ(3,"div",2)(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Select Stage to promote"),t.qZA(),t.TgZ(8,"mat-select",5),t.NdJ("valueChange",function(l){return a.stageChange(l)}),t.YNc(9,q,2,1,"ng-container",6),t.qZA()(),t.TgZ(10,"mat-form-field",4)(11,"mat-label"),t._uU(12,"Select Round to promote"),t.qZA(),t.TgZ(13,"mat-select",7),t.YNc(14,Q,2,2,"mat-option",8),t.qZA()()(),t.TgZ(15,"mat-dialog-actions",9)(16,"button",10),t.NdJ("click",function(){return a.submitForm()}),t._uU(17,"Submit"),t.qZA(),t.TgZ(18,"button",11),t._uU(19,"Cancel"),t.qZA()()()),2&e){const o=t.MAs(2);t.Q6J("ngIf",a.data.firstname)("ngIfElse",o),t.xp6(4),t.Q6J("formGroup",a.promotionForm),t.xp6(5),t.Q6J("ngForOf",a.stages),t.xp6(5),t.Q6J("ngForOf",a.rounds),t.xp6(2),t.Q6J("disabled",a.promotionForm.invalid)}},dependencies:[s.sg,s.O5,r._Y,r.JJ,r.JL,r.sg,r.u,g.lW,h.ey,d.KE,d.hX,_.gD,m.ZT,m.xY,m.H8,s.rS],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.dialog-title[_ngcontent-%COMP%]{display:flex;height:50px;padding-left:10px;align-items:center;font-size:large;font-weight:700;color:#fff;vertical-align:middle;background-color:var(--main-color)}.applicant_details[_ngcontent-%COMP%]{padding:10px;margin-bottom:25px}.action-btn-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}"]}),n})();var E=c(6990),T=c(7009),M=c(7392),$=c(6709),B=c(1572),k=c(266),b=c(4333),j=c(262),H=c(2843),L=c(4968),G=c(4004),R=c(8372);const K=["searchInput"];function z(n,i){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("value",e.stageName),t.xp6(1),t.Oqu(e.stageName)}}function W(n,i){if(1&n&&(t.ynx(0),t.YNc(1,z,2,2,"mat-option",18),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.isActive)}}function D(n,i){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e.roundName),t.xp6(1),t.hij(" ",e.roundName," ")}}function X(n,i){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function V(n,i){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("value",e.streamName),t.xp6(1),t.hij(" ",e.streamName," ")}}function tt(n,i){if(1&n&&(t.ynx(0),t.YNc(1,V,2,2,"mat-option",18),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.isActive)}}function et(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",8)(2,"mat-form-field",9)(3,"mat-label"),t._uU(4,"Stages"),t.qZA(),t.TgZ(5,"mat-select",10),t.NdJ("selectionChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.stageChange())}),t.YNc(6,W,2,1,"ng-container",11),t.qZA()(),t.TgZ(7,"mat-form-field",9)(8,"mat-label"),t._uU(9,"Rounds"),t.qZA(),t.TgZ(10,"mat-select",12),t.YNc(11,D,2,2,"mat-option",13),t.qZA()(),t.TgZ(12,"mat-form-field",9)(13,"mat-label"),t._uU(14,"status"),t.qZA(),t.TgZ(15,"mat-select",14),t.YNc(16,X,2,2,"mat-option",13),t.qZA()(),t.TgZ(17,"mat-form-field",9)(18,"mat-label"),t._uU(19,"Stream"),t.qZA(),t.TgZ(20,"mat-select",15),t.YNc(21,tt,2,1,"ng-container",11),t.qZA()()(),t.TgZ(22,"div",16)(23,"button",17),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.applyFilter())}),t._uU(24,"Apply"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.filterForm),t.xp6(5),t.Q6J("ngForOf",e.stages),t.xp6(5),t.Q6J("ngForOf",e.rounds),t.xp6(5),t.Q6J("ngForOf",e.statuses),t.xp6(5),t.Q6J("ngForOf",e.streams)}}let nt=(()=>{class n{constructor(e,a,o,l){this.fb=e,this._aService=a,this.iService=o,this.snackBar=l,this.statuses=[],this.filterHide=!1,this.searchEvent=new t.vpe}ngOnInit(){this.filterForm=this.fb.group({streams:new r.NI(""),statuses:new r.NI(""),stages:new r.NI(""),rounds:new r.NI("")}),this.searchForm=this.fb.group({query:new r.NI("")}),this.statuses=this._aService.getStatuses(),this.iService.getStages().subscribe(e=>this.stages=e),this._aService.getStreams().pipe((0,j.K)(e=>(console.log("error while fetching streams..",e),(0,H._)(()=>{this.snackBar.open("Could not fetch Streams","",{duration:2e3})})))).subscribe(e=>this.streams=e)}ngAfterViewInit(){(0,L.R)(this.searchInput.nativeElement,"keyup").pipe((0,G.U)(a=>a.target.value),(0,R.b)(250)).subscribe(a=>{a?this._aService.search(a).subscribe(o=>this.searchEvent.emit(o)):this.searchEvent.emit(null)})}stageChange(){if(this.stages){let e=this.stages.findIndex(a=>a.stageName===this.filterForm.value.stages);this.rounds=this.stages[e].rounds}}openFilter(){this.filterHide=!this.filterHide,this.filterForm.reset(),this._aService.getData(1),this.searchForm.reset(),this.searchEvent.emit(null)}applyFilter(){console.log(this.filterForm.value);let e="/",a=this.filterForm.value.stages,o=this.filterForm.value.statuses,l=this.filterForm.value.streams,p=this.filterForm.value.rounds;if(a&&o&&l&&p)e+=`get/${a}/${o}/${l}/${p}`;else if(a&&o&&l)e+=`get/${a}/${o}/${l}`;else if(a&&l&&p)e+=`${a}/${l}/${p}`;else if(o&&l&&p)e+=`gets/${o}/${l}/${p}`;else if(a&&l)e+=`get/${a}/${l}`;else if(o&&l)e+=`${o}/${l}`;else{if(!l)return void this.snackBar.open("Invalid Filter","",{duration:2e3});e+=`get/${l}`}console.log(e),this._aService.applyFilter(e).subscribe(_t=>this.searchEvent.emit(_t))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(u.d),t.Y36(Z.Z),t.Y36(T.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-bar"]],viewQuery:function(e,a){if(1&e&&t.Gf(K,5),2&e){let o;t.iGM(o=t.CRH())&&(a.searchInput=o.first)}},outputs:{searchEvent:"searchEvent"},decls:10,vars:2,consts:[[1,"search-container"],["action","",1,"search-form",3,"formGroup"],["appearance","fill",1,"search-field"],["matInput","","placeholder","Search here","value","","formControlName","query"],["searchInput",""],["mat-raised-button","","matTooltip","Filter","ngClass","btn-purple","color","primary",1,"search-btn",3,"click"],["class","accordion-container",4,"ngIf"],[1,"accordion-container"],["action","",1,"filter-container",3,"formGroup"],["appearance","outline"],["formControlName","stages",3,"selectionChange"],[4,"ngFor","ngForOf"],["formControlName","rounds"],[3,"value",4,"ngFor","ngForOf"],["formControlName","statuses"],["formControlName","streams"],[1,"apply-btn"],["mat-raised-button","","color","primary","ngClass","btn-purple",3,"click"],[3,"value",4,"ngIf"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"form",1)(2,"mat-form-field",2),t._UZ(3,"input",3,4),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){return a.openFilter()}),t.TgZ(6,"span")(7,"mat-icon"),t._uU(8,"filter_list"),t.qZA()()()()(),t.YNc(9,et,25,5,"div",6)),2&e&&(t.xp6(1),t.Q6J("formGroup",a.searchForm),t.xp6(8),t.Q6J("ngIf",a.filterHide))},dependencies:[s.mk,s.sg,s.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,g.lW,M.Hw,h.ey,x.Nt,d.KE,d.hX,_.gD,k.gM],styles:[".btn-purple[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.profile-image[_ngcontent-%COMP%]{height:2.5rem}body[_ngcontent-%COMP%]{background-color:#f6f9ff}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none}.form-control-underlined[_ngcontent-%COMP%]{border-width:0;border-bottom-width:1px;border-radius:0;padding-left:0}button[_ngcontent-%COMP%]:focus{box-shadow:none}button[_ngcontent-%COMP%]{margin-right:5px}td[_ngcontent-%COMP%]{vertical-align:center}.search-form[_ngcontent-%COMP%]{width:100%;display:flex;margin:5px}mat-form-field[_ngcontent-%COMP%]{width:100%}.search-input[_ngcontent-%COMP%]{width:100%;border:none;padding-left:5px;border:2px solid grey;border-radius:5px;height:45px}.search-container[_ngcontent-%COMP%]{margin:10px}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:max-content}.filter-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:20px;margin-top:15px}mat-icon[_ngcontent-%COMP%]{display:inline;vertical-align:middle}.apply-btn[_ngcontent-%COMP%]{display:flex;justify-content:end}.accordion-container[_ngcontent-%COMP%]{margin:25px}.checkbox-label[_ngcontent-%COMP%]{margin-bottom:0}.mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 24px!important}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:10px}.btn-purple[_ngcontent-%COMP%]{background-color:var(--main-color)!important}.search-btn[_ngcontent-%COMP%]{margin-left:15px;height:56px}button[_ngcontent-%COMP%]{font-size:1em;font-weight:700;height:48px}"]}),n})(),at=(()=>{class n{transform(e,...a){switch(e){case"Pending":a[0].style.color="orange";break;case"Test Cleared":a[0].style.color="rgba(5, 94, 189, 0.941)";break;case"Offered":a[0].style.color="green";break;case"Rejected":a[0].style.color="red";break;case"On Hold":a[0].style.color="brown";break;case"BackedOut":a[0].style.color="grey"}return e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"color",type:n,pure:!0}),n})();function ot(n,i){1&n&&t._UZ(0,"mat-spinner")}function it(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.feedbackDialog(o._checkedArr))}),t._uU(1,"Bulk Review"),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e._checkedArr.length<1)}}function rt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.nextRound(o._checkedArr))}),t._uU(1,"Bulk Promote"),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e._checkedArr.length<1)}}function lt(n,i){1&n&&(t.TgZ(0,"li",26),t._uU(1,"No Data Found"),t.qZA())}function ct(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li",27)(1,"div",28)(2,"span")(3,"mat-checkbox",29),t.NdJ("change",function(o){t.CHM(e);const l=t.oxw(2);return t.KtG(l.toggle(o))}),t.qZA()()(),t.TgZ(4,"div",15),t._uU(5),t.qZA(),t.TgZ(6,"div",30)(7,"a",31),t._uU(8),t.ALo(9,"titlecase"),t.qZA()(),t.TgZ(10,"div",32),t._uU(11),t.ALo(12,"uppercase"),t.qZA(),t.TgZ(13,"div",33),t._uU(14),t.qZA(),t.TgZ(15,"div",34),t._uU(16),t.qZA(),t.TgZ(17,"div",35,36),t._uU(19),t.ALo(20,"color"),t.qZA(),t.TgZ(21,"div",37)(22,"button",38),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.nextRound(l))}),t.TgZ(23,"mat-icon"),t._uU(24,"forward"),t.qZA()(),t.TgZ(25,"button",39),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.feedbackDialog(l))}),t.TgZ(26,"mat-icon"),t._uU(27,"comment"),t.qZA()()()()}if(2&n){const e=i.$implicit,a=i.index,o=t.MAs(18);t.xp6(3),t.Q6J("value",e),t.xp6(2),t.Oqu(a+1),t.xp6(2),t.MGl("routerLink","profile/",e.uid,""),t.xp6(1),t.Oqu(t.lcZ(9,9,e.firstname+" "+e.lastname)),t.xp6(3),t.Oqu(t.lcZ(12,11,e.stream)),t.xp6(3),t.Oqu(e.stage),t.xp6(2),t.Oqu(e.round),t.xp6(3),t.Oqu(t.xi3(20,13,e.status,o)),t.xp6(3),t.Q6J("disabled","Test Cleared"!==e.status)}}const st=function(n,i){return{itemsPerPage:10,currentPage:n,totalItems:i}};function pt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"li",13)(2,"div",14),t._uU(3,"select"),t.qZA(),t.TgZ(4,"div",15),t._uU(5,"Sr No."),t.qZA(),t.TgZ(6,"div",16),t._uU(7,"Name"),t.qZA(),t.TgZ(8,"div",17),t._uU(9,"Stream"),t.qZA(),t.TgZ(10,"div",18),t._uU(11,"Stage"),t.qZA(),t.TgZ(12,"div",19),t._uU(13,"Round"),t.qZA(),t.TgZ(14,"div",20),t._uU(15,"Status"),t.qZA(),t.TgZ(16,"div",21),t._uU(17,"Action"),t.qZA()(),t.YNc(18,lt,2,0,"li",22),t.YNc(19,ct,28,16,"li",23),t.ALo(20,"paginate"),t.TgZ(21,"li",24)(22,"pagination-controls",25),t.NdJ("pageChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.pageChangeEvent(o))}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(18),t.Q6J("ngIf",e.dataSource.length<1),t.xp6(1),t.Q6J("ngForOf",t.xi3(20,2,e.dataSource,t.WLB(5,st,e.p,e.total)))}}function mt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li",27)(1,"div",40),t._uU(2),t.qZA(),t.TgZ(3,"div",30),t._uU(4),t.ALo(5,"titlecase"),t.qZA(),t.TgZ(6,"div",32),t._uU(7),t.ALo(8,"uppercase"),t.qZA(),t.TgZ(9,"div",41)(10,"button",42),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.addToProcess(l))}),t.TgZ(11,"mat-icon"),t._uU(12,"add"),t.qZA()()()()}if(2&n){const e=i.$implicit,a=i.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(t.lcZ(5,4,e.firstname+" "+e.lastname)),t.xp6(3),t.Oqu(t.lcZ(8,6,e.stream)),t.xp6(3),t.Q6J("id",e.id)}}function dt(n,i){if(1&n&&(t.TgZ(0,"div",12)(1,"li",13)(2,"div",15),t._uU(3,"Sr No."),t.qZA(),t.TgZ(4,"div",16),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"div",17),t._uU(7,"Stream"),t.qZA(),t.TgZ(8,"div",20),t._uU(9,"Action"),t.qZA()(),t.YNc(10,mt,13,8,"li",23),t.qZA()),2&n){const e=t.oxw();t.xp6(10),t.Q6J("ngForOf",e.dataSource2)}}const gt=[{path:"",component:(()=>{class n{constructor(e,a,o,l){this._aService=e,this.dialog=a,this.authService=o,this.snackbar=l,this.displayedColumns=["select","id","name","stream","stage","status","action"],this.isLoading=!0,this.dataSource=[],this.dataSource2=[],this._checkedArr=[],this.visibleFlag=!1,this.newapplicantsFlag=!1,this.btnLabel="Fresh Applicants",this.p=1,this.total=0}ngOnInit(){this.getAllApplicants()}getAllApplicants(){this._aService.getData(this.p).subscribe({next:e=>{this.dataSource=e.content,this.total=e.totalElements,this.isLoading=!1},error:e=>{console.log(e),this.snackbar.open("Something Went Wrong...","",{duration:2e3})}})}toggle(e){if(e.checked)this._checkedArr.push(e.source.value);else if(!e.checked){const a=this._checkedArr.indexOf(e.source.value);this._checkedArr.splice(a,1)}}feedbackDialog(e){e||(e={applicantId:this._checkedArr});let a=this.dialog.open(w,{panelClass:"pane",data:e,width:"40%",backdropClass:"back-drop",disableClose:!0});a.afterClosed().subscribe(o=>{this.getAllApplicants(),this._checkedArr=[],a.componentInstance.isSubmitForm&&(this.getAllApplicants(),a.componentInstance.isSubmitForm=!1)})}nextRound(e){let a=this.dialog.open(Y,{panelClass:"pane",data:e,width:"40%",backdropClass:"back-drop",disableClose:!0});a.afterClosed().subscribe(o=>{this.getAllApplicants(),this._checkedArr=[],a.componentInstance.isFormSubmitted&&(this.getAllApplicants(),a.componentInstance.isFormSubmitted=!1)})}search(e){e?this.dataSource=e:this.getAllApplicants()}getNewApplicants(){0==this.newapplicantsFlag?(this.newapplicantsFlag=!0,this._aService.getNewApplicants().subscribe({next:e=>{this.dataSource2=e},error:e=>{console.log(e),this.snackbar.open("Something Went Wrong","ok",{duration:2e3})}}),this.btnLabel="Active Applicants"):(this.newapplicantsFlag=!1,this.getAllApplicants(),this.btnLabel="Fresh Applicants")}pageChangeEvent(e){this.p=e,console.log(e),this.getAllApplicants()}addToProcess(e){let a={stage:"Screening Stage",status:"Pending",round:"Screening Test"};a.tracking={recruiter:{uid:this.authService.getUserId()},user:{uid:e.id}},this._aService.addToProcess(a),this.getNewApplicants()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.d),t.Y36(m.uw),t.Y36(E.e),t.Y36(T.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-manage-applicant"]],decls:17,vars:6,consts:[[1,"container"],[1,"heading"],[4,"ngIf"],[3,"searchEvent"],[1,"button-container"],["mat-raised-button","","color","primary","style","margin-right: 1rem;","ngClass","header",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","primary","ngClass","header",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","primary","ngClass","header",2,"margin-left","1rem",3,"click"],[1,"main-container"],["class","mat-elevation-z8 table-container",4,"ngIf"],["mat-raised-button","","color","primary","ngClass","header",2,"margin-right","1rem",3,"disabled","click"],["mat-raised-button","","color","primary","ngClass","header",3,"disabled","click"],[1,"mat-elevation-z8","table-container"],[1,"table-header","li"],[1,"col","col-1"],[1,"col","col-2"],[1,"col","col-3"],[1,"col","col-4"],[1,"col","col-5"],[1,"col","col-6"],[1,"col","col-7"],[1,"col","col-8"],["class","table-row li err-display",4,"ngIf"],["class","table-row li",4,"ngFor","ngForOf"],[1,"li","col","align-end"],[3,"pageChange"],[1,"table-row","li","err-display"],[1,"table-row","li"],["data-label","select",1,"col","col-1"],["color","primary",2,"vertical-align","top",3,"value","change"],["data-label","Name",1,"col","col-3"],[2,"text-decoration","none","color","black",3,"routerLink"],["data-label","stream",1,"col","col-4"],["data-label","stage",1,"col","col-5"],["data-label","stage",1,"col","col-6"],["data-label","Status",1,"col","col-7"],["status",""],["data-label","actions",1,"col","col-8"],["mat-icon-button","","matTooltip","Promote",3,"disabled","click"],["mat-icon-button","","matTooltip","Review",3,"click"],["data-label","SrNo",1,"col","col-2"],["data-label","actions",1,"col","col-7"],["mat-icon-button","","matTooltip","promote",3,"id","click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2")(3,"span"),t._uU(4,"admin >"),t.qZA(),t._uU(5," Manage Applicants"),t.qZA(),t._UZ(6,"hr"),t.qZA(),t.YNc(7,ot,1,0,"mat-spinner",2),t.TgZ(8,"app-search-bar",3),t.NdJ("searchEvent",function(l){return a.search(l)}),t.qZA(),t.TgZ(9,"div",4),t.YNc(10,it,2,1,"button",5),t.YNc(11,rt,2,1,"button",6),t.TgZ(12,"button",7),t.NdJ("click",function(){return a.getNewApplicants()}),t._uU(13),t.qZA()(),t.TgZ(14,"div",8),t.YNc(15,pt,23,8,"div",9),t.YNc(16,dt,11,1,"div",9),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("ngIf",a.isLoading),t.xp6(3),t.Q6J("ngIf",!a.newapplicantsFlag),t.xp6(1),t.Q6J("ngIf",!a.newapplicantsFlag),t.xp6(2),t.Oqu(a.btnLabel),t.xp6(2),t.Q6J("ngIf",!a.newapplicantsFlag),t.xp6(1),t.Q6J("ngIf",a.newapplicantsFlag))},dependencies:[s.mk,s.sg,s.O5,f.rH,g.lW,g.RK,M.Hw,$.oG,B.Ou,k.gM,b.LS,nt,s.gd,s.rS,b._s,at],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.main-container[_ngcontent-%COMP%]{padding-bottom:2rem}.container[_ngcontent-%COMP%]{padding:0rem 2rem 3rem;background-color:var(--background-color);height:100vh;position:relative;overflow:hidden}mat-spinner[_ngcontent-%COMP%]{position:absolute;left:45%;top:40%}.table-container[_ngcontent-%COMP%]{border-radius:10px;margin-bottom:1rem}@media (max-width: 600px){.mobile-label[_ngcontent-%COMP%]{width:80px;display:inline-block;font-weight:700}.mat-header-row[_ngcontent-%COMP%]{display:none}.mat-row[_ngcontent-%COMP%]{flex-direction:column;align-items:start;padding:8px 24px}table[_ngcontent-%COMP%]{overflow:scroll}button[_ngcontent-%COMP%]{margin:.5rem}}.header[_ngcontent-%COMP%]{background-color:var(--main-color)!important;color:#fff!important}.filter-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-top:15px}.accordion-container[_ngcontent-%COMP%]{display:block}.apply-btn[_ngcontent-%COMP%]{display:flex;justify-content:end}.li[_ngcontent-%COMP%]{border-radius:3px;display:flex;justify-content:space-between}.table-header[_ngcontent-%COMP%]{background-color:var(--main-color);color:#fff;font-size:1em;text-transform:capitalize;letter-spacing:.03em;padding:.8rem;border-radius:10px 10px 0 0;font-weight:700}.table-row[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 9px #0000001a}.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%]{flex-basis:5%}.col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%]{flex-basis:15%}.col[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px;text-align:center;font-size:1em;justify-content:space-evenly}.button-container[_ngcontent-%COMP%]{display:flex;margin:2rem 0rem;justify-content:flex-end}.heading[_ngcontent-%COMP%]{margin-bottom:2rem}h2[_ngcontent-%COMP%]{margin:1rem;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;color:#012970}span[_ngcontent-%COMP%]{color:#6a6969}button[_ngcontent-%COMP%]{font-size:1em;font-weight:700;height:48px}.err-display[_ngcontent-%COMP%]{color:red;font-weight:500;padding:1rem;padding-left:45%}"]}),n})()},{path:"profile/:id",component:y.d}];let ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.Bz.forChild(gt),f.Bz]}),n})();var ft=c(8807);let ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,ut,r.UX,ft.Q,b.JX]}),n})()}}]);