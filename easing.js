//Tween.move(div, attr, change, duration, easing, endFn)
//Tween.move(div, 'top', 50, 600);
var Tween = {
    easeInOutBack: function(t,b,c,d,s){
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInQuad: function(t,b,c,d){
        return c*(t/=d)*t + b;
    }
};

Tween.move = function(div, attr, change, duration, easing, endFn) {
    var t = 0, duration = duration || 600;
    easing = easing ? this[easing] : this.easeInOutBack;
    var curVal = parseInt(getComputedStyle(div, null)[attr]);

    var run = function() {
        t += 10;
        
        val = easing(t, curVal, change, duration);
        div.style[attr] = val + 'px';

        if (t < duration) {
            requestAnimationFrame(run);
        } else if (endFn) {
            endFn();
        }
    };

    run();
};