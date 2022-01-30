"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),ReactDOM=_interopDefault(require("react-dom")),propTypes=require("prop-types"),__assign=function(){return(__assign=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};function __spreadArrays(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),a=0;for(e=0;e<n;e++)for(var i=arguments[e],r=0,c=i.length;r<c;r++,a++)o[a]=i[r];return o}var success=function(t){return React__default.createElement("svg",__assign({viewBox:"0 0 426.667 426.667",width:18,height:18},t),React__default.createElement("path",{d:"M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z",fill:"#6ac259"}))},warn=function(t){return React__default.createElement("svg",__assign({viewBox:"0 0 310.285 310.285",width:18,height:18},t),React__default.createElement("path",{d:"M264.845 45.441C235.542 16.139 196.583 0 155.142 0 113.702 0 74.743 16.139 45.44 45.441 16.138 74.743 0 113.703 0 155.144c0 41.439 16.138 80.399 45.44 109.701 29.303 29.303 68.262 45.44 109.702 45.44s80.399-16.138 109.702-45.44c29.303-29.302 45.44-68.262 45.44-109.701.001-41.441-16.137-80.401-45.439-109.703zm-132.673 3.895a12.587 12.587 0 0 1 9.119-3.873h28.04c3.482 0 6.72 1.403 9.114 3.888 2.395 2.485 3.643 5.804 3.514 9.284l-4.634 104.895c-.263 7.102-6.26 12.933-13.368 12.933H146.33c-7.112 0-13.099-5.839-13.345-12.945L128.64 58.594c-.121-3.48 1.133-6.773 3.532-9.258zm23.306 219.444c-16.266 0-28.532-12.844-28.532-29.876 0-17.223 12.122-30.211 28.196-30.211 16.602 0 28.196 12.423 28.196 30.211.001 17.591-11.456 29.876-27.86 29.876z",fill:"#FFDA44"}))},loading=function(t){return React__default.createElement("div",__assign({className:"ct-icon-loading"},t))},info=function(t){return React__default.createElement("svg",__assign({viewBox:"0 0 23.625 23.625",width:18,height:18},t),React__default.createElement("path",{d:"M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z",fill:"#006DF0"}))},error=function(t){return React__default.createElement("svg",__assign({viewBox:"0 0 51.976 51.976",width:18,height:18},t),React__default.createElement("path",{d:"M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z",fill:"#D80027"}))},Icons={success:success,warn:warn,loading:loading,info:info,error:error},colors={success:"#6EC05F",info:"#1271EC",warn:"#FED953",error:"#D60A2E",loading:"#0088ff"},Toast=function(n){function o(){var t;u(((t={opacity:0})[r]="-15px",t)),setTimeout(function(){n.onHide(n.id,n.position)},300)}var t,e,a,i,r="margin"+((n.position||"top-center").includes("bottom")?"Bottom":"Top"),c=["ct-toast",n.onClick?" ct-cursor-pointer":"","ct-toast-"+n.type].join(" "),s=((null===(e=n.bar)||void 0===e?void 0:e.size)||"3px")+" "+((null===(a=n.bar)||void 0===a?void 0:a.style)||"solid")+" "+((null===(i=n.bar)||void 0===i?void 0:i.color)||colors[n.type]),l=Icons[n.type],d=React.useState(((t={opacity:0})[r]=-15,t)),p=d[0],u=d[1],f=__assign({paddingLeft:n.heading?25:void 0,minHeight:n.heading?50:void 0,borderLeft:s},p);React.useEffect(function(){var t,e=setTimeout(function(){var t;u(((t={opacity:1})[r]="15px",t))},50);return 0!==n.hideAfter&&(t=setTimeout(function(){o()},1e3*n.hideAfter)),function(){clearTimeout(e),t&&clearTimeout(t)}},[]),React.useEffect(function(){n.show||o()},[n.show]);var g={tabIndex:0,onClick:n.onClick,onKeyPress:function(t){13===t.keyCode&&n.onClick(t)}};return React__default.createElement("div",__assign({className:c,role:n.role?n.role:"status",style:f},n.onClick?g:{}),n.renderIcon?n.renderIcon():React__default.createElement(l,null),React__default.createElement("div",{className:n.heading?"ct-text-group-heading":"ct-text-group"},n.heading&&React__default.createElement("h4",{className:"ct-heading"},n.heading),React__default.createElement("div",{className:"ct-text"},n.text)))};Toast.propTypes={type:propTypes.string.isRequired,text:propTypes.oneOfType([propTypes.string,propTypes.node]).isRequired,show:propTypes.bool,onHide:propTypes.func,id:propTypes.oneOfType([propTypes.string,propTypes.number]),hideAfter:propTypes.number,heading:propTypes.string,position:propTypes.string,renderIcon:propTypes.func,bar:propTypes.shape({}),onClick:propTypes.func,role:propTypes.string},Toast.defaultProps={id:void 0,show:!0,onHide:void 0,hideAfter:3,heading:void 0,position:"top-center",renderIcon:void 0,bar:{},onClick:void 0,role:"status"};var camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},defaultToasts={topLeft:[],topCenter:[],topRight:[],bottomLeft:[],bottomCenter:[],bottomRight:[]},ToastContainer=function(t){var o=t.toast,a=t.hiddenID,e=React.useState(defaultToasts),i=e[0],n=e[1];React.useEffect(function(){o&&n(function(t){var e,n=camelCase(o.position||"top-center");return __assign(__assign({},t),((e={})[n]=__spreadArrays(t[n],[o]),e))})},[o]);function r(o,a){n(function(t){var e,n=camelCase(a||"top-center");return __assign(__assign({},t),((e={})[n]=t[n].filter(function(t){return t.id!==o}),e))})}var c=["Left","Center","Right"];return React__default.createElement(React__default.Fragment,null,["top","bottom"].map(function(o){return React__default.createElement("div",{key:"row_"+o,className:"ct-row"},c.map(function(t){var e=""+o+t,n=["ct-group","bottom"===o?"ct-flex-bottom":""].join(" ");return React__default.createElement("div",{key:e,className:n},i[e].map(function(t){return React__default.createElement(Toast,__assign({key:e+"_"+t.id},t,{id:t.id,text:t.text,type:t.type,onClick:t.onClick,hideAfter:t.hideAfter,show:a!==t.id,onHide:r}))}))}))}))};function styleInject(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}ToastContainer.propTypes={toast:propTypes.shape({}),hiddenID:propTypes.number},ToastContainer.defaultProps={toast:void 0,hiddenID:void 0};var css="#ct-container {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100vh;\n\ttop: 0px;\n\tleft: 0px;\n\tz-index: 2000;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpointer-events: none;\n}\n\n.ct-row {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.ct-group {\n\tflex: 1;\n\tmargin: 10px 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.ct-group:first-child {\n\talign-items: flex-start;\n}\n\n.ct-group:last-child {\n\talign-items: flex-end;\n}\n\n.ct-flex-bottom {\n\tjustify-content: flex-end;\n}\n\n.ct-toast {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 12px 20px;\n\tbackground-color: #fff;\n\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n\tcolor: #000;\n\tborder-radius: 4px;\n\tmargin: 0px;\n\topacity: 1;\n\ttransition: 0.3s all ease-in-out;\n\tmin-height: 45px;\n\tpointer-events: all;\n}\n\n.ct-toast:focus {\n\toutline: none;\n}\n\n.ct-toast svg {\n\tmin-width: 18px;\n}\n\n.ct-cursor-pointer {\n\tcursor: pointer;\n}\n\n.ct-icon-loading {\n\tdisplay: inline-block;\n\twidth: 20px;\n\theight: 20px;\n}\n\n.ct-icon-loading:after {\n\tcontent: ' ';\n\tdisplay: block;\n\twidth: 14px;\n\theight: 14px;\n\tmargin: 1px;\n\tborder-radius: 50%;\n\tborder: 2px solid #0088ff;\n\tborder-color: #0088ff transparent #0088ff transparent;\n\tanimation: ct-icon-loading 1.2s linear infinite;\n}\n\n@keyframes ct-icon-loading {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.ct-text-group {\n\tmargin-left: 15px;\n}\n\n.ct-text-group-heading {\n\tmargin-left: 25px;\n}\n\n.ct-heading {\n\tfont-size: 18px;\n\tmargin: 0px;\n\tmargin-bottom: 5px;\n}\n\n.ct-text {\n\tfont-size: 14px;\n}\n\n@media (max-width: 768px) {\n\t.ct-row {\n\t\tjustify-content: flex-start;\n\t\tflex-direction: column;\n\t\tmargin: 7px 0px;\n\t}\n\n\t.ct-group {\n\t\tflex: none;\n\t\tmargin: 0px;\n\t}\n\n\t.ct-toast {\n\t\tmargin: 8px 15px;\n\t\twidth: initial;\n\t}\n}\n";styleInject(css);var ctToastCount=0,cogoToast=function(t,e){var n=document.getElementById((null===e||void 0===e?void 0:e.toastContainerID)||"ct-container");n||((n=document.createElement("div")).id="ct-container",document.body.appendChild(n)),ctToastCount+=1;var o=1e3*(void 0===(null===e||void 0===e?void 0:e.hideAfter)?3:e.hideAfter),a=__assign({id:ctToastCount,text:t},e);ReactDOM.render(React__default.createElement(ToastContainer,{toast:a}),n);var i=new Promise(function(t){setTimeout(function(){t()},o)});return i.hide=function(){ReactDOM.render(React__default.createElement(ToastContainer,{hiddenID:a.id}),n)},i};cogoToast.success=function(t,e){return cogoToast(t,__assign(__assign({},e),{type:"success"}))},cogoToast.warn=function(t,e){return cogoToast(t,__assign(__assign({},e),{type:"warn"}))},cogoToast.info=function(t,e){return cogoToast(t,__assign(__assign({},e),{type:"info"}))},cogoToast.error=function(t,e){return cogoToast(t,__assign(__assign({},e),{type:"error"}))},cogoToast.loading=function(t,e){return cogoToast(t,__assign(__assign({},e),{type:"loading"}))},exports.Toast=Toast,exports.default=cogoToast;