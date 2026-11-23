
/* ── 파티클 캔버스 효과 제어 ── */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let pts = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class P {
    constructor() { this.r(); }
    r() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.sz = Math.random() * 1.2 + .3;
        this.vx = (Math.random()-.5) * .2;
        this.vy = (Math.random()-.5) * .2;
        this.a = Math.random() * .2 + .05;
    }
    upd() {
        this.x += this.vx;
        this.y += this.vy;
        if(this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.r();
    }
    drw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30,111,207,${this.a})`;
        ctx.fill();
    }
}

for(let i = 0; i < 60; i++) pts.push(new P());

function anim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => { p.upd(); p.drw(); });
    for(let i = 0; i < pts.length; i++) {
        for(let j = i + 1; j < pts.length; j++) {
            const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx*dx + dy*dy);
            if(d < 80) {
                ctx.beginPath();
                ctx.moveTo(pts[i].x, pts[i].y);
                ctx.lineTo(pts[j].x, pts[j].y);
                ctx.strokeStyle = `rgba(30,111,207,${.05 * (1 - d/80)})`;
                ctx.lineWidth = .5;
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(anim);
}
anim();

/* ── 메인 페이지/레이어 전환 로직 ── */
function showPage(id, sub) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 전문 컨설팅 기본 화면: 정보보안 컨설팅
    if(id === 'business') switchBizTab(typeof sub === 'number' ? sub : 3);
    if(id === 'company' && sub) switchCompanyTab(null, sub);
    if(id === 'performance' && sub) switchPerfTab(null, sub);
    if(id === 'contact' && sub === 'location') {
        setTimeout(() => {
            document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    }

    // GNB 네비게이션 활성화 처리
    document.querySelectorAll('.gnb > li > a').forEach(a => a.classList.remove('active'));

    const map = {
        company: '회사소개',
        product: '솔루션 및 서비스',
        business: '전문 컨설팅',
        performance: '수행실적',
        contact: '문의하기'
    };

    if(map[id]) {
        document.querySelectorAll('.gnb > li > a').forEach(a => {
            if(a.textContent.trim() === map[id]) a.classList.add('active');
        });
    }

    // 모바일 하단 플로팅 퀵바 상태 동기화
    document.querySelectorAll('.quick-item').forEach(item => item.classList.remove('active'));

    if(id === 'home') document.getElementById('m-btn-home')?.classList.add('active');
    if(id === 'product') document.getElementById('m-btn-prod')?.classList.add('active');
    if(id === 'business') document.getElementById('m-btn-biz')?.classList.add('active');
    if(id === 'contact') document.getElementById('m-btn-contact')?.classList.add('active');
}

/* ── 내부 세부 서브 탭 전환 함수군 ── */
function switchBizTab(idx) {
    const tabs = document.querySelectorAll('#bizTabs .biz-tab');
    const panels = document.querySelectorAll('#page-business [id^="bp"]');

    // 탭의 표시 순서가 바뀌어도 원래 상세페이지와 연결되도록 처리
    tabs.forEach(t => {
        t.classList.toggle('active', Number(t.dataset.bizIndex) === idx);
    });

    panels.forEach(p => {
        p.classList.toggle('active', p.id === 'bp' + idx);
    });
}

function switchCompanyTab(btn, id) {
    document.querySelectorAll('#page-company .biz-tab').forEach(t => t.classList.remove('active'));

    if(btn) btn.classList.add('active');
    else {
        document.querySelectorAll('#page-company .biz-tab').forEach(t => {
            if(t.textContent.includes(id === 'history' ? '걸어온' : '회사')) {
                t.classList.add('active');
            }
        });
    }

    document.getElementById('ctab-about').classList.toggle('active', id !== 'history');
    document.getElementById('ctab-history').classList.toggle('active', id === 'history');
}

function switchPerfTab(btn, id) {
    document.querySelectorAll('#page-performance .biz-tab').forEach(t => t.classList.remove('active'));

    if(btn) btn.classList.add('active');
    else {
        document.querySelectorAll('#page-performance .biz-tab').forEach(t => {
            if((id === 'clients' && t.textContent.includes('고객')) ||
               (id === 'records' && t.textContent.includes('실적'))) {
                t.classList.add('active');
            }
        });
    }

    document.getElementById('ptab-records').style.display = id === 'clients' ? 'none' : 'block';
    document.getElementById('ptab-clients').style.display = id === 'clients' ? 'block' : 'none';
}

function filterPf(btn, cat) {
    document.querySelectorAll('#pfFilter .pf-btn').forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    document.querySelectorAll('#pfGrid .pf-card').forEach(c => {
        c.style.display = (cat === 'all' || c.dataset.cat === cat) ? 'block' : 'none';
    });
}
