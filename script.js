// 퀴즈 데이터
const quizData = [
    {
        question: "2022년 11월, OpenAI가 공개한 대화형 인공지능 서비스로, 출시 두 달 만에 사용자 수 1억 명을 돌파하며 생성형 AI 시대를 열었습니다. 이 서비스의 이름은 무엇인가?",
        options: ["ChatGPT", "TalkAI", "GPTGo", "OpenBuddy", "BrainTalker"],
        correct: 0,
        explanation: "ChatGPT는 OpenAI가 2022년 11월에 출시한 대화형 인공지능입니다. 자연어 처리 기술을 기반으로 사용자와 대화를 주고받으며, 출시 2달 만에 1억 명이 사용할 정도로 폭발적인 인기를 얻으며 생성형 AI 시대를 열었습니다."
    },
    {
        question: "AI에게 질문이나 명령을 입력하는 문장으로, 결과물 품질에 큰 영향을 주며 'OOO 엔지니어'라는 직업도 생겼습니다. 이 입력문장의 명칭은?",
        options: ["질문지", "커맨드라인", "프롬프트", "요청서", "요청값"],
        correct: 2,
        explanation: "프롬프트는 AI에게 질문하거나 작업을 지시하는 입력 문장입니다. 좋은 프롬프트는 더 정확하고 유용한 결과를 이끌어낼 수 있어, 최근에는 '프롬프트 엔지니어'라는 전문 직군도 생겨났습니다."
    },
    {
        question: "GPT 모델은 텍스트를 특정 단위로 쪼개어 이해합니다. 이 단위는 사용량과 비용을 계산하는 기준이 되며, 1000개당 약 750단어 정도에 해당합니다. 이 단위는 무엇일까요?",
        options: ["셀", "패킷", "블록", "토큰", "점수"],
        correct: 3,
        explanation: "GPT 모델은 텍스트를 '토큰' 단위로 분해해 처리합니다. 토큰은 단어나 문자보다 작은 의미 단위이며, 비용 산정, 컨텍스트 제한, 응답 길이 등에 핵심적으로 사용됩니다."
    },
    {
        question: "AI가 존재하지 않는 정보나 사실을 그럴듯하게 지어내는 현상을 뭐라고 할까요? 예를 들어, AI가 없는 논문을 인용하거나 가짜 뉴스를 생성하는 경우입니다.",
        options: ["미러링", "딥러닝 오류", "할루시네이션", "패닉 모드", "텍스트 블러"],
        correct: 2,
        explanation: "할루시네이션은 AI가 사실이 아닌 내용을 그럴듯하게 만들어내는 현상입니다. 존재하지 않는 논문을 인용하거나, 틀린 정보를 진실처럼 말하는 경우가 이에 해당합니다. AI의 신뢰성 문제를 논할 때 핵심 이슈입니다."
    },
    {
        question: "마이크로소프트나 깃허브 등에서 사용자의 작업을 실시간으로 보조하며 문서 작성, 코드 생성 등에서 협력하듯 작동하는 AI 기능을 무엇이라 하나요?",
        options: ["AI Secretary", "서브파일럿", "코파일럿", "Task Assistant", "챗헬퍼"],
        correct: 2,
        explanation: "코파일럿은 사용자의 업무를 보조하는 AI를 의미합니다. Microsoft Copilot, GitHub Copilot 등이 대표 사례로, 문서 작성, 코딩, 데이터 분석 등의 실무를 함께 수행합니다."
    },
    {
        question: "수십억 개의 문서와 텍스트 데이터를 학습한 대규모 자연어 처리 모델을 지칭하는 약어는 무엇일까요?",
        options: ["LMD", "NLU", "GPT-Set", "LLM", "MegaText"],
        correct: 3,
        explanation: "LLM은 'Large Language Model(대규모 언어모델)'의 약어로, 수십억 개의 텍스트 데이터를 학습하여 인간처럼 언어를 처리하는 인공지능 모델을 말합니다. GPT, Claude, Gemini 등이 여기에 해당합니다."
    },
    {
        question: "AI가 목표를 스스로 설정하고 작업을 계획·수행할 수 있는 자율형 시스템을 무엇이라 하나요? 예: 웹 검색 → 요약 정리 → 문서 저장까지 자동으로 실행하는 AI",
        options: ["관리자봇", "조종기", "옵서버", "에이전트", "챗터봇"],
        correct: 3,
        explanation: "에이전트(AI Agent)는 목표를 설정하고, 여러 단계를 자동으로 수행할 수 있는 자율형 AI입니다. 예를 들어 웹 검색 후 요약 정리하고, 그 결과를 문서로 저장하는 등의 복합 작업이 가능합니다. 대표적으로 AutoGPT, Devin 등이 있습니다."
    },
    {
        question: "AI 모델이 외부 지식이나 맥락 정보를 효율적으로 활용할 수 있도록 돕는 기술적 구조로, 모델이 주어진 문맥(Context)을 인식하고 처리하기 위한 프로토콜 체계를 의미합니다. AI 에이전트, RAG, LLM 등에 연동되어 사용되며, 확장 가능한 메모리 및 상호작용을 가능하게 하는 이 구조의 명칭은 무엇일까요?",
        options: ["MTP", "MCP", "MUX", "MMM", "MXP"],
        correct: 1,
        explanation: "MCP는 Model Context Protocol의 약자로, AI 모델이 사용자 맥락, 외부 도구, 기억 정보 등 다양한 요소를 통합하여 인식하고 반응할 수 있도록 해주는 프로토콜입니다. 특히 멀티턴 대화, 외부 지식 연동, 기억 기반 응답 등에 사용되며, 에이전트형 AI 및 멀티모달 환경에서도 필수적으로 활용되는 기술입니다. 최근 OpenAI, Anthropic 등 주요 AI 기업에서 채택하고 있는 방식입니다."
    },
    {
        question: "특정 국가나 기업이 외부 플랫폼 의존 없이 독자적으로 개발·운영하는 AI를 부르는 용어는? 디지털 주권과 기술 독립성을 목표로 합니다.",
        options: ["국산AI", "민족AI", "내셔널GPT", "소버린AI", "울버린AI"],
        correct: 3,
        explanation: "소버린AI는 국가나 기업이 외부 기술에 의존하지 않고 독립적으로 개발·운영하는 AI를 의미합니다. 데이터 주권, 보안, 기술 독립성을 중요시하는 전략이며, 프랑스의 Mistral AI 등이 예시입니다."
    },
    {
        question: "AI가 답을 만들기 전에 외부 문서를 먼저 검색한 뒤, 그 결과를 기반으로 응답을 생성하는 기술의 명칭은 무엇일까요?",
        options: ["GRA", "RAG", "RAGe", "AIG", "AI-Fetch"],
        correct: 1,
        explanation: "RAG는 'Retrieval-Augmented Generation'의 약어로, AI가 외부 문서나 지식을 먼저 검색한 후, 그 정보를 바탕으로 응답을 생성하는 방식입니다. 정확성과 최신성을 확보하기 위해 활용됩니다."
    }
];

