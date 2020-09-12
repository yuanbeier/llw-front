<template>
    <el-container>
        <el-header style="height: 200px">
            <el-row>
                <div>
                    <audio src="/img/yy/music.mp3" loop autoplay ref="au"></audio>
                </div>
            </el-row>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="4" :offset="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary" href="yy/detail">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" :offset="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>

            </el-row>
            <el-row>

                <el-col :span="4" :offset="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="div_box">
                        <el-row>
                            <el-link type="primary">出租/YY号码/频道</el-link>
                        </el-row>
                        <el-row>
                            <span>包/月/出/租</span>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "yy",

        methods: {
            mounted: () => {
                this.$nextTick(() => {
                    this.$refs.au.play()
                })
            }
        }
    }
</script>

<style scoped>
    .el-header {
        background: url("/img/yy/head.png") no-repeat center;
        color: #333;
        text-align: center;
    }

    .el-main {
        color: #333;
        text-align: center;
        margin-top: 10px;
    }

    .el-main .el-col {
        margin-top: 10px;
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
