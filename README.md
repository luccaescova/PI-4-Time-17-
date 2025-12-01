# 📚 Leiturar – Plataforma de Biblioteca Digital Interativa

## 🧩 Sobre o Projeto

O **Leiturar** é uma plataforma digital que integra **tecnologia e educação**, oferecendo uma **biblioteca online interativa** com funcionalidades voltadas ao **apoio de professores e estudantes**.
Seu objetivo é **democratizar o acesso à leitura** e **facilitar o aprendizado**, com recursos como leitor de PDFs, questões comentadas e acompanhamento de progresso.

---

## 🚀 Objetivos

* Facilitar o acesso à leitura, eliminando barreiras físicas e logísticas.
* Oferecer ferramentas interativas de aprendizado (questões, resumos, marcações).
* Apoiar professores com materiais prontos e acompanhamento do desempenho dos alunos.
* Promover a autonomia do estudante no processo de leitura e estudo.
* Garantir um modelo sustentável e escalável para instituições de ensino.

---

## 🧠 Funcionalidades

### Funcionalidades obrigatórias (MVP)

* 📖 **Leitor de PDF** – leitura online de livros e materiais.
* 👤 **Login/Cadastro de Usuário** – autenticação e controle de acesso.
* 🔍 **Busca por Livros** – pesquisa por título, autor ou tema.
* 🧾 **Módulo de Questões** – perguntas e respostas associadas às obras.
* ✅ **Gabarito de Questões** – correção automática e feedback.

### Funcionalidades desejáveis (Pós-MVP)

* ⭐ **Favoritar Livros**
* ⏩ **Continuar Lendo**
* 💡 **Recomendações de Leitura**
* 🔑 **Recuperação de Senha**
* 🌙 **Modo Noturno / Acessibilidade**

---

## 🧰 Tecnologias Utilizadas

Com base na estrutura de arquivos, o projeto utiliza uma arquitetura de **microserviços** ou **backend dividido**, empregando **duas tecnologias de backend** e um front-end tradicional.

| Camada                            | Tecnologia                    | Função                                                    |
| --------------------------------- | ----------------------------- | ----------------------------------------------------------------- |
| **Front-end**                     | HTML, CSS, JavaScript         | Interface do usuário e lógica de apresentação.                      |
| **Back-end Principal**            | **TypeScript/Node.js (Express)**| **Gestão de Usuários, Autenticação, Livros e Rotas principais**.    |
| **Back-end de Correção**          | **Java (Spring Boot)**        | **Servidor exclusivo para a lógica de correção automática de questões.** |
| **Banco de Dados**                | MongoDB Atlas                 | Armazenamento de usuários, livros e questões.                     |
| **Gerenciamento de dependências** | Maven (Java), NPM/Yarn (Node) | Organização e build dos respectivos projetos de backend.            |
| **Design/Protótipo**              | Figma                         | Protótipos de interface e fluxo do usuário.                         |

---

## 🧱 Arquitetura da Solução

A estrutura de pastas reflete a divisão das responsabilidades entre os dois backends e o front-end. O **Server Java** é isolado e atua como um microserviço para a função específica de correção.


```
BACKEND/
│
├── Back TypeScripty/
│   ├── node_modules/
│   ├── src/
│   │   ├── config/
│   │   │   └── seed.ts
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   └── booksController.ts
│   │   ├── models/
│   │   │   ├── Book.ts
│   │   │   ├── Question.ts
│   │   │   └── User.ts
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   └── books.ts
│   │   ├── app.ts
│   │   └── index.ts
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
│
├── Server Java/
│   ├── src/
│   │   └── main/java/leiturar/
│   │       ├── controller/
│   │       │   └── CorretorController.java
│   │       ├── service/
│   │       │   └── CorretorService.java
│   │       └── CorretorApplication.java
│   └── resources/
│       ├── static/
│       └── application.properties
│   └── pom.xml
│
FRONTEND/
└── pages/
|   ├── img/
|   │   ├── dom_casmurro.jpg
|   │   ├── magico_oz.jpg
|   │   └── vidas_secas.jpg
|   ├── pdfs/
|   │   ├── dom_casmurro.pdf
|   │   ├── magico_oz.pdf
|   │   └── vidas_secas.pdf
|   ├── ajuda.html
|   ├── Favoritos.html
|   ├── Login.html
|   ├── menu.html
|   ├── Question.html
|   └── register.html
|
│
└── README.md
```

