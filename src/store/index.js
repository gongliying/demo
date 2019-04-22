import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
    state:{
        tableList:[]
    },
    mutations:{
        changeList(state,data){
            state.tableList = data
            // console.log(state.tableList)
        },
    },
    actions:{
        // 查询表格数据
        getList(store,data){
            return axios.post('http://192.168.10.8:9090/api/list/tabel/get/list/1/10',data)
            .then((res) => {
                store.commit('changeList',res.data.Model.list)
                // console.log(res)
                // 111 -> return res.data.Model.list
                // 222 -> 
            })
            .catch((error) => {
                alert('error');
            })
        },
        //新增
        increaseData(store,data){
            return axios.post('http://192.168.10.8:9090/api/list/tabel/save/content',data)
            .then((res) => {
            })
            .catch((error) => {
                alert('error');
            }) 
        },
        //修改
        updataData(store,data){
            return axios.post('http://192.168.10.8:9090/api/list/tabel/change/item',data)
            .then((res) => {
                // store.commit('updataList',res.data.Model.list)
                // console.log(res)
			})
		    .catch((error) => {
				alert('error');
			 })
        },
        // 删除数据
        deleteData(store,data){
            return axios.post('http://192.168.10.8:9090/api/list/tabel/delete/items',data)
            .then((res) => {
			})
		    .catch((error) => {
				alert('error');
			 })
        }
    }
})
