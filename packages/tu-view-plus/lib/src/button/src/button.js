"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@tu-view-plus/utils"),n=require("@tu-view-plus/icons-vue"),u=require("@tu-view-plus/hooks"),o=require("./constants.js"),i=e.buildProps({disabled:Boolean,size:{...u.useSizeProp,default:"medium"},type:{type:String,values:o.buttonTypes,default:"default"},icon:{type:e.iconPropType},nativeType:{type:String,values:o.buttonNativeTypes,default:"button"},loading:Boolean,loadingIcon:{type:e.iconPropType,default:()=>n.Loading},autofocus:Boolean,round:Boolean,circle:Boolean,long:{type:Boolean,default:!1}}),s={click:t=>t instanceof MouseEvent};exports.buttonEmits=s;exports.buttonProps=i;
