# SOBRE O PROJETO PRIMEFLIX


STACKS: React 19 + React Router DOM 7 + Axios com CSS puro e Create React App como build tool. Aplicação SPA com roteamento client-side, consumo de API externa (TMDB) e armazenamento local.

## DETALHANDO TECNOLOGIAS
- **React 19** - Biblioteca JavaScript para criar interfaces de usuário
- **React Router DOM 7** - Sistema de roteamento para navegação entre páginas
- **Axios** - Biblioteca para fazer requisições HTTP à API
- **CSS Puro** - Estilização sem frameworks adicionais
- **Create React App** - Ferramenta para criar e configurar o projeto React

Este é uma aplicação SPA (Single Page Application) que consome dados da API do TMDB (The Movie Database) e salva os filmes favoritos no armazenamento local do navegador.

## Como Usar o Projeto

### Instalação

Primeiro, instale as dependências do projeto:

```bash
npm install
```

### Executar o Projeto

Para iniciar o projeto em modo de desenvolvimento, use o comando:

```bash
npm start
```

Isso vai:
- Abrir o aplicativo no modo de desenvolvimento
- Abrir automaticamente no navegador (http://localhost:3000)
- Recarregar a página automaticamente quando você fizer alterações no código
- Mostrar erros de lint no console do navegador

### Executar Testes

Para executar os testes do projeto:

```bash
npm test
```

Isso abre o executor de testes em modo interativo, onde você pode ver e executar os testes do projeto.

### Criar Versão de Produção

Para criar uma versão otimizada do projeto para produção:

```bash
npm run build
```

Isso vai:
- Criar uma pasta `build` com os arquivos otimizados
- Minificar o código para melhor performance
- Adicionar hashes nos nomes dos arquivos para controle de cache
- Preparar o aplicativo para ser publicado em um servidor

### Ejetar do Create React App

**Atenção: Esta é uma operação irreversível! Uma vez que você executar `eject`, não poderá voltar atrás!**

Se você quiser ter controle total sobre as configurações do projeto (webpack, Babel, ESLint, etc), pode executar:

```bash
npm run eject
```

Isso vai:
- Remover a dependência do Create React App
- Copiar todos os arquivos de configuração diretamente para o projeto
- Dar controle total sobre as ferramentas de build

**Importante:** Você não precisa usar o `eject`. As configurações padrão do Create React App são suficientes para a maioria dos projetos. Use apenas se realmente precisar personalizar algo específico.
