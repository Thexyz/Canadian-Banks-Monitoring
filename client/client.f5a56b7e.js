function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i;function c(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function l(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,p=!1;function m(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,a=(r>0&&t[n[r]].claim_order<=o?r+1:m(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[a]+1;const i=a+1;n[i]=e,r=Math.max(i,r)}const o=[],a=[];let i=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(a[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function w(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function $(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function S(){return E("")}function T(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:N(e,s,t[s])}function P(e){return Array.from(e.childNodes)}function I(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,s,r=!1){I(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function R(e,t,n,s){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function C(e,t,n){return R(e,t,n,_)}function O(e,t,n){return R(e,t,n,$)}function H(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function D(e){return H(e," ")}function U(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function M(e,t){const n=U(e,"HTML_TAG_START",0),s=U(e,"HTML_TAG_END",n);if(n===s)return new J(void 0,t);I(e);const r=e.splice(n,s-n+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new J(o,t)}function j(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function B(e,t){e.value=null==t?"":t}function G(e,t,n,s){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function z(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function q(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=z();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),v(n)}}function K(e,t){const n=[];let s=0;for(const r of t.childNodes)if(8===r.nodeType){const t=r.textContent.trim();t===`HEAD_${e}_END`?(s-=1,n.push(r)):t===`HEAD_${e}_START`&&(s+=1,n.push(r))}else s>0&&n.push(r);return n}class W{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=$(t.nodeName):this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class J extends W{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)w(this.t,this.n[t],e)}}function V(e,t){return new e(t)}function F(e){h=e}function Y(){if(!h)throw new Error("Function called outside component initialization");return h}function X(e){Y().$$.on_mount.push(e)}function Q(e){Y().$$.after_update.push(e)}function Z(e){Y().$$.on_destroy.push(e)}const ee=[],te=[],ne=[],se=[],re=Promise.resolve();let oe=!1;function ae(e){ne.push(e)}const ie=new Set;let ce=0;function le(){if(0!==ce)return;const e=h;do{try{for(;ce<ee.length;){const e=ee[ce];ce++,F(e),ue(e.$$)}}catch(e){throw ee.length=0,ce=0,e}for(F(null),ee.length=0,ce=0;te.length;)te.pop()();for(let e=0;e<ne.length;e+=1){const t=ne[e];ie.has(t)||(ie.add(t),t())}ne.length=0}while(ee.length);for(;se.length;)se.pop()();oe=!1,ie.clear(),F(e)}function ue(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}const de=new Set;let fe;function he(){fe={r:0,c:[],p:fe}}function pe(){fe.r||r(fe.c),fe=fe.p}function me(e,t){e&&e.i&&(de.delete(e),e.i(t))}function ge(e,t,n,s){if(e&&e.o){if(de.has(e))return;de.add(e),fe.c.push((()=>{de.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function be(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function we(e){return"object"==typeof e&&null!==e?e:{}}function ve(e){e&&e.c()}function ye(e,t){e&&e.l(t)}function _e(e,t,s,a){const{fragment:i,after_update:c}=e.$$;i&&i.m(t,s),a||ae((()=>{const t=e.$$.on_mount.map(n).filter(o);e.$$.on_destroy?e.$$.on_destroy.push(...t):r(t),e.$$.on_mount=[]})),c.forEach(ae)}function $e(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t){-1===e.$$.dirty[0]&&(ee.push(e),oe||(oe=!0,re.then(le)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(t,n,o,a,i,c,l,u=[-1]){const d=h;F(t);const f=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),m&&Ee(t,e)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){p=!0;const e=P(n.target);f.fragment&&f.fragment.l(e),e.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&me(t.$$.fragment),_e(t,n.target,n.anchor,n.customElement),p=!1,le()}F(d)}class Se{$destroy(){$e(this,1),this.$destroy=e}$on(t,n){if(!o(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Te=[];function Ae(t,n=e){let s;const r=new Set;function o(e){if(a(t,e)&&(t=e,s)){const e=!Te.length;for(const e of r)e[1](),Te.push(e,t);if(e){for(let e=0;e<Te.length;e+=2)Te[e][0](Te[e+1]);Te.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const c=[a,i];return r.add(c),1===r.size&&(s=n(o)||e),a(t),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Ne={};var ke={owner:"Thexyz",repo:"Canadian-Banks-Monitoring",sites:[{name:"Royal Bank of Canada",url:"https://www.rbcroyalbank.com"},{name:"Toronto-Dominion Bank",url:"https://www.td.com"},{name:"Bank of Nova Scotia",url:"https://www.scotiabank.com"},{name:"Bank of Montreal",url:"https://www.bmo.com"},{name:"CIBC",url:"https://www.cibc.com"},{name:"National Bank of Canada",url:"https://www.nbc.ca"},{name:"HSBC Canada",url:"https://www.hsbc.ca"},{name:"Laurentian Bank of Canada",url:"https://www.laurentianbank.ca"},{name:"Canadian Western Bank",url:"https://www.cwbank.com"}],"status-website":{cname:"ca.banks.downly.net",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Downly",introTitle:"Real-time uptime monitoring and status page of Canada's largest banks, powered by **[Downly](https://downly.net)**.",introMessage:"To see other available status pages using **real-time** data from [Downly](https://downly.net), visit the [**list of status pages**](https://wiki.downly.net/list-of-public-status-pages)",navbar:[{title:"Wiki",href:"https://wiki.downly.net"},{title:"Downly",href:"https://downly.net"}],"status-website":null,favicon:"https://github.com/Thexyz/downly/blob/master/assets/downly-favicon.png",faviconSvg:"https://raw.githubusercontent.com/Thexyz/downly/4171886168d7a52f776a983c2a540d327100a586/assets/downly.svg"},"user-agent":"thexyz",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All monitered services are currenly operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"✅ Up",down:"🚨 Down",degraded:"⚠️ Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This project is [open source]($REPO) and powered by [Downly](https://wiki.downly.net)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled",liveStatusHtmlComment:"\x3c!--live status--\x3e",degradedPerformance:"⚠️ Degraded performance",completeOutage:"🚨 Complete outage"},path:"https://ca.banks.downly.net"};function Pe(e,t,n){const s=e.slice();return s[1]=t[n],s}function Ie(t){let n,s,r,o=ke["status-website"]&&!ke["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=_("img"),this.h()},l(e){n=C(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=ke["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(e,t){w(e,n,t)},p:e,d(e){e&&v(n)}}}(),a=ke["status-website"]&&!ke["status-website"].hideNavTitle&&function(t){let n,s,r=ke["status-website"].name+"";return{c(){n=_("div"),s=E(r)},l(e){n=C(e,"DIV",{});var t=P(n);s=H(t,r),t.forEach(v)},m(e,t){w(e,n,t),g(n,s)},p:e,d(e){e&&v(n)}}}();return{c(){n=_("div"),s=_("a"),o&&o.c(),r=x(),a&&a.c(),this.h()},l(e){n=C(e,"DIV",{});var t=P(n);s=C(t,"A",{href:!0,class:!0});var i=P(s);o&&o.l(i),r=D(i),a&&a.l(i),i.forEach(v),t.forEach(v),this.h()},h(){N(s,"href",ke["status-website"].logoHref||ke.path),N(s,"class","logo svelte-a08hsz")},m(e,t){w(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(e,t){ke["status-website"]&&!ke["status-website"].hideNavLogo&&o.p(e,t),ke["status-website"]&&!ke["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&v(n),o&&o.d(),a&&a.d()}}}function Le(e){let t,n,s,r,o,a=e[1].title+"";return{c(){t=_("li"),n=_("a"),s=E(a),o=x(),this.h()},l(e){t=C(e,"LI",{});var r=P(t);n=C(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var i=P(n);s=H(i,a),i.forEach(v),o=D(r),r.forEach(v),this.h()},h(){N(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",e[1].href.replace("$OWNER",ke.owner).replace("$REPO",ke.repo)),N(n,"target",e[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(e,r){w(e,t,r),g(t,n),g(n,s),g(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(e){e&&v(t)}}}function Re(t){let n,s,r,o,a,i=ke["status-website"]&&ke["status-website"].logoUrl&&Ie(),c=ke["status-website"]&&ke["status-website"].navbar&&function(e){let t,n=ke["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Le(Pe(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);w(e,t,n)},p(e,r){if(1&r){let o;for(n=ke["status-website"].navbar,o=0;o<n.length;o+=1){const a=Pe(e,n,o);s[o]?s[o].p(a,r):(s[o]=Le(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){y(s,e),e&&v(t)}}}(t),l=ke["status-website"]&&ke["status-website"].navbarGitHub&&!ke["status-website"].navbar&&function(t){let n,s,r,o=ke.i18n.navGitHub+"";return{c(){n=_("li"),s=_("a"),r=E(o),this.h()},l(e){n=C(e,"LI",{});var t=P(n);s=C(t,"A",{href:!0,class:!0});var a=P(s);r=H(a,o),a.forEach(v),t.forEach(v),this.h()},h(){N(s,"href",`https://github.com/${ke.owner}/${ke.repo}`),N(s,"class","svelte-a08hsz")},m(e,t){w(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&v(n)}}}();return{c(){n=_("nav"),s=_("div"),i&&i.c(),r=x(),o=_("ul"),c&&c.c(),a=x(),l&&l.c(),this.h()},l(e){n=C(e,"NAV",{class:!0});var t=P(n);s=C(t,"DIV",{class:!0});var u=P(s);i&&i.l(u),r=D(u),o=C(u,"UL",{class:!0});var d=P(o);c&&c.l(d),a=D(d),l&&l.l(d),d.forEach(v),u.forEach(v),t.forEach(v),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){w(e,n,t),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,a),l&&l.m(o,null)},p(e,[t]){ke["status-website"]&&ke["status-website"].logoUrl&&i.p(e,t),ke["status-website"]&&ke["status-website"].navbar&&c.p(e,t),ke["status-website"]&&ke["status-website"].navbarGitHub&&!ke["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&v(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Ce(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Oe extends Se{constructor(e){super(),xe(this,e,Ce,Re,a,{segment:0})}}var He={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function De(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ue(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Me(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=He[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+De(Ue(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Me(De(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Ue(r[8])+'" alt="'+Ue(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ue(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Me(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Ue(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function je(e,t,n){const s=e.slice();return s[3]=t[n],s}function Be(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ge(e,t,n){const s=e.slice();return s[8]=t[n],s}function ze(t){let n;return{c(){n=_("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${ke.path}/themes/${(ke["status-website"]||{}).theme||"light"}.css`)},m(e,t){w(e,n,t)},p:e,d(e){e&&v(n)}}}function qe(t){let n;return{c(){n=_("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(ke["status-website"]||{}).themeUrl)},m(e,t){w(e,n,t)},p:e,d(e){e&&v(n)}}}function Ke(t){let n,s;return{c(){n=_("script"),this.h()},l(e){n=C(e,"SCRIPT",{src:!0}),P(n).forEach(v),this.h()},h(){c(n.src,s=t[8].src)||N(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){w(e,n,t)},p:e,d(e){e&&v(n)}}}function We(t){let n;return{c(){n=_("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){w(e,n,t)},p:e,d(e){e&&v(n)}}}function Je(t){let n;return{c(){n=_("meta"),this.h()},l(e){n=C(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){w(e,n,t)},p:e,d(e){e&&v(n)}}}function Ve(t){let n,s,r,o,a,i,c,u,d,f,h,p,m,b,$,E,T,A,k=Me(ke.i18n.footer.replace(/\$REPO/,`https://github.com/${ke.owner}/${ke.repo}`))+"",I=(ke["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(ke["status-website"]||{}).customHeadHtml+"";return{c(){n=new J(!1),s=S(),this.h()},l(e){n=M(e,!1),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),w(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}();let L=((ke["status-website"]||{}).themeUrl?qe:ze)(t),R=(ke["status-website"]||{}).scripts&&function(e){let t,n=(ke["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ke(Ge(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);w(e,t,n)},p(e,r){if(0&r){let o;for(n=(ke["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Ge(e,n,o);s[o]?s[o].p(a,r):(s[o]=Ke(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){y(s,e),e&&v(t)}}}(t),O=(ke["status-website"]||{}).links&&function(e){let t,n=(ke["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=We(Be(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);w(e,t,n)},p(e,r){if(0&r){let o;for(n=(ke["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Be(e,n,o);s[o]?s[o].p(a,r):(s[o]=We(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){y(s,e),e&&v(t)}}}(t),H=(ke["status-website"]||{}).metaTags&&function(e){let t,n=(ke["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=Je(je(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);w(e,t,n)},p(e,r){if(0&r){let o;for(n=(ke["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=je(e,n,o);s[o]?s[o].p(a,r):(s[o]=Je(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){y(s,e),e&&v(t)}}}(t),U=ke["status-website"].css&&function(t){let n,s,r=`<style>${ke["status-website"].css}</style>`;return{c(){n=new J(!1),s=S(),this.h()},l(e){n=M(e,!1),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),w(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}(),j=ke["status-website"].js&&function(t){let n,s,r=`<script>${ke["status-website"].js}<\/script>`;return{c(){n=new J(!1),s=S(),this.h()},l(e){n=M(e,!1),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),w(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}(),B=(ke["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(ke["status-website"]||{}).customBodyHtml+"";return{c(){n=new J(!1),s=S(),this.h()},l(e){n=M(e,!1),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),w(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}();p=new Oe({props:{segment:t[0]}});const G=t[2].default,z=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(G,t,t[1],null);return{c(){I&&I.c(),n=S(),L.c(),s=_("link"),r=_("link"),o=_("link"),R&&R.c(),a=S(),O&&O.c(),i=S(),H&&H.c(),c=S(),U&&U.c(),u=S(),j&&j.c(),d=S(),f=x(),B&&B.c(),h=x(),ve(p.$$.fragment),m=x(),b=_("main"),z&&z.c(),$=x(),E=_("footer"),T=_("p"),this.h()},l(e){const t=K("svelte-fmspuk",document.head);I&&I.l(t),n=S(),L.l(t),s=C(t,"LINK",{rel:!0,href:!0}),r=C(t,"LINK",{rel:!0,type:!0,href:!0}),o=C(t,"LINK",{rel:!0,type:!0,href:!0}),R&&R.l(t),a=S(),O&&O.l(t),i=S(),H&&H.l(t),c=S(),U&&U.l(t),u=S(),j&&j.l(t),d=S(),t.forEach(v),f=D(e),B&&B.l(e),h=D(e),ye(p.$$.fragment,e),m=D(e),b=C(e,"MAIN",{class:!0});var l=P(b);z&&z.l(l),l.forEach(v),$=D(e),E=C(e,"FOOTER",{class:!0});var g=P(E);T=C(g,"P",{}),P(T).forEach(v),g.forEach(v),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${ke.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(ke["status-website"]||{}).faviconSvg||(ke["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(ke["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(e,t){I&&I.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),R&&R.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,c),U&&U.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,d),w(e,f,t),B&&B.m(e,t),w(e,h,t),_e(p,e,t),w(e,m,t),w(e,b,t),z&&z.m(b,null),w(e,$,t),w(e,E,t),g(E,T),T.innerHTML=k,A=!0},p(e,[t]){(ke["status-website"]||{}).customHeadHtml&&I.p(e,t),L.p(e,t),(ke["status-website"]||{}).scripts&&R.p(e,t),(ke["status-website"]||{}).links&&O.p(e,t),(ke["status-website"]||{}).metaTags&&H.p(e,t),ke["status-website"].css&&U.p(e,t),ke["status-website"].js&&j.p(e,t),(ke["status-website"]||{}).customBodyHtml&&B.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),z&&z.p&&(!A||2&t)&&function(e,t,n,s,r,o){if(r){const a=l(t,n,s,o);e.p(a,r)}}(z,G,e,e[1],A?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(G,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(me(p.$$.fragment,e),me(z,e),A=!0)},o(e){ge(p.$$.fragment,e),ge(z,e),A=!1},d(e){I&&I.d(e),v(n),L.d(e),v(s),v(r),v(o),R&&R.d(e),v(a),O&&O.d(e),v(i),H&&H.d(e),v(c),U&&U.d(e),v(u),j&&j.d(e),v(d),e&&v(f),B&&B.d(e),e&&v(h),$e(p,e),e&&v(m),e&&v(b),z&&z.d(e),e&&v($),e&&v(E)}}}function Fe(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Ye extends Se{constructor(e){super(),xe(this,e,Fe,Ve,a,{segment:0})}}function Xe(e){let t,n,s=e[1].stack+"";return{c(){t=_("pre"),n=E(s)},l(e){t=C(e,"PRE",{});var r=P(t);n=H(r,s),r.forEach(v)},m(e,s){w(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&j(n,s)},d(e){e&&v(t)}}}function Qe(t){let n,s,r,o,a,i,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Xe(t);return{c(){s=x(),r=_("h1"),o=E(t[0]),a=x(),i=_("p"),c=E(d),l=x(),f&&f.c(),u=S(),this.h()},l(e){K("svelte-1moakz",document.head).forEach(v),s=D(e),r=C(e,"H1",{class:!0});var n=P(r);o=H(n,t[0]),n.forEach(v),a=D(e),i=C(e,"P",{class:!0});var h=P(i);c=H(h,d),h.forEach(v),l=D(e),f&&f.l(e),u=S(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(i,"class","svelte-17w3omn")},m(e,t){w(e,s,t),w(e,r,t),g(r,o),w(e,a,t),w(e,i,t),g(i,c),w(e,l,t),f&&f.m(e,t),w(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&j(o,e[0]),2&t&&d!==(d=e[1].message+"")&&j(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Xe(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&v(s),e&&v(r),e&&v(a),e&&v(i),e&&v(l),f&&f.d(e),e&&v(u)}}}function Ze(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class et extends Se{constructor(e){super(),xe(this,e,Ze,Qe,a,{status:0,error:1})}}function tt(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=V(a,i())),{c(){n&&ve(n.$$.fragment),s=S()},l(e){n&&ye(n.$$.fragment,e),s=S()},m(e,t){n&&_e(n,e,t),w(e,s,t),r=!0},p(e,t){const r=16&t?be(o,[we(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){he();const e=n;ge(e.$$.fragment,1,0,(()=>{$e(e,1)})),pe()}a?(n=V(a,i()),ve(n.$$.fragment),me(n.$$.fragment,1),_e(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&me(n.$$.fragment,e),r=!0)},o(e){n&&ge(n.$$.fragment,e),r=!1},d(e){e&&v(s),n&&$e(n,e)}}}function nt(e){let t,n;return t=new et({props:{error:e[0],status:e[1]}}),{c(){ve(t.$$.fragment)},l(e){ye(t.$$.fragment,e)},m(e,s){_e(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(me(t.$$.fragment,e),n=!0)},o(e){ge(t.$$.fragment,e),n=!1},d(e){$e(t,e)}}}function st(e){let t,n,s,r;const o=[nt,tt],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=S()},l(e){n.l(e),s=S()},m(e,n){a[t].m(e,n),w(e,s,n),r=!0},p(e,r){let c=t;t=i(e),t===c?a[t].p(e,r):(he(),ge(a[c],1,1,(()=>{a[c]=null})),pe(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),me(n,1),n.m(s.parentNode,s))},i(e){r||(me(n),r=!0)},o(e){ge(n),r=!1},d(e){a[t].d(e),e&&v(s)}}}function rt(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[st]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Ye({props:o}),{c(){ve(n.$$.fragment)},l(e){ye(n.$$.fragment,e)},m(e,t){_e(n,e,t),s=!0},p(e,[t]){const s=12&t?be(r,[4&t&&{segment:e[2][0]},8&t&&we(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(me(n.$$.fragment,e),s=!0)},o(e){ge(n.$$.fragment,e),s=!1},d(e){$e(n,e)}}}function ot(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return Q(l),u=Ne,d=s,Y().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,a,i,c,s,l]}class at extends Se{constructor(e){super(),xe(this,e,ot,rt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const it=[],ct=[{js:()=>Promise.all([import("./index.de5c59aa.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.f9c22a98.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.b5465c49.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.3ce48518.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.551f0cce.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],lt=(ut=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:ut(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:ut(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ut;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function dt(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))}function ft(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ht,pt=1;const mt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},gt={};let bt,wt;const vt=e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]}));function yt(e){const t=Object.create(null);return e.length?vt(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function _t(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(bt))return null;let t=e.pathname.slice(bt.length);if(""===t&&(t="/"),!it.some((e=>e.test(t))))for(let n=0;n<lt.length;n+=1){const s=lt[n],r=s.pattern.exec(t);if(r){const n=yt(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function $t(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ft(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=_t(r);if(o){St(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),mt.pushState({id:ht},"",r.href)}}function Et(){return{x:pageXOffset,y:pageYOffset}}function xt(e){if(gt[ht]=Et(),e.state){const t=_t(new URL(location.href));t?St(t,e.state.id):location.href=location.href}else!function(e){pt=e}(pt+1),function(e){ht=e}(pt),mt.replaceState({id:ht},"",location.href)}function St(e,t,n,s){return dt(this,void 0,void 0,(function*(){const r=!!t;if(r)ht=t;else{const e=Et();gt[ht]=e,ht=t=++pt,gt[ht]=n?e:{x:0,y:0}}if(yield wt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=gt[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),gt[ht]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Tt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let At,Nt=null;function kt(e){const t=ft(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=_t(new URL(e,Tt(document)));if(t)Nt&&e===Nt.href||(Nt={href:e,promise:Wt(t)}),Nt.promise}(t.href)}function Pt(e){clearTimeout(At),At=setTimeout((()=>{kt(e)}),20)}function It(e,t={noscroll:!1,replaceState:!1}){const n=_t(new URL(e,Tt(document)));if(n){const s=St(n,null,t.noscroll);return mt[t.replaceState?"replaceState":"pushState"]({id:ht},"",e),s}return location.href=e,new Promise((()=>{}))}const Lt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,Ct,Ot,Ht=!1,Dt=[],Ut="{}";const Mt={page:function(e){const t=Ae(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:Ae(null),session:Ae(Lt&&Lt.session)};let jt,Bt,Gt;function zt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function qt(e){return dt(this,void 0,void 0,(function*(){Rt&&Mt.preloading.set(!0);const t=function(e){return Nt&&Nt.href===e.href?Nt.promise:Wt(e)}(e),n=Ct={},s=yield t,{redirect:r}=s;if(n===Ct)if(r)yield It(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Kt(n,t,zt(t,e.page))}}))}function Kt(e,t,n){return dt(this,void 0,void 0,(function*(){Mt.page.set(n),Mt.preloading.set(!1),Rt?Rt.$set(t):(t.stores={page:{subscribe:Mt.page.subscribe},preloading:{subscribe:Mt.preloading.subscribe},session:Mt.session},t.level0={props:yield Ot},t.notify=Mt.page.notify,Rt=new at({target:Gt,props:t,hydrate:!0})),Dt=e,Ut=JSON.stringify(n.query),Ht=!0,Bt=!1}))}function Wt(e){return dt(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Ot){const e=()=>({});Ot=Lt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},jt)}let i,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>dt(this,void 0,void 0,(function*(){const d=s[i];if(function(e,t,n,s){if(s!==Ut)return!0;const r=Dt[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,d,l,r)&&(u=!0),o.segments[c]=s[i+1],!t)return{segment:d};const f=c++;let h;if(Bt||u||!Dt[i]||Dt[i].part!==t.i){u=!1;const{default:s,preload:r}=yield ct[t.i].js();let o;o=Ht||!Lt.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},jt):{}:Lt.preloaded[i+1],h={component:s,props:o,segment:d,match:l,part:t.i}}else h=Dt[i];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Jt,Vt,Ft;Mt.session.subscribe((e=>dt(void 0,void 0,void 0,(function*(){if(jt=e,!Ht)return;Bt=!0;const t=_t(new URL(location.href)),n=Ct={},{redirect:s,props:r,branch:o}=yield Wt(t);n===Ct&&(s?yield It(s.location,{replaceState:!0}):yield Kt(o,r,zt(r,t.page)))})))),Jt={target:document.querySelector("#sapper")},Vt=Jt.target,Gt=Vt,Ft=Lt.baseUrl,bt=Ft,wt=qt,"scrollRestoration"in mt&&(mt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{mt.scrollRestoration="auto"})),addEventListener("load",(()=>{mt.scrollRestoration="manual"})),addEventListener("click",$t),addEventListener("popstate",xt),addEventListener("touchstart",kt),addEventListener("mousemove",Pt),Lt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Lt;Ot||(Ot=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Ot},level1:{props:{status:o,error:a},component:et},segments:r},c=yt(n);Kt([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;mt.replaceState({id:pt},"",t);const n=_t(new URL(location.href));if(n)return St(n,pt,!0,e)}));export{j as A,T as B,r as C,te as D,M as E,c as F,d as G,J as H,G as I,K as J,Me as K,$ as L,O as M,It as N,B as O,A as P,t as Q,k as R,Se as S,be as T,Q as U,Z as V,u as W,we as X,ae as Y,q as Z,x as a,C as b,D as c,P as d,_ as e,v as f,N as g,w as h,xe as i,he as j,pe as k,me as l,E as m,H as n,X as o,g as p,e as q,ke as r,a as s,ge as t,S as u,y as v,ve as w,ye as x,_e as y,$e as z};

import __inject_styles from './inject_styles.803b7e80.js';