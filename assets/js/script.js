// script.js
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

let submit = 
    document.getElementById("submit");
let failed = 
    document.getElementById("cancel");
if(submit){
    submit.addEventListener("click",(e) => {
        e.preventDefault();
        localStorage.setItem('message', 'Successfully submitted NCR')
        localStorage.setItem('toastType', 'success')
        window.location.href = "/forms/menu.html";
    });
}

if(failed){
    failed.addEventListener("click",(e) => {
        e.preventDefault();
        localStorage.setItem('message', 'Successfully canceled NCR')
        localStorage.setItem('toastType', 'danger')
        window.location.href = "/forms/menu.html";
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