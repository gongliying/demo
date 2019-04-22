<template>
    <!-- 新增对话框 -->
    <el-dialog title="修改"
        :visible.sync="dialogFormVisible"
        width="600px"
        center
    >
        <!-- 新增数据form表单 -->
        <el-form :model="updateData"
            label-width="80px"
            ref="selectlistRow"
            :rules="rules">
            <!-- 新增数据姓名input框 -->
            <el-form-item label="人员" 
                label-width="100px"
                center 
                prop="name">
                <el-input v-model="updateData.name" ></el-input>
            </el-form-item>
            <!-- 新增数据内容input框 -->
            <el-form-item label="内容" 
                label-width="100px" 
                center 
                prop="content">
                <el-input v-model="updateData.content"></el-input>
            </el-form-item>
            <!-- 新增数据日期单 -->
            <el-form-item label="日期"
                label-width="100px"
                center
                prop="contdate">
                <el-date-picker
                    v-model="updateData.contdate"
                    type="date">
                </el-date-picker>
            </el-form-item>
            <!-- 新增数据按钮事件 -->
            <el-form-item>
                <el-button @click="dialogFormVisible = false" class="cancel">取 消</el-button>
                <el-button type="primary" @click="handleSure">确 定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    props:["tables","openDataModify",'updateData'],
    data:function(){
        return{
            //校验规则 
            rules:{
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 0, max: 25, message: '请输入不超过25字', trigger: 'blur' }
                ],
                content:[
                    {required:true,message: '请输入内容', trigger:'blur'},
                    {min:0,max:200,message:'请输入不超于200字',trigger:'blur'}
                ],
                contdate: [
                    {required:true,message: '请输入日期', trigger:'change'},
                ]
            },
        }
    },
    computed: {
        dialogFormVisible: {
            get() {
                return this.openDataModify;
            },
            set() {
                this.$emit('openDataModify')
            }
        }
    },
    methods:{
        handleSure(){
            //获取修改的列表数据
            this.$refs['selectlistRow'].validate((valid) => {
                //判断条件是否符合
                if(valid){
                    console.log(valid);
                    // 将修改的数据传给父组件
                    this.$emit('modify',{...this.updateData})
                    //关闭修改
                    this.dialogFormVisible = false
                }
            })
        }
    }
}
</script>

<style>

</style>
