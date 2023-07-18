function calculategorjeta(event){
    console.log(event);
    event.preventDefault();
    let conta = document.getElementById('conta').value;
    let serviço = document.getElementById('serviço').value;
    let pessoas = document.getElementById('pessoas').value;

    if(conta == '0' | serviço == 0){
        alert("Por favor, preencha as informações!")
        return;
    }

    if(pessoas == "" | pessoas <= 1){
        pessoas = 1;
        document.getElementById('cada').style.display = "none"
        } else {
            document.getElementById('cada').style.display = "block"
        }

    let total = (conta * serviço) / pessoas;
    total = total.toFixed(2);
    document.getElementById('gorjeta'). innerHTML = total;
    document.getElementById('totalgorjeta').style.display = "";
    
}

document.getElementById('totalgorjeta').style.display = "none";
document.getElementById('cada').style.display = "none";

document.getElementById('form').addEventListener('submit', calculategorjeta);