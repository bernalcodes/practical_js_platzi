//Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triángulo

console.group("Triángulos");

//Altura de triángulo isósceles

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales.");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo

console.group("Círculos");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//Aquí interactuamos con el HTML

//Cálculos para cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    
    alert(area);
}

//Cáculos para triángulo

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("primerLadoTriangulo");
    const value1 = lado1.value;

    const lado2 = document.getElementById("segundoLadoTriangulo");
    const value2 = lado2.value;

    const base = document.getElementById("baseTriangulo");
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);

    alert(perimetro);
}

function calcularAreaTriangulo() {
    const ladoA = document.getElementById("primerLadoTriangulo");
    const valueA = ladoA.value;

    const ladoB = document.getElementById("segundoLadoTriangulo");
    const valueB = ladoB.value;

    const base = document.getElementById("baseTriangulo");
    const valueBase = base.value;

    const altura = alturaTrianguloIsosceles(valueA, valueB, valueBase);

    const area = areaTriangulo(valueBase, altura);

    alert(area);
}

//Cálculos para círculo

function calcularPerimetroCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area);
}