(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RsgI:function(a,e,t){"use strict";t.r(e);var n=t("0iUn"),l=t("sLSF"),o=t("MI3g"),i=t("a7VT"),c=t("AT/M"),s=t("Tit0"),r=t("vYYK"),d=t("q1tI"),u=t.n(d),m=t("/MKj"),p=t("zCU4"),h=t("v6Hh"),b=t("rIQk"),f=t("Lltf"),O=t("YFqc"),g=t.n(O),j=t("OnOE"),v=t.n(j),w=t("GGqY"),C=t("7smD"),N=(t("k7N+"),u.a.createElement),y=function(a){function e(){var a,t;Object(n.a)(this,e);for(var l=arguments.length,s=new Array(l),d=0;d<l;d++)s[d]=arguments[d];return t=Object(o.a)(this,(a=Object(i.a)(e)).call.apply(a,[this].concat(s))),Object(r.a)(Object(c.a)(t),"state",{modalOpen:!1,modalImage:"",idd:null}),Object(r.a)(Object(c.a)(t),"openModal",(function(){t.setState({modalOpen:!0})})),Object(r.a)(Object(c.a)(t),"closeModal",(function(){t.setState({modalOpen:!1})})),Object(r.a)(Object(c.a)(t),"handleModalData",(function(a,e){t.setState({modalImage:a,idd:e})})),t}return Object(s.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){var a=this,e=this.props.champions,t=this.state.modalOpen;return N(u.a.Fragment,null,N(v.a,null),N(w.b,{transition:w.a}),e.map((function(e,t){return N("div",{className:"col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",key:t},N("div",{className:"single-product-box"},N("div",{className:"product-image"},N("a",{onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},N("img",{className:"specialty-image",src:e.image,alt:"image"})),N("ul",null,N("li",null,N(g.a,{href:"#",as:"/oldbaynewfoundlands#"},N("a",{"data-tip":"Quick View","data-place":"left",onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},N("i",{className:"far fa-eye"})))))),N("div",{className:"product-content"},N("h3",null,e.call),e.name,N("br",null),e.owner)))})),t?N(C.a,{closeModal:this.closeModal,idd:this.state.idd,image:this.state.modalImage,price:this.state.price}):"")}}]),e}(d.Component),M=Object(m.b)((function(a){return{champions:a.champions}}))(y),k=u.a.createElement,S=function(a){function e(){var a,t;Object(n.a)(this,e);for(var l=arguments.length,s=new Array(l),d=0;d<l;d++)s[d]=arguments[d];return t=Object(o.a)(this,(a=Object(i.a)(e)).call.apply(a,[this].concat(s))),Object(r.a)(Object(c.a)(t),"state",{gridClass:"products-col-four"}),Object(r.a)(Object(c.a)(t),"handleGrid",(function(a){t.setState({gridClass:a})})),t}return Object(s.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){var a=this.state.gridClass,e=this.props,t=e.championsSort,n=e.length;return k(u.a.Fragment,null,k(p.a,null),k(b.a,{title:"Champions"}),k("section",{className:"products-collections-area ptb-60"},k("div",{className:"container"},k("div",{className:"section-title"},k("h2",null,"97 - AKC Championship Titles"),k("p",null,"75 Champions, 18 Grand Champions, 3 Grand Champion Bronze, 1 Grand Champion Silver"),k("p",null,"The following AKC Champion titles were received by dogs bred, co-bred or owned by Old Bay Newfoundlands."))),k("div",{className:"container-fluid"},k("div",{className:"row"},k("div",{className:"col-lg-12 col-md-12"},k(f.a,{onClick:this.handleGrid,sort:t,awardType:"champions",total:n}),k("div",{id:"products-filter",className:"products-collections-listing row ".concat(a)},k(M,null)))))),k(h.a,null))}}]),e}(d.Component);e.default=Object(m.b)((function(a){return{championsSort:a.championsSort,length:a.champions.length}}))(S)},f9Vw:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/champions",function(){return t("RsgI")}])}},[["f9Vw",1,0]]]);