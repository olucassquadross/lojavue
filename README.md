Visão Geral:
O projeto shoppingcart é uma aplicação simples de comércio eletrônico que permite aos usuários visualizar produtos, adicioná-los ao carrinho e finalizar a compra. O projeto é dividido em duas partes principais: o frontend (construído com Vue.js) e o backend (construído com Node.js, Express e MongoDB).

Frontend (Vue.js):
Componentes:

Products: Mostra uma lista de produtos disponíveis. Cada produto tem uma imagem, título, preço e uma opção para especificar a quantidade. Os usuários podem adicionar produtos ao carrinho.
Cart: Mostra os produtos adicionados ao carrinho. Os usuários podem alterar a quantidade, remover produtos ou finalizar a compra.
ThankYou: Uma tela simples que agradece ao usuário após a finalização da compra.
Funcionalidades:

Adicionar ao Carrinho: Quando um produto é adicionado ao carrinho, ele é armazenado em um array cartItems.
Finalizar Compra: Ao finalizar a compra, os itens do carrinho são enviados ao backend para serem processados e salvos no banco de dados. Após a conclusão bem-sucedida, o usuário é redirecionado para a tela de agradecimento.
Backend (Node.js, Express, MongoDB):
Rotas:

POST /order: Aceita os itens do carrinho como um pedido e os salva no banco de dados MongoDB. Retorna uma mensagem de "Venda concluída!" se bem-sucedido.
Banco de Dados (MongoDB):

Utilizamos o MongoDB para armazenar os pedidos. Cada pedido contém os itens do carrinho, incluindo produto, quantidade e preço.
Middleware:

CORS: Permite que o frontend se comunique com o backend, mesmo se estiverem em domínios diferentes.
Express.json(): Permite que o servidor interprete corretamente os dados JSON enviados pelo frontend.

Fluxo de Trabalho:
O usuário navega pelos produtos disponíveis.
O usuário seleciona a quantidade desejada e clica em "Comprar" para adicionar o produto ao carrinho.
O usuário pode revisar os itens no carrinho, alterar quantidades ou remover produtos.
O usuário clica em "Finalizar Compra". Os itens do carrinho são enviados ao backend.
O backend processa o pedido, salva-o no banco de dados e retorna uma confirmação.
O frontend mostra uma tela de agradecimento ao usuário.
