<template>
    <section>
        <div class="blog-index-bg-wrap" :style="{'height':clientHeight}">
            <div class="blog-index-bg-shade">
                <FloatBall></FloatBall>
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
            clientHeight: '0px'
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
</style>