// 게임 상태 변수
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timeLeft = 60;
let timer;
let shuffledQuestions = [];

// DOM 요소들
const screens = {
    intro: document.getElementById('intro-screen'),
    instruction: document.getElementById('instruction-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    answers: document.getElementById('answers-screen')
};

const elements = {
    startExamBtn: document.getElementById('start-exam-btn'),
    beginQuizBtn: document.getElementById('begin-quiz-btn'),
    questionNumber: document.getElementById('question-number'),
    timer: document.getElementById('timer'),
    progress: document.getElementById('progress'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    nextQuestionBtn: document.getElementById('next-question-btn'),
    finalScore: document.getElementById('final-score'),
    resultMessage: document.getElementById('result-message'),
    correctCount: document.getElementById('correct-count'),
    wrongCount: document.getElementById('wrong-count'),
    viewAnswersBtn: document.getElementById('view-answers-btn'),
    retryBtn: document.getElementById('retry-btn'),
    answersContainer: document.getElementById('answers-container'),
    backToResultBtn: document.getElementById('back-to-result-btn'),
    restartBtn: document.getElementById('restart-btn'),
    fireworksContainer: document.getElementById('fireworks-container')
};

// 복사 방지 기능
function preventCopy() {
    // 마우스 우클릭 방지
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // 키보드 단축키 방지
    document.addEventListener('keydown', function(e) {
        // Ctrl+C, Ctrl+A, Ctrl+V, Ctrl+S, Ctrl+P, F12, Ctrl+U, Ctrl+Shift+I 방지
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 65 || e.keyCode === 86 || e.keyCode === 83 || e.keyCode === 80 || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
        // F12, Ctrl+Shift+I (개발자 도구) 방지
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }
    });

    // 드래그 방지
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    // 이미지 드래그 방지
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
}

// 화면 전환 함수
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// 폭죽 효과 생성
function createFireworks() {
    const colors = ['red', 'blue', 'yellow', 'purple', 'green', 'orange'];
    const fireworksContainer = elements.fireworksContainer;
    
    // 이전 폭죽 제거
    fireworksContainer.innerHTML = '';
    
    // 여러 위치에서 폭죽 생성
    const positions = [
        { x: '20%', y: '30%' },
        { x: '80%', y: '25%' },
        { x: '15%', y: '60%' },
        { x: '85%', y: '55%' },
        { x: '50%', y: '20%' },
        { x: '30%', y: '70%' },
        { x: '70%', y: '65%' }
    ];
    
    positions.forEach((position, index) => {
        setTimeout(() => {
            createSingleFirework(position.x, position.y);
        }, index * 200); // 각 폭죽을 0.2초씩 지연
    });
}

function createSingleFirework(centerX, centerY) {
    const colors = ['red', 'blue', 'yellow', 'purple', 'green', 'orange'];
    const particleCount = 15; // 각 폭죽당 파티클 수
    
    for (let i = 0; i < particleCount; i++) {
        const firework = document.createElement('div');
        firework.className = `firework ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        // 랜덤한 방향으로 퍼지도록 설정
        const angle = (360 / particleCount) * i + Math.random() * 30;
        const distance = 100 + Math.random() * 150; // 100-250px 거리
        
        const radians = (angle * Math.PI) / 180;
        const deltaX = Math.cos(radians) * distance;
        const deltaY = Math.sin(radians) * distance;
        
        // CSS 변수로 최종 위치 설정
        firework.style.setProperty('--x', `${deltaX}px`);
        firework.style.setProperty('--y', `${deltaY}px`);
        firework.style.left = centerX;
        firework.style.top = centerY;
        
        elements.fireworksContainer.appendChild(firework);
        
        // 애니메이션 시작
        setTimeout(() => {
            firework.classList.add('animate');
        }, 10);
        
        // 애니메이션 완료 후 제거
        setTimeout(() => {
            if (firework.parentNode) {
                firework.parentNode.removeChild(firework);
            }
        }, 1500);
    }
}

// 퀴즈 데이터 랜덤 섞기
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 선택지 랜덤 섞기
function shuffleOptions(question) {
    const optionsWithIndex = question.options.map((option, index) => ({
        text: option,
        originalIndex: index
    }));
    
    const shuffledOptions = shuffleArray(optionsWithIndex);
    const newCorrectIndex = shuffledOptions.findIndex(option => option.originalIndex === question.correct);
    
    return {
        ...question,
        options: shuffledOptions.map(option => option.text),
        correct: newCorrectIndex
    };
}

// 퀴즈 초기화
function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // 애니메이션 클래스 제거
    elements.finalScore.classList.remove('animate');
    elements.finalScore.textContent = '0';
    elements.resultMessage.style.opacity = '';
    elements.resultMessage.style.transform = '';
    elements.resultMessage.style.transition = '';
    
    // 폭죽 효과 정리
    elements.fireworksContainer.innerHTML = '';
    
    // 문제 순서와 선택지 모두 랜덤 섞기
    shuffledQuestions = shuffleArray(quizData).map(question => shuffleOptions(question));
}

// 타이머 시작
function startTimer() {
    timeLeft = 60;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// 타이머 표시 업데이트
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    elements.timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // 시간이 10초 이하일 때 빨간색으로 강조
    if (timeLeft <= 10) {
        elements.timer.style.color = '#e74c3c';
        elements.timer.style.fontWeight = 'bold';
    } else {
        elements.timer.style.color = '#e74c3c';
        elements.timer.style.fontWeight = 'bold';
    }
}

// 진행률 업데이트
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    elements.progress.style.width = `${progress}%`;
    elements.questionNumber.textContent = `${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
}

// 문제 표시
function displayQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    elements.questionText.textContent = question.question;
    elements.optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionElement.style.pointerEvents = 'auto'; // 클릭 가능하도록 설정
        optionElement.addEventListener('click', () => selectOption(index));
        elements.optionsContainer.appendChild(optionElement);
    });
    
    updateProgress();
    startTimer();
    elements.nextQuestionBtn.disabled = true;
}

