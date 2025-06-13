import"./chunk-RDTNBZD3.js";import"./chunk-EO2LWZ3B.js";import"./chunk-SXUKG5O4.js";import"./chunk-KIO6VCBJ.js";import"./chunk-3BNFZKGJ.js";import{C as h,E as c,G as o,H as e,I as m,J as v,K as f,L as C,M as _,N as p,O as k,P as i,R as M,X as x,Y as O,aa as b,ha as P,ja as y,la as S,ma as I,o as g,oa as L,qa as A,s,sa as w,t as d,ta as E,ua as U,va as R,x as a,y as u}from"./chunk-JK4GMMAI.js";var z=[{path:"",loadComponent:()=>import("./chunk-RTHS3IB4.js").then(n=>n.HomeComponent)},{path:"stocks",loadComponent:()=>import("./chunk-UAXFEJWL.js").then(n=>n.StockListComponent)},{path:"stocks/:id",loadComponent:()=>import("./chunk-SVUMGG4C.js").then(n=>n.StockDetailsComponent)},{path:"register",loadComponent:()=>import("./chunk-XXPIMQML.js").then(n=>n.UserRegisterComponent)},{path:"login",loadComponent:()=>import("./chunk-ZCWX43NR.js").then(n=>n.UserLoginComponent)},{path:"watchlist",loadComponent:()=>import("./chunk-7PKAXXU4.js").then(n=>n.WatchlistComponent)},{path:"myshares",loadComponent:()=>import("./chunk-Z2CIY7VA.js").then(n=>n.MySharesComponent)}];var j={providers:[U(z),I()]};var B=()=>({exact:!0});function D(n,F){if(n&1){let t=C();v(0),o(1,"span",8)(2,"span",9),i(3,"account_circle"),e(),i(4),o(5,"a",10),_("click",function(){s(t);let l=p();return d(l.logout())}),i(6,"Logout"),e()(),f()}if(n&2){let t=p();a(4),M(" ",t.getUsername()," ")}}function V(n,F){n&1&&(o(0,"a",11),i(1,"Login"),e(),o(2,"a",12),i(3,"Register"),e())}var H=(()=>{class n{constructor(t){this.http=t,this.username=null}ngOnInit(){this.isLoggedIn()&&this.fetchUsername()}isLoggedIn(){return!!localStorage.getItem("token")}getUsername(){return this.username||localStorage.getItem("username")||"Account"}fetchUsername(){let t=localStorage.getItem("token");t&&this.http.get("/api/users/me",{headers:{Authorization:`Bearer ${t}`}}).subscribe({next:r=>{this.username=r.username,localStorage.setItem("username",r.username)},error:()=>{this.username=null,localStorage.removeItem("token"),localStorage.removeItem("username")}})}logout(){localStorage.removeItem("token"),localStorage.removeItem("username"),window.location.href="/"}static{this.\u0275fac=function(r){return new(r||n)(u(S))}}static{this.\u0275cmp=g({type:n,selectors:[["app-root"]],standalone:!0,features:[x],decls:15,vars:4,consts:[["guestLinks",""],[1,"main-nav"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/stocks","routerLinkActive","active"],["routerLink","/myshares","routerLinkActive","active"],["routerLink","/watchlist","routerLinkActive","active"],[1,"nav-spacer"],[4,"ngIf","ngIfElse"],[1,"account-info"],[1,"material-icons",2,"vertical-align","middle"],[1,"nav-btn","small-btn",2,"margin-left","0.5rem",3,"click"],["routerLink","/login","routerLinkActive","active",1,"nav-btn","small-btn"],["routerLink","/register","routerLinkActive","active",1,"nav-btn","small-btn"]],template:function(r,l){if(r&1&&(o(0,"nav",1)(1,"a",2),i(2,"Home"),e(),o(3,"a",3),i(4,"Stocks"),e(),o(5,"a",4),i(6,"My Shares"),e(),o(7,"a",5),i(8,"Watchlist"),e(),m(9,"span",6),h(10,D,7,1,"ng-container",7)(11,V,4,0,"ng-template",null,0,b),e(),o(13,"main"),m(14,"router-outlet"),e()),r&2){let T=k(12);a(),c("routerLinkActiveOptions",O(3,B)),a(9),c("ngIf",l.isLoggedIn())("ngIfElse",T)}},dependencies:[y,P,R,A,w,E],styles:[".main-nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:2rem;background:#3f51b5;padding:1rem .5rem;margin-bottom:2rem;border-radius:0 0 1rem 1rem;position:relative}.main-nav[_ngcontent-%COMP%]   .nav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-weight:500;font-size:1.1rem;padding:.3rem 1rem;border-radius:.5rem;transition:background .2s}.main-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#283593}.nav-btn[_ngcontent-%COMP%]{cursor:pointer}",`[_nghost-%COMP%] {
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
  }`]})}}return n})();L(H,j).catch(n=>console.error(n));
