<div style="font-family: Arial;">

# Natureza Prioridade Renovada - NPR -- React Version

- [Sobre](#sobre)
- [Objetivo](#objetivo)
- [Público-Alvo](#público-alvo)
- [considerações](#avisos)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Screenshots](#screenshots)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Atualizações](#Atualizações)


## Sobre
<p style="font-size: 1.3rem">A aplicação NPR é um projeto desenvolvido por um grupo de estudantes com o objetivo de facilitar a coleta de lixo reciclável e apoiar iniciativas de proteção ao meio ambiente. A plataforma visa oferecer assistência e combate ao descarte irregular de resíduos, promovendo o compartilhamento de informações e um sistema de coleta especializada.</p>

## Objetivo
<p style="font-size: 1.3rem">O principal objetivo da aplicação NPR é proporcionar uma plataforma que facilite a coleta de lixo reciclável, combata o descarte irregular de resíduos e apoie a proteção ao meio ambiente.</p>

## Público-Alvo
<p style="font-size: 1.3rem">A aplicação NPR é destinada ao público em geral, atendendo a todos os públicos interessados em contribuir para a proteção do meio ambiente e a coleta eficiente de lixo reciclável.</p>

## considerações
<p style="font-size: 1.3rem">Atualmente ele está em uma etapa bem avançada mas ainda possui seus pontos a serem melhorados, estou sempre pensando em novas coisas que posso fazer para tornar este projeto maior !</p>

## Funcionalidades
- **Cadastro de Usuário:**
   - <p style="font-size: 1.3rem;">Utilizando o banco de dados relacional MySQL, o cadastro de usuários é feito usando o Sequelize, sendo uma forma simples de fazer a comunicação com o banco de dados através do Node.js.</p>

- **Cadastro de Pontos de Coleta:**
   - <p style="font-size: 1.3rem;">Também utilizando o Sequelize, para que seja cadastrado, o usuário deve ter um cadastro ativo no sistema para assim poder continuar a execução do cadastro.</p>

- **Mapa com Pontos de Coleta Oficiais:**
   - <p style="font-size: 1.3rem;">Utilizando a API do Google Maps, podemos mostrar pontos de coleta funcionais em Barueri.</p>

- **Feedback:**
   - <p style="font-size: 1.3rem;">Uma área no fim da página inicial para que o usuário possa enviar um comentário ou feedback.</p>

## Tecnologias
- HTML
- REACT
- SCSS
- Node.js
- Javascript
- MySQL
- Sequelize
- Bootstrap

<pre>
`Directory structure:
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
`
</pre>