// 선택지 선택
function selectOption(selectedIndex) {
    const options = document.querySelectorAll('.option');
    
    // 이전 선택 초기화
    options.forEach(option => {
        option.classList.remove('selected');
    });
    
    // 새로운 선택 표시
    options[selectedIndex].classList.add('selected');
    
    // 사용자 답 저장
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    elements.nextQuestionBtn.disabled = false;
}

// 다음 문제
function nextQuestion() {
    if (timer) {
        clearInterval(timer);
    }
    
    const question = shuffledQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    // 답을 선택하지 않은 경우 -1로 저장
    if (userAnswer === undefined) {
        userAnswers[currentQuestionIndex] = -1;
    }
    
    // 점수 계산 (정답 표시 없이)
    if (userAnswer === question.correct) {
        score += 10;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < shuffledQuestions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// 결과 표시
function showResult() {
    const correctAnswers = userAnswers.filter((answer, index) => answer === shuffledQuestions[index].correct).length;
    const wrongAnswers = shuffledQuestions.length - correctAnswers;
    
    // 화면 전환
    showScreen('result');
    
    // 점수 애니메이션 효과
    setTimeout(() => {
        elements.finalScore.classList.add('animate');
        elements.finalScore.textContent = score;
        
        // 폭죽 효과 시작
        setTimeout(() => {
            createFireworks();
        }, 500);
        
        // 카운팅 애니메이션 (0부터 실제 점수까지)
        let currentScore = 0;
        const scoreInterval = setInterval(() => {
            currentScore += Math.ceil(score / 20); // 20단계로 나누어 카운팅
            if (currentScore >= score) {
                currentScore = score;
                clearInterval(scoreInterval);
            }
            elements.finalScore.textContent = currentScore;
        }, 50);
        
    }, 300);
    
    // 통계 정보 표시
    setTimeout(() => {
        elements.correctCount.textContent = correctAnswers;
        elements.wrongCount.textContent = wrongAnswers;
    }, 1500);
    
    // 점수별 메시지 표시
    setTimeout(() => {
        let message = '';
        if (score === 100) {
            message = '장원급제! 디커의 자랑, AI 지식왕 탄생!\n\n당신이 바로 디지털커머스사업부의 미래입니다.\n이 영광, 모두가 봤으면 좋겠네요!';
        } else if (score >= 90) {
            message = 'AI 상위 1%! 디커 대표 뇌섹남·녀 인정!\n\n부서를 빛내는 당신의 실력에 박수를 보냅니다.\n디커의 AI는 당신이죠!';
        } else if (score >= 70) {
            message = '뇌를 잘 쓰는 당신, 디커 AI 마스터 입문 완료!\n\n이 정도면 업무 할 때 GPT보다 당신을 더 믿을 수 있겠어요.\n계속 함께 성장해요!';
        } else if (score >= 50) {
            message = '가능성 충만한 디커 인재!\n\n아직 배울 게 많지만, 성장 속도는 남다릅니다.\n우리 부서의 핵심 자산이 될 거예요!';
        } else {
            message = '검색 없이 도전한 용기, 디커 정신 그 자체!\n\n결과보다 값진 건 도전입니다.\n다음 번엔 더 강해진 모습으로 돌아오세요.\n부서에서 응원합니다!';
        }
        
        elements.resultMessage.innerHTML = message.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
        elements.resultMessage.style.opacity = '0';
        elements.resultMessage.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            elements.resultMessage.style.transition = 'all 0.8s ease';
            elements.resultMessage.style.opacity = '1';
            elements.resultMessage.style.transform = 'translateY(0)';
        }, 100);
        
    }, 2500);
}

