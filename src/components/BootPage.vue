<template>
    <canvas id="canvas">您的浏览器不支持canvas标签，请更换浏览器！</canvas>
</template>

<style scoped>

</style>

<script>
    var w = window.innerWidth;
	var h = window.innerHeight;


    class Draw {
        constructor(el) {
            this.el = el;
			this.canvas = document.getElementById("canvas");
			
            this.cxt = this.canvas.getContext("2d");
			this.stage_info = canvas.getBoundingClientRect();
			this.drops = [];
        }
        init() {
            this.x = this.random(0,w);
            this.y = 0;
			
            this.canvas.width = w
            this.canvas.height = h
			// y方向的速度值
			this.vy = this.random(4,5);
			// 雨滴下落的最大y值
            this.l = this.random(0.8*h,0.9*h);
            	
			this.r=1;// 添加波纹初始半径
			this.vr=1;// 波纹半径增大的速度
			this.a = 1;// 判断雨滴消失的透明度
			this.va = 0.96;//透明度的变化系数
        }
        draw(){//绘制图形
				if(this.y > this.l){//雨滴已下落到指定位置,就绘制波纹
					this.cxt.beginPath();//先开始路径，每次绘制前，先提笔
					this.cxt.arc(this.x,this.y,this.r,0,Math.PI*2,false);
					this.cxt.strokeStyle = 'rgb(0,255,255)';
					this.cxt.stroke();
				}else{//绘制下落的雨滴
					this.cxt.fillStyle = 'rgb(0,255,255)';
					this.cxt.fillRect(this.x,this.y,2,10);
				}
					
			this.update();//每次绘制都更新；
        }
        update(){//更新坐标位置
			if(this.y<this.l){
				this.y+=this.vy;
			}else{//雨滴下落到指定位置
				if(this.a>0.01){
					this.r += this.vr;	
					if(this.r > 30 ){//当半径大于50后，透明度会越来越大
						this.a *= this.va;
					}
				}else{
					this.init();//雨滴重新初始化
				}
			}
		}
		random(min,max){
			return Math.random()*(max-min)+min;//min-max之间的随机数
		}
		moved(){
			console.log(this);
			this.cxt.fillStyle = 'rgba(0,0,0,0.1)';
			this.cxt.fillRect(0,0,w,h);
			for(var i=0;i < this.drops.length;i++){
				this.drops[i].draw();
			}
			requestAnimationFrame(this.moved);
		}
		start(obj){
			for(var i=0;i<30;i++){
				setTimeout(function(){
					obj.init();
					obj.drops.push(obj);//添加到雨滴数组
				},i*300)
			}
		}
    }

    export default {
    mounted() {
		var drop = new Draw();
		drop.start(drop);
		console.log(drop.moved())
    }
}
</script>
