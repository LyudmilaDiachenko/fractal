const canvas = document.getElementById("canvas").getContext("2d");
let ax = 250,
    ay = 10,
    bx = 1750,
    by = 10,
    cx = 1000,
    cy = 990,
    px = Math.random() * 2000,
    py = Math.random() * 1000,
    color = 'grey'

for (let i = 0; i <= 100000; i++){
    let variant = Math.ceil(Math.random() * 3)
    if (variant == 1) {
        px = (px + ax) / 2
        py = (py + ay) / 2
        color = 'green'
    } else if (variant == 2) {
        px = (px + bx) / 2
        py = (py + by) / 2
        color = 'blue'
    } else if (variant == 3) {
        px = (px + cx) / 2
        py = (py + cy) / 2
        color = 'red'
    }

    canvas.fillStyle = color
    canvas.fillRect(px, py, 1, 1);

}