---

## ⚙️ Integração Java ↔ MongoDB

A integração entre o servidor Java e o banco de dados MongoDB será feita através do **Spring Data MongoDB**, permitindo o mapeamento automático de objetos (POJOs) para documentos da base (utilizado primariamente pelo Java para buscar gabaritos e registrar as correções).
O backend em **TypeScript/Node.js** utiliza uma biblioteca como o **Mongoose** (inferido pela estrutura `models`) para o mapeamento e comunicação com o MongoDB para as coleções de Usuários e Livros.

Alternativamente, o **MongoDB Java Driver** poderá ser utilizado para consultas personalizadas e operações de maior desempenho.

---

## 🧩 Estrutura do Banco de Dados

| Coleção         | Campos principais                                   | Descrição                                  |
| --------------- | --------------------------------------------------- | ------------------------------------------ |
| `usuarios`      | nome, email, senha, favoritos, progresso            | Gerencia perfis e progresso de leitura     |
| `livros`        | título, autor, pdf, tags, resumo                    | Armazena metadados e arquivos de livros    |
| `questoes`      | pergunta, alternativas, resposta_correta, id_livro  | Questões vinculadas aos livros             |
| `respostas`     | id_usuario, id_questao, resposta_usuario, resultado | Histórico de respostas                     |
| `recomendacoes` | id_usuario, histórico                               | Sugestões baseadas em leitura e desempenho |

---

## 🧪 Como Executar o Projeto

### Pré-requisitos

* Java 17+
* Maven
* **Node.js e NPM/Yarn**
* Conta no [MongoDB Atlas](https://www.mongodb.com/atlas)

### Passos

1. Clone o repositório:

   ```bash
   git clone ([https://github.com/luccaescova/PI-4-Time-17-.git](https://github.com/luccaescova/PI-4-Time-17-.git))
   ```
2. **Configuração e Execução do Backend TypeScript (Principal)**:

   a. Acesse a pasta do backend Node.js:
   ```bash
   cd leiturar/BACKEND/Back\ TypeScripty
   ```
   b. Instale as dependências e configure o arquivo `.env` com sua URI do MongoDB.
   ```bash
   npm install
   # Exemplo de conteúdo do .env:
   # MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/leiturar
   # PORT=3000
   ```
   c. Execute o servidor (o comando pode variar, mas geralmente é):
   ```bash
   npm run dev # ou npm start
   ```

3. **Configuração e Execução do Backend Java (Correção de Exercícios)**:

   a. Acesse a pasta do backend Java:
   ```bash
   cd ../Server\ Java
   ```
   b. Configure o arquivo `application.properties` (dentro de `src/main/resources/`) com a URI do MongoDB.
   ```
   spring.data.mongodb.uri=mongodb+srv://usuario:senha@cluster.mongodb.net/leiturar
   ```
   c. Execute o servidor:
   ```bash
   mvn spring-boot:run
   ```
4. **Execução do Front-end**:

   a. Acesse a pasta do front-end:
   ```bash
   cd ../../FRONTEND/pages
   ```
   b. Acesse a interface abrindo `Login.html` ou `index.html` (se existir) no navegador.

---

## 🧑‍💻 Equipe de Desenvolvimento

| Nome                         | RA       |
| ---------------------------- | -------- | 
| Paulo Cesar Whitehead Junior | 24018776 |
| Nicolas Marques Linares      | 24015266 | 
| Yago Sousa                   | 24015586 | 
| Lucca Schroelder Scovini     | 24011609 | 
| Kaio Augusto Burilli         | 23020613 |

---

## 📆 Roadmap

1. ✅ Levantamento de requisitos e ideação
2. 🧩 Definição do MVP e arquitetura
3. ⚙️ Desenvolvimento do servidor Java
4. 💾 Integração com MongoDB
5. 🎨 Implementação do front-end
6. 🧪 Testes e refinamento
7. 🚀 Lançamento do Beta

---

## 📄 Licença

Este projeto é de uso educacional, desenvolvido no contexto da disciplina **Ideação e Validação em Engenharia de Software – PUC-Campinas (2025)**.
Distribuído sob a licença **MIT**.
