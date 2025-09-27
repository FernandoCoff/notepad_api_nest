# Notepad API (Backend)

Este é o repositório para a API RESTful da aplicação **Notepad**. O servidor foi desenvolvido com [Nest.js](https://nestjs.com/), um framework Node.js progressivo para construir aplicações eficientes e escaláveis. A comunicação com o banco de dados é gerenciada pelo ORM [Prisma](https://www.prisma.io/).

---

## ▶️ Como Rodar a Aplicação

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados na sua máquina:
* [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

> **Nota:** Este projeto utiliza **SQLite** como banco de dados, então você **não precisa** instalar um servidor de banco de dados separado (como PostgreSQL ou MySQL) para rodar em modo de desenvolvimento.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/FernandoCoff/notepad_api_nest.git](https://github.com/FernandoCoff/notepad_api_nest.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd notepad_api_nest
    ```

3.  **Instale as dependências:**
    * Usando NPM:
        ```bash
        npm install
        ```
    * Ou usando Yarn:
        ```bash
        yarn install
        ```

4.  **Configure as variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto. Este arquivo é necessário para definir a URL de conexão com o banco de dados. Veja a seção **Variáveis de Ambiente** abaixo para mais detalhes.

5.  **Execute as migrações do banco de dados:**
    Este comando irá ler o seu schema do Prisma, criar o arquivo de banco de dados SQLite e preparar as tabelas necessárias.
    ```bash
    npx prisma migrate dev
    ```

6.  **Inicie o servidor:**
    * Usando NPM:
        ```bash
        npm run start:dev
        ```
    * Ou usando Yarn:
        ```bash
        yarn start:dev
        ```
    
O servidor estará em execução. Por padrão, ele rodará em [http://localhost:3333](http://localhost:3333).

---

## ⚙️ Variáveis de Ambiente (.env)

A configuração do banco de dados e da porta do servidor é feita através de um arquivo `.env`. Crie este arquivo na raiz do projeto com o seguinte conteúdo:

```env
# URL de conexão com o banco de dados.
# Para SQLite, aponta para um arquivo que será criado na pasta /prisma.
DATABASE_URL="file:./prisma/dev.db"

# Porta em que o servidor irá rodar.
# Este campo é OPCIONAL. Se não for definido, o servidor usará a porta 3333 como padrão.
PORT=3333
```

---

## 🛠️ Tecnologias Utilizadas

* **[Nest.js](https://nestjs.com/)**: Framework backend para Node.js.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
* **[Prisma](https://www.prisma.io/)**: ORM de próxima geração para Node.js e TypeScript.
* **[SQLite](https://www.sqlite.org/index.html)**: Banco de dados relacional embarcado.

---

## ↔️ Endpoints da API

A API fornece os seguintes endpoints para o gerenciamento de notas:

| Método HTTP | Endpoint      | Descrição                 |
| :---------- | :------------ | :------------------------ |
| `GET`       | `/notes`      | Lista todas as notas.     |
| `POST`      | `/notes`      | Cria uma nova nota.       |
| `PATCH`     | `/notes/:id`  | Atualiza uma nota existente. |
| `DELETE`    | `/notes/:id`  | Deleta uma nota.          |

---

## 📜 Scripts Disponíveis

* `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento com hot-reload.
* `npm run build`: Compila o código TypeScript para JavaScript.
* `npm run start:prod`: Inicia a aplicação em modo de produção (requer `build` prévio).
