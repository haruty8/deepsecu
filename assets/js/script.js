<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="naver-site-verification" content="3c5bd4193cb7968bf94887206303c40dadd91c03" />
    <meta name="description" content="딥시큐(DeepSecu)는 공공기관·유관기관의 정보화 기획, 정보시스템 구축 PMO, 현황진단 및 중장기 개선방안 수립, 개인정보보호·정보보안 관리체계 컨설팅을 지원하는 실무형 IT 전문 자문기업입니다.">
    <title>딥시큐 DeepSecu | 공공 IT 전문 자문 · PMO · 정보화 진단 · 정보보호 컨설팅</title>

    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght=400;500;600;700;800&family=Bebas+Neue&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        /* [가독성 & 실무형 UI 고도화 스타일 가이드] */
        .keep-all { word-break: keep-all; }
        .biz-sub-title { font-size: 1.35rem; font-weight: 800; color: #1e6fcf; margin: 38px 0 16px; display: flex; align-items: center; gap: 8px; word-break: keep-all; }
        
        /* 격자 레이아웃 정돈 */
        .grid-3-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 25px 0; }
        .grid-2-col { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin: 25px 0; }
        
        /* 실무 컨설팅 스타일 카드 */
        .info-status-box { background: #ffffff; border: 1px solid var(--border); border-radius: 12px; padding: 25px; box-shadow: 0 6px 20px rgba(0,0,0,0.02); transition: transform 0.3s ease; }
        .info-status-box:hover { transform: translateY(-3px); }
        .info-status-title { font-size: 1.15rem; font-weight: 800; color: var(--text-main); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; word-break: keep-all; }
        .info-status-list { list-style: none; padding: 0; margin: 0; }
        .info-status-list li { font-size: 0.93rem; color: var(--text-muted); padding: 7px 0 7px 15px; position: relative; border-bottom: 1px dashed #f0f0f0; line-height: 1.55; word-break: keep-all; }
        .info-status-list li:last-child { border-bottom: none; }
        .info-status-list li::before { content: "•"; color: #1e6fcf; position: absolute; left: 0; font-weight: bold; }

        /* 실무 체크리스트 및 프로세스형 리스트 */
        .biz-list-modern { list-style: none; padding: 0; margin: 0; width: 100%; }
        .biz-list-modern li { display: flex; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid #f0f2f5; line-height: 1.6; }
        .biz-list-modern li:last-child { border-bottom: none; }
        .biz-list-modern .list-keyword { width: 195px; font-weight: 800; color: #1e6fcf; font-size: 0.95rem; flex-shrink: 0; padding-right: 15px; box-sizing: border-box; word-break: keep-all; border-right: 2px solid #e2e8f0; margin-right: 20px; }
        .biz-list-modern .list-desc { flex: 1; color: var(--text-muted); font-size: 0.93rem; word-break: keep-all; }

        /* 보고서용 데이터 표 고도화 */
        .data-table { width: 100%; border-collapse: collapse; margin: 20px 0 30px; font-size: 0.92rem; text-align: left; box-shadow: 0 4px 12px rgba(0,0,0,0.01); border-radius: 8px; overflow: hidden; }
        .data-table th { background: #f8fafc; color: var(--text-main); font-weight: 800; padding: 13px 16px; border: 1px solid var(--border); letter-spacing: -0.3px; }
        .data-table td { padding: 13px 16px; border: 1px solid var(--border); color: var(--text-muted); line-height: 1.6; word-break: keep-all; }
        .data-table tr:nth-child(even) { background: #fdfdfd; }
        
        /* 상태 배지 */
        .badge-red { background: #fef2f2; color: #991b1b; padding: 3px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 700; display: inline-block; }
        .badge-blue { background: #f0f9ff; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 700; display: inline-block; }
        .badge-green { background: #ecfdf5; color: #065f46; padding: 3px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 700; display: inline-block; }
        .badge-yellow { background: #fffbeb; color: #b45309; padding: 3px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 700; display: inline-block; }

        /* 타임라인 스타일 */
        .timeline-container { position: relative; padding-left: 24px; border-left: 3px solid #1e6fcf; margin: 25px 0; }
        .timeline-node { position: relative; margin-bottom: 25px; }
        .timeline-node:last-child { margin-bottom: 0; }
        .timeline-node::before { content: ""; width: 12px; height: 10px; background: #ffffff; border: 3px solid #1e6fcf; border-radius: 50%; position: absolute; left: -33px; top: 6px; }
        .timeline-time { font-size: 0.92rem; font-weight: 800; color: #1e6fcf; margin-bottom: 4px; letter-spacing: 0.3px; }
        .timeline-heading { font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; word-break: keep-all; }
        .timeline-body { font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; word-break: keep-all; }

        /* 제품 요금제 테이블 스타일 */
        .price-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.9rem; background: #ffffff; }
        .price-table th { background: #f1f5f9; color: #334155; font-weight: 700; padding: 12px; border: 1px solid #e2e8f0; text-align: center; }
        .price-table td { padding: 12px; border: 1px solid #e2e8f0; color: #475569; text-align: center; }
        .price-table .txt-left { text-align: left; }
        .price-table .font-bold { font-weight: 700; color: #1e6fcf; }
        .price-table .accent-price { color: #0284c7; font-weight: 800; font-size: 0.95rem; }

        /* 핵심 실무 지표 및 자문 체계 레이아웃 */
        .trust-premium-section { background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); padding: 85px 0; }
        .trust-layout { display: grid; grid-template-columns: 1.1fr 1.3fr; gap: 50px; align-items: start; }
        
        .trust-stats-dashboard { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .stat-premium-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 26px 20px; box-shadow: 0 4px 18px rgba(30, 111, 207, 0.02); transition: all 0.3s ease; display: flex; flex-direction: column; justify-content: space-between; }
        .stat-premium-card:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(30, 111, 207, 0.06); border-color: #1e6fcf; }
        .stat-premium-card.highlight-card { background: linear-gradient(135deg, #1e6fcf 0%, #0f4c92 100%); border: none; }
        .stat-premium-card.highlight-card .stat-p-label, .stat-premium-card.highlight-card .stat-p-num, .stat-premium-card.highlight-card .stat-p-desc { color: #ffffff; }
        .stat-p-label { font-size: 0.95rem; font-weight: 700; color: #64748b; margin-bottom: 8px; }
        .stat-p-num { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 2.1rem; font-weight: 800; color: #1e6fcf; line-height: 1.2; letter-spacing: -0.5px; }
        .stat-p-desc { font-size: 0.82rem; color: #64748b; margin-top: 6px; line-height: 1.4; word-break: keep-all; }
        
        .trust-clients-showcase { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 36px; box-shadow: 0 8px 30px rgba(0,0,0,0.02); }
        .showcase-title { font-size: 1.15rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; }
        .showcase-desc { font-size: 0.92rem; color: var(--text-muted); margin-bottom: 24px; word-break: keep-all; }
        .client-logo-interactive-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        
        .c-logo-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px 10px; text-align: center; cursor: pointer; transition: all 0.25s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; position: relative; }
        .c-logo-item .c-icon { font-size: 1.4rem; }
        .c-logo-item .c-name { font-size: 0.88rem; font-weight: 800; color: #1e6fcf; }
        .c-logo-item .c-dept { font-size: 0.78rem; color: #475569; font-weight: 500; line-height: 1.35; }
        
        .c-logo-item:hover { background: #ffffff; border-color: #1e6fcf; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(30, 111, 207, 0.08); }

        /* 수행실적 및 고객사 그리드 */
        .premium-client-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 10px; }
        .premium-client-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 26px 18px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.01); }
        .premium-client-card:hover { transform: translateY(-3px); border-color: #1e6fcf; box-shadow: 0 10px 20px rgba(30, 111, 207, 0.06); }
        .premium-logo-wrap { width: 100%; height: 48px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; overflow: hidden; }
        .premium-logo-wrap img { max-width: 85%; max-height: 100%; object-fit: contain; }
        .premium-client-card .p-client-name { font-size: 0.95rem; font-weight: 800; color: #1e6fcf; margin-bottom: 4px; }
        .premium-client-card .p-client-type { font-size: 0.8rem; color: #64748b; font-weight: 500; }
        
        @media (max-width: 1024px) {
            .trust-layout { grid-template-columns: 1fr; gap: 35px; }
            .premium-client-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 640px) {
            .trust-stats-dashboard { grid-template-columns: 1fr; }
            .client-logo-interactive-grid { grid-template-columns: repeat(2, 1fr); }
            .premium-client-grid { grid-template-columns: 1fr; gap: 14px; }
            .biz-list-modern li { flex-direction: column; }
            .biz-list-modern .list-keyword { width: 100%; border-right: none; margin-bottom: 6px; padding-right: 0; }
        }
    </style>
</head>
<body>

<canvas id="bg-canvas"></canvas>

<nav>
  <div class="nav-logo" onclick="showPage('home')">
    <svg viewBox="0 0 40 48" fill="none">
      <path d="M20 2L4 10V26C4 34.8 11.2 43.2 20 46C28.8 43.2 36 34.8 36 26V10L20 2Z" fill="#1e6fcf" opacity=".9"/>
      <path d="M20 6L7 13V26C7 33.6 12.8 40.4 20 43C27.2 40.4 33 33.6 33 26V13L20 6Z" fill="#ffffff" opacity=".9"/>
      <path d="M15 24l4 4 7-8" stroke="#1e6fcf" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>Deep<em>Secu</em></span>
  </div>
  <ul class="gnb">
    <li>
      <a href="#" onclick="showPage('company');return false;">회사소개</a>
      <div class="dropdown">
        <a href="#" onclick="showPage('company','about');return false;">회사 소개</a>
        <a href="#" onclick="showPage('company','history');return false;">주요 연혁</a>
      </div>
    </li>
    <li>
      <a href="#" onclick="showPage('business');return false;">사업영역</a>
      <div class="dropdown">
        <a href="#" onclick="showPage('business',0);return false;">정보화 사업 기획 및 발주지원</a>
        <a href="#" onclick="showPage('business',1);return false;">구축사업 PMO 및 기술자문</a>
        <a href="#" onclick="showPage('business',2);return false;">정보화 현황진단 및 중장기 개선</a>
        <a href="#" onclick="showPage('business',3);return false;">개인정보 보호수준평가 대응</a>
        <a href="#" onclick="showPage('business',4);return false;">정보보안 관리체계 및 기술점검</a>
        <a href="#" onclick="showPage('business',5);return false;">실무 교육 및 모의훈련</a>
      </div>
    </li>
    <li>
      <a href="#" onclick="showPage('product');return false;">디지털 서비스</a>
      <div class="dropdown">
        <a href="#" onclick="showPage('product','chatbot');return false;">지능형 AI 챗봇 (RAG 기반 SaaS)</a>
        <a href="#" onclick="showPage('product','viewstory');return false;">대민서비스 문서 바로보기 (VIEWSTORY)</a>
        <a href="#" onclick="showPage('product','mindsat');return false;">악성메일 모의훈련 서비스 (Mind-SAT)</a>
      </div>
    </li>
    <li>
      <a href="#" onclick="showPage('performance');return false;">수행실적</a>
      <div class="dropdown">
        <a href="#" onclick="showPage('performance','records');return false;">주요 수행실적</a>
        <a href="#" onclick="showPage('performance','clients');return false;">주요 고객사</a>
      </div>
    </li>
    <li>
      <a href="#" onclick="showPage('contact');return false;">문의하기</a>
      <div class="dropdown">
        <a href="#" onclick="showPage('contact','form');return false;">자문 문의</a>
        <a href="#" onclick="showPage('contact','location');return false;">오시는 길</a>
      </div>
    </li>
  </ul>
  <div class="nav-right">
    <div class="nav-tel">대표번호 <span>0507-1353-0046</span></div>
    <a class="nav-cta" href="#" onclick="showPage('contact');return false;">전문 자문 상담</a>
  </div>
</nav>

<div class="mobile-quick-bar">
  <a href="#" class="quick-item active" id="m-btn-home" onclick="showPage('home'); return false;">
    <span class="ico">🏠</span><span>홈</span>
  </a>
  <a href="#" class="quick-item" id="m-btn-biz" onclick="showPage('business'); return false;">
    <span class="ico">💼</span><span>사업영역</span>
  </a>
  <a href="#" class="quick-item" id="m-btn-prod" onclick="showPage('product'); return false;">
    <span class="ico">💻</span><span>디지털서비스</span>
  </a>
  <a href="tel:0507-1353-0046" class="quick-item highlight" id="m-btn-contact">
    <span class="ico">📞</span><span>전화상담</span>
  </a>
  <div class="quick-space-holder"></div>
</div>

<div id="page-home" class="page active">
  <div class="hero">
    <div class="hero-grid"></div>
    <div class="hero-content">
      <div class="hero-badge">Public Sector IT & Compliance Partner</div>
      <h1 class="hero-title keep-all" style="line-height: 1.35;">정보화 기획부터 개인정보·정보보안까지,<br><span class="hl">공공기관의 IT 운영체계를 함께 설계합니다</span></h1>
      <p class="hero-sub keep-all" style="max-width: 680px; margin-left: auto; margin-right: auto; line-height: 1.65;">
        정보화 사업 기획과 발주지원, 독립적인 구축사업 PMO, 전산 인프라 및 운영체계 현황진단부터<br>
        개인정보 보호수준평가와 정보보안 관리체계 점검까지 실무 중심의 전문 자문을 제공합니다.
      </p>
      <div class="hero-btns">
        <a class="btn-p" href="#" onclick="showPage('business');return false;">핵심 자문분야 보기</a>
        <a class="btn-o" href="#" onclick="showPage('contact');return false;">자문 및 진단 상담</a>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat-item"><div class="stat-num">20+</div><div class="stat-label">핵심 전문가 실무 경력(년)</div></div>
      <div class="stat-item"><div class="stat-num">Public</div><div class="stat-label">공공 IT·정보보호 특화</div></div>
    </div>
  </div>

  <section class="sec section home-services">
    <div class="inner">
      <div style="text-align:center; max-width:680px; margin:0 auto 40px;" class="keep-all">
        <p class="sec-label">Our Core Services</p>
        <h2 class="sec-title">공공기관 정보화 및 정보보호 핵심 자문</h2>
        <p class="sec-desc" style="margin:0 auto;">발주기관의 관점에서 정보시스템 구축과 운영 전 과정을 진단하고, 관련 법령과 평가지침에 부합하는 체계적인 가이드를 제공합니다.</p>
      </div>
      
      <div class="svc-grid">
        <div class="card svc-card bg-01">
          <div class="svc-num">01</div>
          <h3 class="svc-title keep-all">정보화 사업 기획 및 발주지원</h3>
          <p class="svc-desc keep-all">사업기획, 사용자 요구사항 분석, 제안요청서(RFP) 및 과업지시서 검토, 기능점수(FP) 기반 개발원가 산정과 기술규격 타당성 검토를 지원합니다.</p>
          <div class="svc-tags"><span class="tag">RFP·과업지시서</span><span class="tag">소프트웨어 대가산정</span></div>
          <button class="svc-more" onclick="showPage('business',0)">자세히 보기 →</button>
        </div>

        <div class="card svc-card bg-02">
          <div class="svc-num">02</div>
          <h3 class="svc-title keep-all">홈페이지·정보시스템 구축 PMO</h3>
          <p class="svc-desc keep-all">발주기관을 대행하여 사업수행사의 공정 및 일정, 요구사항 추적, 단계별 산출물 품질, 보안 가이드라인 준수 여부 및 검수·인수인계를 총괄 관리합니다.</p>
          <div class="svc-tags"><span class="tag">발주기관 자문</span><span class="tag">품질·검수 관리</span></div>
          <button class="svc-more" onclick="showPage('business',1)">자세히 보기 →</button>
        </div>

        <div class="card svc-card bg-03">
          <div class="svc-num">03</div>
          <h3 class="svc-title keep-all">정보화 현황진단 및 중장기 로드맵</h3>
          <p class="svc-desc keep-all">서버·네트워크 인프라, ERP, 전자결재, 홈페이지, 클라우드, 유지관리 용역 계약 및 전산인력 구조를 종합 진단하여 실질적인 단계별 개선과제를 도출합니다.</p>
          <div class="svc-tags"><span class="tag">시스템·인프라 실사</span><span class="tag">중장기 정보화계획</span></div>
          <button class="svc-more" onclick="showPage('business',2)">자세히 보기 →</button>
        </div>

        <div class="card svc-card bg-04">
          <div class="svc-num">04</div>
          <h3 class="svc-title keep-all">개인정보 보호수준평가 대응</h3>
          <p class="svc-desc keep-all">개인정보보호위원회 평가기준을 기반으로 내부관리계획, 처리방침, 목적 외 이용 및 제3자 제공 절차, CCTV 운영방침, 파일 대장 정비 등 필수 관리체계를 정립합니다.</p>
          <div class="svc-tags"><span class="tag">수준평가 정량·정성</span><span class="tag">규정 및 절차서 정비</span></div>
          <button class="svc-more" onclick="showPage('business',3)">자세히 보기 →</button>
        </div>

        <div class="card svc-card bg-05">
          <div class="svc-num">05</div>
          <h3 class="svc-title keep-all">정보보안 관리체계 및 기술보호 점검</h3>
          <p class="svc-desc keep-all">국가·공공기관 정보보안 기본지침에 따른 기술적·관리적 보호조치를 점검합니다. 계정·권한, 접속기록, 개인정보 다운로드 통제 및 서버·네트워크 보안취약점을 진단합니다.</p>
          <div class="svc-tags"><span class="tag">기술적 보호조치</span><span class="tag">인프라 취약점 진단</span></div>
          <button class="svc-more" onclick="showPage('business',4)">자세히 보기 →</button>
        </div>

        <div class="card svc-card bg-06">
          <div class="svc-num">06</div>
          <h3 class="svc-title keep-all">실무 교육 및 악성메일 모의훈련</h3>
          <p class="svc-desc keep-all">공공기관 맞춤형 개인정보·정보보안 임직원 직무교육과 최신 피싱 시나리오를 반영한 악성메일 모의훈련(Mind-SAT) 및 평가 지표 연계 결과보고서를 제공합니다.</p>
          <div class="svc-tags"><span class="tag">임직원 인식제고</span><span class="tag">훈련 결과보고서</span></div>
          <button class="svc-more" onclick="showPage('business',5)">자세히 보기 →</button>
        </div>
      </div>
    </div>
  </section>

  <section class="trust-premium-section">
    <div class="inner">
      <div style="text-align:center; margin-bottom:50px;">
        <p class="sec-label">Pragmatic Consulting Framework</p>
        <h2 class="sec-title">실무 중심의 점검 지표와 자문 도메인</h2>
        <p class="sec-desc" style="margin: 8px auto 0; max-width: 650px;">딥시큐는 현장 실무 경험을 바탕으로 공공기관 담당자가 현업에서 직면하는 제도적·기술적 과제를 명확하게 지원합니다.</p>
      </div>

      <div class="trust-layout">
        <div class="trust-stats-dashboard">
          <div class="stat-premium-card highlight-card">
            <div class="stat-p-label">전문성 기반</div>
            <div class="stat-p-num">20<em>+년</em></div>
            <div class="stat-p-desc">핵심 전문가의 공공 IT·보안 실무 및 자문 수행 경험</div>
          </div>
          <div class="stat-premium-card">
            <div class="stat-p-label">독립적 자문 관점</div>
            <div class="stat-p-num" style="color: #0369a1;">100<em>%</em></div>
            <div class="stat-p-desc">특정 솔루션·제조사에 종속되지 않는 발주기관 관점 검토</div>
          </div>
          <div class="stat-premium-card">
            <div class="stat-p-label">법정 평가 기준 대응</div>
            <div class="stat-p-num" style="color: #1e6fcf;">Standard</div>
            <div class="stat-p-desc">행안부·개인정보위·국정원 가이드라인 및 평가편람 기반 진단</div>
          </div>
          <div class="stat-premium-card">
            <div class="stat-p-label">실행 가능한 로드맵</div>
            <div class="stat-p-num" style="color: #059669;">Actionable</div>
            <div class="stat-p-desc">기관 예산과 인력 여건을 고려한 단계별 개선과제 도출</div>
          </div>
        </div>

        <div class="trust-clients-showcase">
          <div class="showcase-title">관련 법령 및 평가 기준 기반 자문 체계</div>
          <p class="showcase-desc">딥시큐는 각 분야별 법정 기준과 행정 지침을 기반으로 체계적인 자문과 검토를 수행합니다.</p>
          
          <div class="client-logo-interactive-grid">
            <div class="c-logo-item" onclick="showPage('business',0)">
              <span class="c-icon">📑</span>
              <span class="c-name">전자정부법</span>
              <span class="c-dept">정보화사업 발주지원<br>대가산정 및 기술검토</span>
            </div>
            <div class="c-logo-item" onclick="showPage('business',1)">
              <span class="c-icon">🧭</span>
              <span class="c-name">소프트웨어진흥법</span>
              <span class="c-dept">구축사업 PMO<br>공정·품질·산출물 관리</span>
            </div>
            <div class="c-logo-item" onclick="showPage('business',2)">
              <span class="c-icon">⚙️</span>
              <span class="c-name">정보화 현황진단</span>
              <span class="c-dept">인프라·시스템·계약<br>중장기 개선 로드맵</span>
            </div>
            <div class="c-logo-item" onclick="showPage('business',3)">
              <span class="c-icon">🔒</span>
              <span class="c-name">개인정보보호법</span>
              <span class="c-dept">보호수준평가 대응<br>규정·지침·서식 정비</span>
            </div>
            <div class="c-logo-item" onclick="showPage('business',4)">
              <span class="c-icon">🛡️</span>
              <span class="c-name">국가정보보안기본지침</span>
              <span class="c-dept">관리체계 및 접속기록<br>기술적 보호조치 점검</span>
            </div>
            <div class="c-logo-item" onclick="showPage('business',5)">
              <span class="c-icon">🎯</span>
              <span class="c-name">모의훈련 및 교육</span>
              <span class="c-dept">악성메일 대응훈련<br>임직원 직무교육 지원</span>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align:center; margin-top:45px;">
        <a class="btn-p" href="#" onclick="showPage('performance');return false;">주요 자문 및 컨설팅 실적 보기</a>
      </div>
    </div>
  </section>
</div>

<div id="page-company" class="page">
  <div class="page-banner">
    <div class="breadcrumb">Home > <span>Company</span></div>
    <h1>회사 소개</h1>
    <p class="keep-all">딥시큐(DeepSecu)는 공공기관 및 유관기관의 정보화 추진과 정보보호 관리체계를 함께 지원하는 실무형 IT 전문 자문기업입니다.</p>
  </div>

  <div style="border-bottom:1px solid var(--border); background:#ffffff;">
    <div class="inner" style="display:flex;">
      <button class="biz-tab active" onclick="switchCompanyTab(this,'about')">회사 소개</button>
      <button class="biz-tab" onclick="switchCompanyTab(this,'history')">주요 연혁</button>
    </div>
  </div>

  <div id="ctab-about" class="biz-panel active">
    <section class="sec">
      <div class="inner keep-all">
        <p class="sec-label">About DeepSecu</p>
        <h2 class="sec-title">현장 실무 중심의 공공 정보화 및 정보보호 자문</h2>
        <p class="sec-desc" style="margin-bottom:18px; font-size: 1.05rem; line-height: 1.75;">
          딥시큐(DeepSecu)는 20년 이상 공공 IT 실무 및 자문 경험을 축적한 핵심 전문가들이 현장에서 쌓은 노하우를 바탕으로 설립한 공공 정보화·정보보호 전문 자문기업입니다.
        </p>
        <p class="sec-desc" style="margin-bottom:28px; line-height: 1.7;">
          공공기관은 빠르게 변화하는 디지털 환경 속에서 복잡한 행정 규정, 예산 타당성, 보안성 검토 및 정부 평가 지표를 동시에 충족해야 하는 과제를 안고 있습니다. 딥시큐는 특정 하드웨어 제조사나 솔루션 공급사의 이해관계에서 벗어나, 발주기관의 입장에서 예산의 효율성과 기술적 타당성을 독립적으로 검토합니다. 정보화 사업의 기획부터 구축단계 PMO, 기관 전산환경의 전반적인 진단, 그리고 개인정보보호 및 정보보안 법정 관리체계 확립까지 실무에서 즉시 이행 가능한 구체적 대안을 제시합니다.
        </p>
        
        <h3 class="biz-sub-title">딥시큐의 4대 자문 원칙</h3>
        <div class="grid-2-col" style="margin-top: 15px;">
          <div class="info-status-box" style="border-left: 4px solid #1e6fcf;">
            <div class="info-status-title">발주기관 관점의 독립성 확보</div>
            <p style="font-size: 0.93rem; color: var(--text-muted); line-height: 1.6;">특정 벤더나 솔루션에 종속되지 않고, 오직 발주기관의 사업 목적과 예산 효율성, 도입 타당성을 최우선으로 검증합니다.</p>
          </div>
          <div class="info-status-box" style="border-left: 4px solid #1e6fcf;">
            <div class="info-status-title">객관적 지침 기반 대가 및 규격 검증</div>
            <p style="font-size: 0.93rem; color: var(--text-muted); line-height: 1.6;">SW사업 대가산정 가이드라인(기능점수 방식) 및 조달 규정을 적용하여 과다 산정이나 불명확한 과업 요구사항을 사전에 정비합니다.</p>
          </div>
          <div class="info-status-box" style="border-left: 4px solid #1e6fcf;">
            <div class="info-status-title">현장 적용 가능한 실무형 컨설팅</div>
            <p style="font-size: 0.93rem; color: var(--text-muted); line-height: 1.6;">선언적 문서에 그치지 않고, 정부 평가 편람과 감사 기준에 부합하도록 현업 담당자가 실제로 운영할 수 있는 규정·서식·증적을 정비합니다.</p>
          </div>
          <div class="info-status-box" style="border-left: 4px solid #1e6fcf;">
            <div class="info-status-title">선제적 리스크 식별 및 대안 제시</div>
            <p style="font-size: 0.93rem; color: var(--text-muted); line-height: 1.6;">사업 일정 지연, 인프라 용량 부족, 규정 미비 등 예상되는 장애 요인을 선제적으로 식별하고 기관 여건에 맞는 현실적 해결방안을 마련합니다.</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div id="ctab-history" class="biz-panel">
    <section class="sec">
      <div class="inner" style="max-width:720px;">
        <p class="sec-label">History</p>
        <h2 class="sec-title">주요 연혁 및 사업 실적</h2>
        <div class="timeline" style="word-break: keep-all;">
          <div class="tl-item">
            <div class="tl-dot"></div>
            <div class="tl-year">2026</div>
            <div class="tl-content">
              <h4>국립기관 홈페이지·플랫폼 구축 자문 및 PMO 총괄</h4>
              <p>[국립문화예술단체] 대규모 통합 홈페이지 및 미디어 플랫폼 개편 사업 추진을 위한 정보화 기획, 제안요청서(RFP) 검토, 기능점수(FP) 기반 개발비 적정성 검토 및 구축사업 관리 자문 총괄.</p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-dot"></div>
            <div class="tl-year">2026</div>
            <div class="tl-content">
              <h4>지자체 산하 공공기관 전산 인프라 및 정보보안 체계 진단</h4>
              <p>[서울시 자치구 시설관리공단 다수] 전산실 서버·네트워크 노후화 실태조사, 용량산정(Capacity Planning) 기반 규격 최적화 자문 및 개인정보 보호수준평가 대응 관리체계 점검 컨설팅 수행.</p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-dot"></div>
            <div class="tl-year">2026</div>
            <div class="tl-content">
              <h4>정부 평가대상 신규 지정 기관 거버넌스 진단</h4>
              <p>[정부유관진흥단체] 공공기관 개인정보 보호수준평가 대상 지정에 따른 규정·절차서 정비, 책임관 지정 가이드 수립 및 전사 개인정보파일 전수조사 서식 정비 자문 지원.</p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-dot"></div>
            <div class="tl-year">2025</div>
            <div class="tl-content">
              <h4>공공 특화 보안 인식제고 및 디지털 솔루션 공급 협약</h4>
              <p>과학기술정보통신부 지정 정보보호 전문서비스 기반 악성메일 모의훈련(Mind-SAT) 자문 프로세스 도입 및 조달청 나라장터 등록 GS인증 문서 뷰어(VIEWSTORY) 공공 보급 파트너십 체결.</p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-dot"></div>
            <div class="tl-year">2025</div>
            <div class="tl-content">
              <h4>딥시큐(DeepSecu) 설립</h4>
              <p>공공 IT 분야 20년 이상의 실무 및 자문 경험을 기반으로 정보화 사업 기획, PMO, 현황진단 및 정보보호 관리체계 전문 자문기업 정식 설립.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<div id="page-business" class="page">
  <div class="page-banner">
    <div class="breadcrumb">Home > <span>Business</span></div>
    <h1>사업 영역</h1>
    <p>공공기관 및 유관단체의 안정적인 IT 운영과 컴플라이언스 준수를 위한 전문 자문 포트폴리오입니다.</p>
  </div>

  <section class="sec">
    <div class="inner">
      <div class="biz-tabs" id="bizTabs">
        <button class="biz-tab active" onclick="switchBizTab(0)">정보화 사업 기획 및 발주지원</button>
        <button class="biz-tab" onclick="switchBizTab(1)">구축사업 PMO 및 기술자문</button>
        <button class="biz-tab" onclick="switchBizTab(2)">정보화 현황진단 및 중장기 개선</button>
        <button class="biz-tab" onclick="switchBizTab(3)">개인정보 보호수준평가 대응</button>
        <button class="biz-tab" onclick="switchBizTab(4)">정보보안 관리체계 및 기술점검</button>
        <button class="biz-tab" onclick="switchBizTab(5)">실무 교육 및 모의훈련</button>
      </div>

      <!-- 0. 정보화 사업 기획 및 발주지원 -->
      <div class="biz-panel active" id="bp0">
        <div class="biz-detail">
          <div class="biz-visual"><img src="assets/images/it_consulting.jpg" alt="정보화 사업 기획 및 발주지원"></div>
          <div class="biz-info keep-all">
            <h2>정보화 사업 기획 및 체계적인 발주지원</h2>
            <p style="margin-bottom: 16px;">정보화 사업 착수 전 타당성 분석부터 요구사항 정의, 제안요청서(RFP) 및 과업지시서 작성, 공정한 조달 발주까지 발주기관이 겪는 전문 인력 부족과 규정 검토의 어려움을 해소합니다.</p>
            <p style="font-weight: 700; color: var(--accent); margin-bottom: 10px;">주요 자문 및 검토 범위</p>
            <ul class="biz-list-modern">
              <li>
                <div class="list-keyword">요구사항 상세화 및 RFP 작성</div>
                <div class="list-desc">현업 부서 요구사항을 체계적으로 도출하고 과업 누락, 모호한 규격, 공급사 편향 조항을 사전에 배제한 과업지시서·제안요청서 작성 지원</div>
              </li>
              <li>
                <div class="list-keyword">SW사업 대가산정 검증</div>
                <div class="list-desc">SW사업 대가산정 가이드라인 기반 기능점수(FP) 산정 및 M/M 투입공수 교차 검토를 통해 예산 편성과 사업비의 적정성을 객관적으로 검증</div>
              </li>
              <li>
                <div class="list-keyword">제안평가 및 계약 지원</div>
                <div class="list-desc">조달청 나라장터 계약 요건 검토, 기술성 평가 항목 구성, 기술협상 시 과업범위 확정 및 이견 조정 지원</div>
              </li>
            </ul>
          </div>
        </div>
        
        <h3 class="biz-sub-title">SW사업 대가산정 표준 검토 프로세스</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 10%;">단계</th>
              <th style="width: 25%;">검토 항목</th>
              <th style="width: 35%;">주요 내용</th>
              <th style="width: 30%;">적용 기준 및 기대효과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1단계</td>
              <td><strong>기능점수(FP) 산정</strong></td>
              <td>데이터 기능(ILF/EIF) 및 트랜잭션 기능(EI/EO/EQ) 도출</td>
              <td><span class="badge-blue">표준적용</span> 기능 규모에 기반한 객관적 개발원가 산출</td>
            </tr>
            <tr>
              <td>2단계</td>
              <td><strong>직접경비 및 마진율 검토</strong></td>
              <td>클라우드/인프라 임차료, SW 라이선스, 제경비 타당성 검토</td>
              <td><span class="badge-green">예산보정</span> 불필요한 과다계상 방지 및 적정 이익률 가이드</td>
            </tr>
            <tr>
              <td>3단계</td>
              <td><strong>M/M 투입공수 교차분석</strong></td>
              <td>개발 난이도 및 수행 인력 직급별 투입 타당성 교차 대조</td>
              <td><span class="badge-yellow">타당성입증</span> 감사 및 예산심의 대응을 위한 객관적 근거 확보</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 1. 구축사업 PMO 및 기술자문 -->
      <div class="biz-panel" id="bp1">
        <div class="biz-detail">
          <div class="biz-visual"><img src="assets/images/public_data.jpg" alt="구축사업 PMO 및 기술자문"></div>
          <div class="biz-info keep-all">
            <h2>발주기관을 대행하는 정보시스템 구축 PMO 및 기술자문</h2>
            <p style="margin-bottom: 16px;">수행사 중심의 단순 사업관리가 아닌, 발주기관의 입장에서 사업 전 과정을 관리·감독하는 독립적인 PMO 자문 서비스를 제공합니다. 계약 범위 내 정시 완수와 고품질 결과물 납품을 지원합니다.</p>
            <p style="font-weight: 700; color: var(--accent); margin-bottom: 10px;">사업관리 핵심 이행 체계</p>
            <ul class="biz-list-modern">
              <li>
                <div class="list-keyword">공정 및 요구사항 추적관리</div>
                <div class="list-desc">과업대비표 기반 요구사항 추적성 매트릭스(RTM)를 운영하여 미이행 과업을 방지하고 개발 공정 지연 리스크를 밀착 통제</div>
              </li>
              <li>
                <div class="list-keyword">단계별 산출물 품질 관리</div>
                <div class="list-desc">분석·설계서, 데이터베이스 모델링(ERD), 테스트 시나리오 등 마일스톤별 핵심 기술 산출물의 품질과 표준 준수 여부 정밀 검토</div>
              </li>
              <li>
                <div class="list-keyword">보안성 검토 및 인수인계 지원</div>
                <div class="list-desc">시큐어코딩 진단, 웹 취약점 점검 조치 여부 검증 및 유지관리 단계로의 체계적인 인수인계·교육 확인</div>
              </li>
            </ul>
          </div>
        </div>

        <h3 class="biz-sub-title">발주기관 지원 구축사업 PMO 이행 흐름</h3>
        <div class="timeline-container">
          <div class="timeline-node">
            <div class="timeline-time">착수 및 계획 단계</div>
            <div class="timeline-heading">사업수행계획서 및 공정 마일스톤 검토</div>
            <div class="timeline-body">수행사 투입인력 적정성 확인, 세부 WBS 일정표 타당성 검증, 과업요구사항 매핑 확인</div>
          </div>
          <div class="timeline-node">
            <div class="timeline-time">분석 및 설계 단계</div>
            <div class="timeline-heading">아키텍처·DB 설계 적정성 및 표준 가이드라인 검토</div>
            <div class="timeline-body">사용자 인터페이스(UI/UX), 공공 웹 표준, 데이터베이스 정규화 및 시스템 연계 인터페이스 사양 검증</div>
          </div>
          <div class="timeline-node">
            <div class="timeline-time">구현 및 테스트 단계</div>
            <div class="timeline-heading">진도 점검, 단위·통합 테스트 시나리오 및 취약점 조치</div>
            <div class="timeline-body">기능 구현 완성도 점검, 결함 조치율 모니터링, 시큐어코딩 및 보안 취약점 조치 결과 교차 확인</div>
          </div>
          <div class="timeline-node">
            <div class="timeline-time">완료 및 이관 단계</div>
            <div class="timeline-heading">최종 검수 지원 및 운영 인수인계 체계 정립</div>
            <div class="timeline-body">최종 산출물 목록 점검, 운영자/사용자 매뉴얼 검토, 준공검사 조서 및 유지관리 이관 지원</div>
          </div>
        </div>
      </div>

      <!-- 2. 정보화 현황진단 및 중장기 개선 -->
      <div class="biz-panel" id="bp2">
        <div class="biz-detail">
          <div class="biz-visual"><img src="assets/images/IT_Infrastructure.jpg" alt="정보화 현황진단 및 중장기 개선"></div>
          <div class="biz-info keep-all">
            <h2>정보화 현황진단 및 중장기 개선방안 수립</h2>
            <p style="margin-bottom: 16px;">기관의 전산 인프라, 응용시스템, 운영 프로세스 전반을 종합적으로 진단합니다. 노후화와 운영 비효율을 진단하고, 기관의 조직과 예산 현실에 부합하는 실행 가능한 단계별 개선 로드맵을 제시합니다.</p>
            <p style="font-weight: 700; color: var(--accent); margin-bottom: 10px;">종합 진단 6대 핵심 영역</p>
            <ul class="biz-list-modern">
              <li>
                <div class="list-keyword">시스템 및 인프라 실사</div>
                <div class="list-desc">서버, 스토리지, 백업, 네트워크 장비의 노후도 및 자원 사용률(CPU, Memory, Disk) 분석 기반 용량 산정(Capacity Planning)</div>
              </li>
              <li>
                <div class="list-keyword">업무시스템 및 클라우드 진단</div>
                <div class="list-desc">ERP, 전자결재, 대표 홈페이지, 대민 채널의 아키텍처 노후화 및 공공 클라우드 전환 타당성 검토</div>
              </li>
              <li>
                <div class="list-keyword">유지관리 계약 및 인력 구조 분석</div>
                <div class="list-desc">통합유지관리 용역의 SLA 지표 및 대가 적정성 검토, 전산 전담 인력 부재 또는 공석에 따른 운영 리스크 대응 방안 제시</div>
              </li>
            </ul>
          </div>
        </div>

        <h3 class="biz-sub-title">정보화 운영체계 진단 및 로드맵 수립 체계</h3>
        <div class="grid-3-col">
          <div class="info-status-box" style="border-top: 3px solid var(--accent);">
            <div class="info-status-title">1. AS-IS 현황 진단</div>
            <ul class="info-status-list">
              <li>하드웨어·소프트웨어 자산 정밀 실사</li>
              <li>유지관리 계약 범위 및 단가 적정성</li>
              <li>업무시스템 연계 및 데이터 흐름 분석</li>
              <li>정보보안 및 백업·재해복구 실태 확인</li>
            </ul>
          </div>
          <div class="info-status-box" style="border-top: 3px solid var(--teal);">
            <div class="info-status-title">2. Gap 분석 및 이슈 도출</div>
            <ul class="info-status-list">
              <li>장비 노후화 및 단종(EOS) 리스크 도출</li>
              <li>특정 제조사 종속(Lock-in) 조항 식별</li>
              <li>유지보수 용역 SLA 및 관리 공백 진단</li>
              <li>법정 의무 책임관(CPO/CISO) 지정 검토</li>
            </ul>
          </div>
          <div class="info-status-box" style="border-top: 3px solid var(--blue);">
            <div class="info-status-title">3. 단계별 To-Be 로드맵</div>
            <ul class="info-status-list">
              <li>단기: 긴급 노후장비 교체 및 계약 정비</li>
              <li>중기: 시스템 통합 및 클라우드 전환 계획</li>
              <li>장기: 중장기 정보화 마스터플랜 수립</li>
              <li>연차별 소요예산 및 우선순위 수립</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 3. 개인정보 보호수준평가 대응 -->
      <div class="biz-panel" id="bp3">
        <div class="biz-detail">
          <div class="biz-visual"><img src="assets/images/privacy.jpg" alt="개인정보 보호수준평가 대응"></div>
          <div class="biz-info keep-all">
            <h2>개인정보 보호수준평가 대응 및 관리체계 정비</h2>
            <p style="margin-bottom: 16px;">개인정보보호위원회 주관 공공기관 개인정보 보호수준평가 기준을 기반으로 기관의 개인정보 처리 실태를 정밀 점검합니다. 규정, 지침, 업무 절차서와 필수 증적 자료를 체계적으로 정비합니다.</p>
            <p style="font-weight: 700; color: var(--accent); margin-bottom: 10px;">주요 이행 및 정비 범위</p>
            <ul class="biz-list-modern">
              <li>
                <div class="list-keyword">규정·방침·내부관리계획 정비</div>
                <div class="list-desc">개인정보 내부관리계획 최신화, 처리방침 개정, 개인정보 침해·유출 대응 매뉴얼 및 CCTV 설치·운영 방침 정비</div>
              </li>
              <li>
                <div class="list-keyword">개인정보파일 전수조사 및 관리대장</div>
                <div class="list-desc">전 부서 보유 개인정보파일 전수 실사, 관리대장 현행화, 표준개인정보보호지침에 따른 정부시스템 등록 지원</div>
              </li>
              <li>
                <div class="list-keyword">처리 절차 및 수탁사 관리감독</div>
                <div class="list-desc">목적 외 이용 및 제3자 제공 대장 관리, 위수탁 계약서 보안 서약 조항 검토, 수탁사 정기 실태점검 서식 정립</div>
              </li>
            </ul>
          </div>
        </div>

        <h3 class="biz-sub-title">개인정보 관리체계 필수 점검 항목 가이드</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 25%;">관리체계 영역</th>
              <th style="width: 45%;">핵심 점검 및 정비 과제</th>
              <th style="width: 30%;">관련 법령 및 평가 기준</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>관리적 보호조치</strong></td>
              <td>개인정보 보호책임자(CPO) 지정, 내부관리계획 수립, 연간 교육 계획 수립 및 임직원 이수율 관리</td>
              <td>개인정보보호법 제29조, 제31조</td>
            </tr>
            <tr>
              <td><strong>처리 단계별 조치</strong></td>
              <td>수집 서식 내 법정 필수 고지사항 검토, 목적 외 이용·제3자 제공 공고, 파기 절차 및 파기관리대장 정비</td>
              <td>개인정보보호법 제15조~제21조</td>
            </tr>
            <tr>
              <td><strong>위탁 및 영상정보</strong></td>
              <td>수탁사 정기 실태점검표 작성, CCTV 안내판 및 운영방침 정비, 열람 대장 및 유지관리 점검 이력 정비</td>
              <td>개인정보보호법 제25조, 제26조</td>
            </tr>
            <tr>
              <td><strong>침해 및 유출 대응</strong></td>
              <td>개인정보 유출 시 통지 및 신고 절차(72시간 이내) 수립, 유출사고 대응 모의훈련 및 매뉴얼 문서화</td>
              <td>개인정보보호법 제34조</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 4. 정보보안 관리체계 및 기술점검 -->
      <div class="biz-panel" id="bp4">
        <div class="biz-detail">
          <div class="biz-visual"><img src="assets/images/InfoSec.jpg" alt="정보보안 관리체계 및 기술점검"></div>
          <div class="biz-info keep-all">
            <h2>정보보안 관리체계 및 기술적 보호조치 점검</h2>
            <p style="margin-bottom: 16px;">국가·공공기관 정보보안 기본지침과 관련 감사 기준에 따라 주요 정보시스템과 네트워크의 기술적·관리적 보호조치를 점검합니다. 식별된 취약점에 대해 현실적인 보안 조치 방안을 제시합니다.</p>
            <p style="font-weight: 700; color: var(--accent); margin-bottom: 10px;">기술적 보안 점검 핵심 항목</p>
            <ul class="biz-list-modern">
              <li>
                <div class="list-keyword">계정·권한 및 접속기록 관리</div>
                <div class="list-desc">관리자 계정 분리, 불필요 계정 삭제, 접근권한 부여·변경·말소 이력 점검, 접속기록 월별 점검 대장 및 다운로드 사유 확인 체계 수립</div>
              </li>
              <li>
                <div class="list-keyword">인증 및 세션 통제</div>
                <div class="list-desc">비밀번호 작성규칙 적용, 세션 타임아웃 설정, 관리자 페이지 접근 IP 제한 및 2차 인증(2FA) 적용 타당성 점검</div>
              </li>
              <li>
                <div class="list-keyword">서버·네트워크 인프라 취약점</div>
                <div class="list-desc">OS 커널 패치, 불필요 포트 및 서비스 폐쇄, DMZ(Web)와 내부 업무망 구간 분리 상태, 백업 데이터 격리 보관 실태 진단</div>
              </li>
            </ul>
          </div>
        </div>

        <h3 class="biz-sub-title">공공기관 정보시스템 기술적 보안점검 표준 항목</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 8%;">구분</th>
              <th style="width: 24%;">점검 분야</th>
              <th style="width: 40%;">핵심 점검 포인트</th>
              <th style="width: 28%;">개선 권고 사항</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><strong>접속기록 관리</strong></td>
              <td>개인정보처리시스템 접속기록 최소 보관기간(1~2년) 및 월 1회 이상 점검 여부</td>
              <td><span class="badge-blue">감사필수</span> 다운로드 사유 입력 통제 및 이상징후 모니터링</td>
            </tr>
            <tr>
              <td>2</td>
              <td><strong>계정 및 접근통제</strong></td>
              <td>퇴직자 계정 즉시 말소, 공용 계정 사용 금지, 관리자 페이지 외부 노출 여부</td>
              <td><span class="badge-red">즉시조치</span> 관리자 접근 인가 IP 제한 및 세션 자동 종료(10~30분)</td>
            </tr>
            <tr>
              <td>3</td>
              <td><strong>암호화 조치</strong></td>
              <td>고유식별정보, 비밀번호 일방향 암호화, 웹 구간 전송 암호화(HTTPS) 적용 여부</td>
              <td><span class="badge-green">지침준수</span> SHA-256 이상 해시 함수 및 안전한 알고리즘 적용</td>
            </tr>
            <tr>
              <td>4</td>
              <td><strong>네트워크 및 백업</strong></td>
              <td>대민 서비스와 내부망 방화벽 정책, 랜섬웨어 대비 오프라인/소산 백업 실태</td>
              <td><span class="badge-yellow">인프라보완</span> 방화벽 접근제어 룰셋 정기 정비 및 백업 복구 테스트</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 5. 실무 교육 및 모의훈련 -->
      <div class="biz-panel" id="bp5">
        <div class="biz-detail">
          <div class="biz-visual"><img src="assets/images/seminar.jpg" alt="실무 교육 및 모의훈련"></div>
          <div class="biz-info keep-all">
            <h2>공공기관 맞춤형 실무 교육 및 악성메일 모의훈련</h2>
            <p style="margin-bottom: 16px;">단순 주입식 교육을 탈피하여, 공공기관 임직원들이 실제 업무에서 마주하는 침해 위협과 개인정보 취급 주의사항을 체득할 수 있는 맞춤형 교육 및 훈련 프로그램을 지원합니다.</p>
            <p style="font-weight: 700; color: var(--accent); margin-bottom: 10px;">프로그램 구성 및 자문 범위</p>
            <ul class="biz-list-modern">
              <li>
                <div class="list-keyword">악성메일 모의훈련 수행 (Mind-SAT)</div>
                <div class="list-desc">공문서 사칭, 민원 통지, 보안 업데이트 등 실제 공공 업무 환경에 기반한 사회공학적 피싱 템플릿 설계 및 모의훈련 집행</div>
              </li>
              <li>
                <div class="list-keyword">평가 연계 결과분석서 도출</div>
                <div class="list-desc">부서별·직급별 열람율 및 첨부파일 실행율 통계 분석, 취약 그룹 대상 재교육 가이드 및 감사 증적용 결과보고서 제공</div>
              </li>
              <li>
                <div class="list-keyword">임직원 직무 맞춤형 보안 교육</div>
                <div class="list-desc">일반 직원, 개인정보 취급자, 전산 담당자 등 대상별 법정 의무 교육 이수 지원 및 최신 법령 개정사항 해설</div>
              </li>
            </ul>
          </div>
        </div>

        <h3 class="biz-sub-title">연간 보안인식제고 및 훈련 운영 절차</h3>
        <div class="timeline-container">
          <div class="timeline-node">
            <div class="timeline-time">1단계: 계획 수립</div>
            <div class="timeline-heading">연간 추진 계획 수립 및 발송 화이트리스트 사전 검토</div>
            <div class="timeline-body">정부 평가 지표에 부합하도록 교육 및 훈련 추진 계획을 수립하고, 기관 메일 시스템 및 방화벽 사전 등록 가이드 지원</div>
          </div>
          <div class="timeline-node">
            <div class="timeline-time">2단계: 훈련 집행</div>
            <div class="timeline-heading">실전형 악성메일 모의훈련 집행 및 실시간 모니터링</div>
            <div class="timeline-body">Mind-SAT 기반 최신 피싱 시나리오 템플릿을 적용하여 훈련 메일을 불시 발송하고 열람 및 링크 클릭 현황을 집계</div>
          </div>
          <div class="timeline-node">
            <div class="timeline-time">3단계: 사후 관리</div>
            <div class="timeline-heading">통계 분석 결과보고서 작성 및 평가 증적 완비</div>
            <div class="timeline-body">열람율·감염율 통계 분석 보고서 발행, 취약 직원 대상 후속 교육자료 배포 및 수준평가 증적 서식 매핑 지원</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<div id="page-product" class="page">
  <div class="page-banner">
    <div class="breadcrumb">Home > <span>Product</span></div>
    <h1>디지털 서비스</h1>
    <p>딥시큐의 실무 자문 노하우와 결합하여 공급하는 공공 디지털 검증 솔루션입니다.</p>
  </div>

  <section class="sec">
    <div class="inner">
      <div class="biz-tabs" id="prodTabs">
        <button class="biz-tab active" onclick="switchProductTab(this, 'chatbot')">지능형 AI 챗봇 (RAG 기반 SaaS)</button>
        <button class="biz-tab" onclick="switchProductTab(this, 'viewstory')">문서 바로보기 솔루션 (VIEWSTORY)</button>
        <button class="biz-tab" onclick="switchProductTab(this, 'mindsat')">악성메일 모의훈련 (Mind-SAT)</button>
      </div>

      <!-- 지능형 AI 챗봇 (RAG 기반 SaaS) -->
      <div id="ptab-chatbot" class="biz-panel active" style="margin-bottom: 60px;">
        <div class="biz-detail" style="align-items: flex-start;">
          
          <div class="biz-visual-wrap" style="flex: 1; max-width: 440px; width: 100%; margin: 0 auto;">
            <a href="https://chat.deepsecu.co.kr/" target="_blank" rel="noopener noreferrer" 
               style="display: block; text-decoration: none; position: relative; border: 2px solid #1e6fcf; border-radius: 14px; overflow: hidden; box-shadow: 0 8px 20px rgba(30,111,207,0.12); background: #ffffff; transition: transform 0.3s ease;">
              <div style="background: #1e6fcf; color: #ffffff; font-size: 0.88rem; font-weight: 700; padding: 10px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px;">
                <span>데모 체험하기</span>
              </div>
              <div style="position: relative;">
                <img src="assets/images/chatbot.jpg" class="chatbot-img" alt="AI Chatbot SaaS" style="width: 100%; height: auto; display: block; object-fit: contain;">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(15,23,42,0.8) 100%); color: #fff; padding: 20px 15px 12px; text-align: center; font-size: 0.88rem; font-weight: 700;">
                  클릭하시면 실제 구동 중인 챗봇 데모로 연결됩니다
                </div>
              </div>
            </a>
            
            <div style="margin-top: 14px;">
              <a href="https://chat.deepsecu.co.kr/" target="_blank" rel="noopener noreferrer" 
                 style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 14px 0; background: linear-gradient(135deg, #1e6fcf 0%, #0f4c92 100%); color: #ffffff; font-weight: 700; font-size: 1rem; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 15px rgba(30, 111, 207, 0.25); text-align: center; box-sizing: border-box;">
                <span>딥시큐 AI 챗봇 실시간 체험하기</span>
              </a>
            </div>
          </div>

          <div class="biz-info keep-all" style="flex: 1.2;">
            <h2>기관 지식데이터 기반 대민 안내 AI 챗봇 (RAG SaaS)</h2>
            <p>초기 대규모 인프라 구축이나 복잡한 개발 과정 없이, 기관의 누리집(홈페이지)에 스크립트 플러그인 연동만으로 즉시 적용 가능한 구독형 RAG(검색증강생성) 기반 AI 챗봇 서비스입니다.</p>
            
            <ul class="biz-list">
              <li><strong>기관 공식 데이터 기반 정확한 응답:</strong> 기관이 제공하는 행정 지침, 조례, 사업 안내문, FAQ 문서를 벡터 데이터베이스에 임베딩하여 할루시네이션(환각 현상)을 통제하고 신뢰도 높은 민원 안내를 제공합니다.</li>
              <li><strong>가벼운 스크립트 플러그인 연동:</strong> 기존 웹사이트 환경을 변경하지 않고 단 몇 줄의 자바스크립트 위젯 코드를 삽입하여 즉각적인 챗봇 UI를 활성화할 수 있습니다.</li>
              <li><strong>개인정보 필터링 안전장치:</strong> 사용자의 질의 과정에서 주민등록번호, 연락처, 계좌번호 등 민감정보가 입력될 경우 사전에 탐지·차단하는 개인정보보호 필터링 모듈이 적용됩니다.</li>
              <li><strong>실무 중심 지식데이터 갱신 자문:</strong> 딥시큐의 공공 문서 정비 경험을 바탕으로, 챗봇의 답변 품질을 높이기 위한 원천 행정 문서 구조화 및 질의응답 셋 정비 자문을 함께 지원합니다.</li>
            </ul>

            <div style="margin-top: 22px; padding: 16px; background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 10px;">
              <p style="margin: 0; font-size: 0.95rem; color: #0369a1; font-weight: 700;">
                실제 서비스 환경 체험 안내
              </p>
              <p style="margin: 6px 0 0 0; font-size: 0.88rem; color: #0284c7; line-height: 1.55;">
                공식 데모 웹사이트 <a href="https://chat.deepsecu.co.kr/" target="_blank" rel="noopener noreferrer" style="color: #0284c7; font-weight: 700; text-decoration: underline;">https://chat.deepsecu.co.kr/</a> 에 접속하시면 RAG 엔진의 빠른 응답 속도와 자연스러운 대민 행정 질의응답 성능을 직접 확인하실 수 있습니다.
              </p>
            </div>
          </div>

        </div>
        
        <div class="price-policy-box" style="background-color: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; margin-top: 30px;">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e6fcf; margin-bottom: 5px;">
            AI 챗봇 서비스 도입 산정 기준 (구독형 라이선스)
          </h3>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 18px;">
            초기 하드웨어 서버 구매 비용이 없으며, 기관 누리집의 월간 트래픽 규모와 연동할 지식 문서의 범위에 따라 합리적인 연간 구독 라이선스를 협의하여 산정합니다.
          </p>
          <table class="price-table">
            <thead>
              <tr>
                <th style="width: 25%;">라이선스 산정 기준</th>
                <th style="width: 50%;">상세 연동 스펙 및 조건</th>
                <th style="width: 25%;">비용 산정 방식</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">월간 활성 이용자 (MAU)</td>
                <td class="txt-left">누리집의 월평균 접속 트래픽 및 챗봇 동시 상담 세션 수 기준</td>
                <td rowspan="3" class="font-bold" style="color: #0369a1; background: #ffffff;">기관 운영 규모 분석 후<br>맞춤형 산정<br>(상담 협의)</td>
              </tr>
              <tr>
                <td class="font-bold">LLM 모델 및 질의 호출량</td>
                <td class="txt-left">대민 안내 질의응답 빈도 및 월별 토큰(Token) 사용량 설계</td>
              </tr>
              <tr>
                <td class="font-bold">기관 지식 DB 임베딩 범위</td>
                <td class="txt-left">기관 행정 문서, 민원 서식, FAQ 데이터셋 규모 및 위젯 테마 커스터마이징</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- VIEWSTORY 솔루션 -->
      <div id="ptab-viewstory" class="biz-panel" style="margin-bottom: 60px; display: none;">
        <div class="biz-detail">
          <div class="biz-visual" style="width: 100%; height: auto; min-height: auto; max-height: none; overflow: visible; background: none;">
            <img src="assets/images/viewstory_main.jpg" class="chatbot-img" alt="VIEWSTORY 솔루션" style="width: 100%; height: auto; object-fit: contain; display: block; border: 1px solid #e2e8f0; border-radius: 8px;">
          </div>
          <div class="biz-info keep-all">
            <h2>대민서비스 문서 바로보기 솔루션 <span style="color:#1e6fcf;">VIEWSTORY</span></h2>
            <p style="font-weight: 600; color:#475569;">별도 뷰어 프로그램 설치 없이 브라우저에서 첨부문서를 즉시 열람하는 GS인증 솔루션</p>
            <p>공공 누리집 방문자가 한글(HWP), PDF, 오피스 문서 등 첨부파일을 다운로드하거나 뷰어 프로그램을 설치하지 않고 웹브라우저에서 즉시 안전하게 확인할 수 있도록 지원하는 검증된 GS인증 1등급 솔루션입니다.</p>
            <ul class="biz-list-modern" style="margin-top: 15px;">
              <li>
                <div class="list-keyword">하이브리드 변환 방식</div>
                <div class="list-desc">문서 서식을 원본 그대로 유지하는 이미지 변환 방식과 텍스트 검색 및 복사가 가능한 HTML 변환 방식을 환경에 맞게 선택 적용할 수 있습니다.</div>
              </li>
              <li>
                <div class="list-keyword">다문화 AI 지원 기능</div>
                <div class="list-desc">외국인 거주자와 다문화 가정을 위해 다국어 번역 기능 및 웹 음성 출력(TTS) 기술이 연계되어 정보 접근성을 개선합니다.</div>
              </li>
              <li>
                <div class="list-keyword">검증된 공공 도입 실적</div>
                <div class="list-desc">서울시 주요 누리집을 포함한 다수의 공공기관 대민 웹사이트에 안정적으로 도입되어 운영 안정성을 검증받았습니다.</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="price-policy-box" style="background-color: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; margin-top: 30px;">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e6fcf; margin-bottom: 5px;">
            조달청 나라장터 디지털서비스몰 등록 가격 기준
          </h3>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 18px;">
            본 가격 정책은 조달청 디지털서비스몰에 계약 체결된 <strong>제3자단가계약 상품 가격(VAT 포함)</strong> 기준입니다.
          </p>
          <table class="price-table">
            <thead>
              <tr>
                <th style="width: 10%;">물품식별번호</th>
                <th style="width: 48%;">나라장터 등록 제품명 (상용SW 규격)</th>
                <th style="width: 12%;">라이선스 유형</th>
                <th style="width: 15%;">조달 등록 단가</th>
                <th style="width: 15%;">납품 기한</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23455770</td>
                <td class="txt-left font-bold">뷰스토리 v1.0, 문서바로보기솔루션, 1API, 연간라이선스</td>
                <td>연간형 (1 API)</td>
                <td class="accent-price">4,290,000 원</td>
                <td rowspan="4" style="background: #ffffff; font-size: 0.85rem;">납품요구 후 30일 이내 (현장설치도)</td>
              </tr>
              <tr>
                <td>26062454</td>
                <td class="txt-left font-bold" style="color: #0369a1;">뷰스토리 v1.0, 문서바로보기솔루션, 1API, 다문화음성팩, 연간</td>
                <td>연간형 (1 API)</td>
                <td class="accent-price" style="color: #0369a1;">6,600,000 원</td>
              </tr>
              <tr>
                <td>25052724</td>
                <td class="txt-left font-bold">뷰스토리 v1.0, 문서바로보기솔루션, 1API, 영구라이선스</td>
                <td>영구형 (1 API)</td>
                <td class="accent-price">22,000,000 원</td>
              </tr>
              <tr>
                <td>25559490</td>
                <td class="txt-left font-bold" style="color: #065f46;">뷰스토리 v1.0, 문서바로보기솔루션, 1API, 다문화음성팩, 영구</td>
                <td>영구형 (1 API)</td>
                <td class="accent-price" style="color: #065f46;">33,000,000 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Mind-SAT 솔루션 -->
      <div id="ptab-mindsat" class="biz-panel" style="margin-bottom: 60px; display: none;">
        <div class="biz-detail">
          <div class="biz-visual" style="width: 100%; height: auto; min-height: auto; max-height: none; overflow: visible; background: none;">
            <img src="assets/images/Mind-SAT.jpg" class="chatbot-img" alt="Mind-SAT 모의훈련" style="width: 100%; height: auto; object-fit: contain; display: block; border: 1px solid #e2e8f0; border-radius: 8px;">
          </div>
          <div class="biz-info keep-all">
            <h2>실전형 악성메일 모의훈련 서비스 <span style="color:#1e6fcf;">Mind-SAT</span></h2>
            <p style="font-weight: 600; color:#475569;">공공기관 임직원 보안인식 진단 및 훈련 평가 증적 완비</p>
            <p>과학기술정보통신부 지정 정보보호 전문서비스 기준을 충족하는 모의훈련 솔루션입니다. 딥시큐는 시스템 환경 검토부터 훈련 시나리오 설계, 결과 분석 및 사후 보안 교육 지표 연계까지 원스톱으로 지원합니다.</p>
            <ul class="biz-list-modern" style="margin-top: 15px;">
              <li>
                <div class="list-keyword">메일 인프라 사전 검토</div>
                <div class="list-desc">기관 메일 서버 및 스팸방화벽의 IP 화이트리스트 등록 사양을 사전에 검토하여 정밀하고 안정적인 훈련 환경을 구축합니다.</div>
              </li>
              <li>
                <div class="list-keyword">사회공학적 시나리오 매핑</div>
                <div class="list-desc">민원 안내, 감사 지적사항, 포털 로그인 알림 등 공공기관 실무자가 일상 업무 중 노출되기 쉬운 최신 피싱 유형을 반영합니다.</div>
              </li>
              <li>
                <div class="list-keyword">평가 증적용 결과보고서 제공</div>
                <div class="list-desc">부서별 열람율·감염율 통계 분석과 함께 공공기관 개인정보 보호수준평가 및 보안실태 점검 증적 서식에 부합하는 정량 결과보고서를 도출합니다.</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="price-policy-box" style="background-color: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; margin-top: 30px;">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e6fcf; margin-bottom: 5px;">
            모의훈련 서비스 도입 산정 체계 (훈련 용역 및 자문 연계)
          </h3>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 18px;">
            참여 임직원 수와 연간 훈련 회차(상·하반기 분할 등)에 따라 맞춤형 예산이 협의되며, 딥시큐의 사후 평가 증적 자문이 패키지로 연계됩니다.
          </p>
          <table class="price-table">
            <thead>
              <tr>
                <th style="width: 25%;">산정 요인</th>
                <th style="width: 50%;">세부 조건</th>
                <th style="width: 25%;">비용 정책</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">훈련 대상 인원 규모</td>
                <td class="txt-left">전사 임직원 및 사업소 인원 수 기준 대상자 명단 세분화</td>
                <td rowspan="3" class="font-bold" style="color: #065f46; background: #ffffff;">기관 여건 분석 후<br>맞춤형 견적 산정<br>(상담 협의)</td>
              </tr>
              <tr>
                <td class="font-bold">연간 훈련 집행 횟수</td>
                <td class="txt-left">연간 집중 1회 또는 상·하반기 분할 2회 등 훈련 주기 선택</td>
              </tr>
              <tr>
                <td class="font-bold">평가 증적 연계 자문</td>
                <td class="txt-left">결과 통계 보고서 발행 및 보호수준평가 증적자료 매핑 지원 포함</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </section>
</div>

<div id="page-performance" class="page">
  <div class="page-banner">
    <div class="breadcrumb">Home > <span>Performance</span></div>
    <h1>수행 실적</h1>
    <p class="keep-all">딥시큐(DeepSecu)가 공공기관 및 유관기관에서 실제로 수행한 실무 자문 및 컨설팅 사례입니다.</p>
  </div>

  <div style="border-bottom:1px solid var(--border); background:#ffffff;">
    <div class="inner" style="display:flex;">
      <button class="biz-tab active" onclick="switchPerfTab(this,'records')">주요 수행실적</button>
      <button class="biz-tab" onclick="switchPerfTab(this,'clients')">주요 고객사</button>
    </div>
  </div>

  <div id="ptab-records">
    <section class="sec">
      <div class="inner">
        <div class="perf-stats">
          <div class="perf-stat"><div class="big">20+</div><div class="label">핵심 전문가 실무 경력(년)</div></div>
          <div class="perf-stat"><div class="big">Public</div><div class="label">공공·지자체 전문 자문</div></div>
          <div class="perf-stat"><div class="big">Standard</div><div class="label">행안부·개보위 지침 준수</div></div>
        </div>

        <div class="pf-filter" id="pfFilter">
          <button class="pf-btn active" onclick="filterPf(this,'all')">전체</button>
          <button class="pf-btn" onclick="filterPf(this,'pmo')">기획 · PMO</button>
          <button class="pf-btn" onclick="filterPf(this,'data')">현황진단 · 인프라</button>
          <button class="pf-btn" onclick="filterPf(this,'security')">개인정보 · 정보보안</button>
        </div>

        <div class="pf-grid" id="pfGrid">
          <div class="pf-card" data-cat="pmo">
            <div class="pf-year">2026</div>
            <div class="pf-name keep-all">국립문화예술단체</div>
            <p class="pf-desc keep-all">홈페이지 및 온라인 미디어 플랫폼 통합 재구축 사업 마스터플랜(ISMP) 수립 자문, 제안요청서(RFP) 검토 및 기능점수(FP) 방식 개발비 적정성 검토 총괄</p>
            <span class="pf-badge">기획 · PMO</span>
          </div>

          <div class="pf-card" data-cat="security">
            <div class="pf-year">2026</div>
            <div class="pf-name keep-all">서울시 자치구 시설관리공단 (A)</div>
            <p class="pf-desc keep-all">개인정보보호 관리체계 정밀 진단, 개인정보 처리방침 및 내부관리계획 개정, 개인정보파일 전수조사 대장 정비 및 보호수준평가 증적자료 구축 자문</p>
            <span class="pf-badge">개인정보 · 정보보안</span>
          </div>

          <div class="pf-card" data-cat="data">
            <div class="pf-year">2026</div>
            <div class="pf-name keep-all">서울시 자치구 시설관리공단 (B)</div>
            <p class="pf-desc keep-all">전산실 주요 서버·네트워크 노후화 실태조사, 용량산정(Capacity Planning) 기반 최적 교체 규격 도출 및 유지관리 계약 적정성 검토</p>
            <span class="pf-badge">현황진단 · 인프라</span>
          </div>

          <div class="pf-card" data-cat="security">
            <div class="pf-year">2026</div>
            <div class="pf-name keep-all">정부유관진흥단체</div>
            <p class="pf-desc keep-all">정부 평가대상 신규 지정에 따른 긴급 거버넌스 수립, 책임관 지정 가이드, 개인정보 침해사고 대응 절차 정비 및 전사 보안인식제고 교육 지원</p>
            <span class="pf-badge">개인정보 · 정보보안</span>
          </div>

          <div class="pf-card" data-cat="pmo">
            <div class="pf-year">2025</div>
            <div class="pf-name keep-all">서울시 대표 대민 서비스 채널</div>
            <p class="pf-desc keep-all">대민 포털 및 패밀리 사이트 내 첨부문서 바로보기(VIEWSTORY) 조달 패키지 적용 아키텍처 검토 및 기술 연동 자문 수행</p>
            <span class="pf-badge">기획 · PMO</span>
          </div>

          <div class="pf-card" data-cat="security">
            <div class="pf-year">2025</div>
            <div class="pf-name keep-all">공공기관 및 출연기관 다수</div>
            <p class="pf-desc keep-all">실전형 악성메일 모의훈련(Mind-SAT) 집행, 부서별 열람율 및 실행율 통계 분석, 보호수준평가 증적 연계 결과보고서 도출</p>
            <span class="pf-badge">개인정보 · 정보보안</span>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div id="ptab-clients" style="display:none;">
    <section class="sec">
      <div class="inner">
        <p class="sec-label">Our Clients</p>
        <h2 class="sec-title">주요 협력 및 고객 기관</h2>
        
        <div class="premium-client-grid">
          <div class="premium-client-card">
            <div class="premium-logo-wrap">
              <img src="assets/images/yjcj_logo.png" alt="여주세종문화관광재단">
            </div>
            <div class="p-client-name">여주세종문화관광재단</div>
            <div class="p-client-type">지자체 출연 문화관광재단</div>
          </div>
          
          <div class="premium-client-card">
            <div class="premium-logo-wrap">
              <img src="assets/images/ntck_logo.png" alt="국립극단">
            </div>
            <div class="p-client-name">국립극단</div>
            <div class="p-client-type">국립문화예술단체</div>
          </div>
          
          <div class="premium-client-card">
            <div class="premium-logo-wrap">
              <img src="assets/images/oads_logo.png" alt="해외농업자원개발협회">
            </div>
            <div class="p-client-name">해외농업자원개발협회</div>
            <div class="p-client-type">농림축산식품부 산하 단체</div>
          </div>
          
          <div class="premium-client-card">
            <div class="premium-logo-wrap">
              <img src="assets/images/labors_logo.png" alt="서울노동권익센터">
            </div>
            <div class="p-client-name">서울노동권익센터</div>
            <div class="p-client-type">서울시 지정 전문기관</div>
          </div>
          
          <div class="premium-client-card">
            <div class="premium-logo-wrap">
              <img src="assets/images/stat_logo.png" alt="한국통계진흥원">
            </div>
            <div class="p-client-name">한국통계진흥원</div>
            <div class="p-client-type">국가 통계 전문 공공기관</div>
          </div>

          <div class="premium-client-card">
            <div class="premium-logo-wrap">
              <img src="assets/images/efmc_logo.png" alt="은평구시설관리공단">
            </div>
            <div class="p-client-name">은평구시설관리공단</div>
            <div class="p-client-type">서울시 자치구 시설관리공단</div>
          </div>

          <div class="premium-client-card">
            <div class="premium-logo-wrap">
              <img src="assets/images/ycs_logo.png" alt="양천구시설관리공단">
            </div>
            <div class="p-client-name">양천구시설관리공단</div>
            <div class="p-client-type">서울시 자치구 시설관리공단</div>
          </div>
        </div>
          
      </div>
    </section>
  </div>
</div>

<div id="page-contact" class="page">
  <div class="page-banner">
    <div class="breadcrumb">Home > <span>Contact Us</span></div>
    <h1>문의하기</h1>
    <p class="keep-all">정보화 사업 기획, 인프라 진단, PMO, 개인정보보호 및 정보보안 자문에 대해 명확한 실무 방향을 제시해 드립니다.</p>
  </div>

  <section class="sec">
    <div class="inner contact-grid">
      <div>
        <p class="sec-label">Contact Info</p>
        <h2 class="sec-title keep-all">딥시큐와<br>실무 과제를 상의하세요</h2>
        <div class="contact-info-cards">
          <div class="ci-card"><div class="ci-ico">📞</div><div><div class="ci-label">전화</div><div class="ci-val">0507-1353-0046</div></div></div>
          <div class="ci-card"><div class="ci-ico">✉️</div><div><div class="ci-label">이메일</div><div class="ci-val">haruty@deepsecu.co.kr</div></div></div>
          <div class="ci-card"><div class="ci-ico">📍</div><div><div class="ci-label">주소</div><div class="ci-val">서울시 송파구 마천로8길 1(오금동), 3층 112호</div></div></div>
        </div>
      </div>

      <div class="contact-form">
        <form id="contact-form" action="https://formspree.io/f/mwvwkarr" method="POST">
          <div class="form-row">
            <div class="fg"><label>성함/직책 *</label><input type="text" name="성함" placeholder="홍길동 팀장" required></div>
            <div class="fg"><label>기관/회사명 *</label><input type="text" name="회사명" placeholder="ㅇㅇ구 시설관리공단" required></div>
          </div>
          <div class="form-row">
            <div class="fg"><label>직통 연락처 *</label><input type="tel" name="연락처" placeholder="010-0000-0000" required></div>
            <div class="fg"><label>공식 이메일 *</label><input type="email" name="이메일" placeholder="example@agency.go.kr" required></div>
          </div>
          <div class="fg">
            <label>요청 자문 분야 *</label>
            <select name="문의서비스" required>
              <option value="">서비스를 선택해주세요</option>
              <option>정보화 사업 기획 및 발주지원 (RFP·대가산정)</option>
              <option>홈페이지·정보시스템 구축 PMO 및 기술자문</option>
              <option>정보화 현황진단 및 중장기 로드맵 수립</option>
              <option>개인정보 보호수준평가 대응 및 관리체계 정비</option>
              <option>정보보안 관리체계 및 기술적 보호조치 점검</option>
              <option>실무 보안 교육 및 악성메일 모의훈련</option>
              <option>지능형 AI 챗봇 서비스 도입 (RAG 기반 SaaS)</option>
              <option>대민서비스 문서 바로보기 도입 (VIEWSTORY)</option>
            </select>
          </div>
          <div class="fg"><label>자문 요청 배경 요약</label><textarea name="문의내용" placeholder="추진 중인 정보화 사업 일정, 시스템 현황 또는 보완이 필요한 보안·평가 과제를 간략히 적어주시면 사전 검토 후 신속히 안내해 드립니다."></textarea></div>
          
          <div class="fg-privacy">
            <div class="privacy-box">
              [개인정보 수집 및 이용 안내]<br>
              1. 수집 항목: 성함, 기관명, 연락처, 이메일 주소<br>
              2. 수집 목적: 자문 요청 접수 및 상담 회신<br>
              3. 보유 기간: 상담 완료 후 1년간 보관 후 파기합니다.
            </div>
            <label class="privacy-check">
              <input type="checkbox" name="개인정보동의" value="동의함" required>
              개인정보 수집 및 이용 동의 (필수)
            </label>
          </div>
          <button type="submit" class="submit-btn" style="margin-top: 16px;">자문 요청서 보내기 →</button>
        </form>
      </div>
    </div>

    <div class="inner">
      <div class="map-wrap" id="map-section">
        <iframe src="https://map.kakao.com/link/map/DeepSecu,37.499117,127.130883" loading="lazy"></iframe>
        <div class="map-info">
          <div class="map-info-item"><span>📍</span> 서울시 송파구 마천로8길 1 (5호선 오금역 도보 5분)</div>
          <a class="map-link" href="https://map.kakao.com/link/map/DeepSecu,37.499117,127.130883" target="_blank">카카오맵 연결</a>
        </div>
      </div>
    </div>
  </section>
</div>

<footer>
  <div class="footer-top inner">
    <div class="footer-brand">
      <div class="logo">DeepSecu</div>
      <p>공공기관 정보화 기획 · 구축사업 PMO · 현황진단<br>개인정보보호 및 정보보안 실무 전문 자문기업</p>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <a href="#" onclick="showPage('company','about');return false;">회사 소개</a>
      <a href="#" onclick="showPage('company','history');return false;">주요 연혁</a>
    </div>
    <div class="footer-col">
      <h5>Business</h5>
      <a href="#" onclick="showPage('business',0);return false;">정보화 기획·발주지원</a>
      <a href="#" onclick="showPage('business',1);return false;">구축사업 PMO·자문</a>
      <a href="#" onclick="showPage('business',2);return false;">정보화 현황진단</a>
      <a href="#" onclick="showPage('business',3);return false;">개인정보 수준평가</a>
      <a href="#" onclick="showPage('business',4);return false;">정보보안 기술점검</a>
      <a href="#" onclick="showPage('business',5);return false;">실무 교육·훈련</a>
    </div>
    <div class="footer-col">
      <h5>Product</h5>
      <a href="#" onclick="showPage('product','chatbot');return false;">지능형 AI 챗봇 (SaaS)</a>
      <a href="#" onclick="showPage('product','viewstory');return false;">문서 바로보기 (VIEWSTORY)</a>
      <a href="#" onclick="showPage('product','mindsat');return false;">악성메일 모의훈련 (Mind-SAT)</a>
    </div>
    <div class="footer-col">
      <h5>Contact</h5>
      <a href="tel:0507-1353-0046">0507-1353-0046</a>
      <a href="mailto:haruty@deepsecu.co.kr">haruty@deepsecu.co.kr</a>
    </div>
  </div>
  <div class="footer-bottom inner">
    <p>© 2025-2026 딥시큐(DeepSecu). All rights reserved.</p>
    <p>서울시 송파구 마천로8길 1(오금동), 3층 112호</p>
  </div>
</footer>

<script src="assets/js/script.js"></script>

<script>
  function switchProductTab(element, tabId) {
    const tabs = document.querySelectorAll('#prodTabs .biz-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    element.classList.add('active');
    
    document.getElementById('ptab-chatbot').style.display = 'none';
    document.getElementById('ptab-viewstory').style.display = 'none';
    document.getElementById('ptab-mindsat').style.display = 'none';
    
    document.getElementById('ptab-' + tabId).style.display = 'block';
  }

  // GNB 드롭다운 등 서브 타깃 라우팅 제어 호환성 유지
  const originalShowPage = window.showPage || function(){};
  window.showPage = function(pageId, subTarget) {
    if (typeof originalShowPage === 'function') {
      try { originalShowPage(pageId, subTarget); } catch(e) {}
    }
    
    if (pageId === 'product' && subTarget) {
      const tabButton = document.querySelector(`#prodTabs .biz-tab[onclick*="${subTarget}"]`);
      if (tabButton) {
        switchProductTab(tabButton, subTarget);
      } else {
        const indexMap = { 'chatbot': 0, 'viewstory': 1, 'mindsat': 2 };
        const backupButton = document.querySelectorAll('#prodTabs .biz-tab')[indexMap[subTarget] || 0];
        if (backupButton) switchProductTab(backupButton, subTarget);
      }
    }
  }
</script>

<script
  src="https://chat.deepsecu.co.kr/widget.js"
  data-chatbot-id="c6d234cb-1e27-465b-9f2d-5c15f507152d"
  data-api-base-url="https://api.deepsecu.co.kr/api"
  data-open-on-load="false"
  data-launcher-icon="custom"
  data-launcher-icon-url="https://chat.deepsecu.co.kr/widget-icons/generated/8.png"
></script>
  
</body>
</html>
