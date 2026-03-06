import { useState, useRef, useEffect } from "react";

interface KnowledgeEntry {
  keywords: string[];
  answer: string;
  followUps: string[];
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ["what is observenow", "about observenow", "what does observenow do", "tell me about", "observenow.ai"],
    answer: "ObserveNow.AI is an AI-powered B2B Sales Intelligence Platform. It provides smarter targeting, deeper insights, and real decision-maker connections — all in 3 clicks. Trusted by 500+ Fortune companies including Google, Microsoft, IBM, and NTT Data.",
    followUps: ["What are the core features?", "What pricing plans are available?", "How does the Chrome Extension work?"]
  },
  {
    keywords: ["feature", "core offering", "what can it do", "capabilities", "core features"],
    answer: "ObserveNow.AI offers 4 core features:\n\n1️⃣ **Unique Add-On Datasets** — Verified CXO intelligence from your account list, ready-to-use CXO data packs by industry.\n2️⃣ **AI Lead Recommendations** — Smart activity-based suggestions and personalized platform insights.\n3️⃣ **Verified CXO Contacts** — Access names, emails & phone numbers with job change updates and LinkedIn access.\n4️⃣ **Chrome Extension** — Target by role, industry, or company and find qualified leads faster.",
    followUps: ["How does the Chrome Extension work?", "What pricing plans are available?", "How accurate is the data?"]
  },
  {
    keywords: ["pricing", "plan", "cost", "how much", "price", "subscription"],
    answer: "ObserveNow.AI offers 3 pricing plans:\n\n🚀 **Starter** — ₹2,083/month (₹24,999/year) — 3,400 credits, 1 user\n🏢 **Business** (Most Popular) — ₹5,833/month (₹69,999/year) — 11,000 credits, up to 3 users\n👑 **Enterprise** — ₹11,916/month (₹142,999/year) — 24,500 credits, up to 5 users\n\nAll plans include LinkedIn enrichment, email & phone verification, Chrome extension, and CRM management.",
    followUps: ["What's included in the Starter plan?", "What are credits used for?", "How do I get a free trial?"]
  },
  {
    keywords: ["starter plan", "starter"],
    answer: "The **Starter Plan** is perfect for growing teams:\n\n• ₹2,083/month (₹24,999/year billed annually)\n• 3,400 credits per year (all granted upfront)\n• 1 user\n• Email reveal: 1 credit | Phone reveal: 4 credits\n• Includes: LinkedIn enrichment, email & phone verification, Chrome extension, CRM management, and basic support.",
    followUps: ["What's in the Business plan?", "What are credits used for?", "How do I sign up?"]
  },
  {
    keywords: ["business plan"],
    answer: "The **Business Plan** (Most Popular):\n\n• ₹5,833/month (₹69,999/year billed annually)\n• 11,000 credits per year (all granted upfront)\n• Up to 3 users\n• Email reveal: 1 credit | Phone reveal: 4 credits\n• Includes everything in Starter plus priority support.",
    followUps: ["What's in the Enterprise plan?", "What's in the Starter plan?", "How do I upgrade?"]
  },
  {
    keywords: ["enterprise plan"],
    answer: "The **Enterprise Plan** for large teams:\n\n• ₹11,916/month (₹142,999/year billed annually)\n• 24,500 credits per year (all granted upfront)\n• Up to 5 users\n• Email reveal: 1 credit | Phone reveal: 4 credits\n• Includes everything plus a dedicated account manager and premium support.",
    followUps: ["Can I get a custom plan?", "How do I contact sales?", "What are the core features?"]
  },
  {
    keywords: ["credit", "credits used for", "how credits work"],
    answer: "Credits are used to reveal contact information:\n\n📧 **Email reveal** = 1 credit\n📱 **Phone reveal** = 4 credits\n\nAll credits are granted upfront at the start of your billing cycle. Starter gets 3,400/year, Business gets 11,000/year, and Enterprise gets 24,500/year.",
    followUps: ["What pricing plans are available?", "Can I buy more credits?", "How do I check my credit balance?"]
  },
  {
    keywords: ["chrome extension", "extension", "browser", "install"],
    answer: "The ObserveNow.AI Chrome Extension supercharges your prospecting directly on LinkedIn and other websites in real time.\n\n**How it works:**\n1️⃣ **Install** — Add from Chrome Store in seconds\n2️⃣ **Browse** — Visit LinkedIn profiles or company websites as usual\n3️⃣ **Capture** — Get real-time data, signals, and save leads instantly\n\nIt's free to add!",
    followUps: ["How do I install the extension?", "What data can I capture?", "Does it work on LinkedIn?"]
  },
  {
    keywords: ["lead", "leads", "find leads", "generate leads", "lead generation"],
    answer: "ObserveNow.AI helps you generate high-quality leads through:\n\n• **AI Lead Recommendations** — Smart, activity-based suggestions with personalized insights\n• **Verified CXO Contacts** — Access names, emails & phone numbers of decision-makers\n• **Chrome Extension** — Target by role, industry, or company directly on LinkedIn\n• **CXO Data Packs** — Ready-to-use data packs organized by industry",
    followUps: ["How does AI Lead Recommendation work?", "What is CXO data?", "How accurate is the contact data?"]
  },
  {
    keywords: ["cxo", "cxo data", "decision maker", "executive"],
    answer: "ObserveNow.AI specializes in CXO-level intelligence:\n\n• Verified CXO contacts with names, emails & phone numbers\n• Ready-to-use CXO data packs organized by industry\n• Job change tracking to stay updated\n• Direct LinkedIn profile access\n• Millions of CXO data points and data sets available",
    followUps: ["How is the data verified?", "What industries are covered?", "What pricing plans are available?"]
  },
  {
    keywords: ["free trial", "try free", "trial", "demo"],
    answer: "Yes! ObserveNow.AI offers a free trial — no credit card required! You can sign up at dashboard.observenow.ai/signup to get started immediately. The platform has a 4.4/5 rating.",
    followUps: ["What's included in the free trial?", "What pricing plans are available?", "How do I contact sales?"]
  },
  {
    keywords: ["contact sales", "talk to sales", "support", "help", "contact"],
    answer: "You can reach the ObserveNow.AI team through:\n\n• **Contact Sales**: Visit observenow.ai/contact\n• **Support**: Available based on your plan (Basic → Priority → Premium)\n• Enterprise plans include a **dedicated account manager**",
    followUps: ["What pricing plans are available?", "What are the core features?", "How do I get a free trial?"]
  },
  {
    keywords: ["integration", "integrate", "crm", "tools", "connect"],
    answer: "ObserveNow.AI integrates with popular tools including:\n\nSlack, Dropbox, LinkedIn, HubSpot, Discord, WhatsApp, Zoom, GitHub, Shopify, Mailchimp, Google Drive, and Notion.\n\nAll plans include CRM contact management capabilities.",
    followUps: ["How does the Chrome Extension work?", "What are the core features?", "What pricing plans are available?"]
  },
  {
    keywords: ["data", "accuracy", "verified", "how accurate", "data quality"],
    answer: "ObserveNow.AI ensures data quality through:\n\n• **Verified data infrastructure** for accurate targeting\n• **AI-driven Contact + Account Intelligence**\n• **Email & phone verification** included in all plans\n• **Job change tracking** to keep data current\n• Trusted by 500+ Fortune companies for reliable data",
    followUps: ["What industries are covered?", "How does AI intelligence work?", "What are CXO data packs?"]
  },
  {
    keywords: ["how it works", "process", "steps", "get started", "sign up"],
    answer: "ObserveNow.AI follows a 5-stage approach — From Data to Revenue:\n\n1️⃣ **Foundation** — Verified data infrastructure for accurate targeting\n2️⃣ **Recognition** — AI-driven contact + account intelligence\n3️⃣ **Community** — Data + events network + client ecosystem\n4️⃣ **Reputation** — India + APAC strong, global expansion\n5️⃣ **Lead Intelligence** — Event-driven market intel + conversion growth\n\nSign up at dashboard.observenow.ai/signup!",
    followUps: ["How do I install the Chrome Extension?", "What pricing plans are available?", "Can I get a demo?"]
  },
  {
    keywords: ["why choose", "why observenow", "competitor", "better", "advantage"],
    answer: "Why choose ObserveNow.AI?\n\n✅ AI-driven Contact + Account Intelligence\n✅ India + APAC strong, with global expansion\n✅ Data + Events Network + Client Account List Enrichment\n✅ Flexible, volume-based, competitive pricing\n✅ Trusted Growth Partner — Events + Data + AI\n✅ Event-Driven Market Intel\n✅ 500+ Fortune company clients",
    followUps: ["What are the core features?", "How do I get a free trial?", "What integrations are supported?"]
  },
  {
    keywords: ["linkedin", "linkedin prospecting"],
    answer: "ObserveNow.AI works seamlessly with LinkedIn:\n\n• The Chrome Extension enriches LinkedIn profiles in real-time\n• Access direct LinkedIn profile links for CXO contacts\n• Browse LinkedIn profiles as usual and capture leads instantly\n• Smart targeting by role, industry, or company",
    followUps: ["How do I install the Chrome Extension?", "What data can I capture from LinkedIn?", "What are the pricing plans?"]
  },
  {
    keywords: ["customer", "testimonial", "review", "success story", "case study"],
    answer: "ObserveNow.AI customer success stories:\n\n📈 **10X Revenue Growth** — Microsoft\n⚡ **3X Faster Lead Qualification** — Enterprise SaaS\n💬 **40% Higher Response Rate** — Growth Marketing Team\n🚀 **2X Pipeline Acceleration** — B2B Services\n\nCustomers praise the reliable decision-maker-level contacts, clean interface, and consistent results.",
    followUps: ["How do I get started?", "What pricing plans are available?", "Can I get a free trial?"]
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    answer: "Hello! 👋 I'm Rumi, your ObserveNow.AI assistant. I can help you learn about our B2B Sales Intelligence Platform, pricing plans, features, and more. What would you like to know?",
    followUps: ["What is ObserveNow.AI?", "What pricing plans are available?", "What are the core features?"]
  },
  {
    keywords: ["thank", "thanks", "thank you"],
    answer: "You're welcome! 😊 Feel free to ask me anything else about ObserveNow.AI. I'm here to help!",
    followUps: ["What are the core features?", "How do I get a free trial?", "How do I contact sales?"]
  },
  {
    keywords: ["profile", "my profile", "account", "my account"],
    answer: "You can manage your profile and account settings in the ObserveNow.AI dashboard at dashboard.observenow.ai. From there you can view your plan details, credit usage, team members, and more.",
    followUps: ["What plan am I on?", "How many credits do I have?", "How do I upgrade my plan?"]
  },
  {
    keywords: ["what plan am i on", "my plan", "current plan"],
    answer: "To check your current plan, please log into your dashboard at dashboard.observenow.ai. Your plan details including credits, users, and billing information will be displayed in your account settings.",
    followUps: ["What pricing plans are available?", "How do I upgrade?", "How many credits do I have?"]
  },
  {
    keywords: ["how many credits", "credit balance", "remaining credits"],
    answer: "You can check your credit balance by logging into the ObserveNow.AI dashboard at dashboard.observenow.ai. Your remaining credits and usage history are displayed in your account overview.",
    followUps: ["What are credits used for?", "How do I get more credits?", "What pricing plans are available?"]
  },
  {
    keywords: ["upgrade", "change plan", "switch plan"],
    answer: "To upgrade your plan, visit your dashboard at dashboard.observenow.ai or contact sales at observenow.ai/contact. You can upgrade from Starter to Business or Enterprise at any time.",
    followUps: ["What are the pricing plans?", "What's in the Enterprise plan?", "How do I contact sales?"]
  },
];

