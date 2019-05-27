<template>
    <section class="home__page">
        <canvas id="test"></canvas>
        <div>
            <!-- <logo /> -->
            <h2 class="title">李玉龙的个人网站</h2>
            <p class="describe">{{juzi}}</p>

            <div class="links">
                <nav>
                    <div class="menu">
                        <ul class="clear">
                            <li>
                                <a href="https://blog.52yulong.cn" target="_blank" title="Blog">
                                    <i class="iconfont iconedit-square" aria-hidden="true"></i>
                                    <span class="link-text">网络日志</span>
                                </a>
                            </li>
                            <li>
                                <a href="/tools" title="Tool">
                                    <i class="iconfont iconwrench" aria-hidden="true"></i>
                                    <span class="link-text">在线工具集</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Portfolio">
                                    <i class="iconfont iconcustomerservice" aria-hidden="true"></i>
                                    <span class="link-text">暂未开放</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Blog">
                                    <i class="iconfont iconheart" aria-hidden="true"></i>
                                    <span class="link-text">暂未开放</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Contact">
                                    <i class="iconmail iconfont" aria-hidden="true"></i>
                                    <span class="link-text">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            juzi: '“你是神明不渡的苦 却偏偏是我的救赎”'
        }
    },
/*     async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error, $axios }) {
      try {

        const ip = await $axios.$get('/ju/5683749')
        var regexp = /<title>佳句赏析((?!句子迷).*)句子迷/;
        // var regexp = /id="xqtitle">((?!<\/div>)[\s\S]*<\/h1>)/;
        var juzi = regexp.exec(String(ip))[1];

        return { juzi }
      } catch (err) {
        
      }
    }, */
    components: {
    },
    mounted() {
        this.initCanvas();
    },
    methods: {
        initCanvas() {
            var w = window.innerWidth,
                h = window.innerHeight,
                canvas = document.getElementById('test'),
                ctx = canvas.getContext('2d'),
                rate = 60,
                arc = 20,
                time,
                count,
                size = 7,
                speed = 10,
                parts = new Array,
                colors = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
            var mouse = { x: 0, y: 0 };

            canvas.setAttribute('width', w);
            canvas.setAttribute('height', h);

            function create() {
                time = 0;
                count = 0;

                for (var i = 0; i < arc; i++) {
                    parts[i] = {
                        x: Math.ceil(Math.random() * w),
                        y: Math.ceil(Math.random() * h),
                        toX: Math.random() * 5 - 1,
                        toY: Math.random() * 2 - 1,
                        c: colors[Math.floor(Math.random() * colors.length)],
                        size: Math.random() * size
                    }
                }
            }

            function particles() {
                ctx.clearRect(0, 0, w, h);
                canvas.addEventListener('mousemove', MouseMove, false);
                for (var i = 0; i < arc; i++) {
                    var li = parts[i];
                    var distanceFactor = DistanceBetween(mouse, parts[i]);
                    var distanceFactor = Math.max(Math.min(15 - (distanceFactor / 10), 10), 1);
                    ctx.beginPath();
                    ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
                    ctx.fillStyle = li.c;
                    ctx.strokeStyle = li.c;
                    if (i % 2 == 0)
                        ctx.stroke();
                    else
                        ctx.fill();

                    li.x = li.x + li.toX * (time * 0.05);
                    li.y = li.y + li.toY * (time * 0.05);

                    if (li.x > w) {
                        li.x = 0;
                    }
                    if (li.y > h) {
                        li.y = 0;
                    }
                    if (li.x < 0) {
                        li.x = w;
                    }
                    if (li.y < 0) {
                        li.y = h;
                    }


                }
                if (time < speed) {
                    time++;
                }
                setTimeout(particles, 1000 / rate);
            }

            function MouseMove(e) {
                mouse.x = e.layerX;
                mouse.y = e.layerY;

                //context.fillRect(e.layerX, e.layerY, 5, 5);
                //Draw( e.layerX, e.layerY );
            }
            function DistanceBetween(p1, p2) {
                var dx = p2.x - p1.x;
                var dy = p2.y - p1.y;
                return Math.sqrt(dx * dx + dy * dy);
            }
            create();
            particles();
        },
        canvas2() {
            ; (function () {
                'use strict';
                var c = document.getElementById('test');
                var ctx = c.getContext('2d');
                var w = c.width = window.innerWidth;
                var h = c.height = window.innerHeight;
                var cx = w / 2;
                var cy = h / 2;
                var P = function (x, y) {
                    this.x = x;
                    this.y = y;
                    this.vx = 0;
                    this.vy = 0;
                    this.r = 1 + Math.random() * 10;
                    this.sa = Math.random() * Math.PI * 2;
                    this.ea = Math.random() * Math.PI * 2;
                    this.rt = Math.random() * Math.PI * 2;
                    this.vrt = 0;
                    this.h = 0;
                };
                P.prototype = {
                    constructor: P,
                    update: function () {
                        this.vx += Math.random() * 0.1 - 0.05;
                        this.vy += Math.random() * 0.1 - 0.05;
                        this.vrt += Math.random() * 0.02 - 0.01;
                        this.x += this.vx;
                        this.y += this.vy;
                        this.rt += this.vrt;

                        var dx = cx - this.x;
                        var dy = cy - this.y;
                        var d = Math.sqrt(dx * dx + dy * dy);

                        this.h = dx / d * 360;

                        if (this.x < 0) {
                            this.x = 0;
                            this.vx *= -1;
                        }
                        if (this.x > w) {
                            this.x = w;
                            this.vx *= -1;
                        }
                        if (this.y < 0) {
                            this.y = 0;
                            this.vy *= -1;
                        }
                        if (this.y > h) {
                            this.y = h;
                            this.vy *= -1;
                        }
                    },
                    render: function (ctx) {
                        ctx.save();
                        ctx.strokeStyle = 'black';
                        ctx.fillStyle = 'hsla(' + this.h + ', 100%, 50%, 0.5)';
                        ctx.translate(this.x, this.y);
                        ctx.rotate(this.rt);
                        ctx.beginPath();
                        ctx.arc(0, 0, this.r, this.sa, this.ea);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                };

                var ps = [];
                var p;
                var ctr = 15;

                for (var i = 0; i < ctr; i++) {
                    p = new P(Math.random() * w, Math.random() * h);
                    ps.push(p);
                }

                requestAnimationFrame(function loop() {
                    requestAnimationFrame(loop);
                    ctx.clearRect(0, 0, w, h);
                    for (var i = 0; i < ctr; i++) {
                        p = ps[i];
                        p.update();
                        p.render(ctx);
                    }
                    for (var i = 0; i < ctr; i++) {
                        var p1 = ps[i];
                        for (var j = i + 1; j < ctr; j++) {
                            var p2 = ps[j];
                            var dx = p1.x - p2.x;
                            var dy = p1.y - p2.y;
                            var d = Math.sqrt(dx * dx + dy * dy);
                            if (d < 50) {
                                ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                                ctx.beginPath();
                                ctx.moveTo(p1.x, p1.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.stroke();
                            }
                        }
                    }
                });

            })();
        }
    },

}
</script>

<style lang="less">
@import "./index.less";
canvas {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    // background-color: black;
}
</style>


