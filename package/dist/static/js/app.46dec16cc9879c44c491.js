webpackJsonp([1],{"5XKs":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("4YfN"),s=n.n(a),i=n("i7YX"),o=n.n(i);function c(t){switch(t){case"source":case"sqlsource":case"streaming_source":case"source_dummy":case"StartEvent":return"classD_A";case"sink":case"show":return"classD_B";case"union":case"intersect":case"starjoin":return"classD_C";case"decision":case"split":case"validate":return"classD_D";case"join":case"productjoin":case"minus":return"classD_E";case"dataflow":case"hawq":case"hive":case"mapreduce":case"shell":case"spark":case"event":case"exclusive":case"parallel":return"classW_C";default:return"classO"}}var r={source:"source",sqlsource:"sqlsource",sink:"sink",decision:"decision",validate:"validate",supplement:"supplement",sql:"sql",transform:"transform",filter:"filter",sample:"sample",lookup:"lookup",join:"join",starjoin:"starjoin",productjoin:"productjoin",aggregate:"aggregate",top:"top",union:"union",intersect:"intersect",minus:"minus",split:"split",Correlation:"Correlation",Summary:"Summary",gradientboogradientbostedtrees_predict:"gradientboogradientbostedtrees_predict",MultilayerPerceptronPredict:"MultilayerPerceptronPredict",MultilayerPerceptronTrain:"MultilayerPerceptronTrain",kmeans_predict:"kmeans_predict",kmeans_train:"kmeans_train"};function u(t){return t in r&&"iconTrue"}function l(t){switch(t){case"decision":case"split":return"classD_D1";case"validate":return"classD_D2";case"join":case"productjoin":return"classD_E1";case"minus":return"classD_E2";case"dataflow":return"classW_A"}}var d={strokeWidth:2,stroke:"#4e5568",joinstyle:"round",outlineColor:"white",outlineWidth:0},p={strokeWidth:3,stroke:"#ff4e4e",outlineColor:"white",outlineWidth:0},f={endpoint:["Dot",{radius:8}],connectorStyle:d,connectorHoverStyle:p,paintStyle:{stroke:"#4e5568",fill:"transparent",radius:6,lineWidth:6},isSource:!0,connector:["Flowchart",{stub:[5,5],gap:10,cornerRadius:5,alwaysRespectStubs:!0}],isTarget:!1,maxConnections:1,connectorOverlays:[["Arrow",{width:10,length:10,location:1}]]},h={endpoint:["Dot",{radius:6}],connectorStyle:d,connectorHoverStyle:p,paintStyle:{fill:"#4e5568"},isSource:!1,connector:["Straight",{stub:[5,5],gap:10,cornerRadius:5,alwaysRespectStubs:!0}],isTarget:!0,maxConnections:1,connectorOverlays:[["Arrow",{width:10,length:10,location:1}]]},m=function(t,e){var n=[];return e.forEach(t,function(t,e){n.push({key:e,value:t})}),n},g=function(t){var e=t.length,n=1,a=0;switch(e){case 21:case 20:case 19:case 18:case 17:n=4,a=-1.33;break;case 16:case 15:n=4,a=-1.25;break;case 14:case 13:case 12:n=3,a=-.73;break;case 11:n=2.5,a=-.65;break;case 10:n=2.5,a=-.6;break;case 9:case 8:n=2,a=-.45;break;case 7:n=1.8,a=-.2;break;case 5:n=2,a=-.33;break;case 6:n=2,a=-.35;break;case 4:case 3:n=1,a=.15;break;case 2:n=1,a=.25;break;case 1:n=1,a=.5}for(var s=n/e,i=[],o=0;o<t.length;o++)i.push({key:t[o].key,value:[1,a,0,0]}),a+=s;return i},b=function(t){return"classD_A"==t?"t1Style":"classD_B"==t?"t3Style":"t2Style"},y={watch:{data:function(t){this.stepData=t.stepData}},props:{data:{type:Object,default:{}}},components:{},data:function(){return{stepData:[],nodeClass:c,nodeIcon:u,setClass:b}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{delNode:function(t){this.$emit("delNode",t)},dblClick:function(t){this.$emit("dblClick",t)},copyNode:function(t){this.$emit("copyNode",t)},setLineSplit:function(t){if("split"==t.type)switch(o.a.toArray(t.outputConfigurations).length){case 21:case 20:return"height: 280px; top: -100px;";case 19:case 18:case 17:return"height: 270px; top: -95px;";case 16:case 15:return"height: 270px; top: -90px;";case 14:case 13:case 12:return"height: 190px; top: -50px;";case 11:case 10:return"height: 155px; top: -43px;";case 9:case 8:return"height: 120px; top: -35px;";case 7:case 6:case 5:return"height: 120px; top: -25px;";default:return"height: 70px; top: 0px;"}}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flowchart-node",attrs:{id:"flowchartnode"}},t._l(t.stepData,function(e,a){return n("div",{key:a,class:"designIconBig "+t.setClass(t.nodeClass(e.type)),style:"left:"+e.x+"px;top:"+e.y+"px;position:absolute;margin:0",attrs:{id:e.id,"data-sign":e.name,"data-type":e.type},on:{dblclick:function(n){return t.dblClick(e)}}},[n("i",{staticClass:"icon iconfont icon-ir-designIconBg designIconBg"}),t._v(" "),n("i",{class:"iconTrue"==t.nodeIcon(e.type)?"icon iconfont icon-ir-d-"+e.type:"icon iconfont icon-ir-d-default",attrs:{id:"changeSte"}}),t._v(" "),n("h4",{attrs:{title:e.name}},[t._v(t._s(e.name))]),t._v(" "),n("h5",[t._v("ID:"+t._s(e.id))]),t._v(" "),n("em",{staticClass:"icon iconfont icon-ir-copy",attrs:{id:"copeDes",title:"复制"},on:{click:function(n){return n.preventDefault(),t.copyNode(e)}}}),t._v(" "),n("em",{staticClass:"fa fa-trash-o",attrs:{id:"removeDes",title:"删除"},on:{click:function(n){return t.delNode(e.id)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"split"==e.type,expression:"data.type=='split'"}],staticClass:"line-split",style:t.setLineSplit(e)})])}),0)},staticRenderFns:[]};var C=n("C7Lr")(y,v,!1,function(t){n("YR7v")},null,null).exports,x=n("qbNl");var k={init:function(t,e){var n=t.getContainer(),a=n.parentNode,s=x(n,{smoothScroll:!1,bounds:!1,autocenter:!0,zoomDoubleClickSpeed:1,minZoom:.5,maxZoom:2,beforeWheel:function(t){return e}});return t.mainContainerWrap=a,t.pan=s,s.on("zoom",function(e){var n=e.getTransform().scale;t.setZoom(n)}),s.on("panstart",function(t){}),s.on("panend",function(t,e,n){}),a.style.cursor="grab",a.addEventListener("mousedown",function(){this.style.cursor="grabbing",a.addEventListener("mouseout",function(){this.style.cursor="grab"})}),a.addEventListener("mouseup",function(){this.style.cursor="grab"}),s}},D={watch:{data:function(t){this.stepData=this.data.steps,this.links=this.data.links,this.nodeType=this.data.nodeType},stepData:function(t){this.$emit("modifyChart",{stepData:t,links:this.links})},links:function(t){this.$emit("modifyChart",{stepData:this.stepData,links:t})}},props:{data:{type:Object,default:!1}},components:{flowchartNode:C},data:function(){return{jsplumbInstance:(t={container:this.data.container,delConnections:this.delConnections,completedConnect:this.completedConnect,jsPlumb:this.data.jsPlumb},e=t.jsPlumb.getInstance({Container:t.container}),e.bind("click",function(t){e.detach(t)}),e.bind("connection",function(e){t.completedConnect()}),e.bind("connectionDetached",function(e){t.delConnections(e,function(){})}),e),stepData:[],links:[],nodeClass:c,nodeIcon:u,setClass:b,instanceZoom:"",nodeType:"",isPanZoomInit:!0,cssText:""};var t,e},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){var t=this;this.$nextTick(function(){t.drawJsplumbChart({jsplumbInstance:t.jsplumbInstance,self:t,flowData:t.stepData,links:t.links},function(){t.getLinksData(),t.isPanZoomInit&&(k.init(t.jsplumbInstance,!1),t.isPanZoomInit=!1,t.canvasMoveTo(t.data.matrix,function(e){t.jsplumbInstance.pan.moveTo(e.x,e.y)}))})})},beforeDestroy:function(){},destroyed:function(){},methods:{canvasMoveTo:function(t,e){var n=t.split("(")[1].split(")")[0].split(",");e({x:parseInt(n[4]),y:parseInt(n[5])})},setCavansMatrix:function(t){var e=o.a.filter(t,function(t){return"source"==t.type});return e[0].stepSettings&&e[0].stepSettings.matrix},setNodeTemplate:function(t){switch(t){case"flowchartnode":return C;case"cepNode":return cepNode}},drawJsplumbChart:function(t,e){var n,a,i,r,u,d=this;n=t.jsplumbInstance,a=t.self,i=t.flowData,r=function(t){d.stepData=o.a.map(d.stepData,function(e){return e.id==t.id?s()({},e,{x:t.x,y:t.y}):e})},u=o.a,n.deleteEveryEndpoint(),a.$nextTick(function(){i.forEach(function(t,e){var a=t.type,i=t.id;if("classD_A"==c(a))n.addEndpoint(i,{anchors:"RightMiddle",maxConnections:100},s()({uuid:i+"outputorigin"},f));else if("classD_B"==c(a))n.addEndpoint(i,{anchors:"LeftMiddle"},s()({uuid:i+"inputdestination"},h));else if("classD_C"==c(a)||"classW_C"==c(a))n.addEndpoint(i,{anchors:"LeftMiddle",maxConnections:-1},s()({uuid:i+"inputdestination"},h)),n.addEndpoint(i,{anchors:"RightMiddle",maxConnections:-1},s()({uuid:i+"outputorigin"},f));else if("classD_D1"==l(a)){var o=g(m(t.outputConfigurations,u));u.forEach(o,function(t,e){n.addEndpoint(i,{anchors:t.value,maxConnections:-1,overlays:[["Label",{location:[3.5,0],label:t.key,cssClass:"endpointSourceLabelMult"}]]},s()({uuid:i+t.key+"origin"},f))}),n.addEndpoint(i,{anchors:"LeftMiddle"},s()({uuid:i+"inputdestination"},h))}else"classD_D2"==l(a)?(n.addEndpoint(i,{anchors:[1,.3,0,0],maxConnections:-1,overlays:[["Label",{location:[1.5,-.5],label:"ok",cssClass:"endpointSourceLabel"}]]},s()({uuid:i+"okorigin"},f)),n.addEndpoint(i,{anchors:[1,.7,0,0],maxConnections:-1,overlays:[["Label",{location:[1.5,1.3],label:"error",cssClass:"endpointSourceLabel"}]]},s()({uuid:i+"errororigin"},f)),n.addEndpoint(i,{anchors:"LeftMiddle"},s()({uuid:i+"inputdestination"},h))):"classD_E1"==l(a)?(n.addEndpoint(i,{anchors:"RightMiddle",maxConnections:-1},s()({uuid:i+"outputorigin"},f)),n.addEndpoint(i,{anchors:[0,.3,0,0],overlays:[["Label",{location:[-1,-.5],label:"left",cssClass:"endpointSourceLabel"}]]},s()({uuid:i+"leftdestination"},h)),n.addEndpoint(i,{anchors:[0,.7,0,0],overlays:[["Label",{location:[-1,1.5],label:"right",cssClass:"endpointSourceLabel"}]]},s()({uuid:i+"rightdestination"},h))):"classD_E2"==l(a)?(n.addEndpoint(i,{anchors:"RightMiddle",maxConnections:-1},s()({uuid:i+"outputorigin"},f)),n.addEndpoint(i,{anchors:[0,.3,0,0],overlays:[["Label",{location:[-1,-.5],label:"input1",cssClass:"endpointSourceLabel"}]]},s()({uuid:i+"input1destination"},h)),n.addEndpoint(i,{anchors:[0,.7,0,0],overlays:[["Label",{location:[-1,1.5],label:"input2",cssClass:"endpointSourceLabel"}]]},s()({uuid:i+"input2destination"},h))):(n.addEndpoint(i,{anchors:"RightMiddle",maxConnections:-1},s()({uuid:i+"outputorigin"},f)),n.addEndpoint(i,{anchors:"LeftMiddle",maxConnections:"sql"==a?-1:1},s()({uuid:i+"inputdestination"},h)));n.draggable(i,{start:function(t){},drag:function(t){},stop:function(t){var e=t.el.style.top,n=t.el.style.left;r({x:parseInt(n.replace("px","")),y:parseInt(e.replace("px","")),id:t.el.attributes.id.nodeValue})}})})}),function(t,e,n,a){e.$nextTick(function(){n.forEach(function(e){t.connect({uuids:[e.source+e.sourceOutput+"origin",e.target+e.input+"destination"]})}),a()})}(t.jsplumbInstance,t.self,t.links,e)},completedConnect:function(){this.getLinksData()},delConnections:function(t,e){e(),this.getLinksData()},delNode:function(t){this.stepData=o.a.filter(o.a.cloneDeep(this.stepData),function(e){return e.id!=t})},dblClick:function(t){this.$emit("nodedblClick",t)},getLinksData:function(){var t;this.links=(t=o.a.map(this.jsplumbInstance.getAllConnections(),function(t){return{name:t.id,source:t.sourceId,sourceOutput:t.endpoints[0].canvas.nextSibling.textContent,target:t.targetId,targetInput:t.target.dataset.type,input:t.endpoints[1].canvas.nextSibling.textContent}}),o.a.map(t,function(t){return t.sourceOutput?t.sourceOutput=t.sourceOutput:t.sourceOutput="output","classD_C"==c(t.targetInput)&&(t.targetInput=t.source),t.input?t.targetInput=t.input:t.targetInput="input",t.input?t.input=t.input:t.input="input",t}))},reset:function(){this.stepData=[],this.links=[],this.jsplumbInstance.deleteEveryEndpoint("workplace")},copyNode:function(t){var e=s()({},t,{x:t.x+50,y:t.y+50,id:t.type+"_"+(this.stepData.length+1)+"_copy"});this.$emit("handleDrop",e)},setLineSplit:function(t){if("split"==t.type)switch(o.a.toArray(t.outputConfigurations).length){case 21:case 20:return"height: 280px; top: -100px;";case 19:case 18:case 17:return"height: 270px; top: -95px;";case 16:case 15:return"height: 270px; top: -90px;";case 14:case 13:case 12:return"height: 190px; top: -50px;";case 11:case 10:return"height: 155px; top: -43px;";case 9:case 8:return"height: 120px; top: -35px;";case 7:case 6:case 5:return"height: 120px; top: -25px;";default:return"height: 70px; top: 0px;"}}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jsplumb-chart"},[e("div",{staticClass:"cavansClass",attrs:{id:"cavans"}},[e("flowchartNode",{directives:[{name:"show",rawName:"v-show",value:"flowchartnode"==this.nodeType,expression:"nodeType=='flowchartnode'"}],attrs:{data:{stepData:this.stepData}},on:{dblClick:this.dblClick,copyNode:this.copyNode,delNode:this.delNode}})],1)])},staticRenderFns:[]};var w=n("C7Lr")(D,_,!1,function(t){n("NMwV")},null,null).exports;e.default={install:function(t,e){t.component("jsplumb-chart",w)}}},NMwV:function(t,e){},YR7v:function(t,e){}},["5XKs"]);
//# sourceMappingURL=app.46dec16cc9879c44c491.js.map