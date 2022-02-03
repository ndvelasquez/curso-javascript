/* Calcular la media aritmetica */
const arithmeticAverage = (list) => {
    const sumList = list.reduce((sum = 0, currentElement) => sum + currentElement);

    sumList / list.length;
}

/* Calcular la media aritmetica ponderada (usando de ejemplo un calculo de calificaciones de acuerdo a los creditos de cada asignatura)*/
const gradeCalculator = (list) => {
    const gradesWithCredits = list.map(gradeObject => gradeObject.grade * gradeObject.credit);
    const sumOfGrades = gradesWithCredits.reduce((sum = 0, currentElement) => sum + currentElement);

    const credits = list.map(creditObject => creditObject.credit);
    const sumOfCredits = credits.reduce((sum = 0, currentElement) => sum + currentElement);

    const averageGrade = sumOfGrades / sumOfCredits;

    return averageGrade;
}

/* Calcular la mediana */
const isPar = (number) => {
    (number % 2) == 0 ? true : false;
}

const median = (list) => {
    // Primero ordeno la lista de forma ascendente
    list.sort((a, b) => a - b);
    // Segundo, obtengo el valor del medio de la lista
    const halfListPosition = parseInt(list.length / 2);
    // declaro la variable para almacenar la mediana
    let median;

    if (isPar(halfListPosition)) {
        let element1 = list[halfListPosition];
        let element2 = list[halfListPosition - 1];
        median = arithmeticAverage([element1, element2]);
        return median;
    }
    else {
        median = list[halfListPosition];
        return median;
    }
}

/*Calcular la moda */
const mode = (list) => {
    /* Creo un objeto que contendrá la cantidad de veces que se repite el elemento del array */
    const listCount = {};
    /* sumo y añado cada elemento del array al objeto */
    list.map(element => listCount[element] ? listCount[element] =+ 1 : listCount[element] = 1);
    /* Convierto el objeto con los elementos en un array y los ordeno por la cantidad de cada elemento de forma ascendente */
    const listArray = Object.entries(listCount).sort((a,b) => a[1] - b[1]);
    /*creo la variable que me mostrará la moda */
    const mode = listArray[listArray.length - 1];

    return mode;
}