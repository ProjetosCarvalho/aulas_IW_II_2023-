function gets(button){

    const v = button.value // or button.id

    const vb = parseInt(v)
    
    switch(vb){
        case 1: console.log("página1")
        break
        case 2: console.log("Página 2")
        break
        case 3: alert("Página 3")
        break
        case 4: alert("Página 4")
        break
        default: alert("Nenhuma das opções")
    }


    }