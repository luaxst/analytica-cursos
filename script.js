document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter as respostas do formulário
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked')?.value,
        question2: document.querySelector('input[name="question2"]:checked')?.value,
        question3: document.querySelector('input[name="question3"]:checked')?.value,
        question4: document.querySelector('input[name="question4"]:checked')?.value,
        question5: document.querySelector('input[name="question5"]:checked')?.value,
        question6: document.querySelector('input[name="question6"]:checked')?.value,
        question7: document.querySelector('input[name="question7"]:checked')?.value,
        question8: document.querySelector('input[name="question8"]:checked')?.value,
        question9: document.querySelector('input[name="question9"]:checked')?.value,
        question10: document.querySelector('input[name="question10"]:checked')?.value,
    };

    // Inicializa as contagens para cada área
    const areaPrioridade = {
        hematologia: 0,
        imunologia: 0,
        hemoderivados: 0,
        parasitologia: 0,
        bioquimica: 0,
        microbiologia: 0
    };

    // Mapeia respostas a áreas
    const respostaParaArea = {
        "hematologia": ["praticas", "equipe", "teoria"],
        "imunologia": ["teoricas", "sim", "pratica"],
        "hemoderivados": ["praticas", "individualmente", "teoria"],
        "parasitologia": ["teoricas", "sim", "pratica"],
        "bioquimica": ["praticas", "equipe"],
        "microbiologia": ["teoricas", "sim"]
    };

    // Contabiliza as respostas para determinar a área de estudo
    for (let question in answers) {
        const answer = answers[question];
        if (answer) {
            // Se a resposta corresponder a uma área, aumenta a contagem
            for (let area in respostaParaArea) {
                if (respostaParaArea[area].includes(answer)) {
                    areaPrioridade[area] += 1;
                }
            }
        }
    }

    // Determina a área com mais respostas
    const maxArea = Object.keys(areaPrioridade).reduce((a, b) => areaPrioridade[a] > areaPrioridade[b] ? a : b);
    const result = `Baseado nas suas respostas, você deve aprofundar seus estudos em: ${maxArea.charAt(0).toUpperCase() + maxArea.slice(1)}.`;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result; // Define o conteúdo
    resultDiv.style.display = 'block'; // Torna visível
    
    document.getElementById('result').innerHTML = result;
});
