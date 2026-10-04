import{e as L,j as e,p as f,G,l as D,d as l,S,w as I,f as R,m as P,u as U,g as W,h as B,i as H,n as K,c as J,H as Q,s as z,C as Y,F as X,b as Z}from"./index-vWpM12Ib.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=L("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=L("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);function ne(){return e.jsx("section",{className:"hero",id:"top",children:e.jsxs("div",{className:"wrap hero-grid",children:[e.jsxs("div",{className:"hero-intro",children:[e.jsx("h1",{children:f.name}),e.jsxs("p",{className:"hero-role",children:["Platform and backend engineer, ",f.location]}),e.jsx("p",{className:"hero-statement",children:f.statement}),e.jsxs("div",{className:"hero-actions",children:[e.jsx("a",{className:"btn btn-primary",href:"#lab",children:"Open the Lab"}),e.jsxs("a",{className:"btn",href:`mailto:${f.email}`,children:[e.jsx(ee,{size:17,"aria-hidden":"true"})," Email me"]}),e.jsxs("a",{className:"btn",href:f.links.github,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(G,{size:17,"aria-hidden":"true"})," GitHub"]})]})]}),e.jsxs("nav",{className:"lab-index","aria-label":"The Lab",children:[e.jsx("p",{className:"lab-index-lead",children:"Four of my systems, running in your browser. Real Go, compiled to WebAssembly."}),e.jsx("ol",{children:D.map((t,a)=>e.jsx("li",{children:e.jsxs("a",{href:`#lab-${t.wasm}`,children:[e.jsx("span",{className:"lab-index-num",children:String(a+1).padStart(2,"0")}),e.jsxs("span",{className:"lab-index-body",children:[e.jsx("span",{className:"lab-index-title",children:t.title}),e.jsx("span",{className:"lab-index-teaser",children:t.teaser})]}),e.jsx("span",{className:"lab-index-repo code",children:t.repo})]})},t.wasm))})]})]})})}const M="/".replace(/\/$/,"");let v=null;const k=new Map;function ae(){return v||(v=new Promise((t,a)=>{const s=document.createElement("script");s.src=`${M}/demos/wasm_exec.js`,s.onload=()=>t(),s.onerror=()=>a(new Error("could not load the Go WebAssembly runtime")),document.head.appendChild(s)})),v}async function se(t,a){const s=await fetch(t);if(!s.ok||!s.body)throw new Error(`download failed (${s.status})`);const c=s.body.getReader(),i=[];let d=0;for(;;){const{done:p,value:m}=await c.read();if(p)break;i.push(m),d+=m.length,a(d)}const u=new Uint8Array(d);let r=0;for(const p of i)u.set(p,r),r+=p.length;return u.buffer}function re(t,a){let s=k.get(t);return s||(s=(async()=>{if(await ae(),!window.Go)throw new Error("Go WebAssembly runtime missing");const c=new window.Go,i=await se(`${M}/demos/${t}.wasm`,a),{instance:d}=await WebAssembly.instantiate(i,c.importObject),u=new Promise(r=>window.addEventListener(`wasm-ready:${t}`,()=>r(),{once:!0}));c.run(d),await u})(),k.set(t,s),s.catch(()=>k.delete(t))),s}function ie(t){const[a,s]=l.useState({kind:"idle"}),c=l.useCallback(()=>{s({kind:"loading",loaded:0}),re(t,i=>s({kind:"loading",loaded:i})).then(()=>s({kind:"ready"})).catch(i=>s({kind:"error",message:i instanceof Error?i.message:String(i)}))},[t]);return{status:a,run:c}}function oe(t){return`${(t/1048576).toFixed(1)} MB`}function le({demo:t,source:a,index:s,children:c}){const{status:i,run:d}=ie(t.wasm),u=`https://github.com/udaykishore-resu/${t.repo}`,r=`${u}/tree/${t.commit}`;return e.jsxs("article",{className:"exhibit",id:`lab-${t.wasm}`,"aria-labelledby":`lab-${t.wasm}-title`,children:[e.jsxs("div",{className:"exhibit-story",children:[e.jsxs("p",{className:"exhibit-index",children:[String(s+1).padStart(2,"0")," ",e.jsxs("span",{children:["/ ",t.repo]})]}),e.jsx("h3",{id:`lab-${t.wasm}-title`,children:t.hook}),e.jsx("p",{className:"exhibit-problem",children:t.problem}),e.jsxs("div",{className:"exhibit-try",children:[e.jsx("h4",{children:"Things to try"}),e.jsx("ol",{children:t.tryThis.map(p=>e.jsx("li",{children:p},p))})]}),e.jsxs("p",{className:"exhibit-provenance",children:["Runs ",e.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:[t.packages," at ",t.commit.slice(0,7)]}),", compiled from Go to WebAssembly. Nothing is mocked except ",t.mocked,"."," ",e.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"Repository"})]}),e.jsxs("details",{className:"exhibit-source",children:[e.jsx("summary",{children:"How the page calls the library"}),e.jsx("pre",{children:e.jsx("code",{children:a})})]})]}),e.jsx("div",{className:"exhibit-stage",children:i.kind==="ready"?c():e.jsxs("div",{className:"stage-gate",children:[e.jsx("p",{className:"stage-gate-title",children:t.gateTitle}),e.jsxs("p",{className:"stage-gate-note",children:["Downloads the compiled Go program (",t.size,") and runs it in this tab. No server is involved."]}),i.kind==="error"?e.jsxs("p",{className:"stage-error",role:"alert",children:["Couldn't start the demo: ",i.message,"."," ",e.jsx("button",{className:"link-btn",onClick:d,children:"Try again"})]}):e.jsxs("button",{className:"btn btn-primary",onClick:d,disabled:i.kind==="loading",children:[e.jsx(te,{size:16,"aria-hidden":"true"}),i.kind==="loading"?`Loading ${oe(i.loaded)}…`:"Run the demo"]})]})})]})}function ce(t){return t.error_kind==="fingerprint_mismatch"?{text:"Rejected: key reused for a different request",tone:"bad"}:t.error_kind==="in_progress"?{text:"Rejected: already in progress",tone:"warn"}:t.error?{text:"Failed, not stored, safe to retry",tone:"warn"}:t.replayed?{text:"Replayed stored receipt",tone:"info"}:{text:"Charged the card",tone:"ok"}}let _=1001;function de(){const t=window.__idemDemo,[a,s]=l.useState(()=>`order-${_}`),[c,i]=l.useState("42.00"),[d,u]=l.useState([]),[r,p]=l.useState(0),[m,n]=l.useState(!1),[g,x]=l.useState(!1),j=l.useRef(0),o=(h,b)=>{u(q=>[...b.map($=>({...$,id:++j.current,label:h})),...q].slice(0,14)),p(t.charges())},w=async(h,b)=>{n(!0);try{o(h,await b())}finally{n(!1),x(!1)}},F=()=>w("Pay",async()=>[JSON.parse(await t.pay(a,c,!1))]),T=()=>w("Retry storm",async()=>JSON.parse(await t.storm(a,c,8))),C=()=>{_+=1,s(`order-${_}`)},V=()=>{t.reset(),u([]),p(0),x(!1),C()};return e.jsxs("div",{className:"demo demo-idem",children:[e.jsxs("div",{className:"checkout",children:[e.jsxs("div",{className:"checkout-fields",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Idempotency key"}),e.jsx("output",{className:"code",children:a})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Amount (USD)"}),e.jsxs("select",{value:c,onChange:h=>i(h.target.value),disabled:m,children:[e.jsx("option",{children:"42.00"}),e.jsx("option",{children:"99.00"}),e.jsx("option",{children:"7.50"})]})]})]}),e.jsxs("div",{className:"charge-meter","aria-live":"polite",children:[e.jsx("span",{className:"charge-count",children:r}),e.jsx("span",{className:"charge-label",children:r===1?"real charge":"real charges"})]})]}),e.jsxs("div",{className:"demo-actions",children:[e.jsx("button",{className:"btn btn-primary",onClick:F,disabled:m,children:"Pay"}),e.jsx("button",{className:"btn",onClick:T,disabled:m,children:"Send 8 retries at once"}),e.jsx("button",{className:`btn${g?" is-armed":""}`,onClick:()=>{t.failNext(),x(!0)},disabled:m||g,children:g?"Next call will time out":"Make the gateway time out"}),e.jsx("button",{className:"btn",onClick:C,disabled:m,children:"New order"}),e.jsx("button",{className:"btn btn-quiet",onClick:V,disabled:m,children:"Reset"})]}),e.jsxs("div",{className:"log",role:"log","aria-label":"Requests",children:[m&&e.jsx("p",{className:"log-pending",children:"Waiting on the payment gateway…"}),d.length===0&&!m&&e.jsx("p",{className:"log-empty",children:"Press Pay, then press it again."}),d.map(h=>{const b=ce(h);return e.jsxs("div",{className:"log-row",children:[e.jsxs("span",{className:"log-who",children:[h.label,h.label==="Retry storm"?` #${h.caller}`:""]}),e.jsx("span",{className:`chip chip-${b.tone}`,children:b.text}),e.jsxs("span",{className:"log-meta code",children:[h.key," · $",h.amount," · ",h.duration_ms," ms",h.receipt?` · ${h.receipt.charge_id}`:""]})]},h.id)})]})]})}const ue=[{id:"read_q3",label:"Read the Q3 report"},{id:"email_task",label:"Email the CFO a summary"},{id:"delete",label:"Delete the scratch table"},{id:"approve",label:"Approve it on your phone"},{id:"delete_approved",label:"Delete, with the approval"}],me=[{id:"read_q4",label:"Read the Q4 report (out of its scope)"},{id:"email_injected",label:"Email because the PDF told it to"},{id:"derive_wider",label:"Mint itself a wider token"},{id:"tamper",label:"Edit its token to allow any file"},{id:"delete_approved",label:"Reuse a used approval"},{id:"revoke",label:"Revoke the orchestrator, then read again"}],pe=t=>t==="ALLOW"?"ok":t==="ACCEPTED"?"info":t==="ERROR"?"warn":"bad";function he(){const t=window.__arcpDemo,[a,s]=l.useState([]),[c,i]=l.useState(!1),[d,u]=l.useState(""),r=l.useRef(0),p=async n=>{i(!0);try{const g=[JSON.parse(await t.act(n))];n==="revoke"&&g.push(JSON.parse(await t.act("read_q3"))),s(x=>[...g.map(j=>({...j,id:++r.current})),...x].slice(0,12)),u(t.lastAudit())}finally{i(!1)}},m=()=>{t.reset(),s([]),u("")};return e.jsxs("div",{className:"demo demo-arcp",children:[e.jsxs("ol",{className:"chain","aria-label":"Delegation chain",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"You"}),e.jsx("span",{children:"consent to one task"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Orchestrator"}),e.jsx("span",{children:"2 emails, 10 cost units"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Researcher"}),e.jsx("span",{children:"Q3 only, 1 email"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tool server"}),e.jsx("span",{children:"ARCP enforcer in front"})]})]}),e.jsxs("div",{className:"arcp-actions",children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Do the job"}),ue.map(n=>e.jsx("button",{className:"btn btn-block",onClick:()=>p(n.id),disabled:c,children:n.label},n.id+n.label))]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Try to misuse it"}),me.map(n=>e.jsx("button",{className:"btn btn-block btn-attack",onClick:()=>p(n.id),disabled:c,children:n.label},n.id+n.label))]})]}),e.jsxs("div",{className:"log",role:"log","aria-label":"Enforcement decisions",children:[a.length===0&&e.jsx("p",{className:"log-empty",children:"Each call is signed by the sub-agent and checked by the real enforcer."}),a.map(n=>e.jsxs("div",{className:"log-row",children:[e.jsx("span",{className:"log-who",children:n.action}),e.jsxs("span",{className:`chip chip-${pe(n.verdict)}`,children:[n.verdict,n.code&&n.code!=="ok"?` · ${n.code}`:""]}),(n.note||n.message&&n.verdict!=="ALLOW")&&e.jsx("span",{className:"log-meta",children:n.note??n.message}),n.executed&&e.jsx("span",{className:"log-meta",children:"The tool server ran it."})]},n.id))]}),e.jsxs("div",{className:"demo-foot",children:[d&&e.jsxs("details",{className:"audit",children:[e.jsx("summary",{children:"Last audit record"}),e.jsx("pre",{children:e.jsx("code",{children:d})})]}),e.jsx("button",{className:"btn btn-quiet",onClick:m,disabled:c,children:"Reset tokens and budgets"})]})]})}const ge=[{key:"ok",label:"Succeeded"},{key:"failed",label:"Failed at the cloud"},{key:"short_circuited",label:"Refused by the breaker"},{key:"bulkhead_full",label:"Refused by the bulkhead"},{key:"timeout",label:"Timed out"}],N=12e3;function xe(){const t=window.__vertexDemo,[a,s]=l.useState(0),[c,i]=l.useState(120),[d,u]=l.useState(8),[r,p]=l.useState(null),m=l.useRef();l.useEffect(()=>{t.set(a/100,c,d)},[t,a,c,d]),l.useEffect(()=>(t.start(),m.current=window.setInterval(()=>p(JSON.parse(t.snapshot())),200),()=>{window.clearInterval(m.current),t.stop()}),[t]);const n=r?.state??"CLOSED",g=r?.now??0,x=(r?.events??[]).filter(o=>g-o.t<N),j=r?.transitions[r.transitions.length-1];return e.jsxs("div",{className:"demo demo-vertex",children:[e.jsx("div",{className:"breaker","aria-live":"polite",children:["CLOSED","OPEN","HALF_OPEN"].map(o=>e.jsxs("div",{className:`breaker-state${n===o?" is-current":""}`,"data-state":o,children:[e.jsx("strong",{children:o.replace("_","-").toLowerCase()}),e.jsxs("span",{children:[o==="CLOSED"&&"Calls go through",o==="OPEN"&&"Calls fail fast for 3 s",o==="HALF_OPEN"&&"2 trial calls allowed"]})]},o))}),e.jsx("p",{className:"breaker-last",children:j?`Last change: ${j.from.toLowerCase()} → ${j.to.toLowerCase()}, ${((g-j.t)/1e3).toFixed(1)} s ago`:"No state changes yet. Raise the failure rate."}),e.jsx("svg",{className:"timeline",viewBox:`0 0 ${N} 40`,preserveAspectRatio:"none",role:"img","aria-label":"Outcome of each store-to-cloud call over the last 12 seconds",children:x.map((o,w)=>e.jsx("rect",{className:`tick tick-${o.outcome}`,x:N-(g-o.t),y:4,width:70,height:32},`${o.t}-${w}`))}),e.jsx("ul",{className:"legend",children:ge.map(o=>e.jsxs("li",{children:[e.jsx("span",{className:`swatch tick-${o.key}`,"aria-hidden":"true"}),o.label," ",e.jsx("strong",{children:r?.counts[o.key]??0})]},o.key))}),e.jsxs("div",{className:"sliders",children:[e.jsxs("label",{children:[e.jsxs("span",{children:["Cloud failure rate ",e.jsxs("output",{children:[a,"%"]})]}),e.jsx("input",{type:"range",min:0,max:100,step:5,value:a,onChange:o=>s(+o.target.value)})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Cloud latency ",e.jsxs("output",{children:[c," ms"]})]}),e.jsx("input",{type:"range",min:20,max:2e3,step:20,value:c,onChange:o=>i(+o.target.value)})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Requests per second ",e.jsx("output",{children:d})]}),e.jsx("input",{type:"range",min:1,max:30,value:d,onChange:o=>u(+o.target.value)})]})]}),e.jsxs("p",{className:"bulkhead-note",children:["Bulkhead: ",r?.in_flight??0," of ",r?.capacity??4," slots in use. Push latency past about 600 ms at 8 requests a second and it fills."]})]})}const y={phase:"verifying",lag_seconds:2,lag_stable_minutes:40,open_dead_letters:0,reconcile_findings:0,reconcile_age_minutes:8,reconcile_complete:!0,parts_total:40,parts_loaded:40,reverse_replication_armed:!0},A=[{label:"Everything green",o:y},{label:"Lag just dipped",o:{...y,lag_seconds:6,lag_stable_minutes:3}},{label:"Counts match, values don't",o:{...y,reconcile_findings:14}},{label:"No way back",o:{...y,reverse_replication_armed:!1}},{label:"Friday, 5 pm",o:{...y,lag_seconds:48,open_dead_letters:3,parts_loaded:37,reconcile_age_minutes:190}}],E=t=>t.replace(/_/g," ");function je(){const t=window.__dbmigrateDemo,[a,s]=l.useState(A[4].o),[c,i]=l.useState(""),d=l.useMemo(()=>t.phases(),[t]),u=l.useMemo(()=>JSON.parse(t.evaluate(JSON.stringify(a))),[t,a]),r=(n,g)=>s(x=>({...x,[n]:g})),p=n=>{const g=t.transition(a.phase,n);g?i(g):(i(""),r("phase",n))},m=u.blockers??[];return e.jsxs("div",{className:"demo demo-db",children:[e.jsx("div",{className:"presets",role:"group","aria-label":"Scenarios",children:A.map(n=>e.jsx("button",{className:"btn btn-small",onClick:()=>s(n.o),children:n.label},n.label))}),e.jsxs("div",{className:"db-grid",children:[e.jsxs("div",{className:"db-controls",children:[e.jsxs("label",{children:[e.jsxs("span",{children:["Replication lag ",e.jsxs("output",{children:[a.lag_seconds," s"]})]}),e.jsx("input",{type:"range",min:0,max:120,value:a.lag_seconds,onChange:n=>r("lag_seconds",+n.target.value)})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Lag under threshold for ",e.jsxs("output",{children:[a.lag_stable_minutes," min"]})]}),e.jsx("input",{type:"range",min:0,max:60,value:a.lag_stable_minutes,onChange:n=>r("lag_stable_minutes",+n.target.value)})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Unapplied dead letters ",e.jsx("output",{children:a.open_dead_letters})]}),e.jsx("input",{type:"range",min:0,max:20,value:a.open_dead_letters,onChange:n=>r("open_dead_letters",+n.target.value)})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Reconciliation discrepancies ",e.jsx("output",{children:a.reconcile_findings})]}),e.jsx("input",{type:"range",min:0,max:50,value:a.reconcile_findings,onChange:n=>r("reconcile_findings",+n.target.value)})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Last reconciliation ",e.jsxs("output",{children:[a.reconcile_age_minutes," min ago"]})]}),e.jsx("input",{type:"range",min:0,max:360,step:5,value:a.reconcile_age_minutes,onChange:n=>r("reconcile_age_minutes",+n.target.value)})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Parts loaded ",e.jsxs("output",{children:[a.parts_loaded," of ",a.parts_total]})]}),e.jsx("input",{type:"range",min:0,max:a.parts_total,value:a.parts_loaded,onChange:n=>r("parts_loaded",+n.target.value)})]}),e.jsxs("label",{className:"check",children:[e.jsx("input",{type:"checkbox",checked:a.reconcile_complete,onChange:n=>r("reconcile_complete",n.target.checked)}),e.jsx("span",{children:"Reconciliation covered every table"})]}),e.jsxs("label",{className:"check",children:[e.jsx("input",{type:"checkbox",checked:a.reverse_replication_armed,onChange:n=>r("reverse_replication_armed",n.target.checked)}),e.jsx("span",{children:"Reverse replication armed for rollback"})]})]}),e.jsxs("div",{className:`gate ${u.ready?"gate-open":"gate-closed"}`,"aria-live":"polite",children:[e.jsx("p",{className:"gate-verdict",children:u.ready?"Cutover may proceed":`${m.length} ${m.length===1?"thing blocks":"things block"} the cutover`}),u.ready?e.jsx("p",{className:"gate-detail",children:"Every condition in the default thresholds holds. The target is complete and keeping up."}):e.jsx("ul",{className:"gate-blockers",children:m.map(n=>e.jsxs("li",{children:[e.jsx("span",{className:"code",children:n.code}),n.detail]},n.code))})]})]}),e.jsxs("div",{className:"phase-rail",children:[e.jsxs("p",{children:["Phase: ",e.jsx("strong",{children:E(a.phase)}),". Try moving it:"]}),e.jsx("div",{className:"phase-buttons",children:d.filter(n=>n!==a.phase).map(n=>e.jsx("button",{className:`btn btn-small${u.next.includes(n)?"":" is-illegal"}`,onClick:()=>p(n),children:E(n)},n))}),c&&e.jsx("p",{className:"phase-msg",role:"alert",children:c})]})]})}const fe=`//go:build js && wasm

// Browser demo for github.com/udaykishore-resu/idem.
//
// build.sh copies this file into a pinned checkout of the idem repository as
// cmd/portfolio-wasm and compiles it with GOOS=js GOARCH=wasm, so everything
// below runs the library's real Engine and memstore.
package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"strconv"
	"sync"
	"sync/atomic"
	"syscall/js"
	"time"

	"github.com/udaykishore-resu/idem"
	"github.com/udaykishore-resu/idem/memstore"
)

