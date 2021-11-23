const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

let shuffledQuestions, currentQuestionIndex;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showNextQuestion (shuffledQuestions[currentQuestionIndex]);
}

function showNextQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Отначало';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Българското ханство на Долния Дунав може да се определи като продължение на Старата Велика България, защото:',
        answers: [
            { text: 'Продължава традиционната политика на мирни отношения с Византия', correct: false },
            { text: 'Запазва традицията столицата Плиска да се управлява от наследника на хана', correct: false },
            { text: 'Обединява всички славянски племена около хана на прабългарите', correct: false },
            { text: 'Използва управленския опит и държавните традиции на прабългарите', correct: true },
        ]
    },

    {
        question: 'В кой ред са посочени имената само на славянски божества?',
        answers: [
            { text: 'Арес, Дионис и Артемида', correct: false },
            { text: 'Перун, Дажбог и Лада', correct: true },
            { text: 'Юпитер, Сатурн и Венера', correct: false },
            { text: 'Зевс, Хермес и Афродита', correct: false },
        ]
    }, 

    {
        question: 'В кой от дадените отговори са термини, които описват състоянието на българската държава през първата половина на ІХ век?',
        answers: [
            { text: 'Криза, заговори, нашествия', correct: false },
            { text: 'Упадък, дестабилизация, военни загуби', correct: false },
            { text: 'Анархия, корупция, междуособици', correct: false },
            { text: 'Възход, централизация, реформи', correct: true },
        ]
    },

    {
        question: 'Българският владетел, който нанесъл съкрушително поражение на маджарите, като ги принудил да напуснат земите си, е:',
        answers: [
            { text: 'Цар Симеон с помощта на печенегите', correct: true },
            { text: 'Цар Петър с помощта на Византия', correct: false },
            { text: 'Хан Омуртаг с помощта на франките', correct: false },
            { text: 'Княз Борис с помощта на Немското кралство', correct: false },
        ]
    },

    {
        question: 'Как се наричат земеделските стопанства в Османската държава през ХVІІІ и ХІХ век, които изцяло насочват своята дейност към пазара?',
        answers: [
            { text: 'манифактури', correct: false },
            { text: 'тимари', correct: false },
            { text: 'чифлици', correct: true },
            { text: 'еснафи', correct: false },
        ]
    },

    {
        question: 'Новата социална прослойка, появила се в структурата на българското общество през Ранното възраждане, е:',
        answers: [
            { text: 'аристокрацията', correct: false },
            { text: 'духовенството', correct: false },
            { text: 'монашеството', correct: false },
            { text: 'буржоазията', correct: true },
        ]
    },

    {
        question: 'Цел на реформите в Османската империя през първата половина на ХІХ век е:',
        answers: [
            { text: 'Спиране на отцепниците аяни', correct: false },
            { text: 'Модернизация на държавата', correct: true },
            { text: 'Подобряване на отношенията с Русия', correct: false },
            { text: 'Възстановяване на еничарския корпус', correct: false },
        ]
    },

    {
        question: 'Идеята за създаване на четническа армия, която да стане ядро на бъдещо всенародно въстание за освобождение на България, принадлежи на:',
        answers: [
            { text: 'Панайот Хитов', correct: false },
            { text: 'Георги Бенковски', correct: false },
            { text: 'Георги Раковски', correct: true },
            { text: 'Христо Ботев', correct: false },
        ]
    },

    {
        question: 'Великденската акция от 3 април 1860 г. е:',
        answers: [
            { text: 'Конференция на посланиците на Великите сили в Цариград', correct: false },
            { text: 'Проява на отхвърлянето на властта на Цариградския патриарх от българите', correct: true },
            { text: 'Реформен документ за модернизиране на Османската държава', correct: false },
            { text: 'Проява на организираната въоръжена съпротива на българите срещу султана', correct: false },
        ]
    },

    {
        question: 'Коя европейска държава, участвала в подписването на Берлинския договор (1878г.), подкрепя Съединението?',
        answers: [
            { text: 'Англия', correct: true },
            { text: 'Германия', correct: false },
            { text: 'Франция', correct: false },
            { text: 'Русия', correct: false },
        ]
    },

    {
        question: 'Причина за масовите протести на българите през лятото и есента на 1878 г. е:',
        answers: [
            { text: 'Неодобрението на мерките на Временното руско управление', correct: false },
            { text: 'Смъртта на княз Владимир Черкаски', correct: false },
            { text: 'Разпокъсването на Санстефанска България в Берлин', correct: true },
            { text: 'Опитът за присъединяване на Родопската област към Турция', correct: false },
        ]
    },

    {
        question: 'Цар Фердинанд абдикира в полза на престолонаследника Борис през:',
        answers: [
            { text: '1925 г. след атентата в църквата "Света Неделя"', correct: false },
            { text: '1918 г. след поражението в Първата световна война', correct: true },
            { text: '1913 г. след загубата в Междусъюзническата война', correct: false },
            { text: '1887 г. след отказа да бъде признат от Русия', correct: false },
        ]
    }
    
];