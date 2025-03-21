import{a as C,g as N}from"./index-DeeIzpjE.js";var L={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function J(){if(y)return u;y=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function n(l,r,e){var t=null;if(e!==void 0&&(t=""+e),r.key!==void 0&&(t=""+r.key),"key"in r){e={};for(var o in r)o!=="key"&&(e[o]=r[o])}else e=r;return r=e.ref,{$$typeof:s,type:l,key:t,ref:r!==void 0?r:null,props:e}}return u.Fragment=i,u.jsx=n,u.jsxs=n,u}var j;function V(){return j||(j=1,L.exports=J()),L.exports}var a=V();const W=[7575,7602.5,7613,7627,7607,7606.5,7608.5,7602.5,7595,7560.5,7588.5,7591.5,7600,7590,7570.5,7573.5,7571.5,7570,7554,7566,7578,7583,7604,7617.5,7623.5,7641,7639.5,7649.5,7621.5,7635.5,7616.5,7603.5,7606,7635.5,7651.5,7670.5,7686.5,7688,7700,7746.5,7810.5,7763,7760],q=({coords:s,...i})=>{const n=s.reduce((l,{x:r,y:e})=>l.concat(`${r} ${e},`),"");return a.jsx("polyline",{fill:"none",points:n,...i})};q.__docgenInfo={description:"",methods:[],displayName:"Line",props:{coords:{required:!0,tsType:{name:"Array",elements:[{name:"LittleChartsCoords"}],raw:"Array<LittleChartsCoords>"},description:""}},composes:["SVGProps"]};const M=C.createContext({verticalIndents:0,horizontalIndents:0}),O=()=>C.useContext(M),T=({coords:s,...i})=>{const{verticalIndents:n}=O();let l=0,r=0,e=0;const t=s.reduce((d,{x:p,y:m})=>(l=Math.max(l,p),r=Math.min(r,p),e=Math.max(e,m),`${d} ${p},${m}`),""),o=`${r} ,${e+n} ${t} ${l},${e+n}`;return a.jsx("polygon",{points:o,...i})};T.__docgenInfo={description:"",methods:[],displayName:"Polygon",props:{coords:{required:!0,tsType:{name:"Array",elements:[{name:"LittleChartsCoords"}],raw:"Array<LittleChartsCoords>"},description:""}},composes:["SVGProps"]};const Y=({data:s,width:i,height:n,verticalIndents:l,horizontalIndents:r})=>{const{length:e}=s,t=Math.max(...s),o=Math.min(...s),d=2,p=t-o,m=p===0?d:p,D=(n-l*d)/m,G=(i-r*d)/(e>1?e-1:1);return s.map((w,B)=>({x:B*G+r,y:(t-w)*D+l}))};var g={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var v;function b(){return v||(v=1,function(s){(function(){var i={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=r(e,l(o)))}return e}function l(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)i.call(e,o)&&e[o]&&(t=r(t,o));return t}function r(e,t){return t?e?e+" "+t:e+t:e}s.exports?(n.default=n,s.exports=n):window.classNames=n})()}(g)),g.exports}var X=b();const H=N(X),c=({className:s,id:i,data:n,children:l,width:r,height:e,margins:[t,o]=[0,0]})=>{const d=C.useMemo(()=>({verticalIndents:t,horizontalIndents:o}),[t,o]),p=C.useMemo(()=>Y({data:n,width:r,height:e,verticalIndents:t,horizontalIndents:o}),[n,r,e,t,o]);return a.jsx(M.Provider,{value:d,children:a.jsx("svg",{id:i,xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${r} ${e}`,className:H(s),height:e,width:r,children:l(p)})})};c.Line=q;c.Polygon=T;c.__docgenInfo={description:"Base chart component",methods:[{name:"Line",docblock:null,modifiers:["static"],params:[{name:"{ coords, ...other }",optional:!1,type:null}],returns:null},{name:"Polygon",docblock:null,modifiers:["static"],params:[{name:"{ coords, ...other }",optional:!1,type:null}],returns:null}],displayName:"LittleCharts",props:{margins:{defaultValue:{value:"[0, 0]",computed:!1},required:!1}}};const U={title:"LittleChart",component:c,args:{data:W,width:400,height:150,margins:[20,2],children:s=>a.jsx(c.Line,{coords:s,stroke:"#0B61A4",strokeWidth:2,fill:"none"})}},f={},x={render:s=>a.jsx(c,{...s,children:i=>a.jsxs("g",{children:[a.jsx(c.Polygon,{fill:"#3F92D2",coords:i}),a.jsx(c.Line,{coords:i,strokeWidth:2,stroke:"#033E6B"})]})})},h={render:s=>a.jsx(c,{...s,children:i=>a.jsxs("g",{children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[a.jsx("stop",{offset:"0%",stopColor:"#66A3D2"}),a.jsx("stop",{offset:"50%",stopColor:"#3F92D2"}),a.jsx("stop",{offset:"100%",stopColor:"#fff"})]})}),a.jsx(c.Polygon,{fill:"url(#gradient)",coords:i}),a.jsx(c.Line,{strokeWidth:2,stroke:"#033E6B",coords:i})]})})};var P,k,E;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(E=(k=f.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var R,_,$;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <LittleCharts {...props}>
      {coords => <g>
          <LittleCharts.Polygon fill="#3F92D2" coords={coords} />
          <LittleCharts.Line coords={coords} strokeWidth={2} stroke="#033E6B" />
        </g>}
    </LittleCharts>
}`,...($=(_=x.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var A,S,F;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <LittleCharts {...props}>
      {coords => <g>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#66A3D2" />
              <stop offset="50%" stopColor="#3F92D2" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <LittleCharts.Polygon fill={\`url(#gradient)\`} coords={coords} />
          <LittleCharts.Line strokeWidth={2} stroke="#033E6B" coords={coords} />
        </g>}
    </LittleCharts>
}`,...(F=(S=h.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const Z=["Line","LineFilling","LineGradient"];export{f as Line,x as LineFilling,h as LineGradient,Z as __namedExportsOrder,U as default};
