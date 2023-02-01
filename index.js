const sel=document.getElementById("content");

const btn=document.getElementById("btn");

const URL="https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,explicit&type=single";
let getjoke =() =>{
    sel.classList.remove("fade");
    fetch(URL)
    .then(data => data.json())
    .then(item =>{sel.textContent =item.joke;
        sel.classList.remove("fade");

    } );
}
btn.addEventListener("click",getjoke);
getjoke();

    


