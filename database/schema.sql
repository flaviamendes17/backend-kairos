CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    priority VARCHAR(20) DEFAULT 'medium',
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS stats (
    id SERIAL PRIMARY KEY,
    date DATE DEFAULT CURRENT_DATE,
    tasks_completed INTEGER DEFAULT 0,
    tasks_created INTEGER DEFAULT 0,
    study_hours DECIMAL(4,2) DEFAULT 0,
    productivity_score INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (title, description, due_date, priority, status) VALUES
('Estudar React', 'Revisar componentes e hooks', '2025-09-10', 'high', 'pending'),
('Projeto Backend', 'Finalizar API do Kairos', '2025-09-08', 'high', 'in_progress'),
('Leitura técnica', 'Ler sobre PostgreSQL', '2025-09-12', 'medium', 'pending');

INSERT INTO stats (date, tasks_completed, tasks_created, study_hours, productivity_score) VALUES
('2025-09-04', 5, 3, 4.5, 85),
('2025-09-03', 3, 2, 3.0, 75),
('2025-09-02', 7, 4, 6.0, 95);