(function(){
    let pricePounds;
    let exchangeRate;
    let priceEuros;
    const convertForm = document.getElementById('myForm');
    const msg = document.getElementById('msg');
    
    convertForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        pricePounds = parseFloat(document.getElementById('pounds').value);
        priceEuros = 0;
        exchangeRate = 0.87;
        if(isNaN(pricePounds)){
            msg.style.display = "block";
            msg.innerHTML = "You must enter a number";
            msg.setAttribute('class', 'error');
        }else if(pricePounds <= 0){
            msg.style.display = "block";
            msg.innerHTML = "You must enter more than zero.";
            msg.setAttribute('class', 'error');
        }else{
            priceEuros = pricePounds * exchangeRate;
            priceEuros = priceEuros.toFixed(2);
            msg.style.display = "block";
            msg.innerHTML = "You will get &euro;" + priceEuros;
            msg.removeAttribute('class');
        }
    });
})();
