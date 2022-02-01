/*Calculo el porcentaje de descuento que quiero aplicar */
const discountPercentage = (discount) => 100 - discount;
/*Realizo el descuento al producto y devuelvo su precio con descuento */
const priceWithDiscount = (price, discount) => (price * discountPercentage(discount)) / 100;

/*Capturo los datos del HTML */
const calculatePriceWithDiscount = () => {
    const priceValue = document.getElementById("price").value;
    const discountValue = document.getElementById("discount").value;

    const valuePriceWithDiscount = priceWithDiscount(priceValue, discountValue);

    document.getElementById("price_result").innerText = `The final price is: $ ${valuePriceWithDiscount}`;
}