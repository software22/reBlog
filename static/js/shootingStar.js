//坐标类
class Crood {
    constructor ( x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    setCrood( x , y) {
        this.x = x;
        this.y = y;
    }
    copy() {
        return new Crood( this.x, this.y )
    }
}

//流星类
class ShootingStar {
    constructor( init = new Crood, final = new Crood, size = 10, speed = 1, onDistory = null) {
        this.init = init;
        this.final = final;
        this.size = size;
        this.speed = speed;
        
        this.dur = Math.sqrt(Math.pow(this.final.x-this.init.x, 2) + Math.pow(this.final.y-this.init.y, 2)) * 1000 / this.speed;
        this.pass = 0;
        this.prev = this.init.copy()
        this.now = this.init.copy()
        this.onDistory = onDistory;
    }
    draw( ctx , delta ) {
        this.pass += delta;
        this.pass = Math.min( this.pass , this.dur );

        let percent = this.pass / this.dur;

        this.now.setCrood(
            this.init.x + ( this.final.x - this.init.x ) * percent,
            this.init.y + ( this.final.y - this.init.y ) * percent
        );

        ctx.strokeStyle = '#fff';
        ctx.lineCap = 'round';
        ctx.lineWidth = this.size;
        ctx.beginPath();
        ctx.moveTo( this.now.x , this.now.y );
        ctx.lineTo( this.prev.x , this.prev.y );
        ctx.stroke();

        this.prev.setCrood( this.now.x , this.now.y );
        if( this.pass === this.dur ){
            this.distory();
        }
    }
    distory() {
        this.onDistory && this.onDistory();
    }
}

//流星群类
class MeteorShower {
    constructor( canvas , ctx ) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.stars = [];
        this.T;
        this.stop = false;
        this.playing = false;
    }

    createStar() {
        let angle = Math.PI / 3;
        let distance = Math.random() * 400;
        let init = new Crood( Math.random() * this.canvas.width|0, Math.random() * 100|0);
        let final = new Crood( init.x + distance * Math.cos( angle ), init.y + distance * Math.sin( angle ));
        let size = Math.random();
        let speed = Math.random() * 10 + 100;
        let star = new ShootingStar(
                        init, final, size, speed, 
                        ()=>{this.remove(star)}
                    );
        return star;
    }

    remove( star ) {
        this.stars = this.stars.filter((s)=>{ return s !== star});
    }

    update(delta) {
        if (!this.stop && this.stars.length < 20) {
            this.stars.push(this.createStar());
        }
        this.stars.forEach((star)=>{
            star.draw(this.ctx, delta);
        });
    }

    tick() {
        if (this.playing) return;
        this.playing = true;

        let now = (new Date()).getTime();
        let last = now;
        let delta;

        let  _tick = ()=>{
            if (this.stop && this.stars.length === 0) {
                cancelAnimationFrame(this.T);
                this.playing = false;
                return;
            }

            delta = now - last;
            delta = delta > 500 ? 30 : (delta < 16? 16 : delta);
            last = now;
            // console.log(delta);

            this.T = requestAnimationFrame(_tick);

            this.ctx.save();
            this.ctx.fillStyle = 'rgba(0,0,0,0.2)'
            this.ctx.globalCompositeOperation = 'destination-out';
            this.ctx.fillRect(0, 0,canvas.width, canvas.height);
            this.ctx.restore();
            this.update(delta);
        }
        _tick();
    }

    start() {
        this.stop = false;
        this.tick();
    }

    stop() {
        this.stop = true;
    }  
}

export {
    MeteorShower
}