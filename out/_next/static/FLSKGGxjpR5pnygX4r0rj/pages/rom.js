(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{crGa:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),i=a("sLSF"),l=a("MI3g"),r=a("a7VT"),o=a("AT/M"),c=a("Tit0"),s=a("vYYK"),d=a("q1tI"),u=a.n(d),f=a("/MKj"),m=a("zCU4"),p=a("v6Hh"),g=a("rIQk"),O=a("Lltf"),h=a("YFqc"),b=a.n(h),M=a("OnOE"),v=a.n(M),j=a("GGqY"),w=a("7smD"),N=a("k7N+"),k=a.n(N),C=u.a.createElement,y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,c=new Array(i),d=0;d<i;d++)c[d]=arguments[d];return a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c))),Object(s.a)(Object(o.a)(a),"state",{modalOpen:!1,modalImage:"",idd:null}),Object(s.a)(Object(o.a)(a),"openModal",(function(){a.setState({modalOpen:!0})})),Object(s.a)(Object(o.a)(a),"closeModal",(function(){a.setState({modalOpen:!1})})),Object(s.a)(Object(o.a)(a),"handleModalData",(function(e,t){a.setState({modalImage:e,idd:t})})),a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.registerOfMerit,a=this.state.modalOpen;return C(u.a.Fragment,null,C(v.a,null),C(j.b,{transition:j.a}),t.map((function(t,a){return C("div",{className:"col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",key:a},C("div",{className:"single-product-box"},C("div",{className:"product-image"},C("a",{onClick:function(a){a.preventDefault(),e.openModal(),e.handleModalData(t.image,t.id)}},C("img",{className:"specialty-image",src:t.image,alt:"image"})),C("ul",null,C("li",null,C(b.a,{href:"#",as:"/oldbaynewfoundlands#"},C("a",{"data-tip":"Quick View","data-place":"left",onClick:function(a){a.preventDefault(),e.openModal(),e.handleModalData(t.image,t.id)}},C("i",{className:"far fa-eye"})))))),C("div",{className:"product-content"},C("h3",null,C("a",{onClick:function(a){a.preventDefault(),e.openModal(),e.handleModalData(t.image,t.id)}},t.dog)),t.award,C("br",null),t.show,C("br",null),C(k.a,{format:"MMMM DD, YYYY"},t.date))))})),a?C(w.a,{closeModal:this.closeModal,idd:this.state.idd,image:this.state.modalImage,price:this.state.price}):"")}}]),t}(d.Component),D=Object(f.b)((function(e){return{registerOfMerit:e.registerOfMerit}}))(y),S=u.a.createElement,Y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,c=new Array(i),d=0;d<i;d++)c[d]=arguments[d];return a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c))),Object(s.a)(Object(o.a)(a),"state",{gridClass:"products-col-four"}),Object(s.a)(Object(o.a)(a),"handleGrid",(function(e){a.setState({gridClass:e})})),a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.gridClass,t=this.props,a=t.registerOfMeritSort,n=t.length;return S(u.a.Fragment,null,S(m.a,null),S(g.a,{title:"Register of Merit"}),S("section",{className:"products-collections-area ptb-60"},S("div",{className:"container"},S("div",{className:"section-title"},S("h2",null,"Register of Merit"),S("p",null,"A ROM is a Newfoundland that has been admitted to the Newfoundland Club of America's Register of Merit for producing multiple ROMs, Champions, and performance (suffix) titled offspring."))),S("div",{className:"container-fluid"},S("div",{className:"row"},S("div",{className:"col-lg-12 col-md-12"},S(O.a,{onClick:this.handleGrid,sort:a,awardType:"registerOfMerit",total:n}),S("div",{id:"products-filter",className:"products-collections-listing row ".concat(e)},S(D,null)))))),S(p.a,null))}}]),t}(d.Component);t.default=Object(f.b)((function(e){return{registerOfMeritSort:e.registerOfMeritSort,length:e.registerOfMerit.length}}))(Y)},lvtQ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rom",function(){return a("crGa")}])}},[["lvtQ",1,0]]]);