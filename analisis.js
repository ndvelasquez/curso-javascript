// Helpers
const isPar = (number) => (number % 2 === 0);
const calculateAverage = (list) => {
    const sumList = list.reduce((sum = 0, currentValue) => sum + currentValue);
    return sumList / list.length;
}
// funcion de calcular la mediana general
const calculateMedian = (list) => {
    const halfListPosition = parseInt(list.length / 2);

    if (isPar(halfListPosition)) {
        const firstElement = list[halfListPosition - 1];
        const secondElement = list[halfListPosition];
        const median = calculateAverage([firstElement, secondElement]);
        return median;
    }
    else {
        return list[halfListPosition];
    }
}
// Extraigo los salarios de mi lista
const ColSalaries = colombia.map(person => person.salary);
// ordeno el array de salarios
const ColSalariesSorted = ColSalaries.sort((a, b) => a - b);
// calculo la mediana de mi lista de salarios
const ColGeneralMedian = calculateMedian(ColSalariesSorted);
// para calcular la mediana de salarios del top 10%
const sliceStart = parseInt((ColSalariesSorted.length * 90) / 100);
const sliceCount = ColSalariesSorted.length + sliceStart;

const top10ColSalaries = ColSalariesSorted.slice(sliceStart, sliceCount);

const top10ColMedian = calculateMedian(top10ColSalaries);