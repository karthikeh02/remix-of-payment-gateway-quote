import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, Video, Share2, Target, PieChart, BarChart3, CreditCard, AlertTriangle } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const LeisureAudioConsolidatedProposal = () => {
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
        filename: `Zan_Services_Leisure_Audio_Consolidated_Proposal_${formatDate(currentDate).replace(/\//g, '-')}.pdf`,
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

  const tvcServices = [
    { service: "Brand Film TVCs (×2)", description: "End-to-end production of 2 premium brand films — concept, scripting, direction, cinematography, post-production, color grading, VFX & sound design." },
    { service: "Cinematic Reels (×20)", description: "20 high-energy product showcase reels — trending audio transitions, \"behind the sound\" features, and viral-style content for social media." },
    { service: "Product Photoshoots", description: "Professional product & lifestyle photography sessions for e-commerce listings, social media, and ad creatives." },
    { service: "Pre-Production", description: "Script development, storyboarding, location scouting, casting, crew & equipment planning." },
    { service: "Production", description: "Full crew deployment — director, cinematographer, assistants, lighting, sound, monitors & gadgets." },
    { service: "Post-Production", description: "Professional editing, color grading, VFX, sound design, music mixing & mastering, studio recording." },
    { service: "Logistics & Management", description: "All travel, accommodation, food, location permits, and creative head management included." },
  ];

  const contentDeliverables = [
    { deliverable: "15 Reels", details: "High-energy product showcases, trending audio transitions, \"behind the sound\" features, viral-style unboxing", goal: "Mass reach & brand awareness" },
    { deliverable: "15 Static / Carousel Posts", details: "Educational carousels (e.g., \"The Science of Bass\"), high-fidelity product photography, value-driven infographics", goal: "Engagement & brand authority" },
    { deliverable: "Trend & Occasion Integration", details: "Real-time response to viral trends within 24–48 hours. Strategic content for all major national holidays", goal: "Relevance & virality" },
  ];

  const strategicScope = [
    { service: "End-to-End Content Creation", description: "Scripting, professional graphic design, and video editing for all 30+ assets." },
    { service: "Trend Monitoring", description: "Continuous scanning of Instagram/Facebook/LinkedIn trends to keep the brand relevant." },
    { service: "Caption & Hashtag Strategy", description: "SEO-optimized captions to improve discoverability." },
    { service: "Publishing & Scheduling", description: "Optimized posting times based on audience activity data." },
  ];

  const performanceChannels = [
    { service: "Meta Ads (Instagram & Facebook)", description: "Cinematic \"Vibe\" Reels targeting HNIs and luxury lifestyle enthusiasts." },
    { service: "Marketplace Ads (Amazon & Flipkart)", description: "Dominating premium audio search categories and \"Deal of the Day\" placements." },
    { service: "Google Performance", description: "Search and Shopping ads targeting high-intent keywords like \"100W Professional Speakers\"." },
    { service: "Spotify Ads", description: "15-30 second spots targeting audiophiles and home décor enthusiasts to build \"Acoustic Authority\"." },
    { service: "Dynamic Retargeting", description: "Personalized ads and cart recovery via Meta DPA and Google Display to minimize leaked revenue." },
  ];

  const mediaAllocation = [
    { channel: "Meta Ads", allocation: "50%", goal: "Capture the \"Impulse Luxury\" buyer" },
    { channel: "Marketplace Ads", allocation: "25%", goal: "Intercept high-intent search traffic on Amazon/Flipkart" },
    { channel: "Google Performance", allocation: "15%", goal: "Convert intent-driven buyers via Search/Shopping" },
    { channel: "Dynamic Retargeting", allocation: "10%", goal: "Close the loop and recover abandoned carts" },
  ];

  const investmentItems = [
    { category: "TVC & Content Production (2 TVCs + 20 Reels + Photoshoots)", investment: "₹20,00,000 (One-Time)" },
    { category: "Social Media Management Fee", investment: "₹1,50,000/month" },
    { category: "Paid Ads Management Fee (12.5% of Ad Spend)", investment: "₹1,12,500/month*" },
    { category: "Direct Media Spend (Paid to Platforms)", investment: "₹9,00,000 for 3 months (Initial Baseline)" },
    { category: "Taxes", investment: "+ 18% GST on all service fees" },
  ];

  const termsAndConditions = [
    "This proposal is valid for 7 (seven) days from the date of issue.",
    "Payment terms — TVC Production: 50% advance to commence production, 30% on mid-production milestone, 20% on delivery of final assets.",
    "Payment terms — Monthly Retainer: SMM fee of ₹1,50,000 + GST and Ads Management fee of ₹1,12,500 + GST payable 100% in advance before each month.",
    "Direct media spend (₹9,00,000 for 3 months, ~₹3,00,000/month baseline) is NOT included in service fees and must be paid separately by the client to the respective ad platforms.",
    "Service charges are exclusive of GST (18%). GST will be charged additionally on all service fees.",
    "Client must provide product samples (for influencers), brand guidelines, and marketplace seller account access in a timely manner.",
    "All creative content, ad copies, and social media posts will be shared for client approval before publishing.",
    "Zan Services reserves the right to recommend budget adjustments based on campaign performance and market conditions.",
    "Minimum commitment period: 3 months recommended for meaningful marketing results.",
    "Zan Services will provide weekly performance reports tracking campaign metrics, spend efficiency & optimization updates.",
    "Influencer collaboration costs are separate and will be quoted individually upon approval.",
    "Any additional services beyond the scope mentioned in this proposal will be charged separately after mutual agreement.",
    "Either party may terminate the engagement with 15 days written notice. No refund on services already rendered.",
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
            <tr className={badge === "New" ? "quote-table-header-green" : "quote-table-header"}>
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
              <h1 className="text-3xl font-bold tracking-tight font-display text-quote-header-bg">Proposal</h1>
              <p className="text-muted-foreground mt-1 text-sm">Strategic Digital Growth & Brand Authority — TVC Production • Social Media • Performance Marketing</p>
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
                    <p className="text-lg font-semibold text-foreground">Leisure Audio</p>
                    <p className="text-muted-foreground text-sm mt-1">Premium Audio Brand</p>
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

          {/* Section 1: Executive Summary */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Executive Summary</h2>
            </div>
            <div className="bg-secondary/50 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                This proposal outlines the integrated approach for Leisure Audio, combining high-impact TVC & content production with organic social media management and a full-funnel performance marketing engine. Our goal is to establish "The New Standard in Audio Luxury" by synchronizing premium brand storytelling with data-driven paid acquisition.
              </p>
            </div>
          </div>

          {/* Section 2: TVC & Content Production */}
          {renderServiceTable(
            "TVC & Content Production",
            <Video className="w-5 h-5 text-primary shrink-0" />,
            tvcServices,
            "All-Inclusive",
            "bg-green-100 text-green-700"
          )}

          {/* Green info box after TVC table */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 -mt-4 mb-8">
            <p className="text-xs text-green-700 leading-relaxed">
              All production costs are fully inclusive — stay, food, travel, crew, equipment, locations, and post-production. No hidden charges.
            </p>
          </div>

          {/* Section 3: Social Media Management */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Share2 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Social Media Management (Organic Growth)</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We will manage all social media pages with a 30+ Post Monthly Calendar designed for maximum engagement and platform-specific growth.
            </p>

            {/* Content Deliverables Table */}
            <p className="text-sm font-semibold text-foreground mb-2">Content Deliverables</p>
            <div className="overflow-hidden rounded-lg border border-quote-border mb-6">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Deliverable</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Details</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[20%]">Goal</th>
                  </tr>
                </thead>
                <tbody>
                  {contentDeliverables.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.deliverable}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.details}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Strategic Scope Table */}
            <p className="text-sm font-semibold text-foreground mb-2">Strategic Scope</p>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[30%]">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {strategicScope.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Performance Marketing */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Performance Marketing (Paid Acquisition)</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A multi-channel ad strategy designed to capture intent and drive conversions across all product tiers.
            </p>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[30%]">Channel</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceChannels.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5: Strategic Media Allocation */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <PieChart className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Strategic Media Allocation</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The initial budget is distributed to balance brand awareness with immediate sales performance.
            </p>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[30%]">Channel</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[15%]">Allocation</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Strategic Goal</th>
                  </tr>
                </thead>
                <tbody>
                  {mediaAllocation.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.channel}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-foreground align-top">{item.allocation}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Scalability Note */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <p className="text-xs text-amber-700 leading-relaxed">
                <strong>Scalability Clause:</strong> The media spend will be scaled dynamically. As performance metrics (ROAS and CAC) hit target benchmarks, the budget will be increased to maximize sales velocity.
              </p>
            </div>
          </div>

          {/* Section 6: Reporting & Governance */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Reporting & Governance</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-secondary/50 rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground mb-2">Weekly Performance Reports</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Detailed summaries covering sales volume, inventory status, and spend efficiency (ROAS/CAC)</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground mb-2">Optimization Updates</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Continuous refinement of ad sets and content themes based on real-time data</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground mb-2">Client Ownership</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">All ad accounts, marketplace seller accounts, and creative assets remain the property of the client</p>
              </div>
            </div>
          </div>

          {/* Section 7: Investment Summary */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Investment Summary</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold">Service Category</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[35%]">Investment</th>
                  </tr>
                </thead>
                <tbody>
                  {investmentItems.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.category}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-foreground align-top">{item.investment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2">*Agency management fee. Ad spend of ₹9,00,000 is for 3 months (~₹3,00,000/month baseline), paid separately to platforms.</p>
          </div>

          {/* Total Boxes */}
          <div className="my-8">
            {/* Box 1: TVC & Content Production */}
            <div className="quote-total-box p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">TVC & CONTENT PRODUCTION</p>
                  <p className="text-xs text-white/60 mt-1">2 Brand Films + 20 Reels + Photoshoots • All-Inclusive</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹20,00,000</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-2 text-white/90">₹23,60,000 <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>

            {/* Box 2: Monthly SMM Retainer */}
            <div className="quote-total-box p-6 rounded-lg mt-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">SOCIAL MEDIA MANAGEMENT</p>
                  <p className="text-xs text-white/60 mt-1">Monthly Retainer — 30+ Posts (15 Reels + 15 Statics)</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹1,50,000/month</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-2 text-white/90">₹1,77,000/month <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>

            {/* Box 3: Ads Management Fee — 3 Months Advance */}
            <div className="quote-total-box p-6 rounded-lg mt-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">PAID ADS MANAGEMENT FEE</p>
                  <p className="text-xs text-white/60 mt-1">12.5% of Ad Spend — Monthly</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹1,12,500/month</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-2 text-white/90">₹1,32,750/month <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>

            {/* Box 3: Direct Media Spend — Amber Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
              <h3 className="text-sm font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Direct Media Spend
              </h3>
              <p className="text-lg font-bold text-amber-900">₹9,00,000 for 3 months <span className="text-sm font-normal text-amber-700">(₹3,00,000/month • Initial Baseline) — Paid Separately to Platforms</span></p>
              <p className="text-xs text-amber-600 mt-2">This budget goes directly to Meta, Google, Amazon & Flipkart ad platforms. Not included in service fees.</p>
            </div>

            {/* Influencer Note — Blue Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-5">
              <p className="text-xs text-blue-700 leading-relaxed">
                <strong>Note:</strong> Influencer collaboration costs (e.g., Beebom, Tech Burner) are separate and will be quoted individually upon approval.
              </p>
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
              Zan Services respects client confidentiality. All business data, campaign strategies, analytics, audience insights,
              and any proprietary information shared during the engagement will be kept strictly confidential. Access credentials
              shared by the client will be used solely for the purpose of delivering the agreed services and will not be shared
              with any third party.
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
                  outlined in this proposal for Strategic Digital Growth & Brand Authority services.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Leisure Audio</p>
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

export default LeisureAudioConsolidatedProposal;
