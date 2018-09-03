<template>
    <section class="float-ball-title-wrap">
        <div class="float-ball-title">
            <img src="../assets/user.png" />
        </div>
        <div class="float-ball-content-wrap">
            <div class="float-ball-content">
                <i class="iconfont icon-github"></i>
                <span></span>
                <span></span>
            </div>
            <div class="float-ball-content">
                <i class="iconfont icon-juejin"></i>
                <span></span>
                <span></span>
            </div>
            <div class="float-ball-content">
                <i class="iconfont icon-blogger"></i>
                <span></span>
                <span></span>
            </div>
            <div class="float-ball-content">
                <i class="iconfont icon-youxiang"></i>
                <span></span>
                <span></span>
            </div>
            <div class="float-ball-content">
                <i class="iconfont icon-weibiaoti-"></i>
                <span></span>
                <span></span>
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
        transition: All 0.6s ease-in-out;
        -webkit-transition: All 0.6s ease-in-out;
        -moz-transition: All 0.6s ease-in-out;
        -o-transition: All 0.6s ease-in-out;
    }
    .float-ball-title:hover {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
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
        position: relative;
    }
    .float-ball-content-wrap .float-ball-content i{
        font-size: 28px;    
        z-index: 2;
        position: relative;
    }
    .float-ball-content-wrap .float-ball-content:hover {
        cursor: pointer;
    }
    .float-ball-content-wrap .float-ball-content:hover > span{
        animation: balling 3s linear infinite;
        -webkit-animation: balling 3s linear infinite;
    }
    @keyframes balling {
        0%{
            transform: scale(1);
            opacity: 0.5;  
            }
            50%{
                transform: scale(1.5);  
                opacity: 0;  
            }
            100%{
                transform: scale(1);
                opacity: 0.5;
            }
    }
    .float-ball-content span{
            position: absolute;
            width: 40px;
            height: 40px;
            left: 0;
            bottom: 0;
            background: #fff;
            border-radius: 99px;
        }
        .float-ball-content span:nth-child(2){
            animation-delay: 1.5s;
            -webkit-animation-delay: 1.5s; 
        }
</style>
