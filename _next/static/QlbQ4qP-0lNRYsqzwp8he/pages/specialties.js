(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Gkby:function(a,e,t){"use strict";t.r(e);var n=t("0iUn"),l=t("sLSF"),c=t("MI3g"),i=t("a7VT"),o=t("AT/M"),s=t("Tit0"),d=t("vYYK"),r=t("q1tI"),u=t.n(r),m=t("zCU4"),p=t("v6Hh"),b=t("rIQk"),f=t("Lltf"),h=t("/MKj"),O=t("YFqc"),g=t.n(O),w=t("OnOE"),v=t.n(w),j=t("GGqY"),M=t("7smD"),N=t("k7N+"),y=t.n(N),k=u.a.createElement,C=function(a){function e(){var a,t;Object(n.a)(this,e);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return t=Object(c.a)(this,(a=Object(i.a)(e)).call.apply(a,[this].concat(s))),Object(d.a)(Object(o.a)(t),"state",{modalOpen:!1,modalImage:"",idd:null}),Object(d.a)(Object(o.a)(t),"openModal",(function(){t.setState({modalOpen:!0})})),Object(d.a)(Object(o.a)(t),"closeModal",(function(){t.setState({modalOpen:!1})})),Object(d.a)(Object(o.a)(t),"handleModalData",(function(a,e){t.setState({modalImage:a,idd:e})})),t}return Object(s.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){var a=this,e=this.props.awards,t=this.state.modalOpen;return k(u.a.Fragment,null,k(v.a,null),k(j.b,{transition:j.a}),e.map((function(e,t){return k("div",{className:"col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",key:t},k("div",{className:"single-product-box"},k("div",{className:"product-image"},k("a",{onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},k("img",{className:"specialty-image",src:e.image,alt:"image"})),k("ul",null,k("li",null,k(g.a,{href:"#"},k("a",{"data-tip":"Quick View","data-place":"left",onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},k("i",{className:"far fa-eye"})))))),k("div",{className:"product-content"},k("h3",null,k("a",{onClick:function(t){t.preventDefault(),a.openModal(),a.handleModalData(e.image,e.id)}},e.dog)),e.award,k("br",null),e.show,k("br",null),k(y.a,{format:"MMMM DD, YYYY"},e.date))))})),t?k(M.a,{closeModal:this.closeModal,idd:this.state.idd,image:this.state.modalImage,price:this.state.price}):"")}}]),e}(r.Component),D=Object(h.b)((function(a){return{awards:a.awards}}))(C),Y=u.a.createElement,S=function(a){function e(){var a,t;Object(n.a)(this,e);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return t=Object(c.a)(this,(a=Object(i.a)(e)).call.apply(a,[this].concat(s))),Object(d.a)(Object(o.a)(t),"state",{gridClass:"products-col-four"}),Object(d.a)(Object(o.a)(t),"handleGrid",(function(a){t.setState({gridClass:a})})),t}return Object(s.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){var a=this.state.gridClass;return Y(u.a.Fragment,null,Y(m.a,null),Y(b.a,{title:"Specialty Awards"}),Y("section",{className:"products-collections-area ptb-60"},Y("div",{className:"container"},Y("div",{className:"section-title"},Y("h2",null,"Specialty Awards"),Y("p",null,"The following awards were received by dogs bred, co-bred or owned by Old Bay Newfoundlands."))),Y("div",{className:"container-fluid"},Y("div",{className:"row"},Y("div",{className:"col-lg-12 col-md-12"},Y(f.a,{onClick:this.handleGrid}),Y("div",{id:"products-filter",className:"products-collections-listing row ".concat(a)},Y(D,null)))))),Y(p.a,null))}}]),e}(r.Component);e.default=S},RaV4:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/specialties",function(){return t("Gkby")}])}},[["RaV4",1,0]]]);