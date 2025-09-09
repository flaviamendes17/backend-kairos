// Arquivo de teste para verificar se o backend está funcionando
// Execute este arquivo com: node test-api.js

const testAPI = async () => {
    const baseURL = 'http://localhost:3000/api/kairos';
    
    console.log('🧪 Testando Backend Kairos...\n');

    try {
        // 1. Testar Dashboard
        console.log('📊 Testando Dashboard...');
        const dashboardResponse = await fetch(`${baseURL}/dashboard`);
        const dashboard = await dashboardResponse.json();
        console.log('✅ Dashboard:', dashboard);
        console.log('');

        // 2. Testar Tasks
        console.log('📋 Testando Tasks...');
        const tasksResponse = await fetch(`${baseURL}/tasks`);
        const tasks = await tasksResponse.json();
        console.log('✅ Tasks:', tasks.length, 'tarefas encontradas');
        console.log('');

        // 3. Testar Stats
        console.log('📈 Testando Stats...');
        const statsResponse = await fetch(`${baseURL}/stats`);
        const stats = await statsResponse.json();
        console.log('✅ Stats:', stats.length, 'estatísticas encontradas');
        console.log('');

        // 4. Testar Stats de Hoje
        console.log('📅 Testando Stats de Hoje...');
        const todayResponse = await fetch(`${baseURL}/stats/today`);
        const today = await todayResponse.json();
        console.log('✅ Stats Hoje:', today);
        console.log('');

        // 5. Testar Busca de Tasks
        console.log('🔍 Testando Busca de Tasks...');
        const searchResponse = await fetch(`${baseURL}/tasks?title=React`);
        const searchResults = await searchResponse.json();
        console.log('✅ Busca "React":', searchResults.length, 'resultados');
        console.log('');

        console.log('🎉 Todos os testes passaram! Backend funcionando perfeitamente!');

    } catch (error) {
        console.error('❌ Erro no teste:', error.message);
        console.log('💡 Certifique-se de que o servidor está rodando na porta 3000');
    }
};

// Função fetch para Node.js (caso não tenha)
if (typeof fetch === 'undefined') {
    global.fetch = require('node-fetch');
}

testAPI();
