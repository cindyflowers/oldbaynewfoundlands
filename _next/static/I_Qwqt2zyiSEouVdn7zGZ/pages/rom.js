(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{crGa:function(t,e,a){"use strict";a.r(e);var n=a("0iUn"),i=a("sLSF"),l=a("MI3g"),r=a("a7VT"),o=a("AT/M"),c=a("Tit0"),s=a("vYYK"),d=a("q1tI"),u=a.n(d),f=a("/MKj"),m=a("zCU4"),p=a("v6Hh"),g=a("rIQk"),O=a("Lltf"),h=a("YFqc"),b=a.n(h),M=a("OnOE"),v=a.n(M),j=a("GGqY"),w=a("7smD"),N=a("k7N+"),k=a.n(N),C=u.a.createElement,y=function(t){function e(){var t,a;Object(n.a)(this,e);for(var i=arguments.length,c=new Array(i),d=0;d<i;d++)c[d]=arguments[d];return a=Object(l.a)(this,(t=Object(r.a)(e)).call.apply(t,[this].concat(c))),Object(s.a)(Object(o.a)(a),"state",{modalOpen:!1,modalImage:"",idd:null}),Object(s.a)(Object(o.a)(a),"openModal",(function(){a.setState({modalOpen:!0})})),Object(s.a)(Object(o.a)(a),"closeModal",(function(){a.setState({modalOpen:!1})})),Object(s.a)(Object(o.a)(a),"handleModalData",(function(t,e){a.setState({modalImage:t,idd:e})})),a}return Object(c.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.props.registerOfMerit,a=this.state.modalOpen;return C(u.a.Fragment,null,C(v.a,null),C(j.b,{transition:j.a}),e.map((function(e,a){return C("div",{className:"col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",key:a},C("div",{className:"single-product-box"},C("div",{className:"product-image"},C("a",{onClick:function(a){a.preventDefault(),t.openModal(),t.handleModalData(e.image,e.id)}},C("img",{className:"specialty-image",src:e.image,alt:"image"})),C("ul",null,C("li",null,C(b.a,{href:"#"},C("a",{"data-tip":"Quick View","data-place":"left",onClick:function(a){a.preventDefault(),t.openModal(),t.handleModalData(e.image,e.id)}},C("i",{className:"far fa-eye"})))))),C("div",{className:"product-content"},C("h3",null,C("a",{onClick:function(a){a.preventDefault(),t.openModal(),t.handleModalData(e.image,e.id)}},e.dog)),e.award,C("br",null),e.show,C("br",null),C(k.a,{format:"MMMM DD, YYYY"},e.date))))})),a?C(w.a,{closeModal:this.closeModal,idd:this.state.idd,image:this.state.modalImage,price:this.state.price}):"")}}]),e}(d.Component),D=Object(f.b)((function(t){return{registerOfMerit:t.registerOfMerit}}))(y),S=u.a.createElement,Y=function(t){function e(){var t,a;Object(n.a)(this,e);for(var i=arguments.length,c=new Array(i),d=0;d<i;d++)c[d]=arguments[d];return a=Object(l.a)(this,(t=Object(r.a)(e)).call.apply(t,[this].concat(c))),Object(s.a)(Object(o.a)(a),"state",{gridClass:"products-col-four"}),Object(s.a)(Object(o.a)(a),"handleGrid",(function(t){a.setState({gridClass:t})})),a}return Object(c.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.gridClass,e=this.props,a=e.registerOfMeritSort,n=e.length;return S(u.a.Fragment,null,S(m.a,null),S(g.a,{title:"Register of Merit"}),S("section",{className:"products-collections-area ptb-60"},S("div",{className:"container"},S("div",{className:"section-title"},S("h2",null,"Register of Merit"),S("p",null,"A ROM is a Newfoundland that has been admitted to the Newfoundland Club of America's Register of Merit for producing multiple ROMs, Champions, and performance (suffix) titled offspring."))),S("div",{className:"container-fluid"},S("div",{className:"row"},S("div",{className:"col-lg-12 col-md-12"},S(O.a,{onClick:this.handleGrid,sort:a,awardType:"registerOfMerit",total:n}),S("div",{id:"products-filter",className:"products-collections-listing row ".concat(t)},S(D,null)))))),S(p.a,null))}}]),e}(d.Component);e.default=Object(f.b)((function(t){return{registerOfMeritSort:t.registerOfMeritSort,length:t.registerOfMerit.length}}))(Y)},lvtQ:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rom",function(){return a("crGa")}])}},[["lvtQ",1,0]]]);