const defaultFollowUps = ["What is ObserveNow.AI?", "What pricing plans are available?", "What are the core features?"];

function findAnswer(query: string): { answer: string; followUps: string[] } {
  const lower = query.toLowerCase().trim();
  
  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword) || keyword.includes(lower)) {
        const score = keyword.length;
        if (score > bestScore) {
          bestScore = score;
          bestMatch = entry;
        }
      }
    }
  }

  if (bestMatch) {
    return { answer: bestMatch.answer, followUps: bestMatch.followUps };
  }

  return {
    answer: "I'm not sure about that, but I can help you with information about ObserveNow.AI's features, pricing, Chrome Extension, integrations, and more. Try asking one of the questions below!",
    followUps: defaultFollowUps
  };
}

interface Message {
  role: "user" | "bot";
  text: string;
  followUps?: string[];
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text?: string) => {
    const query = text || input.trim();
    if (!query) return;

    if (!started) setStarted(true);

    const userMsg: Message = { role: "user", text: query };
    const { answer, followUps } = findAnswer(query);
    const botMsg: Message = { role: "bot", text: answer, followUps };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold
      const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} style={{ margin: '2px 0' }} />;
    });
  };

  return (
    <>
      {/* CHAT BUTTON */}
      <div
        className="ask-rumi-btn"
        onClick={() => setOpen(!open)}
      >
        <img
          src="/rumi-avatar.png"
          alt="rumi"
          className="avatar"
        />
        {/* <span>Ask Rumi 👋</span> */}
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              {/* <span className="spark">✨</span> */}
              <div>
                <div className="title">Rumi 4.0</div>
                <div className="subtitle">AI Assistant</div>
              </div>
            </div>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {!started && (
              <>
                <img
                  src="/rumi-avatar.png"
                  className="hero-avatar"
                />

                <h3>Hi, I'm Rumi! 👋</h3>
                <p>I'm here to help you</p>

                <div className="suggestions">
                  <button onClick={() => handleSend("What plan am I on?")}>"What plan am I on?"</button>
                  <button onClick={() => handleSend("How many credits do I have?")}>"How many credits do I have?"</button>
                  <button onClick={() => handleSend("Show my profile")}>"Show my profile"</button>
                </div>
              </>
            )}

            {started && messages.map((msg, i) => (
              <div key={i}>
                {msg.role === "user" ? (
                  <div className="msg-user">
                    <div className="msg-bubble user-bubble">{msg.text}</div>
                  </div>
                ) : (
                  <div className="msg-bot">
                    <div className="msg-bubble bot-bubble">{formatText(msg.text)}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              placeholder="Ask Rumi anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => handleSend()}>➤</button>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
      
      .ask-rumi-btn{
        position:fixed;
        bottom:24px;
        right:24px;
        width: 60px;
        height: 60px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        background:linear-gradient(90deg,#20b7c7,#7c3aed);
        color:white;
        font-weight:600;
        cursor:pointer;
        box-shadow:
    0 8px 20px rgba(124,58,237,0.35),
    0 0 12px rgba(124,58,237,0.45),
    0 0 24px rgba(124,58,237,0.35);
        z-index:9999;
      }

      .ask-rumi-btn .avatar{
        width:34px;
        height:34px;
        border-radius:50%;
      }

      .chat-window{
        position:fixed;
        bottom:90px;
        right:24px;
        width:360px;
        height: 460px;
        background:white;
        border-radius:16px;
        box-shadow:0 20px 60px rgba(0,0,0,0.2);
        overflow:hidden;
        z-index:9999;
        border:2px solid #e9d5ff;
        display:flex;
        flex-direction:column;
      }

      .chat-header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0px 6px;
        color:white;
        background:linear-gradient(90deg,#20b7c7,#7c3aed);
      }

      .chat-title{
        display:flex;
        gap:10px;
        margin-left:8px;
        align-items:center;
      }

      .spark{
        font-size:20px;
      }

      .title{
        font-weight:700;
      }

      .subtitle{
        font-size:10px;
        opacity:.8;
      }

      .close-btn{
        background:none;
        border:none;
        color:white;
        font-size:16px;
        cursor:pointer;
      }

      .chat-body{
        flex:1;
        overflow-y:auto;
        text-align:center;
        padding:16px 10px;
      }

      .hero-avatar{
        width:60px;
        height:60px;
        border-radius:50%;
        display:block;
        margin:0 auto 10px;
        box-shadow:0 10px 25px rgba(0,0,0,0.15);
      }

      .chat-body h3{
        font-weight:600;
        font-size:16px;
      }

      .chat-body p{
        color:#dddddd;
        margin-bottom:12px;
      }

      .suggestions{
        display:flex;
        flex-direction:column;
        gap:6px;
        align-items:center;
      }

      .suggestions button{
        padding:4px 10px;
        border-radius:14px;
        border:1px solid #ddd;
        background:#f9fafb;
        cursor:pointer;
        font-size:10px;
        width:260px;
        white-space:nowrap;
        text-align:center;
        line-height:0.1;
      }

      .chat-input{
        display:flex;
        border-top:1px solid #eee;
        padding:6px;
      }

      .chat-input input{
        flex:1;
        border:none;
        outline:none;
        padding:4px 6px;
        font-size:12px;
      }

      .chat-input button{
        background:linear-gradient(90deg,#20b7c7,#7c3aed);
        color:white;
        border:none;
        padding:1px 6px;
        border-radius:8px;
        cursor:pointer;
        width:26px;
        height:26px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:14px;
      }

      .msg-user{
        display:flex;
        justify-content:flex-end;
        margin-bottom:12px;
      }

      .msg-bot{
        display:flex;
        justify-content:flex-start;
        margin-bottom:12px;
        text-align:left;
      }

      .msg-bubble{
        padding:12px 16px;
        border-radius:16px;
        font-size:13px;
        max-width:280px;
        line-height:1.5;
      }

      .user-bubble{
        background:#2563eb;
        color:white;
        border-radius:16px 16px 4px 16px;
      }

      .bot-bubble{
        background:#7c3aed;
        color:white;
        border-radius:16px 16px 16px 4px;
      }

      `}</style>
    </>
  );
}