// 정답 및 해설 표시
function showAnswers() {
    elements.answersContainer.innerHTML = '';
    
    shuffledQuestions.forEach((question, index) => {
        const answerItem = document.createElement('div');
        answerItem.className = 'answer-item';
        
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        const userAnswerText = userAnswer === -1 ? '미응답' : question.options[userAnswer];
        
        answerItem.innerHTML = `
            <div class="answer-question">${index + 1}번 문제</div>
            <div class="answer-correct">정답: ${question.options[question.correct]}</div>
            <div style="color: ${isCorrect ? '#27ae60' : '#e74c3c'}; font-weight: 600; margin-bottom: 1rem;">
                당신의 답: ${userAnswerText} ${isCorrect ? '✅' : '❌'}
            </div>
            <div class="answer-explanation">${question.explanation}</div>
        `;
        
        elements.answersContainer.appendChild(answerItem);
    });
    
    showScreen('answers');
}

// 게임 재시작
function restartGame() {
    initializeQuiz();
    showScreen('intro');
}

// 이벤트 리스너 등록
function setupEventListeners() {
    elements.startExamBtn.addEventListener('click', () => showScreen('instruction'));
    elements.beginQuizBtn.addEventListener('click', () => {
        initializeQuiz();
        showScreen('quiz');
        displayQuestion();
    });
    elements.nextQuestionBtn.addEventListener('click', nextQuestion);
    elements.viewAnswersBtn.addEventListener('click', showAnswers);
    elements.retryBtn.addEventListener('click', restartGame);
    elements.backToResultBtn.addEventListener('click', () => showScreen('result'));
    elements.restartBtn.addEventListener('click', restartGame);
}

