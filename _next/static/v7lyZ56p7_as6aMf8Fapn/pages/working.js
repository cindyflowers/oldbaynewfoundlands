(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{isdl:function(e,a,t){"use strict";t.r(a);var l=t("0iUn"),n=t("sLSF"),i=t("MI3g"),o=t("a7VT"),r=t("AT/M"),c=t("Tit0"),s=t("vYYK"),d=t("q1tI"),u=t.n(d),g=t("/MKj"),m=t("zCU4"),p=t("v6Hh"),f=t("rIQk"),b=t("Lltf"),h=t("YFqc"),O=t.n(h),v=t("OnOE"),w=t.n(v),j=t("GGqY"),k=t("7smD"),y=(t("k7N+"),u.a.createElement),N=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),d=0;d<n;d++)c[d]=arguments[d];return t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c))),Object(s.a)(Object(r.a)(t),"state",{modalOpen:!1,modalImage:"",idd:null}),Object(s.a)(Object(r.a)(t),"openModal",(function(){t.setState({modalOpen:!0})})),Object(s.a)(Object(r.a)(t),"closeModal",(function(){t.setState({modalOpen:!1})})),Object(s.a)(Object(r.a)(t),"handleModalData",(function(e,a){t.setState({modalImage:e,idd:a})})),t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=this.props.working,t=this.state.modalOpen;return y(u.a.Fragment,null,y(w.a,null),y(j.b,{transition:j.a}),a.map((function(a,t){return y("div",{className:"col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",key:t},y("div",{className:"single-product-box"},y("div",{className:"product-image"},y("a",{onClick:function(t){t.preventDefault(),e.openModal(),e.handleModalData(a.image,a.id)}},y("img",{className:"specialty-image",src:a.image,alt:"image"})),y("ul",null,y("li",null,y(O.a,{href:"#",as:"/oldbaynewfoundlands#"},y("a",{"data-tip":"Quick View","data-place":"left",onClick:function(t){t.preventDefault(),e.openModal(),e.handleModalData(a.image,a.id)}},y("i",{className:"far fa-eye"})))))),y("div",{className:"product-content"},y("h3",null,a.call),a.name,y("br",null),a.owner)))})),t?y(k.a,{closeModal:this.closeModal,idd:this.state.idd,image:this.state.modalImage,price:this.state.price}):"")}}]),a}(d.Component),D=Object(g.b)((function(e){return{working:e.working}}))(N),C=u.a.createElement,A=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),d=0;d<n;d++)c[d]=arguments[d];return t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c))),Object(s.a)(Object(r.a)(t),"state",{gridClass:"products-col-four"}),Object(s.a)(Object(r.a)(t),"handleGrid",(function(e){t.setState({gridClass:e})})),t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.state.gridClass,a=this.props,t=a.workingSort,l=a.length;return C(u.a.Fragment,null,C(m.a,null),C(f.a,{title:"Working"}),C("section",{className:"products-collections-area ptb-60"},C("div",{className:"container"},C("div",{className:"section-title"},C("h2",null,"AKC Performance and NCA Working Titles"),C("p",null,C("br",null),C("h2",null,"53 - AKC Obedience and Rally Titles")," ",C("br",null),"20 Companion Dogs, 3 Companion Dog Excellant, 1 Utiltiy Dog, 4 Beginner Novice,  12 Rally Novice, 5 Rally Advanced, 1 Rally Excellant, 4 Trick Dog Novice, 2 Trick Dog Intermediate, 1 Trick Dog Advanced"),C("p",null,C("h2",null,"13 - AKC Agility Titles"),C("br",null),"4 Novice Agility Preferred, 3 Novice Jumpers Preferred, 2 Open Agility Prreferred, 2 Open Jumpers Preferred, 1 Agility Excellent Preferred, 1 Agility Jumpers Excellent Preffered"),C("p",null,C("h2",null,"76 - NCA Working Titles/Requalifications"),C("br",null),"21 Water Dog, 25 Water Rescue Dog, 1 Water Rescue Dog Excellant, 16 Draft Dog, 2 Draft Dog Excellant, 9 Team Draft Dogs, 2 Team Draft Dog Excellant"),C("p",null,"The following AKC Performance and NCA Working Titles titles were received by dogs bred, co-bred or owned by Old Bay Newfoundlands."))),C("div",{className:"container-fluid"},C("div",{className:"row"},C("div",{className:"col-lg-12 col-md-12"},C(b.a,{onClick:this.handleGrid,sort:t,awardType:"working",total:l}),C("div",{id:"products-filter",className:"products-collections-listing row ".concat(e)},C(D,null)))))),C(p.a,null))}}]),a}(d.Component);a.default=Object(g.b)((function(e){return{workingSort:e.workingSort,length:e.working.length}}))(A)},rzyj:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/working",function(){return t("isdl")}])}},[["rzyj",1,0]]]);