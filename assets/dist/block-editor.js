!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=72)}({0:function(e,t){e.exports=window.wp.element},16:function(e,t){e.exports=window.wp.plugins},18:function(e,t){e.exports=window.wp.data},30:function(e,t,r){var n;!function(i){var a=/^\s+/,o=/\s+$/,s=0,l=i.round,f=i.min,u=i.max,c=i.random;function h(e,t){if(t=t||{},(e=e||"")instanceof h)return e;if(!(this instanceof h))return new h(e,t);var r=function(e){var t,r,n,s={r:0,g:0,b:0},l=1,c=null,h=null,d=null,g=!1,b=!1;return"string"==typeof e&&(e=function(e){e=e.replace(a,"").replace(o,"").toLowerCase();var t,r=!1;if(P[e])e=P[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=D.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=D.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=D.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=D.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=D.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=D.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=D.hex8.exec(e))?{r:L(t[1]),g:L(t[2]),b:L(t[3]),a:I(t[4]),format:r?"name":"hex8"}:(t=D.hex6.exec(e))?{r:L(t[1]),g:L(t[2]),b:L(t[3]),format:r?"name":"hex"}:(t=D.hex4.exec(e))?{r:L(t[1]+""+t[1]),g:L(t[2]+""+t[2]),b:L(t[3]+""+t[3]),a:I(t[4]+""+t[4]),format:r?"name":"hex8"}:!!(t=D.hex3.exec(e))&&{r:L(t[1]+""+t[1]),g:L(t[2]+""+t[2]),b:L(t[3]+""+t[3]),format:r?"name":"hex"}}(e)),"object"==typeof e&&($(e.r)&&$(e.g)&&$(e.b)?(t=e.r,r=e.g,n=e.b,s={r:255*O(t,255),g:255*O(r,255),b:255*O(n,255)},g=!0,b="%"===String(e.r).substr(-1)?"prgb":"rgb"):$(e.h)&&$(e.s)&&$(e.v)?(c=q(e.s),h=q(e.v),s=function(e,t,r){e=6*O(e,360),t=O(t,100),r=O(r,100);var n=i.floor(e),a=e-n,o=r*(1-t),s=r*(1-a*t),l=r*(1-(1-a)*t),f=n%6;return{r:255*[r,s,o,o,l,r][f],g:255*[l,r,r,s,o,o][f],b:255*[o,o,l,r,r,s][f]}}(e.h,c,h),g=!0,b="hsv"):$(e.h)&&$(e.s)&&$(e.l)&&(c=q(e.s),d=q(e.l),s=function(e,t,r){var n,i,a;function o(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=O(e,360),t=O(t,100),r=O(r,100),0===t)n=i=a=r;else{var s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;n=o(l,s,e+1/3),i=o(l,s,e),a=o(l,s,e-1/3)}return{r:255*n,g:255*i,b:255*a}}(e.h,c,d),g=!0,b="hsl"),e.hasOwnProperty("a")&&(l=e.a)),l=C(l),{ok:g,format:e.format||b,r:f(255,u(s.r,0)),g:f(255,u(s.g,0)),b:f(255,u(s.b,0)),a:l}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=l(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=l(this._r)),this._g<1&&(this._g=l(this._g)),this._b<1&&(this._b=l(this._b)),this._ok=r.ok,this._tc_id=s++}function d(e,t,r){e=O(e,255),t=O(t,255),r=O(r,255);var n,i,a=u(e,t,r),o=f(e,t,r),s=(a+o)/2;if(a==o)n=i=0;else{var l=a-o;switch(i=s>.5?l/(2-a-o):l/(a+o),a){case e:n=(t-r)/l+(t<r?6:0);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4}n/=6}return{h:n,s:i,l:s}}function g(e,t,r){e=O(e,255),t=O(t,255),r=O(r,255);var n,i,a=u(e,t,r),o=f(e,t,r),s=a,l=a-o;if(i=0===a?0:l/a,a==o)n=0;else{switch(a){case e:n=(t-r)/l+(t<r?6:0);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4}n/=6}return{h:n,s:i,v:s}}function b(e,t,r,n){var i=[T(l(e).toString(16)),T(l(t).toString(16)),T(l(r).toString(16))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function p(e,t,r,n){return[T(M(n)),T(l(e).toString(16)),T(l(t).toString(16)),T(l(r).toString(16))].join("")}function v(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.s-=t/100,r.s=B(r.s),h(r)}function m(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.s+=t/100,r.s=B(r.s),h(r)}function _(e){return h(e).desaturate(100)}function y(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.l+=t/100,r.l=B(r.l),h(r)}function x(e,t){t=0===t?0:t||10;var r=h(e).toRgb();return r.r=u(0,f(255,r.r-l(-t/100*255))),r.g=u(0,f(255,r.g-l(-t/100*255))),r.b=u(0,f(255,r.b-l(-t/100*255))),h(r)}function k(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.l-=t/100,r.l=B(r.l),h(r)}function A(e,t){var r=h(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,h(r)}function w(e){var t=h(e).toHsl();return t.h=(t.h+180)%360,h(t)}function S(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+120)%360,s:t.s,l:t.l}),h({h:(r+240)%360,s:t.s,l:t.l})]}function H(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+90)%360,s:t.s,l:t.l}),h({h:(r+180)%360,s:t.s,l:t.l}),h({h:(r+270)%360,s:t.s,l:t.l})]}function R(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+72)%360,s:t.s,l:t.l}),h({h:(r+216)%360,s:t.s,l:t.l})]}function E(e,t,r){t=t||6,r=r||30;var n=h(e).toHsl(),i=360/r,a=[h(e)];for(n.h=(n.h-(i*t>>1)+720)%360;--t;)n.h=(n.h+i)%360,a.push(h(n));return a}function F(e,t){t=t||6;for(var r=h(e).toHsv(),n=r.h,i=r.s,a=r.v,o=[],s=1/t;t--;)o.push(h({h:n,s:i,v:a})),a=(a+s)%1;return o}h.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,n=this.toRgb();return e=n.r/255,t=n.g/255,r=n.b/255,.2126*(e<=.03928?e/12.92:i.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:i.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:i.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=C(e),this._roundA=l(100*this._a)/100,this},toHsv:function(){var e=g(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=g(this._r,this._g,this._b),t=l(360*e.h),r=l(100*e.s),n=l(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=d(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=d(this._r,this._g,this._b),t=l(360*e.h),r=l(100*e.s),n=l(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return b(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,n,i){var a=[T(l(e).toString(16)),T(l(t).toString(16)),T(l(r).toString(16)),T(M(n))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:l(this._r),g:l(this._g),b:l(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+l(this._r)+", "+l(this._g)+", "+l(this._b)+")":"rgba("+l(this._r)+", "+l(this._g)+", "+l(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:l(100*O(this._r,255))+"%",g:l(100*O(this._g,255))+"%",b:l(100*O(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+l(100*O(this._r,255))+"%, "+l(100*O(this._g,255))+"%, "+l(100*O(this._b,255))+"%)":"rgba("+l(100*O(this._r,255))+"%, "+l(100*O(this._g,255))+"%, "+l(100*O(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(j[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+p(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var i=h(e);r="#"+p(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return h(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(y,arguments)},brighten:function(){return this._applyModification(x,arguments)},darken:function(){return this._applyModification(k,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(_,arguments)},spin:function(){return this._applyModification(A,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(E,arguments)},complement:function(){return this._applyCombination(w,arguments)},monochromatic:function(){return this._applyCombination(F,arguments)},splitcomplement:function(){return this._applyCombination(R,arguments)},triad:function(){return this._applyCombination(S,arguments)},tetrad:function(){return this._applyCombination(H,arguments)}},h.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]="a"===n?e[n]:q(e[n]));e=r}return h(e,t)},h.equals=function(e,t){return!(!e||!t)&&h(e).toRgbString()==h(t).toRgbString()},h.random=function(){return h.fromRatio({r:c(),g:c(),b:c()})},h.mix=function(e,t,r){r=0===r?0:r||50;var n=h(e).toRgb(),i=h(t).toRgb(),a=r/100;return h({r:(i.r-n.r)*a+n.r,g:(i.g-n.g)*a+n.g,b:(i.b-n.b)*a+n.b,a:(i.a-n.a)*a+n.a})},h.readability=function(e,t){var r=h(e),n=h(t);return(i.max(r.getLuminance(),n.getLuminance())+.05)/(i.min(r.getLuminance(),n.getLuminance())+.05)},h.isReadable=function(e,t,r){var n,i,a,o,s,l=h.readability(e,t);switch(i=!1,(a=r,"AA"!==(o=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==o&&(o="AA"),"small"!==(s=(a.size||"small").toLowerCase())&&"large"!==s&&(s="small"),n={level:o,size:s}).level+n.size){case"AAsmall":case"AAAlarge":i=l>=4.5;break;case"AAlarge":i=l>=3;break;case"AAAsmall":i=l>=7}return i},h.mostReadable=function(e,t,r){var n,i,a,o,s=null,l=0;i=(r=r||{}).includeFallbackColors,a=r.level,o=r.size;for(var f=0;f<t.length;f++)(n=h.readability(e,t[f]))>l&&(l=n,s=h(t[f]));return h.isReadable(e,s,{level:a,size:o})||!i?s:(r.includeFallbackColors=!1,h.mostReadable(e,["#fff","#000"],r))};var P=h.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},j=h.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(P);function C(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function O(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=f(t,u(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),i.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function B(e){return f(1,u(0,e))}function L(e){return parseInt(e,16)}function T(e){return 1==e.length?"0"+e:""+e}function q(e){return e<=1&&(e=100*e+"%"),e}function M(e){return i.round(255*parseFloat(e)).toString(16)}function I(e){return L(e)/255}var N,z,W,D=(z="[\\s|\\(]+("+(N="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",W="[\\s|\\(]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",{CSS_UNIT:new RegExp(N),rgb:new RegExp("rgb"+z),rgba:new RegExp("rgba"+W),hsl:new RegExp("hsl"+z),hsla:new RegExp("hsla"+W),hsv:new RegExp("hsv"+z),hsva:new RegExp("hsva"+W),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function $(e){return!!D.CSS_UNIT.exec(e)}e.exports?e.exports=h:void 0===(n=function(){return h}.call(t,r,t,e))||(e.exports=n)}(Math)},42:function(e,t){e.exports=window.wp.domReady},72:function(e,t,r){"use strict";r.r(t);var n=r(16),i=r(18);Object(i.select)("core/edit-post")&&Object(i.select)("core/edit-post").__experimentalGetPreviewDeviceType&&Object(n.registerPlugin)("generatepress-responsive-classes",{render:function(){var e=Object(i.useSelect)((function(){var e=Object(i.select)("core/edit-post").__experimentalGetPreviewDeviceType;return e?{deviceType:e()}:{deviceType:null}}),[]).deviceType;return document.querySelector("body").classList.remove("gp-is-device-desktop","gp-is-device-tablet","gp-is-device-mobile"),document.querySelector("body").classList.add("gp-is-device-"+e.toLowerCase()),null}});var a=r(42),o=r.n(a);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="",n="px",i=generatepressBlockEditor.customContentWidth?parseInt(generatepressBlockEditor.customContentWidth):generatepressBlockEditor.containerWidth,a=generatepressBlockEditor.leftSidebarWidth,o=generatepressBlockEditor.rightSidebarWidth;if(r="left-sidebar"===e?i*((100-a)/100):"right-sidebar"===e?i*((100-o)/100):"no-sidebar"===e?i:i*((100-(Number(a)+Number(o)))/100),""===t){var s=parseInt(generatepressBlockEditor.contentPaddingRight)+parseInt(generatepressBlockEditor.contentPaddingLeft);r=Number(r)-s}return"true"!==t||generatepressBlockEditor.customContentWidth||(r=100,n="%"),r+n}Object(n.registerPlugin)("generatepress-content-width",{render:function(){return o()((function(){var e,t=document.getElementById("generate-sidebar-layout"),r=document.getElementById("_generate-full-width-content");if(t&&r){var n=null!=r&&r.value?null==r?void 0:r.value:generatepressBlockEditor.contentAreaType,i=(null==t?void 0:t.value)||generatepressBlockEditor.globalSidebarLayout,a=document.querySelector(".editor-styles-wrapper");null==a||null===(e=a.style)||void 0===e||e.setProperty("--content-width",s(i,n)),t.onchange=function(e){var t,n=null!=r&&r.value?null==r?void 0:r.value:generatepressBlockEditor.contentAreaType;null==a||null===(t=a.style)||void 0===t||t.setProperty("--content-width",s(e.target.value||generatepressBlockEditor.globalSidebarLayout,n))},r.onchange=function(e){var r;null==a||null===(r=a.style)||void 0===r||r.setProperty("--content-width",s((null==t?void 0:t.value)||generatepressBlockEditor.globalSidebarLayout,e.target.value))}}})),null}});var l=r(0),f=r(30),u=r.n(f);Object(n.registerPlugin)("generatepress-is-dark-theme",{render:function(){return Object(l.useEffect)((function(){if(generatepressBlockEditor.show_editor_styles){var e=generatepressBlockEditor.text_color;if(String(e).startsWith("var(")){var t=e.match(/\(([^)]+)\)/);if(t){var r=document.querySelector(".editor-styles-wrapper");if(r){var n,i=null===(n=getComputedStyle(r))||void 0===n?void 0:n.getPropertyValue(t[1]);i&&(e=i)}}}e=u()(e).toHex8(),u()(e).isDark()?document.body.classList.remove("is-dark-theme"):document.body.classList.add("is-dark-theme")}}),[]),null}})}});