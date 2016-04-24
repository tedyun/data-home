/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","ojs/ojjquery-hammer","ojs/ojcomponentcore","ojs/ojvalidation","ojs/ojpopup"],function(b,f,a){var d={m6:1,FP:2,IP:3,nQ:4,oQ:5,pQ:6,a7:7,i7:8,FQ:9,GQ:10,l7:11},c={Ho:!0,Qi:d.FP},e={Ho:!0,Qi:d.IP},g={Ho:!0,Qi:d.pQ},h={Ho:!0,Qi:d.nQ},k={Ho:!0,Qi:d.oQ},l={Ho:!0,Qi:d.GQ};b.ya("oj.editableValue",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{disabled:!1,displayOptions:void 0,help:{definition:null,source:null},messagesCustom:void 0,messagesHidden:void 0,messagesShown:void 0,
required:!1,title:"",validators:void 0,value:void 0},getNodeBySubId:function(a){return this._super(a)},isValid:function(){void 0===this.TM&&(this.TM=this.Iea());return this.TM},refresh:function(){this._super();this.eV(!0)},reset:function(){this.RA();this.Tx(this.ej.a7);this.pL(this.options.value,!0)},showMessages:function(){var a=this.options.messagesHidden,c,d=!1,e,g=[];for(e=0;e<a.length;e++)d=!0,c=a[e],c instanceof b.Hc&&c.cda(),g.push(c.clone());d&&(this.kw("messagesHidden"),this.CD("messagesShown",
g))},validate:function(){return this.gc(this.jg(),null,this.rA)},Sv:{OP:1,k7:2,qQ:3},ej:d,rA:{er:!1,Qi:d.FQ},Yd:function(a,b){this._super(a,b)},_ComponentCreate:function(){var a=this.element,b=this.sR(a);this._super();this.options.messagesCustom=this.options.messagesCustom||[];this.options.messagesHidden=[];this.options.messagesShown=0<this.options.messagesCustom.length?this.Laa(this.options.messagesCustom):[];this.FG(a);this.Dp()&&(this.xn(this.options.placeholder),this.iI=!0);f.each(["required",
"title"],function(c,d){d in b&&a.removeAttr(d)})},nf:function(){this._super();this.uba();this.eV(!1);this.nC();this.Tx(this.ej.m6);0<this.options.messagesShown.length&&this.Wx("messagesShown",this.options.messagesShown,null,!0);this.widget().addClass("oj-form-control")},Ov:function(a){this.K9(a)},Cs:function(a){this.q9(a)},LQ:function(a,b){switch(a){case "disabled":this.MQ(a,e);break;case "converter":this.n7(a);break;case "displayOptions":this.nC();break;case "help":this.Yg(a,this.options[a]);break;
case "messagesCustom":this.Zha(b);break;case "placeholder":this.Kia(b);break;case "readOnly":this.MQ(a,h);break;case "required":this.o7(a);break;case "title":this.dma();break;case "translations":this.refresh();break;case "value":this.p7(a,b);break;case "validators":this.fs(a)}},n7:function(a){var b=!1;this.o9();this.fC()&&(b=!0);b?(this.SA(),this.ED(c)):this.Yg(a,this.options[a],!0)},MQ:function(a,b){var c=!this.options[a];this.Yg(a,this.options[a]);c&&this.L_(b)},o7:function(a){this.Yg(a,this.options[a]);
this.L_(g)},p7:function(a,b){var c=!1,d,e=b?b._context:null;e&&(c=e.originalEvent?!0:!1,d=e.Ho||!1);c||(d||this.RA(null),this.Tx(this.ej.l7));this.Yg(a,this.options[a],!0)},fs:function(){var a=!1;this.mS();this.fC()&&(a=!0);a&&(this.SA(),this.ED(l))},Cv:function(){var a=this.options.readOnly||!1;return this.options.disabled||a?!1:!0},_destroy:function(){this.widget();var a=this._super();this.RA(null,!0);this.kt().Rk();this.Rb&&null!=b.Components.Rf(this.Rb[0])&&this.Rb._ojLabel("destroy");return a},
Focus:function(){this.Xd().focus();return!0},_setOption:function(a,c,d){var e;e=!1;if("string"===typeof a&&void 0!==c)switch(a){case "messagesHidden":e=!0;break;case "messagesShown":e=!0;break;case "rawValue":e=!0}if(e)return b.r.error(a+" option cannot be set"),this;e=this._superApply(arguments);this.LQ(a,d);return e},Xd:function(){return this.element},b8:function(){var a=this.MV(this.element);if(null!==a&&0!==a.length)return a;a=this.element.prop("id");if(void 0!==a&&(a=f("label[for\x3d'"+a+"']"),
0!==a.length))return a;a=this.element.closest("[aria-labelledby]");return 0!==a.length&&(a=this.MV(a),null!==a&&0!==a.length)?a:null},qs:function(){return this.element.val()},_GetMessagingLauncherElement:function(){return this.Xd()},Sc:function(){this.Ic||(this.Ic=b.qb.getConverterInstance(this.options.converter));return this.Ic||null},Gv:function(){this.PX||(this.PX={});return this.PX},jg:function(){return this.Xd().val()},qR:function(){if(!this.Yv){var a=[],c=this.options.validators,d,e=!0,g=this.Gv(),
f=[],h,k;k=Object.keys(g);h=k.length;if(0<h){for(var l=0;l<h;l++)d=k[l],f.push(g[d]);a=a.concat(f)}if(c){f=[];for(k=0;k<c.length;k++)d=c[k],"object"===typeof d?(d.validate&&"function"===typeof d.validate||(e=!1),e||(h=d.type)&&"string"===typeof h&&((g=b.qa.Lr(h))?(d=b.yc.If({},d.options)||{},d.converter=d.converter||this.Sc(),d.label=d.label||this.jJ(),d=g.createValidator(d)):b.r.error("Unable to locate a validatorFactory for the requested type: "+h)),f.push(d)):b.r.error("Unable to parse the validator provided:"+
d);a=a.concat(f)}this.Yv=a}return this.Yv||[]},mS:function(){this.Yv&&(this.Yv.length=0);this.Yv=null;this.kt().update(this.vi(this.Ch.HQ))},o9:function(){this.Ic=null;this.kt().update(this.vi(this.Ch.EP))},ln:function(){return this.options.required},Sz:function(a){var b=this.jg();this.gc(b,a)},Es:function(a,b){var c={};c._context={originalEvent:b,Gc:!0,Va:!0};this.options.rawValue!==a&&this.option("rawValue",a,c)},Yg:function(a,b,c){switch(a){case "converter":b=this.options.value;this.pL(b,c);break;
case "disabled":this.a_("disabled",this.options.disabled);break;case "help":b=this.options.help.definition;c=this.options.help.source;a=this.RI();this.Rb&&(this.Rb._ojLabel("option","describedById",a),this.Rb._ojLabel("option","help",{definition:b,source:c}));break;case "required":this.a_("required",this.ln());this.BG(b);this.Rb&&(a=this.RI(),this.Rb._ojLabel("option",{describedById:a,ariaRequiredUnsupported:this.Gz()}),this.Rb._ojLabel("option","required",b));break;case "value":this.pL(b,c)}},BG:function(a){var b=
this.Xd();a&&b?b.attr("aria-required",a):b.removeAttr("aria-required")},Gz:function(){return!1},CG:function(){this.Rb&&this.Rb._ojLabel("refresh");this.Ic=this.pK=null;this.mS()},ni:function(a){var b=this.Xd();b.val()!==a&&b.val(a)},FG:function(a){"boolean"===typeof this.options.disabled&&a.prop("disabled",this.options.disabled)},xn:function(a){this.Xd().attr("placeholder",a)},qS:function(a){this.options.placeholder=a},Dp:function(){return this.options.placeholder},ZQ:function(){this.qS("");this.xn("")},
gc:function(a,c,d){var e=d&&"boolean"===typeof d.er?d.er:!0;if(void 0===a)return b.r.warn("Attempt to set a value of undefined"),!1;if(e&&a===this.Vda())b.r.Zy>b.r.an&&b.r.info("Validation skipped and value option not updated as submitted value '"+a.toString?a.toString():a+" same as previous.");else if(a=this.NS(a,c,d),void 0!==a&&this.isValid()){var g;d&&d._context&&(g=d._context);this.w1(a,c,d&&d.Qi,g);return!0}return!1},NS:function(a,c,d){var e=d&&d.Nqa?d.Nqa:this.Sv.OP,g=d&&d.Qi?d.Qi:this.ej.i7;
d=d&&d.Ho||!1;if(void 0===a)b.r.warn("Attempt to set a value of undefined");else if(this.Cv()){d||this.RA(c);this.h0(a);try{return this.Aka(a,e,g,c)}catch(f){}}else b.r.Zy>b.r.an&&b.r.info("Validation skipped and value option not set as component state does not  allow setting value. For example if the component is readonly or disabled.")},Dv:function(a,c,d){return"value"===a?b.b.nh(c,d):0===a.indexOf("messages")?this.$ha(c,d):this._superApply(arguments)},_GetDefaultStyleClass:function(){b.l.Yb();
return""},Ch:{Zu:1,IQ:2,EP:3,HQ:4,DQ:5},wn:{disabled:"oj-disabled",required:"oj-required"},RA:function(a,b){b?(this.options.messagesHidden=[],this.options.messagesShown=[],this.options.messagesCustom=[]):(this.kw("messagesHidden",a),this.kw("messagesShown",a),this.kw("messagesCustom",a))},SA:function(){var a=this.options.messagesShown,c=a.length,d;this.kw("messagesHidden");for(var e=c-1;0<=e;e--)d=a[e],d instanceof b.Hc&&a.splice(e,1);a.length!==c&&this.Wx("messagesShown",a,null,!0)},Wx:function(a,
b,c,d){var e={},g=0===b.length&&0===this.options[a].length;if(d||!g)e._context={originalEvent:c,Gc:!0,Va:!0},e.changed=d||!g,this.pka(),this.option(a,b,e),this.Bma()},kw:function(a,b){this.Wx(a,[],b)},Laa:function(a){var c,d=[],e;if(a&&0<a.length)for(e=0;e<a.length;e++)c=a[e],c instanceof b.X?d.push(c.clone()):(c=new b.X(c.summary,c.detail,c.severity),c=Object.freeze?Object.freeze(c):c,d.push(c));return d},uba:function(){if(this.Rb=this.b8()){var a=this.options.help.definition,b=this.options.help.source,
c=this.Gz(),d=this.a$(b,a,this.options.required,c);this.Rb._ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass()+"-label"},describedById:d,required:this.options.required,ariaRequiredUnsupported:c,help:{definition:a,source:b}})}},eV:function(a){var b=!1;a?(this.CG(),this.nC(),this.fC()&&(b=!0),this.SA(),b?this.ED(k):(this.ln()&&this.Tx(k.Qi),this.Yg("value",this.options.value,!0))):(this.Yg("value",this.options.value),this.Yg("required",this.options.required));this.Yg("disabled",this.options.disabled)},
zra:function(){return this.nZ},Vda:function(){void 0===this.UK&&(this.UK="");return this.UK},MV:function(a){a=a.attr("aria-labelledby");return void 0!==a?f("label[id\x3d'"+a+"']"):null},RI:function(){this.element.uniqueId();return this.element.prop("id")+"Icons"},a$:function(a,b,c,d){var e=this.RI();(a||b||c&&d)&&this.YG(e);return e},YG:function(a){this.Xd().each(function(){var b=f(this).attr("aria-describedby");b?f(this).attr("aria-describedby",b+" "+a):f(this).attr("aria-describedby",a)})},PB:function(){return this.options.messagesShown.concat(this.options.messagesHidden)},
jJ:function(){if(this.Rb)return this.Rb.text()},hX:function(){this.z1||(this.z1=new b.Ri(this.isValid(),this.PB()));return this.z1},hK:function(){return!b.X.isValid(this.PB())},fC:function(){return!this.isValid()&&0<this.options.messagesShown.length},hga:function(){for(var a=this.options.messagesShown,c,d,e=0;e<a.length;e++)c=a[e],c instanceof b.Hc&&c.rY()&&(d=d||[],d.push(c));return void 0===d?!1:!b.X.isValid(d)},nC:function(){var a=this.kt(),b=this._GetMessagingLauncherElement(),c=this.vi(this.Ch.Zu);
this.iI||this.ZQ();a.Co(b,c)},Zha:function(a){var c=this.options.messagesCustom,d=[],e,g,f=this.options.messagesShown,h=a?a._context:null;for(g=0;g<f.length;g++)e=f[g],e instanceof b.Hc&&e.rY()&&d.push(e);for(g=0;g<c.length;g++)d.push(c[g]);this.Wx("messagesShown",d,h?h.originalEvent:null,a&&a.changed)},Kia:function(a){a=(a&&a._context||{}).ipa?!1:!0;this.xn(this.options.placeholder);a?(this.iI=!0,this.Sc()&&this.nC()):this.iI=!1},bla:function(a){this.nZ=a},h0:function(a){this.UK=a},dma:function(){this.kt().update(this.vi(this.Ch.DQ))},
CD:function(a,b,c){var d,e,g;if("object"===typeof b&&Array.isArray(b))for(g=this.options[a],d=b.length,e=0;e<d;e++)g.push(b[e]);this.Wx(a,g,c,!0)},Bma:function(){this.kt().update(this.vi())},w1:function(a,b,c,d){d=d||{};b&&(d.originalEvent=b);switch(c){case this.ej.FP:case this.ej.IP:case this.ej.nQ:case this.ej.oQ:case this.ej.pQ:case this.ej.FQ:case this.ej.GQ:d.Gc=!0,d.Ho=!0}this.option({value:a},{_context:d})},pka:function(){this.TM=void 0},Iea:function(){var a=this.PB(),b=!0;a&&0!==a.length&&
(b=!this.hK());return b},dq:function(a){var c=a,d=this.Sc();d&&"object"===typeof d&&(d.format&&"function"===typeof d.format?c=d.format(a):b.r.Zy>b.r.an&&b.r.info("converter does not support the format method."));return c},kt:function(){this.Yp||(this.Yp=new b.Sa(this));return this.Yp},Rda:function(a){var b,c=[];b="";var d;this.ln()&&(b=this.nW(),b.getHint&&"function"===typeof b.getHint&&(b=b.getHint())&&c.push(b));for(d=0;d<a.length;d++)b=a[d],"object"===typeof b&&b.getHint&&"function"===typeof b.getHint&&
(b=b.getHint())&&c.push(b);return c},nW:function(){var a;a={};var c;null==this.pK&&(a=this.options.translations?this.options.translations.required||{}:{},c={hint:a.hint||null,label:this.jJ(),messageSummary:a.messageSummary||null,messageDetail:a.messageDetail||null},this.pK=(a=b.qa.Lr(b.cd.VALIDATOR_TYPE_REQUIRED))?a.createValidator(c):null);return this.pK},vi:function(a){var b={},c=this.Sc(),d="",e=[];a=a||this.Ch.IQ;if(a===this.Ch.Zu||a===this.Ch.IQ)e=this.PB(),this.hX().update(this.isValid(),e),
b.d6=this.hX();if(a===this.Ch.Zu||a===this.Ch.EP)c&&"object"===typeof c&&c.getHint&&"function"===typeof c.getHint&&(d=c.getHint()||""),b.i2=d;if(a===this.Ch.Zu||a===this.Ch.HQ)c=this.qR(),e=this.Rda(c)||[],b.Oqa=e;if(a===this.Ch.Zu||a===this.Ch.DQ)b.title=this.options.title||"";return b},$ha:function(a,c){var d=-1,e,g=!0,h=f.extend([],a),k=f.extend([],c);if(h.length!==k.length)return!1;f.each(h,function(a,c){c instanceof b.X?e=c:(e=new b.X(c.summary,c.detail,c.severity),e=Object.freeze?Object.freeze(e):
e);d=-1;f.each(k,function(a,b){e.Io(b)&&(d=a)});-1<d?k.splice(d,1):g=!1});return g},LC:function(a){var c=this.Sc(),d=a;c&&"object"===typeof c&&(c.parse&&"function"===typeof c.parse?d=c.parse(a):b.r.Zy>b.r.an&&b.r.info("converter does not support the parse method."));return d},aH:function(a,c){var d,e,g;a instanceof b.Oe||a instanceof b.Ah?(d=a.Fu(),b.l.Yc(d,b.X),g=d.severity,e=d.summary,d=d.detail):(g=b.X.Tb.ERROR,e=b.ha.A("oj-message.error"),d=a.message||b.ha.A("oj-converter.detail"));c.push({summary:e,
detail:d,severity:g})},hL:function(a,c,d){var e={},g=[],f=a.nx||[];e.context=c||0;e.display=d||b.Hc.Pr.GF;0===f.length&&this.aH(a,f);for(c=0;c<f.length;c++)a=f[c],g.push(this.hba(a.summary,a.detail,a.severity,e));return g||null},hba:function(a,c,d,e){a=new b.Hc(a,c,d,e);return a=Object.seal?Object.seal(a):a},pL:function(a,b){var c=a||this.options.value,d;d=this.nZ;(b||c!==d)&&this.zma(c)},a_:function(a,b){-1!==Object.keys(this.wn).indexOf(a)&&this.widget().toggleClass(this.wn[a],!!b)},Tx:function(a){if(this.Cv())try{this.y1(this.options.value,
this.Sv.qQ)}catch(c){(a=this.hL(c,a,b.Hc.Pr.sF))&&this.CD("messagesHidden",a)}else b.r.Zy>b.r.an&&b.r.info("Deferred validation skipped as component is readonly or disabled.")},Aka:function(a,b,c,d){var e=a;try{b===this.Sv.OP&&(e=this.LC(a)),this.y1(e,b===this.Sv.qQ)}catch(g){throw a=this.hL(g,c),this.CD("messagesShown",a,d),g;}return e},L_:function(a){var b=!0;this.fC()&&(b=!1);this.SA();b?this.ln()&&this.Tx(a.Qi):this.ED(a)},zma:function(a,b){var c,d;this.bla(a);c=a;try{c=this.dq(a)}catch(e){d=
this.hL(e),this.CD("messagesShown",d,b)}this.ni(c);c=this.jg();this.h0(c);this.Es(c,null)},ED:function(a){var b;b=this.NS(this.jg(),null,a);void 0===b||!this.isValid()&&this.hga()||this.w1(b,null,a.Qi)},y1:function(a,c){var d=this.qR(),e,g,f=[];if(this.ln()){e=this.nW();try{e.validate(b.Ea.trim(a))}catch(h){this.aH(h,f)}}if(!c)for(g=0;g<d.length;g++)if(e=d[g],"object"===typeof e)if(e.validate&&"function"===typeof e.validate)try{e.validate(a)}catch(k){this.aH(k,f)}else b.r.Zy>b.r.an&&b.r.info("validator does not support the validate method.");
if(0<f.length)throw d=Error(),d.nx=f,d;}},!0);b.Components.Nm({editableValue:{displayOptions:{messages:["inline"],converterHint:["placeholder","notewindow"],validatorHint:["notewindow"],title:["notewindow"]}}});b.ye={};o_("EditableValueUtils",b.ye,b);b.ye.hoa=function(a,b){var c,d,e={};if(a&&b)switch(b){case "disabled":c=void 0!==a.attr("disabled")?!!a.prop("disabled"):void 0;break;case "pattern":c=a.prop("pattern")||void 0;break;case "placeholder":c=a.prop("placeholder")||void 0;break;case "readonly":c=
void 0!==a.attr("readonly")?!!a.prop("readonly"):void 0;break;case "required":c=a.attr("required");d=a.prop("required");c=void 0!==c?void 0!==d?!!d:!!c:void 0;break;case "title":c=void 0!==a.attr("title")?a.prop("title"):void 0;break;case "value":c=a.val()||void 0;break;default:c=a.attr(b)||void 0}void 0!==c?(e.H2=!0,e.value=c):e.H2=!1;return e};b.ye.Xk=function(a,c,d,e){for(var g={},f=0;f<a.length;f++){var h,k;h=a[f];k=h.V;var l=h.option||k,v=h.bf,u=h.wc,y=d.element,B=d.options[l];void 0===c[l]&&
(B=d.options[l],k=b.ye.hoa(y,k),k.H2?(h=k.value,v&&("boolean"===typeof v?h=b.ye.ona(l,h):"function"===typeof v&&(h=v.call(d,h))),g[l]=h):void 0===B&&(g[l]=h.$D));v=l in g?g[l]:B;u&&"boolean"===typeof u&&b.ye.Mqa(l,v)}null!=e&&e(g);d.option(g,{_context:{Gc:!0,Va:!0}})};b.ye.Mqa=function(a,b){var c=!1;switch(a){case "required":null!==b&&"boolean"!==typeof b&&(c=!0);break;case "readOnly":case "disabled":null!==b&&"boolean"!==typeof b&&(c=!0)}if(c)throw"Option '"+a+"' has invalid value set: "+b;};b.ye.ona=
function(a,b){var c=b;switch(a){case "required":c=b?!0:!1}return c};b.Ae=function(a){this.Init(a)};b.Sa.OE(b.Sa.ed.iv,b.Ae);b.b.ga(b.Ae,b.mc,"oj.InlineMessagingStrategy");b.Ae.prototype.Br=function(a){b.Ae.q.Br.call(this,a);this.TZ()};b.Ae.prototype.gP=function(a){return a&&void 0!==a.d6?!0:!1};b.Ae.prototype.update=function(){b.Ae.q.update.call(this);this.TZ()};b.Ae.prototype.Rk=function(){this.s_();b.Ae.q.Rk.call(this)};b.Ae.prototype.TZ=function(){var a,b;a=this.Wi().widget();this.gV()||(this.Td=
f("\x3cdiv class\x3d'oj-messaging-inline-container'\x3e\x3c/div\x3e"),this.YG(this.Td),this.b$(this.Td),a.append(this.Td));(b=this.caa())?(a=this.Td[0],a.innerHTML="",a.innerHTML=b):this.s_()};b.Ae.prototype.s_=function(){this.gV()&&this.Td&&(this.Ija(this.Td),this.Jja(this.Td),this.Td.remove(),this.Td=null)};b.Ae.prototype.YG=function(a){var c=this.Zh();b.l.Yc(c,jQuery);b.l.Yc(a,jQuery);a=a.uniqueId().attr("id");var d=c.attr("aria-describedby"),d=d?d.split(/\s+/):[];d.push(a);d=f.trim(d.join(" "));
c.attr("aria-describedby",d)};b.Ae.prototype.b$=function(a){b.l.Yc(a,jQuery);a.attr("aria-live","polite")};b.Ae.prototype.Ija=function(a){var c=this.Zh();b.l.Yc(c,jQuery);b.l.Yc(a,jQuery);a=a.attr("id");var d=c.attr("aria-describedby"),d=d?d.split(/\s+/):[];a=f.inArray(a,d);-1!==a&&d.splice(a,1);(d=f.trim(d.join(" ")))?c.attr("aria-describedby",d):c.removeAttr("aria-describedby")};b.Ae.prototype.Jja=function(a){b.l.Yc(a,jQuery);a.removeAttr("aria-live")};b.Ae.prototype.caa=function(){var a=this.Wi().document[0];
return this.zQ()?this.pH(a):""};b.Ae.prototype.pH=function(a){var c;c="";var d=this.oF();this.xF()&&(c=this.pF(),c=b.Na.S1(a,c,d,!0));return c};b.Ae.prototype.gV=function(){return null!=this.Td};(function(){b.ya("oj._ojLabel",f.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3clabel\x3e",widgetEventPrefix:"oj",options:{ariaRequiredUnsupported:!1,describedById:null,help:{definition:null,source:null},required:!1,rootAttributes:null},va:{KS:"tooltipHelp",LS:"tooltipRequired"},widget:function(){return this.Kr},
refresh:function(){this._super();this.WZ();this.SZ()},Yd:function(a,b){this._super(a,b);this.Aaa();this.JH()},_ComponentCreate:function(){this._super();this.sD=this.eventNamespace+"TouchEatClick";this.iC=this.eventNamespace+"HelpDefPopup";this.Cn=b.v.Rd();this.Aca()},Ov:function(a){this.Ux=a.attr("class")},Cs:function(){this.Ux?this.element.attr("class",this.Ux):this.element.removeAttr("class")},Aca:function(){var a=this.options,b=a.required,a=a.ariaRequiredUnsupported,c=this.iZ(),d=null;this.Kr=
this.element.wrap(this.Iba()).closest(".oj-component");this.hia();c&&(d=this.ZH());this.oU(d);b&&(a?d.appendChild(this.$A()):this.element.before(this.$A()))},oU:function(a){var b=this.options,c=b.help.definition;if(b.help.source||c)this.Tga(a),this.k$(),this.O$()},Aaa:function(){var a=this.options.required;if(null!==a&&"boolean"!==typeof a)throw Error("Option 'required' has invalid value set: "+a);},JH:function(){var a=this.options;if(this.iZ()&&null==a.describedById)throw Error("ojLabel's describedById option must be set if help source is set\n\r\n      or (ariaRequiredUnsupported and required is set).");
},hia:function(){var a=this.element.attr("class"),b;if(a&&(a=a.split(/\s+/),null!=a)){b=a.length;for(var c=0;c<b;c++){var d=a[c];0<d.indexOf("-label")&&(this.Kr.addClass(d),this.element.removeClass(d))}}},ZH:function(){var a=this.Kr.find(".oj-label-group"),b=document.createElement("span");b.setAttribute("id",this.options.describedById);a.prepend(b);return b},Iba:function(){var a=this.options.rootAttributes,b,c;c="oj-label oj-component";a&&(b=a["class"]);null!==b&&(c=c+" "+b);a=document.createElement("div");
a.className=c;c=document.createElement("div");c.className="oj-label-group";a.appendChild(c);return a},$A:function(){var a=this.A(this.va.LS),b=document.createElement("span");b.className="oj-label-required-icon oj-component-icon";b.setAttribute("role","img");b.setAttribute("title",a);return b},lba:function(a,c){var d;if(this.FC()){d=document.createElement("a");d.setAttribute("tabindex","0");d.setAttribute("target","_blank");d.className="oj-label-help-icon-anchor oj-label-help-icon oj-component-icon oj-clickable-icon-nocontext";
if(c)try{b.v.Lqa(c),d.setAttribute("href",c)}catch(e){throw Error(e+". The source option ("+c+") is invalid.");}a?d.setAttribute("title",a):d.setAttribute("title",this.A(this.va.KS))}return d},O$:function(){var b;b=this.options.help.definition;var c,d,e;d=this.widget().find(".oj-label-help-icon-anchor");if(0!=d.length){c=b?b:this.A(this.va.KS);this.Xw?(e=f(document.getElementById(this.Xw)))&&e.text(c):(b=document.createElement("div"),b.style.display="none",e=f(b),e.uniqueId(),this.Xw=e.prop("id"),
e.text(c),c=document.getElementsByTagName("body")[0],c.appendChild(b));this.Cn&&(this.kB&&this.widget().off(this.sD),this.kB=function(){return!1});var g=this;this.KC||(this.KC=function(a){g.Sfa(a,e,d,!1)});if(this.Cn)d.fl({recognizers:[[a.Press,{time:750}]]}).on("press",this.KC);else d.on("focusin"+this.iC+" mousedown"+this.iC,this.KC);b={my:"start bottom",at:"end top",collision:"flipcenter",of:d};e.ojPopup({position:b,modality:"modeless"})}},Sfa:function(a,b,c,d){if("mousedown"===a.type)d=!0;else if("focusin"===
a.type&&d)d=!1;else{if(this.Cn)if("press"===a.type){var e=this.widget();e.on("click"+this.sD,this.kB);var g=this;b.on("ojclose",function(){e.off(g.sD);g.kB=null})}else b.off("ojclose");b.ojPopup("isOpen")||b.ojPopup("open",c)}},k$:function(){var a=this.element,b=this.options.help.definition,c;b&&(a.addClass("oj-label-help-def"),(c=a.attr("title"))?a.attr("title",c+" "+b):a.attr("title",b))},p_:function(a){this.Cn&&(this.widget().off(this.sD),this.kB=null,a.fl().off(this.iC));a.off(this.iC);this.KC=
null},q_:function(){var a;if(null!=this.Xw){if(a=f(document.getElementById(this.Xw)))a.ojPopup("destroy"),a.remove();this.Xw=null}},Tja:function(){this.element.removeClass("oj-label-help-def");this.element.attr("title","")},Tga:function(a){var b=this.options.help.source,c=this.options.help.definition;this.FC()&&f(a).prepend(this.lba(c,b))},iZ:function(){var a=this.options;return this.FC()||a.ariaRequiredUnsupported&&a.required},FC:function(){var a=this.options;return a.help.source||a.help.definition},
SZ:function(){var a,b;this.JH();this.Tja();a=this.Kr.find(".oj-label-help-icon");1===a.length&&(this.p_(a),this.q_(),a.remove());a=this.FC();b=document.getElementById(this.options.describedById);null!=a&&null==b?b=this.ZH():null==a&&null!==b&&0===b.children.length&&b.remove();this.oU(b)},WZ:function(){var a,b;b=this.Kr.find(".oj-label-required-icon");a=this.options.describedById;this.options.required?(this.JH(),0===b.length?this.options.ariaRequiredUnsupported?(b=document.getElementById(a),null==
b&&(b=this.ZH()),b.appendChild(this.$A())):this.element.before(this.$A()):(a=this.A(this.va.LS),b.attr("title",a))):(b.remove(),b=document.getElementById(a),null!==b&&0===b.children.length&&b.remove())},_setOption:function(a,b){this._superApply(arguments);"required"===a&&this.WZ();"help"===a&&this.SZ()},getNodeBySubId:function(a){var b;b=this._super(a);b||(a=a.subId,"oj-label-help-icon"===a&&(b=this.widget().find(".oj-label-help-icon")[0]),"oj-label-required-icon"===a&&(b=this.widget().find(".oj-label-required-icon")[0]));
return b||null},getSubIdByNode:function(a){var b=null;null!=a&&(a===this.widget().find(".oj-label-help-icon")[0]?b={subId:"oj-label-help-icon"}:a===this.widget().find(".oj-label-required-icon")[0]&&(b={subId:"oj-label-required-icon"}));return b||this._superApply(arguments)},_destroy:function(){var a=this.Kr.find(".oj-label-help-icon");this.p_(a);this.q_();b.v.unwrap(this.element,this.Kr);return this._super()}})})();b.hb=function(a){this.Init(a)};b.Sa.OE(b.Sa.ed.xz,b.hb);b.b.ga(b.hb,b.mc,"oj.PopupMessagingStrategy");
b.hb.ls={ojRadioset:{position:"launcher",Fj:{open:"focus focusin mouseover",close:"mouseout"}},ojCheckboxset:{position:"launcher",Fj:{open:"focusin mouseover",close:"mouseout"}},ojInputText:{position:"launcher",Fj:{open:"focusin"}},ojTextArea:{position:"launcher",Fj:{open:"focusin"}},ojInputPassword:{position:"launcher",Fj:{open:"focusin"}},ojSwitch:{position:"launcher",Fj:{open:"focusin mouseover",close:"mouseout"}},ojSlider:{position:"launcher",Fj:{open:"focusin mouseover",close:"mouseout"}},"default":{position:"launcher-wrapper",
Fj:{open:"focusin"}}};b.hb.DG="oj-form-control-hint";b.hb.s9="oj-form-control-hint-converter";b.hb.u9="oj-form-control-hint-validator";b.hb.t9="oj-form-control-hint-title";b.hb.prototype.Co=function(a){b.hb.q.Co.call(this,a);this.Fga()};b.hb.prototype.Br=function(a){b.hb.q.Br.call(this,a);this.u1()};b.hb.prototype.update=function(){b.hb.q.update.call(this);this.u1()};b.hb.prototype.Rk=function(){this.pma();this.dca();b.hb.q.Rk.call(this)};b.hb.prototype.cU=function(){this.zY()&&this.Td.ojPopup("close")};
b.hb.prototype.Fga=function(){this.JC||this.Eja()};b.hb.prototype.sZ=function(){var a,c;if(this.taa()&&(c=this.xT(),!b.Ea.Ki(c))){var d=this.HW();a=d.ojPopup("isOpen");a?a&&(a=d[0],a.innerHTML="",a.innerHTML=c,d.ojPopup("refresh")):(a=d[0],a.innerHTML="",a.innerHTML=c,d.ojPopup("open",this.Zh()))}};b.hb.prototype.taa=function(){var a=this.Wi().options,b=a.readOnly||!1;return!(a.disabled||b)};b.hb.prototype.u1=function(){var a;a=!1;var b,c;if(this.zY()){var d=this.HW();a=d.ojPopup("isOpen");b=this.xT();
c=document.activeElement===this.Zh()[0]?!0:!1;a?b?(a=d[0],a.innerHTML="",a.innerHTML=b,d.ojPopup("refresh")):d.ojPopup("close"):c&&b&&this.sZ()}};b.hb.prototype.pma=function(){var a=b.hb.ls[this.Wi().widgetName],a=a?a.Fj:b.hb.ls["default"].Fj;if(a.open){var c=this.JC;delete this.JC;c&&this.Zh().off(a.open,c)}a.close&&(c=this.dU)&&this.Zh().off(a.close,c)};b.hb.prototype.Eja=function(){var a=this.Zh(),c=b.hb.ls[this.Wi().widgetName],c=c?c.Fj:b.hb.ls["default"].Fj;if(c.open){var d=this.JC;d||(d=this.JC=
f.proxy(this.sZ,this));a.on(c.open,d)}c.close&&(d=this.dU,d||(d=this.dU=f.proxy(this.cU,this)),a.on(c.close,d))};b.hb.prototype.tea=function(){var a,c=b.hb.ls[this.Wi().widgetName];(c=c?c.position:b.hb.ls["default"].position)&&("launcher"===c?a=this.Zh():"launcher-wrapper"===c&&(a=this.Zh().parent()));a||(a=this.Wi().widget());return{my:"start bottom",at:"end top",collision:"flipcenter",of:a}};b.hb.prototype.HW=function(){if(this.Td)return this.Td;var a=b.td.j3(),c=this.tea();a.ojPopup("option","position",
c);a.ojPopup("option","close",f.proxy(this.Lia,this));a.ojPopup("option","open",f.proxy(this.Mia,this));return this.Td=a};b.hb.prototype.Mia=function(a){var c=f(a.target),d=this;window.setTimeout(function(){b.Components.fO(c)?c.ojPopup("option","autoDismiss","focusLoss"):delete d.Td},10)};b.hb.prototype.Lia=function(a){a=f(a.target);b.Components.fO(a)&&(a.ojPopup("option","autoDismiss","none"),a.ojPopup("option","open",null),a.ojPopup("option","close",null));delete this.Td;a.children().remove()};
b.hb.prototype.dca=function(){this.cU();b.td.Rna()};b.hb.prototype.xT=function(){var a="",c=this.Wi().document[0],d=[],e=!1;this.zQ()&&d.push(this.pH(c));(this.JF()||this.BQ()||this.AQ())&&d.push(this.baa(c));f.each(d,function(d,g){g&&(e?a=a.concat(b.Na.roa(c)):e=!0,a=a.concat(g))});return a};b.hb.prototype.pH=function(a){var c;c="";var d=this.oF();this.xF()&&(c=this.pF(),c=b.Na.S1(a,c,d,!1));return c};b.hb.prototype.baa=function(a){var c=[],d,e="";this.JF()&&(c=this.VP(),c=c.length?c[0]:"",e+=b.Na.cN(a,
b.hb.s9,c,!1,b.hb.DG));if(this.BQ())for(c=this.F6(),d=0;d<c.length;d++)e+=b.Na.cN(a,b.hb.u9,c[d],!1,b.hb.DG);this.AQ()&&(e+=b.Na.cN(a,b.hb.t9,this.E6(),!0,b.hb.DG));return e?"\x3cdiv class\x3d'oj-form-control-hints'\x3e"+e+"\x3c/div\x3e":""};b.hb.prototype.zY=function(){return this.Td?b.Components.fO(this.Td):!1};b.Na={};b.Na.cN=function(a,c,d,e,g){var h;d&&(h=f(a.createElement("div")),h.addClass(g+(" "+c)),h.append(b.Na.bX(a,d,e)));return h?h.get(0).outerHTML:""};b.Na.s3=function(a){var c;switch(a){case b.X.Tb.FATAL:c=
b.ha.A("oj-message.fatal");break;case b.X.Tb.ERROR:c=b.ha.A("oj-message.error");break;case b.X.Tb.WARNING:c=b.ha.A("oj-message.warning");break;case b.X.Tb.INFO:c=b.ha.A("oj-message.info");break;case b.X.Tb.CONFIRMATION:c=b.ha.A("oj-message.confirmation")}return c};b.Na.roa=function(a){return(a=f(a.createElement("hr")))?a.get(0).outerHTML:""};b.Na.S1=function(a,c,d,e){var g="",f,h,k,l,v={};l=[];for(f=0;f<c.length;f++)k=c[f],l=k instanceof b.X?k:new b.X(k.summary,k.detail,k.severity),h=b.X.Gu(l.severity),
v[h]||(v[h]=[]),v[h].push(l);for(f=d;f>=b.X.Tb.CONFIRMATION;f--)for(l=v[f]||[],c=0;c<l.length;c++)k=l[c],b.l.Yc(k,b.X),h=b.X.Gu(k.severity),d=b.Na.s3(h),d=k.summary||d,k=k.detail||"",g=g.concat(b.Na.R1(a,d,k,h,e));return g};b.Na.R1=function(a,c,d,e,g){var h,k;k=b.Na.s3(e);h=f(a.createElement("div"));h.addClass(b.Na.v9);g&&h.addClass(b.Na.Bea(e));g=f(a.createElement("span"));g.addClass(b.Na.Aea(e)).attr("title",k).attr("role","img");h.append(g);e=f(a.createElement("span"));e.addClass(b.Na.y9);k=f(a.createElement("div"));
k.addClass(b.Na.C9).text(c);e.append(k);d&&(c=b.Na.bX(a,d,!0),a=f(a.createElement("div")),a.addClass(b.Na.z9).append(c),e.append(a));h.append(e);return h?h.get(0).outerHTML:""};b.Na.Aea=function(a){var c;switch(a){case b.X.Tb.FATAL:c=b.Na.oS;break;case b.X.Tb.ERROR:c=b.Na.oS;break;case b.X.Tb.WARNING:c=b.Na.E9;break;case b.X.Tb.INFO:c=b.Na.B9;break;case b.X.Tb.CONFIRMATION:c=b.Na.x9}return b.Na.B7+c};b.Na.Bea=function(a){switch(a){case b.X.Tb.FATAL:a=b.Na.nS;break;case b.X.Tb.ERROR:a=b.Na.nS;break;
case b.X.Tb.WARNING:a=b.Na.D9;break;case b.X.Tb.INFO:a=b.Na.A9;break;default:a=b.Na.w9}return a};b.Na.bX=function(a,c,d){var e=null;b.Ea.od(c)&&(d&&b.v.kpa(c)?e=b.v.lna(c.substring(6,c.length-7)):(e=a.createElement("span"),e.textContent=c));return e};b.Na.B7="oj-component-icon oj-message-status-icon ";b.Na.v9="oj-message";b.Na.C9="oj-message-summary";b.Na.z9="oj-message-detail";b.Na.y9="oj-message-content";b.Na.oS="oj-message-error-icon";b.Na.E9="oj-message-warning-icon";b.Na.B9="oj-message-info-icon";
b.Na.x9="oj-message-confirmation-icon";b.Na.nS="oj-message-error";b.Na.D9="oj-message-warning";b.Na.A9="oj-message-info";b.Na.w9="oj-message-confirmation";b.td={};b.td.j3=function(){var a=b.td.GW(),c=a.find("."+b.td.EG);0===c.length?(c=f(b.td.sea()).hide(),c.appendTo(a),c.ojPopup({rootAttributes:{"class":b.td.F9},initialFocus:"none",tail:"simple",autoDismiss:"none",modality:"modeless"})):c=f(c[0]);return c};b.td.Rna=function(){if(0<b.td.Mda()){var a=b.td.j3();a.ojPopup("destroy");a.remove()}};b.td.GW=
function(){var a=f("#"+b.td.MR);if(0<a.length)return a;a=f("\x3cdiv\x3e");a.attr("id",b.td.MR);a.attr("role","presentation");a.appendTo(f(document.body));return a};b.td.Mda=function(){return b.td.GW().find("."+b.td.EG).length};b.td.sea=function(){return"\x3cdiv class\x3d'"+b.td.EG+"'\x3e\x3c/div\x3e"};b.td.EG="oj-messaging-popup-container";b.td.F9="oj-messaging-popup";b.td.MR="__oj_messaging_popup_pool"});