{
--bg-light: #ffffff;
--bg-gray: #f8fafc;
--bg-banner: linear-gradient(135deg, #0a1128 0%, #111a3a 100%);

--text-main: #0f172a;
--text-muted: #334155;
--text-light: #64748b;

--accent: #1e6fcf;
--bright: #1b7cf2;
--dark-blue: #0a1128;

--card-bg: #ffffff;
--border: #e2e8f0;
--shadow: rgba(15, 23, 42, 0.04);
}
*{margin:0;padding:0;box-sizing;}
html{scroll-behavior;}

body {
background: var(--bg-light);
color: var(--text-main);
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
letter-spacing: -0.02em;
line-height: 1.6;
overflow-x: hidden;
padding-bottom: 0px;
}

#bg-canvas{position;inset:0;z-index:0;pointer-events;opacity:.4;}

/* 🗺️ NAV */
nav{
position;top:0;left:0;right:0;z-index:200;
display;align-items;justify-content;
padding:0 40px;height:72px;
background(255,255,255,.85);
backdrop-filter(20px);
-webkit-backdrop-filter(20px);
border-bottom:1px solid var(--border);
}
.nav-logo{display;align-items;gap:10px;text-decoration;cursor;}
.nav-logo svg{width:28px;height:28px;}
.nav-logo span{font-family:'Plus Jakarta Sans', sans-serif;font-size:1.4rem;font-weight:800;color(--dark-blue);letter-spacing:-0.5px;}
.nav-logo span em{color(--accent);font-style;}

/* GNB */
.gnb{display;list-style;gap:4px;margin-left:40px;}
.gnb > li{position;}
.gnb > li > a{
display;align-items;gap:4px;
height:72px;padding:0 20px;
color(--text-muted);font-size:1rem;
font-weight:700;
text-decoration;transition .2s;
border-bottom:3px solid transparent;
}
.gnb > li > a,.gnb > li > a.active{color(--accent);border-bottom-color(--accent);}

/* 드롭다운 */
.dropdown{
position;top:72px;left:0;
min-width:230px;
background:#ffffff;
border:1px solid var(--border);
border-radius:8px;
padding:8px 0;
opacity:0;visibility;
transform(4px);
transition .2s;
box-shadow:0 12px 30px rgba(15, 23, 42, 0.08);
}
.gnb > li .dropdown{opacity:1;visibility;transform(0);}
.dropdown a{
display;padding:10px 20px;
color(--text-muted);font-size:0.95rem;
font-weight:600;
text-decoration;transition .2s;
}
.dropdown a{color(--accent);background(--bg-gray);}

.nav-right{display;align-items;gap:20px;}
.nav-tel{font-size:0.95rem;color(--text-muted);font-weight:600;}
.nav-tel span{color(--accent);font-weight:800;}
.nav-cta{
background(--dark-blue);
color:#fff;padding:10px 20px;border-radius:6px;
font-size:0.9rem;font-weight:700;text-decoration;
transition .2s;
}
.nav-cta{background(--accent);}

/* 📄 PAGE SYSTEM */
.page{display;min-height:100vh;padding-top:72px;}
.page.active{display;}

.page-banner{
position;z-index:1;
padding:80px 40px 60px;
background: var(--bg-banner);
overflow;
}
.page-banner h1{
font-size(2.2rem,4vw,3rem);font-weight:800;
color:#ffffff;letter-spacing:-0.03em;margin-bottom:16px;
}
.page-banner p{color:#94a3b8;font-size:1.1rem;font-weight:500;max-width:720px;}
.page-banner .breadcrumb{font-size:0.85rem;color:#64748b;margin-bottom:12px;font-weight:700;}
.page-banner .breadcrumb span{color:#fff;}

/* 🏢 COMMON SECTION */
.sec{position;z-index:1;padding:100px 40px;}
.sec-label{font-family:'Plus Jakarta Sans', sans-serif;font-size:0.8rem;letter-spacing:1.5px;text-transform;color(--accent);margin-bottom:12px;font-weight:700;}
.sec-title{font-size(1.8rem,3vw,2.5rem);font-weight:800;color(--text-main);margin-bottom:16px;letter-spacing:-0.03em;line-height:1.3;}
.sec-desc{color(--text-light);font-size:1.05rem;line-height:1.7;max-width:680px;font-weight:500;}
.inner{max-width:1200px;margin:0 auto;}

.btn-p{background(--accent);color:#fff;padding:14px 32px;border-radius:6px;text-decoration;font-weight:700;font-size:1rem;transition .2s;display;border;cursor;text-align;}
.btn-p{background(--bright);}
.btn-o{border:1px solid var(--border);color(--text-muted);padding:14px 32px;border-radius:6px;text-decoration;font-weight:700;font-size:1rem;transition .2s;display;background:#ffffff;text-align;}
.btn-o{background(--bg-gray);border-color:#cbd5e1;}

.card {
background(--card-bg);
border:1px solid var(--border);
border-radius:12px;padding:36px;
box-shadow:0 4px 12px var(--shadow);
transition .25s;
}
.card{border-color:#cbd5e1; transform(-4px); box-shadow:0 12px 24px rgba(15, 23, 42, 0.08);}

/* 🏠 HOME PAGE HERO AREA */
#page-home .hero{
position;z-index:1;
min-height(100vh - 72px);
display;align-items;
padding:80px 40px;
background-image: url('../images/hero.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-color: #060b19;
}

#page-home .hero::before {
content: '';
position: absolute;
inset: 0;
background: linear-gradient(to right, rgba(6, 11, 25, 0.25) 0%, rgba(6, 11, 25, 0.15) 40%, rgba(6, 11, 25, 0.05) 100%);
z-index: 1;
}
.hero-grid{
position;inset:0;
background-image(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);
background-size:60px 60px;
mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
-webkit-mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
z-index: 2;
}

.hero-content{
position;
max-width:820px;
z-index:3;
padding-left: 20px;
}

.hero-badge{
display;
align-items;
gap:8px;
background(10, 17, 40, 0.4);
border:1px solid rgba(255,255,255,.2);
padding:6px 16px;
border-radius:30px;
font-size:0.8rem;
color:#cbd5e1;
letter-spacing:0.5px;
margin-bottom:24px;
font-weight:700;
}

.hero-title{font-size(2.2rem, 4.5vw, 3.6rem);font-weight:800;line-height:1.25;color:#ffffff;letter-spacing:-0.04em;margin-bottom:24px;text-shadow: 0 2px 10px rgba(0,0,0,0.3);}
.hero-title .hl{color:#38bdf8; background; -webkit-background-clip; -webkit-text-fill-color; font-weight:900;}

.hero-sub{font-size:1.2rem;color:#ffffff;line-height:1.7;margin-bottom:40px;font-weight:500;text-shadow: 0 2px 8px rgba(0,0,0,0.3);}
.hero-btns{display;gap:12px;}
.hero-btns .btn-p {background: var(--bright);}

.hero-btns .btn-o {background: rgba(10, 17, 40, 0.45); color: #fff; border-color: rgba(255,255,255,.2); text-shadow: none;}
.hero-btns .btn-o {background: rgba(10, 17, 40, 0.65);}

.hero-stats{
position;right:40px;bottom:40px;
display;gap:48px;
z-index: 3;
}
.stat-num{font-family:'Plus Jakarta Sans',sans-serif;font-size:2.8rem;font-weight:800;color:#ffffff;line-height:1;}
.stat-label{font-size:0.85rem;color:#64748b;margin-top:6px;font-weight:600;}

/* 🏢 핵심 서비스 카드 영역 */
.home-services{background(--bg-gray);border-bottom:1px solid var(--border);}
.svc-grid{display;grid-template-columns(3,1fr);gap:24px;margin-top:48px;}

.svc-card{
position;
background-size;
background-position;
background-repeat;
border;
overflow;
z-index:1;
display;
flex-direction;
min-height:400px;
padding: 40px 30px;
border-radius: 14px;
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
}

/* 🖼️ 서비스 카드 배경 이미지 매핑 */
.svc-card.bg-01 { background-image: url('../images/chatbot.jpg'); }
.svc-card.bg-02 { background-image: url('../images/viewstory_main.jpg'); }
.svc-card.bg-03 { background-image: url('../images/Mind-SAT.jpg'); }
.svc-card.bg-04 { background-image: url('../images/it_consulting.jpg'); }
.svc-card.bg-05 { background-image: url('../images/public_data.jpg'); }
.svc-card.bg-06 { background-image: url('../images/IT_Infrastructure.jpg'); }
.svc-card.bg-07 { background-image: url('../images/InfoSec.jpg'); }
.svc-card.bg-08 { background-image: url('../images/privacy.jpg'); }
.svc-card.bg-09 { background-image: url('../images/seminar.jpg'); }

.svc-card::before {
content: '';
position: absolute;
inset: 0;
background: linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(10, 17, 40, 0.75) 55%, rgba(10, 17, 40, 0.95) 100%);
z-index: -1;
transition: opacity 0.3s ease, background 0.3s ease;
}
.svc-card:hover::before {
background: linear-gradient(180deg, rgba(30, 111, 207, 0.45) 0%, rgba(10, 17, 40, 0.8) 55%, rgba(10, 17, 40, 0.98) 100%);
}

.svc-num{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.1rem;font-weight:700;color(255,255,255,0.5);margin-bottom:12px;}
.svc-title{font-size:1.35rem;font-weight:800;color:#ffffff;margin-bottom:12px;letter-spacing:-0.5px;}
.svc-desc{font-size:0.95rem;color:#cbd5e1;line-height:1.6;margin-bottom:24px;word-break;}
.svc-tags{display;flex-wrap;gap:6px;margin-bottom:24px;margin-top;}

.svc-card .tag{
background: rgba(255, 255, 255, 0.12);
color: #ffffff;
font-size: 0.78rem;
padding: 5px 12px;
border-radius: 4px;
font-weight: 600;
border: 1px solid rgba(255, 255, 255, 0.2);
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
}

.svc-more{
display;
align-items;
justify-content;
gap:6px;
background: var(--accent);
color:#ffffff;
font-size:0.9rem;
font-weight:700;
padding:11px 24px;
border-radius:30px;
cursor;
border;
width: 100%;
transition 0.25s ease;
box-shadow: 0 4px 14px rgba(0,0,0,0.25);
}
.svc-more{background(--bright); transform(1.02); box-shadow: 0 6px 18px rgba(30, 111, 207, 0.4); }

.num-grid{display;grid-template-columns(4,1fr);gap:24px;margin-top:48px;}
.num-item{background:#ffffff;border:1px solid var(--border);border-radius:12px;padding:36px 24px;text-align;box-shadow:0 4px 12px var(--shadow);}
.num-big{font-family:'Plus Jakarta Sans',sans-serif;font-size:3rem;font-weight:800;color(--accent);line-height:1;margin-bottom:12px;}
.num-label{font-size:0.92rem;color(--text-muted);line-height:1.5;font-weight:700;}

/* 🏢 COMPANY PAGE */
.about-grid{display;grid-template-columns:1fr 1.2fr;gap:60px;align-items;}
.about-feat-grid{display;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px;}
.feat-card{background(--bg-gray);border:1px solid var(--border);border-radius:8px;padding:20px;}
.feat-icon{font-size:1.5rem;margin-bottom:8px;}
.feat-title{font-weight:700;font-size:1rem;margin-bottom:6px;color(--text-main);}
.feat-desc{font-size:0.88rem;color(--text-light);line-height:1.5;}

.timeline{position;margin-top:48px;padding-left:24px;}
.timeline::before{content:'';position;left:0;top:0;bottom:0;width:1px;background(--border);}
.tl-item{position;padding:0 0 32px 24px;}
.tl-dot{position;left:-4px;top:6px;width:9px;height:9px;background(--accent);border-radius:50%;}
.tl-year{font-size:1.15rem;font-weight:800;color(--accent);margin-bottom:6px;}
.tl-content{background:#ffffff;border:1px solid var(--border);border-radius:8px;padding:20px;}
.tl-content h4{font-size:1.05rem;font-weight:700;color(--text-main);margin-bottom:6px;}
.tl-content p{font-size:0.9rem;color(--text-light);line-height:1.6;}

/* 💼 BUSINESS PAGE */
.biz-tabs{display;gap:8px;border-bottom:1px solid var(--border);margin-bottom:48px;overflow-x;-webkit-overflow-scrolling;}
.biz-tabs::-webkit-scrollbar {display: none;}
.biz-tab{
padding:14px 20px;font-size:0.98rem;font-weight:700;
color(--text-light);border;background;cursor;
border-bottom:2px solid transparent;white-space;transition .2s;
}
.biz-tab.active,.biz-tab{color(--accent);border-bottom-color(--accent);}
.biz-panel{display;}
.biz-panel.active {display;}

.biz-detail{display;grid-template-columns:1fr 1.2fr;gap:48px;align-items;}
.biz-visual{
background:#ffffff;
border:1px solid var(--border);
border-radius:12px;overflow;height:320px;
display;align-items;justify-content;
}
.biz-visual img{width:100% !important;height:100% !important;object-fit !important;}

.biz-info h2{font-size:1.8rem;font-weight:800;color(--text-main);margin-bottom:16px;letter-spacing:-0.03em;}
.biz-info p{color(--text-light);font-size:1rem;line-height:1.7;margin-bottom:24px;}
.biz-list{list-style;display;flex-direction;gap:12px;margin-bottom:24px;}
.biz-list li{display;align-items;gap:10px;font-size:0.98rem;color(--text-muted);font-weight:600;}
.biz-list li::before{content:'';width:5px;height:5px;background(--accent);border-radius:50%;flex-shrink:0;}

/* 📈 PERFORMANCE PAGE & PREMIUM LOGO SHOWCASE */
.perf-stats{display;grid-template-columns(3,1fr);gap:20px;margin-bottom:48px;}
.perf-stat{background:#ffffff;border:1px solid var(--border);border-radius:12px;padding:28px;text-align;}
.perf-stat .big{font-family:'Plus Jakarta Sans',sans-serif;font-size:2.5rem;font-weight:800;color(--accent);line-height:1;}
.perf-stat .label{font-size:0.9rem;color(--text-muted);margin-top:6px;font-weight:600;}

.pf-filter{display;gap:6px;flex-wrap;margin-bottom:32px;}
.pf-btn{padding:8px 18px;border-radius:30px;border:1px solid var(--border);background:#ffffff;color(--text-muted);font-size:0.9rem;cursor;transition .2s;font-weight:600;}
.pf-btn.active,.pf-btn{background(--dark-blue);border-color(--dark-blue);color:#ffffff;}

.pf-grid{display;grid-template-columns(3,1fr);gap:20px;}
.pf-card{background:#ffffff;border:1px solid var(--border);border-radius:10px;padding:24px;}
.pf-year{font-size:0.85rem;color(--accent);font-weight:700;margin-bottom:8px;}
.pf-name{font-size:1rem;font-weight:700;color(--text-main);margin-bottom:8px;line-height:1.4;}
.pf-desc{font-size:0.88rem;color(--text-light);line-height:1.5;}
.pf-badge{display;background(--bg-gray);color(--text-muted);font-size:0.75rem;padding:3px 8px;border-radius:4px;font-weight:600;margin-top:12px;border:1px solid var(--border);}

.client-grid{display;grid-template-columns(4,1fr);gap:16px;margin-top:32px;}
.client-card{background:#ffffff;border:1px solid var(--border);border-radius:8px;padding:24px;text-align;}
.client-ico{font-size:1.8rem;margin-bottom:8px;}
.client-name{font-size:0.92rem;font-weight:700;color(--text-main);margin-bottom:4px;}
.client-type{font-size:0.82rem;color(--text-light);font-weight:500;}

/* 💎 프리미엄 리뉴얼 고객사 카드 시스템 테두리 및 효과 마감 */
.premium-client-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 10px; }
.premium-client-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px 20px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 12px rgba(0,0,0,0.01); position: relative; }
.premium-client-card { transform: translateY(-5px); border-color: #1e6fcf; box-shadow: 0 12px 24px rgba(30, 111, 207, 0.06); }
.premium-logo-wrap { width: 100%; height: 50px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; overflow: hidden; }
.premium-logo-wrap img { max-width: 85%; max-height: 100%; object-fit: contain; transition: filter 0.3s ease; }
.premium-client-card .p-client-name { font-size: 1rem; font-weight: 800; color: #1e6fcf; margin-bottom: 4px; }
.premium-client-card .p-client-type { font-size: 0.85rem; color: #64748b; font-weight: 600; }

/* 여백이 과도한 특정 로고(서울노동권익센터) 보정 치트키 */
.premium-client-card.labors-card .premium-logo-wrap img { max-width: 130% !important; transform: scale(1.3); }

/* 📞 CONTACT PAGE */
.contact-grid{display;grid-template-columns:1fr 1.2fr;gap:48px;align-items;}
.contact-info-cards{display;flex-direction;gap:12px;margin-top:24px;}
.ci-card{display;align-items;gap:16px;background:#ffffff;border:1px solid var(--border);border-radius:8px;padding:20px;}
.ci-ico{font-size:1.4rem;flex-shrink:0;}
.ci-label{font-size:0.8rem;color(--text-light);margin-bottom:2px;font-weight:600;}
.ci-val{font-size:0.98rem;color(--text-main);font-weight:700;}

.contact-form{background:#ffffff;border:1px solid var(--border);border-radius:12px;padding:36px;}
.form-row{display;grid-template-columns:1fr 1fr;gap:16px;}
.fg{margin-bottom:16px;}
.fg label{display;font-size:0.85rem;color(--text-main);margin-bottom:6px;font-weight:700;}
.fg input,.fg textarea,.fg select{
width:100%;background:#ffffff;border:1px solid var(--border);border-radius:6px;
padding:12px 14px;color(--text-main);font-family;font-size:0.95rem;outline;
}
.fg input,.fg textarea,.fg select{border-color(--accent);}
.fg textarea{height:100px;resize;}

.fg-privacy { margin-top: 16px; }
.privacy-box { background: var(--bg-gray); border: 1px solid var(--border); border-radius: 4px; padding: 10px; font-size: 0.8rem; color: var(--text-light); height: 70px; overflow-y: auto; margin-bottom: 8px; }
.privacy-check { display: flex; align-items: center; gap: 6px; font-size: 0.88rem; font-weight: 700; cursor: pointer; }

.submit-btn{ width:100%;background(--dark-blue);color:#fff;border;padding:14px;border-radius:6px;font-size:0.98rem;font-weight:700;cursor;transition .2s; }
.submit-btn{background(--accent);}

.map-wrap{margin-top:48px;border-radius:12px;overflow;border:1px solid var(--border);}
.map-wrap iframe{display;width:100%;height:340px;}
.map-info{background:#ffffff;padding:20px;display;flex-wrap;gap:16px;align-items;justify-content;}
.map-info-item{display;align-items;gap:8px;font-size:0.9rem;color(--text-muted);font-weight:600;}
.map-link{background(--bg-gray);color(--text-main);padding:10px 16px;border-radius:6px;text-decoration;font-size:0.85rem;font-weight:700;border:1px solid var(--border);}

/* 📋 FOOTER */
footer{
background(--bg-gray);
border-top:1px solid var(--border);
padding:0 40px;
padding-bottom: 24px;
}
.footer-top{display;grid-template-columns:1.5fr 1fr 1fr 1fr 1fr;gap:30px;padding:60px 0 32px;border-bottom:1px solid var(--border);}
.footer-brand .logo{display;align-items;gap:6px;font-size:1.3rem;font-weight:800;color(--dark-blue);margin-bottom:12px;}
.footer-brand p{font-size:0.9rem;color(--text-light);line-height:1.6;}
.footer-col h5{font-size:0.9rem;font-weight:700;color(--text-main);margin-bottom:14px;}
.footer-col a{display;font-size:0.88rem;color(--text-light);text-decoration;margin-bottom:10px;}
.footer-col a{color(--accent);}
.footer-bottom{display;justify-content;align-items;padding:20px 0;font-size:0.82rem;color(--text-light);}

/* 모바일 하단 플로팅 네비 바 기본 숨김 */
.mobile-quick-bar { display: none; }

/* 📱 MOBILE & TABLET RESPONSIVE DEEP REBUILD */
@media(max-width:960px){
nav { padding:0 20px; height:60px; }
.gnb, .nav-right { display; }
.sec, .page-banner { padding:56px 20px; }
.page { padding-top:60px; }

footer { padding: 0 20px; padding-bottom: 76px; }

#page-home .hero {
padding:60px 20px 80px;
min-height;
text-align: center;
}

#page-home .hero::before {
background: linear-gradient(to bottom, rgba(6, 11, 25, 0.3) 0%, rgba(6, 11, 25, 0.15) 100%);
}
.hero-content { margin:0 auto; padding-left: 0; }
.hero-badge { font-size:0.75rem; padding:4px 12px; margin-bottom:16px; }

.hero-title { font-size:1.85rem; line-height:1.3; margin-bottom:16px; word-break; text-shadow: 0 2px 8px rgba(0,0,0,0.4); }
.hero-sub { font-size:0.98rem; line-height:1.6; margin-bottom:28px; color: #ffffff; word-break; text-shadow: 0 2px 8px rgba(0,0,0,0.4); }
.hero-btns { flex-direction: column; gap:10px; max-width:320px; margin:0 auto; }
.hero-stats { display: none; }

.biz-tabs {
display: flex;
flex-wrap: wrap;
gap: 6px;
border-bottom: none;
margin-bottom: 32px;
}
.biz-tab {
flex: 1 1 calc(50% - 6px);
padding: 12px 10px;
font-size: 0.85rem;
text-align: center;
border: 1px solid var(--border);
border-radius: 6px;
background: #ffffff;
white-space: normal;
word-break: keep-all;
display: flex;
align-items: center;
justify-content: center;
height: 52px;
}
.biz-tab.active {
background: var(--accent);
color: #ffffff;
border-color: var(--accent);
}

.svc-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 32px; }
.svc-card { padding: 36px 24px 32px; min-height: 340px; border-radius: 12px; }
.svc-num { display: block; margin-bottom: 12px; }
.svc-title { font-size: 1.25rem; margin-bottom: 8px; font-weight: 800; }
.svc-desc { font-size: 0.9rem; line-height: 1.5; margin-bottom: 20px; }
.svc-card .tag { background(255,255,255,0.15); color:#ffffff; font-size:0.78rem; padding:4px 10px; border-radius:4px; font-weight:600; border:1px solid rgba(255,255,255,0.25); backdrop-filter: blur(2px); }
.svc-more { font-size: 0.85rem; width: 100%; padding: 12px; border-radius: 30px; }

.num-grid { grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 32px; }
.num-item { padding: 24px 16px; }
.num-big { font-size: 2.2rem; }
.num-label { font-size: 0.8rem; }

.about-grid, .contact-grid, .footer-top { grid-template-columns:1fr; gap:32px; }
.about-feat-grid { grid-template-columns:1fr; gap:12px; }
.pf-grid { grid-template-columns:1fr; gap:12px; }
.client-grid { grid-template-columns: 1fr 1fr; gap:10px; }
.perf-stats { grid-template-columns:1fr; gap:12px; margin-bottom:32px; }
.perf-stat { padding: 20px; }
.perf-stat .big { font-size: 2.2rem; }

/* ========================================================
[보정 완료] 모바일 화면 사업영역 이미지 가로 100% 비율 매핑 규칙
======================================================== /
.biz-detail {
display: flex;
flex-direction: column;
gap: 24px;
}
.biz-visual {
width: 100% !important;
height: auto !important; / 찌그러짐을 유발하던 고정높이 200px 원천 제거 /
max-height: 260px;
background: none !important;
border-radius: 12px;
overflow: hidden;
border: 1px solid var(--border);
}
.biz-visual img {
width: 100% !important;
height: auto !important;
max-height: 260px;
object-fit: cover !important; / 양옆 빈 공간을 삭제하고 가로로 꽉 차게 조율 */
display: block;
}

/* 주요 고객사 스마트폰 미디어 쿼리 최적화 대응 */
.premium-client-grid { grid-template-columns: 1fr !important; gap: 16px; }

.contact-form { padding: 24px 16px; }
.form-row { grid-template-columns: 1fr; gap: 0; }
.map-info { padding: 16px; flex-direction: column; align-items: stretch; gap: 12px; }
.map-link { text-align: center; }
.footer-bottom { flex-direction: column; gap: 6px; text-align: left; align-items: flex-start; }

/* 모바일 플로팅 퀵바 */
.mobile-quick-bar {
position: fixed; bottom: 0; left: 0; right: 0; height: 62px;
background: rgba(255, 255, 255, 0.96);
backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
border-top: 1px solid var(--border);
display: flex; z-index: 1000;
}
.quick-item {
flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
color: var(--text-muted); text-decoration: none; font-size: 0.72rem; font-weight: 600; gap: 2px;
}
.quick-item span.ico { font-size: 1.15rem; }
.quick-item.active { color: var(--accent); }

.quick-item.highlight {
background: #f59e0b;
color: #ffffff;
transition: background 0.2s;
}
.quick-item.highlight {
background: #f59e0b;
}

.quick-space-holder {
flex: 1;
pointer-events: none;
background: transparent;
}

iframe[id^="deepsecu-chatbot"] ,
div[class*="chatbot"] ,
#deepsecu-chat-widget,
.deepsecu-launcher {
bottom: 0px !important;
right: 0px !important;
left: 80vw !important;
width: 20vw !important;
height: 62px !important;
display: flex !important;
align-items: center !important;
justify-content: center !important;
z-index: 1010 !important;
}
}

/* 제품소개 스크린샷 이미지 왜곡 방지 */
#page-product .biz-visual img.chatbot-img {
width: 100% !important;
height: 100% !important;
object-fit: contain !important;
background-color: #ffffff;
padding: 10px;
margin: 0 auto;
}

/* 스마트폰 디바이스 전용 이미지 컴팩트 보정 */
@media (max-width: 640px) {
.client-logo-interactive-grid { grid-template-columns: repeat(2, 1fr); }
.biz-visual img { max-height: 200px; }
}
