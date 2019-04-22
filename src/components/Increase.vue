<template>
    <div>  
        <!-- 新增对话框 -->
        <el-dialog title="新增"
                :visible.sync="dialogFormVisible"
                width="600px"
                center>
            <!-- 新增数据form表单 -->
            <el-form :model="addData"
                label-width="80px"
                ref="selectlistRow"
                :rules="rules"
                v-if="dialogFormVisible">
            <!-- 新增数据姓名input框 -->
                <el-form-item label="人员" 
                    label-width="100px"
                    center 
                    prop="name">
                    <el-input v-model="addData.name" 
                        placeholder="请输入姓名">
                    </el-input>
                </el-form-item>
                <!-- 新增数据内容input框 -->
                <el-form-item label="内容" 
                    label-width="100px" 
                    center 
                    prop="content">
                    <el-input 
                        type="textarea" 
                        :rows="6"
                        v-model="addData.content"
                        placeholder="请输入内容">
                    </el-input>
                </el-form-item>
                <!-- 新增数据日期单 -->
                <el-form-item label="日期"
                    label-width="100px"
                    center
                    prop="contdate">
                    <el-date-picker
                        v-model="addData.contdate"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <!-- 新增数据按钮事件 -->
                <el-form-item>
                    <el-button @click="dialogFormVisible = false" class="cancel">取 消</el-button>
                    <el-button type="primary" @click="handleAdd">确 定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    // 接收父组件传来的值
    props: ['NewPlusdialog','openData','tables', 'data'],
    data(){
        return{
            // 新增数据初始值
            addData:{
                name:'',
                content:'',
                contdate:'',
            },
            //校验规则 
            rules:{
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                ],
                content:[
                    {required:true,message: '请输入内容', trigger:'blur'},
                    {min:0,max:200,message:'请输入不超于200字',trigger:'blur'}
                ],
                contdate: [
                  {required:true,message: '请输入内容', trigger:'blur',type:'date'},
                ]
            },
        }
    },
    computed: {
        // 新增对话框判定
        dialogFormVisible: {
            get() {
                return this.openData;
            },
            set() {
                // 传向父组件closeDialog
                this.$emit('closeDialog')
            }
        }
    },
    methods: {
        handleAdd(){
            //获取新增的列表数据
            this.$refs['selectlistRow'].validate((valid) => {
                //判断条件是否符合
                if(valid){
                    // 将新增的数据传给父组件
                    this.$emit('determine',{...this.addData})
                    //关闭新增
                    this.dialogFormVisible = false
                }
            })
            // 清空新增缓存
            this.addData = {}
        },
    }
}
</script>

<style>

</style>

