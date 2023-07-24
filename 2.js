const canvas = document.getElementById("canvas").getContext("2d");
let x = [],
    y = [],
    px = 0,
    py = 0

document.getElementById("canvas").addEventListener('click', (eve)=>{
    let px = eve.offsetX
        py = eve.offsetY
    x.push(px)
    y.push(py)

    let variant = getVariant()
        color = getColor(variant)
    drawPoint(px, py, color)
})

document.getElementById("clear").addEventListener('click', ()=>{
    canvas.reset()
    x = []
    y = []
})
    
document.getElementById("start").addEventListener('click', ()=>{
    for (let i = 0; i <= 10000; i++){
        let variant = getVariant(),
            color = getColor(variant)
        px = (px + x[variant]) / 2
        py = (py + y[variant]) / 2
        drawPoint(px, py, color)
    }
})

function getVariant(){
    return Math.floor(Math.random() * x.length)
}

function getColor(variant){
    [r, g, b] = hslToRgb(variant / x.length, 0.75, 0.5)
    return `#${prettify(r).toString(16)}${prettify(g).toString(16)}${prettify(b).toString(16)}`
}

function drawPoint(px, py, color){
    canvas.fillStyle = color
    canvas.fillRect(px, py, 3, 3)
}

function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function prettify(color, min = 0.6){
    return Math.round(color * (min + (1 - min) * Math.random()))
}