<template>
    <el-container>
        <el-header style="height: 77px">
            <el-row>
                <div>
<!--                    <audio ref="audio" controls  src="/img/yy/music.mp3" loop="loop"  autoplay="autoplay" hidden="true">-->
<!--                    </audio>-->
                </div>
            </el-row>
        </el-header>
        <el-main>
            <el-row>

                <el-col :span="16" :offset="4">
<div v-html="content">
</div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import {get} from '@/api/crud/tt'
    export default {
        name: "detail",
        data (){
            return{
                id: null,
                content: "",
                data:[]
            }
        },
        created() {
            this.id = this.$route.params.id
            this.$nextTick(() => {
                this.init()
            })
        },
        methods:{
            init(){
                get(this.id).then( response => {
                    console.log("response"+ response)
                    this.data = response.data
                    this.content = this.data.content

                })
            }
        }
    }
</script>

<style scoped>
    .el-header {
        /*background: url("/img/yy/head.png") no-repeat center;*/
        color: #333;
        text-align: center;
        background: url("/img/yy/dog.png") no-repeat center top ;
    }

    .el-main {
        color: black;
    }

    .el-main .el-col {
    }

    .div_box {
        height: 151px;
        width: 247px;
        border: white 3px solid;
        border-radius: 30px;
        background-color: whitesmoke;
        background-size: cover;
        margin: auto;
    }

    .div_box .el-link {
        font-size: 28px;
        margin-top: 30px;
    }

    .div_box .el-row {
        margin-top: 10px;
    }

    .div_box span {
        color: white;
    }

    .el-container {
        height: 100%;
        background-size: cover;
    }
</style>
