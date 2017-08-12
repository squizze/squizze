function QuestionsAndOptionsMock($httpBackend) {
    var mock = {
        "results":{
            "A": {
                "shortName": "D",
                "longName": "Dominance",
                "rule": "A1 - A2"
            },
            "B": {
                "shortName": "I",
                "longName": "Influence",
                "rule": "B1 - B2"
            },
            "C": {
                "shortName": "S",
                "longName": "Steadliness",
                "rule": "C1 - C2"
            },
            "D": {
                "shortName": "C",
                "longName": "Compliance",
                "rule": "D1 - D2"
            }
        },
        "groups": {
            "A1": [3,8,19, 31],
            "A2": [20,23,26,32],
            "B1": [5,6,7,11],
            "B2": [1,24,27,30],
            "C1": [2,10,15,18,25],
            "C2": [9,12,16,29],
            "D1": [4,17,21],
            "D2": [13,14,22,28]
        },
        "options": {
            "start": 0,
            "end": 0,
            "texts": ["Não sei", "Discordo totalmente", "Discordo", "Concordo um pouco", "Concordo", "Concordo totalmente"]
        },
        "questions":[
            {
                "id": "1",
                "text": "Gosto de trabalhar sozinho."
            },
            {
                "id": "2",
                "text": "Sou calmo e sereno."
            },
            {
                "id": "3",
                "text": "Costumo atingir meus objetivos, não importam os obstáculos."
            },
            {
                "id": "4",
                "text": "Sou meticuloso e detalhista."
            },
            {
                "id": "5",
                "text": "Sou extrovertido e falante."
            },
            {
                "id": "6",
                "text": "Sempre participo ativamente nas reuniões de trabalho."
            },
            {
                "id": "7",
                "text": "Gosto de estar cercado de pessoas e ser o centro das atenções."
            },
            {
                "id": "8",
                "text": "Tomo sempre a iniciativa e sou muito impaciente."
            },
            {
                "id": "9",
                "text": "Sou muito curioso. Gosto sempre de saber de tudo."
            },
            {
                "id": "10",
                "text": "Gosto de fazer um trabalho perfeito, não importa quanto tempo demore."
            },
            {
                "id": "11",
                "text": "Falo pelos cotovelos, não consigo ficar calado."
            },
            {
                "id": "12",
                "text": "Sou extremamente ambicioso."
            },
            {
                "id": "13",
                "text": "Estruturas muito rígidas me aborrecem, gosto da liberdade de ação."
            },
            {
                "id": "14",
                "text": "Considero-me um individuo teimoso."
            },
            {
                "id": "15",
                "text": "Cedo a vez ao outro sem problema."
            },
            {
                "id": "16",
                "text": "Tenho coragem de me arriscar."
            },
            {
                "id": "17",
                "text": "Sou disciplinado e organizado."
            },
            {
                "id": "18",
                "text": "Considero-me uma pessoa de índole calma e moderada."
            },
            {
                "id": "19",
                "text": "Aprecio desafios. Adoro competir."
            },
            {
                "id": "20",
                "text": "Penso várias vezes antes de tomar uma decisão."
            },
            {
                "id": "21",
                "text": "Sou uma pessoa cumpridora das regras e da política da empresa."
            },
            {
                "id": "22",
                "text": "Sou brincalhão. Estou sempre rindo."
            },
            {
                "id": "23",
                "text": "Sou calmo e paciente."
            },
            {
                "id": "24",
                "text": "Sou mais reservado."
            },
            {
                "id": "25",
                "text": "Prefiro ficar em casa com a minha família."
            },
            {
                "id": "26",
                "text": "Recebo em as normas e procedimentos. Respeito as regras."
            },
            {
                "id": "27",
                "text": "Sou bastante cuidadoso. Não me arrisco muito."
            },
            {
                "id": "28",
                "text": "Gosto de agradar os outros e ser popular."
            },
            {
                "id": "29",
                "text":"Aprecio atividades variadas, não gosto de detalhes."
            },
            {
                "id": "30",
                "text": "Sou calado, timido e reservado."
            },
            {
                "id": "31",
                "text": "Sou corajoso, decidido e gosto de arriscar."
            },
            {
                "id": "32",
                "text": "Costumo aceitar os reveses da vida com paciência e serenidade."
            }
        ]
    };

    function setupMocks() {
        $httpBackend.whenGET("api/questions-and-options.json").respond(mock);
    }

    return {
        setupMocks: setupMocks
    };
}

module.exports = QuestionsAndOptionsMock;

