import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, Settings, CheckCircle2, Shield, Users, Calendar, Bell, Video, FileEdit, BookOpen, Pen, Share2, Lock, Database, Layout, Server, TestTube, Rocket, Clock, Layers, CreditCard, Brain, Monitor, Plus } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const ChandraniProposal = () => {
  const documentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentDate = new Date();
  const validUntilDate = new Date(currentDate);
  validUntilDate.setDate(validUntilDate.getDate() + 7);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const handleDownloadPDF = async () => {
    if (!documentRef.current || isGenerating) return;
    setIsGenerating(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: 0,
        filename: `Zan_Services_Chandrani_Mukherjee_Web_App_Quotation_${formatDate(currentDate).replace(/\//g, '-')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      await html2pdf().set(opt).from(documentRef.current).save();
    } catch {
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  // ── CORE MODULES (included in base price) ──
  const coreModules = [
    { module: "UI/UX Design & Prototyping", description: "Wireframes, high-fidelity mockups, interactive prototypes for all screens. Mobile-responsive design.", complexity: "High", cost: "₹55,000" },
    { module: "Authentication & Role-Based Access", description: "Secure login/signup — Admin and Patient roles. Admin sees all profiles; patients see only their own data.", complexity: "Medium", cost: "₹25,000" },
    { module: "Patient Profile Management", description: "Patient profiles with user summary, session history, progress tracking. Admin-only access to full profiles.", complexity: "Medium", cost: "₹40,000" },
    { module: "Observations & Guidelines System", description: "Observation entries linked to patient profiles. Role-based viewing — admin adds, patients track progress.", complexity: "Medium", cost: "₹30,000" },
    { module: "Appointment Scheduling & Calendar", description: "Interactive calendar, availability management, appointment requests, conflict detection.", complexity: "High", cost: "₹45,000" },
    { module: "Automated Notifications", description: "Email & SMS reminders before sessions, appointment confirmations, cancellation alerts.", complexity: "Medium", cost: "₹20,000" },
    { module: "Follow-Up Management", description: "Follow-up scheduling, task assignments, reminders, and progress tracking for admin & patients.", complexity: "Medium", cost: "₹20,000" },
    { module: "CMS — Courses & Certifications", description: "Upload and manage courses, certifications. Supports video, PDF, and text-based content.", complexity: "High", cost: "₹40,000" },
    { module: "Blog & Social Media Integration", description: "Blog with rich text editor, SEO, social media auto-sharing (LinkedIn, X, Pinterest — excluding FB & IG).", complexity: "Medium", cost: "₹30,000" },
    { module: "Testing, QA & Security", description: "Testing, security audit, encryption, HIPAA-aligned data handling, performance optimization.", complexity: "High", cost: "₹25,000" },
    { module: "Deployment & DevOps", description: "Cloud deployment, SSL, CI/CD, database backups, monitoring setup.", complexity: "Medium", cost: "₹15,000" },
  ];

  // ── ADD-ON MODULES (optional) ──
  const addonModules = [
    { module: "Video Conferencing & Payment Integration", description: "Integrated video sessions where duration is auto-determined by fee structure & payment. Razorpay/Stripe integration. Session recording.", complexity: "Very High", cost: "₹80,000" },
    { module: "Meeting Transcription & Note-Taking", description: "AI-powered session transcription (speech-to-text). Dedicated note-taking interface to build patient user story. Searchable history.", complexity: "Very High", cost: "₹55,000" },
  ];

  // Core total: 3,45,000 → round display
  // Addon total: 1,35,000
  // With addons: 4,80,000

  const techStack = [
    { layer: "Frontend", tech: "Next.js (React) + Tailwind CSS", reason: "SEO-optimized, fast, responsive" },
    { layer: "Backend", tech: "Node.js + Next.js API Routes", reason: "Scalable, real-time capable" },
    { layer: "Database", tech: "PostgreSQL + Prisma ORM", reason: "Relational, secure, ACID-compliant" },
    { layer: "Authentication", tech: "NextAuth.js / Clerk", reason: "Role-based access, secure sessions" },
    { layer: "Video Conferencing", tech: "Daily.co / Twilio Video API", reason: "Embeddable, recording support" },
    { layer: "Transcription", tech: "OpenAI Whisper / Deepgram", reason: "Accurate speech-to-text" },
    { layer: "Payments", tech: "Razorpay / Stripe", reason: "Indian payment methods, UPI" },
    { layer: "Notifications", tech: "SendGrid + Twilio SMS", reason: "Reliable delivery" },
    { layer: "Cloud & Hosting", tech: "AWS / Vercel", reason: "Auto-scaling, global CDN" },
  ];

  const timelineCore = [
    { phase: "Phase 1 — Design & Setup", duration: "Week 1–2", deliverables: "Wireframes, UI/UX design, prototypes, auth & project setup." },
    { phase: "Phase 2 — Core Platform", duration: "Week 3–5", deliverables: "Patient profiles, observations, scheduling, notifications, follow-up management." },
    { phase: "Phase 3 — CMS, Blog & Launch", duration: "Week 6–8", deliverables: "CMS, blog with social integrations, testing, QA, deployment & go-live." },
  ];

  const timelineAddon = [
    { phase: "Phase 4 — Video & Transcription (Add-on)", duration: "Week 9–10", deliverables: "Video conferencing + payment integration, AI transcription, note-taking interface." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment: 50% advance on kickoff, 50% on final delivery & go-live. All payments are exclusive of GST (18%).",
    "Core platform timeline: ~8 weeks. With add-on modules (Video + Transcription): ~10 weeks.",
    "The client will receive a staging/preview link at the end of each phase for review and feedback.",
    "Up to 2 rounds of design revisions per phase are included. Additional revisions will be charged at ₹5,000 per round.",
    "All patient data will be encrypted at rest and in transit. HIPAA-aligned security practices.",
    "Third-party API costs (hosting, SMS, email, video, transcription) are recurring operational costs borne by the client post-launch. Estimated: ₹3,000–₹10,000/month depending on usage.",
    "Client must provide brand guidelines, logo, domain name, and content in a timely manner.",
    "Social media integrations: LinkedIn, X (Twitter), Pinterest. Facebook and Instagram excluded as specified.",
    "Post-launch support: 30 days of free bug-fix support. Extended maintenance quoted separately.",
    "Source code and all IP transferred to client upon full payment.",
    "Either party may terminate with 15 days written notice. Fees for completed work are payable.",
    "Add-on modules (Video Conferencing & Transcription) can be added at any point during or after the core platform build.",
  ];

  const coreIcons = [Layout, Lock, Users, FileEdit, Calendar, Bell, Clock, BookOpen, Share2, TestTube, Rocket];
  const addonIcons = [Video, Pen];

  return (
    <div className="min-h-screen bg-background py-8 px-4 print:py-0 print:px-0">
      <div ref={documentRef} className="quote-page rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <img src={zanLogo} alt="" className="w-[600px] opacity-[0.04] select-none" />
        </div>

        {/* Header */}
        <div className="quote-header-light relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <img src={zanLogo} alt="Zan Services" className="h-14 mb-3" />
              <h1 className="text-3xl font-bold tracking-tight font-display text-quote-header-bg">Quotation</h1>
              <p className="text-muted-foreground mt-1 text-sm">Custom Web Application — Psychology Practice Management Platform</p>
              <div className="quote-accent-bar mt-4"></div>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-sm mt-1">Date: {formatDate(currentDate)}</p>
              <p className="text-muted-foreground text-sm">Valid Until: {formatDate(validUntilDate)}</p>
            </div>
          </div>
        </div>

        <div className="px-10 py-8 relative z-10">
          {/* Client & Provider Info */}
          <div className="flex justify-between items-start mb-8 gap-8">
            <div className="flex-1">
              <div className="quote-highlight-box p-5 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Prepared For</h3>
                    <p className="text-lg font-semibold text-foreground">Mrs. Chandrani Mukherjee</p>
                    <p className="text-muted-foreground text-sm mt-1">Psychologist — Private Practice</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Service Provider</h3>
                    <p className="text-lg font-semibold text-foreground">Zan Services</p>
                    <p className="text-muted-foreground text-xs mt-0.5 italic">Web Application Development Division</p>
                    <div className="text-sm text-muted-foreground mt-1 space-y-1">
                      <p className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 shrink-0" /><span className="break-all">zanservices.com</span></p>
                      <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 shrink-0" /><span>+91 82408 25490</span></p>
                      <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 shrink-0" /><span className="break-all">operations@zanservices.com</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Brain className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Project Overview</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A specialized web application for <strong>Mrs. Chandrani Mukherjee</strong> to launch and manage her psychology practice digitally.
                The core platform covers patient management, scheduling, notifications, courses, and blog.
                <strong> Video conferencing & AI transcription</strong> are available as optional add-on modules.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Users className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Patient Portal</p>
                  <p className="text-[10px] text-muted-foreground">Profiles, Observations, Access</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Calendar className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Scheduling</p>
                  <p className="text-[10px] text-muted-foreground">Calendar + Notifications</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <BookOpen className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">CMS & Blog</p>
                  <p className="text-[10px] text-muted-foreground">Courses + Organic Growth</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center border-2 border-dashed border-primary/30">
                  <Video className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Video + AI</p>
                  <p className="text-[10px] text-primary font-medium">Optional Add-on</p>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ CORE MODULES ═══ */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Layers className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Core Platform — Module Breakdown</h2>
              <span className="quote-badge whitespace-nowrap">Base Package</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Module</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold w-[10%]">Complexity</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold w-[12%]">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {coreModules.map((item, index) => {
                    const Icon = coreIcons[index];
                    return (
                      <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                        <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                          <div className="flex items-center gap-2">
                            <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{item.module}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                        <td className="py-3 px-4 text-xs text-center align-top">
                          <span className={`px-2 py-0.5 rounded font-medium ${item.complexity === "High" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"}`}>
                            {item.complexity}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm font-semibold text-foreground text-right align-top">{item.cost}</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-primary/5 border-t-2 border-primary/20">
                    <td colSpan={3} className="py-3 px-4 text-sm font-bold text-foreground">Core Platform Total (Excluding GST)</td>
                    <td className="py-3 px-4 text-sm font-bold text-primary text-right">₹3,45,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ═══ ADD-ON MODULES ═══ */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Plus className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Optional Add-on Modules</h2>
              <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">Can be added anytime</span>
            </div>
            <div className="overflow-hidden rounded-lg border-2 border-dashed border-primary/30">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Module</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold w-[10%]">Complexity</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold w-[12%]">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {addonModules.map((item, index) => {
                    const Icon = addonIcons[index];
                    return (
                      <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                        <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                          <div className="flex items-center gap-2">
                            <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{item.module}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                        <td className="py-3 px-4 text-xs text-center align-top">
                          <span className="px-2 py-0.5 rounded font-medium bg-red-100 text-red-700">{item.complexity}</span>
                        </td>
                        <td className="py-3 px-4 text-sm font-semibold text-foreground text-right align-top">{item.cost}</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-primary/5 border-t-2 border-primary/20">
                    <td colSpan={3} className="py-3 px-4 text-sm font-bold text-foreground">Add-on Modules Total (Excluding GST)</td>
                    <td className="py-3 px-4 text-sm font-bold text-primary text-right">₹1,35,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Server className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Proposed Technology Stack</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-2.5 px-4 text-xs font-semibold w-[18%]">Layer</th>
                    <th className="text-left py-2.5 px-4 text-xs font-semibold w-[32%]">Technology</th>
                    <th className="text-left py-2.5 px-4 text-xs font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {techStack.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-2.5 px-4 text-sm font-medium text-foreground">{item.layer}</td>
                      <td className="py-2.5 px-4 text-sm text-primary font-medium">{item.tech}</td>
                      <td className="py-2.5 px-4 text-xs text-muted-foreground">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Project Timeline</h2>
              <span className="quote-badge whitespace-nowrap">8 Weeks (Core) / 10 Weeks (With Add-ons)</span>
            </div>
            {timelineCore.map((phase, index) => (
              <div key={index} className={`quote-sla-card p-4 rounded-lg ${index > 0 ? "mt-3" : ""}`}>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-foreground">{phase.phase}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">{phase.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground">{phase.deliverables}</p>
              </div>
            ))}
            {timelineAddon.map((phase, index) => (
              <div key={index} className="p-4 rounded-lg mt-3 border-2 border-dashed border-primary/30 bg-primary/5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-foreground">{phase.phase}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">{phase.duration}</span>
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">Optional</span>
                </div>
                <p className="text-sm text-muted-foreground">{phase.deliverables}</p>
              </div>
            ))}
          </div>

          {/* ═══ DUAL PRICING ═══ */}
          <div className="my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* WITHOUT Add-ons */}
              <div className="quote-total-box p-6 rounded-lg">
                <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Option A</p>
                <p className="text-white/80 text-sm uppercase tracking-wider font-semibold">Core Platform Only</p>
                <p className="text-xs text-white/50 mt-1">Patient management, scheduling, CMS, blog, notifications</p>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-white">₹3,45,000/-</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-1 text-white/90">₹4,07,100/- <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-white/70 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> Delivery: ~8 weeks</p>
                </div>
              </div>

              {/* WITH Add-ons */}
              <div className="quote-recurring-box p-6 rounded-lg relative">
                <div className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">RECOMMENDED</div>
                <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Option B</p>
                <p className="text-white/80 text-sm uppercase tracking-wider font-semibold">Full Platform + Video & Transcription</p>
                <p className="text-xs text-white/50 mt-1">Everything in Core + Video conferencing, payments, AI transcription</p>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-white">₹4,80,000/-</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-1 text-white/90">₹5,66,400/- <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-white/70 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> Delivery: ~10 weeks</p>
                </div>
              </div>
            </div>

            {/* Cost Comparison Table */}
            <div className="overflow-hidden rounded-lg border border-quote-border mt-5">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold">Component</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold">Option A (Core)</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold">Option B (Full)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2.5 px-4 text-sm text-muted-foreground">Core Platform (11 modules)</td>
                    <td className="py-2.5 px-4 text-sm font-medium text-foreground text-right">₹3,45,000</td>
                    <td className="py-2.5 px-4 text-sm font-medium text-foreground text-right">₹3,45,000</td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-2.5 px-4 text-sm text-muted-foreground">Video Conferencing + Payments</td>
                    <td className="py-2.5 px-4 text-sm text-muted-foreground text-right">—</td>
                    <td className="py-2.5 px-4 text-sm font-medium text-foreground text-right">₹80,000</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-sm text-muted-foreground">AI Transcription + Note-Taking</td>
                    <td className="py-2.5 px-4 text-sm text-muted-foreground text-right">—</td>
                    <td className="py-2.5 px-4 text-sm font-medium text-foreground text-right">₹55,000</td>
                  </tr>
                  <tr className="bg-primary/5 border-t-2 border-primary/20">
                    <td className="py-3 px-4 text-sm font-bold text-foreground">Total (Excl. GST)</td>
                    <td className="py-3 px-4 text-sm font-bold text-primary text-right">₹3,45,000</td>
                    <td className="py-3 px-4 text-sm font-bold text-primary text-right">₹4,80,000</td>
                  </tr>
                  <tr className="bg-primary/10">
                    <td className="py-3 px-4 text-sm font-bold text-foreground">Total (Incl. GST @ 18%)</td>
                    <td className="py-3 px-4 text-sm font-bold text-foreground text-right">₹4,07,100</td>
                    <td className="py-3 px-4 text-sm font-bold text-foreground text-right">₹5,66,400</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-sm text-muted-foreground">Timeline</td>
                    <td className="py-2.5 px-4 text-sm font-medium text-foreground text-right">~8 weeks</td>
                    <td className="py-2.5 px-4 text-sm font-medium text-foreground text-right">~10 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Payment Terms */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                <div className="w-full">
                  <p className="text-sm font-semibold text-slate-800 mb-3">Payment Terms</p>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 text-slate-600">50% Advance — On project kickoff</td>
                        <td className="py-2 text-right font-semibold text-slate-800">₹1,72,500 <span className="text-xs text-slate-500">(Core)</span></td>
                        <td className="py-2 text-right font-semibold text-slate-800">₹2,40,000 <span className="text-xs text-slate-500">(Full)</span></td>
                      </tr>
                      <tr>
                        <td className="py-2 text-slate-600">50% Balance — On final delivery & go-live</td>
                        <td className="py-2 text-right font-semibold text-slate-800">₹1,72,500 <span className="text-xs text-slate-500">(Core)</span></td>
                        <td className="py-2 text-right font-semibold text-slate-800">₹2,40,000 <span className="text-xs text-slate-500">(Full)</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground mt-2 italic">All amounts are exclusive of GST @ 18%.</p>
                </div>
              </div>
            </div>

            {/* Recurring Costs */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
              <h3 className="text-sm font-semibold text-amber-800 mb-2 flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Post-Launch Recurring Costs (Borne by Client)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between bg-white/60 rounded px-3 py-2">
                  <span className="text-amber-700">Cloud Hosting</span>
                  <span className="font-semibold text-amber-900">₹1,000–₹3,000/mo</span>
                </div>
                <div className="flex justify-between bg-white/60 rounded px-3 py-2">
                  <span className="text-amber-700">Email & SMS Notifications</span>
                  <span className="font-semibold text-amber-900">₹500–₹2,000/mo</span>
                </div>
                <div className="flex justify-between bg-white/60 rounded px-3 py-2">
                  <span className="text-amber-700">Video Conferencing API (if add-on)</span>
                  <span className="font-semibold text-amber-900">₹1,000–₹5,000/mo</span>
                </div>
                <div className="flex justify-between bg-white/60 rounded px-3 py-2">
                  <span className="text-amber-700">AI Transcription API (if add-on)</span>
                  <span className="font-semibold text-amber-900">₹500–₹3,000/mo</span>
                </div>
              </div>
              <p className="text-[10px] text-amber-600 mt-2">* Costs vary based on usage. Core: ~₹3,000/mo. With add-ons: ~₹5,000–₹10,000/mo.</p>
            </div>
          </div>

          {/* Security */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Security & Compliance</h2>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-green-800">End-to-End Encryption</p>
                    <p className="text-[10px] text-green-600">Patient data encrypted at rest & in transit</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-green-800">HIPAA-Aligned</p>
                    <p className="text-[10px] text-green-600">Secure psychological data handling</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-green-800">Automated Backups</p>
                    <p className="text-[10px] text-green-600">Daily backups with disaster recovery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post-Launch */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Monitor className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Post-Launch Support</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">30 Days</p>
                <p className="text-xs text-muted-foreground mt-1">Free Bug-Fix Support</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <Settings className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">AMC Available</p>
                <p className="text-xs text-muted-foreground mt-1">Annual Maintenance Contract</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <Rocket className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">Add-ons Later</p>
                <p className="text-xs text-muted-foreground mt-1">Video & Transcription anytime</p>
              </div>
            </div>
          </div>

          {/* T&C */}
          <div className="quote-section border-b-0">
            <h2 className="text-lg font-semibold text-foreground mb-4">Terms & Conditions</h2>
            <div className="space-y-1">
              {termsAndConditions.map((term, index) => (
                <div key={index} className="quote-tc-item">
                  <div className="quote-tc-bullet"></div>
                  <p className="text-sm text-muted-foreground">{term}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy */}
          <div className="mt-6 p-5 bg-secondary/50 rounded-lg">
            <h3 className="text-sm font-semibold text-foreground mb-2">Privacy & Confidentiality</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Zan Services respects client confidentiality. All business data, patient information architecture, system design,
              and strategic plans shared during the engagement will be kept strictly confidential. Source code and all IP
              transferred to the client upon full payment.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="quote-footer">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Bank Details</h3>
              <div className="bg-card p-4 rounded-lg border border-quote-border">
                <table className="text-sm">
                  <tbody>
                    <tr><td className="text-muted-foreground py-1 pr-4">Bank Name:</td><td className="font-medium text-foreground">Kotak Mahindra Bank</td></tr>
                    <tr><td className="text-muted-foreground py-1 pr-4">Account Number:</td><td className="font-medium text-foreground">0050897766</td></tr>
                    <tr><td className="text-muted-foreground py-1 pr-4">IFSC Code:</td><td className="font-medium text-foreground">KKBK0006573</td></tr>
                    <tr><td className="text-muted-foreground py-1 pr-4">GST:</td><td className="font-medium text-foreground">19AAEFZ0696D1ZW</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="text-right">
                <img src={directorSignature} alt="Director Signature" className="h-16 ml-auto mb-1 object-contain" />
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-base font-bold text-foreground">Md Nadim Ali</p>
                <p className="text-sm font-semibold text-primary">Director</p>
                <p className="text-sm text-muted-foreground">Zan Services</p>
                <p className="text-xs text-muted-foreground mt-1">Date: {formatDate(currentDate)}</p>
              </div>
            </div>
          </div>

          {/* Acceptance */}
          <div className="mt-8 pt-6 border-t border-quote-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  By signing below, the client acknowledges and accepts the terms, pricing, and scope outlined in this quotation.
                </p>
                <div className="bg-slate-50 rounded p-3 text-xs space-y-1">
                  <p className="font-semibold text-slate-700">Selected Option (please tick):</p>
                  <p className="text-slate-600 flex items-center gap-2"><span className="w-4 h-4 border border-slate-400 rounded inline-block"></span> Option A — Core Platform (₹3,45,000 + GST)</p>
                  <p className="text-slate-600 flex items-center gap-2"><span className="w-4 h-4 border border-slate-400 rounded inline-block"></span> Option B — Full Platform (₹4,80,000 + GST)</p>
                </div>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Mrs. Chandrani Mukherjee</p>
                <p className="text-xs text-muted-foreground mt-1">Date: ____/____/________</p>
              </div>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="mt-8 pt-6 border-t border-quote-border flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://zanservices.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Globe className="w-4 h-4" />zanservices.com</a>
            <a href="tel:+918240825490" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="w-4 h-4" />+91 82408 25490</a>
            <a href="mailto:operations@zanservices.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="w-4 h-4" />operations@zanservices.com</a>
          </div>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="max-w-4xl mx-auto mt-6 flex justify-center gap-4 no-print">
        <button onClick={handleDownloadPDF} disabled={isGenerating} className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-70">
          {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          {isGenerating ? "Generating PDF..." : "Download PDF"}
        </button>
        <button onClick={() => window.print()} className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors shadow-lg border border-quote-border">
          <FileText className="w-4 h-4" />Print
        </button>
      </div>
    </div>
  );
};

export default ChandraniProposal;
