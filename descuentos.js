/*Calculo el porcentaje de descuento que quiero aplicar */
const discountPercentage = (discount) => 100 - discount;
/*Realizo el descuento al producto y devuelvo su precio con descuento */
const priceWithDiscount = (price, discountCoupon) => {
    const userCoupon = coupons.find(coupon => coupon.name === discountCoupon);

    if (!userCoupon) {
        alert(`the ${discountCoupon} coupon does not exist`);
        return price;
    }
    else {
        const finalPrice = (price * discountPercentage(userCoupon.discount)) / 100;
        return finalPrice;
    }
    

};

/*Agregar cupones de descuento */
const coupons = [
    {
        name: '10PERCENTOFF',
        discount: 10
    },
    {
        name: '20PERCENTOFF',
        discount: 20
    },
    {
        name: 'SPECIALGIFT',
        discount: 50
    },
    {
        name: '30PERCENTOFF',
        discount: 30
    },
    {
        name: 'LUCKYDAYS',
        discount: 35
    }
];

/*Capturo los datos del HTML */
const calculatePriceWithDiscount = () => {
    const priceValue = document.getElementById("price").value;
    const couponValue = document.getElementById("coupon").value;

    const valuePriceWithDiscount = priceWithDiscount(priceValue, couponValue);

    document.getElementById("price_result").innerText = `The final price is: $ ${valuePriceWithDiscount}`;
}