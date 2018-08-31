<template>
    <section class="float-ball-title-wrap">
        <div class="float-ball-title">
            <img src="../assets/user.png" />
        </div>
        <div class="float-ball-content-wrap">
            <div class="float-ball-content">
                <i class="iconfont icon-github"></i>
            </div>
            <div class="float-ball-content">
                <i class="iconfont icon-juejin"></i>
            </div>
            <div class="float-ball-content">
                <i class="iconfont icon-blogger"></i>
            </div>
            <div class="float-ball-content">
                <i class="iconfont icon-youxiang"></i>
            </div>
            <div class="float-ball-content">
                <i class="iconfont icon-weibiaoti-"></i>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
    @import '../../static/font/iconfont.css';

    .float-ball-title {
        width: 100px;
        height: 100px;
        margin: auto;
        border-radius: 99px;
        text-align: center;
        line-height: 100px;
        margin-top: 200px;
        background-color: #fff;
    }
    .float-ball-title img{
        width: 70%;
        margin-top: 5px;
    }
    .float-ball-title-wrap {
        margin: auto;
        text-align: center;
    }
    .float-ball-content-wrap {
        margin: auto;
        overflow: hidden;
        margin-top: 14px;
        display: inline-block;
    }
    .float-ball-content-wrap .float-ball-content {
        width: 40px;
        height: 40px;
        float: left;
        margin: 0px 10px;
        line-height: 40px;
        background-color: #fff;
        border-radius: 99px;
    }
    .float-ball-content-wrap .float-ball-content i{
        font-size: 28px;    
    }
    .float-ball-content-wrap .float-ball-content:hover {
        cursor: pointer;
    }
</style>
