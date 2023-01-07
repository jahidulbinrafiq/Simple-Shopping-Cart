//first product

const iphoneMinus=document.getElementById('iphone-btn-minus');
iphoneMinus.addEventListener('click',function(){
    handleProductChange(false,'iphone-amount','iphone-price');
    Calculation();
});

const iphonePlus=document.getElementById('iphone-btn-plus');
iphonePlus.addEventListener('click',function(){
    handleProductChange(true,'iphone-amount','iphone-price');
    Calculation();
    
});
 //second product

const caseMinus=document.getElementById('case-btn-minus');
caseMinus.addEventListener('click',function(){
    handleProductChange(false,'case-amount','case-price');
    Calculation();
})

const casePlus=document.getElementById('case-btn-plus');
casePlus.addEventListener('click',function(){
    handleProductChange(true,'case-amount','case-price');
    Calculation();
})

function handleProductChange(isIncrease,idQuantity,idPrice){
    const amount=document.getElementById(idQuantity).value;
    const amountConvert=parseInt(amount);
    let newCount=0;
    if(isIncrease==true){
        newCount=amountConvert+1;
    }
     if(isIncrease==false && amountConvert> 0){
        newCount=amountConvert-1;
    }

    document.getElementById(idQuantity).value=newCount;

    let priceCalculation=0;

    if(idPrice=='case-price'){
        priceCalculation=newCount*59;
    }
    if(idPrice=='iphone-price'){
        priceCalculation=newCount*1129;
    }
    document.getElementById(idPrice).innerText= priceCalculation;
}

function Calculation(){

    const iphonePrice=document.getElementById('iphone-price').innerText;
    const convertIphonePrice=parseFloat(iphonePrice);

    const casePrice=document.getElementById('case-price').innerText;
    const convertCasePrice=parseFloat(casePrice);
   
    const subTotal=convertIphonePrice+convertCasePrice; 
    const texAmount= parseFloat(subTotal*(10/100));
    const totalPrice= parseFloat(subTotal+texAmount);
    document.getElementById('subTotal').innerText=subTotal;
    document.getElementById('tax').innerText=texAmount.toFixed(2);
    document.getElementById('totalPrice').innerText=totalPrice;
}

let removeItem = document.getElementsByClassName('remove-item');

for (let i = 0; i < removeItem.length; i++) {
    const removeElement = removeItem[i];
    // console.log(removeElement);
    removeElement.addEventListener("click", function(e){
        // console.log(e);//event mouseevent 
        
         e.target.parentNode.parentNode.parentNode.style.display = "none";
        
    });
}


