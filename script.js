

let produtos = JSON.parse(localStorage.getItem("estoque")) || [];
let produtosFiltrados = [...produtos];

function salvar() {
localStorage.setItem("estoque", JSON.stringify(produtos));
mostrarProdutos();
atualizarTotal();
}

function atualizarTotal() {
let total = produtos.reduce((soma, p) => soma + p.quantidade, 0);
document.getElementById("total").innerText =
"Total de perfumes em estoque: " + total;
}

function adicionarProduto() {
const identificacao = document.getElementById("identificacao").value.trim();
const quantidade = parseInt(document.getElementById("quantidade").value);
const preco = document.getElementById("preco").value;

if (identificacao === "" || isNaN(quantidade)) {
alert("Preencha o nome ou número do perfume e a quantidade");
return;
}

const existe = produtos.some(
p => p.identificacao.toLowerCase() === identificacao.toLowerCase()
);

if (existe) {
alert("Esse perfume já está cadastrado");
return;
}

produtos.push({ identificacao, quantidade, preco });
produtosFiltrados = [...produtos];

salvar();

document.getElementById("identificacao").value = "";
document.getElementById("quantidade").value = "";
document.getElementById("preco").value = "";
}

function venderProduto(index) {
produtos[index].quantidade--;
if (produtos[index].quantidade <= 0) {
produtos.splice(index, 1);
}
produtosFiltrados = produtos.filter(p => 
    produtos.findIndex(prod => prod.identificacao === p.identificacao) !== -1
);
salvar();
}

function reporProduto(index) {
produtos[index].quantidade++;
produtosFiltrados = [...produtos];
salvar();
}

function removerProduto(index) {
produtos.splice(index, 1);
produtosFiltrados = produtos.filter(p => 
    produtos.findIndex(prod => prod.identificacao === p.identificacao) !== -1
);
salvar();
}

function mostrarProdutos() {
const lista = document.getElementById("lista");
lista.innerHTML = "";

if (produtosFiltrados.length === 0) {
    lista.innerHTML = '<div class="vazio">Nenhum perfume encontrado</div>';
    return;
}

produtosFiltrados.forEach((p, i) => {
    // Encontrar o índice original no array produtos
    const indexOriginal = produtos.findIndex(prod => 
        prod.identificacao.toLowerCase() === p.identificacao.toLowerCase()
    );
    
    lista.innerHTML += `
    <div class="produto">
        <strong>${p.identificacao}</strong>
        <div>Quantidade: ${p.quantidade}</div>
        <div>Preço: ${p.preco ? "R$ " + p.preco : "—"}</div>
        <div class="botoes">
            <button class="vender" onclick="venderProduto(${indexOriginal})">Vender</button>
            <button class="repor" onclick="reporProduto(${indexOriginal})">Repor</button>
            <button class="excluir" onclick="removerProduto(${indexOriginal})">Excluir</button>
        </div>
    </div>
    `;
});
}

// Pesquisa em tempo real
document.getElementById("pesquisa").addEventListener("input", function() {
    const termo = this.value.toLowerCase().trim();
    
    if (termo === "") {
        produtosFiltrados = [...produtos];
    } else {
        produtosFiltrados = produtos.filter(p => 
            p.identificacao.toLowerCase().includes(termo)
        );
    }
    
    mostrarProdutos();
});

mostrarProdutos();
atualizarTotal();

