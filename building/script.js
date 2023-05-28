// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDENT_CLASSNAME = "hidden";
const USERNAME_KEY ="username"

function onLoginSubmit(event){
    // const userName = loginInput.value;
    // if(userName ===""){
    //     alert("Please write your name");
    // } else if(userName.length > 15){
    //     alert("Your name is too long.")
    // }
    event.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // greeting.innerText = "Hello " + username;
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDENT_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDENT_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings()
}
