let btn = document.querySelector("#btn");
let list = document.querySelector(".content");
let ul = document.createElement("ul");

btn.addEventListener("click", () => {
    
    let inp = document.querySelector("#inp").value;
    
    if (inp != "") {
        
        let x = document.createElement("span");
        let li = document.createElement("li");
        let div = document.createElement("div");

        li.innerText = inp;
        x.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        x.className = "sp";
        div.className = "div";

        list.appendChild(ul);
        ul.appendChild(div);
        div.appendChild(li);
        div.appendChild(x);

        x.addEventListener("click", () => {
            div.remove();
        });

        document.querySelector("#inp").value = "";

    }
});