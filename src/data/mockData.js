export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Perfect for small teams getting started with AI automation.',
    features: [
      'Up to 5 team members',
      '10 automations',
      '5,000 API calls/month',
      'Basic analytics',
      'Email support',
      '7-day data retention',
    ],
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: 'For growing teams that need advanced analytics and automation.',
    features: [
      'Up to 25 team members',
      '50 automations',
      '10,000 API calls/month',
      'Advanced analytics & reports',
      'Priority support',
      '30-day data retention',
      'Custom integrations',
      'Team collaboration tools',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'For large organizations with custom needs and dedicated support.',
    features: [
      'Unlimited team members',
      'Unlimited automations',
      '100,000 API calls/month',
      'Enterprise analytics suite',
      'Dedicated account manager',
      'Unlimited data retention',
      'SSO & SAML',
      'Custom SLA',
      'Audit logs',
    ],
    popular: false,
  },
]

export const pricingComparison = [
  { feature: 'Team members', starter: '5', pro: '25', enterprise: 'Unlimited' },
  { feature: 'Automations', starter: '10', pro: '50', enterprise: 'Unlimited' },
  { feature: 'API calls/month', starter: '5,000', pro: '10,000', enterprise: '100,000' },
  { feature: 'Advanced analytics', starter: false, pro: true, enterprise: true },
  { feature: 'Custom integrations', starter: false, pro: true, enterprise: true },
  { feature: 'Priority support', starter: false, pro: true, enterprise: true },
  { feature: 'SSO & SAML', starter: false, pro: false, enterprise: true },
  { feature: 'Audit logs', starter: false, pro: false, enterprise: true },
  { feature: 'Dedicated account manager', starter: false, pro: false, enterprise: true },
]

export const faqItems = [
  {
    question: 'What is Aurora AI?',
    answer:
      'Aurora AI is an AI-powered analytics and automation platform that helps businesses connect their data, gain actionable insights, and automate repetitive workflows — all from one unified dashboard.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! Every plan includes a 14-day free trial with full access to all features. No credit card required to get started.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time from the Billing page in your dashboard. Changes take effect immediately.',
  },
  {
    question: 'How does the AI automation work?',
    answer:
      'Aurora AI uses machine learning to analyze your data patterns and suggest automations. You can create custom workflows with triggers, conditions, and actions — no coding required.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. We use AES-256 encryption at rest, TLS 1.3 in transit, and are SOC 2 Type II compliant. Enterprise plans include SSO and audit logs.',
  },
  {
    question: 'What integrations are supported?',
    answer:
      'Aurora AI integrates with 50+ popular tools including Slack, Salesforce, HubSpot, Google Analytics, Stripe, and more. Custom integrations are available on Pro and Enterprise plans.',
  },
]

export const testimonials = [
  {
    quote:
      'Aurora AI cut our reporting time by 70%. The automation workflows alone saved our team 20 hours per week.',
    name: 'Sarah Chen',
    role: 'VP of Operations',
    company: 'TechFlow Inc.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    quote:
      'The analytics dashboard gives us insights we never had before. It feels like having a data scientist on the team.',
    name: 'Marcus Johnson',
    role: 'Head of Growth',
    company: 'ScaleUp Labs',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
  },
  {
    quote:
      'We evaluated five tools before choosing Aurora. The combination of analytics and automation in one platform is unmatched.',
    name: 'Emily Rodriguez',
    role: 'CTO',
    company: 'DataPulse',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
  },
  {
    quote:
      'Onboarding was seamless. Our entire team was up and running in under an hour. The UI is incredibly intuitive.',
    name: 'James Park',
    role: 'Product Manager',
    company: 'Nexus Digital',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
  },
]

export const logoCompanies = ['Acme Corp', 'Globex', 'Initech', 'Umbrella', 'Stark Industries', 'Wayne Ent.', 'Oscorp', 'Cyberdyne']

