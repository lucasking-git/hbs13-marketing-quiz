const PASSWORD = 'HBS13';

const QUESTIONS = [
  // ── OX 문제 (1~15) ──────────────────────────────────────────────────────────
  {
    id: 1, type: 'ox',
    text: 'B2B에서는 수요가 주로 개인 소비자에서 나온다.',
    answer: 'X',
    explanation: 'B2B 수요는 기업(조직)에서 발생합니다. 개인 소비자의 수요는 B2C의 특성이며, B2B는 조직 차원에서 집단적·기능적 필요에 의해 구매가 이루어집니다.'
  },
  {
    id: 2, type: 'ox',
    text: '비투비(B2B)마케팅에서는 고객을 \'클라이언트\'라고 부르며, 이는 서비스나 제품을 제공받는 비즈니스를 의미한다.',
    answer: 'O',
    explanation: '클라이언트(Client)는 주로 B2B·서비스 산업에서 고객을 지칭할 때 사용하는 용어이며, 법률·컨설팅 등의 분야에서 고객을 클라이언트라 부릅니다.'
  },
  {
    id: 3, type: 'ox',
    text: '유저(User)는 구매자를 지칭하는 용어이다.',
    answer: 'X',
    explanation: '\'유저(User)\'는 제품·서비스를 실제 사용하는 사람을 지칭하는 용어입니다. 구매자(Buyer)와는 다른 개념이며, Buying Center에서 User는 사용자 역할을 담당합니다.'
  },
  {
    id: 4, type: 'ox',
    text: 'B2B에서는 고객의 고통 포인트(Pain Point)를 파악하지 않고도 성공적인 비즈니스를 운영할 수 있다.',
    answer: 'X',
    explanation: '비즈니스의 성공은 고객의 Pain Point(고통)를 정확히 파악하는 것에서 시작합니다. Pain Point를 모르면 적절한 솔루션 제공이 불가능하며 판매 실패로 이어집니다.'
  },
  {
    id: 5, type: 'ox',
    text: '비투비 마케팅에서는 가격 결정 시 운영 비용을 고려하지 않아도 된다.',
    answer: 'X',
    explanation: 'B2B에서 가격 결정 시 운영 비용을 포함한 TCO(총 유지 비용) 관점으로 접근해야 합니다. 구매 가격만이 아닌 유지비·보수·운영 비용까지 포함한 합리적 판단이 필요합니다.'
  },
  {
    id: 6, type: 'ox',
    text: 'B2B 영업에서 영업사원의 연봉 외에도 다양한 추가 비용이 발생한다.',
    answer: 'O',
    explanation: '영업사원 비용 외에도 출장비, 교통비, 접대비, 지원비 등 다양한 추가 비용이 발생합니다. 실제 영업 비용은 연봉의 약 2배로 계산하는 것이 일반적입니다.'
  },
  {
    id: 7, type: 'ox',
    text: 'B2B 거래는 기업 간의 거래를 의미한다.',
    answer: 'O',
    explanation: 'B2B = Business to Business: 기업과 기업 간의 거래를 의미합니다. B2C는 기업-소비자, B2G는 기업-정부 간 거래입니다.'
  },
  {
    id: 8, type: 'ox',
    text: '비투비 마케팅 프로세스를 \'깔때기\'라고 비유하는 것은, 마케팅 활동이 점점 더 구체적인 타겟에 집중되는 과정을 나타내기 위해서이다.',
    answer: 'O',
    explanation: '마케팅 활동이 넓은 범위에서 시작하여 점점 더 구체적인 타겟에 집중되는 과정을 깔때기(Funnel)에 비유합니다.'
  },
  {
    id: 9, type: 'ox',
    text: 'B2B 마케팅에서는 구매 프로세스가 고객의 문제 인식으로 시작되지 않는다.',
    answer: 'X',
    explanation: 'B2B 구매 프로세스는 반드시 \'문제 인식\'으로 시작됩니다. 고객이 문제를 인식해야 필요성이 생기고, 이후 솔루션 탐색·제안이 시작됩니다.'
  },
  {
    id: 10, type: 'ox',
    text: '비투비 마케팅의 구매 프로세스에서 제품 스펙 확장은 문제 인식 후 바로 이루어지는 단계이다.',
    answer: 'X',
    explanation: 'B2B 구매 프로세스: 1단계 문제 인식 → 2단계 필요성 설명 → 3단계 제품 스펙 확장. 제품 스펙 확장은 3단계로, 문제 인식 바로 다음 단계가 아닙니다.'
  },
  {
    id: 11, type: 'ox',
    text: 'STP 전략에서 타겟(T)은 시장 내에서 특정 고객 그룹을 목표로 하는 것을 의미한다.',
    answer: 'O',
    explanation: 'STP의 T = Targeting(표적화)은 세분화된 시장 중 자사에 매력적인 세그먼트를 선택하여 마케팅 목표로 삼는 것을 말합니다.'
  },
  {
    id: 12, type: 'ox',
    text: '기계 구매 결정 시, 초기 구매가격보다 유지 비용이 더 중요할 수 있다.',
    answer: 'O',
    explanation: '기계 구매 시 TCO(Total Cost of Ownership) 관점을 적용해야 합니다. 초기 구매 가격 외에도 장기 운영·유지·수리 비용이 더 크게 작용할 수 있습니다.'
  },
  {
    id: 13, type: 'ox',
    text: 'B2B 고객은 주로 제품의 품질에만 관심이 있다.',
    answer: 'X',
    explanation: 'B2B에서 고객의 관심사는 제품 품질뿐만 아니라 납기, 가격, 기술 지원, 레퍼런스, 공급 안정성 등 복합적 요소를 중요하게 여깁니다.'
  },
  {
    id: 14, type: 'ox',
    text: '비투비 마케팅에서 가격 할인만이 고객을 유지하는 유일한 방법이다.',
    answer: 'X',
    explanation: 'B2B에서 고객 유지 방법은 가격 할인 외에도 기술 지원, 신뢰 구축, 맞춤형 솔루션 제공, 장기 파트너십 등 다양한 방법이 있습니다.'
  },
  {
    id: 15, type: 'ox',
    text: '비투비 마케팅의 가치 제안에서 제품의 우수성과 고객사의 니즈에 맞는 솔루션 제안이 모두 중요하다.',
    answer: 'O',
    explanation: '비투비 마케팅의 가치 제안에서 제품의 우수성 설명과 고객사 니즈·문제를 해결하는 맞춤형 솔루션 제안은 모두 중요한 요소입니다.'
  },

  // ── 객관식 문제 (16~35) ─────────────────────────────────────────────────────
  {
    id: 16, type: 'mc',
    text: 'B2B와 B2C의 첫 번째 차이(근본 원인)로 언급된 것은 무엇인가요?',
    options: ['결제 방식', '수요의 근원', '제품의 종류', '고객 서비스'],
    answer: 1,
    explanation: 'B2B와 B2C의 첫 번째 차이는 \'수요의 근원\'입니다. B2B는 기업의 업무 필요에서 수요가 발생하며, B2C는 개인 소비에서 수요가 발생합니다.'
  },
  {
    id: 17, type: 'mc',
    text: '비투비(B2B) 마케팅에서 가치 제안을 할 때 가장 중요한 것은 무엇인가요?',
    options: ['경쟁사보다 낮은 가격 제시', '제품의 우수성 설명', '고객사의 니즈 파악', '제품 스펙만 강조'],
    answer: 2,
    explanation: 'B2B 가치 제안의 핵심은 고객사의 니즈를 먼저 파악하는 것입니다. 고객이 가진 Pain Point를 해결하는 맞춤형 솔루션을 제시하는 것이 B2B 영업에서 가장 중요합니다.'
  },
  {
    id: 18, type: 'mc',
    text: '비투비 마케팅의 구매 프로세스에서 첫 번째 단계는 무엇인가요?',
    options: ['제품 스펙 확장', '문제 인식', '필요성 설명', '솔루션 구현'],
    answer: 1,
    explanation: 'B2B 구매 프로세스: 1단계 문제 인식 → 2단계 필요성 설명 → 3단계 제품 스펙 확장. 문제 인식이 없으면 구매 프로세스 자체가 시작되지 않습니다.'
  },
  {
    id: 19, type: 'mc',
    text: '비투비 구매 프로세스에서, 문제 인식 후 다음으로 이루어지는 단계는 무엇인가요?',
    options: ['솔루션 구현', '제품 선택', '필요성 설명', '공급자 선정'],
    answer: 2,
    explanation: 'B2B 구매 프로세스 순서: 문제 인식 → 필요성 설명(요구사항 정의) → 제품 스펙 확장 → 공급자 선정. 문제 인식 직후는 필요성 설명 단계입니다.'
  },
  {
    id: 20, type: 'mc',
    text: '서비스업에서 고객을 지칭할 때 주로 사용하는 용어는 무엇인가요?',
    options: ['컨슈머', '유저', '클라이언트', '커스터머'],
    answer: 2,
    explanation: '서비스업(법률·컨설팅·광고 등)에서 고객을 \'클라이언트(Client)\'라 지칭합니다. 전문직 서비스 관계에서 고객과의 관계를 강조하는 용어입니다.'
  },
  {
    id: 21, type: 'mc',
    text: '비투비(B2B) 마케팅에서 고객을 지칭할 때 주로 사용하는 용어는 무엇인가요?',
    options: ['커스터머', '클라이언트', '컨슈머', '유저'],
    answer: 1,
    explanation: 'B2B 마케팅에서 고객은 \'클라이언트(Client)\'라 지칭합니다. 장기적 파트너십과 계약 관계를 강조하는 용어입니다.'
  },
  {
    id: 22, type: 'mc',
    text: '비투비(B2B), 비투씨(B2C), 비투지(B2G)에서 공통적으로 사용되는 고객 지칭 용어는 무엇인가요?',
    options: ['컨슈머', '클라이언트', '커스터머', '유저'],
    answer: 2,
    explanation: '\'커스터머(Customer)\'는 B2B·B2C·B2G 모두에서 공통적으로 사용되는 고객 지칭 용어입니다. 비즈니스 유형과 관계없이 폭넓게 쓰이는 보편적 표현입니다.'
  },
  {
    id: 23, type: 'mc',
    text: '어카운트 매니저(Account Manager)는 주로 어떤 분야에서 사용되는 용어인가요?',
    options: ['위계 관리', '마케팅 기획', 'B2B 영업', '고객 지원'],
    answer: 2,
    explanation: '어카운트 매니저(Account Manager)는 주로 B2B 영업에서 사용되는 용어이며, 특정 고객사(어카운트)와의 비즈니스 관계를 전담 관리하는 역할입니다.'
  },
  {
    id: 24, type: 'mc',
    text: 'B2B 유통의 특징으로 올바르게 설명한 것은 무엇인가요?',
    options: ['간접적이고 단순하다', '직접적이고 복잡하다', '직접적이고 단순하다', '간접적이고 복잡하다'],
    answer: 2,
    explanation: 'B2B 유통은 중간 유통 단계가 적어 직접적이고 단순한 구조를 가집니다. B2C에 비해 더 짧은 유통 채널로 이루어지는 것이 특징입니다.'
  },
  {
    id: 25, type: 'mc',
    text: 'B2B 고객의 주된 고통(페인 포인트)은 무엇인가요?',
    options: ['제품의 가격', '제품의 품질', '공급의 신뢰성', '모든 위의 항목'],
    answer: 3,
    explanation: 'B2B 고객의 Pain Point는 제품 가격, 품질, 공급 신뢰성 등 다양한 측면을 포함합니다. 고가·비신뢰적 공급·품질 문제 등 구매 결정에 영향을 미치는 모든 고통을 해결해야 합니다.'
  },
  {
    id: 26, type: 'mc',
    text: '기계 구매 시 고려해야 할 가장 중요한 요소는 무엇인가요?',
    options: ['구매 가격만', '유지비용 포함 총비용', '구매처의 위치', '제조사의 명성'],
    answer: 1,
    explanation: '기계 구매 시 TCO(Total Cost of Ownership) 관점을 적용합니다. 구매 가격만이 아닌 운영·유지·수리 비용까지 포함하여 평가해야 장기적으로 올바른 결정을 내릴 수 있습니다.'
  },
  {
    id: 27, type: 'mc',
    text: 'B2B 마케팅에서 가장 기본적으로 고려해야 하는 마케팅 믹스 요소는 무엇인가요?',
    options: ['가격', '품질', '서비스', '브랜드 인지도'],
    answer: 0,
    explanation: '비투비 마케팅에서 가격은 가장 기본적으로 고려해야 하는 요소입니다. 가격 결정은 마케팅 전략에서 핵심이며, 고객사에 제공되는 가치와 비용의 균형을 맞추는 것이 필요합니다.'
  },
  {
    id: 28, type: 'mc',
    text: 'B2B 비즈니스에서 고객사에게 제공해야 하는 핵심 요소는 무엇인가요?',
    options: ['경쟁사 정보', '솔루션', '추가 할인', '무료 샘플'],
    answer: 1,
    explanation: 'B2B 비즈니스에서 고객사에게 제공해야 하는 핵심은 고객의 Pain Point를 파악하고 그 근본을 해결하는 맞춤형 솔루션입니다.'
  },
  {
    id: 29, type: 'mc',
    text: 'B2B 시장에서 STP 전략 중 \'S\'가 나타내는 것은 무엇인가요?',
    options: ['성과(Sales)', '솔루션(Solution)', '세그먼테이션(Segmentation)', '시스템(System)'],
    answer: 2,
    explanation: 'STP의 S = Segmentation(시장세분화). 시장을 유사한 특성을 가진 집단으로 나누는 것을 의미합니다. T = Targeting(표적화), P = Positioning(포지셔닝).'
  },
  {
    id: 30, type: 'mc',
    text: 'STP 전략에서 \'P\'가 의미하는 것은 무엇인가요?',
    options: ['프로모션(Promotion)', '포지셔닝(Positioning)', '프로세스(Process)', '프로덕트(Product)'],
    answer: 1,
    explanation: 'STP의 P = Positioning(포지셔닝). 선택된 표적 시장에서 자사 제품·서비스를 경쟁사 대비 독특하고 가치 있는 위치로 설정하는 것을 의미합니다.'
  },
  {
    id: 31, type: 'mc',
    text: 'B2B에서 영업사원 4명의 연봉이 각각 5천만 원일 때, 1년 영업 비용으로 예상되는 금액은?',
    options: ['1억 원', '2억 원', '3억 원', '4억 원'],
    answer: 3,
    explanation: '영업사원 4명 × 연봉 5천만 원 = 2억 원(직접 인건비). 여기에 출장비·복리후생·간접비 등 부대비용이 연봉과 비슷하게 추가되므로 실제 영업 비용은 약 4억 원으로 계산됩니다.'
  },
  {
    id: 32, type: 'mc',
    text: 'B2C, B2B, B2G 중에서 일반 소비자 개개인을 대상으로 하는 것은 무엇인가요?',
    options: ['B2C', 'B2B', 'B2G', '클라이언트'],
    answer: 0,
    explanation: 'B2C = Business to Consumer: 기업이 일반 소비자 개개인을 대상으로 제품·서비스를 판매하는 비즈니스 모델입니다. B2B는 기업 간 거래, B2G는 기업-정부 간 거래입니다.'
  },
  {
    id: 33, type: 'mc',
    text: '비투비 마케팅 프로세스를 설명할 때 흔히 사용되는 비유는 무엇인가요?',
    options: ['산', '바다', '깔때기', '다리'],
    answer: 2,
    explanation: '비투비 마케팅에서는 \'깔때기(Funnel)\'가 마케팅 프로세스를 설명할 때 자주 활용됩니다. 넓은 범위에서 시작하여 점점 더 구체적인 타겟에 집중되는 과정을 나타냅니다.'
  },
  {
    id: 34, type: 'mc',
    text: '비투비 마케팅에서 중요한 역할을 하는 부서/활동은 무엇인가요?',
    options: ['광고와 세일즈', '데이터 분석', '기획과 마케팅', '고객 서비스'],
    answer: 2,
    explanation: 'B2B 마케팅에서는 체계적인 기획과 마케팅 활동이 중요합니다. 고객 가치 제안을 전략적으로 기획하고, 고객-가치-기업을 연결하는 마케팅 활동이 핵심 역할을 담당합니다.'
  },
  {
    id: 35, type: 'mc',
    text: 'OLED 모니터 제품 결정 상황에서, 기존 공급사 LG디스플레이와 신규 경쟁사 BOE의 제안 내용은?',
    options: [
      'LG디스플레이: 개당 5천원 할인, BOE: 개당 활동 지원 제안',
      'LG디스플레이: 개당 활동 지원 제안, BOE: 개당 5천원 할인',
      'LG디스플레이: 개당 1만원 할인, BOE: 개당 5천원 할인',
      'LG디스플레이: 개당 5천원 할인, BOE: 개당 1만원 할인'
    ],
    answer: 0,
    explanation: '기존 공급사 LG디스플레이는 개당 5천원 할인을 제안했고, 신규 경쟁사 BOE는 단순 가격 할인 외 활동 지원(Activity Support)을 제안하여 더 높은 가치를 제시했습니다.'
  }
];

