#  Agent Mirror

> **An AI that shows merchants how shopping agents interpret their store - and why their products get skipped.**

Built for the **Kasparro Agentic Commerce Hackathon **
Track 5: AI Representation Optimizer

---

## The Problem

When an AI shopping agent recommends products, it doesn't browse your store like a human. It reads flattened text - product descriptions, policies, reviews, structured data. If that data is incomplete, ambiguous, or contradictory, the agent either skips your store or misrepresents it.

Most merchants have no idea this is happening. There's no visibility into how AI agents perceive their store - until now.

---

## What Agent Mirror Does

Agent Mirror audits a Shopify store from the perspective of an AI shopping agent and tells merchants exactly why they're getting skipped.

**Core flow:**
1. Merchant enters their Shopify store URL
2. We scrape the store and build a text corpus - what an AI agent actually sees
3. We simulate a live Claude shopping agent with real buyer queries
4. We surface verbatim what the agent said about the store
5. We score the store across 5 AI readiness dimensions
6. We generate a ranked fix queue with one-click copy actions

---

## Key Features

- **AI Readiness Score** - rated across trust signals, policy clarity, product data, FAQ coverage, and schema quality
- **Live Agent Simulation** - Claude acts as a shopping agent; we show exactly what it recommended and what made it hesitate
- **Merchant vs AI Perception Diff** - side-by-side view of what the merchant intends to communicate vs what the AI actually extracts
- **Ranked Fix Queue** - improvements ranked by conversion impact, not just completeness
- **One-click Fixes** - generated FAQ rewrites, policy improvements, and schema markup ready to paste
- **Re-audit Flow** - run the audit again after fixes to see score improvement

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | Node.js |
| AI Layer | Claude API (Anthropic) — agent simulation + fix generation |
| Store Data | Shopify Admin API + Storefront API |
| Scraping | Cheerio / custom scraper |

**AI/Deterministic boundary:**
- Deterministic: scraping, text extraction, scoring rubric, structured gap detection
- AI (Claude): shopping agent simulation, fix generation, policy rewrite suggestions

---

## Repo Structure

```
agent-mirror/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # AuditScore, AgentQuotes, FixQueue, DiffView
│   │   └── pages/        # Home, Audit, Results
├── server/               # Node.js backend
│   ├── scraper/          # Shopify store scraper
│   ├── corpus/           # Text corpus builder
│   ├── simulation/       # Claude agent simulation prompts
│   ├── scorer/           # Gap scoring logic
│   └── routes/           # API endpoints
├── docs/
│   ├── PRODUCT.md        # Product document
│   ├── TECHNICAL.md      # Technical document
│   └── DECISIONS.md      # Decision log
├── README.md
└── .env.example
```

---

## Setup Instructions

### Prerequisites
- Node.js v18+
- Anthropic API key
- Shopify Partner account + dev store

### Installation

```bash
# Clone the repo
git clone https://github.com/prateeksingh/agent-mirror.git
cd agent-mirror

# Install dependencies
npm install
cd client && npm install && cd ..

# Set up environment variables
cp .env.example .env
# Add your ANTHROPIC_API_KEY and SHOPIFY credentials to .env

# Run the app
npm run dev
```

### Environment Variables

```
ANTHROPIC_API_KEY=your_key_here
SHOPIFY_API_KEY=your_key_here
SHOPIFY_API_SECRET=your_secret_here
PORT=3001
```

---

## Demo

> 🎥 Demo video link — *coming soon*

> 🔗 Live demo — *coming soon*

---

## Documentation

- [Product Document](docs/PRODUCT.md) - problem framing, scope decisions, product thinking
- [Technical Document](docs/TECHNICAL.md) - architecture, failure handling, AI boundary
- [Decision Log](docs/DECISIONS.md) - key decisions and tradeoffs made during development

---

## Team

**TwoDuo**

| Name | Role |
|---|---|
| Prateek Singh | Product thinking + engineering |
| Raj Kushwaha | Engineering + architecture |

---

## Hackathon Submission

- **Event:** Kasparro Agentic Commerce Hackathon
- **Track:**  AI Representation Optimizer (Advanced)

