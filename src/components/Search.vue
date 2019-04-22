<template>
    <!-- 查找与新增 -->
    <div class="header">
        <el-form :inline="true">
            <el-form-item lable="按条件查找">按条件查找:</el-form-item>
            <el-form-item>
                <el-form-item lable="日期">日期：</el-form-item>
                    <el-date-picker
                        v-model="searchForm.date"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    >
                </el-date-picker>
            </el-form-item>
            <!-- 姓名 -->
            <el-form-item lable="姓名">姓名：</el-form-item>
            <el-form-item>
                    <el-input placeholder="请输入姓名" v-model="searchForm.name" width="30px"></el-input>
            </el-form-item>
            <!-- 内容 -->
            <el-form-item lable="内容">内容：</el-form-item>
            <el-form-item>
                <el-input placeholder="请输入内容" v-model="searchForm.content"></el-input>
            </el-form-item>
            <!-- 查询新增 -->
            <el-form-item>
                <el-row>
                    <!-- 查询 -->
                    <el-button type="primary" class="header_search" @click="Search()"  >查询</el-button>
                    <!-- 新增 -->
                    <el-button @click="AddRow()" class="header_add" type="danger">新增</el-button>
                </el-row>
            </el-form-item>
        </el-form> 
    </div>  
</template>

<script>
import axios from 'axios'
export default {
    data:function(){
        return{
            searchForm: {
                content: '',
                name: '',
                date: [],
            }
        }
    },
    methods:{
        // 查找
        Search(){
            // 把信息发送回emiSearch
            this.$emit('emitSearch', this.searchForm)
        },
        // 增加
        AddRow(){
            // 信息发送回addNew
            this.$emit('addNew')
        }
    }
}
</script>

<style>

</style>