// ── 상태 ──────────────────────────────────────────────────────────────────────
const state = {
  questions: [],
  currentIndex: 0,
  selectedAnswer: null,
  correctCount: 0
};

// ── 유틸 ──────────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── 비밀번호 ─────────────────────────────────────────────────────────────────
function checkPassword() {
  const input = document.getElementById('pw-input').value.trim();
  if (input === PASSWORD) {
    showScreen('screen-start');
  } else {
    const err = document.getElementById('pw-error');
    err.textContent = '비밀번호가 올바르지 않습니다.';
    err.style.display = 'block';
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-input').focus();
  }
}

// ── 퀴즈 초기화 ───────────────────────────────────────────────────────────────
function init() {
  state.questions = shuffle(QUESTIONS);
  state.currentIndex = 0;
  state.selectedAnswer = null;
  state.correctCount = 0;
  showScreen('screen-quiz');
  renderQuestion();
}

// ── 문제 렌더링 ───────────────────────────────────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const num = state.currentIndex + 1;
  const total = state.questions.length;

  document.getElementById('q-current').textContent = num;
  document.getElementById('q-total').textContent = total;
  document.getElementById('progress-bar').style.width = `${(num / total) * 100}%`;
  document.getElementById('q-type-badge').textContent = q.type === 'ox' ? 'OX형' : '객관식';
  document.getElementById('q-number-label').textContent = `문제 ${num}`;
  document.getElementById('q-text').textContent = q.text;

  const oxArea = document.getElementById('answer-ox');
  const mcArea = document.getElementById('answer-mc');

  if (q.type === 'ox') {
    oxArea.style.display = 'grid';
    mcArea.style.display = 'none';
    document.querySelectorAll('.ox-btn').forEach(b => b.classList.remove('selected'));
  } else {
    oxArea.style.display = 'none';
    mcArea.style.display = 'flex';
    document.querySelectorAll('.mc-btn').forEach((btn, i) => {
      btn.querySelector('.mc-text').textContent = q.options[i];
      btn.classList.remove('selected');
    });
  }

  state.selectedAnswer = null;
  document.getElementById('btn-submit').disabled = true;
}

