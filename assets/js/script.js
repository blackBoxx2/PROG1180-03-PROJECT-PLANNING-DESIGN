// script.js
//Variables for the items in html
const productText = document.getElementById('product')
const defectLabel = document.getElementById('defect');
const totalQuantityText = document.getElementById('total-quantity');
const defectiveQuantityText = document.getElementById('defective-quantity');
const Picture = document.getElementById('picture');
const orderNumber = document.getElementById('order-number');
//variables for the buttons
const btnDeleteProduct = document.getElementById('BtnDeleteProduct');
const btnDeleteDefect = document.getElementById('btnDeleteDefect');
const btntotalQuantityText = document.getElementById('btntotalQuantityText');
const btnDeleteDefectiveQuantity = document.getElementById('btnDeleteDefectiveQuantity');
const btnDeleteOrderNumber = document.getElementById('BtnDeleteOrderNumber');
const cbOverwriteExisitngPhoto = document.getElementById('cb-overwrite-photo');
let submit = document.getElementById("submit");
let submitEdit = document.getElementById("submit-edit");
let failed = document.getElementById("cancel");
let failedEdit =document.getElementById("cancel-edit");
//Clear Buttons
if(btnDeleteProduct != null){
    btnDeleteProduct.addEventListener('click', function(){
        productText.value = '';
    })
}
if(btnDeleteDefect != null){
    btnDeleteDefect.addEventListener('click', function(){
        defectLabel.value = '';
    })
}
if(btntotalQuantityText != null){
    btntotalQuantityText.addEventListener('click', function(){
    totalQuantityText.value = '';
    })
}

if(btnDeleteDefectiveQuantity != null){
    btnDeleteDefectiveQuantity.addEventListener('click', function(){
    defectiveQuantityText.value = '';
    })
}
if(btnDeleteOrderNumber != null){

    btnDeleteOrderNumber.addEventListener('click', function(){
    orderNumber.value = '';
    })
}
//Regex text
function validRegexText(p){
    const regexOnlyLetters = /^[a-zA-Z]+$/;
    return regexOnlyLetters.test(p);
}
//regex numbers
function validRegexNumbers(p){
    const regexOnlyNumbers = /^[0-9]+$/;
    return regexOnlyNumbers.test(p);
}

//Toast pop up
let icon = {
    success: '✓',
    danger:'✕'
};

const showToast = (
    message = "Sample Message",
    toastType = "danger",
    duration = 5000) => {

    let toast = document.createElement("div");
    toast.classList.add(
        "toast", `toast-${toastType}`);
    toast.innerHTML = ` <div class="toast-content-wrapper">
                      <div class="toast-icon">
                      ${icon[toastType]}
                      </div>
                      <div class="toast-message">${message}</div>
                      <div class="toast-progress"></div>
                      </div>`;
    duration = duration || 5000; //set duration to 5 seconds again
    toast.querySelector(".toast-progress").style.animationDuration =
            `${duration / 1000}s`;

    let toastAlready = 
        document.body.querySelector(".toast");
    if (toastAlready) {
        toastAlready.remove();
    }

    document.body.appendChild(toast

    )};

//Validation for the create
if(submit){
    submit.addEventListener("click",(e) => {
        if(productText.value == ''  || defectLabel.value == '' || totalQuantityText.value == '' || defectiveQuantityText.value == '' || Picture.value == '' || orderNumber.value == ''){
            alert('You have something missing');  
            return;  
        } else if(!validRegexText(productText.value)){
            alert('Please enter a valid type of letters in the product input');
            productText.value = '';
            return;
        } else if(!validRegexNumbers(orderNumber.value)){
            alert('Please enter a valid type of numbers in the order number input')
            orderNumber.value = '';
            return;
        }
            e.preventDefault();
            localStorage.setItem('message', 'Successfully submitted NCR')
            localStorage.setItem('toastType', 'success')
            window.location.href = "../menu.html";     
    });
}
//Validation for the edit
if(submitEdit){
            submitEdit.addEventListener("click",(e) => {
            if(productText.value == ''  || defectLabel.value == '' || totalQuantityText.value == '' || defectiveQuantityText.value == '' || Picture.value == '' || orderNumber.value == ''){
                alert('You have something missing');
                e.preventDefault();
            return;
            }else if(!validRegexText(productText.value)){
                alert('Please enter a valid type of letters in the product input');
                productText.value = '';
                e.preventDefault();
            return;
            }else if(!validRegexNumbers(orderNumber.value)){
                alert('Please enter a valid type of numbers in the order number input')
                orderNumber.value = ''; 
                e.preventDefault();
            return;
            }
                e.preventDefault()
                localStorage.setItem('message', 'Successfully submitted NCR')
                localStorage.setItem('toastType', 'success')
                window.location.href = "../../forms/menu.html";

        }        
    );
}
//Failed create 
if(failed){
    failed.addEventListener("click",(e) => {
        e.preventDefault();
        localStorage.setItem('message', 'Successfully canceled NCR')
        localStorage.setItem('toastType', 'danger')
        window.location.href = "./view.html";
    });
}
//Failed edit
if(failedEdit){
    failedEdit.addEventListener("click",(e) => {
         e.preventDefault();
        localStorage.setItem('message', 'Successfully canceled NCR edit')
        localStorage.setItem('toastType', 'danger')
        window.location.href = "./view.html";
    });
}

window.addEventListener('load', () => {
    console.log("Load page");
    const message = localStorage.getItem('message');
    const type = localStorage.getItem('toastType');

    if(message && type){
        showToast(message, type, 5000);
        localStorage.removeItem('message');
        localStorage.removeItem('toastType');
    }
})