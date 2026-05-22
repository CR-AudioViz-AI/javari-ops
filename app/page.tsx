// app/page.tsx - javari-ops
// SSR page with EIN visible in initial HTML for bots/crawlers
// CR AudioViz AI · EIN 39-3646201 · May 2026
export const dynamic = "force-dynamic";

export default function JavariOpsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#080812", color: "#e2e8f0", fontFamily: "system-ui" }}>
      <div style={{ background: "#1E3A5F", padding: "6px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#00B4D8", fontWeight: 800, fontSize: 14 }}>Javari Ops &mdash; CR AudioViz AI &mdash; EIN 39-3646201</span>
        <a href="https://craudiovizai.com/auth/signup" style={{ background: "#FF0800", color: "#fff", borderRadius: 6, padding: "4px 14px", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>Sign Up</a>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 8 }}>Javari Ops</h1>
        <p style={{ color: "#6B7280", marginBottom: 32 }}>CR AudioViz AI, LLC &mdash; EIN: 39-3646201 &mdash; Fort Myers, Florida</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
          {[["159+","Apps Live","#00B4D8"],["✅","Platform Up","#FF0800"],["EIN","39-3646201","#1E3A5F"],["FL","Fort Myers","#00B4D8"]].map(([v,l,c]) => (
            <div key={l} style={{ background: "#0F1F32", border: `1px solid ${c}30`, borderRadius: 14, padding: "20px 24px" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: c }}>{v}</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 40, fontSize: 11, color: "#374151", textAlign: "center" }}>
          &copy; 2026 CR AudioViz AI, LLC &mdash; EIN: 39-3646201 &middot;
          <a href="https://craudiovizai.com" style={{ color: "#6B7280", textDecoration: "none", marginLeft: 4 }}>craudiovizai.com</a>
        </p>
      </div>
    </div>
  );
}
