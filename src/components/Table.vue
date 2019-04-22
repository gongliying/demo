<template>
    <div class="core">
        <el-table :data="tableData" border 
            @selection-change='selectRow' >
            <el-table-column
                prop="contdate"
                label="日期"
                width="400%">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="400%">
            </el-table-column>
            <el-table-column
                prop="content"
                label="内容"
                width="400%">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="400%">
                <template slot-scope="scope" >
                    <el-button @click="Modify(scope.row)" type="primary" size="small">修改</el-button>
                    <el-button @click="Delete(scope.row)" type="danger" size="small" >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
import axios from 'axios'
import { close } from 'fs'
export default {
    props:["name","content","table","tables","table","tableData","data"],
    data(){
        return{
        }
    },
    methods:{
        // 获取的数据存储
        selectRow(val){
            this.selectlistRow = val
        },
        Delete(index,row) {
            // console.log(row)
            // 获取当前行的所有数据,删除所选行所有列
            this.$confirm('是否删除？','确认信息',{
                distinguishCancelAndClose: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type:'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功'
                }),
                console.log(row);
                // 将组件的信息传给父组件
                this.$emit('accept',index)
            })
            .catch(action => {
                this.$message({
                    type:'info',
                    message:'放弃删除'
                })
            })
        },
        //修改
        Modify(row) {
            // 传向父组件get-modify
            this.$emit('get-modify', row)
            //console.log(row);
             
        },
        
    },
    
        
        
    
}
</script>

<style>

</style>
