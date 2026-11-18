async function criar() {  //async permite utilizar await dentro da função
    const id = document.getElementById('id').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value

    // realizar a requisição pro back
    // fetch() faz uma requisição para uma API
    //await espera a resposta da requisição.
    const response = await fetch ( // variavel chamada response
        'http://localhost:3000/api/v1/pessoa',
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ id, cpf, email })
        
        }
    )  
    
    const data = await response.json() // não esquecer o await

    console.log(data) // so para exibir informação, não serve para nada 
    const resultado = document.getElementById('resultado')
    resultado.innerText = data.message
}


// todo mundo: pessoas cadastradas no backend
async function buscarTodos() {
    // puxa o get pra pegar informa
    // fetch faz uma requisição para uma API 
    const response = await fetch(
        'http://localhost:3000/api/v1/pessoas'

    )
    const data = await response.json()
    console.log(data)
    const lista = document.getElementById("listaUsuarios")
    lista.innerHTML = ""

    data.pessoas.forEach(pessoa => {
        // console.log(pessoa)
        const li = document.createElement("li") // <li></li>
        li.innerText = "ID: " + pessoa.id + "CPF: " + pessoa.cpf + "Email: " + pessoa.email,
        lista.apendChild(li)
    })
    // ul
    // criar uma li para cada pessoa dentro do data - forEach
}
function alterar() {
    alert('capotamo o uno')
}
function deletar() {
    alert('capotamo o palio')
}