export const usageChartData = {
  '7d': [
    { date: 'Jul 2', usage: 420, automations: 28 },
    { date: 'Jul 3', usage: 580, automations: 35 },
    { date: 'Jul 4', usage: 490, automations: 31 },
    { date: 'Jul 5', usage: 720, automations: 42 },
    { date: 'Jul 6', usage: 650, automations: 38 },
    { date: 'Jul 7', usage: 810, automations: 45 },
    { date: 'Jul 8', usage: 890, automations: 52 },
  ],
  '30d': [
    { date: 'Jun 9', usage: 320, automations: 22 },
    { date: 'Jun 14', usage: 450, automations: 28 },
    { date: 'Jun 19', usage: 380, automations: 25 },
    { date: 'Jun 24', usage: 520, automations: 32 },
    { date: 'Jun 29', usage: 610, automations: 38 },
    { date: 'Jul 4', usage: 490, automations: 31 },
    { date: 'Jul 8', usage: 890, automations: 52 },
  ],
  '90d': [
    { date: 'Apr', usage: 280, automations: 18 },
    { date: 'May', usage: 420, automations: 26 },
    { date: 'Jun', usage: 580, automations: 35 },
    { date: 'Jul', usage: 890, automations: 52 },
  ],
}

export const analyticsChartData = {
  line: [
    { month: 'Jan', revenue: 4200, users: 2400, conversions: 180 },
    { month: 'Feb', revenue: 5100, users: 2800, conversions: 220 },
    { month: 'Mar', revenue: 4800, users: 2600, conversions: 195 },
    { month: 'Apr', revenue: 6200, users: 3200, conversions: 280 },
    { month: 'May', revenue: 7100, users: 3800, conversions: 310 },
    { month: 'Jun', revenue: 8400, users: 4200, conversions: 350 },
    { month: 'Jul', revenue: 9200, users: 4600, conversions: 390 },
  ],
  bar: [
    { category: 'Email', sent: 12400, opened: 8200, clicked: 3100 },
    { category: 'Slack', sent: 8900, opened: 7600, clicked: 4200 },
    { category: 'Webhook', sent: 5600, opened: 5400, clicked: 4800 },
    { category: 'API', sent: 15200, opened: 14800, clicked: 12100 },
    { category: 'SMS', sent: 3200, opened: 2800, clicked: 1100 },
  ],
  pie: [
    { name: 'Automations', value: 35, color: '#4f46e5' },
    { name: 'Analytics', value: 28, color: '#7c3aed' },
    { name: 'Integrations', value: 22, color: '#3b82f6' },
    { name: 'Reports', value: 15, color: '#10b981' },
  ],
}

export const analyticsTableData = [
  { id: 1, metric: 'Page Views', value: '124,892', change: '+12.4%', trend: 'up', category: 'Traffic' },
  { id: 2, metric: 'Unique Visitors', value: '45,231', change: '+8.2%', trend: 'up', category: 'Traffic' },
  { id: 3, metric: 'Bounce Rate', value: '32.1%', change: '-3.5%', trend: 'down', category: 'Engagement' },
  { id: 4, metric: 'Avg. Session', value: '4m 32s', change: '+15.8%', trend: 'up', category: 'Engagement' },
  { id: 5, metric: 'Conversion Rate', value: '3.8%', change: '+0.6%', trend: 'up', category: 'Revenue' },
  { id: 6, metric: 'Revenue', value: '$92,400', change: '+22.1%', trend: 'up', category: 'Revenue' },
  { id: 7, metric: 'Cart Abandonment', value: '68.2%', change: '-2.1%', trend: 'down', category: 'Revenue' },
  { id: 8, metric: 'API Latency', value: '142ms', change: '-8.4%', trend: 'down', category: 'Performance' },
]

export const overviewStats = [
  { label: 'Total Automations Run', value: 12847, change: '+12%', trend: 'up', icon: 'Zap' },
  { label: 'Active Projects', value: 24, change: '+3', trend: 'up', icon: 'FolderKanban' },
  { label: 'Team Members', value: 18, change: '+2', trend: 'up', icon: 'Users' },
  { label: 'Monthly Usage', value: 8400, change: '84%', trend: 'neutral', icon: 'Activity', suffix: ' / 10K' },
]

export const recentActivity = [
  { id: 1, type: 'automation', message: 'Email digest automation completed successfully', time: '2 min ago', icon: 'Zap' },
  { id: 2, type: 'project', message: 'Project "Q3 Marketing Campaign" was updated', time: '15 min ago', icon: 'FolderKanban' },
  { id: 3, type: 'team', message: 'Alex Thompson joined the team', time: '1 hour ago', icon: 'UserPlus' },
  { id: 4, type: 'integration', message: 'Slack integration synced 142 messages', time: '2 hours ago', icon: 'Link' },
  { id: 5, type: 'report', message: 'Weekly analytics report generated', time: '3 hours ago', icon: 'FileText' },
  { id: 6, type: 'billing', message: 'Invoice #INV-2024-089 paid successfully', time: '5 hours ago', icon: 'CreditCard' },
]

