!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.jsbenchmark=r():e.jsbenchmark=r()}(this,function(){return function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function o(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}Object.defineProperty(r,"__esModule",{value:!0}),o(t(7));var n=t(1);r.ArrayMethods=n.ArrayMethods},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){}return e}();t.foreach=function(e,r){return Array.isArray(e)?void this.foreachArray(e,r):void this.foreachObj(e,r)},t.foreachArray=function(e,r){for(var t=e.length,o=0;o<t;){var n=e[o];r(n,o,null),o++}},t.foreachObj=function(e,r){for(var t=Object.keys(e),o=t.length,n=0;++n<o;){var u=t[n];if(e.hasOwnProperty(u)){var f=e[u];r(f,n,u),n++}else n++}},r.ArrayMethods=t},function(e,r){"use strict";function t(e){for(var r=e.length,t=r-1;t>=0;t--)for(var o=1;o<=t;o++)if(e[o-1]>e[o]){var n=e[o-1];e[o-1]=e[o],e[o]=n}return e}Object.defineProperty(r,"__esModule",{value:!0}),r.bubbleSort=t},function(e,r){"use strict";function t(e){var r=e.length,t=r-1;for(o(e,r);t>0;)u(e,t--,0),n(e,0,t);return e}function o(e,r){for(var t=Math.floor((r-2)/2);t>=0;)n(e,t--,r-1)}function n(e,r,t){for(var o=r,n=2*o+1,f=o;n<=t;){if(e[f]<e[n]&&u(e,f,n),n+1<=t&&e[f]<e[n+1]&&u(e,f,n+1),f===o)return;u(e,o,f),o=f,f=o,n=2*o+1}}function u(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}Object.defineProperty(r,"__esModule",{value:!0}),r.heapSort=t},function(e,r){"use strict";function t(e){var r=e.length;if(r<2)return e;var n=Math.floor(r/2),u=e.slice(0,n),f=e.slice(n);return o(t(u),t(f))}function o(e,r){for(var t=[],o=e.length,n=r.length,u=0,f=0;u<o&&f<n;)e[u]<r[f]?t.push(e[u++]):t.push(r[f++]);return t.concat(e.slice(u)).concat(r.slice(f))}Object.defineProperty(r,"__esModule",{value:!0}),r.mergeSort=t},function(e,r){"use strict";function t(e,r,n){var u;return e.length>1&&(r="number"!=typeof r?0:r,n="number"!=typeof n?e.length-1:n,u=o(e,r,n),r<u-1&&t(e,r,u-1),u<n&&t(e,u,n)),e}function o(e,r,t){for(var o=e[Math.floor((t+r)/2)],u=r,f=t;u<=f;){for(;e[u]<o;)u++;for(;e[f]>o;)f--;u<=f&&(n(e,u,f),u++,f--)}return u}function n(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}Object.defineProperty(r,"__esModule",{value:!0}),r.quickSort=t},function(e,r){"use strict";function t(e){for(var r,t,o=e.length,n=0;n<o;n++){r=n;for(var u=n+1;u<o;u++)e[u]<e[r]&&(r=u);t=e[n],e[n]=e[r],e[r]=t}return e}Object.defineProperty(r,"__esModule",{value:!0}),r.selectionSort=t},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(2);r.bubbleSort=o.bubbleSort;var n=t(5);r.quickSort=n.quickSort;var u=t(6);r.selectionSort=u.selectionSort;var f=t(4);r.mergeSort=f.mergeSort;var c=t(3);r.heapSort=c.heapSort}])});