// Receipt is what the pretend payment gateway returns. It is the value idem
// stores and replays.
type Receipt struct {
	ChargeID  string \`json:"charge_id"\`
	Amount    string \`json:"amount"\`
	ChargedAt string \`json:"charged_at"\`
}

type outcome struct {
	Caller     int      \`json:"caller"\`
	Key        string   \`json:"key"\`
	Amount     string   \`json:"amount"\`
	Replayed   bool     \`json:"replayed"\`
	Receipt    *Receipt \`json:"receipt,omitempty"\`
	Error      string   \`json:"error,omitempty"\`
	ErrorKind  string   \`json:"error_kind,omitempty"\`
	DurationMs int64    \`json:"duration_ms"\`
}

var (
	mu      sync.Mutex
	engine  *idem.Engine
	charges atomic.Int64 // side effects that really happened
	failNext atomic.Bool  // make the next gateway call fail once
)

const gatewayLatency = 700 * time.Millisecond

func reset() {
	mu.Lock()
	defer mu.Unlock()
	engine = idem.New(memstore.New(), idem.WithLease(5*time.Second))
	charges.Store(0)
	failNext.Store(false)
}

// charge is the side effect idem protects: it is only ever called by idem.Do.
func charge(amount string) func(context.Context) (Receipt, error) {
	return func(ctx context.Context) (Receipt, error) {
		select {
		case <-time.After(gatewayLatency):
		case <-ctx.Done():
			return Receipt{}, ctx.Err()
		}
		if failNext.CompareAndSwap(true, false) {
			return Receipt{}, errors.New("gateway timeout: no response from the card network")
		}
		n := charges.Add(1)
		return Receipt{
			ChargeID:  "ch_" + strconv.FormatInt(time.Now().UnixMilli()%1_000_000, 36) + "_" + strconv.FormatInt(n, 10),
			Amount:    amount,
			ChargedAt: time.Now().Format("15:04:05.000"),
		}, nil
	}
}

func classify(err error) string {
	switch {
	case err == nil:
		return ""
	case errors.Is(err, idem.ErrInProgress):
		return "in_progress"
	case errors.Is(err, idem.ErrFingerprintMismatch):
		return "fingerprint_mismatch"
	case errors.Is(err, idem.ErrInvalidKey):
		return "invalid_key"
	default:
		return "operation_failed"
	}
}

func pay(caller int, key, amount string, wait bool) outcome {
	mu.Lock()
	e := engine
	mu.Unlock()
	opts := []idem.Option{idem.WithFingerprint(idem.Fingerprint([]byte("charge"), []byte(amount)))}
	if wait {
		opts = append(opts, idem.WithWait(5*time.Second))
	}
	start := time.Now()
	r, replayed, err := idem.Do(context.Background(), e, key, charge(amount), opts...)
	o := outcome{Caller: caller, Key: key, Amount: amount, Replayed: replayed, DurationMs: time.Since(start).Milliseconds()}
	if err != nil {
		o.Error, o.ErrorKind = err.Error(), classify(err)
	} else {
		o.Receipt = &r
	}
	return o
}

// promise runs fn on a goroutine and resolves a JS Promise with its JSON result,
// so blocking Go code never stalls the browser's event loop.
func promise(fn func() any) js.Value {
	return js.Global().Get("Promise").New(js.FuncOf(func(_ js.Value, args []js.Value) any {
		resolve := args[0]
		go func() {
			b, _ := json.Marshal(fn())
			resolve.Invoke(string(b))
		}()
		return nil
	}))
}

func main() {
	reset()
	api := map[string]any{
		// pay(key, amount, wait) -> Promise<outcome JSON>
		"pay": js.FuncOf(func(_ js.Value, a []js.Value) any {
			key, amount, wait := a[0].String(), a[1].String(), len(a) > 2 && a[2].Bool()
			return promise(func() any { return pay(1, key, amount, wait) })
		}),
		// storm(key, amount, n) -> Promise<[]outcome JSON>: n concurrent retries.
		"storm": js.FuncOf(func(_ js.Value, a []js.Value) any {
			key, amount, n := a[0].String(), a[1].String(), a[2].Int()
			return promise(func() any {
				out := make([]outcome, n)
				var wg sync.WaitGroup
				for i := 0; i < n; i++ {
					wg.Add(1)
					go func(i int) {
						defer wg.Done()
						out[i] = pay(i+1, key, amount, true)
					}(i)
					time.Sleep(15 * time.Millisecond) // retries arrive a few ms apart, as they do on a real network
				}
				wg.Wait()
				return out
			})
		}),
		"failNext": js.FuncOf(func(js.Value, []js.Value) any { failNext.Store(true); return nil }),
		"charges":  js.FuncOf(func(js.Value, []js.Value) any { return charges.Load() }),
		"reset":    js.FuncOf(func(js.Value, []js.Value) any { reset(); return nil }),
		"version":  js.FuncOf(func(js.Value, []js.Value) any { return fmt.Sprintf("idem@%s", commit) }),
	}
	js.Global().Set("__idemDemo", js.ValueOf(api))
	js.Global().Call("dispatchEvent", js.Global().Get("CustomEvent").New("wasm-ready:idem"))
	select {}
}

// commit is set at build time with -ldflags "-X main.commit=<sha>".
var commit = "dev"
`,be=`//go:build js && wasm

// Browser demo for github.com/udaykishore-resu/arcp.
//
// build.sh copies this file into a pinned checkout of the arcp repository as
// cmd/portfolio-wasm. It runs the real token minting (aat), the real ARCP
// enforcer and the real MCP middleware. The only stand-ins are the tool
// server, which "executes" whatever reaches it, and the network: requests go
// through an in-memory http.RoundTripper instead of a socket.
package main

import (
	"bytes"
	"context"
	"crypto/ed25519"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"syscall/js"
	"time"

	"github.com/udaykishore-resu/arcp/aat"
	"github.com/udaykishore-resu/arcp/arcp"
	"github.com/udaykishore-resu/arcp/binding/mcp"
)

const audience = "https://tools.example.com/mcp"

type inMemory struct{ h http.Handler }

func (t inMemory) RoundTrip(r *http.Request) (*http.Response, error) {
	rec := httptest.NewRecorder()
	t.h.ServeHTTP(rec, r)
	return rec.Result(), nil
}

type world struct {
	mu       sync.Mutex
	root     string
	child    string
	orchPub  ed25519.PublicKey
	subKey   ed25519.PrivateKey
	subPub   ed25519.PublicKey
	enf      *arcp.Enforcer
	handler  http.Handler
	agent    *mcp.Agent
	approval string
	pending  *arcp.ApprovalRequest
	audit    []arcp.AuditRecord
	executed []string
}

var w *world

func key() (ed25519.PublicKey, ed25519.PrivateKey) {
	pub, priv, _ := ed25519.GenerateKey(rand.Reader)
	return pub, priv
}

func newWorld() (*world, error) {
	now := time.Now()
	asPub, asKey := key()
	orchPub, orchKey := key()
	subPub, subKey := key()

	root, err := aat.Mint("https://as.example.com", asKey, orchPub, aat.Grant{
		TTL:      time.Hour,
		MaxDepth: aat.Depth(2),
		Tools: aat.ToolSet{
			"read_file":      {"path": aat.OneOf("/reports/q3.pdf", "/reports/q4.pdf")},
			"send_email":     {"to": aat.OneOf("cfo@acme.example"), "body": aat.Wildcard()},
			"delete_records": {"table": aat.Exact("scratch")},
		},
		Extension: arcp.Profile{
			Principal: "user:uday",
			Agent:     "spiffe://acme.example/agent/orchestrator",
			Purpose:   "Prepare the Q3 board summary and email it to the CFO",
			Budgets:   map[string]arcp.Budget{"send_email": {Calls: 2}, "*": {Units: 10}},
			MinProvenance: map[string]arcp.Provenance{
				"send_email":     arcp.ProvAgent,
				"delete_records": arcp.ProvUser,
			},
			StepUp: []string{"delete_records"},
		}.Claim(),
	}, now)
	if err != nil {
		return nil, err
	}
	child, err := aat.Derive(root, orchKey, subPub, aat.Grant{
		TTL: 15 * time.Minute,
		Tools: aat.ToolSet{
			"read_file":      {"path": aat.Exact("/reports/q3.pdf")},
			"send_email":     {"to": aat.OneOf("cfo@acme.example"), "body": aat.Wildcard()},
			"delete_records": {"table": aat.Exact("scratch")},
		},
		Extension: arcp.Profile{
			Agent:   "spiffe://acme.example/agent/researcher",
			Purpose: "Read the Q3 report and send the CFO a summary",
			Budgets: map[string]arcp.Budget{"send_email": {Calls: 1}},
		}.Claim(),
	}, now)
	if err != nil {
		return nil, err
	}

	nw := &world{root: root, child: child, orchPub: orchPub, subKey: subKey, subPub: subPub}
	enf := arcp.NewEnforcer([]ed25519.PublicKey{asPub}, audience)
	enf.Cost = func(tool string, _ map[string]any) float64 {
		if tool == "read_file" {
			return 1
		}
		return 2
	}
	enf.OnStepUp = func(r arcp.ApprovalRequest) { req := r; nw.pending = &req }
	enf.Audit = func(r arcp.AuditRecord) { nw.audit = append(nw.audit, r) }
	nw.enf = enf

	tools := http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		var req struct {
			ID     json.RawMessage \`json:"id"\`
			Params struct {
				Name string \`json:"name"\`
			} \`json:"params"\`
		}
		_ = json.NewDecoder(r.Body).Decode(&req)
		nw.executed = append(nw.executed, req.Params.Name)
		rw.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(rw).Encode(map[string]any{
			"jsonrpc": "2.0", "id": req.ID,
			"result": map[string]any{"content": []map[string]any{{"type": "text", "text": "executed " + req.Params.Name}}},
		})
	})
	mux := http.NewServeMux()
	mux.Handle("/mcp", mcp.Middleware(enf, tools))
	mux.Handle("/ssf/events", enf.Revocations.SSFReceiver())
	nw.handler = mux
	nw.agent = &mcp.Agent{
		Endpoint: "http://in-memory/mcp", Audience: audience,
		Chain: []string{root, child}, Key: subKey,
		HTTP: &http.Client{Transport: inMemory{mux}},
	}
	return nw, nil
}

type result struct {
	Action   string \`json:"action"\`
	Verdict  string \`json:"verdict"\` // ALLOW, DENY, REFUSED, ACCEPTED
	Code     string \`json:"code,omitempty"\`
	Message  string \`json:"message,omitempty"\`
	Note     string \`json:"note,omitempty"\`
	Executed bool   \`json:"executed"\`
	Audited  int    \`json:"audited"\`
}

func (w *world) call(action, tool string, args map[string]any, inv arcp.Invocation, chain []string) result {
	before := len(w.executed)
	a := *w.agent
	if chain != nil {
		a.Chain = chain
	}
	res, err := a.CallTool(context.Background(), tool, args, inv)
	r := result{Action: action}
	switch {
	case err != nil:
		r.Verdict, r.Message = "ERROR", err.Error()
	case res.Allowed:
		r.Verdict, r.Code = "ALLOW", string(arcp.OK)
	default:
		r.Verdict, r.Code, r.Message = "DENY", string(res.Code), res.Message
		if res.ApprovalID != "" {
			w.approval = res.ApprovalID
		}
	}
	r.Executed = len(w.executed) > before
	r.Audited = len(w.audit)
	return r
}

// widen tampers with a token's payload while keeping its signature, the way a
// malicious holder would try to grant itself more.
func widen(tok string) string {
	parts := strings.Split(tok, ".")
	payload, _ := base64.RawURLEncoding.DecodeString(parts[1])
	var c aat.Claims
	_ = json.Unmarshal(payload, &c)
	c.AuthorizationDetails[0].Tools["read_file"] = map[string]aat.Constraint{"path": aat.Wildcard()}
	b, _ := json.Marshal(c)
	parts[1] = base64.RawURLEncoding.EncodeToString(b)
	return strings.Join(parts, ".")
}

func act(name string) result {
	w.mu.Lock()
	defer w.mu.Unlock()
	email := map[string]any{"to": "cfo@acme.example", "body": "Q3 summary attached."}
	q3 := map[string]any{"path": "/reports/q3.pdf"}
	agentProv := arcp.Invocation{Provenance: arcp.ProvAgent}
	switch name {
	case "read_q3":
		return w.call("Read the Q3 report", "read_file", q3, agentProv, nil)
	case "read_q4":
		return w.call("Read the Q4 report", "read_file", map[string]any{"path": "/reports/q4.pdf"}, agentProv, nil)
	case "derive_wider":
		_, err := aat.Derive(w.child, w.subKey, w.subPub, aat.Grant{Tools: aat.ToolSet{"read_file": {"path": aat.Wildcard()}}}, time.Now())
		if err != nil {
			return result{Action: "Mint itself a wider token", Verdict: "REFUSED", Message: err.Error(), Audited: len(w.audit)}
		}
		return result{Action: "Mint itself a wider token", Verdict: "ALLOW", Audited: len(w.audit)}
	case "tamper":
		return w.call("Edit its token to allow any file", "read_file", map[string]any{"path": "/reports/q4.pdf"}, agentProv,
			[]string{w.root, widen(w.child)})
	case "email_injected":
		return w.call("Send email because the PDF said so", "send_email", email, arcp.Invocation{Provenance: arcp.ProvContent}, nil)
	case "email_task":
		return w.call("Send the CFO the summary", "send_email", email, agentProv, nil)
	case "delete":
		r := w.call("Delete the scratch table", "delete_records", map[string]any{"table": "scratch"}, arcp.Invocation{Provenance: arcp.ProvUser}, nil)
		if w.pending != nil && r.Code == string(arcp.StepUpRequired) {
			r.Note = fmt.Sprintf("Approval request pushed to %s: %s(%s)", w.pending.Principal, w.pending.Tool, aat.Canonical(w.pending.Args))
		}
		return r
	case "approve":
		if w.approval == "" {
			return result{Action: "Approve on phone", Verdict: "DENY", Message: "nothing is waiting for approval", Audited: len(w.audit)}
		}
		if err := w.enf.Approvals.Approve(w.approval); err != nil {
			return result{Action: "Approve on phone", Verdict: "ERROR", Message: err.Error(), Audited: len(w.audit)}
		}
		return result{Action: "Approve on phone", Verdict: "ACCEPTED", Note: "approval " + w.approval[:8] + "… is bound to this exact call and usable once", Audited: len(w.audit)}
	case "delete_approved":
		return w.call("Delete with the approval", "delete_records", map[string]any{"table": "scratch"},
			arcp.Invocation{Provenance: arcp.ProvUser, Approval: w.approval}, nil)
	case "revoke":
		set, _ := json.Marshal(map[string]any{
			"iss": "https://as.example.com", "iat": time.Now().Unix(), "jti": fmt.Sprintf("set-%d", time.Now().UnixNano()),
			"events": map[string]any{arcp.CAEPSessionRevoked: map[string]any{
				"subject": arcp.Subject{Format: arcp.SubjectHolder, ID: aat.Thumbprint(w.orchPub)},
			}},
		})
		req, _ := http.NewRequest(http.MethodPost, "http://in-memory/ssf/events", bytes.NewReader(set))
		req.Header.Set("Content-Type", "application/secevent+json")
		resp, _ := inMemory{w.handler}.RoundTrip(req)
		_, _ = io.Copy(io.Discard, resp.Body)
		return result{Action: "Revoke the orchestrator's key", Verdict: "ACCEPTED",
			Note: fmt.Sprintf("SSF/CAEP event delivered, HTTP %d", resp.StatusCode), Audited: len(w.audit)}
	}
	return result{Action: name, Verdict: "ERROR", Message: "unknown action"}
}

func main() {
	var err error
	if w, err = newWorld(); err != nil {
		panic(err)
	}
	api := map[string]any{
		"act": js.FuncOf(func(_ js.Value, a []js.Value) any {
			name := a[0].String()
			return js.Global().Get("Promise").New(js.FuncOf(func(_ js.Value, p []js.Value) any {
				resolve := p[0]
				go func() {
					b, _ := json.Marshal(act(name))
					resolve.Invoke(string(b))
				}()
				return nil
			}))
		}),
		"reset": js.FuncOf(func(js.Value, []js.Value) any {
			nw, err := newWorld()
			if err == nil {
				w = nw
			}
			return nil
		}),
		"lastAudit": js.FuncOf(func(js.Value, []js.Value) any {
			w.mu.Lock()
			defer w.mu.Unlock()
			if len(w.audit) == 0 {
				return ""
			}
			b, _ := json.MarshalIndent(w.audit[len(w.audit)-1], "", "  ")
			return string(b)
		}),
		"version": js.FuncOf(func(js.Value, []js.Value) any { return "arcp@" + commit }),
	}
	js.Global().Set("__arcpDemo", js.ValueOf(api))
	js.Global().Call("dispatchEvent", js.Global().Get("CustomEvent").New("wasm-ready:arcp"))
	select {}
}

var commit = "dev"
`,ye=`//go:build js && wasm

// Browser demo for github.com/udaykishore-resu/vertex-sco-platform.
//
// build.sh copies this file into a pinned checkout of the repository as
// cmd/portfolio-wasm, so it can import internal/resilience: the real circuit
// breaker and bulkhead that guard every store-to-cloud call. The cloud itself
// is simulated: each call succeeds or fails according to the sliders.
package main

import (
	"context"
	"encoding/json"
	"errors"
	"math/rand"
	"sync"
	"syscall/js"
	"time"

	"github.com/udaykishore-resu/vertex-sco-platform/internal/resilience"
)

type event struct {
	T       int64  \`json:"t"\`       // ms since start
	Outcome string \`json:"outcome"\` // ok, failed, short_circuited, bulkhead_full, timeout
	State   string \`json:"state"\`
}

type transition struct {
	T    int64  \`json:"t"\`
	From string \`json:"from"\`
	To   string \`json:"to"\`
}

type sim struct {
	mu          sync.Mutex
	start       time.Time
	breaker     *resilience.CircuitBreaker
	bulkhead    *resilience.Bulkhead
	failRate    float64
	latency     time.Duration
	rps         int
	running     bool
	cancel      context.CancelFunc
	events      []event
	transitions []transition
	counts      map[string]int
}

var s = newSim()

func newSim() *sim {
	n := &sim{start: time.Now(), failRate: 0, latency: 120 * time.Millisecond, rps: 8, counts: map[string]int{}}
	n.breaker = resilience.NewCircuitBreaker("cloud-pos-bridge", resilience.CircuitBreakerConfig{
		FailureThreshold: 5,
		OpenTimeout:      3 * time.Second,
		HalfOpenMaxCalls: 2,
	})
	n.bulkhead = resilience.NewBulkhead(4)
	n.breaker.OnStateChange(func(_ string, from, to resilience.State) {
		n.mu.Lock()
		n.transitions = append(n.transitions, transition{T: n.ms(), From: from.String(), To: to.String()})
		if len(n.transitions) > 20 {
			n.transitions = n.transitions[len(n.transitions)-20:]
		}
		n.mu.Unlock()
	})
	return n
}

func (n *sim) ms() int64 { return time.Since(n.start).Milliseconds() }

var errCloud = errors.New("cloud: 503 service unavailable")

// callCloud is one store-to-cloud request, guarded exactly the way vertex-core
// guards it: bulkhead outside, breaker inside, caller deadline on top.
func (n *sim) callCloud() {
	n.mu.Lock()
	fail, lat := n.failRate, n.latency
	n.mu.Unlock()

	ctx, cancel := context.WithTimeout(context.Background(), 1500*time.Millisecond)
	defer cancel()
	err := n.bulkhead.Execute(ctx, func(ctx context.Context) error {
		return n.breaker.Execute(ctx, func(ctx context.Context) error {
			select {
			case <-time.After(lat):
			case <-ctx.Done():
				return ctx.Err()
			}
			if rand.Float64() < fail {
				return errCloud
			}
			return nil
		})
	})

	outcome := "ok"
	switch {
	case err == nil:
	case errors.Is(err, resilience.ErrOpenCircuit):
		outcome = "short_circuited"
	case errors.Is(err, resilience.ErrBulkheadFull):
		outcome = "bulkhead_full"
	case errors.Is(err, context.DeadlineExceeded):
		outcome = "timeout"
	default:
		outcome = "failed"
	}
	n.mu.Lock()
	n.counts[outcome]++
	n.events = append(n.events, event{T: n.ms(), Outcome: outcome, State: n.breaker.State().String()})
	if len(n.events) > 240 {
		n.events = n.events[len(n.events)-240:]
	}
	n.mu.Unlock()
}

func (n *sim) run(ctx context.Context) {
	for {
		n.mu.Lock()
		rps := n.rps
		n.mu.Unlock()
		if rps < 1 {
			rps = 1
		}
		select {
		case <-ctx.Done():
			return
		case <-time.After(time.Second / time.Duration(rps)):
			go n.callCloud()
		}
	}
}

func (n *sim) snapshot() map[string]any {
	n.mu.Lock()
	defer n.mu.Unlock()
	ev := make([]event, len(n.events))
	copy(ev, n.events)
	tr := make([]transition, len(n.transitions))
	copy(tr, n.transitions)
	counts := map[string]int{}
	for k, v := range n.counts {
		counts[k] = v
	}
	return map[string]any{
		"now": n.ms(), "state": n.breaker.State().String(), "running": n.running,
		"in_flight": n.bulkhead.InFlight(), "capacity": n.bulkhead.Capacity(),
		"events": ev, "transitions": tr, "counts": counts,
	}
}

func main() {
	api := map[string]any{
		"start": js.FuncOf(func(js.Value, []js.Value) any {
			s.mu.Lock()
			defer s.mu.Unlock()
			if !s.running {
				ctx, cancel := context.WithCancel(context.Background())
				s.cancel, s.running = cancel, true
				go s.run(ctx)
			}
			return nil
		}),
		"stop": js.FuncOf(func(js.Value, []js.Value) any {
			s.mu.Lock()
			defer s.mu.Unlock()
			if s.running {
				s.cancel()
				s.running = false
			}
			return nil
		}),
		// set(failRate 0..1, latencyMs, rps)
		"set": js.FuncOf(func(_ js.Value, a []js.Value) any {
			s.mu.Lock()
			defer s.mu.Unlock()
			s.failRate = a[0].Float()
			s.latency = time.Duration(a[1].Int()) * time.Millisecond
			s.rps = a[2].Int()
			return nil
		}),
		"snapshot": js.FuncOf(func(js.Value, []js.Value) any {
			b, _ := json.Marshal(s.snapshot())
			return string(b)
		}),
		"reset": js.FuncOf(func(js.Value, []js.Value) any {
			s.mu.Lock()
			if s.running {
				s.cancel()
			}
			s.mu.Unlock()
			s = newSim()
			return nil
		}),
		"version": js.FuncOf(func(js.Value, []js.Value) any { return "vertex-sco-platform@" + commit }),
	}
	js.Global().Set("__vertexDemo", js.ValueOf(api))
	js.Global().Call("dispatchEvent", js.Global().Get("CustomEvent").New("wasm-ready:vertex"))
	select {}
}

var commit = "dev"
`,we=`//go:build js && wasm

// Browser demo for github.com/udaykishore-resu/db-migration-platform.
//
// build.sh copies this file into a pinned checkout of the repository as
// cmd/portfolio-wasm, so it can import internal/control: the real cutover
// gate and phase machine. The page supplies the observed state; the verdict
// and every blocker message come from control.Evaluate.
package main

import (
	"encoding/json"
	"syscall/js"
	"time"

	"github.com/udaykishore-resu/db-migration-platform/internal/control"
)

type input struct {
	Phase                   string  \`json:"phase"\`
	LagSeconds              float64 \`json:"lag_seconds"\`
	LagStableMinutes        float64 \`json:"lag_stable_minutes"\`
	OpenDeadLetters         int64   \`json:"open_dead_letters"\`
	ReconcileFindings       int     \`json:"reconcile_findings"\`
	ReconcileAgeMinutes     float64 \`json:"reconcile_age_minutes"\`
	ReconcileComplete       bool    \`json:"reconcile_complete"\`
	PartsTotal              int     \`json:"parts_total"\`
	PartsLoaded             int     \`json:"parts_loaded"\`
	ReverseReplicationArmed bool    \`json:"reverse_replication_armed"\`
}

var phases = []control.Phase{
	control.PhasePlanning, control.PhaseExtracting, control.PhaseLoading, control.PhaseStreaming,
	control.PhaseVerifying, control.PhaseReady, control.PhaseCuttingOver, control.PhaseCutover,
	control.PhaseCompleted, control.PhaseRolledBack, control.PhaseFailed,
}

func minutes(m float64) time.Duration { return time.Duration(m * float64(time.Minute)) }

func evaluate(raw string) any {
	var in input
	if err := json.Unmarshal([]byte(raw), &in); err != nil {
		return map[string]any{"error": err.Error()}
	}
	now := time.Now()
	o := control.Observed{
		Phase:                   control.Phase(in.Phase),
		CurrentLag:              time.Duration(in.LagSeconds * float64(time.Second)),
		LagUnderThreshold:       minutes(in.LagStableMinutes),
		OpenDeadLetters:         in.OpenDeadLetters,
		ReconcileFindings:       in.ReconcileFindings,
		ReconcileRanAt:          now.Add(-minutes(in.ReconcileAgeMinutes)),
		ReconcileComplete:       in.ReconcileComplete,
		PartsTotal:              in.PartsTotal,
		PartsLoaded:             in.PartsLoaded,
		ReverseReplicationArmed: in.ReverseReplicationArmed,
		Now:                     now,
	}
	t := control.DefaultThresholds()
	r := control.Evaluate(o, t)

	next := []string{}
	for _, p := range phases {
		if o.Phase.CanTransitionTo(p) {
			next = append(next, string(p))
		}
	}
	return map[string]any{
		"ready":    r.Ready,
		"blockers": r.Blockers,
		"next":     next,
		"thresholds": map[string]any{
			"max_lag_seconds":       t.MaxLag.Seconds(),
			"lag_stable_minutes":    t.LagStableFor.Minutes(),
			"max_open_dead_letters": t.MaxOpenDeadLetters,
			"max_findings":          t.MaxReconcileFindings,
			"max_reconcile_age_min": t.MaxReconcileAge.Minutes(),
			"require_all_parts":     t.RequireAllPartsLoaded,
			"require_reverse":       t.RequireReverseReplication,
		},
	}
}

func main() {
	api := map[string]any{
		"evaluate": js.FuncOf(func(_ js.Value, a []js.Value) any {
			b, _ := json.Marshal(evaluate(a[0].String()))
			return string(b)
		}),
		"transition": js.FuncOf(func(_ js.Value, a []js.Value) any {
			if err := control.Transition(control.Phase(a[0].String()), control.Phase(a[1].String())); err != nil {
				return err.Error()
			}
			return ""
		}),
		"phases": js.FuncOf(func(js.Value, []js.Value) any {
			out := make([]any, len(phases))
			for i, p := range phases {
				out[i] = string(p)
			}
			return js.ValueOf(out)
		}),
		"version": js.FuncOf(func(js.Value, []js.Value) any { return "db-migration-platform@" + commit }),
	}
	js.Global().Set("__dbmigrateDemo", js.ValueOf(api))
	js.Global().Call("dispatchEvent", js.Global().Get("CustomEvent").New("wasm-ready:dbmigrate"))
	select {}
}

var commit = "dev"
`,O={idem:{render:()=>e.jsx(de,{}),source:fe},arcp:{render:()=>e.jsx(he,{}),source:be},vertex:{render:()=>e.jsx(xe,{}),source:ye},dbmigrate:{render:()=>e.jsx(je,{}),source:we}};function ve(){return e.jsx("section",{className:"lab",id:"lab","aria-labelledby":"lab-title",children:e.jsxs("div",{className:"wrap",children:[e.jsxs("header",{className:"lab-head",children:[e.jsx("h2",{id:"lab-title",children:"The Lab"}),e.jsx("p",{children:"Backend work is hard to show in a screenshot, so here it is running. Each exhibit loads one of my repositories, pinned to a commit and compiled to WebAssembly, and lets you poke at it. Your browser does all the work; there is no server behind this page."})]}),D.map((t,a)=>e.jsx(le,{demo:t,index:a,source:O[t.wasm].source,children:O[t.wasm].render},t.wasm))]})})}function ke(){return e.jsxs(S,{id:"work",title:"More work",note:"Each repository takes one platform problem end to end: a written spec, an implementation, tests and a one-command way to run it.",children:[e.jsx("ul",{className:"work-grid",children:I.map(t=>e.jsx("li",{children:e.jsxs("a",{className:"work-item",href:R(t.repo),target:"_blank",rel:"noopener noreferrer",children:[e.jsx("span",{className:"work-repo code",children:t.repo}),e.jsx("span",{className:"work-summary",children:t.summary}),e.jsx("span",{className:"work-detail",children:t.detail}),e.jsx("span",{className:"work-stack",children:t.stack.join(" · ")})]})},t.repo))}),e.jsxs("details",{className:"more-systems",children:[e.jsxs("summary",{children:[P.length," more repositories"]}),e.jsx("div",{className:"more-grid",children:P.map(t=>e.jsxs("a",{href:R(t.repo),target:"_blank",rel:"noopener noreferrer",children:[e.jsx("span",{className:"code",children:t.repo}),e.jsx("p",{children:t.summary})]},t.repo))}),e.jsx("p",{className:"all-repos",children:e.jsx("a",{className:"prose-link",href:`${f.links.github}?tab=repositories`,target:"_blank",rel:"noopener noreferrer",children:"All public repositories on GitHub"})})]})]})}function _e(){return e.jsxs(S,{id:"upstream",title:"Upstream",note:"Pull requests to projects other people depend on, from the Go toolchain to GPU operations and quant finance. Sole author on each.",children:[e.jsx("ul",{className:"pr-list",children:U.map(t=>e.jsx("li",{children:e.jsxs("a",{className:"pr-row",href:B(t),target:"_blank",rel:"noopener noreferrer",title:t.detail,children:[e.jsxs("span",{className:"pr-repo code",children:[t.org,"/",t.repo,e.jsxs("span",{children:[" #",t.number]})]}),e.jsx("span",{className:"pr-title",children:t.title}),e.jsx("span",{className:`pr-status pr-${t.status}`,children:W[t.status]}),e.jsx("span",{className:"pr-diff",children:t.diff.replace(" across ",", ")})]})},`${t.org}/${t.repo}#${t.number}`))}),e.jsx("p",{className:"upstream-foot",children:"Also in progress: content negotiation in net/http for golang/go."})]})}const Ne="/assets/photo-B_7GL4ik.jpg";function Se(){return e.jsxs("figure",{className:"portrait-loop","aria-label":"Portrait of Udaykishore Resu inside an observe, decide, act, verify control loop",children:[e.jsx("img",{src:Ne,alt:"",width:216,height:216,loading:"lazy"}),e.jsxs("svg",{viewBox:"0 0 320 320","aria-hidden":"true",children:[e.jsx("path",{className:"loop-path",d:"M160 26 H264 A30 30 0 0 1 294 56 V264 A30 30 0 0 1 264 294 H56 A30 30 0 0 1 26 264 V56 A30 30 0 0 1 56 26 Z"}),e.jsx("polygon",{className:"loop-head",points:"156,22 164,26 156,30"}),e.jsx("polygon",{className:"loop-head",points:"290,156 294,164 298,156"}),e.jsx("polygon",{className:"loop-head",points:"164,290 156,294 164,298"}),e.jsx("polygon",{className:"loop-head",points:"22,164 26,156 30,164"}),e.jsx("text",{className:"loop-label",x:"160",y:"14",textAnchor:"middle",children:"observe"}),e.jsx("text",{className:"loop-label",x:"160",y:"-306",textAnchor:"middle",transform:"rotate(90)",children:"decide"}),e.jsx("text",{className:"loop-label",x:"160",y:"315",textAnchor:"middle",children:"act"}),e.jsx("text",{className:"loop-label",x:"-160",y:"14",textAnchor:"middle",transform:"rotate(-90)",children:"verify"})]})]})}function Ce(){return e.jsxs(S,{id:"about",title:"About",note:"Thirteen years, from embedded IoT protocols to the control planes of regulated platforms.",children:[e.jsxs("div",{className:"about-grid",children:[e.jsx("div",{className:"abstract",children:f.abstract.map(t=>e.jsx("p",{children:t},t.slice(0,24)))}),e.jsx(Se,{})]}),e.jsx("ol",{className:"career","aria-label":"Career",children:H.map(t=>e.jsxs("li",{children:[e.jsx("span",{className:"career-year",children:t.years}),e.jsx("span",{className:"career-company",children:t.company}),e.jsx("span",{className:"career-note",children:t.note})]},t.company))}),e.jsx("p",{className:"career-more",children:e.jsx("a",{className:"prose-link",href:"/experience/",children:"Full experience, toolkit, certifications and awards"})}),e.jsxs("div",{className:"about-foot",children:[e.jsxs("div",{className:"now-list",children:[e.jsx("h3",{children:"Working on right now"}),e.jsx("ul",{children:K.map(t=>e.jsx("li",{children:t.label},t.label))})]}),e.jsxs("div",{className:"now-list",children:[e.jsx("h3",{children:"Certified"}),e.jsx("ul",{children:J.map(t=>e.jsx("li",{children:t},t))})]})]})]})}function Re(){return e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"skip-link",href:"#lab",children:"Skip to the Lab"}),e.jsx(Q,{}),e.jsxs("main",{children:[e.jsx(ne,{}),e.jsx(ve,{}),e.jsx(ke,{}),e.jsx(_e,{}),z,e.jsx(Ce,{}),e.jsx(Y,{})]}),e.jsx(X,{})]})}Z(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(Re,{})}));
