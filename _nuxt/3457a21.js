(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{443:function(t,e,n){var content=n(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("f384bd6a",content,!0,{sourceMap:!1})},444:function(t,e,n){var content=n(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("6b12ee15",content,!0,{sourceMap:!1})},615:function(t,e,n){"use strict";n(443)},616:function(t,e,n){var o=n(66)((function(i){return i[1]}));o.push([t.i,'.poke-id[data-v-4f545d34]{font-size:20px}.poke-id[data-v-4f545d34],.poke-name[data-v-4f545d34]{color:#fff;font-family:"Nunito",sans-serif;font-weight:800;text-shadow:0 0 12px rgba(0,0,0,.25)}.poke-name[data-v-4f545d34]{font-size:35px;text-transform:capitalize}.poke-stats-title[data-v-4f545d34]{color:#fff;font-family:"Nunito",sans-serif;font-size:40px;font-weight:800;text-shadow:0 15px 30px rgba(0,0,0,.15)}.v-chip[data-v-4f545d34]{background:linear-gradient(180deg,#fff 0,#f7f7f7)!important;border-radius:8px;box-shadow:0 20px 25px -10px rgba(0,0,0,.15);color:rgba(0,0,0,.65);display:inline-block;font-family:"Nunito",sans-serif;font-size:12px;font-weight:800;letter-spacing:1px;margin-bottom:14px;margin-right:10px;margin-top:0;padding:6px 13px;text-transform:uppercase}.pagination-div[data-v-4f545d34]{left:0;margin-left:auto;margin-right:auto;position:absolute;right:0;text-align:center;top:20px}.size-container[data-v-4f545d34]{margin:auto auto auto 60px;padding-top:50px}.size-container span[data-v-4f545d34]{font-size:17px;font-weight:600}.size-container span[data-v-4f545d34],.size-container span span[data-v-4f545d34]{color:#fff;font-family:"Nunito",sans-serif;text-shadow:0 0 12px rgba(0,0,0,.25)}.size-container span span[data-v-4f545d34]{font-size:15px;font-weight:400}.search-field[data-v-4f545d34]{bottom:0;left:0;margin:auto;position:absolute;right:0}.search-btn[data-v-4f545d34]{background:linear-gradient(180deg,#fff 0,#f7f7f7)!important;border-radius:8px;box-shadow:0 20px 25px -10px rgba(0,0,0,.15);color:rgba(0,0,0,.65);font-family:"Nunito",sans-serif;font-weight:800;letter-spacing:1px;text-transform:uppercase}@media only screen and (max-width:768px){.size-container[data-v-4f545d34]{margin-bottom:5px;margin-left:auto;margin-top:10px;padding-top:5%}.first-column[data-v-4f545d34]{height:auto!important}.search-field[data-v-4f545d34]{max-width:100%!important;position:relative}}',""]),o.locals={},t.exports=o},617:function(t,e,n){"use strict";n(444)},618:function(t,e,n){var o=n(66)((function(i){return i[1]}));o.push([t.i,'html{overflow-y:auto}.v-pagination__item,.v-pagination__more,.v-pagination__navigation{background:transparent!important;border:0;box-shadow:none!important;color:#fff!important;font-family:"Nunito",sans-serif;font-size:17px;font-weight:800;outline:0}.v-pagination__navigation .v-icon{color:#fff!important}',""]),o.locals={},t.exports=o},631:function(t,e,n){"use strict";n.r(e);var o=n(633),r=n(628),f=n(629),c=n(627),d=n(634),l=n(632),h=n(626),v=n(625),m=n(630),_=(n(32),n(22),n(166),n(21)),x=(n(90),n(8),n(72),n(48),n(492)),y={name:"IndexPage",filters:{zerosBefore:function(t){return t?("000"+(t=t.toString())).slice(-4):""},convertSize:function(t){return t?t=(t/=10).toString():""}},data:function(){return{id:1,idCopy:1,search:"",name:"",type1:"",type2:"",artwork:"",bgColor:"",height:0,weight:0,hp:"",attack:"",defense:"",sp_attack:"",sp_defense:"",speed:""}},fetch:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://pokeapi.co/api/v2/pokemon/".concat(t.id)).then((function(e){t.id=e.id,t.idCopy=e.id,t.name=e.name,t.artwork=e.sprites.other["official-artwork"].front_default,t.type1=e.types[0].type.name,e.types.length>1?t.type2=e.types[1].type.name:t.type2="",t.height=e.height,t.weight=e.weight,t.hp=e.stats[0].base_stat,t.attack=e.stats[1].base_stat,t.defense=e.stats[2].base_stat,t.sp_attack=e.stats[3].base_stat,t.sp_defense=e.stats[4].base_stat,t.speed=e.stats[5].base_stat,new x(t.artwork).getPalette().then((function(e){t.bgColor=e.Muted.hex}))})).catch((function(e){if(e.response){var code=e.response.status,n=e.response.data;t.id=t.idCopy,n&&code||n?t.$toast.error("Pokémon not found."):t.$toast.error("An error has occurred!")}}));case 2:case"end":return e.stop()}}),e)})))()},methods:{updateId:function(t){""!==t&&(this.id=t,this.search="",this.$nuxt.refresh())}}},k=(n(615),n(617),n(84)),component=Object(k.a)(y,(function(){var t=this,e=t._self._c;return e(v.a,{staticClass:"ma-auto",style:{"background-color":t.bgColor,height:"100%"},attrs:{align:"center",justify:"center"}},[t.$vuetify.breakpoint.mdAndUp?e("div",{staticClass:"pagination-div"},[e(h.a,{attrs:{"total-visible":10,length:1010,color:"transparent"},on:{input:function(e){return t.updateId(t.id)}},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1):t._e(),t._v(" "),e(c.a,{staticClass:"first-column d-flex flex-column",staticStyle:{height:"100%"},attrs:{cols:"12",sm:"12",md:"3"}},[e(d.a,{class:t.$vuetify.breakpoint.mdAndUp?"pt-11 pl-8":"pl-2 pt-6"},[e("h2",{staticClass:"poke-id"},[t._v("#"+t._s(t._f("zerosBefore")(t.idCopy)))]),t._v(" "),e("h2",{staticClass:"poke-name"},[t._v(t._s(t.name))])]),t._v(" "),e(d.a,{staticClass:"size-container"},[e("span",{staticClass:"d-block"},[t._v("Height: "),e("span",[t._v(t._s(t._f("convertSize")(t.height))+"m")])]),t._v(" "),e("span",{staticClass:"d-block"},[t._v("Weight: "),e("span",[t._v(t._s(t._f("convertSize")(t.weight))+"kg")])])])],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"12",md:"5"}},[e(d.a,[e(l.a,{staticStyle:{width:"60%",height:"60%"},attrs:{src:t.artwork}})],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(d.a,[e(v.a,{staticClass:"ma-auto"},[e(r.a,{staticClass:"pa-2",attrs:{color:t.type1,width:"64",height:"64"}},[e(l.a,{attrs:{src:"./icons/"+t.type1+".svg"}})],1),t._v(" "),""!=t.type2?e(r.a,{staticClass:"ml-4 pa-2",attrs:{color:t.type2,width:"64",height:"64"}},[e(l.a,{attrs:{src:"./icons/"+t.type2+".svg","lazy-src":""}})],1):t._e()],1),t._v(" "),e("h3",{staticClass:"poke-stats-title my-4"},[t._v("Base stats:")]),t._v(" "),e("div",{staticClass:"text-left"},[e(f.a,[t._v(" HP: "+t._s(t.hp)+" ")]),t._v(" "),e(f.a,[t._v(" ATTACK: "+t._s(t.attack)+" ")]),t._v(" "),e(f.a,[t._v(" DEFENSE: "+t._s(t.defense)+" ")]),t._v(" "),e(f.a,[t._v(" SP. ATTACK: "+t._s(t.sp_attack)+" ")]),t._v(" "),e(f.a,[t._v(" SP. DEFENSE: "+t._s(t.sp_defense)+" ")]),t._v(" "),e(f.a,[t._v(" SPEED: "+t._s(t.speed)+" ")])],1)],1)],1),t._v(" "),e("div",{staticClass:"search-field d-flex",staticStyle:{"max-width":"25%"}},[e(m.a,{attrs:{placeholder:"Search by name or number",filled:"",rounded:"",dark:"",color:"white"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateId(t.search)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(o.a,{staticClass:"search-btn",attrs:{"x-large":""},on:{click:function(e){return t.updateId(t.search)}}},[t._v("Go!")])],1)],1)}),[],!1,null,"4f545d34",null);e.default=component.exports}}]);