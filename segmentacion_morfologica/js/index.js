


window.onload = function () {
    canvas = document.getElementById("frame");
    ctx = canvas.getContext("2d");
    xC = "a"
    yC = "a";
    imageX = 0;
    imageY = 0;
    width = 1000;
    height = 1000;
    ctx.beginPath();
    ctx.fillStyle =   "#242631";
    ctx.fillRect(0, 0, width, height);
    ctx.closePath();
    transitionList();
    ClickAlgoritmo();
    cordenadas();
     
}
function cordenadas(evt) {
    canvas.addEventListener("mousedown", ObtenerCoords, false);
    function ObtenerCoords(event) {

        if (event.x != undefined && event.y != undefined) {
            xC = event.x;
            yC = event.y;
        } else {
            // Firefox
            xC = event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            yC = event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }

        xC -= canvas.offsetLeft;
        yC -= canvas.offsetTop;

        //alert("x: " + x + "  y: " + y);
        if (yC > 400) {
            yC = 400;
        }
        if (xC > 400) {
            xC = 400;
        }
        segmentar();
        console.log(xC + ", " + yC)
        // segmentar();
    }
}
function limpiaCanvas() {
    document.getElementById("img1").value = "";
    ctx.beginPath();
    ctx.fillStyle =   "#242631";
    ctx.fillRect(0, 0, width, height);
    ctx.closePath();
}
function ClickAlgoritmo() {
    let op1 = document.getElementById("segmentar");
    let op2 = document.getElementById("dilatacion");
    let op3 = document.getElementById("erosion");
    let op4 = document.getElementById("perimetro");
    let op5 = document.getElementById("cierre");
    let op6 = document.getElementById("limpieza");

    console.log("ClickAlgoritmo ----");
    op1.onclick = function () {
        console.log("click 1")
        limpiaCanvas();
        algoritmo = "segmentar";
        getImage();

    }
    op2.addEventListener("click", function () {
        console.log("click 2")
        dilatacion();

    });
    op3.addEventListener("click", function () {
        console.log("click 3")

        erosion();


    });
    op4.addEventListener("click", function () {
        console.log("click 4")
        perimetro();

    });
    op5.addEventListener("click", function () {


        cierre();

    });
    op6.addEventListener("click", function () {


        limpieza();

    });
}
function getImage() {
    document.getElementById("img1").addEventListener("change", procesar);;
    console.log("primero")
}
function procesar(e) {
    let archivos = e.target.files;
    let archivo = archivos[0];
    let reader = new FileReader;
    reader.addEventListener("loadend", mostrar);
    reader.readAsDataURL(archivo);
}

function mostrar(e) {
    let imageStore = new Image();
    imageStore.onload = function () {
        console.log("tercero")
        ctx.drawImage(imageStore, imageX, imageY, 400, 400);
        //selectAlgoritmos(algoritmo);
        algoritmo = " ";
    }
    imageStore.src = e.target.result;

    console.log("segundo");
}


