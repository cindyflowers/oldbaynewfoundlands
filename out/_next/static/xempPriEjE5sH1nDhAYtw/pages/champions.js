(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RsgI:function(a,e,t){"use strict";t.r(e);var n=t("0iUn"),l=t("sLSF"),i=t("MI3g"),o=t("a7VT"),s=t("AT/M"),c=t("Tit0"),r=t("vYYK"),d=t("q1tI"),u=t.n(d),m=t("/MKj"),p=t("zCU4"),h=t("v6Hh"),b=t("rIQk"),f=t("Lltf"),C=t("YFqc"),O=t.n(C),g=t("OnOE"),v=t.n(g),j=t("GGqY"),w=t("7smD"),T=(t("k7N+"),u.a.createElement),N=function(a){function e(){var a,t;Object(n.a)(this,e);for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];return t=Object(i.a)(this,(a=Object(o.a)(e)).call.apply(a,[this].concat(c))),Object(r.a)(Object(s.a)(t),"state",{modalOpen:!1,modalImage:"",idd:null}),Object(r.a)(Object(s.a)(t),"openModal",(function(){t.setState({modalOpen:!0})})),Object(r.a)(Object(s.a)(t),"closeModal",(function(){t.setState({modalOpen:!1})})),Object(r.a)(Object(s.a)(t),"handleModalData",(function(a,e){t.setState({modalImage:a,idd:e})})),t}return Object(c.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){var a=this,e=this.props.champions,t=this.state.modalOpen;return T(u.a.Fragment,null,T(v.a,null),T(j.b,{transition:j.a}),e.map((function(e,t){return T("div",{className:"col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",key:t},T("div",{className:"single-product-box"},T("div",{className:"product-image"},T("a",{onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},T("img",{className:"specialty-image",src:e.image,alt:"image"})),T("ul",null,T("li",null,T(O.a,{href:"#",as:"/oldbaynewfoundlands#"},T("a",{"data-tip":"Quick View","data-place":"left",onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},T("i",{className:"far fa-eye"})))))),T("div",{className:"product-content"},T("h3",null,e.call),e.name,T("br",null),e.owner)))})),t?T(w.a,{closeModal:this.closeModal,idd:this.state.idd,image:this.state.modalImage,price:this.state.price}):"")}}]),e}(d.Component),G=Object(m.b)((function(a){return{champions:a.champions}}))(N),y=u.a.createElement,H=function(a){function e(){var a,t;Object(n.a)(this,e);for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];return t=Object(i.a)(this,(a=Object(o.a)(e)).call.apply(a,[this].concat(c))),Object(r.a)(Object(s.a)(t),"state",{gridClass:"products-col-four"}),Object(r.a)(Object(s.a)(t),"handleGrid",(function(a){t.setState({gridClass:a})})),t}return Object(c.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){var a=this.state.gridClass,e=this.props,t=e.championsSort,n=e.length,l=e.GCHTitles,i=e.CHTitles,o=e.GCHBTitles,s=e.GCHSTitles,c=e.AllCHTitles,r=void 0===c?l+i+o+s:c;return y(u.a.Fragment,null,y(p.a,null),y(b.a,{title:"Champions"}),y("section",{className:"products-collections-area ptb-60"},y("div",{className:"container"},y("div",{className:"section-title"},y("h2",null,r," - AKC Championship Titles"),y("p",null,i," Champions, ",s," Grand Champions, ",o," Grand Champion Bronze, ",s," Grand Champion Silver"),y("p",null,"The following AKC Champion titles were received by dogs bred, co-bred or owned by Old Bay Newfoundlands."))),y("div",{className:"container-fluid"},y("div",{className:"row"},y("div",{className:"col-lg-12 col-md-12"},y(f.a,{onClick:this.handleGrid,sort:t,awardType:"champions",total:n}),y("div",{id:"products-filter",className:"products-collections-listing row ".concat(a)},y(G,null)))))),y(h.a,null))}}]),e}(d.Component);e.default=Object(m.b)((function(a){return{championsSort:a.championsSort,length:a.champions.length,GCHTitles:a.GCHTitles,CHTitles:a.CHTitles,GCHBTitles:a.GCHBTitles,GCHSTitles:a.GCHSTitles}}))(H)},f9Vw:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/champions",function(){return t("RsgI")}])}},[["f9Vw",1,0]]]);