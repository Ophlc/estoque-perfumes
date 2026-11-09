# Estoque de Perfumes - Fator 5

Fiz esse site para controlar de um jeito mais simples os perfumes que tenho em estoque. Nele consigo cadastrar cada perfume pelo nome ou número, informar a quantidade e, se quiser, colocar o preço.

Também dá para pesquisar um perfume, registrar uma venda, repor uma unidade ou excluir um item. A página mostra o total de unidades disponíveis e guarda os dados no armazenamento local do navegador, então eles continuam lá quando a página é aberta novamente no mesmo navegador.

## Tecnologias

O projeto usa HTML, CSS e JavaScript, sem precisar de servidor ou banco de dados para funcionar. O estoque fica salvo no `localStorage` do navegador.

## Como usar

Baixe os arquivos do repositório e abra o `index.html` no navegador. Depois é só cadastrar os perfumes e usar os botões de cada item para atualizar as quantidades.

## Organização dos arquivos

- `index.html`: estrutura da página.
- `estilo-pagina.css`: estilos que estavam dentro do HTML e são usados na página.
- `script.js`: cadastro, pesquisa, atualização do estoque e salvamento dos dados.
- `style.css`: arquivo de estilos que já existia no repositório; foi mantido sem alterações.

Separei o código que estava no HTML sem mexer no visual nem nas funções do site.
