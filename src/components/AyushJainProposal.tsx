import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Loader2, TrendingUp, Target, BarChart3, Zap, CheckCircle2, ArrowRight, Users, Search, Linkedin, Monitor, Video, Shield, Clock, DollarSign, Rocket, Download } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const AyushJainProposal = () => {
  const documentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentDate = new Date();
  const validUntilDate = new Date(currentDate);
  validUntilDate.setDate(validUntilDate.getDate() + 7);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-IN", { day: "2-digit", month: "2-digit", year: "numeric" });

  const handleDownloadPDF = async () => {
    if (!documentRef.current || isGenerating) return;
    setIsGenerating(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: 0,
        filename: `Zan_Services_Kylient_Proposal_${formatDate(currentDate).replace(/\//g, "-")}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };
      await html2pdf().set(opt).from(documentRef.current).save();
    } catch {
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  const plans = [
    {
      name: "Plan A",
      label: "Market Entry",
      tag: "Testing & ROI",
      color: "border-blue-300 bg-blue-50",
      headerColor: "bg-blue-600",
      textColor: "text-blue-700",
      badgeColor: "bg-blue-100 text-blue-700",
      total: 100000,
      agencyPct: 20,
      agencyFee: 20000,
      adSpend: 80000,
      adSpendUSD: "$960",
      totalUSD: "$1,200",
      channels: "Google Search + Meta",
      leads: "20 Leads",
      focus: "Capturing 'Bottom of the Funnel' intent — targeting users actively searching for software outsourcing or custom development.",
      goal: "Prove the model by closing 1–2 high-value international contracts.",
      channelIcons: [
        { icon: <Search className="w-3.5 h-3.5" />, label: "Google Search" },
        { icon: <Monitor className="w-3.5 h-3.5" />, label: "Meta Ads" },
      ],
    },
    {
      name: "Plan B",
      label: "Growth Scaler",
      tag: "The Sweet Spot",
      color: "border-primary/40 bg-primary/5",
      headerColor: "bg-primary",
      textColor: "text-primary",
      badgeColor: "bg-primary/10 text-primary",
      total: 250000,
      agencyPct: 18,
      agencyFee: 45000,
      adSpend: 205000,
      adSpendUSD: "$2,460",
      totalUSD: "$3,000",
      channels: "Google + LinkedIn + Meta",
      leads: "50–60 Leads",
      focus: "Multi-channel presence. LinkedIn Ads to target C-Suite directly (CTOs/Founders) while maintaining a strong Google presence.",
      goal: "Build a consistent sales pipeline for the Zan Services dev team.",
      channelIcons: [
        { icon: <Search className="w-3.5 h-3.5" />, label: "Google" },
        { icon: <Linkedin className="w-3.5 h-3.5" />, label: "LinkedIn" },
        { icon: <Monitor className="w-3.5 h-3.5" />, label: "Meta" },
      ],
      recommended: true,
    },
    {
      name: "Plan C",
      label: "Market Leader",
      tag: "Aggressive Scaling",
      color: "border-amber-400/60 bg-amber-50",
      headerColor: "bg-amber-600",
      textColor: "text-amber-700",
      badgeColor: "bg-amber-100 text-amber-700",
      total: 500000,
      agencyPct: 16,
      agencyFee: 80000,
      adSpend: 420000,
      adSpendUSD: "$5,040",
      totalUSD: "$6,000",
      channels: "Google + LinkedIn + Video",
      leads: "100–120 Leads",
      focus: "Account-Based Marketing (ABM) and Video Authority. Technical case study videos shown to specific high-value companies.",
      goal: "Total market dominance — establishing Zan Services as a premier global software partner.",
      channelIcons: [
        { icon: <Search className="w-3.5 h-3.5" />, label: "Google" },
        { icon: <Linkedin className="w-3.5 h-3.5" />, label: "LinkedIn" },
        { icon: <Video className="w-3.5 h-3.5" />, label: "Video Ads" },
      ],
    },
  ];

  const roadmap = [
    { week: "Week 1", title: "Research & Setup", desc: "Competitor benchmarking, landing page optimization, and tracking setup (GTM / GA4)." },
    { week: "Week 2", title: "Creative & Launch", desc: "Creative design, ad copywriting, and Campaign Launch across Search & Social channels." },
    { week: "Week 3–4", title: "Optimization", desc: "Data-driven optimization, A/B testing ad copies, and Negative Keyword refinement." },
    { week: "Monthly", title: "Reporting", desc: "Comprehensive ROI report and strategy calibration delivered every month." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Agency management fee is payable 100% in advance before campaign commencement each month.",
    "Ad spend budget is paid directly by the client to the respective ad platforms (Google, Meta, LinkedIn). Zan Services does not hold ad budgets.",
    "Minimum commitment: 3 months for any plan. Performance benchmarks are reviewed at the end of Month 1.",
    "Creative assets (brand guidelines, company deck, case studies) must be provided by the client before campaign launch.",
    "Landing page optimization recommendations will be provided. Client is responsible for implementing changes.",
    "Weekly performance updates and a monthly comprehensive ROI report are included in all plans.",
    "Zan Services is not liable for ad platform policy rejections, account suspensions, or changes in platform algorithms.",
    "Any additional services (landing page development, video production, content creation) are charged separately.",
    "Either party may terminate with 30 days written notice after the minimum 3-month commitment period.",
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 print:py-0 print:px-0">
      <div ref={documentRef} className="quote-page rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <img src={zanLogo} alt="" className="w-[600px] opacity-[0.04] select-none" />
        </div>

        {/* Header */}
        <div className="quote-header-light relative z-10">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <img src={zanLogo} alt="Zan Services" className="h-14 mb-3" />
              <h1 className="text-3xl font-bold tracking-tight font-display text-quote-header-bg">Proposal</h1>
              <p className="text-muted-foreground mt-1 text-sm">International Lead Generation — Software Development Contracts (Tier-1 Markets)</p>
              <div className="quote-accent-bar mt-4"></div>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-sm mt-1">Date: {formatDate(currentDate)}</p>
              <p className="text-muted-foreground text-sm">Valid Until: {formatDate(validUntilDate)}</p>
            </div>
          </div>
        </div>

        <div className="px-10 py-8 relative z-10">

          {/* Client & Provider */}
          <div className="flex justify-between items-start mb-8 gap-8">
            <div className="flex-1">
              <div className="quote-highlight-box p-5 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Prepared For</h3>
                    <p className="text-lg font-semibold text-foreground">Kylient</p>
                    <p className="text-muted-foreground text-sm mt-1">Software Development Company</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Service Provider</h3>
                    <p className="text-lg font-semibold text-foreground">Zan Services</p>
                    <p className="text-muted-foreground text-xs mt-0.5 italic">Performance Marketing Division</p>
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

          {/* Market Context */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Market Context & Strategy</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                To acquire quality software development contracts in <strong>Tier-1 countries</strong>, we prioritize <strong>Trust and Intent</strong>.
                Due to high competition in these regions, the strategy focuses on capturing <strong>active searchers on Google</strong> and
                high-value decision-makers <strong>(CTOs / Founders) on LinkedIn</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <div className="quote-sla-card p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Users className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-xs font-semibold text-foreground">Targeting</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">High-income geographies with demand for digital transformation — US, UK, Canada, Australia, UAE.</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1.5">
                    <TrendingUp className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-xs font-semibold text-foreground">Approach</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">360° Funnel — Demand Capture (Google) + Decision-Maker Targeting (LinkedIn) + Remarketing + Brand Authority.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Plans Comparison Table */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Investment Plans — Monthly</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-quote-border">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[28%]">Feature</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold">Plan A — Market Entry</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold">Plan B — Growth Scaler</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold">Plan C — Market Leader</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Total Monthly Investment</td>
                    <td className="py-3 px-4 text-center"><p className="text-sm font-bold text-foreground">₹1,00,000</p><p className="text-[10px] text-muted-foreground">($1,200)</p></td>
                    <td className="py-3 px-4 text-center bg-primary/5"><p className="text-sm font-bold text-foreground">₹2,50,000</p><p className="text-[10px] text-muted-foreground">($3,000)</p></td>
                    <td className="py-3 px-4 text-center"><p className="text-sm font-bold text-foreground">₹5,00,000</p><p className="text-[10px] text-muted-foreground">($6,000)</p></td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Agency Management Fee</td>
                    <td className="py-3 px-4 text-center"><p className="text-sm font-semibold text-foreground">₹20,000</p><p className="text-[10px] text-blue-600 font-medium">20%</p></td>
                    <td className="py-3 px-4 text-center bg-primary/5"><p className="text-sm font-semibold text-foreground">₹45,000</p><p className="text-[10px] text-primary font-medium">18%</p></td>
                    <td className="py-3 px-4 text-center"><p className="text-sm font-semibold text-foreground">₹80,000</p><p className="text-[10px] text-amber-600 font-medium">16%</p></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Net Ad Spend</td>
                    <td className="py-3 px-4 text-center"><p className="text-sm font-semibold text-foreground">₹80,000</p><p className="text-[10px] text-muted-foreground">($960)</p></td>
                    <td className="py-3 px-4 text-center bg-primary/5"><p className="text-sm font-semibold text-foreground">₹2,05,000</p><p className="text-[10px] text-muted-foreground">($2,460)</p></td>
                    <td className="py-3 px-4 text-center"><p className="text-sm font-semibold text-foreground">₹4,20,000</p><p className="text-[10px] text-muted-foreground">($5,040)</p></td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Primary Channels</td>
                    <td className="py-3 px-4 text-center text-xs text-muted-foreground">Google Search + Meta</td>
                    <td className="py-3 px-4 text-center text-xs text-muted-foreground bg-primary/5">Google + LinkedIn + Meta</td>
                    <td className="py-3 px-4 text-center text-xs text-muted-foreground">Google + LinkedIn + Video</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Qualified Monthly Leads</td>
                    <td className="py-3 px-4 text-center"><span className="text-sm font-bold text-blue-600">20 Leads</span></td>
                    <td className="py-3 px-4 text-center bg-primary/5"><span className="text-sm font-bold text-primary">50–60 Leads</span></td>
                    <td className="py-3 px-4 text-center"><span className="text-sm font-bold text-amber-600">100–120 Leads</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Plan Detail Cards */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Plan Breakdowns</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan, index) => (
                <div key={index} className={`border-2 rounded-xl p-5 relative ${plan.color}`}>
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">Recommended</span>
                    </div>
                  )}
                  <div className="mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded ${plan.badgeColor}`}>{plan.name}</span>
                    <p className={`text-base font-bold mt-1.5 ${plan.textColor}`}>{plan.label}</p>
                    <p className="text-[10px] text-muted-foreground italic">{plan.tag}</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Total Investment</span>
                      <span className="font-bold text-foreground">₹{plan.total.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Agency Fee ({plan.agencyPct}%)</span>
                      <span className="font-semibold text-foreground">₹{plan.agencyFee.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-xs border-t border-current/10 pt-2">
                      <span className="text-muted-foreground">Net Ad Spend</span>
                      <span className={`font-bold ${plan.textColor}`}>₹{plan.adSpend.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {plan.channelIcons.map((ch, i) => (
                      <span key={i} className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium ${plan.badgeColor}`}>
                        {ch.icon}{ch.label}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-relaxed space-y-1.5">
                    <p><strong className="text-foreground">Focus:</strong> {plan.focus}</p>
                    <p><strong className="text-foreground">Goal:</strong> {plan.goal}</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-current/10 text-center">
                    <p className={`text-lg font-bold ${plan.textColor}`}>{plan.leads}</p>
                    <p className="text-[10px] text-muted-foreground">qualified / month</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Execution Roadmap */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Rocket className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Execution Roadmap</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {roadmap.map((item, index) => (
                <div key={index} className="quote-sla-card p-4 rounded-lg">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-primary">{item.week}</span>
                  <p className="text-xs font-semibold text-foreground mt-1 mb-1.5">{item.title}</p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcome */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <DollarSign className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Expected Outcome</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                In the software industry, an average international contract ranges from <strong>$15,000 to $100,000+</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="quote-sla-card p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mb-1.5" />
                  <p className="text-xs font-semibold text-foreground">Market Entry (Plan A — ₹1L)</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">Closing just <strong>one lead</strong> results in an ROI of <strong>10x–15x</strong> on the total investment.</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mb-1.5" />
                  <p className="text-xs font-semibold text-foreground">Higher Plans (₹2.5L & ₹5L)</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">Reduce risk of "dry spells" by ensuring a <strong>high volume of meetings every single week</strong>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Payment Terms</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Agency Fee — Advance Before Campaign Start</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">Direct</p>
                <p className="text-xs text-muted-foreground mt-1">Ad Spend Paid Directly to Platforms by Client</p>
              </div>
            </div>
          </div>

          {/* T&C */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Terms & Conditions</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <ol className="space-y-2">
                {termsAndConditions.map((term, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground shrink-0">{index + 1}.</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Signature */}
          <div className="quote-section">
            <div className="flex flex-wrap justify-between items-end mt-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Authorised by</p>
                <img src={directorSignature} alt="Director Signature" className="h-12 mb-1 opacity-90" />
                <p className="text-sm font-semibold text-foreground">Director, Zan Services</p>
                <p className="text-xs text-muted-foreground">operations@zanservices.com · +91 82408 25490</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Client Acceptance</p>
                <div className="w-48 border-b border-dashed border-slate-400 mt-8 mb-1"></div>
                <p className="text-xs text-muted-foreground">Signature & Date</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Download Buttons - Hidden on print */}
      <div className="max-w-4xl mx-auto mt-6 flex flex-wrap justify-center gap-4 no-print">
        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="flex items-center justify-center gap-2 min-w-[160px] px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {isGenerating ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          {isGenerating ? "Generating PDF..." : "Download PDF"}
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center justify-center gap-2 min-w-[160px] px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors shadow-lg border border-quote-border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <FileText className="w-4 h-4" />
          Print
        </button>
      </div>
    </div>
  );
};

export default AyushJainProposal;
