# API Documentation - Backend Kairos

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### 🏠 Dashboard
- **GET** `/dashboard` - Dados do dashboard com resumo de tarefas e estatísticas

### 📋 Tasks (Tarefas)
- **GET** `/tasks` - Listar todas as tarefas
- **GET** `/tasks?title=termo` - Buscar tarefas por título
- **GET** `/tasks/:id` - Buscar tarefa por ID
- **POST** `/tasks` - Criar nova tarefa
- **PUT** `/tasks/:id` - Atualizar tarefa
- **DELETE** `/tasks/:id` - Deletar tarefa

### 📊 Stats (Estatísticas)
- **GET** `/stats` - Todas as estatísticas
- **GET** `/stats/today` - Estatísticas de hoje
- **GET** `/stats/:id` - Buscar estatística por ID
- **POST** `/stats` - Criar nova estatística
- **PUT** `/stats/:id` - Atualizar estatística
- **DELETE** `/stats/:id` - Deletar estatística

## Modelos de Dados

### Task
```json
{
  "id": 1,
  "title": "Estudar React",
  "description": "Revisar componentes e hooks",
  "due_date": "2025-09-10",
  "priority": "alta", // baixa, media, alta
  "status": "pendente", // pendente, em_progresso, concluida
  "created_at": "2025-09-08T10:00:00Z",
  "updated_at": "2025-09-08T10:00:00Z"
}
```

### Stats
```json
{
  "id": 1,
  "date": "2025-09-08",
  "tasks_completed": 5,
  "tasks_created": 3,
  "study_hours": 4.5,
  "productivity_score": 85,
  "created_at": "2025-09-08T10:00:00Z"
}
```

### Dashboard Response
```json
{
  "todayStats": {
    "tasks_completed": 3,
    "tasks_created": 5,
    "study_hours": 2.5,
    "productivity_score": 75
  },
  "tasksSummary": {
    "pendente": 8,
    "em_progresso": 2,
    "concluida": 15,
    "total": 25
  },
  "recentTasks": [...]
}
```

## Como usar no Frontend

### Exemplo React
```javascript
// Buscar dados do dashboard
const fetchDashboard = async () => {
  const response = await fetch('http://localhost:3000/api/dashboard');
  return response.json();
};

// Criar nova tarefa
const createTask = async (taskData) => {
  const response = await fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData)
  });
  return response.json();
};
```
