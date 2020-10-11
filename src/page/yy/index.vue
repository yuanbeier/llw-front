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
<!--            <el-row>-->
<!--                <el-col :span="4" :offset="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary" href="yy/detail">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--                <el-col :span="4" :offset="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->

<!--            </el-row>-->
<!--            <el-row>-->
<!--                <el-col :span="4" :offset="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <div class="div_box">-->
<!--                        <el-row>-->
<!--                            <el-link type="primary">出租/YY号码/频道</el-link>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <span>包/月/出/租</span>-->
<!--                        </el-row>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--            </el-row>-->
            <el-row v-for="(page,index) of pages" :key="index">
                <el-col xs="24" :lg="{span:4,offset:innerindex== 0?4:0}" :xl="['{span:4'+ ',offset:'+innerindex == 0? 4:0+'}']" v-for="(item,innerindex) of page" :key="item.id" >
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary" target="_blank" :href="['yy/detail/' +item.id]">{{item.title}}</el-link>
                        </el-row>
                        <el-row>
                            <span>{{item.subTitle}}</span>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import {listOut} from '@/api/crud/yy'
    export default {
        name: "yy",
        data(){
            return {
                listData: [],
                detailURI:"yy/detail/"
            }
        },
        mounted ()  {
            this.$nextTick(() => {
                this.init()
            })
        },
        methods:{
            init(){
                  listOut().then( response => {
                    console.log(response)
                     this.listData = response.data
                })
            }
        },
        computed:{
            pages (){
                const pages = []
                console.log("listData:="+this.listData)
                this.listData.forEach((item,index) => {
                    const page = Math.floor( index / 4)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }

    }
</script>

<style scoped>
    .el-header {
        /*background: url("/img/yy/head.png") no-repeat center ;*/
        color: #333;
        text-align: center;
        background: url("/img/yy/dog.png") no-repeat center top ;

        /*background-size:100% 100%;*/
    }

    .el-main {
        color: #333;
        text-align: center;
    }

    .el-main .el-col {
    }

    .div_box {
        height: 151px;
        width: 247px;
        border: white 3px solid;
        border-radius: 30px;
        background-color: whitesmoke;
        background-image: url("/img/yy/caseback.jpg");
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
        background-image: url("/img/yy/background.jpg");
        background-size: cover;
    }
</style>