// ── 답안 선택 ─────────────────────────────────────────────────────────────────
function selectOX(value) {
  state.selectedAnswer = value;
  document.querySelectorAll('.ox-btn').forEach(b =>
    b.classList.toggle('selected', b.dataset.value === value)
  );
  document.getElementById('btn-submit').disabled = false;
}

function selectMC(index) {
  state.selectedAnswer = index;
  document.querySelectorAll('.mc-btn').forEach((b, i) =>
    b.classList.toggle('selected', i === index)
  );
  document.getElementById('btn-submit').disabled = false;
}

// ── 제출 ─────────────────────────────────────────────────────────────────────
function submitAnswer() {
  const q = state.questions[state.currentIndex];
  const isCorrect = state.selectedAnswer === q.answer;
  if (isCorrect) state.correctCount++;
  showFeedbackModal(isCorrect, q);
}

// ── 모달 ─────────────────────────────────────────────────────────────────────
function showFeedbackModal(isCorrect, q) {
  const overlay = document.getElementById('modal-overlay');
  const box = document.getElementById('modal-box');
  const isLast = state.currentIndex === state.questions.length - 1;

  box.className = 'modal-box ' + (isCorrect ? 'correct' : 'wrong');
  document.getElementById('modal-verdict').textContent = isCorrect ? '정답입니다!' : '오답입니다';
  document.getElementById('modal-emoji').textContent = isCorrect ? '🎉' : '😢';

  const expDiv = document.getElementById('modal-explanation');
  if (!isCorrect) {
    expDiv.style.display = 'block';
    let correctLabel;
    if (q.type === 'ox') {
      correctLabel = q.answer;
    } else {
      const nums = ['①', '②', '③', '④'];
      correctLabel = `${nums[q.answer]} ${q.options[q.answer]}`;
    }
    document.getElementById('modal-correct-answer').textContent = correctLabel;
    document.getElementById('modal-exp-text').textContent = q.explanation;
  } else {
    expDiv.style.display = 'none';
  }

  document.getElementById('btn-next').textContent = isLast ? '결과 보기' : '다음 문제 →';
  overlay.classList.add('visible');
}

