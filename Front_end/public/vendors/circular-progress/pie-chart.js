(function(b,a){a(b.jQuery)}(this,function(a){var b=function(i,j){var d;var e=document.createElement("canvas");i.appendChild(e);var f=e.getContext("2d");e.width=e.height=j.size;f.translate(j.size/2,j.size/2);f.rotate((-1/2+j.rotate/180)*Math.PI);var k=(j.size-j.lineWidth)/2;Date.now=Date.now||function(){return +(new Date())};var h=function(m,o,p){p=Math.min(Math.max(-1,p||0),1);var n=p<=0?true:false;f.beginPath();f.arc(0,0,k,0,Math.PI*2*p,n);f.strokeStyle=m;f.lineWidth=o;f.stroke()};var l=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(m){window.setTimeout(m,1000/60)}}());var g=function(){if(j.trackColor){h(j.trackColor,j.lineWidth,1)}};this.clear=function(){f.clearRect(j.size/-2,j.size/-2,j.size,j.size)};this.draw=function(m){if(!!j.trackColor){if(f.getImageData&&f.putImageData){if(!d){g();d=f.getImageData(0,0,j.size,j.size)}else{f.putImageData(d,0,0)}}else{this.clear();g()}}else{this.clear()}f.lineCap=j.lineCap;h(j.barColor,j.lineWidth,m/100)}.bind(this);this.animate=function(n,p){var o=Date.now();var m=function(){var r=Math.min(Date.now()-o,j.animate.duration);var q=j.easing(this,r,n,p-n,j.animate.duration);this.draw(q);j.onStep(n,p,q);l(m)}.bind(this);l(m)}.bind(this)};var c=function(f,i){var e={barColor:"#ef1e25",trackColor:"#f9f9f9",lineCap:"round",lineWidth:3,size:150,rotate:0,animate:{duration:1000,enabled:true},easing:function(n,m,j,k,l){m=m/(l/2);if(m<1){return k/2*m*m+j}return -k/2*((--m)*(m-2)-1)+j},onStep:function(k,l,j){return},renderer:b};var h={};var d=0;var g=function(){this.element=f;this.options=h;for(var j in e){if(e.hasOwnProperty(j)){h[j]=i&&typeof(i[j])!=="undefined"?i[j]:e[j];if(typeof(h[j])==="function"){h[j]=h[j].bind(this)}}}if(typeof(h.easing)==="string"&&typeof(jQuery)!=="undefined"&&jQuery.isFunction(jQuery.easing[h.easing])){h.easing=jQuery.easing[h.easing]}else{h.easing=e.easing}this.renderer=new h.renderer(f,h);this.renderer.draw(d);if(f.getAttribute&&f.getAttribute("data-percent")){var k=parseFloat(f.getAttribute("data-percent"));if(h.animate.enabled){this.renderer.animate(d,k)}else{this.renderer.draw(k)}d=k}}.bind(this)()};a.fn.pieChart=function(d){return this.each(function(){if(!a.data(this,"pieChart")){var e=a.extend({},d,a(this).data());a.data(this,"pieChart",new c(this,e))}})}}));