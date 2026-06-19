# Escola Avaliação

Sistema Web para gerenciamento de turmas e atividades escolares.

Permite que professores realizem login, cadastrem turmas, visualizem suas turmas, cadastrem atividades e acompanhem as atividades registradas em cada turma.

# Tecnologias

- HTML
- CSS
- JavaScript
- Node.js
- Express
- Prisma ORM
- MySQL

| Funcionalidade | Tecnologia |
|:-|:-:|
| Estrutura da Interface | HTML |
| Estilização | CSS |
| Manipulação da Página | JavaScript |
| Requisições HTTP | Fetch API |
| Backend | Node.js + Express |
| Banco de Dados | MySQL |
| ORM | Prisma |
| Integração Front-End e Back-End | API REST |
| Navegação entre Telas | JavaScript |
| Exclusão de Registros | Método DELETE |

| ![Login](./assets/login.png) | ![Turmas](./assets/turmas.png) | ![Atividades](./assets/atividades.png) |
|:-:|:-:|:-:|
| Login | Turmas | Atividades |


# Requisitos de Infraestrutura

| Item | Utilizado |
|:-|:-|
| IDE | Visual Studio Code |
| SGBD | MySQL 8.x |
| Servidor de Aplicação | Node.js 22.x |
| Linguagem Back-End | JavaScript |
| Linguagem Front-End | HTML, CSS e JavaScript |
| ORM | Prisma ORM |

# Funcionalidades

- Login de professor
- Exibição do nome do professor autenticado
- Cadastro de turma
- Listagem de turmas do professor
- Exclusão de turma
- Bloqueio da exclusão de turmas com atividades cadastradas
- Cadastro de atividade
- Listagem de atividades da turma
- Logout do sistema

# Estrutura do Projeto

```text
escolaavaliacao
│
├── api
│   ├── prisma
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   └── data
│   └── server.js
│
├── web
│   ├── css
│   ├── js
│   ├── login.html
│   ├── turmas.html
│   ├── atividades.html
│   ├── cadastroTurma.html
│   └── cadastroAtividade.html
│
├── assets
│
└── README.md
```

# Para testar

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Abra o projeto no VS Code

### 3. Instale as dependências do backend

```bash
npm install
```

### 4. Configure o banco de dados MySQL

Crie um banco chamado:

```sql
turmas_db
```

### 5. Configure o arquivo .env

Exemplo:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/turmas_db"
```

### 6. Execute as migrations do Prisma

```bash
npx prisma migrate dev
```

### 7. Gere o Prisma Client

```bash
npx prisma generate
```

### 8. Execute o servidor

```bash
node server.js
```

ou

```bash
npm start
```

### 9. Verifique se a API está rodando em:

```text
http://localhost:3000
```

### 10. Abra o arquivo `login.html` localizado na pasta `web`

### 11. Realize login utilizando um professor cadastrado no banco de dados

### 12. Teste as funcionalidades

- Cadastro de turma
- Listagem de turmas
- Exclusão de turma
- Cadastro de atividade
- Listagem de atividades
- Logout

# Autora

Clara Andrzejewsky Antonacci

Projeto desenvolvido para fins acadêmicos.
