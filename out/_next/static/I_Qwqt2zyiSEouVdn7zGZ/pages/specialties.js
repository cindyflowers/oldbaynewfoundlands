(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Gkby:function(a,e,t){"use strict";t.r(e);var l=t("0iUn"),n=t("sLSF"),i=t("MI3g"),c=t("a7VT"),s=t("AT/M"),o=t("Tit0"),r=t("vYYK"),d=t("q1tI"),u=t.n(d),p=t("/MKj"),m=t("zCU4"),b=t("v6Hh"),f=t("rIQk"),h=t("Lltf"),O=t("YFqc"),g=t.n(O),j=t("OnOE"),v=t.n(j),w=t("GGqY"),M=t("7smD"),y=t("k7N+"),N=t.n(y),k=u.a.createElement,C=function(a){function e(){var a,t;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),d=0;d<n;d++)o[d]=arguments[d];return t=Object(i.a)(this,(a=Object(c.a)(e)).call.apply(a,[this].concat(o))),Object(r.a)(Object(s.a)(t),"state",{modalOpen:!1,modalImage:"",idd:null}),Object(r.a)(Object(s.a)(t),"openModal",(function(){t.setState({modalOpen:!0})})),Object(r.a)(Object(s.a)(t),"closeModal",(function(){t.setState({modalOpen:!1})})),Object(r.a)(Object(s.a)(t),"handleModalData",(function(a,e){t.setState({modalImage:a,idd:e})})),t}return Object(o.a)(e,a),Object(n.a)(e,[{key:"render",value:function(){var a=this,e=this.props.specialties,t=this.state.modalOpen;return k(u.a.Fragment,null,k(v.a,null),k(w.b,{transition:w.a}),e.map((function(e,t){return k("div",{className:"col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",key:t},k("div",{className:"single-product-box"},k("div",{className:"product-image"},k("a",{onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},k("img",{className:"specialty-image",src:e.image,alt:"image"})),k("ul",null,k("li",null,k(g.a,{href:"#"},k("a",{"data-tip":"Quick View","data-place":"left",onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},k("i",{className:"far fa-eye"})))))),k("div",{className:"product-content"},k("h3",null,k("a",{onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},e.dog)),e.award,k("br",null),e.show,k("br",null),k(N.a,{format:"MMMM DD, YYYY"},e.date))))})),t?k(M.a,{closeModal:this.closeModal,idd:this.state.idd,image:this.state.modalImage,price:this.state.price}):"")}}]),e}(d.Component),D=Object(p.b)((function(a){return{specialties:a.specialties}}))(C),S=u.a.createElement,Y=function(a){function e(){var a,t;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),d=0;d<n;d++)o[d]=arguments[d];return t=Object(i.a)(this,(a=Object(c.a)(e)).call.apply(a,[this].concat(o))),Object(r.a)(Object(s.a)(t),"state",{gridClass:"products-col-four"}),Object(r.a)(Object(s.a)(t),"handleGrid",(function(a){t.setState({gridClass:a})})),t}return Object(o.a)(e,a),Object(n.a)(e,[{key:"render",value:function(){var a=this.state.gridClass,e=this.props,t=e.specialtiesSort,l=e.length;return S(u.a.Fragment,null,S(m.a,null),S(f.a,{title:"Specialty Awards"}),S("section",{className:"products-collections-area ptb-60"},S("div",{className:"container"},S("div",{className:"section-title"},S("h2",null,"Specialty Awards"),S("p",null,"The following awards were received by dogs bred, co-bred or owned by Old Bay Newfoundlands."))),S("div",{className:"container-fluid"},S("div",{className:"row"},S("div",{className:"col-lg-12 col-md-12"},S(h.a,{onClick:this.handleGrid,sort:t,awardType:"specialties",total:l}),S("div",{id:"products-filter",className:"products-collections-listing row ".concat(a)},S(D,null)))))),S(b.a,null))}}]),e}(d.Component);e.default=Object(p.b)((function(a){return{specialtiesSort:a.specialtiesSort,length:a.specialties.length}}))(Y)},RaV4:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/specialties",function(){return t("Gkby")}])}},[["RaV4",1,0]]]);