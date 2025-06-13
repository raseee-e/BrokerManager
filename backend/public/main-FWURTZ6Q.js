import"./chunk-S7IWAG76.js";import"./chunk-EMT64UJO.js";import"./chunk-6M3OYAIA.js";import"./chunk-TQHVSWNO.js";import{a as W}from"./chunk-MH4W7LBN.js";import{D as v,F as c,H as i,I as o,J as s,K as C,L as k,M as b,N as _,O as p,P as M,Q as r,S as O,Y as x,Z as S,ba as P,c as g,ia as y,k as d,ka as w,ma as I,na as L,p as h,pa as A,ra as E,t as u,ta as j,u as f,ua as U,va as R,wa as z,y as a,z as m}from"./chunk-6UB5JURL.js";var H=[{path:"",loadComponent:()=>import("./chunk-6RSIECBZ.js").then(n=>n.HomeComponent)},{path:"stocks",loadComponent:()=>import("./chunk-D3INBW7O.js").then(n=>n.StockListComponent)},{path:"stocks/:id",loadComponent:()=>import("./chunk-QR7JPKPL.js").then(n=>n.StockDetailsComponent)},{path:"register",loadComponent:()=>import("./chunk-E5BDS3QK.js").then(n=>n.UserRegisterComponent)},{path:"login",loadComponent:()=>import("./chunk-7VRDC5GK.js").then(n=>n.UserLoginComponent)},{path:"watchlist",loadComponent:()=>import("./chunk-KQEGKNOX.js").then(n=>n.WatchlistComponent)},{path:"myshares",loadComponent:()=>import("./chunk-DXT7BSVK.js").then(n=>n.MySharesComponent)}];var F={providers:[R(H),L()]};var T=(()=>{class n{constructor(){this.subject=new g}connect(){return(!this.ws||this.ws.readyState!==WebSocket.OPEN)&&(this.ws=new WebSocket("ws://localhost:3000"),this.ws.onmessage=e=>this.subject.next(JSON.parse(e.data)),this.ws.onclose=()=>this.subject.complete(),this.ws.onerror=e=>this.subject.error(e)),this.subject.asObservable()}send(e){this.ws?.send(JSON.stringify(e))}close(){this.ws?.close()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var $=()=>({exact:!0});function q(n,B){if(n&1){let e=b();C(0),i(1,"span",9)(2,"span",10),r(3,"account_circle"),o(),r(4),i(5,"a",11),_("click",function(){u(e);let l=p();return f(l.logout())}),r(6,"Logout"),o()(),k()}if(n&2){let e=p();a(4),O(" ",e.getUsername()," ")}}function G(n,B){n&1&&(i(0,"a",12),r(1,"Login"),o(),i(2,"a",13),r(3,"Register"),o())}var N=(()=>{class n{constructor(e,t){this.http=e,this.wsService=t,this.username=null,this.alertMessage=""}ngOnInit(){this.isLoggedIn()&&this.fetchUsername(),this.wsService.connect().subscribe({next:e=>{console.log("WebSocket message:",e),e.type,e.type==="stock-bought"&&this.showAlert(e.message)},error:e=>console.error("WebSocket error",e),complete:()=>console.log("WebSocket closed")})}showAlert(e){this.alertMessage=e,setTimeout(()=>this.alertMessage="",3e3)}isLoggedIn(){return!!localStorage.getItem("token")}getUsername(){return this.username||localStorage.getItem("username")||"Account"}fetchUsername(){let e=localStorage.getItem("token");e&&this.http.get("/api/users/me",{headers:{Authorization:`Bearer ${e}`}}).subscribe({next:t=>{this.username=t.username,localStorage.setItem("username",t.username)},error:()=>{this.username=null,localStorage.removeItem("token"),localStorage.removeItem("username")}})}logout(){localStorage.removeItem("token"),localStorage.removeItem("username"),window.location.href="/"}static{this.\u0275fac=function(t){return new(t||n)(m(I),m(T))}}static{this.\u0275cmp=h({type:n,selectors:[["app-root"]],standalone:!0,features:[x],decls:16,vars:5,consts:[["guestLinks",""],[1,"main-nav"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/stocks","routerLinkActive","active"],["routerLink","/myshares","routerLinkActive","active"],["routerLink","/watchlist","routerLinkActive","active"],[1,"nav-spacer"],[4,"ngIf","ngIfElse"],["type","info",3,"message"],[1,"account-info"],[1,"material-icons",2,"vertical-align","middle"],[1,"nav-btn","small-btn",2,"margin-left","0.5rem",3,"click"],["routerLink","/login","routerLinkActive","active",1,"nav-btn","small-btn"],["routerLink","/register","routerLinkActive","active",1,"nav-btn","small-btn"]],template:function(t,l){if(t&1&&(i(0,"nav",1)(1,"a",2),r(2,"Home"),o(),i(3,"a",3),r(4,"Stocks"),o(),i(5,"a",4),r(6,"My Shares"),o(),i(7,"a",5),r(8,"Watchlist"),o(),s(9,"span",6),v(10,q,7,1,"ng-container",7)(11,G,4,0,"ng-template",null,0,P),o(),i(13,"main"),s(14,"router-outlet"),o(),s(15,"app-alert",8)),t&2){let D=M(12);a(),c("routerLinkActiveOptions",S(4,$)),a(9),c("ngIf",l.isLoggedIn())("ngIfElse",D),a(5),c("message",l.alertMessage)}},dependencies:[w,y,z,E,j,U,W],styles:[".main-nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:2rem;background:#3f51b5;padding:1rem .5rem;margin-bottom:2rem;border-radius:0 0 1rem 1rem;position:relative}.main-nav[_ngcontent-%COMP%]   .nav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-weight:500;font-size:1.1rem;padding:.3rem 1rem;border-radius:.5rem;transition:background .2s}.main-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#283593}.nav-btn[_ngcontent-%COMP%]{cursor:pointer}",`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]})}}return n})();A(N,F).catch(n=>console.error(n));
