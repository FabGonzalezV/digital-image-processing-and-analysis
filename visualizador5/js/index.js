
/*Armando Fabian Gonzalez Valentin*/
window.onload = function () {
    canvas = document.getElementById("frame");
    ctx = canvas.getContext("2d");
    imageX = 100;
    imageY = 0;
    width = 1050;
    height = 1200;

    transitionList();
    ClickAlgoritmo();
    //video();
}
function limpiaCanvas() {
    document.getElementById("img1").value = "";
    ctx.beginPath();
    ctx.fillStyle = "#242631";
    ctx.fillRect(0, 0, width, height);
    ctx.closePath();
}
function ClickAlgoritmo() {
    let op1 = document.getElementById("RGB");
    let op2 = document.getElementById("escala-gris");
    let op3 = document.getElementById("H-gris");
    let op4 = document.getElementById("H-RGB");
    let op5 = document.getElementById("negativo");
    let op6 = document.getElementById("operadores");
    let op7 = document.getElementById("seleccionar");
    let op8 = document.getElementById("bordes");
    let op9 = document.getElementById("bordesc");
    let op10 = document.getElementById("suma");
    let op11 = document.getElementById("resta");

    console.log("ClickAlgoritmo ----");
    op1.onclick = function () {
        console.log("click 1")
        limpiaCanvas();
        algoritmo = "RGB";
        getImage();

    }
    op2.addEventListener("click", function () {
        console.log("click 2")
        limpiaCanvas();
        algoritmo = "escala-gris";
        getImage();

    });
    op3.addEventListener("click", function () {
        console.log("click 3")
        limpiaCanvas();
        algoritmo = "H-gris";
        getImage()

    });
    op4.addEventListener("click", function () {
        console.log("click 4")
        limpiaCanvas();
        algoritmo = "H-RGB";
        getImage();

    });
    op5.addEventListener("click", function () {

        limpiaCanvas();
        algoritmo = "negativo";
        getImage();

    });
    op6.addEventListener("click", function () {

        limpiaCanvas();
        algoritmo = "operadores";
        getImage2();
        getImage();

    });
    op7.addEventListener("click", function () {

        limpiaCanvas();
        algoritmo = "seleccionar";
        getImage();

    });
    op8.addEventListener("click", function () {

        limpiaCanvas();
        algoritmo = "bordes";

        getImage();

    });

    op9.addEventListener("click", function () {

        limpiaCanvas();
        algoritmo = "bordesc";

        getImage();

    });
    op10.addEventListener("click", function () {

        limpiaCanvas();
        algoritmo = "suma";
        getImage2()
        getImage();

    });
    op11.addEventListener("click", function () {

        limpiaCanvas();
        algoritmo = "resta";
        getImage2()
        getImage();

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
        selectAlgoritmos(algoritmo);
        algoritmo = " ";
    }
    imageStore.src = e.target.result;

    console.log("segundo");
}

function getImage2(option) {
    let data = document.getElementById("img2");
    let reader = new FileReader();
    let imageStore = new Image();
    let file;
    data.addEventListener("change", getFile, false);
    function getFile(ev) {
        file = ev.target.files[0];
        getDataFile(file);
    }
    function getDataFile(file) {
        reader.onloadend = function (event) {
            imageStore.onload = function (ev) {
                console.log("getImage2");
                ctx.drawImage(ev.target, imageX * 5, imageY, 400, 400);
                //selectAlgoritmos(option);
            }
            imageStore.src = event.target.result;
        }
        reader.readAsDataURL(file);
    }

}
function selectAlgoritmos(option) {

    if (option === "RGB") {
        RGB();
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
    if (option === "operadores") {
        operadores()

        return;
    }
    if (option === "seleccionar") {
        seleccionar()

        return;
    }
    if (option === "bordes") {
        grayImage()
        bordes(imageX + 400, imageY)


        return;
    }
    if (option === "bordesc") {

        bordes(imageX, imageY)


        return;
    }
    if (option === "suma") {

        suma()
        return;
    }
    if (option === "resta") {

        resta()
        return;
    }
}
function RGB() {
    let info = ctx.getImageData(imageX, imageY, 400, 400);
    let pos;
    //rojo
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos + 1] = 0;
            info.data[pos + 2] = 0;
        }
    }
    ctx.putImageData(info, (imageX * 5) + 50, imageY);
    //vrede
    info = ctx.getImageData(imageX, imageY, 400, 400);
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos + 0] = 0;
            info.data[pos + 2] = 0;
        }
    }
    ctx.putImageData(info, imageX, imageY + 450);
    //azul
    info = ctx.getImageData(imageX, imageY, 400, 400);
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos] = 0;
            info.data[pos + 1] = 0;
        }
    }
    ctx.putImageData(info, (imageX * 5) + 50, imageY + 450);

    return 0;
}
function grayImage() {
    let info = ctx.getImageData(imageX, imageY, 400, 400);
    let pos;
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos + 1] = info.data[pos];
            info.data[pos + 2] = info.data[pos];
        }
    }
    ctx.putImageData(info, (imageX * 5) + 50, imageY);
    console.log("gris");
    return info;
}
function negativo() {
    let info = ctx.getImageData(imageX, imageY, 400, 400);
    let pos;
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos] = 255 - info.data[pos];
            info.data[pos + 1] = 255 - info.data[pos + 1];
            info.data[pos + 2] = 255 - info.data[pos + 2];
        }
    }
    ctx.putImageData(info, (imageX * 5) + 50, imageY);
    return;
}
function operadores() {
    let info1 = ctx.getImageData(imageX, imageY, 400, 400);
    let info2 = ctx.getImageData(imageX * 5, imageY, 400, 400);
    let imageOut1 = ctx.getImageData(imageX, imageY, 400, 400);
    let imageOut2 = ctx.getImageData(imageX, imageY, 400, 400);
    let imageOut3 = ctx.getImageData(imageX, imageY, 400, 400);

    let pos;
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info1.width * 4 * y) + (x * 4);
            imageOut1.data[pos] = ((info1.data[pos]) & (info2.data[pos]));
            imageOut1.data[pos + 1] = ((info1.data[pos + 1]) & (info2.data[pos + 1]));
            imageOut1.data[pos + 2] = ((info1.data[pos + 2]) & (info2.data[pos + 2]));

            imageOut2.data[pos] = ((info1.data[pos]) | (info2.data[pos]));
            imageOut2.data[pos + 1] = ((info1.data[pos + 1]) | (info2.data[pos + 1]));
            imageOut2.data[pos + 2] = ((info1.data[pos + 2]) | (info2.data[pos + 2]));

            imageOut3.data[pos] = 255 - imageOut3.data[pos]
            imageOut3.data[pos + 1] = 255 - imageOut3.data[pos + 1]
            imageOut3.data[pos + 2] = 255 - imageOut3.data[pos + 2]
        }
    }
    ctx.putImageData(imageOut1, imageX, imageY + 400);
    ctx.putImageData(imageOut2, imageX + 400, imageY + 400);
    ctx.putImageData(imageOut3, imageX, imageY + 800);

    return;
}
function histogramaColor() {
    let info = ctx.getImageData(imageX, imageY, 400, 400);
    let pos;
    let frecuencia = new Array(255);
    let frecuencia1 = new Array(255);
    let frecuencia2 = new Array(255);
    for (let j = 0; j < frecuencia.length; j++) {
        frecuencia[j] = 0;
        frecuencia1[j] = 0;
        frecuencia2[j] = 0;
    }

    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            frecuencia[info.data[pos]]++;
            frecuencia1[info.data[pos + 1]]++;
            frecuencia2[info.data[pos + 2]]++;
        }
    }
    for (let i = 0; i < frecuencia.length; i++) {

        if (frecuencia[i] <= 4000) {
            frecuencia[i] = (frecuencia[i] * 0.1);
            ctx.beginPath();
            //ctx.fillStyle = "red";
            ctx.strokeStyle = "red";
            ctx.rect((i * 6 + 100) + 20, 800 - frecuencia[i], 3, 800 - (800 - frecuencia[i]));
            ctx.stroke();
            //ctx.fill();
        }
        if (frecuencia1[i] <= 4000) {
            frecuencia1[i] = (frecuencia1[i] * 0.1);
            ctx.beginPath();
            //ctx.fillStyle = "green";
            ctx.strokeStyle = "green";
            ctx.rect((i * 6 + 100) + 20, 800 - frecuencia1[i], 3, 800 - (800 - frecuencia1[i]));
            ctx.stroke();
            //ctx.fill();
        }
        if (frecuencia2[i] <= 4000) {
            frecuencia2[i] = (frecuencia2[i] * 0.1);
            ctx.beginPath();
            //ctx.fillStyle = "blue";
            ctx.strokeStyle = "blue";
            ctx.rect((i * 6 + 100) + 20, 800 - frecuencia2[i], 3, 800 - (800 - frecuencia2[i]));
            ctx.stroke();
            //ctx.fill();
        }

        if (frecuencia[i] >= 4000) {
            frecuencia[i] = (frecuencia[i] * 0.001);
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.strokeStyle = "red";
            ctx.rect((i * 6 + 100) + 20, 800 - frecuencia[i], 3, 800 - (800 - frecuencia[i]));
            ctx.stroke();
            ctx.fill();
        }
        if (frecuencia1[i] >= 4000) {
            frecuencia1[i] = (frecuencia1[i] * 0.001);
            ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.strokeStyle = "green";
            ctx.rect((i * 6 + 100) + 20, 800 - frecuencia1[i], 3, 800 - (800 - frecuencia1[i]));
            ctx.stroke();
            ctx.fill();
        }
        if (frecuencia2[i] >= 4000) {
            frecuencia2[i] = (frecuencia2[i] * 0.001);
            ctx.beginPath();
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "blue";
            ctx.rect((i * 6 + 100) + 20, 800 - frecuencia2[i], 3, 800 - (800 - frecuencia2[i]));
            ctx.stroke();
            ctx.fill();
        }
    }

    ctx.putImageData(info, imageX * 5, imageY);
    return;
}
function histogramaGris() {
    let info = ctx.getImageData(imageX, imageY, 400, 400);
    let pos;
    let frecuencia = new Array(255);
    for (let j = 0; j < frecuencia.length; j++) {
        frecuencia[j] = 0;
    }
    console.log(frecuencia);
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos + 1] = info.data[pos];
            info.data[pos + 2] = info.data[pos];
            frecuencia[info.data[pos]]++;
        }
    }


    for (let i = 0; i < frecuencia.length; i++) {
        if (frecuencia[i] <= 4000) {
            frecuencia[i] = (frecuencia[i] * 0.1);
            ctx.beginPath();
            //ctx.fillStyle = "red";
            ctx.strokeStyle = "red";
            ctx.rect((i * 6 + 100) + 20, 800 - frecuencia[i], 3, 800 - (800 - frecuencia[i]));
            ctx.stroke();
            //ctx.fill();
        }
        if (frecuencia[i] >= 4000) {
            frecuencia[i] = (frecuencia[i] * 0.001);
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.strokeStyle = "red";
            ctx.rect((i * 6 + 100) + 20, 800 - frecuencia[i], 3, 800 - (800 - frecuencia[i]));
            ctx.stroke();
            ctx.fill();
        }
    }

    ctx.putImageData(info, imageX * 5, imageY);
    return frecuencia;

}
function seleccionar(evt) {
    let info = ctx.getImageData(imageX, imageY, 400, 400)
    let info2 = ctx.getImageData(imageX, imageY, 400, 400)
    let xWidth, yHeight
    let cordenadas = {
        x: 0,
        y: 0
    }
    let cordenadasUp = {
        x: 0,
        y: 0
    }
    canvas.addEventListener("mousedown", ObtenerCoords, false);
    function ObtenerCoords(event) {
        if (event.x != undefined && event.y != undefined) {
            cordenadas.x = event.x;
            cordenadas.y = event.y;
        } else {
            // Firefox
            cordenadas.x = event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            cordenadas.y = event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }

        cordenadas.x -= canvas.offsetLeft;
        cordenadas.y -= canvas.offsetTop;

        if (cordenadas.y > 500) {
            cordenadas.y = 500;
        }
        if (cordenadas.x > 500) {
            cordenadas.x = 500;
        }

        canvas.addEventListener('mousemove', ObtenerCoordsUp, false);
        canvas.addEventListener('mouseup', function () {

            canvas.removeEventListener('mousemove', ObtenerCoordsUp, false)


        }, false);


    }

    function ObtenerCoordsUp(event) {
        if (event.x != undefined && event.y != undefined) {
            cordenadasUp.x = event.x;
            cordenadasUp.y = event.y;
        } else {
            // Firefox
            cordenadasUp.x = event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            cordenadasUp.y = event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }

        cordenadasUp.x -= canvas.offsetLeft;
        cordenadasUp.y -= canvas.offsetTop;

        if (cordenadasUp.y > 500) {
            cordenadasUp.y = 500;
        }
        if (cordenadasUp.x > 500) {
            cordenadasUp.x = 500;
        }


        xWidth = Math.abs(cordenadasUp.x - cordenadas.x)
        yHeight = Math.abs(cordenadasUp.y - cordenadas.y);
        ctx.putImageData(info, imageX, imageY)
        info2 = ctx.getImageData(cordenadas.x, cordenadas.y, xWidth, yHeight)


        ctx.beginPath();
        ctx.strokeStyle = "#FF0000";
        ctx.strokeRect(cordenadas.x, cordenadas.y, xWidth, yHeight);
        ctx.closePath();


        grayImage();
        ctx.putImageData(info2, (cordenadas.x + 400) + 50, cordenadas.y)




    }


}
function bordes(imageX, imageY) {
    let info = ctx.getImageData(imageX, imageY, 400, 400);
    let pos;
    let pos2;
    let rgb1 = [3];
    let rgb2 = [3];
    let rgb3 = [3];
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            pos2 = (info.width * 4 * y + 1) + (x * 4);

            rgb1[0] = info.data[pos] - info.data[pos + 4]
            rgb2[0] = info.data[pos + 1] - info.data[pos + 5]
            rgb3[0] = info.data[pos + 2] - info.data[pos + 6]

            rgb1[1] = info.data[pos] - info.data[pos2 + 0]
            rgb2[1] = info.data[pos + 1] - info.data[pos2 + 1]
            rgb3[1] = info.data[pos + 2] - info.data[pos2 + 2]

            rgb1[2] = info.data[pos] - info.data[pos2 + 4]
            rgb2[2] = info.data[pos + 1] - info.data[pos2 + 5]
            rgb3[2] = info.data[pos + 2] - info.data[pos2 + 6]

            info.data[pos + 0] = rgb1.sort(function (a, b) { return a - b })[2];
            info.data[pos + 1] = rgb2.sort(function (a, b) { return a - b })[2];
            info.data[pos + 2] = rgb3.sort(function (a, b) { return a - b })[2];

        }
    }
    ctx.putImageData(info, imageX, imageY + 410);
}
function suma() {
    let info = ctx.getImageData(imageX, imageY, 400, 400)
    let info3 = ctx.getImageData(imageX + 400, imageY, 400, 400)
    let info2 = ctx.getImageData(imageX, imageY, 400, 400)


    let pos;
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos + 0] = ((info2.data[pos] + info3.data[pos + 0]) * 255) / 1000
            info.data[pos + 1] = ((info2.data[pos] + info3.data[pos + 1]) * 255) / 1000
            info.data[pos + 2] = ((info2.data[pos] + info3.data[pos + 2]) * 255) / 1000
        }
    }
    ctx.putImageData(info, imageX, imageY + 400);

    return info;


}
function resta() {
    let info = ctx.getImageData(imageX, imageY, 400, 400)
    let info3 = ctx.getImageData(imageX + 400, imageY, 400, 400)
    let info2 = ctx.getImageData(imageX, imageY, 400, 400)


    let pos;
    for (let x = 0; x < 400; x++) {
        for (let y = 0; y < 400; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos + 0] = Math.abs((info2.data[pos] - info3.data[pos + 0]) ) 
            info.data[pos + 1] = Math.abs((info2.data[pos] - info3.data[pos + 1])  )
            info.data[pos + 2] = Math.abs((info2.data[pos] - info3.data[pos + 2])  )
        }
    }
    ctx.putImageData(info, imageX, imageY + 400);

    return info;


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
    let a7 = document.getElementById("title-a7");
    let infoA7 = document.getElementById("descripcion-a7");
    let a8 = document.getElementById("title-a8");
    let infoA8 = document.getElementById("descripcion-a8");
    let a9 = document.getElementById("title-a9");
    let infoA9 = document.getElementById("descripcion-a9");
    let a10 = document.getElementById("title-a10");
    let infoA10 = document.getElementById("descripcion-a10");
    let a11 = document.getElementById("title-a11");
    let infoA11 = document.getElementById("descripcion-a11");
    
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

    a7.addEventListener("click", () => {
        if (count2 == 1) {
            infoA7.transition = "all 1s ease-in-out 0s";
            infoA7.style.display = "none";
            infoA7.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA7.transition = "all 1s ease-in-out 0s";
            infoA7.style.display = "block";
            infoA7.style.opacity = "1";
            count2++;
        }
    });

    a8.addEventListener("click", () => {
        if (count2 == 1) {
            infoA8.transition = "all 1s ease-in-out 0s";
            infoA8.style.display = "none";
            infoA8.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA8.transition = "all 1s ease-in-out 0s";
            infoA8.style.display = "block";
            infoA8.style.opacity = "1";
            count2++;
        }
    });
    a9.addEventListener("click", () => {
        if (count2 == 1) {
            infoA9.transition = "all 1s ease-in-out 0s";
            infoA9.style.display = "none";
            infoA9.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA9.transition = "all 1s ease-in-out 0s";
            infoA9.style.display = "block";
            infoA9.style.opacity = "1";
            count2++;
        }
    });

    a10.addEventListener("click", () => {
        if (count2 == 1) {
            infoA10.transition = "all 1s ease-in-out 0s";
            infoA10.style.display = "none";
            infoA10.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA10.transition = "all 1s ease-in-out 0s";
            infoA10.style.display = "block";
            infoA10.style.opacity = "1";
            count2++;
        }
    });

    a11.addEventListener("click", () => {
        if (count2 == 1) {
            infoA11.transition = "all 1s ease-in-out 0s";
            infoA11.style.display = "none";
            infoA11.style.opacity = "0";
            count2 = 0;
        }
        else {
            infoA11.transition = "all 1s ease-in-out 0s";
            infoA11.style.display = "block";
            infoA11.style.opacity = "1";
            count2++;
        }
    });


}