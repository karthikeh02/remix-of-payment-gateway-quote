import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, Search, Share2, Settings, Target, CheckCircle2, Shield, CreditCard, Clock, AlertTriangle } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const AngelCareProposal = () => {
  const documentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentDate = new Date();
  const validUntilDate = new Date(currentDate);
  validUntilDate.setDate(validUntilDate.getDate() + 3);

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
        filename: `Zan_Services_Angel_Care_Foundation_Quotation_${formatDate(currentDate).replace(/\//g, '-')}.pdf`,
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

  const seoServices = [
    { service: "Website SEO Audit", description: "Technical audit covering site speed, mobile-friendliness, crawl errors, and optimization gaps." },
    { service: "Keyword Research & Strategy", description: "Targeted keyword research for NGO, healthcare, and social cause terms with local mapping for Thane & Maharashtra." },
    { service: "On-Page SEO Optimization", description: "Meta tags, headers, internal linking, schema markup, and content optimization across all pages." },
    { service: "Off-Page SEO & Link Building", description: "Backlink building via directory submissions, guest posts, and outreach to relevant platforms." },
    { service: "Local SEO (Google My Business)", description: "Google Business Profile optimization, local citations, and map pack ranking strategy." },
  ];

  const smoServices = [
    { service: "Social Media Strategy & Planning", description: "Content calendar and posting strategy for Facebook, Instagram & LinkedIn tailored to the foundation's mission." },
    { service: "Content Creation & Posting", description: "Graphics, reels, stories, and carousels highlighting activities, events, and awareness campaigns." },
    { service: "Community Management", description: "Engagement with followers — comments, messages, and building an online community." },
    { service: "Hashtag & Trend Strategy", description: "Hashtag research and strategic use of trending topics to maximize organic reach." },
  ];

  const googleAdsServices = [
    { service: "Campaign Setup & Management", description: "Search & Display campaign setup targeting healthcare, NGO, and social cause keywords." },
    { service: "Keyword & Bid Optimization", description: "Strategic keyword selection, negative filtering, and bid management to maximize ROI." },
    { service: "Ad Copy Creation", description: "Compelling ad copies with extensions and strong CTAs for better click-through rates." },
    { service: "Campaign Monitoring", description: "Daily monitoring, A/B testing, and continuous optimization to reduce CPC." },
  ];

  const metaAdsServices = [
    { service: "Awareness Campaign Setup", description: "Facebook & Instagram campaigns to spread the foundation's mission and impact stories." },
    { service: "Audience Targeting", description: "Custom and lookalike audiences based on demographics, interests, and behaviors." },
    { service: "Creative Ad Design", description: "Image and video ads optimized for feeds, stories, and reels." },
    { service: "Campaign Optimization", description: "A/B testing of creatives and placements to maximize reach at lowest cost." },
  ];

  const websiteManagementServices = [
    { service: "Website Content Updates", description: "Regular content updates, page edits, blog posting, and media uploads as needed." },
    { service: "Performance Monitoring", description: "Monthly site speed checks, uptime monitoring, and performance optimization." },
    { service: "Security & Backup", description: "Regular backups, security patches, plugin updates, and malware scanning." },
    { service: "Technical Support", description: "Bug fixes, minor feature additions, and technical troubleshooting." },
  ];

  const additionalServices = [
    { service: "Google Analytics & Tag Setup", description: "Complete GA4 and GTM setup for tracking visitors, conversions, and campaign performance." },
    { service: "Competitor Analysis", description: "Monthly competitor benchmarking to identify gaps, opportunities, and strategies." },
    { service: "Reputation Management", description: "Online reputation monitoring, review response strategy, and brand mention tracking." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 3 (three) days from the date of issue.",
    "Payment: 100% advance before commencement each month.",
    "Service charges are exclusive of GST (18%).",
    "Ad spend is NOT included in the service charges and is paid separately by the client directly to the platforms.",
    "Estimated ad spend: Google Ads ₹800/day + Meta Ads ₹200/day. Actual spend may vary based on campaign performance and strategy.",
    "Minimum commitment: 3 months recommended for meaningful results.",
    "All content will be shared with the client for approval before publishing.",
    "Client must provide access to website backend, Google Analytics, Google Ads account, Meta Business Suite, and all social media accounts.",
    "SEO results are organic and may take 2–4 months for significant ranking improvements.",
    "Zan Services may recommend budget adjustments based on campaign performance and market conditions.",
    "Additional services beyond the defined scope will be quoted and charged separately.",
    "Either party may terminate the engagement with 15 days written notice. No refund will be issued on services already rendered.",
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
              <h1 className="text-3xl font-bold tracking-tight font-display text-quote-header-bg">Quotation</h1>
              <p className="text-muted-foreground mt-1 text-sm">Digital Marketing Services — SEO, SMO, Google Ads, Meta Ads & Website Management</p>
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
                    <p className="text-lg font-semibold text-foreground">Angel Care Foundation</p>
                    <p className="text-muted-foreground text-sm mt-1">NGO / Healthcare Foundation</p>
                    <p className="text-muted-foreground text-xs mt-0.5">Thane, Maharashtra</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Service Provider</h3>
                    <p className="text-lg font-semibold text-foreground">Zan Services</p>
                    <p className="text-muted-foreground text-xs mt-0.5 italic">Digital Marketing Division</p>
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

          {/* Service Tables */}
          {renderServiceTable(
            "Search Engine Optimization (SEO)",
            <Search className="w-5 h-5 text-primary shrink-0" />,
            seoServices
          )}

          {renderServiceTable(
            "Social Media Optimization (SMO)",
            <Share2 className="w-5 h-5 text-primary shrink-0" />,
            smoServices
          )}

          {renderServiceTable(
            "Google Ads Management",
            <Settings className="w-5 h-5 text-primary shrink-0" />,
            googleAdsServices
          )}

          {renderServiceTable(
            "Meta Ads (Facebook & Instagram) — Awareness Campaigns",
            <Target className="w-5 h-5 text-primary shrink-0" />,
            metaAdsServices
          )}

          {renderServiceTable(
            "Website Management",
            <Globe className="w-5 h-5 text-primary shrink-0" />,
            websiteManagementServices,
            "New",
            "bg-green-100 text-green-700"
          )}

          {renderServiceTable(
            "Additional Services (Included)",
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />,
            additionalServices
          )}

          {/* Total Monthly Service Fee */}
          <div className="my-8">
            <div className="quote-total-box p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Total Monthly Service Fee</p>
                  <p className="text-xs text-white/60 mt-1">Digital Marketing — SEO, SMO, Google Ads, Meta Ads & Website Management</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹23,000/month</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-2 text-white/90">₹27,140/month <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>

            {/* Ad Spend — Amber/Warning Box */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
              <h3 className="text-sm font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Ad Spend (NOT Included in Service Charges)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                <div className="flex justify-between bg-white/60 rounded px-3 py-2">
                  <span className="text-amber-700">Google Ads Spend</span>
                  <span className="font-semibold text-amber-900">₹800/day (~₹24,000/mo)</span>
                </div>
                <div className="flex justify-between bg-white/60 rounded px-3 py-2">
                  <span className="text-amber-700">Meta Ads Spend</span>
                  <span className="font-semibold text-amber-900">₹200/day (~₹6,000/mo)</span>
                </div>
                <div className="flex justify-between bg-white/60 rounded px-3 py-2">
                  <span className="text-amber-700">Estimated Total</span>
                  <span className="font-semibold text-amber-900">~₹30,000/month</span>
                </div>
              </div>
              <p className="text-[10px] text-amber-600 mt-2">* Ad spend is paid separately by the client directly to Google & Meta platforms. Actual spend may vary based on campaign strategy.</p>
            </div>

            {/* Additional/Extra Services Note */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Additional / Extra Services:</strong> Any services beyond the defined scope — including website development, landing pages, video production,
                influencer marketing, print media, and event promotions — will be quoted and charged separately.
              </p>
            </div>

            {/* Payment Terms Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                <div className="w-full">
                  <p className="text-sm font-semibold text-slate-800 mb-3">Payment Terms</p>
                  <div className="overflow-hidden rounded-lg border border-slate-200">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-slate-200">
                          <td className="py-2.5 px-4 text-slate-600">Monthly Service Fee</td>
                          <td className="py-2.5 px-4 text-right font-semibold text-slate-800">₹23,000 + GST (₹27,140)</td>
                        </tr>
                        <tr className="border-b border-slate-200 quote-table-row-stripe">
                          <td className="py-2.5 px-4 text-slate-600">Payment Due</td>
                          <td className="py-2.5 px-4 text-right font-semibold text-slate-800">100% Advance (Before Month Start)</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-4 text-slate-600">Ad Spend</td>
                          <td className="py-2.5 px-4 text-right font-semibold text-slate-800">Paid Separately to Platforms</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
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
                  outlined in this quotation for Digital Marketing Services.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Angel Care Foundation</p>
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

export default AngelCareProposal;
