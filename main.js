//event

const view = document.querySelector("view1");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
//console.log(view);


const doSomething = () => {
    alert("fare qualcosa");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
})