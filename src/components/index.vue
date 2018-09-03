<template>
    <section>
        <div class="blog-index-bg-wrap" :style="{'height':clientHeight}">
            <div class="blog-index-bg-shade">
                <transition name="fade">
                    <FloatBall v-if="show"></FloatBall>
                </transition>
            </div>
            <canvas id="canvas"></canvas>
        </div>
    </section>
</template>

<script>

import FloatBall from './FloatBall'

import { MeteorShower } from '../../static/js/shootingStar.js'

export default {
    name:'index',
    data(){
        return {
            // clientWidth: '0px',
            clientHeight: '0px',
            show: false
        }
    },
    components: {
        FloatBall
    },
    mounted (){
        let that = this;
        // that.clientWidth = `${document.documentElement.clientWidth}px`;
        that.clientHeight = `${document.documentElement.clientHeight}px`;
        window.onresize = function(){
			// that.clientWidth = `${document.documentElement.clientWidth}px`;
            that.clientHeight = `${document.documentElement.clientHeight}px`;
		}
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        let meteorShower = new MeteorShower(canvas, ctx);
        meteorShower.start();
        that.show = true;
    },
    methods:{

    }
}   
</script>

<style>
 #canvas {
        width: 100%;
        height: 60%;
    }
    .blog-index-bg-wrap {
        width: 100%;
        background: url('../assets/index-bg.jpg');
        background-size: cover;
    }
    .blog-index-bg-shade {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
