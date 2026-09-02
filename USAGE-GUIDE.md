# Aurora AI — Istemal Ki Hidayat (Usage Guide)

Yeh guide aap ko batati hai ke is SaaS demo application ko kaise istemal karna hai. Yeh ek **portfolio/demo project** hai — asli backend nahi hai, sab kuch mock data aur simulated authentication se chalta hai.

---

## Shuru Kaise Karein

### 1. Application Chalana

Terminal mein project folder mein jayein aur yeh commands chalayein:

```
npm install
npm run dev
```

Browser mein `http://localhost:5173` kholein.

---

## Public Pages (Marketing Site)

Yeh pages bina login ke dekhe ja sakte hain:

### Home Page (`/`)
- Aurora AI ki landing page hai
- Hero section, features, testimonials, pricing preview, aur FAQ yahan hain
- **"Start Free Trial"** ya **"Log In"** button se signup/login page par jayein

### Pricing Page (`/pricing`)
- Teen plans hain: Starter ($29), Pro ($79), Enterprise ($199)
- Monthly/Yearly toggle se price change hoti hai
- Neeche detailed feature comparison table hai

---

## Demo Login Kaise Kaam Karta Hai

> **Zaroori:** Yeh asli authentication nahi hai — sirf demo ke liye hai.

### Login (`/login`)
- Page khulte hi email aur password **automatically bhare hue** hote hain:
  - **Email:** `demo@auroraai.com`
  - **Password:** `demo1234`
- Upar ek neela banner dikhega: *"Demo Mode — credentials are pre-filled"*
- Bas **"Sign In"** button dabayein — ~1 second loading ke baad dashboard khul jayega

### Signup (`/signup`)
- Wahi demo behavior — naam, email, password pehle se bhare hue
- **"Create Account"** dabayein aur seedha dashboard par redirect ho jayein

Login state `localStorage` mein save hoti hai, is liye page refresh ke baad bhi logged in rahenge.

---

## Dashboard Navigation

Login ke baad left sidebar se tamam sections tak pohanch sakte hain:

| Section | Route | Kya Hai |
|---------|-------|---------|
| **Overview** | `/dashboard` | Main dashboard — stats, usage chart, recent activity |
| **Analytics** | `/dashboard/analytics` | Line, bar, pie charts aur metrics table |
| **Automations** | `/dashboard/automations` | Workflow cards — active/pause toggle |
| **Projects** | `/dashboard/projects` | Projects grid/table — kisi project par click se detail |
| **Team** | `/dashboard/team` | Team members ki list — invite button (decorative) |
| **Integrations** | `/dashboard/integrations` | Slack, Salesforce waghera — Connect/Connected toggle |
| **Billing** | `/dashboard/billing` | Plan, usage meters, invoices, payment method |
| **Settings** | `/dashboard/settings` | Profile, notifications, security, API keys |

### Top Bar
- Page title dynamically change hota hai
- Search bar aur notification bell (decorative)
- User avatar dropdown

---

## Har Section Ka Maqsad

### Overview
- 4 stat cards: automations, projects, team, usage (animated count-up)
- Usage trends chart — 7d/30d/90d tabs
- Recent activity feed aur quick action buttons

### Analytics
- Revenue, users, channel performance charts
- Donut chart — usage breakdown
- Sortable metrics table

### Automations
- Har automation card par status toggle (active/paused)
- **"Create New Automation"** se modal khulta hai (functional nahi, sirf UI)

### Projects
- Grid ya table view toggle
- Project par click → detail page with tabs (Overview, Tasks, Activity, Settings)

### Team
- Members ki table — avatar, email, role, status
- **"Invite Member"** modal (decorative)

### Integrations
- Integration cards — Connect/Connected button se state change

### Billing (SaaS Showcase)
- Current Pro plan card
- Usage meters — limit ke qareeb hone par color change
- Plan comparison cards — switch plan confirmation modal
- Payment method (Visa •••• 4242)
- Billing history table — download buttons (decorative)

### Settings
- **Profile:** naam, email edit
- **Notifications:** toggle switches
- **Security:** password change, 2FA toggle
- **API Keys:** show/hide, generate button

---

## Log Out Kaise Karein

Sidebar ke neeche user profile ke paas **"Log Out"** button hai. Is se:
- Login state clear ho jati hai
- Aap home page (`/`) par wapas chale jate hain

---

## Poora Demo Flow (Client Ko Dikhane Ke Liye)

1. Home page kholein — landing page dikhao
2. **"Start Free Trial"** → Signup page
3. Pre-filled form dikhao, **"Create Account"** dabao
4. Dashboard Overview explore karo
5. Sidebar se Analytics, Automations, Projects navigate karo
6. Billing page dikhao — yeh SaaS feel ka best part hai
7. **Log Out** karke wapas home par jao

---

## Technical Notes

- **Stack:** React 18 + Vite, React Router, Tailwind CSS, Framer Motion, Recharts
- **Auth:** React Context + localStorage (no real API)
- **Data:** Sab `src/data/mockData.js` se aata hai

Koi sawal ho to project ke developer se rabta karein.
