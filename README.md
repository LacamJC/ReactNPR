
# 🌿 Natureza Prioridade Renovada - NPR -- React Version

- [Sobre](#sobre)
- [Objetivo](#objetivo)
- [Público-Alvo](#público-alvo)
- [Considerações](#considerações)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Screenshots](#screenshots)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Atualizações](#atualizações)

## Sobre
A aplicação NPR é um projeto desenvolvido por um grupo de estudantes com o objetivo de facilitar a coleta de lixo reciclável e apoiar iniciativas de proteção ao meio ambiente. A plataforma visa oferecer assistência e combate ao descarte irregular de resíduos, promovendo o compartilhamento de informações e um sistema de coleta especializada.

## Objetivo
O principal objetivo da aplicação NPR é proporcionar uma plataforma que facilite a coleta de lixo reciclável, combata o descarte irregular de resíduos e apoie a proteção ao meio ambiente.

## Público-Alvo
A aplicação NPR é destinada ao público em geral, atendendo a todos os públicos interessados em contribuir para a proteção do meio ambiente e a coleta eficiente de lixo reciclável.

## Considerações
Atualmente, o projeto está em uma etapa bem avançada, mas ainda possui pontos a serem melhorados. Estou sempre pensando em novas funcionalidades que posso adicionar para tornar este projeto maior!

## Funcionalidades
- **Cadastro de Usuário:**
   Utilizando o banco de dados relacional MySQL, o cadastro de usuários é feito usando o Sequelize, sendo uma forma simples de fazer a comunicação com o banco de dados através do Node.js.
  
- **Cadastro de Pontos de Coleta:**
   Também utilizando o Sequelize, o usuário precisa ter um cadastro ativo para poder cadastrar novos pontos de coleta.

- **Mapa com Pontos de Coleta Oficiais:**
   Utilizando a API do Google Maps, podemos mostrar os pontos de coleta oficiais em Barueri.

- **Feedback:**
   Uma área na página inicial onde o usuário pode enviar um comentário ou feedback.

## Tecnologias
- HTML
- React
- SCSS
- Node.js
- JavaScript
- MySQL
- Sequelize
- Bootstrap

## 📂 Estrutura do Projeto

```plaintext
└── LacamJC-ReactNPR/
    ├── README.md
    ├── package.json
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   ├── robots.txt
    │   └── img/
    │       ├── carrosel/
    │       └── icons/
    └── src/
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── reportWebVitals.js
        ├── setupTests.js
        ├── components/
        │   ├── FuncaoSite.js
        │   ├── events/
        │   │   ├── Loader.js
        │   │   └── ServerStatus.js
        │   ├── layout/
        │   │   ├── Footer.js
        │   │   └── Header.js
        │   └── pages/
        │       ├── Cadastro.js
        │       ├── CadastroPonto.js
        │       ├── Home.js
        │       ├── Login.js
        │       ├── Mapa.js
        │       └── Pontos.js
        ├── img/
        │   ├── carrosel/
        │   └── icons/
        └── scss/
            ├── FuncaoSite.module.css
            ├── FuncaoSite.module.scss
            ├── _variables.scss
            ├── events/
            │   ├── Loader.module.css
            │   └── Loader.module.scss
            ├── layout/
            │   ├── Footer.module.css
            │   ├── Footer.module.scss
            │   ├── Header.module.css
            │   └── Header.module.scss
            └── pages/
                ├── CadastroPonto.module.css
                ├── CadastroPonto.module.scss
                ├── Home.module.css
                ├── Home.module.scss
                ├── Login.module.css
                ├── Login.module.scss
                ├── Mapa.module.css
                ├── Mapa.module.scss
                ├── Pontos.module.css
                └── Pontos.module.scss
```

## Como Rodar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/LacamJC-ReactNPR.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd LacamJC-ReactNPR
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Execute o projeto:
   ```sh
   npm start
   ```
5. Acesse o projeto no navegador:
   A aplicação estará disponível em `http://localhost:3000`.

## Atualizações
- **Versão 1.0:** Lançamento inicial com as funcionalidades de cadastro de usuário, pontos de coleta e mapa com pontos oficiais.
- **Versão 1.1:** Implementação da área de feedback e melhorias no design da interface.

---

Feito por [LacamJC](https://github.com/LacamJC)
```
