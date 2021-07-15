const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const popup = document.getElementById('popup');
const login = document.querySelector('#login_btn');


sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

function popupToggle(){
    popup.classList.toggle('active');
}

login.addEventListener('mousedown', () => {
    popupToggle();
});
    
