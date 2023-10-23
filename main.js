const itensCarrinho = {}

function addCarrinho(itemNome, itemPreco) {
    //verifica se o item adicionado já existe no carrinho
    if (itensCarrinho[itemNome]) {
        //a quantidade do produto ira aumentar
        itensCarrinho[itemNome].quantity++
        itensCarrinho[itemNome].precoTotal += itemPreco
        itensCarrinho[itemNome].liItem.querySelector(".quantity").innerHTML = itensCarrinho[itemNome].quantity;
        itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
    } else {
        const liItem = document.createElement("li")
        liItem.innerHTML = `
        <div class="item">
            <span>${itemNome}</span>
            <button class="add" onclick="addCarrinho('${itemNome}', ${itemPreco})">+</button>
            <span class="quantity">1</span>
            <button class="remove" onclick="removerCarrinho('${itemNome}', ${itemPreco})">-</button>
            <span class="precoTotal">R$${itemPreco.toFixed(2)}</span>
        </div>
        `

        document.getElementById("itens-lista").appendChild(liItem)
        itensCarrinho[itemNome] = {
            quantity:1,
            precoTotal: itemPreco,
            liItem: liItem
        }
    }

    //calcula o valor total

    let precoTotal = 0
    for(let itemNome in itensCarrinho){
        precoTotal += itensCarrinho[itemNome].precoTotal
    }

    //atualiza o valor total
    document.getElementById("preco-total").innerHTML = "Valor Total R$"+precoTotal.toFixed(2)
    updateCarrinho();
}

function removerCarrinho(itemNome, itemPreco){
    if(itensCarrinho[itemNome]){
        if(itensCarrinho[itemNome].quantity > 1){
            itensCarrinho[itemNome].quantity--
            itensCarrinho[itemNome].precoTotal -= itemPreco
            itensCarrinho[itemNome].liItem.querySelector(".quantity") = innerHTML = itensCarrinho[itemNome].quantity
            itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
        }else{
            document.getElementById("itens-lista").removeChild(itensCarrinho[itemNome].liItem)
            delete itensCarrinho[itemNome]
        }

        updateCarrinho()
        document.getElementById("preco-total").innerHTML = "Valor Total:R$" + precoTotal.toFixed(2)
        updateCarrinho()
    }
}

function updateCarrinho(){
   
}

function limparCarrinho(){
    document.getElementById("itens-lista").innerHTML = ""
    document.getElementById("preco-total").innerHTML= "Valor Total R$0,00"
    for(let itemNome in itensCarrinho){
        delete itensCarrinho[itemNome]
    }
    updateCarrinho()
}

function toggleCarrinho(){
    const itensCarrinhoDiv = document.getElementById("carrinho-itens")
    if(itensCarrinhoDiv.style.display == "none"){
        itensCarrinhoDiv.style.display = "block"
    }else{
        itensCarrinhoDiv.style.display = "none"
    }
}