function selectAlgoritmos(option) {

    if (option === "segmentar") {
        segmentar();
        return;
    }

    if (option === "escala-gris") {
        grayImage();
        return;
    }

    if (option == "H-gris") {
        histogramaGris();
        return;
    }

    if (option === "H-RGB") {
        histogramaColor();
        return;
    }

    if (Option === "operadores") {
        operadores();
        return;
    }

    if (option === "negativo") {
        negativo();
        return;
    }
} 
function transitionList() {

    let clickAlgoritmo = document.getElementById("btn-algoritmo");
    let listAlgoritmos = document.getElementById("container-a");
    let count = 0;
    clickAlgoritmo.addEventListener('click', () => {
        if (count == 1) {
            listAlgoritmos.style.transition = "all 1s ease-in-out 0s";
            listAlgoritmos.style.visibility = "hidden";
            listAlgoritmos.style.opacity = "0";

            count = 0;
        }
        else {

            listAlgoritmos.style.transition = "all 1s ease-in-out 0s";
            listAlgoritmos.style.visibility = "visible";
            listAlgoritmos.style.opacity = "1";
            count++;
        }

    });


    //click sobre la lista
    let a1 = document.getElementById("title-a1");
    let infoA1 = document.getElementById("descripcion-a1");
    let a2 = document.getElementById("title-a2");
    let infoA2 = document.getElementById("descripcion-a2");
    let a3 = document.getElementById("title-a3");
    let infoA3 = document.getElementById("descripcion-a3");
    let a4 = document.getElementById("title-a4");
    let infoA4 = document.getElementById("descripcion-a4");
    let a5 = document.getElementById("title-a5");
    let infoA5 = document.getElementById("descripcion-a5");

    let a6 = document.getElementById("title-a6");
    let infoA6 = document.getElementById("descripcion-a6");
     
    let count2 = 0;
    a1.addEventListener("click", () => {
        if (count2 == 1) {
            infoA1.transition = "all 1s ease-in-out 0s";
            infoA1.style.display = "none";
            listAlgoritmos.style.visibility = "hidden";
            infoA1.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA1.transition = "all 1s ease-in-out 0s";
            infoA1.style.display = "block";
            listAlgoritmos.style.visibility = "visible";
            infoA1.style.opacity = "1";
            count2++;

        }
    });

    a2.addEventListener("click", () => {
        if (count2 == 1) {
            infoA2.transition = "all 1s ease-in-out 0s";
            infoA2.style.display = "none";
            infoA2.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA2.transition = "all 1s ease-in-out 0s";
            infoA2.style.display = "block";
            infoA2.style.opacity = "1";
            count2++;

        }

    });

    a3.addEventListener("click", () => {
        if (count2 == 1) {
            infoA3.transition = "all 1s ease-in-out 0s";
            infoA3.style.display = "none";
            infoA3.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA3.transition = "all 1s ease-in-out 0s";
            infoA3.style.display = "block";
            infoA3.style.opacity = "1";
            count2++;
        }
    });

    a4.addEventListener("click", () => {
        if (count2 == 1) {
            infoA4.transition = "all 1s ease-in-out 0s";
            infoA4.style.display = "none";
            infoA4.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA4.transition = "all 1s ease-in-out 0s";
            infoA4.style.display = "block";
            infoA4.style.opacity = "1";
            count2++;
        }
    });

    a5.addEventListener("click", () => {
        if (count2 == 1) {
            infoA5.transition = "all 1s ease-in-out 0s";
            infoA5.style.display = "none";
            infoA5.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA5.transition = "all 1s ease-in-out 0s";
            infoA5.style.display = "block";
            infoA5.style.opacity = "1";
            count2++;
        }
    });

    a6.addEventListener("click", () => {
        if (count2 == 1) {
            infoA6.transition = "all 1s ease-in-out 0s";
            infoA6.style.display = "none";
            infoA6.style.opacity = "0";
            count6 = 0;
        }
        else {
            infoA6.transition = "all 1s ease-in-out 0s";
            infoA6.style.display = "block";
            infoA6.style.opacity = "1";
            count2++;
        }
    });

    
}
function segmentar() {
    let info = ctx.getImageData(imageX, imageY, 400, 400);
    let info2 = ctx.getImageData(imageX, imageY, 400, 400);
    let pos;
    let distancia = 0;
    let pos2 = (info.width * 4 * yC) + (xC * 4);
    let umbral = document.getElementById("umbral").value;

    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            distancia = Math.abs(Math.pow((info.data[pos2] - info.data[pos]), 2))
            distancia += Math.abs(Math.pow((info.data[pos2 + 1] - info.data[pos + 1]), 2))
            distancia += Math.abs(Math.pow((info.data[pos2 + 2] - info.data[pos + 2]), 2))

            if (distancia > umbral) {
                info2.data[pos] = 0;
                info2.data[pos + 1] = 0;
                info2.data[pos + 2] = 0;
            } else if (distancia <= umbral) {
                info2.data[pos] = 255;
                info2.data[pos + 1] = 255;
                info2.data[pos + 2] = 255;
            }

        }
    }
    ctx.putImageData(info2, (imageX + 500) + 50, imageY);

    return info2;
}
function dilatacion() {
    let info = ctx.getImageData(imageX + 500, imageY, 400, 400);
    let info2 = ctx.getImageData(imageX + 500, imageY, 400, 400);
    let info3 = ctx.getImageData(imageX + 500, imageY, 400, 400);
    let pos;
    let pos2;
    let s = document.getElementById("m").value;
     


    if (s % 2 != 0) {
        for (let x = 0; x < 400; x++) {
            for (let y = 0; y < 400; y++) {
                for (let i = 0; i < s; i++) {
                    for (let j = 0; j < s; j++) {
                        pos = (info.width * 4 * (y + j)) + ((x + i) * 4);
                        if (info.data[pos] == 255) {
                            pos2 = (info.width * 4 * (y + (s - 1) / 2)) + ((x + (s - 1) / 2) * 4)
                            info2.data[pos2] = 255;
                            info2.data[pos2 + 1] = 255;
                            info2.data[pos2 + 2] = 255;
                        }
                    }
                }
            }
        }
        ctx.putImageData(info2, (imageX), imageY + 500);
        ctx.font = "bold 20px arial";  
        texto = "dilatación"
        ctx.fillStyle ="#FFFFFF"
        ctx.strokeStyle ="#000000"
        ctx.fillText(texto, (imageX +  100), imageY + 495); 
        ctx.strokeText(texto, (imageX +  100), imageY + 495); 
    }
    else {
        alert("ingrese un numero impar para la matriz");
    }
     


    return info2;
}
function negro() {
    let info = ctx.getImageData(imageX, imageY, 400, 400);
    let pos;
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos] = 0;
            info.data[pos + 1] = 0;
            info.data[pos + 2] = 0;
        }
    }

    return info;

}
function erosion() {
    let info = ctx.getImageData(imageX + 500, imageY, 400, 400);
    let info2 = ctx.getImageData(imageX + 500, imageY, 400, 400);
    let info3 = ctx.getImageData(imageX + 500, imageY, 400, 400);
    let pos;
    let pos2;
    let s = document.getElementById("m").value;
     

    let cont = 0;
    if (s % 2 != 0) {
        for (let x = 0; x < 400; x++) {
            for (let y = 0; y < 400; y++) {

                for (let i = 0; i < s; i++) {
                    for (let j = 0; j < s; j++) {
                        pos = (info.width * 4 * (y + j)) + ((x + i) * 4);
                        if (info.data[pos] == 0) {
                            cont++;
                            if (cont == (s * s) - 1) {
                                pos2 = (info.width * 4 * (y + (s - 1) / 2)) + ((x + (s - 1) / 2) * 4)
                                info2.data[pos2] = 255;
                                info2.data[pos2 + 1] = 255;
                                info2.data[pos2 + 2] = 255;
                                cont = 0;
                            } else {
                                pos2 = (info.width * 4 * (y + (s - 1) / 2)) + ((x + (s - 1) / 2) * 4)
                                info2.data[pos2] = 0;
                                info2.data[pos2 + 1] = 0;
                                info2.data[pos2 + 2] = 0;
                                cont = 0;
                            }

                        }


                    }
                }

            }
        }
        ctx.putImageData(info2, (imageX + 500), imageY + 500);
        ctx.font = "bold 20px arial";  
        texto = "erosión"
        ctx.fillStyle ="#FFFFFF"
         
        ctx.fillText(texto, (imageX +  600), imageY + 495); 
    }
    else {
        alert("ingrese un numero impar para la matriz");
    }
    return info2;
}

