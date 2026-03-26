import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, CheckCircle2, Shield, CreditCard, Search, Layout, AlertTriangle, BarChart3, Wrench } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const AssamEduverseProposal = () => {
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
        filename: `Zan_Services_Assam_Eduverse_Indexing_Quotation_${formatDate(currentDate).replace(/\//g, "-")}.pdf`,
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };
      await html2pdf().set(opt).from(documentRef.current).save();
    } catch {
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  const issuesIdentified = [
    { issue: "Sitemap Not Configured / Broken", description: "The website's XML sitemap is either missing, incorrectly generated, or not submitted to Google Search Console — preventing Google from discovering and crawling all pages efficiently." },
    { issue: "Pages Not Indexed by Google", description: "Critical pages of the website are not appearing in Google search results. Google is unable to index the site properly due to sitemap errors, crawl issues, or misconfigured robots.txt." },
    { issue: "Potential Crawl Errors", description: "There may be crawl errors, broken links, redirect loops, or server-side issues preventing Googlebot from accessing and indexing the website content." },
  ];

  const services = [
    { service: "Complete Sitemap Audit & Fix", description: "Thorough audit of the existing XML sitemap — identify missing pages, broken URLs, incorrect formats. Generate a clean, valid XML sitemap with all indexable pages and proper priority/frequency settings." },
    { service: "Google Search Console Setup & Configuration", description: "Full setup and verification of Google Search Console (if not done). Submit corrected sitemap, request indexing for all pages, monitor crawl stats & fix any reported errors." },
    { service: "Robots.txt Audit & Optimization", description: "Review and fix robots.txt to ensure no critical pages are accidentally blocked from crawling. Proper allow/disallow rules for Googlebot and other search engine bots." },
    { service: "Crawl Error Resolution", description: "Identify and resolve all crawl errors reported in Google Search Console — including 404 errors, server errors, redirect issues, and soft 404s that prevent proper indexing." },
    { service: "Manual Indexing Request", description: "Manually request Google to index all important pages via Google Search Console's URL Inspection tool — ensuring faster pickup of corrected pages in search results." },
  ];

  const deliverables = [
    { deliverable: "Technical Audit Report", description: "Comprehensive report documenting all issues found — sitemap errors, crawl issues, indexing problems, and technical issues with priority-wise recommendations." },
    { deliverable: "Fixed XML Sitemap", description: "Clean, validated XML sitemap submitted to Google Search Console with all indexable pages properly listed." },
    { deliverable: "Google Search Console Dashboard", description: "Fully configured GSC with sitemap submitted, indexing requested, and all errors resolved. Client will have full access." },
    { deliverable: "Indexing Status Report", description: "Post-fix report showing indexing progress — pages indexed vs. not indexed, crawl stats, and recommendations for ongoing monitoring." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment terms: 100% advance payment before work begins.",
    "Project scope covers sitemap fix, Google indexing resolution, and crawl error fixes as listed in this quotation.",
    "Client must provide access to: website admin panel (WordPress), hosting/cPanel, Google Search Console, and Google Analytics (if available).",
    "Google indexing can take 2-4 weeks to fully reflect after fixes are implemented. We will monitor and ensure all pages are submitted for indexing.",
    "Post-delivery support: 15 days of monitoring & minor fixes included after completion.",
    "GST @ 18% is applicable on all charges and will be charged additionally.",
  ];

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
              <p className="text-muted-foreground mt-1 text-sm">Google Indexing & Sitemap Fix — Technical Audit & Resolution</p>
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
                    <p className="text-lg font-semibold text-foreground">Assam Eduverse</p>
                    <p className="text-muted-foreground text-sm mt-1">Education & EdTech Services</p>
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

          {/* Project Overview */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Problem Statement</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Assam Eduverse</strong> is facing critical issues with <strong>Google indexing</strong> — the website is not being listed properly in Google search results. The primary issue is with the <strong>XML sitemap</strong>, which is either missing, misconfigured, or not submitted correctly, resulting in Google being unable to discover, crawl, and index the website pages. This is directly impacting the website's online presence and discoverability.
              </p>
            </div>
          </div>

          {/* Issues Identified */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Search className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Issues Identified</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[30%]">Issue</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {issuesIdentified.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.issue}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO Services Scope */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Scope of Work — Indexing & Sitemap Fix</h2>
              <span className="quote-badge whitespace-nowrap">{"\u20b9"}9,000 + GST</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
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

          {/* Deliverables */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Layout className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Deliverables</h2>
              <span className="quote-badge whitespace-nowrap">4 Key Deliverables</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Deliverable</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {deliverables.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.deliverable}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Investment Summary */}
          <div className="my-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Investment Summary</h2>
            </div>

            {/* Total box */}
            <div className="quote-total-box p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">TOTAL PROJECT COST</p>
                  <p className="text-xs text-white/60 mt-1">Google Indexing Fix & Sitemap Repair</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">{"\u20b9"}9,000/- <span className="text-sm font-normal text-white/70">+ GST (18%)</span></p>
                  <p className="text-lg font-semibold mt-2 text-white/90">{"\u20b9"}10,620/- <span className="text-sm font-normal text-white/70">Including GST</span></p>
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-card border border-quote-border rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary">{"\u20b9"}9,000</p>
                <p className="text-xs font-semibold text-foreground mt-1">Full Payment</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">100% advance before work begins</p>
              </div>
              <div className="bg-card border border-quote-border rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary">15 Days</p>
                <p className="text-xs font-semibold text-foreground mt-1">Post-Delivery Support</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Monitoring & minor fixes</p>
              </div>
            </div>

            {/* Investment table */}
            <div className="overflow-hidden rounded-lg border border-quote-border mt-5">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[35%]">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Google Indexing Fix + Sitemap Repair</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">{"\u20b9"}9,000/- + GST (One-Time)</td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Post-Delivery Monitoring (15 Days)</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">Included</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Domain & Hosting</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">Client-Borne | Existing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Payment Terms</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground shrink-0">1.</span>
                  <span>100% advance payment ({"\u20b9"}9,000 + GST) before work begins — payable upon acceptance of this quotation.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground shrink-0">2.</span>
                  <span>Client must provide access to: website admin panel, hosting/cPanel, Google Search Console & Google Analytics before work begins.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground shrink-0">3.</span>
                  <span>Work will commence within 24 hours of receiving payment and all required access credentials.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="quote-section border-b-0">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-primary shrink-0" />
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

          {/* Privacy & Confidentiality */}
          <div className="mt-6 p-5 bg-secondary/50 rounded-lg">
            <h3 className="text-sm font-semibold text-foreground mb-2">Privacy & Confidentiality</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Zan Services respects client confidentiality. All business data, website credentials, and analytics data shared during the engagement will be kept strictly confidential. No client data will be shared with third parties without prior consent. All Google Search Console access, analytics reports, and documentation will remain with the client at all times.
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
                  outlined in this quotation for Google Indexing & Sitemap Fix — Technical Services.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Assam Eduverse</p>
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

export default AssamEduverseProposal;
