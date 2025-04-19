# Instruções para Implementação do Site Juris no Visual Studio Code

Este documento contém instruções detalhadas para implementar o site da Juris usando o Visual Studio Code.

## Estrutura de Arquivos

O site está organizado da seguinte forma:

```
juris_site/
├── index.html          # Página principal do site
├── css/
│   └── style.css       # Estilos CSS do site
├── js/
│   └── main.js         # Funcionalidades JavaScript
└── images/             # Pasta para armazenar imagens (a ser criada)
```

## Requisitos

- Visual Studio Code instalado
- Extensão "Live Server" para VS Code (para visualização em tempo real)
- Conexão com a internet (para carregar as bibliotecas externas como Font Awesome)

## Passo a Passo para Implementação

### 1. Configuração Inicial

1. Abra o Visual Studio Code
2. Crie uma nova pasta chamada `juris_site` no local de sua preferência
3. Dentro desta pasta, crie as subpastas `css`, `js` e `images`

### 2. Criação dos Arquivos

#### 2.1. Página HTML Principal (index.html)

1. Na pasta raiz `juris_site`, crie um arquivo chamado `index.html`
2. Copie e cole o conteúdo do arquivo `index.html` fornecido

#### 2.2. Estilos CSS (style.css)

1. Na pasta `css`, crie um arquivo chamado `style.css`
2. Copie e cole o conteúdo do arquivo `style.css` fornecido

#### 2.3. JavaScript (main.js)

1. Na pasta `js`, crie um arquivo chamado `main.js`
2. Copie e cole o conteúdo do arquivo `main.js` fornecido

### 3. Configuração do EmailJS (para o formulário de contato)

Para que o formulário de contato envie emails para jurisofc@gmail.com, você precisará configurar o serviço EmailJS:

1. Acesse [emailjs.com](https://www.emailjs.com/) e crie uma conta gratuita
2. Crie um novo serviço de email conectado ao Gmail
3. Crie um template de email com os campos: nome, email, telefone, area, mensagem
4. No arquivo `main.js`, localize a seção do formulário de contato e descomente o código de envio de email
5. Substitua os seguintes valores:
   - `user_seu_id_emailjs` pelo seu ID de usuário do EmailJS
   - `service_id` pelo ID do serviço que você criou
   - `template_id` pelo ID do template que você criou

### 4. Visualização e Teste

1. No VS Code, instale a extensão "Live Server" se ainda não tiver
2. Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server"
3. O site será aberto no seu navegador padrão
4. Teste todas as funcionalidades:
   - Navegação entre seções
   - Funil de áreas do direito
   - Carrossel de depoimentos
   - Formulário de contato
   - Botão de WhatsApp

### 5. Personalização (Opcional)

Você pode personalizar ainda mais o site:

- Adicionar imagens na pasta `images` e referenciá-las no HTML
- Ajustar as cores na seção `:root` do arquivo CSS
- Adicionar ou modificar áreas do direito no objeto `subareas` no arquivo JavaScript

### 6. Publicação

Para publicar o site em um servidor web:

1. Contrate um serviço de hospedagem web (como Hostinger, GoDaddy, etc.)
2. Faça upload de todos os arquivos e pastas para o servidor
3. Configure o domínio para apontar para o seu site

## Solução de Problemas

### O formulário não envia emails

- Verifique se configurou corretamente o EmailJS
- Certifique-se de que descomentou o código de envio de email no arquivo `main.js`
- Verifique se os IDs de serviço e template estão corretos

### As áreas do direito não mostram subáreas

- Verifique se o JavaScript está sendo carregado corretamente
- Abra o console do navegador (F12) para verificar se há erros

### O site não está responsivo

- Certifique-se de que a tag meta viewport está presente no HTML
- Verifique se as media queries no CSS estão funcionando corretamente

## Contato para Suporte

Se precisar de ajuda adicional, entre em contato através do WhatsApp: +5511989823877
