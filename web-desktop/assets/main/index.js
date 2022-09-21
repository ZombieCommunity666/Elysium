System.register("chunks:///_virtual/main",["./Main.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Main.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,e,r,n,o,s,l,a,h,p;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,r=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){o=i.cclegacy,s=i._decorator,l=i.SpriteFrame,a=i.Sprite,h=i.math,p=i.Component}],execute:function(){var c,u,d,f,m,y,v;o._RF.push({},"71e57mcMjlCq66UVwrhS+ff","Main",void 0);var g=s.ccclass,b=s.property;i("Main",(c=g("Main"),u=b({type:[l]}),d=b({type:a}),c((y=t((m=function(i){function t(){for(var t,e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=i.call.apply(i,[this].concat(o))||this,r(t,"children",y,n(t)),t.frame_time=void 0,t.loop=void 0,t.playload=void 0,r(t,"sprite",v,n(t)),t.time=void 0,t.index=void 0,t}e(t,i);var o=t.prototype;return o.onLoad=function(){console.log("0 onLoad"),this.loop=!1,this.index=0,this.time=0},o.start=function(){this.sprite.spriteFrame=this.children[2],this.loop=!1},o.update=function(i){this.time+=i,this.Roll()},o.SetResult=function(){this.loop?(this.loop=!1,this.time=0,this.sprite.spriteFrame=this.children[Math.round(h.random()*(this.children.length-1-0)+0)]):(this.loop=!0,this.Roll())},o.Roll=function(){this.loop&&this.time>.1&&(this.sprite.spriteFrame=this.children[this.index],this.time=0,this.index==this.children.length-1?this.index=0:this.index++)},t}(p)).prototype,"children",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),v=t(m.prototype,"sprite",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=m))||f));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});