"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@tu-view-plus/utils"),t=require("@tu-view-plus/hooks"),s=require("@tu-view-plus/constants"),r=require("./constants.js"),l=e.buildProps({accordion:Boolean,modelValue:{type:e.definePropType([Array,String,Number]),default:()=>e.mutable([])},type:{type:String,values:r.collapseTypes,default:"line"},size:{...t.useSizeProp,default:"medium"}}),i={[s.UPDATE_MODEL_EVENT]:o=>typeof e.isNumber(o),[s.CHANGE_EVENT]:o=>typeof e.isNumber(o)};exports.collapseEmits=i;exports.collapseProps=l;
