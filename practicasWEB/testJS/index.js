var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


/*Aqui empieza el campo de miniSoccer*/
//Area verde
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.fillRect(50, 300, 300, 200);

//Lineas blancas
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "#ffffff";
ctx.rect(60, 310, 280, 180);
ctx.stroke();

//Linea blanca central
ctx.beginPath();
//ctx.fillStyle = "orange";
ctx.lineWidth = "4";
ctx.moveTo(200, 310);
ctx.lineTo(200, 490);
//ctx.moveTo(200, 350);
ctx.stroke();

//Arco Izquierdo
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "#ffffff";
ctx.rect(60, 350, 50, 100);
ctx.stroke();

//Arco derecho
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "#ffffff";
ctx.rect(290, 350, 50, 100);
ctx.stroke();




/*
ctx.beginPath();
ctx.lineWidth = "12";
ctx.strokeStyle = "grey";
ctx.rect(220, 200, 150, 80);
ctx.stroke();

//ctx.fillStyle = "grey";
//ctx.fillRect(220, 200, 150, 80);
//ctx.stroke();
*/


//var canvas2 = document.getElementById("canvas2");
//var ctx2 = canvas2.getContext("2d");

//Este es un cuadrado con relleno azul
//ctx.strokeStyle="black";
//ctx2.fillStyle = "#0000ff";
//ctx2.fillRect(50, 155, 150, 80);
//ctx.stroke();

/*
// Red rectangle
ctx2.beginPath();
ctx2.lineWidth = "6";
ctx2.strokeStyle = "red";
ctx2.rect(5, 5, 290, 140);
ctx2.stroke();

// Yellow rectangle
ctx2.beginPath();
ctx2.lineWidth = "4";
ctx2.strokeStyle = "yellow";
ctx2.rect(30, 30, 50, 50);
ctx2.stroke();

// Blue rectangle
ctx2.beginPath();
ctx2.lineWidth = "10";
ctx2.strokeStyle = "blue";
ctx2.rect(50, 50, 150, 80);
ctx2.stroke();
*/