function closeModalAndNext() {
  document.getElementById('modal-overlay').classList.remove('visible');
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    renderQuestion();
  } else {
    showResultScreen();
  }
}

// ── 결과 화면 ─────────────────────────────────────────────────────────────────
function showResultScreen() {
  const score = Math.round((state.correctCount / QUESTIONS.length) * 100);
  const grade =
    score >= 90 ? '우수 ⭐' :
    score >= 70 ? '양호 👍' :
    score >= 50 ? '보통 📚' : '미흡 💪';

  document.getElementById('result-score').textContent = `${score}점`;
  document.getElementById('result-grade').textContent = grade;
  document.getElementById('stat-correct').textContent = state.correctCount;
  document.getElementById('stat-wrong').textContent = QUESTIONS.length - state.correctCount;
  document.getElementById('result-emoji').textContent = score >= 70 ? '🏆' : '📝';

  showScreen('screen-result');
}

// ── 이벤트 바인딩 ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // 비밀번호
  document.getElementById('btn-pw').addEventListener('click', checkPassword);
  document.getElementById('pw-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkPassword();
  });

  // 시작 / 재시작
  document.getElementById('btn-start').addEventListener('click', init);
  document.getElementById('btn-retry').addEventListener('click', init);

  // 제출 / 다음
  document.getElementById('btn-submit').addEventListener('click', submitAnswer);
  document.getElementById('btn-next').addEventListener('click', closeModalAndNext);

  // OX 버튼
  document.querySelectorAll('.ox-btn').forEach(btn => {
    btn.addEventListener('click', () => selectOX(btn.dataset.value));
  });

  // 객관식 버튼
  document.querySelectorAll('.mc-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => selectMC(i));
  });
});
