function updateProductNumber( product, price, Isincreasing){
    const productInput = document.getElementById(product + '-number');
    let poductNumber = productInput.value;
    if (Isincreasing == true){
        poductNumber = parseInt(poductNumber) + 1;
    }
    else if (poductNumber > 0){
        poductNumber = parseInt(poductNumber) - 1;
    }
    productInput.value = poductNumber
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = poductNumber * price;
    calculateTotal();
};
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});
// phone
document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-plus');
    updateProductNumber('phone', 1219, true)
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
});
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}