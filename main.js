const menu = document.querySelector(".menu")

const acessocarrinho = ()=>{
const abriOUfechar =  menu.classList.contains("abrir")

          if( abriOUfechar == false){

            menu.classList.add("abrir")
          }else{
            menu.classList.remove("abrir")
          }
    
}



document.querySelector("#acessoMenu").addEventListener("click",acessocarrinho)