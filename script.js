const contacts = [
    {name: "Henrique", number: '(41) 998732233'},
    {name: "Daniele", number: '(43) 998743231'},
    {name: "Ricardo", number: '(56) 998634758'},
    {name: "Pedro", number: '(98) 992221941'},
    {name: "Franciele", number: '(21) 987322430'},
]





function search() {
    
    let nameTyped = document.querySelector(".input").value

        let i
        for(i = 0; i < contacts.length; i++) {
            if(nameTyped == contacts[i].name){
                    document.querySelector(".h4").innerHTML = contacts[i].number
                break;
            }
        }
        
        if(i == contacts.length){
            document.querySelector(".h4").innerHTML = "Nome Inválido!!"
        }

}

function clearP() {
    document.querySelector(".h4").innerHTML = ""
}