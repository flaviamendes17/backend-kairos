CREATE DATABASE kairos; 
\c kairos;

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    priority VARCHAR(20) DEFAULT 'media',
    status VARCHAR(20) DEFAULT 'pendente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS stats (
    id SERIAL PRIMARY KEY,
    date DATE DEFAULT CURRENT_DATE UNIQUE,
    tasks_completed INTEGER DEFAULT 0,
    tasks_created INTEGER DEFAULT 0,
    study_hours DECIMAL(4,2) DEFAULT 0,
    productivity_score INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (title, description, due_date, priority, status) VALUES
('Estudar React', 'Revisar componentes e hooks', '2025-09-10', 'alta', 'pendente'),
('Projeto Backend', 'Finalizar API do Kairos', '2025-09-08', 'alta', 'em_progresso'),
('Leitura técnica', 'Ler sobre PostgreSQL', '2025-09-12', 'media', 'concluida'),
('Exercícios de lógica', 'Resolver problemas no HackerRank', '2025-09-11', 'baixa', 'pendente'),
('Revisão de código', 'Revisar PRs no GitHub', '2025-09-09', 'media', 'em_progresso'),
('Planejamento semanal', 'Organizar tarefas da semana', '2025-09-07', 'alta', 'concluida'),
('Atualizar LinkedIn', 'Adicionar novas habilidades e projetos', '2025-09-15', 'baixa', 'pendente'),
('Revisar material de estudo', 'Revisar anotações e resumos', '2025-09-14', 'media', 'pendente');

INSERT INTO stats (date, tasks_completed, tasks_created, study_hours, productivity_score) VALUES
('2025-09-07', 2, 1, 1.5, 65),
('2025-09-06', 4, 3, 3.5, 80),
('2025-09-05', 3, 2, 2.0, 70),
('2025-09-04', 5, 3, 4.5, 85),
('2025-09-03', 3, 2, 3.0, 75),
('2025-09-02', 7, 4, 6.0, 95),
('2025-09-01', 4, 2, 2.5, 78);