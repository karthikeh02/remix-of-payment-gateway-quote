import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, AlertCircle, Zap, ArrowRight, MessageSquare, Layers, CreditCard, AlertTriangle } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const InexCollectionProposal = () => {
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
        filename: `Zan_Services_Inex_Collection_Quotation_${formatDate(currentDate).replace(/\//g, '-')}.pdf`,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      await html2pdf().set(opt).from(documentRef.current).save();
    } catch {
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  const problemCards = [
    { title: "Manual Messaging", description: "Your team sends WhatsApp messages manually after every deal — order confirmations, receipts, thank-you notes. Time-consuming and error-prone." },
    { title: "No Conversation History", description: "WhatsApp chats live on personal phones. When a salesperson leaves, entire customer conversation history goes with them." },
    { title: "Missed Follow-Ups", description: "Without automation, messages get delayed or forgotten. Customers don't get timely updates on orders, payments, or delivery." },
    { title: "Zero Visibility", description: "Management has no way to track what messages were sent, to whom, or when. No reporting, no accountability." },
  ];

  const solutionHighlights = [
    { title: "Fully Automated", description: "Zero manual effort. Messages fire the moment a deal stage changes in Zoho CRM." },
    { title: "CRM Logged", description: "Every WhatsApp conversation synced back to customer record in Zoho CRM — full history, full visibility." },
    { title: "Meta Verified", description: "Official WhatsApp Business API. Professional, trustworthy, compliant with Meta policies." },
  ];

  const pipelineSteps = [
    { step: 1, title: "Customer Visits", subtitle: "Lead Created", type: "Manual" },
    { step: 2, title: "Quotation Sent", subtitle: "Quotation Stage", type: "WhatsApp Auto" },
    { step: 3, title: "Client Approves", subtitle: "SO/PI", type: "WhatsApp Auto" },
    { step: 4, title: "Advance Payment", subtitle: "50%", type: "WhatsApp Auto" },
    { step: 5, title: "Purchase Order", subtitle: "", type: "Manual" },
    { step: 6, title: "Tax Invoice", subtitle: "Final Payment", type: "WhatsApp Auto" },
    { step: 7, title: "Delivery", subtitle: "", type: "WhatsApp Auto" },
    { step: 8, title: "Sale Closed", subtitle: "", type: "WhatsApp Auto" },
  ];

  const whatsappServices = [
    { service: "WhatsApp Business API Setup", description: "Business profile registration, phone number verification, and API configuration via official BSP (Interakt/Gupshup)." },
    { service: "WhatsApp – Zoho CRM Integration", description: "Connect WhatsApp Business API to your existing Zoho CRM with two-way message sync logged against contacts/deals." },
    { service: "Automated Sale Notifications", description: "Auto-send WhatsApp messages when deal stages change — order confirmation, receipt, payment reminders, delivery updates." },
    { service: "Message Template Design & Approval", description: "Design and submit Meta-compliant WhatsApp message templates for approval." },
    { service: "Zoho Workflow Configuration", description: "Workflow rules and triggers inside Zoho CRM to fire WhatsApp messages at the right sales stage automatically." },
    { service: "Zoho Books – CRM Sync", description: "Connect Zoho CRM to your existing Zoho Books account. Sync contacts, auto-create invoices from deals — no double entry." },
    { service: "Dashboards & Reports", description: "Sales performance dashboards — revenue tracking, deal pipeline visibility, team performance, and conversion metrics." },
    { service: "Testing & Go-Live", description: "End-to-end testing of complete flow and go-live deployment." },
  ];

  const architectureSteps = [
    { step: 1, title: "Zoho CRM", description: "Deal stage changes, workflow rule triggers" },
    { step: 2, title: "Webhook / API", description: "CRM sends HTTP POST with deal + contact data" },
    { step: 3, title: "BSP Platform (Interakt/Gupshup)", description: "Processes message request" },
    { step: 4, title: "Customer", description: "Receives WhatsApp message instantly" },
  ];

  const requiredDocuments = [
    "GST Certificate",
    "Business Website",
    "Dedicated Phone Number (not on WhatsApp)",
    "Zoho CRM Admin Access",
    "Business PAN / Incorporation",
    "WhatsApp Business Number",
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment structure (WhatsApp Integration): 50% advance on kickoff, 30% on mid-milestone delivery, 20% on final go-live. All payments are exclusive of GST (18%).",
    "Payment structure (Digital Marketing): 100% advance before commencement of services each month.",
    "CRM subscription costs (if any) are NOT included and are the client's responsibility.",
    "WhatsApp Business API recurring costs (Meta conversation charges + BSP fees) are NOT included and are borne by the client (~₹1,500–₹2,500/month).",
    "Client must provide: GST certificate, PAN/Incorporation, dedicated phone number, and business website for Meta verification.",
    "Meta business verification may take 3-7 business days. Template approvals typically take 24-48 hours.",
    "Up to 2 rounds of workflow revisions are included. Additional changes will be charged separately.",
    "Post-delivery support: 15 days of free support after go-live for bug fixes and minor adjustments.",
    "Any additional Zoho modules, custom development, or third-party integrations beyond the agreed scope will be quoted separately.",
    "Either party may terminate with 15 days written notice. Fees for completed work are payable.",
  ];

  const renderServiceTable = (
    title: string,
    icon: React.ReactNode,
    services: { service: string; description: string }[],
    badge?: string,
    badgeColor?: string
  ) => (
    <div className="quote-section">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {icon}
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        {badge && (
          <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${badgeColor || "quote-badge"}`}>
            {badge}
          </span>
        )}
      </div>
      <div className="overflow-hidden rounded-lg border border-quote-border">
        <table className="w-full">
          <thead>
            <tr className={badgeColor?.includes("green") ? "quote-table-header-green" : "quote-table-header"}>
              <th className="text-left py-3 px-4 text-sm font-semibold w-[30%]">Service</th>
              <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {services.map((item, index) => (
              <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

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
              <p className="text-muted-foreground mt-1 text-sm">WhatsApp Integration + Zoho Ecosystem (Books Sync, Workflows, Dashboards) + Digital Marketing</p>
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
                    <p className="text-lg font-semibold text-foreground">Inex Collection Pvt. Ltd.</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Service Provider</h3>
                    <p className="text-lg font-semibold text-foreground">Zan Services</p>
                    <div className="text-sm text-muted-foreground mt-1 space-y-1">
                      <p className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 shrink-0" /><span>zanservices.com</span></p>
                      <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 shrink-0" /><span>+91 82408 25490</span></p>
                      <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 shrink-0" /><span>operations@zanservices.com</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: The Challenge */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">The Challenge — What's Happening Today</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problemCards.map((card, index) => (
                <div key={index} className="quote-sla-card" style={{ borderLeftColor: '#ef4444' }}>
                  <p className="text-sm font-semibold text-foreground mb-1">{card.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: The Solution */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">The Solution</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              We integrate WhatsApp Business API into your existing Zoho CRM, sync it with Zoho Books, and set up automated workflows & dashboards — so every key event in your sales pipeline triggers an instant message to your customer, automatically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {solutionHighlights.map((item, index) => (
                <div key={index} className="quote-sla-card" style={{ borderLeftColor: '#22c55e' }}>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Your Sales Pipeline */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <ArrowRight className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Your Sales Pipeline</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {pipelineSteps.map((item) => (
                <div key={item.step} className="bg-card border border-quote-border rounded-lg p-3 text-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2"
                    style={{ backgroundColor: item.type === "WhatsApp Auto" ? '#22c55e' : '#6b7280' }}
                  >
                    {item.step}
                  </div>
                  <p className="text-xs font-semibold text-foreground">{item.title}</p>
                  {item.subtitle && <p className="text-[10px] text-muted-foreground mt-0.5">{item.subtitle}</p>}
                  <span
                    className="inline-block mt-2 text-[9px] px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: item.type === "WhatsApp Auto" ? '#dcfce7' : '#f3f4f6',
                      color: item.type === "WhatsApp Auto" ? '#15803d' : '#6b7280',
                    }}
                  >
                    {item.type === "WhatsApp Auto" ? "WhatsApp Auto" : "Manual Step"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: WhatsApp Business API */}
          {renderServiceTable(
            "WhatsApp Business API Integration",
            <MessageSquare className="w-5 h-5 text-primary shrink-0" />,
            whatsappServices,
            "₹45,000 + GST"
          )}

          {/* Section 6: Technical Architecture */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Layers className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Technical Architecture — How It Works</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {architectureSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-card border border-quote-border rounded-lg p-4 text-center h-full">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mx-auto mb-2">
                      {item.step}
                    </div>
                    <p className="text-xs font-semibold text-foreground">{item.title}</p>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                  </div>
                  {index < architectureSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Return Flow:</strong> Delivery receipts (sent, delivered, read) synced back to Zoho CRM. Customer replies captured and logged against their record.
              </p>
            </div>
          </div>

          {/* Section 7: What We Need From You */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">What We Need From You</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="bg-card border border-quote-border rounded-lg p-3 text-center">
                  <p className="text-xs font-medium text-foreground">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Digital Marketing Services */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Service 3 — Digital Marketing</h2>
              <span className="bg-purple-100 text-purple-700 text-[10px] font-semibold px-2 py-0.5 rounded whitespace-nowrap">₹55,000/month + GST</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive <strong>Social Media Management</strong> and <strong>Paid Advertisements</strong> (Google Ads + Meta Ads) to drive brand visibility, lead generation, and customer acquisition for Inex Collection.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                <p className="text-xs text-blue-700 flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span><strong>Strategy to be finalized after R&D.</strong> A detailed channel-wise strategy, content calendar, and ad spend allocation will be presented after initial research & competitive analysis post onboarding.</span>
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border mt-3">
              <table className="w-full">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-purple-800 w-[30%]">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-purple-800">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground align-top">Social Media Management</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground leading-relaxed">Content strategy, post creation (graphics, reels, carousels), publishing & scheduling, community management, hashtag strategy — across Instagram, Facebook & LinkedIn.</td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-sm font-medium text-foreground align-top">Paid Advertisements</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground leading-relaxed">Google Ads (Search & Display) + Meta Ads (Facebook & Instagram) — campaign setup, audience targeting, ad copy creation, bid optimization, A/B testing & performance monitoring.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground align-top">R&D & Strategy</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground leading-relaxed">Market research, competitor analysis, audience profiling, and channel-wise strategy planning. Detailed strategy document delivered before campaign launch.</td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-sm font-medium text-foreground align-top">Reporting & Optimization</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground leading-relaxed">Monthly performance reports, campaign optimization, budget recommendations, and strategy calibration based on data insights.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2 italic">
              * Ad spend budget is NOT included in the service fee and will be paid directly by the client to the respective platforms.
            </p>
          </div>

          {/* Section 8: Investment Summary */}
          <div className="my-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Investment Summary</h2>
            </div>

            {/* Two pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-card border border-quote-border rounded-lg p-5 text-center">
                <p className="text-xs font-semibold text-foreground mb-2">WhatsApp Business API Integration</p>
                <p className="text-xl font-bold text-foreground">₹45,000 <span className="text-xs font-normal text-muted-foreground">+ GST</span></p>
                <p className="text-[10px] text-muted-foreground mt-1">One-time</p>
              </div>
              <div className="bg-card border-2 border-purple-300 rounded-lg p-5 text-center bg-purple-50/30">
                <p className="text-xs font-semibold text-foreground mb-2">Digital Marketing (SMM + Ads)</p>
                <p className="text-xl font-bold text-purple-700">₹55,000 <span className="text-xs font-normal text-muted-foreground">+ GST</span></p>
                <p className="text-[10px] text-muted-foreground mt-1">Per month (recurring)</p>
              </div>
            </div>

            {/* Total box */}
            <div className="quote-total-box p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Total One-Time Investment</p>
                  <p className="text-xs text-white/60 mt-1">WhatsApp Business API Integration</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹45,000 + GST</p>
                  <p className="text-lg font-semibold mt-2 text-white/90">₹53,100 <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>

            {/* Recurring box */}
            <div className="bg-purple-900 p-6 rounded-lg mt-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-purple-200 text-sm uppercase tracking-wider">Monthly Retainer — Digital Marketing</p>
                  <p className="text-xs text-purple-300 mt-1">Social Media Management + Paid Advertisements (Strategy post R&D)</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹55,000/month</p>
                  <p className="text-purple-200 text-sm mt-1">+ GST (18%)</p>
                  <p className="text-lg font-semibold mt-2 text-purple-100">₹64,900/month <span className="text-sm font-normal text-purple-300">Incl. GST</span></p>
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <div className="bg-card border border-quote-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-primary">50 / 30 / 20</p>
                <p className="text-xs font-semibold text-foreground mt-1">Payment Split (One-time)</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">₹22,500 → ₹13,500 → ₹9,000</p>
              </div>
              <div className="bg-card border border-quote-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-primary">15 Days</p>
                <p className="text-xs font-semibold text-foreground mt-1">Free Support</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">After go-live</p>
              </div>
              <div className="bg-card border border-quote-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-primary">7-8 Users</p>
                <p className="text-xs font-semibold text-foreground mt-1">Team Coverage</p>
              </div>
            </div>

            {/* Recurring costs warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
              <h3 className="text-sm font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Recurring Costs (Client-Borne)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between bg-white/60 rounded px-3 py-2">
                  <span className="text-amber-700">CRM Subscription (if applicable)</span>
                  <span className="font-semibold text-amber-900">~₹1,000/user/month (7-8 users)</span>
                </div>
                <div className="flex justify-between bg-white/60 rounded px-3 py-2">
                  <span className="text-amber-700">WhatsApp Business API</span>
                  <span className="font-semibold text-amber-900">~₹1,500–₹2,500/month (~10K msgs)</span>
                </div>
              </div>
              <p className="text-[10px] text-amber-600 mt-2">* These are paid directly to Zoho and BSP respectively.</p>
            </div>
          </div>

          {/* Terms & Conditions */}
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

          {/* Privacy & Confidentiality */}
          <div className="mt-6 p-5 bg-secondary/50 rounded-lg">
            <h3 className="text-sm font-semibold text-foreground mb-2">Privacy & Confidentiality</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Zan Services respects client confidentiality. All business data, workflow logic,
              customer contact information, and any proprietary information shared during the engagement will be kept
              strictly confidential. Access credentials shared by the client will be used solely for the purpose of
              delivering the agreed services and will not be shared with any third party.
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
                <p className="text-xs text-muted-foreground mt-1">Authorised Signatory</p>
                <p className="text-xs text-muted-foreground mt-1">Date: {formatDate(currentDate)}</p>
              </div>
            </div>
          </div>

          {/* Acceptance */}
          <div className="mt-8 pt-6 border-t border-quote-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  By signing below, the client acknowledges and accepts the terms, pricing, scope, and deliverables
                  outlined in this quotation for WhatsApp Business API Integration and Digital Marketing Services.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Inex Collection Pvt. Ltd.</p>
                <p className="text-xs text-muted-foreground mt-1">Date: ____/____/________</p>
              </div>
            </div>
          </div>

          {/* Contact */}
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

export default InexCollectionProposal;
