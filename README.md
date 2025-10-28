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

| Camada                            | Tecnologia            | Função                                       |
| --------------------------------- | --------------------- | -------------------------------------------- |
| **Front-end**                     | HTML, CSS, JavaScript | Interface do usuário                         |
| **Back-end**                      | Java (Spring Boot)    | Servidor responsável pelo módulo de questões |
| **Banco de Dados**                | MongoDB Atlas         | Armazenamento de usuários, livros e questões |
| **Gerenciamento de dependências** | Maven                 | Organização e build do projeto Java          |
| **Design/Protótipo**              | Figma                 | Protótipos de interface e fluxo do usuário   |

---

## 🧱 Arquitetura da Solução

```
📂 leiturar/
├── 📁 backend/
│   ├── src/
│   │   ├── main/java/com/leiturar/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   ├── service/
│   │   │   └── LeiturarApplication.java
│   └── pom.xml
│
├── 📁 frontend/
│   ├── index.html
│   ├── styles/
│   ├── scripts/
│   └── assets/
│
├── 📁 database/
│   ├── mongo_collections/
│   │   ├── usuarios.json
│   │   ├── livros.json
│   │   ├── questoes.json
│   │   └── respostas.json
│
└── README.md
```

---

## ⚙️ Integração Java ↔ MongoDB

A integração entre o servidor Java e o banco de dados MongoDB será feita através do **Spring Data MongoDB**, permitindo o mapeamento automático de objetos (POJOs) para documentos da base.

Alternativamente, o **MongoDB Java Driver** poderá ser utilizado para consultas personalizadas e operações de maior desempenho.

---

## 🧩 Estrutura do Banco de Dados

| Coleção         | Campos principais                                   | Descrição                                  |
| --------------- | --------------------------------------------------- | ------------------------------------------ |
| `usuarios`      | nome, email, senha, favoritos, progresso            | Gerencia perfis e progresso de leitura     |
| `livros`        | título, autor, pdf, tags, resumo                    | Armazena metadados e arquivos de livros    |
| `questoes`      | pergunta, alternativas, resposta_correta, id_livro  | Questões vinculadas aos livros             |
| `respostas`     | id_usuario, id_questao, resposta_usuario, resultado | Histórico de respostas                     |
| `recomendacoes` | id_usuario, histórico                               | Sugestões baseadas em leitura e desempenho |

---

## 🧪 Como Executar o Projeto

### Pré-requisitos

* Java 17+
* Maven
* Node.js (opcional, caso o front use bundlers)
* Conta no [MongoDB Atlas](https://www.mongodb.com/atlas)

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/leiturar.git
   ```
2. Acesse a pasta do backend:

   ```bash
   cd leiturar/backend
   ```
3. Configure o arquivo `application.properties` com sua URI do MongoDB:

   ```
   spring.data.mongodb.uri=mongodb+srv://usuario:senha@cluster.mongodb.net/leiturar
   ```
4. Execute o servidor:

   ```bash
   mvn spring-boot:run
   ```
5. Acesse o front-end abrindo `index.html` no navegador.

---

## 🧑‍💻 Equipe de Desenvolvimento

| Nome                         | RA       |
| ---------------------------- | -------- | 
| Paulo Cesar Whitehead Junior | 24018776 |
| Nicolas Marques Linares      | 24015266 | 
| Yago Sousa                   | 24015586 | 
| Lucca Schroelder Scovini     | 24011609 | 
| Kaio Augusto Burilli         | 23020613 |

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
