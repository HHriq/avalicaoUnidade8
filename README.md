## Projeto: Lista de Compras II 🛒

Este projeto foi desenvolvido como parte da Unidade 6 da Residência de Software Tic36 🚀, com o objetivo de implementar uma aplicação com Autenticação e Autorização via OAuth2 e consumo de APIs em uma Lista de Compras de Supermercado.

### 🛠️ Tecnologias Utilizadas
- Angular CLI 17.3.10
- OAuth 2.0 para autenticação
- HttpClient para consumo de APIs
- json-server para simulação de backend

### 🚀 Funcionalidades

### 1. Autenticação e Autorização

🔐 Login OAuth 2.0
Implementação funcional de login usando OAuth 2.0 (ex.: Google)
Apenas usuários autenticados podem acessar as rotas protegidas da aplicação.

🛡️ Guards para Restrição de Acesso
Guards para garantir que apenas usuários autenticados possam acessar a lista de compras.
Acesso restrito a cada lista com base no usuário autenticado, mantendo a segurança e privacidade dos dados.

### 2. Consumo de APIs com HttpClient

🔄 Leitura e Escrita de Dados
A aplicação consome uma API Rest simulada com json-server para listar, criar e excluir itens de compras.
Permite uma experiência fluida e intuitiva para o usuário gerenciar sua lista.

📥 Atualização dos Dados
Atualização do status dos itens na lista de compras (ex.: marcar como comprado).
Dados refletidos no JSON utilizado pelo json-server, garantindo persistência local durante a simulação.

### 3. Tratamento de Erros e Mensagens Amigáveis

🚫 Erros de API
Exibe mensagens amigáveis em caso de erros nas requisições à API (ex.: falha de conexão, erro 500).

🌐 Rotas Não Existentes
Tratamento de navegação para rotas inexistentes, evitando que o usuário encontre páginas de erro.

### 📋 Funcionalidades da Lista de Compras

➕ Adicionar Itens: Permite adicionar itens rapidamente por meio de um campo de texto.

✅ Marcar como Comprado: Itens podem ser marcados como comprados.

📂 Agrupar por Status: Exibe itens comprados e não comprados em grupos separados.

🗑️ Excluir Itens: Ícone de lixeira para exclusão de itens com um clique.
