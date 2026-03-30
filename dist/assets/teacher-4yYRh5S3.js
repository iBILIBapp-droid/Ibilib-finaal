import{s as x,w as _,f as A,R as P}from"./auth-BTHcuP9K.js";import{m as R}from"./AuthBar-CoTwa9Ri.js";const j=["student","teacher","private"],f={student:{label:"Student",color:"#22d3ee",bg:"rgba(34,211,238,.13)",icon:"🎓"},teacher:{label:"Teacher",color:"#a78bfa",bg:"rgba(167,139,250,.13)",icon:"📖"},private:{label:"Private",color:"#fbbf24",bg:"rgba(251,191,36,.13)",icon:"🔒"},unknown:{label:"Unknown",color:"#6b7280",bg:"rgba(107,114,128,.13)",icon:"❓"}};let c=[],w=[],M="all",v="",g=null,E=!1,$;function h(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function H(){document.getElementById("am-styles")||document.head.insertAdjacentHTML("beforeend",`<style id="am-styles">
  #am-nav-btn{display:flex;align-items:center;gap:6px;padding:7px 15px;background:rgba(167,139,250,.13);border:1px solid rgba(167,139,250,.28);border-radius:50px;color:#c4b5fd;font-family:'DM Sans','Inter',sans-serif;font-size:13px;font-weight:500;cursor:pointer;backdrop-filter:blur(16px);transition:background .2s,border-color .2s,transform .15s;white-space:nowrap;flex-shrink:0}
  #am-nav-btn:hover{background:rgba(167,139,250,.24);border-color:rgba(167,139,250,.5);transform:translateY(-1px)}
  @media(max-width:768px){#am-nav-btn span{display:none}#am-nav-btn{padding:8px;border-radius:50%;width:38px;height:38px;justify-content:center}}
  #am-overlay{position:fixed;inset:0;z-index:99990;background:rgba(8,4,20,.78);backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:16px;opacity:0;transition:opacity .3s cubic-bezier(.4,0,.2,1);pointer-events:none}
  #am-overlay.am-open{opacity:1;pointer-events:all}
  #am-modal{background:#150e2a;border:1px solid rgba(167,139,250,.18);border-radius:24px;box-shadow:0 32px 80px rgba(0,0,0,.65),0 0 0 1px rgba(255,255,255,.04);width:100%;max-width:820px;max-height:90vh;display:flex;flex-direction:column;transform:translateY(18px) scale(.97);transition:transform .35s cubic-bezier(.22,1,.36,1);overflow:hidden}
  #am-overlay.am-open #am-modal{transform:translateY(0) scale(1)}
  .am-header{display:flex;align-items:center;gap:14px;padding:22px 24px 18px;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0}
  .am-header-icon{width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#a855f7);display:grid;place-items:center;flex-shrink:0}
  .am-header-titles{flex:1;min-width:0}
  .am-header-titles h2{margin:0;font-family:'Syne',sans-serif;font-size:18px;font-weight:700;color:#f1e9ff}
  .am-header-titles p{margin:4px 0 0;font-size:13px;color:rgba(241,233,255,.5)}
  .am-close{width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:rgba(241,233,255,.6);cursor:pointer;display:grid;place-items:center;transition:background .2s,color .2s;flex-shrink:0}
  .am-close:hover{background:rgba(248,113,113,.15);color:#fca5a5;border-color:rgba(248,113,113,.3)}
  .am-toolbar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:14px 24px;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0}
  .am-search-wrap{flex:1;min-width:180px;display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:50px;padding:8px 14px}
  .am-search-wrap svg{opacity:.45;flex-shrink:0}
  .am-search-wrap input{border:none;background:transparent;outline:none;color:#f1e9ff;font-size:13px;font-family:'DM Sans',sans-serif;width:100%}
  .am-search-wrap input::placeholder{color:rgba(241,233,255,.3)}
  .am-filter-pills{display:flex;gap:6px;flex-wrap:wrap}
  .am-pill{padding:6px 13px;border-radius:50px;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;cursor:pointer;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:rgba(241,233,255,.55);transition:background .18s,color .18s,border-color .18s;white-space:nowrap}
  .am-pill.active,.am-pill:hover{background:rgba(167,139,250,.18);color:#c4b5fd;border-color:rgba(167,139,250,.35)}
  .am-count-badge{margin-left:4px;padding:1px 6px;border-radius:50px;background:rgba(167,139,250,.2);color:#c4b5fd;font-size:11px;font-weight:700}
  .am-refresh-btn{width:34px;height:34px;border-radius:50%;flex-shrink:0;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:rgba(241,233,255,.6);cursor:pointer;display:grid;place-items:center;transition:background .18s}
  .am-refresh-btn:hover{background:rgba(167,139,250,.18);color:#c4b5fd}
  .am-refresh-btn.spinning svg{animation:am-spin .7s linear infinite}
  @keyframes am-spin{to{transform:rotate(360deg)}}
  .am-table-wrap{flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:rgba(167,139,250,.3) transparent}
  .am-table-wrap::-webkit-scrollbar{width:5px}
  .am-table-wrap::-webkit-scrollbar-thumb{background:rgba(167,139,250,.3);border-radius:50px}
  .am-state{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:52px 24px;color:rgba(241,233,255,.4);font-family:'DM Sans',sans-serif;font-size:14px}
  .am-spinner{width:32px;height:32px;border-radius:50%;border:3px solid rgba(167,139,250,.2);border-top-color:#a855f7;animation:am-spin .7s linear infinite}
  .am-account-row{display:flex;align-items:center;gap:14px;padding:13px 24px;border-bottom:1px solid rgba(255,255,255,.05);transition:background .15s}
  .am-account-row:last-child{border-bottom:none}
  .am-account-row:hover{background:rgba(255,255,255,.03)}
  .am-avatar{width:38px;height:38px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#7c3aed,#a855f7);display:grid;place-items:center;font-size:13px;font-weight:700;color:#fff;letter-spacing:.5px}
  .am-info{flex:1;min-width:0}
  .am-name{font-family:'Syne',sans-serif;font-size:14px;font-weight:600;color:#f1e9ff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .am-sub{font-size:11px;color:rgba(241,233,255,.32);margin-top:3px;font-family:monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .am-role-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:50px;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;flex-shrink:0}
  .am-role-select-wrap{flex-shrink:0}
  .am-role-select{appearance:none;-webkit-appearance:none;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:50px;padding:7px 32px 7px 13px;color:#f1e9ff;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;cursor:pointer;outline:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='rgba(241,233,255,.5)' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;transition:border-color .2s,background-color .2s}
  .am-role-select:hover{border-color:rgba(167,139,250,.4);background-color:rgba(167,139,250,.1)}
  .am-role-select:focus{border-color:#a855f7}
  .am-role-select option{background:#1a1030;color:#f1e9ff}
  .am-footer{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;padding:12px 24px;border-top:1px solid rgba(255,255,255,.06);flex-shrink:0}
  .am-footer-stats{font-size:12px;color:rgba(241,233,255,.4);font-family:'DM Sans',sans-serif}
  .am-footer-stats strong{color:#c4b5fd}
  .am-toast{padding:8px 16px;border-radius:50px;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;opacity:0;transition:opacity .3s;pointer-events:none}
  .am-toast.show{opacity:1}
  .am-toast.ok{background:rgba(34,197,94,.15);color:#4ade80;border:1px solid rgba(34,197,94,.25)}
  .am-toast.err{background:rgba(248,113,113,.15);color:#fca5a5;border:1px solid rgba(248,113,113,.25)}
  #am-confirm{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(8,4,20,.6);backdrop-filter:blur(4px);opacity:0;pointer-events:none;transition:opacity .25s}
  #am-confirm.open{opacity:1;pointer-events:all}
  .am-confirm-box{background:#1e1340;border:1px solid rgba(167,139,250,.22);border-radius:20px;padding:28px;max-width:400px;width:100%;box-shadow:0 24px 60px rgba(0,0,0,.5);transform:scale(.94);transition:transform .28s cubic-bezier(.22,1,.36,1);text-align:center}
  #am-confirm.open .am-confirm-box{transform:scale(1)}
  .am-confirm-icon{font-size:40px;margin-bottom:12px;display:block}
  .am-confirm-box h3{margin:0 0 8px;font-family:'Syne',sans-serif;font-size:18px;color:#f1e9ff}
  .am-confirm-box p{margin:0 0 22px;font-size:13px;color:rgba(241,233,255,.55);line-height:1.6}
  .am-confirm-actions{display:flex;gap:10px;justify-content:center}
  .am-confirm-cancel{padding:9px 22px;border-radius:50px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.07);color:rgba(241,233,255,.7);font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;cursor:pointer;transition:background .18s}
  .am-confirm-cancel:hover{background:rgba(255,255,255,.12)}
  .am-confirm-ok{padding:9px 22px;border-radius:50px;border:none;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 4px 16px rgba(124,58,237,.35);transition:transform .15s,box-shadow .15s}
  .am-confirm-ok:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(124,58,237,.5)}
  .am-confirm-ok:disabled{opacity:.5;cursor:not-allowed;transform:none}
  .am-no-profile{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:50px;background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.25);color:#fbbf24;font-size:10px;font-weight:600;font-family:'DM Sans',sans-serif;margin-left:6px;vertical-align:middle}
  </style>`)}function D(){document.body.insertAdjacentHTML("beforeend",`
  <div id="am-overlay" role="dialog" aria-modal="true" aria-labelledby="am-title">
    <div id="am-modal">
      <div class="am-header">
        <div class="am-header-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div class="am-header-titles">
          <h2 id="am-title">Account Manager</h2>
          <p>View and manage roles for all registered accounts</p>
        </div>
        <button class="am-close" id="am-close-btn" aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="am-toolbar">
        <div class="am-search-wrap">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" id="am-search" placeholder="Search by name or email…" autocomplete="off" spellcheck="false">
        </div>
        <div class="am-filter-pills">
          <button class="am-pill active" data-role="all">All <span class="am-count-badge" id="am-cnt-all">0</span></button>
          <button class="am-pill" data-role="student">🎓 Students <span class="am-count-badge" id="am-cnt-student">0</span></button>
          <button class="am-pill" data-role="teacher">📖 Teachers <span class="am-count-badge" id="am-cnt-teacher">0</span></button>
          <button class="am-pill" data-role="private">🔒 Private <span class="am-count-badge" id="am-cnt-private">0</span></button>
        </div>
        <button class="am-refresh-btn" id="am-refresh-btn" title="Refresh">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
        </button>
      </div>
      <div class="am-table-wrap" id="am-table-wrap">
        <div class="am-state"><div class="am-spinner"></div><span>Loading accounts…</span></div>
      </div>
      <div class="am-footer">
        <span class="am-footer-stats" id="am-footer-stats">–</span>
        <span class="am-toast" id="am-toast"></span>
      </div>
    </div>
  </div>
  <div id="am-confirm">
    <div class="am-confirm-box">
      <span class="am-confirm-icon">🔄</span>
      <h3>Change Role?</h3>
      <p id="am-confirm-msg"></p>
      <div class="am-confirm-actions">
        <button class="am-confirm-cancel" id="am-confirm-cancel">Cancel</button>
        <button class="am-confirm-ok" id="am-confirm-ok">Apply Change</button>
      </div>
    </div>
  </div>`)}async function z(){try{const{data:{session:a}}=await x.auth.getSession();if(!a)return!1;const{data:e}=await x.from("profiles").select("role").eq("id",a.user.id).single();return((e==null?void 0:e.role)??"").toLowerCase()==="private"}catch{return!1}}function U(){const a=document.getElementById("am-nav-btn");a&&a.remove();const e=document.createElement("button");e.id="am-nav-btn",e.className="dropdown-item",e.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>Account Manager</span>',e.addEventListener("click",n=>{var r;n.stopPropagation(),(r=document.getElementById("_user-dropdown"))==null||r.classList.remove("open"),C()});const t=document.getElementById("_user-menu-items");t?t.appendChild(e):console.warn("[AccountManager] _user-menu-items not found, skipping dropdown mount");const i=document.getElementById("mobile-menu");if(i&&!document.getElementById("am-mob-link")){const n=document.createElement("a");n.id="am-mob-link",n.className="mob-link",n.style.cursor="pointer",n.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Account Manager',n.addEventListener("click",()=>{i.classList.add("hidden"),C()}),i.appendChild(n)}}async function C(){var e;await z()&&((e=document.getElementById("am-overlay"))==null||e.classList.add("am-open"),document.body.style.overflow="hidden",B())}function L(){var a;(a=document.getElementById("am-overlay"))==null||a.classList.remove("am-open"),document.body.style.overflow=""}async function B(){var t,i,n;const a=document.getElementById("am-table-wrap"),e=document.getElementById("am-refresh-btn");e.classList.add("spinning"),a.innerHTML='<div class="am-state"><div class="am-spinner"></div><span>Loading accounts…</span></div>';try{let r="",l="",o="";try{const{data:{session:s}}=await x.auth.getSession();s&&(r=s.user.id,l=s.user.email??"",o=((t=s.user.user_metadata)==null?void 0:t.full_name)??((i=s.user.user_metadata)==null?void 0:i.name)??"")}catch{}const{data:d,error:p}=await x.from("profiles").select("id, role, full_name").order("full_name",{ascending:!0,nullsFirst:!1});if(p)throw p;c=(d??[]).map(s=>{const m=s.id===r,u=s.full_name??(m?o:"")??`User ${s.id.slice(0,6)}`,b=m?l:"";return{id:s.id,name:u.trim()||"Unnamed",email:b,role:(s.role??"student").toLowerCase(),hasProfile:!0}}),r&&!c.find(s=>s.id===r)&&c.unshift({id:r,name:o||l.split("@")[0]||"You",email:l,role:"teacher",hasProfile:!1}),c.sort((s,m)=>{const u=s.name.startsWith("User ")||s.name==="Unnamed",b=m.name.startsWith("User ")||m.name==="Unnamed";return u!==b?u?1:-1:s.name.localeCompare(m.name)}),T(),k(),y()}catch(r){a.innerHTML=`
      <div class="am-state">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fca5a5" stroke-width="1.8" stroke-linecap="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span style="color:#fca5a5;font-weight:600">Failed to load accounts</span>
        <span style="font-size:12px;opacity:.65;max-width:320px;text-align:center">${h(r.message)}</span>
        <button id="am-retry-btn" style="margin-top:8px;padding:8px 20px;border-radius:50px;border:1px solid rgba(167,139,250,.3);background:rgba(167,139,250,.1);color:#c4b5fd;font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif">Retry</button>
      </div>`,(n=document.getElementById("am-retry-btn"))==null||n.addEventListener("click",()=>void B())}finally{e.classList.remove("spinning")}}function q(){return c.filter(a=>{const e=M==="all"||a.role===M,t=!v||a.name.toLowerCase().includes(v)||a.email.toLowerCase().includes(v)||a.id.toLowerCase().includes(v);return e&&t})}function T(){const a=(e,t)=>{const i=document.getElementById(e);i&&(i.textContent=String(t))};a("am-cnt-all",c.length),a("am-cnt-student",c.filter(e=>e.role==="student").length),a("am-cnt-teacher",c.filter(e=>e.role==="teacher").length),a("am-cnt-private",c.filter(e=>e.role==="private").length)}function y(){const a=document.getElementById("am-footer-stats");if(!a)return;const e=c.filter(n=>n.role==="student").length,t=c.filter(n=>n.role==="teacher").length,i=c.filter(n=>n.role==="private").length;a.innerHTML=`Showing <strong>${w.length}</strong> of <strong>${c.length}</strong> &nbsp;·&nbsp; 🎓 ${e} &nbsp;📖 ${t} &nbsp;🔒 ${i}`}function k(){w=q();const a=document.getElementById("am-table-wrap");if(!w.length){a.innerHTML='<div class="am-state"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span>No accounts found</span></div>',y();return}a.innerHTML=w.map(e=>{const t=f[e.role]??f.unknown,i=e.name.replace(/^User /,"").split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2)||"?",n=e.email?h(e.email):`id: ${h(e.id.slice(0,8))}…`,r=e.hasProfile===!1?'<span class="am-no-profile">⚠ no profile row</span>':"",l=j.map(o=>{const d=f[o];return`<option value="${o}"${e.role===o?" selected":""}>${d.icon} ${d.label}</option>`}).join("");return`
      <div class="am-account-row">
        <div class="am-avatar">${i}</div>
        <div class="am-info">
          <div class="am-name">${h(e.name)}${r}</div>
          <div class="am-sub">${n}</div>
        </div>
        <span class="am-role-tag" style="color:${t.color};background:${t.bg};border:1px solid ${t.color}33">${t.icon} ${t.label}</span>
        <div class="am-role-select-wrap">
          <select class="am-role-select" data-id="${h(e.id)}" data-cur="${e.role}" data-has-profile="${e.hasProfile}">${l}</select>
        </div>
      </div>`}).join(""),a.querySelectorAll(".am-role-select").forEach(e=>{e.addEventListener("change",()=>N(e))}),y()}function N(a){var p;const e=a.dataset.id,t=a.dataset.cur,i=a.value,n=a.dataset.hasProfile!=="false";if(i===t)return;const r=c.find(s=>s.id===e);if(!r)return;g={id:e,name:r.name,oldRole:t,newRole:i,hasProfile:n,selectEl:a};const l=f[t]??f.unknown,o=f[i]??f.unknown,d=document.getElementById("am-confirm-msg");d.innerHTML=`Change <strong>${h(r.name)}</strong>'s role from<br>
    <span style="color:${l.color}">${l.icon} ${l.label}</span>
    &nbsp;→&nbsp;
    <span style="color:${o.color}">${o.icon} ${o.label}</span>`,(p=document.getElementById("am-confirm"))==null||p.classList.add("open")}function S(){var a;g&&(g.selectEl.value=g.oldRole,g=null),(a=document.getElementById("am-confirm"))==null||a.classList.remove("open")}async function O(){var l;if(!g||E)return;E=!0;const a=document.getElementById("am-confirm-ok");a.disabled=!0,a.textContent="Saving…";const{id:e,name:t,oldRole:i,newRole:n,selectEl:r}=g;try{const o=c.find(b=>b.id===e),{error:d}=await x.from("profiles").upsert({id:e,role:n,full_name:(o==null?void 0:o.name)??null},{onConflict:"id"}).select();if(d)throw d;const{data:p,error:s}=await x.from("profiles").select("role").eq("id",e).single();if(s)throw s;if(((p==null?void 0:p.role)??"").toLowerCase()!==n)throw new Error("RLS policy is blocking the write. Run the policy fix in Supabase SQL Editor.");const m=c.find(b=>b.id===e);m&&(m.role=n,m.hasProfile=!0),r.dataset.cur=n,r.dataset.hasProfile="true",T(),k(),y();const u=f[n]??f.unknown;I(`✓ ${t} → ${u.icon} ${u.label}`,"ok")}catch(o){r.value=i,I(`✗ ${o.message}`,"err"),console.error("[AccountManager] role update failed:",o)}finally{E=!1,g=null,a.disabled=!1,a.textContent="Apply Change",(l=document.getElementById("am-confirm"))==null||l.classList.remove("open")}}function I(a,e="ok"){const t=document.getElementById("am-toast");t.textContent=a,t.className=`am-toast ${e} show`,clearTimeout(t._timer),t._timer=setTimeout(()=>t.classList.remove("show"),3500)}async function Y(){var e,t,i,n,r,l;H(),D(),(e=document.getElementById("am-close-btn"))==null||e.addEventListener("click",L),(t=document.getElementById("am-overlay"))==null||t.addEventListener("click",o=>{o.target.id==="am-overlay"&&L()}),(i=document.getElementById("am-refresh-btn"))==null||i.addEventListener("click",()=>void B()),(n=document.getElementById("am-search"))==null||n.addEventListener("input",o=>{clearTimeout($),$=setTimeout(()=>{v=o.target.value.trim().toLowerCase(),k()},180)}),document.querySelectorAll(".am-pill").forEach(o=>{o.addEventListener("click",()=>{M=o.dataset.role??"all",document.querySelectorAll(".am-pill").forEach(d=>d.classList.toggle("active",d===o)),k()})}),(r=document.getElementById("am-confirm-cancel"))==null||r.addEventListener("click",S),(l=document.getElementById("am-confirm-ok"))==null||l.addEventListener("click",()=>void O()),document.addEventListener("keydown",o=>{var d;if(o.key==="Escape"){if((d=document.getElementById("am-confirm"))!=null&&d.classList.contains("open")){S();return}L()}}),await z()&&U()}(async()=>{try{const{data:{session:a}}=await x.auth.getSession();if(!a)return;R(a.user),_(()=>A(()=>window.location.replace(P.login))),await Y()}catch{}})();
