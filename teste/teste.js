// SISTEMA DE LOGIN

function login(){

    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value

    let dados = [
                    {"id":Date.now(), "nome":"brian","senha":123}, //0
                    {"id":Date.now(), "nome":"giovanna","senha":2222}, //1
                    {"id":Date.now(), "nome":"pietro","senha":3333} //2
                ]

    //return dados

    // em sistema de login e senha não usa-se o else
    for(let i=0; dados.length > i;i++){
        if(nome == dados[i].nome && senha == dados[i].senha){
            alert("Logado.")
            break
        }
    }
}

//let ds = login()
//console.log(ds[0].nome + ":" + ds[0].senha)

function local(){
    let item = ["zucas"]
    let nomes = [["alice", "luna", "luís"] + "," + item]

    //colocar no localStorage
    localStorage.setItem("grupo", nomes);

    document.getElementById("demo").innerHTML = localStorage.getItem("grupo");
}    