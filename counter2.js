function counter() {
    let x = Math.floor(Math.random()*100);
    let e = document.getElementById("para");
    let n = document.createElement("p");
    n.textContent = x;
    e.appendChild(n);
}