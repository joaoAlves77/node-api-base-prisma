# 🚀 Node API Base (Boilerplate com TypeScript & Prisma)

> ⚠️ **Aviso de Propósito:**  
> Este repositório é um **boilerplate / starter kit** (serve **estritamente como base**). Ele foi criado para acelerar o início de novos projetos de API em Node.js, trazendo a arquitetura inicial e ferramentas essenciais já configuradas.
>
> As rotas (`/user`, `/users`), serviços e modelos (`User`, `Post`) presentes aqui são **apenas exemplos didáticos** de integração com o Prisma ORM e devem ser alterados ou removidos conforme as necessidades do seu projeto real.

---

## 🛠️ Tecnologias e Recursos Inclusos

- **[Node.js](https://nodejs.org/)** com **[TypeScript](https://www.typescriptlang.org/)**
- **[Express](https://expressjs.com/)** - Framework web para roteamento e middlewares
- **[Prisma ORM](https://www.prisma.io/)** - ORM moderno configurado para PostgreSQL
- **[tsx](https://github.com/privatenumber/tsx)** - Execução e hot-reload ágil em ambiente de desenvolvimento
- **[Helmet](https://helmetjs.github.io/)** - Proteção e segurança através de headers HTTP
- **[CORS](https://github.com/expressjs/cors)** - Habilitação de Cross-Origin Resource Sharing
- **[dotenv](https://github.com/motdotla/dotenv)** - Gerenciamento de variáveis de ambiente

---

## 📁 Estrutura de Pastas

```text
├── prisma/
│   ├── schema.prisma       # Modelos do banco de dados e configuração do Prisma
│   └── migrations/         # Histórico de migrações do banco
├── src/
│   ├── generated/          # Código gerado automaticamente pelo Prisma (ignorado no git)
│   ├── lib/
│   │   └── prisma.ts       # Instância compartilhada (singleton) do PrismaClient
│   ├── routes/
│   │   └── main.ts         # Rotas principais da aplicação (exemplos e ping)
│   ├── services/
│   │   └── user.ts         # Serviços com operações no banco via Prisma (exemplo)
│   └── server.ts           # Inicialização do Express, middlewares e servidor
├── .env.example            # Modelo de variáveis de ambiente
├── package.json
└── tsconfig.json
```

---

## 🚀 Passo a Passo: Instalação e Execução

### 1. Clonar e Instalar Dependências

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd node-api-base-prisma

# Instale os pacotes
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie uma cópia do arquivo `.env.example` nomeada como `.env`:

- **Linux / macOS:**
  ```bash
  cp .env.example .env
  ```
- **Windows (PowerShell):**
  ```powershell
  Copy-Item .env.example .env
  ```

Edite o `.env` com a porta desejada e a URL de conexão com seu banco PostgreSQL:

```env
PORT=3000
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco?schema=public"
```

### 3. Configurar o Banco de Dados (Prisma)

Gere os tipos do cliente e aplique as migrações no seu banco:

```bash
# Gera o cliente do Prisma com base no schema.prisma
npx prisma generate

# Executa as migrações no banco de dados configurado no .env
npx prisma migrate dev
```

### 4. Rodar o Servidor

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3000`.

Para testar o funcionamento, acesse:
- `GET http://localhost:3000/ping` ➔ Resposta: `{"pong": true}`

---

## 💡 Comandos Úteis do Prisma

| Comando | Descrição |
| --- | --- |
| `npx prisma generate` | Regenera o Prisma Client com base nas alterações do `schema.prisma` |
| `npx prisma migrate dev` | Cria e aplica novas migrações a partir do `schema.prisma` |
| `npx prisma studio` | Abre uma interface gráfica no navegador para visualizar e editar os dados do banco |
| `npx prisma db push` | Sincroniza o schema diretamente com o banco sem criar arquivos de migração (útil em testes rápidos) |

---

## 🔄 Usando como Base para um Novo Projeto

Quando for iniciar seu próprio projeto a partir deste repositório:

1. **Desvincule o repositório Git original** para apontar para o seu próprio repositório remoto:
   ```bash
   # Verifique o repositório atual
   git remote -v

   # Remova o repositório base
   git remote remove origin

   # Adicione o seu novo repositório
   git remote add origin <url-do-seu-novo-repositorio>

   # Envie as alterações
   git branch -M main
   git push -u origin main
   ```

2. **Adapte os modelos e rotas:**
   - Modifique o arquivo [schema.prisma](file:///c:/Users/PC/Downloads/node-api-base-prisma/prisma/schema.prisma) para definir as entidades reais do seu sistema.
   - Ajuste ou remova as rotas de exemplo em [src/routes/main.ts](file:///c:/Users/PC/Downloads/node-api-base-prisma/src/routes/main.ts) e os serviços em [src/services/user.ts](file:///c:/Users/PC/Downloads/node-api-base-prisma/src/services/user.ts).