function perimetro() {
    let info = ctx.getImageData(imageX+500, imageY, 400, 400);
    let info2 = erosion();

    let pos;
     
     
    //inicio de erosion
     
     
        
        //fin de erosion

        let info3 =  info2;
        //inicio de resta y calculo del perimetro
        for (let x = 0; x < 400; x++) {
            for (let y = 0; y < 400; y++) {
                pos = (info.width * 4 * y) + (x * 4);
                info3.data[pos + 0] = Math.abs(info.data[pos] - info2.data[pos])
                info3.data[pos + 1] = Math.abs(info.data[pos + 1] - info2.data[pos + 1])
                info3.data[pos + 2] = Math.abs(info.data[pos + 2] - info2.data[pos + 2])
            }
        }
        //perimetro (original - erosion)
        ctx.putImageData(info3, (imageX ), imageY + 500);
        ctx.font = "bold 20px arial";  
        texto = "perimetro"
        ctx.fillStyle ="#FFFFFF"
         
        ctx.fillText(texto, (imageX +  100), imageY + 495); 
     

     
}

function cierre() {

    let info = dilatacion();
    let info2 = ctx.getImageData(imageX, imageY + 500, 400, 400); info;

    let pos;
    let pos2;
    let s = document.getElementById("m").value;
     

    let cont = 0;
    if (s % 2 != 0) {
        for (let x = 0; x < 400; x++) {
            for (let y = 0; y < 400; y++) {

                for (let i = 0; i < s; i++) {
                    for (let j = 0; j < s; j++) {
                        pos = (info.width * 4 * (y + j)) + ((x + i) * 4);
                        if (info.data[pos] == 0) {
                            cont++;
                            if (cont == (s * s) - 1) {
                                pos2 = (info.width * 4 * (y + (s - 1) / 2)) + ((x + (s - 1) / 2) * 4)
                                info2.data[pos2] = 255;
                                info2.data[pos2 + 1] = 255;
                                info2.data[pos2 + 2] = 255;
                                cont = 0;
                            } else {
                                pos2 = (info.width * 4 * (y + (s - 1) / 2)) + ((x + (s - 1) / 2) * 4)
                                info2.data[pos2] = 0;
                                info2.data[pos2 + 1] = 0;
                                info2.data[pos2 + 2] = 0;
                                cont = 0;
                            }

                        }


                    }
                }

            }
        }
        ctx.putImageData(info2, (imageX + 500), imageY + 500);
        ctx.font = "bold 20px arial";  
        texto = "cierre"
        ctx.fillStyle ="#000000"
        ctx.strokeStyle ="#FFFFFF"
         
        ctx.fillText(texto, (imageX +  600), imageY + 495);
        ctx.strokeText(texto, (imageX +  600), imageY + 495);  
    }
    else {
        alert("ingrese un numero impar para la matriz");
    }
    return info2;
}

function limpieza(){
    let info3  = erosion();
    let info2 =  ctx.getImageData(imageX +500, imageY + 500, 400, 400);  
     
     
    let pos;
    let pos2;
    let s = document.getElementById("m").value;
     


    if (s % 2 != 0) {
        for (let x = 0; x < 400; x++) {
            for (let y = 0; y < 400; y++) {
                for (let i = 0; i < s; i++) {
                    for (let j = 0; j < s; j++) {
                        pos = (info3.width * 4 * (y + j)) + ((x + i) * 4);
                        if (info3.data[pos] == 255) {
                            pos2 = (info3.width * 4 * (y + (s - 1) / 2)) + ((x + (s - 1) / 2) * 4)
                            info2.data[pos2] = 255;
                            info2.data[pos2 + 1] = 255;
                            info2.data[pos2 + 2] = 255;
                        }
                    }
                }
            }
        }
        ctx.putImageData(info2, (imageX), imageY + 500);
        ctx.font = "bold 20px arial";  
        texto = "limpieza"
        ctx.fillStyle ="#000000"
         
        ctx.fillText(texto, (imageX +  100), imageY + 495); 
    }
    else {
        alert("ingrese un numero impar para la matriz");
    }
}