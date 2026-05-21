// app/page.tsx — Javari Ops · CR AudioViz AI · EIN: 39-3646201 · May 2026
// Platform operations dashboard
'use client'
import { useState, useEffect } from 'react'

const METRICS = [
  { label: 'Apps Live', value: '159', icon: '🚀', color: '#6366f1' },
  { label: 'Platform Status', value: 'READY', icon: '✅', color: '#22c55e' },
  { label: 'EIN', value: '39-3646201', icon: '🏢', color: '#f59e0b' },
  { label: 'Build Health', value: '98%', icon: '💚', color: '#10b981' },
]

export default function JavariOpsPage() {
  const [now, setNow] = useState('')
  useEffect(() => {
    setNow(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }))
    const t = setInterval(() => setNow(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#080812', color: '#e2e8f0', fontFamily: 'system-ui' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 4px', color: '#fff' }}>
              ⚙️ Javari Ops
            </h1>
            <p style={{ color: '#6b7280', fontSize: 13, margin: 0 }}>
              CR AudioViz AI · EIN: 39-3646201 · Platform Operations Dashboard
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, color: '#374151' }}>{now}</div>
            <div style={{ fontSize: 11, color: '#10b981', marginTop: 2 }}>● All Systems Operational</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 32 }}>
          {METRICS.map((m, i) => (
            <div key={i} style={{
              background: '#0d0d1a',
              border: `1px solid ${m.color}25`,
              borderRadius: 14, padding: '20px 24px'
            }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{m.icon}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: m.color }}>{m.value}</div>
              <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>{m.label}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#0d0d1a', border: '1px solid rgba(99,102,241,0.12)', borderRadius: 16, padding: 24 }}>
          <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700 }}>Platform Links</h2>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              ['craudiovizai.com', 'https://craudiovizai.com', '#6366f1'],
              ['javariai.com', 'https://javariai.com', '#8b5cf6'],
              ['Grants', 'https://craudiovizai.com/grants', '#22c55e'],
              ['Sign Up', 'https://craudiovizai.com/auth/signup', '#f59e0b'],
            ].map(([label, url, color]) => (
              <a key={label} href={url}
                style={{
                  background: `${color}15`, border: `1px solid ${color}30`,
                  color, borderRadius: 8, padding: '8px 16px',
                  fontSize: 13, fontWeight: 600, textDecoration: 'none'
                }}>
                {label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
