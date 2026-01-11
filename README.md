# PrimeFlix - Plataforma de Filmes e Conteúdo

## Visão Geral do Projeto
O **PrimeFlix** é uma aplicação web moderna para explorar filmes e gerenciar conteúdos. Funciona como um catálogo de filmes onde os usuários podem descobrir novidades, salvar favoritos e criar postagens em um blog integrado.

### O Que Esta Aplicação Faz
Esta é uma **Single Page Application (SPA)**, ou seja, uma aplicação web que funciona sem recarregar a página inteira. Ela oferece três funcionalidades principais:

1. **Catálogo de Filmes**: Busca e exibe filmes em cartaz usando dados da API do TMDB (The Movie Database)
2. **Sistema de Favoritos**: Permite salvar filmes preferidos no navegador do usuário
3. **Blog de Postagens**: Sistema de criação e armazenamento de postagens usando banco de dados do Firebase


---


## Tecnologias Utilizadas
O projeto foi construído com tecnologias modernas e usadas no mercado atual:

**React 19.2.3**: Framework para construir a interface do usuário
**React Router DOM 7.11.0**: Gerencia a navegação entre páginas dentro da aplicação
**Axios 1.13.2**: Realiza as conexões com APIs externas
**Firebase 12.7.0**: Fornece banco de dados em nuvem para armazenar postagens (Cloud Firestore Database)
**React Toastify 11.0.5**: Exibe notificações visuais (sucesso, erro, avisos)
**React UseAnimations 2.10.0**: Adiciona ícones animados para melhorar a experiência visual
**CSS Puro**: Estilização customizada sem dependências adicionais


---


## Funcionalidades Implementadas

### 🏠 Página Inicial (Home)
- Lista os **10 filmes mais recentes** em cartaz
- Exibe informações básicas: título, sinopse e imagem
- Botão para ver detalhes completos de cada filme
- Interface responsiva com design moderno

### 🎬 Página de Detalhes do Filme (Movie)
- Mostra informações completas: título, avaliação, sinopse e imagem em alta qualidade
- **Salvar nos Favoritos**: Adiciona o filme à lista pessoal do usuário
- **Buscar Trailer**: Redireciona para o YouTube para assistir o trailer
- Validação para evitar duplicatas na lista de favoritos

### ⭐ Página de Favoritos (Favorites)
- Lista todos os filmes salvos pelo usuário
- **Visualizar Detalhes**: Acessa a página completa de cada filme
- **Remover Filme**: Exclui filmes da lista de favoritos
- Mensagem quando não há filmes salvos
- Dados armazenados localmente no navegador

### 📝 Página de Postagens (Posts)
- **Criar Postagem**: Formulário para cadastrar novas postagens com:
  - Nome do autor
  - Título da postagem
  - Descrição/conteúdo
- **Buscar Postagens**: Lista todas as postagens cadastradas
- Dados salvos no Firebase (banco de dados em nuvem)
- Visualização em formato de lista organizada

### ❌ Página de Erro (404)
- Exibe quando o usuário tenta acessar uma página inexistente
- Botão para retornar à página inicial

### 🧭 Navegação (Header)
- Presente em todas as páginas
- Links rápidos para Home, Blog e Favoritos
- Design fixo no topo da tela para fácil acesso

---

## Estrutura do Projeto

```
PrimeFlix/
├── src/
│   ├── pages/              # Páginas principais da aplicação
│   │   ├── Home/           # Lista de filmes em cartaz
│   │   ├── Movie/          # Detalhes do filme selecionado
│   │   ├── Favorites/      # Lista de filmes favoritos
│   │   ├── Posts/          # Sistema de postagens/blog
│   │   └── Erro/           # Página de erro 404
│   │
│   ├── components/         # Componentes reutilizáveis
│   │   └── Header/         # Cabeçalho de navegação
│   │
│   ├── services/           # Configurações e conexões externas
│   │   ├── api.js          # Configuração da API do TMDB
│   │   └── firebaseConnection.js  # Conexão com Firebase
│   │
│   ├── App.js              # Componente principal da aplicação
│   ├── routes.js           # Configuração de rotas e navegação
│   └── index.js            # Ponto de entrada da aplicação
│
└── package.json            # Dependências e scripts do projeto
```

### Rotas Disponíveis

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com lista de filmes |
| `/movie/:id` | Detalhes do filme (onde `:id` é o identificador do filme) |
| `/favorites` | Lista de filmes favoritos do usuário |
| `/posts` | Sistema de criação e visualização de postagens |
| `*` | Qualquer outra rota redireciona para página de erro 404 |

---

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 14 ou superior recomendada)
- NPM (geralmente vem junto com Node.js)


### Passo 1: Instalar Dependências
Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Este comando instala todas as bibliotecas necessárias para o projeto funcionar.


### Passo 2: Iniciar o Servidor de Desenvolvimento
Execute o comando:

```bash
npm start
```

O que acontece:
- ✅ Inicia o servidor de desenvolvimento
- ✅ Abre automaticamente o navegador em `http://localhost:3000`
- ✅ Monitora mudanças no código e recarrega automaticamente
- ✅ Exibe erros no console para facilitar o debug


### Outros Comandos Disponíveis
```bash
npm run build    # Cria versão otimizada para produção
npm test         # Executa os testes automatizados
```


---


## Status Atual do Projeto

### ✅ Funcionalidades Implementadas
- Sistema completo de navegação entre páginas
- Integração com API externa (TMDB) funcionando
- Sistema de favoritos usando armazenamento local
- CRUD de postagens com Firebase através do Database Cloud Firestore
- Notificações visuais para ações do usuário
- Tratamento de erros e páginas não encontradas


---


## Diferenciais Técnicos

- **Performance**: Aplicação leve que carrega rápido
- **UX Moderna**: Animações suaves e feedback visual imediato
- **Responsivo**: Funciona bem em diferentes tamanhos de tela
- **Escalável**: Estrutura organizada facilita adicionar novas funcionalidades
- **Integração Cloud**: Uso de Firebase para dados persistentes em nuvem

---

## Próximos Passos Sugeridos

- [ ] Implementar busca de filmes
- [ ] Adicionar filtros e categorias
- [ ] Sistema de autenticação de usuários
- [ ] Comentários nas postagens
- [ ] Melhorias na responsividade mobile