// 별똥별 파티클 시스템
function createMeteorParticle() {
    const meteorContainer = elements.fireworksContainer.parentElement.querySelector('.meteor-layer-1');
    
    // 시작 위치와 궤적 - 왼쪽에서 오른쪽으로 45도 각도
    const startX = -50 - Math.random() * 100; // 화면 왼쪽 외부에서 시작
    const startY = Math.random() * (window.innerHeight / 2); // 상단 절반에서 시작
    const distance = Math.max(window.innerWidth, window.innerHeight) + 200;
    const endX = startX + distance; // 45도 각도로 이동
    const endY = startY + distance; // 대각선으로 이동
    const speed = 4 + Math.random() * 4; // 4-8초 사이 (이전 속도로 복원)
    const tailLength = 1; // 입자 1개만
    
    // 메인 파티클 생성
    const particle = document.createElement('div');
    particle.className = 'meteor-particle';
    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    
    // 커스텀 애니메이션 적용
    particle.style.animation = `none`;
    particle.style.opacity = '0';
    
    meteorContainer.appendChild(particle);
    
    // 꼬리 파티클들 생성 (1개만)
    const tailParticles = [];
    for (let i = 0; i < tailLength; i++) {
        const tail = document.createElement('div');
        tail.className = 'meteor-tail';
        
        // 꼬리 위치 (메인 파티클 뒤쪽으로, 45도 각도 고려)
        const offsetX = -(i * 12); // 뒤쪽으로
        const offsetY = -(i * 12); // 위쪽으로 (45도 각도)
        
        tail.style.left = (startX + offsetX) + 'px';
        tail.style.top = (startY + offsetY) + 'px';
        tail.style.opacity = Math.max(0.1, 1 - i * 0.15);
        tail.style.animation = `none`;
        
        meteorContainer.appendChild(tail);
        tailParticles.push(tail);
    }
    
    // 애니메이션 시작
    let startTime = null;
    
    function animateMeteor(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;
        const progress = Math.min(elapsed / speed, 1);
        
        if (progress < 1) {
            // 메인 파티클 이동
            const currentX = startX + (endX - startX) * progress;
            const currentY = startY + (endY - startY) * progress;
            
            if (particle.parentNode) {
                particle.style.left = currentX + 'px';
                particle.style.top = currentY + 'px';
                particle.style.opacity = progress < 0.1 ? progress * 10 : 
                                       progress > 0.9 ? (1 - progress) * 10 : 1;
            }
            
            // 꼬리 파티클들 이동 (45도 각도 유지)
            tailParticles.forEach((tail, i) => {
                if (tail.parentNode) {
                    const tailProgress = Math.max(0, progress - i * 0.02);
                    const tailX = startX + (endX - startX) * tailProgress - (i * 12);
                    const tailY = startY + (endY - startY) * tailProgress - (i * 12);
                    
                    tail.style.left = tailX + 'px';
                    tail.style.top = tailY + 'px';
                    tail.style.opacity = tailProgress > 0 ? 
                        Math.max(0.1, (1 - i * 0.15) * (tailProgress < 0.1 ? tailProgress * 10 : 
                        tailProgress > 0.9 ? (1 - tailProgress) * 10 : 1)) : 0;
                }
            });
            
            requestAnimationFrame(animateMeteor);
        } else {
            // 애니메이션 완료 - 파티클들 제거
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
            tailParticles.forEach(tail => {
                if (tail.parentNode) {
                    tail.parentNode.removeChild(tail);
                }
            });
        }
    }
    
    requestAnimationFrame(animateMeteor);
}

// 별똥별 생성 시작
function startMeteorShower() {
    function scheduleNextMeteor() {
        const delay = 4000 + Math.random() * 3500; // 4-7.5초 랜덤 간격 (2배 더 빈번)
        setTimeout(() => {
            createMeteorParticle();
            scheduleNextMeteor(); // 다음 별똥별 예약
        }, delay);
    }
    
    // 첫 번째 별똥별을 3초 후에 생성 (더 빨리 시작)
    setTimeout(() => {
        createMeteorParticle();
        scheduleNextMeteor(); // 연속 생성 시작
    }, 3000);
}

// 초기화
function init() {
    preventCopy();
    setupEventListeners();
    showScreen('intro');
    startMeteorShower(); // 별똥별 시스템 시작
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);