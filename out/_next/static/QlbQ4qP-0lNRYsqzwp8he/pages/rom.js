(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{crGa:function(a,t,e){"use strict";e.r(t);var n=e("0iUn"),l=e("sLSF"),c=e("MI3g"),i=e("a7VT"),o=e("AT/M"),s=e("Tit0"),r=e("vYYK"),d=e("q1tI"),u=e.n(d),m=e("zCU4"),p=e("v6Hh"),f=e("rIQk"),b=e("Lltf"),h=e("/MKj"),O=e("YFqc"),g=e.n(O),v=e("OnOE"),j=e.n(v),w=e("GGqY"),M=e("7smD"),N=e("k7N+"),k=e.n(N),C=u.a.createElement,D=function(a){function t(){var a,e;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),d=0;d<l;d++)s[d]=arguments[d];return e=Object(c.a)(this,(a=Object(i.a)(t)).call.apply(a,[this].concat(s))),Object(r.a)(Object(o.a)(e),"state",{modalOpen:!1,modalImage:"",idd:null}),Object(r.a)(Object(o.a)(e),"openModal",(function(){e.setState({modalOpen:!0})})),Object(r.a)(Object(o.a)(e),"closeModal",(function(){e.setState({modalOpen:!1})})),Object(r.a)(Object(o.a)(e),"handleModalData",(function(a,t){e.setState({modalImage:a,idd:t})})),e}return Object(s.a)(t,a),Object(l.a)(t,[{key:"render",value:function(){var a=this,t=this.props.awards,e=this.state.modalOpen;return C(u.a.Fragment,null,C(j.a,null),C(w.b,{transition:w.a}),t.filter((function(a){return 1==a.rom})).map((function(t,e){return C("div",{className:"col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",key:e},C("div",{className:"single-product-box"},C("div",{className:"product-image"},C("a",{onClick:function(e){e.preventDefault(),a.openModal(),a.handleModalData(t.image,t.id)}},C("img",{className:"specialty-image",src:t.image,alt:"image"})),C("ul",null,C("li",null,C(g.a,{href:"#"},C("a",{"data-tip":"Quick View","data-place":"left",onClick:function(e){e.preventDefault(),a.openModal(),a.handleModalData(t.image,t.id)}},C("i",{className:"far fa-eye"})))))),C("div",{className:"product-content"},C("h3",null,C("a",{onClick:function(e){e.preventDefault(),a.openModal(),a.handleModalData(t.image,t.id)}},t.dog)),t.award,C("br",null),t.show,C("br",null),C(k.a,{format:"MMMM DD, YYYY"},t.date))))})),e?C(M.a,{closeModal:this.closeModal,idd:this.state.idd,image:this.state.modalImage,price:this.state.price}):"")}}]),t}(d.Component),y=Object(h.b)((function(a){return{awards:a.awards}}))(D),Y=u.a.createElement,G=function(a){function t(){var a,e;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),d=0;d<l;d++)s[d]=arguments[d];return e=Object(c.a)(this,(a=Object(i.a)(t)).call.apply(a,[this].concat(s))),Object(r.a)(Object(o.a)(e),"state",{gridClass:"products-col-four"}),Object(r.a)(Object(o.a)(e),"handleGrid",(function(a){e.setState({gridClass:a})})),e}return Object(s.a)(t,a),Object(l.a)(t,[{key:"render",value:function(){var a=this.state.gridClass;return Y(u.a.Fragment,null,Y(m.a,null),Y(f.a,{title:"Register of Merit"}),Y("section",{className:"products-collections-area ptb-60"},Y("div",{className:"container"},Y("div",{className:"section-title"},Y("h2",null,"Register of Merit"))),Y("div",{className:"container-fluid"},Y("div",{className:"row"},Y("div",{className:"col-lg-12 col-md-12"},Y(b.a,{onClick:this.handleGrid}),Y("div",{id:"products-filter",className:"products-collections-listing row ".concat(a)},Y(y,null)))))),Y(p.a,null))}}]),t}(d.Component);t.default=G},lvtQ:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rom",function(){return e("crGa")}])}},[["lvtQ",1,0]]]);