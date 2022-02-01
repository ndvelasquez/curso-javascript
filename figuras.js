/**CALCULAR AREA DE CUADRADO */
const squareArea = (side) =>  side * side;

/**CALCULAR PERIMETRO DE CUADRADO */
const squarePerimeter = (side) => side * 4;

/*CALCULAR ALTURA DE TRIANGULO ISOSCELES */
const triangleHeight = (base, side1, side2) => {
    if (side1 == side2 && side1 != base) {
        Math.sqrt((side1**2) - ((base**2) / 4));
    } else {
        console.error('no es un triangulo isosceles');
    }
}

/**CALCULAR AREA DE TRIANGULO */
const triangleArea = (base, height) => (base * height) / 2;

/**CALCULAR PERIMETRO TRIANGULO */
const trianglePerimeter = (base, side1, side2) => base + side1 + side2;

/**CALCULAR DIAMETRO DE CIRCULO */
const circleDiameter = (radius) => radius * 2;
const PI = Math.PI;

/**CALCULAR AREA DE CIRCULO */
const circleArea = (radius) => (radius ** 2) * PI;

/**CALCULAR PERIMETRO DE CIRCULO */
const circlePerimeter = (radius) => circleDiameter(radius) * PI;

/**CAPTURO LOS ELEMENTOS DE HTML */

/**PARA CALCULOS DEL CUADRADO */
const calculateSquareArea = () => {
    const value = document.getElementById("square_side").value;
    const area = squareArea(value);
    document.getElementById("square_result").innerHTML = `area: ${area} cm`
}

const calculateSquarePerimeter = () => {
    const value = document.getElementById("square_side").value;
    const perimeter = squarePerimeter(value);
    document.getElementById("square_result").innerHTML = `perimeter: ${perimeter} cm`
}

/**PARA CALCULOS DEL TRIANGULO */
const calculateTriangleArea = () => {
    const valueBase = document.getElementById("triangle_base").value;
    const valueHeight = document.getElementById("triangle_height").value;
    const area = triangleArea(valueBase, valueHeight);
}

const calculateTrianglePerimeter = () => {
    const valueSide1 = document.getElementById("triangle_side1").value;
    const valueSide2 = document.getElementById("triangle_side2").value;
    const valueBase = document.getElementById("triangle_base").value;
    const perimeter = trianglePerimeter(valueBase, valueSide1, valueSide2);
}

/**PARA CALCULOS DEL CIRCULO */

const calculateCirclePerimeter = () => {
    const value = document.getElementById("radius").value;
    const perimeter = circlePerimeter(value);
}

const calculateCircleArea = () => {
    const value = document.getElementById("radius").value;
    const area = circleArea(value);
}