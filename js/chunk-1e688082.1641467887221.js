(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e688082"],{f536:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel panel-padding"},[e("div",{staticClass:"panel-wrap"},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"table-search"},[e("el-form",{staticClass:"input-custom",attrs:{inline:!0}},[e("div",{staticClass:"table-search-user"},[e("el-form-item",{attrs:{label:"客户名称"}},[e("tree-client",{ref:"clientTree",staticStyle:{width:"180px",float:"right"},on:{inited:t.handleSearch}})],1),e("el-form-item",{attrs:{label:"查询日期"}},[e("el-date-picker",{staticStyle:{"margin-left":"10px"},attrs:{type:"month","value-format":"yyyyMM"},model:{value:t.params.dateMonth,callback:function(a){t.$set(t.params,"dateMonth",a)},expression:"params.dateMonth"}})],1)],1),e("div",{staticClass:"table-search-btn"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleSearch}},[t._v("查询")]),e("el-button",{staticStyle:{width:"80px","margin-right":"10px"},attrs:{icon:"el-icon-upload2",size:"mini"},on:{click:t.handleExport}},[t._v("导出")])],1)])],1),e("div",{staticClass:"table-list",staticStyle:{"margin-top":"20px"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"",stripe:""},on:{"sort-change":t.handleSortChange}},[e("el-table-column",{attrs:{prop:"clientName",label:"所属客户",align:"center","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{prop:"vhc_count",label:"车辆总数",align:"center",sortable:"custom","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{prop:"realmonth",label:"时间",align:"center","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{prop:"vhc_online",label:"上线车辆数",align:"center",sortable:"custom","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{prop:"rate_online",label:"上线率",align:"center",sortable:"custom","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n            "+t._s(t._f("rateFormat")(a.row.rate_online))+"\n          ")]}}])}),e("el-table-column",{attrs:{prop:"rate_position",label:"定位率",align:"center",sortable:"custom","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n            "+t._s(t._f("rateFormat")(a.row.rate_position))+"\n          ")]}}])})],1),e("el-pagination",{attrs:{background:"","page-sizes":[10,20,50,100,200],"page-size":10,"current-page":t.params.pageNum,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handlePageChange}})],1)])])])},r=[],o=(e("6b54"),e("87b3"),e("f980")),i=e("d7bb"),s=e("b438"),l=e("cf45"),c=e("2566"),p={components:{treeClient:s["a"]},data:function(){return{auth:i["a"],dataList:[],params:{clientIds:"",pageNum:1,pageSize:10,dateMonth:null,prop:"",order:""},loading:!1,total:0}},filters:{rateFormat:function(t){return Object(l["o"])(100*t,2)+"%"}},mounted:function(){setTimeout((function(){var t=$(".table-search-btn").width();$(".table-search-wrap").css("margin-right",t)}),1e3)},methods:{loadData:function(){var t=this,a=this.$refs["clientTree"].getTreeValue();0!=a.length?(this.loading=!0,this.params.clientIds=a.toString(),Object(o["b"])(this.params).then((function(a){t.loading=!1,"0000"==a.data.code?(t.dataList=a.data.data.pageList,t.total=a.data.data.total):t.$message.warning(a.data.message)}))):this.$message.warning("请选择客户后查询！")},handleSearch:function(){this.params["pageNum"]=1,this.loadData()},handlePageChange:function(t){this.params.pageNum=t,this.loadData()},handleSizeChange:function(t){this.params.pageSize=t,this.params.pageNum=1,this.loadData()},handleTargetChange:function(){1!=this.params.target&&4==this.params.type&&(this.params.type=0)},handleSortChange:function(t){var a=t.order;"ascending"==a&&(a="asc"),"descending"==a&&(a="desc"),this.params.prop=t.prop,this.params.order=a,this.loadData()},indexMethod:function(t){return(this.params.pageNum-1)*this.params.pageSize+t+1},handleExport:function(){var t="/video/report/supervise/client/onlinePosition/export";Object(c["a"])(t,this.params)}}},d=p,u=e("2877"),h=Object(u["a"])(d,n,r,!1,null,null,null);a["default"]=h.exports},f980:function(t,a,e){"use strict";e.d(a,"b",(function(){return r})),e.d(a,"a",(function(){return o}));var n=e("b775");function r(t){return Object(n["a"])({url:"/video/report/supervise/client/onlinePosition",method:"post",params:t})}function o(t){return Object(n["a"])({url:"/video/report/supervise/client/averageOverspeed",method:"post",params:t})}}}]);