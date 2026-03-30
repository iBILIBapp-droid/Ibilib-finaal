import{s as h,f as w,R as b}from"./auth-BTHcuP9K.js";function f(d){var c,u,m;const l=document.getElementById("_user-dropdown");l&&l.remove();const o=((c=d.user_metadata)==null?void 0:c.full_name)??((u=d.email)==null?void 0:u.split("@")[0])??"User",v=o.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2),n=document.createElement("div");n.className="user-dropdown",n.id="_user-dropdown",n.innerHTML=`
    <div class="user-trigger" id="_user-trigger" title="Account settings">
      <div class="user-avatar-small">${v}</div>
      <div class="user-name-small">${o}</div>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="opacity:0.5;margin-left:-4px"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
    <div class="dropdown-menu" id="_user-menu">
      <div class="dropdown-header">
        <div class="dropdown-user-name">${o}</div>
        <div class="dropdown-user-role">${document.title.includes("Teacher")?"Teacher Portal":"Student Portal"}</div>
      </div>
      <div id="_user-menu-items">
        <!-- Other modules can inject items here -->
      </div>
      <button class="dropdown-item logout" id="_logout-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        <span>Logout</span>
      </button>
    </div>
  `;const r=document.getElementById("nav-actions")||document.querySelector(".nav-inner");r?r.appendChild(n):document.body.appendChild(n);const i=document.getElementById("_user-trigger");i==null||i.addEventListener("click",e=>{e.stopPropagation(),n.classList.toggle("open")}),document.addEventListener("click",e=>{n.contains(e.target)||n.classList.remove("open")});let a=!1;(m=document.getElementById("_logout-btn"))==null||m.addEventListener("click",async e=>{if(e.stopPropagation(),a)return;a=!0;const t=e.currentTarget;t.disabled=!0,t.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="animation:am-spin .7s linear infinite">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      <span>Signing out…</span>`;try{await h.auth.signOut()}catch{}w(()=>window.location.replace(b.login))});const s=document.getElementById("mobile-menu");if(s&&!document.getElementById("_mobile-logout-btn")){const e=document.createElement("div");e.className="dropdown-divider-mobile",e.style.margin="12px 16px",e.style.height="1px",e.style.background="rgba(255,255,255,0.08)";const t=document.createElement("a");t.id="_mobile-logout-btn",t.className="mob-link logout-mob",t.style.color="#f87171",t.innerHTML='<i data-lucide="log-out"></i>Logout',t.onclick=()=>{const p=document.getElementById("_logout-btn");p&&p.click()},s.appendChild(e),s.appendChild(t);const g=window;g.lucide&&g.lucide.createIcons()}}export{f as m};
