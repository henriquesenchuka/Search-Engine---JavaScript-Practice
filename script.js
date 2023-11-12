const contacts = [
    {name: "Henrique", number: '(41) 998732233'},
    {name: "Daniele", number: '(43) 998743231'},
    {name: "Ricardo", number: '(56) 998634758'},
    {name: "Pedro", number: '(98) 992221941'},
    {name: "Franciele", number: '(21) 987322430'},
]





function search() {
    
    let nameTyped = document.querySelector(".input").value

    for(const contact of contacts){
        if (contact.name === nameTyped){
            document.querySelector(".h4").innerHTML = contact.number
            break;
        }
        else {
            document.querySelector(".h4").innerHTML = "Invalid Name!!"
        }
    }
}

function clearP() {
    document.querySelector(".h4").innerHTML = ""
}