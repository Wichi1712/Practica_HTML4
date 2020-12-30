var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

// Red rectangle
ctx2.beginPath();
ctx2.lineWidth = "6";
ctx2.strokeStyle = "red";
ctx2.rect(5, 5, 200, 480);
ctx2.stroke();



for (var i = 0; i < 4; i++) {
    yellowRect(i * 50, i * 10);
}


function yellowRect(x, y) {
    
    // Yellow rectangle
    ctx2.beginPath();
    ctx2.lineWidth = "4";
    ctx2.strokeStyle = "yellow";
    ctx2.rect(x, y, 50, 50);
    ctx2.stroke();
}

/*

//Este es un cuadrado con relleno azul
//ctx.strokeStyle="black";
ctx2.fillStyle = "#0000ff";
ctx2.fillRect(50, 155, 150, 80);
//ctx.stroke();


// Blue rectangle
ctx2.beginPath();
ctx2.lineWidth = "10";
ctx2.strokeStyle = "blue";
ctx2.rect(50, 50, 150, 80);
ctx2.stroke();
*/