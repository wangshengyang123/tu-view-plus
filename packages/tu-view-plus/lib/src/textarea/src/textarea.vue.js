"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("./textarea.js");require("../style/textarea.css");const o=e.defineComponent({name:"TuTextarea"}),n=e.defineComponent({...o,props:r.textareaProps,setup(u){return(t,a)=>(e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(t.$slots,"default")]))}});exports.default=n;
