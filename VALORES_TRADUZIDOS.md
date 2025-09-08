# Valores Traduzidos - Backend Kairos

## 📊 Status das Tarefas
- `pendente` - Tarefa ainda não iniciada
- `em_progresso` - Tarefa sendo executada
- `concluida` - Tarefa finalizada

## 🎯 Prioridades das Tarefas  
- `baixa` - Prioridade baixa
- `media` - Prioridade média (padrão)
- `alta` - Prioridade alta

## 📋 Campos do Banco de Dados

### Tabela `tasks`
- `title` - Título da tarefa
- `description` - Descrição detalhada
- `due_date` - Data de vencimento
- `priority` - Prioridade (baixa/media/alta)
- `status` - Status (pendente/em_progresso/concluida)
- `created_at` - Data de criação
- `updated_at` - Data da última atualização

### Tabela `stats`
- `date` - Data da estatística
- `tasks_completed` - Tarefas concluídas no dia
- `tasks_created` - Tarefas criadas no dia
- `study_hours` - Horas de estudo
- `productivity_score` - Pontuação de produtividade (0-100)

## 🎨 Para o Frontend
Use estes valores ao criar dropdowns, filtros e exibições:

```javascript
// Status
const statusOptions = [
  { value: 'pendente', label: 'Pendente' },
  { value: 'em_progresso', label: 'Em Progresso' },
  { value: 'concluida', label: 'Concluída' }
];

// Prioridades
const priorityOptions = [
  { value: 'baixa', label: 'Baixa' },
  { value: 'media', label: 'Média' },
  { value: 'alta', label: 'Alta' }
];
```

## 🎨 Cores Sugeridas para Frontend
```css
/* Status */
.status-pendente { color: #f59e0b; } /* Amarelo */
.status-em-progresso { color: #3b82f6; } /* Azul */
.status-concluida { color: #10b981; } /* Verde */

/* Prioridades */
.priority-baixa { color: #6b7280; } /* Cinza */
.priority-media { color: #f59e0b; } /* Amarelo */
.priority-alta { color: #ef4444; } /* Vermelho */
```
