<template>
	<div>
		<search @emitSearch="Search" @addNew="AddRow"></search>
		<increase :openData="openData" @closeDialog="openData = !openData" :tables="tables" @determine="determine" ></increase>
    <Table :tableData="tableList" :tables="tables" @accept="accept" @get-modify="onGetModify"></Table>
		<modify :openDataModify="openDataModify" :updateData="updateData" @openDataModify="openDataModify = !openDataModify" @modify="modify"></modify>
	</div>      
</template>

<script>
import Increase from '@/components/Increase'
import Search from '@/components/Search'
import Table from '@/components/Table'
import axios from 'axios'
import { connect } from 'net';
import Modify from '@/components/Modify'
import { mapState } from 'vuex'
// import vuex from 'vuex'
// let mapState = vuex.mapState
export default {
	components: {
		Increase,
		Table,
		Search,
		Modify
	},
	data() {
		return {
			updateData:{},
			Addrow:false,
			openDataModify: false,
			openData:false,
			tables:[],
      tableData: [],
      search:'',
      content:'',
			pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
		searchForm: {
				content: '',
				name: '',
				date: [],
		},
		searchData:{}
		}
	},
	computed:{
		// 对象展开运算符
		...mapState(['tableList'])
	},
	// 连接数据库
	created() {

		this.$store.dispatch('getList',this.searchForm)
		// 333 -> .then(res => {
			// 111 ->  this.tableData = res
		// })
			// axios.post('http://192.168.10.8:9090/api/list/tabel/get/list/1/10').then((res) => {
			// 	// console.log(res)
			// 	this.tableData = res.data.Model.list
			// })
			// 222 -> this.tableData = this.$store.state.tableList
  },
	methods: {
		onGetModify(val) {
			this.openDataModify = true;
			this.updateData = {...val}
		},  
		//弹出新增对话框按钮
		AddRow(){
			this.openData = true;
		},
		
		test (value) {
			this.openData= value
			axios.post('http://192.168.10.8:9090/api/list/tabel/get/list/1/10').then((res) => {
				this.tableData = res.data.Model.list
			}).catch((error) => {
				alert('error');
			})
		},
		//新增
		determine(data){
			//收到子组件传来的数据并存储到table
			this.tables = data;
			this.$store.dispatch('increaseData',data).then(res =>{
				// getlist页面刷新
				this.$store.dispatch('getList',this.searchForm)
			})
		},
		//修改
		modify(data){
			this.$store.dispatch('updataData',data).then(res =>{
			this.$store.dispatch('getList',this.searchData)
			})
		},
		//删除
		accept(data){
			//接收子组件传来的信息
			this.table = data
			let model = {
				ids: [data.id]
			}
			this.$store.dispatch('deleteData',model).then(res =>{
				this.$store.dispatch('getList',this.searchForm)
			})
		},
		//搜索
    Search(data){
			this.searchData = data
			this.$store.dispatch('getList',data)
    }
	},
	
}
</script>

<style lang="scss" scoped>
	
</style>
