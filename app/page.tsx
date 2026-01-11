'use client';

import { useState } from 'react';
import { Activity, BarChart3, Brain, Bot } from 'lucide-react';

export default function JavariOpsPage() {
  const [activeTab, setActiveTab] = useState('monitoring');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{color: '#1e3a8a'}}>Javari Ops</h1>
              <p className="text-sm text-slate-600">
                Operations · Analytics · Intelligence · Quality Assurance
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            {[
              { id: 'monitoring', icon: Activity, label: 'Monitoring' },
              { id: 'analytics', icon: BarChart3, label: 'Analytics' },
              { id: 'intelligence', icon: Brain, label: 'Intelligence' },
              { id: 'jie', icon: Bot, label: 'JIE Audits' }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    activeTab === tab.id
                      ? 'border-[#1e3a8a] bg-[#1e3a8a] text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-[#1e3a8a]'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-medium">{tab.label}</div>
                </button>
              );
            })}
          </div>

          {activeTab === 'monitoring' && (
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-xl font-bold mb-4">Platform Monitoring</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">42</div>
                  <div className="text-sm text-slate-600">Apps Online</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">1.2s</div>
                  <div className="text-sm text-slate-600">Avg Load Time</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-xl font-bold mb-4">Analytics Dashboard</h2>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold" style={{color: '#1e3a8a'}}>1,234</div>
                  <div className="text-sm text-slate-600">Total Users</div>
                  <div className="text-xs text-green-600 mt-1">+12% this month</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold" style={{color: '#06b6d4'}}>892</div>
                  <div className="text-sm text-slate-600">Active Users</div>
                  <div className="text-xs text-green-600 mt-1">+8% this month</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold" style={{color: '#dc2626'}}>$12,450</div>
                  <div className="text-sm text-slate-600">Revenue (MRR)</div>
                  <div className="text-xs text-green-600 mt-1">+24% this month</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3.2%</div>
                  <div className="text-sm text-slate-600">Conversion Rate</div>
                  <div className="text-xs text-green-600 mt-1">+0.4% this month</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'intelligence' && (
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-xl font-bold mb-4">AI-Powered Insights</h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Invoice app showing highest conversion</div>
                      <div className="text-sm text-slate-600 mt-1">Users who try Invoice are 3x more likely to subscribe</div>
                      <div className="text-xs text-slate-500 mt-2">Recommendation: Increase marketing spend on Invoice</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Spirits app has high bounce rate</div>
                      <div className="text-sm text-slate-600 mt-1">68% of users leave without exploring products</div>
                      <div className="text-xs text-slate-500 mt-2">Recommendation: Add featured spirits section</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'jie' && (
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-xl font-bold mb-4">JIE Brand Audits</h2>
              <div className="mb-4">
                <input
                  type="url"
                  placeholder="Enter app URL to audit..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                />
                <button className="mt-2 px-6 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e3a8a]/90">
                  Run Audit
                </button>
              </div>
              <div className="text-sm text-slate-500">
                No audits run yet. Enter a URL above to start.
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