export const automations = [
  { id: 1, name: 'Daily Email Digest', status: 'active', lastRun: '2 min ago', trigger: 'Schedule', runs: 847 },
  { id: 2, name: 'Lead Scoring Pipeline', status: 'active', lastRun: '15 min ago', trigger: 'Webhook', runs: 2341 },
  { id: 3, name: 'Slack Alert on Error', status: 'active', lastRun: '1 hour ago', trigger: 'Event', runs: 156 },
  { id: 4, name: 'Weekly Report Generator', status: 'paused', lastRun: '3 days ago', trigger: 'Schedule', runs: 52 },
  { id: 5, name: 'Customer Onboarding Flow', status: 'active', lastRun: '30 min ago', trigger: 'Event', runs: 892 },
  { id: 6, name: 'Data Sync — Salesforce', status: 'active', lastRun: '45 min ago', trigger: 'Schedule', runs: 1204 },
  { id: 7, name: 'Invoice Reminder', status: 'paused', lastRun: '1 week ago', trigger: 'Schedule', runs: 28 },
  { id: 8, name: 'Churn Risk Detection', status: 'active', lastRun: '2 hours ago', trigger: 'AI Trigger', runs: 445 },
]

export const projects = [
  {
    id: 1,
    name: 'Q3 Marketing Campaign',
    status: 'active',
    progress: 72,
    team: ['Sarah', 'Marcus', 'Emily'],
    lastUpdated: '2 hours ago',
    description: 'Multi-channel marketing campaign for Q3 product launch.',
  },
  {
    id: 2,
    name: 'Customer Retention Analysis',
    status: 'active',
    progress: 45,
    team: ['James', 'Alex'],
    lastUpdated: '5 hours ago',
    description: 'Analyze churn patterns and build retention automations.',
  },
  {
    id: 3,
    name: 'Sales Pipeline Optimization',
    status: 'completed',
    progress: 100,
    team: ['Sarah', 'James', 'Marcus', 'Emily'],
    lastUpdated: '1 day ago',
    description: 'Optimize sales funnel with AI-driven lead scoring.',
  },
  {
    id: 4,
    name: 'Product Analytics Dashboard',
    status: 'active',
    progress: 88,
    team: ['Alex', 'Emily'],
    lastUpdated: '3 hours ago',
    description: 'Build comprehensive product usage analytics dashboard.',
  },
  {
    id: 5,
    name: 'API Integration Suite',
    status: 'paused',
    progress: 30,
    team: ['Marcus'],
    lastUpdated: '3 days ago',
    description: 'Connect third-party APIs for unified data pipeline.',
  },
  {
    id: 6,
    name: 'Compliance Audit 2024',
    status: 'active',
    progress: 60,
    team: ['Sarah', 'Alex', 'James'],
    lastUpdated: '1 day ago',
    description: 'Annual compliance audit and security review.',
  },
]

export const projectTasks = [
  { id: 1, title: 'Design email templates', status: 'done', assignee: 'Sarah', due: 'Jul 1' },
  { id: 2, title: 'Set up A/B test variants', status: 'in-progress', assignee: 'Marcus', due: 'Jul 10' },
  { id: 3, title: 'Configure audience segments', status: 'in-progress', assignee: 'Emily', due: 'Jul 12' },
  { id: 4, title: 'Review analytics baseline', status: 'todo', assignee: 'James', due: 'Jul 15' },
  { id: 5, title: 'Launch campaign', status: 'todo', assignee: 'Sarah', due: 'Jul 20' },
]

export const projectActivity = [
  { id: 1, user: 'Sarah Chen', action: 'updated the campaign brief', time: '2 hours ago' },
  { id: 2, user: 'Marcus Johnson', action: 'added 3 A/B test variants', time: '5 hours ago' },
  { id: 3, user: 'Emily Rodriguez', action: 'configured audience segment "Enterprise"', time: '1 day ago' },
  { id: 4, user: 'Sarah Chen', action: 'created the project', time: '2 weeks ago' },
]

