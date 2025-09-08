# 🚀 Backend Kairos - Transforme seu tempo em progresso!

Um backend robusto para gerenciamento de tarefas e acompanhamento de produtividade, desenvolvido com Node.js, Express e PostgreSQL.

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado em sua máquina:

### 🔧 Softwares Necessários:
- **Node.js** (versão 16 ou superior) - [Download aqui](https://nodejs.org/)
- **PostgreSQL** (versão 12 ou superior) - [Download aqui](https://www.postgresql.org/download/)
- **Git** - [Download aqui](https://git-scm.com/)

### ✅ Verificar Instalações:
```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar PostgreSQL
psql --version
```

## 🚀 Como Executar o Projeto

### 1️⃣ **Clonar o Repositório**
```bash
git clone https://github.com/flaviamendes17/backend-kairos.git
cd backend-kairos
```

### 2️⃣ **Instalar Dependências**
```bash
npm install
```

### 3️⃣ **Configurar Banco de Dados PostgreSQL**

#### 🔹 **Passo 3.1 - Criar o Banco de Dados**
Abra o terminal do PostgreSQL (psql) ou pgAdmin e execute:
```sql
CREATE DATABASE kairos_db;
```

#### 🔹 **Passo 3.2 - Executar o Schema**
Execute o arquivo `src/database/schema.sql` no banco `kairos_db`:

**Opção A - Via psql (Terminal):**
```bash
psql -U postgres -d kairos_db -f src/database/schema.sql
```

**Opção B - Via pgAdmin:**
1. Abra o pgAdmin
2. Conecte ao servidor PostgreSQL
3. Selecione o banco `kairos_db`
4. Abra o Query Tool
5. Cole o conteúdo do arquivo `src/database/schema.sql`
6. Execute o script

### 4️⃣ **Configurar Variáveis de Ambiente**

#### 🔹 **Passo 4.1 - Criar arquivo .env**
Na raiz do projeto, crie um arquivo `.env` com suas configurações:
```bash
# Copiar o template
cp .env.example .env
```

#### 🔹 **Passo 4.2 - Editar o arquivo .env**
Abra o arquivo `.env` e configure com seus dados:
```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=sua_senha_postgresql
DB_NAME=kairos_db
DB_PORT=5432
```

**⚠️ IMPORTANTE:** Substitua `sua_senha_postgresql` pela senha real do seu PostgreSQL!

### 5️⃣ **Executar o Servidor**

#### 🔹 **Modo Desenvolvimento (com nodemon):**
```bash
npm run dev
```

#### 🔹 **Modo Produção:**
```bash
npm start
```

### 6️⃣ **Verificar se está Funcionando**

Se tudo estiver correto, você verá no terminal:
```
🚀 Servidor Kairos rodando em http://localhost:3000
```

Acesse no navegador: http://localhost:3000

Você deve ver: **"BackEnd Kairos rodando! 🚀"**

## 🧪 Testando a API

### 📡 **Endpoints Disponíveis:**

#### 🏠 **Dashboard**
```http
GET http://localhost:3000/api/dashboard
```

#### 📋 **Tarefas**
```http
GET http://localhost:3000/api/tasks
GET http://localhost:3000/api/tasks/1
POST http://localhost:3000/api/tasks
PUT http://localhost:3000/api/tasks/1
DELETE http://localhost:3000/api/tasks/1
```

#### 📊 **Estatísticas**
```http
GET http://localhost:3000/api/stats
GET http://localhost:3000/api/stats/today
POST http://localhost:3000/api/stats
```

### 🔍 **Teste Rápido no Navegador:**
- http://localhost:3000/api/dashboard
- http://localhost:3000/api/tasks
- http://localhost:3000/api/stats

## 📊 Estrutura do Projeto

```
backend-kairos/
├── src/
│   ├── config/
│   │   └── database.js          # Configuração PostgreSQL
│   ├── controllers/
│   │   ├── tasksController.js   # Lógica das tarefas
│   │   ├── statsController.js   # Lógica das estatísticas
│   │   └── dashboardController.js # Lógica do dashboard
│   ├── models/
│   │   ├── taskModel.js         # Queries das tarefas
│   │   └── statsModel.js        # Queries das estatísticas
│   ├── routes/
│   │   ├── tasks.js             # Rotas das tarefas
│   │   ├── stats.js             # Rotas das estatísticas
│   │   └── dashboard.js         # Rotas do dashboard
│   └── database/
│       └── schema.sql           # Estrutura do banco
├── server.js                    # Servidor principal
├── package.json                 # Dependências
├── .env.example                 # Template das variáveis
├── API_DOCS.md                  # Documentação da API
└── README.md                    # Este arquivo
```

## 🔧 Resolução de Problemas

### ❌ **Erro: "Cannot find module"**
```bash
# Instalar dependências novamente
rm -rf node_modules
npm install
```

### ❌ **Erro: "Connection refused" (Banco)**
1. Verifique se o PostgreSQL está rodando
2. Confirme as configurações no arquivo `.env`
3. Teste a conexão:
```bash
psql -U postgres -d kairos_db
```

### ❌ **Erro: "Port 3000 already in use"**
1. Para o processo na porta 3000:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Linux/Mac
lsof -ti:3000 | xargs kill
```

### ❌ **Erro: "password authentication failed"**
1. Verifique a senha no arquivo `.env`
2. Confirme o usuário PostgreSQL
3. Teste a conexão manual

## 📚 Dados de Exemplo

O projeto já vem com dados de exemplo:
- **8 tarefas** com diferentes status e prioridades
- **7 estatísticas** de produtividade
- Dados em português para facilitar os testes

## 🛠 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados
- **pg** - Driver PostgreSQL para Node.js
- **dotenv** - Gerenciamento de variáveis de ambiente
- **cors** - Controle de acesso CORS
- **nodemon** - Desenvolvimento com hot-reload

## 📖 Documentação da API

Para informações detalhadas sobre todos os endpoints, consulte o arquivo `API_DOCS.md`.

## 👨‍💻 Autor

**Flavia Mendes**
- GitHub: [@flaviamendes17](https://github.com/flaviamendes17)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 🆘 **EM CASO DE PROBLEMAS:**

### 🔧 **Scripts de Verificação:**
```bash
# Windows
verificar-setup.bat

# Linux/Mac
./verificar-setup.sh
```

### 📚 **Documentação de Ajuda:**
- **API_DOCS.md** - Documentação completa da API

### 🧪 **Teste Rápido:**
```bash
# Testar se está funcionando
npm test

# Verificar configuração básica
npm run setup:check
```

### 📞 **Se NADA funcionar:**
1. Verifique se Node.js e PostgreSQL estão instalados
2. Confirme se o arquivo .env está configurado
3. Teste a conexão com o banco manualmente
4. Com algum problema, contacte o email: 📩 flavia.r.mendes@aluno.senai.br

**🎯 GARANTIA:** Seguindo este README exatamente, o projeto DEVE funcionar. Se não funcionar, o problema está na instalação dos pré-requisitos (Node.js ou PostgreSQL).**

---

**Contato:** Para dúvidas ou problemas, abra uma issue no GitHub.
