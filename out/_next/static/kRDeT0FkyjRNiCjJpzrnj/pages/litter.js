(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Vy73:function(t,l,e){"use strict";e.r(l);var a=e("kOwS"),n=e("0iUn"),i=e("sLSF"),r=e("MI3g"),s=e("a7VT"),u=e("AT/M"),c=e("Tit0"),o=e("vYYK"),d=e("q1tI"),m=e.n(d),p=e("/MKj"),f=e("zCU4"),b=e("v6Hh"),v=e("rIQk"),w=e("a6RD"),h=e.n(w),g=e("OnOE"),N=e.n(g),y=e("k7N+"),O=e.n(y),j=m.a.createElement,k=h()((function(){return e.e(2).then(e.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),x={nav:!0,dots:!0,items:1,smartSpeed:750,navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]};var M=function(t){function l(){var t,e;Object(n.a)(this,l);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return e=Object(r.a)(this,(t=Object(s.a)(l)).call.apply(t,[this].concat(i))),Object(o.a)(Object(u.a)(e),"state",{display:!1}),e}return Object(c.a)(l,t),Object(i.a)(l,[{key:"componentDidMount",value:function(){this.setState({display:!0})}},{key:"render",value:function(){return x.startPosition=function(t,l){for(var e=0;e<t.length;++e)if(t[e].id===l)return e;return-1}(this.props.litters,this.props.currentLitter),j(m.a.Fragment,null,j(f.a,null),j(v.a,{title:"Litters"}),j("section",{className:"litter-area ptb-60"},j(N.a,null),this.state.display?j(k,Object(a.a)({className:"litter-slides owl-carousel owl-theme"},x),this.props.litters.map((function(t,l){return j("div",{className:"container"},j("div",{className:"row"},j("div",{className:"col-xxl-4 col-md-6",key:t.id},j("div",{className:"litter-content"},j("h2",null,j("b",null,t.parents)),j("div",{className:"table-responsive"},j("table",{className:"table table-striped"},j("tr",null,j("td",null,"Born"),j("td",null,j(O.a,{format:"MMMM DD, YYYY"},t.dob))),j("tr",null,j("td",null,"Sire"),j("td",null,t.sire)),j("tr",null,j("td",null,"Dam"),j("td",null,t.dam)),j("tr",null,j("td",null,"Boys"),j("td",null,t.boys)),j("tr",null,j("td",null,"Girls"),j("td",null,t.girls)),j("tr",null,j("td",null,"Puppies"),j("td",null,t.puppies.map((function(t,l){return j("div",null,t)})))))))),j("div",{className:"col-xxl-4 col-md-3"},j("h2",null,j("b",null,"Sire")),j("img",{"data-tip":t.sire,"data-place":"left",src:t.sireimg,className:"litter-image",alt:"image"})),j("div",{className:"col-xxl-4 col-md-3"},j("h2",null,j("b",null,"Dam")),j("img",{"data-tip":t.dam,"data-place":"left",src:t.damimg,className:"litter-image",alt:"image"}))),j("div",{className:"col-xxl-8 col-md-6"},j("h2",null,j("b",null,"Puppies")),j("img",{src:t.pupimg,className:"litter-img2",alt:"image"})))}))):""),j(b.a,null))}}]),l}(d.Component);l.default=Object(p.b)((function(t){return{litters:t.litters,currentLitter:t.currentLitter}}))(M)},cwGf:function(t,l,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/litter",function(){return e("Vy73")}])}},[["cwGf",1,0]]]);