export const teamMembers = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techflow.com', role: 'Admin', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: 2, name: 'Marcus Johnson', email: 'marcus@techflow.com', role: 'Editor', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus' },
  { id: 3, name: 'Emily Rodriguez', email: 'emily@techflow.com', role: 'Editor', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
  { id: 4, name: 'James Park', email: 'james@techflow.com', role: 'Viewer', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
  { id: 5, name: 'Alex Thompson', email: 'alex@techflow.com', role: 'Editor', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
  { id: 6, name: 'Lisa Wang', email: 'lisa@techflow.com', role: 'Viewer', status: 'invited', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa' },
]

export const integrations = [
  { id: 1, name: 'Slack', description: 'Send notifications and alerts to Slack channels', connected: true, category: 'Communication' },
  { id: 2, name: 'Salesforce', description: 'Sync CRM data and automate sales workflows', connected: true, category: 'CRM' },
  { id: 3, name: 'Google Analytics', description: 'Import analytics data for unified reporting', connected: true, category: 'Analytics' },
  { id: 4, name: 'HubSpot', description: 'Connect marketing automation and lead data', connected: false, category: 'Marketing' },
  { id: 5, name: 'Stripe', description: 'Track payments and subscription metrics', connected: true, category: 'Payments' },
  { id: 6, name: 'Zapier', description: 'Connect with 5,000+ apps via Zapier', connected: false, category: 'Automation' },
  { id: 7, name: 'Notion', description: 'Sync documents and project data', connected: false, category: 'Productivity' },
  { id: 8, name: 'GitHub', description: 'Track development metrics and deployments', connected: true, category: 'Development' },
  { id: 9, name: 'Intercom', description: 'Customer support and messaging integration', connected: false, category: 'Support' },
]

export const invoices = [
  { id: 'INV-2024-089', date: 'Jul 1, 2024', amount: '$79.00', status: 'paid' },
  { id: 'INV-2024-078', date: 'Jun 1, 2024', amount: '$79.00', status: 'paid' },
  { id: 'INV-2024-067', date: 'May 1, 2024', amount: '$79.00', status: 'paid' },
  { id: 'INV-2024-056', date: 'Apr 1, 2024', amount: '$79.00', status: 'paid' },
  { id: 'INV-2024-045', date: 'Mar 1, 2024', amount: '$29.00', status: 'paid' },
  { id: 'INV-2024-034', date: 'Feb 1, 2024', amount: '$29.00', status: 'paid' },
]

export const usageMeters = [
  { label: 'API Calls', used: 8400, limit: 10000, unit: 'calls' },
  { label: 'Automations', used: 45, limit: 50, unit: 'workflows' },
  { label: 'Team Members', used: 18, limit: 25, unit: 'members' },
  { label: 'Storage', used: 2.4, limit: 5, unit: 'GB' },
]

export const apiKeys = [
  { id: 1, name: 'Production API Key', key: 'aur_live_sk_4f8a2b9c1d3e5f7a8b0c2d4e6f8a0b2', created: 'Mar 15, 2024', lastUsed: '2 min ago' },
  { id: 2, name: 'Development API Key', key: 'aur_test_sk_1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6', created: 'Jan 10, 2024', lastUsed: '1 day ago' },
]

export const navItems = [
  { path: '/dashboard', label: 'Overview', icon: 'LayoutDashboard' },
  { path: '/dashboard/analytics', label: 'Analytics', icon: 'BarChart3' },
  { path: '/dashboard/automations', label: 'Automations', icon: 'Zap' },
  { path: '/dashboard/projects', label: 'Projects', icon: 'FolderKanban' },
  { path: '/dashboard/team', label: 'Team', icon: 'Users' },
  { path: '/dashboard/integrations', label: 'Integrations', icon: 'Plug' },
  { path: '/dashboard/billing', label: 'Billing', icon: 'CreditCard' },
  { path: '/dashboard/settings', label: 'Settings', icon: 'Settings' },
]

export const pageTitles = {
  '/dashboard': 'Overview',
  '/dashboard/analytics': 'Analytics',
  '/dashboard/automations': 'Automations',
  '/dashboard/projects': 'Projects',
  '/dashboard/team': 'Team',
  '/dashboard/integrations': 'Integrations',
  '/dashboard/billing': 'Billing & Subscription',
  '/dashboard/settings': 'Settings',
}
