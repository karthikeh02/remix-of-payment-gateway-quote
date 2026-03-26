import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, CheckCircle2, Settings, Shield, CreditCard, Code, Search, Layout, Users } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const LegalMediaProposal = () => {
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
        filename: `Zan_Services_Legal_Media_Quotation_${formatDate(currentDate).replace(/\//g, "-")}.pdf`,
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

  const migrationServices = [
    { service: "Laravel to WordPress Migration", description: "Complete migration of the existing legalmedia.in website from Laravel framework to WordPress — including theme setup, page recreation, content migration, URL structure mapping & 301 redirects to preserve SEO rankings." },
    { service: "Custom WordPress Theme Development", description: "Professionally designed, fully responsive WordPress theme tailored to Legal Media's brand identity — clean, corporate look with intuitive navigation for legal & business services." },
    { service: "Partner Login System", description: "Secure partner login portal with role-based access control — partners can log in, view dashboards or resources assigned to them. Built using WordPress membership/login plugin with custom styling." },
    { service: "Get Started / Enquiry Flow", description: "'Get Started' CTA with lead capture form — collects client details, service interest & requirements. Submissions sent via email notification and stored in WordPress admin for follow-up." },
    { service: "Blog / News Section", description: "Fully functional blog with categories, tags, featured images, social sharing & SEO-optimized structure. Easy-to-use WordPress editor for publishing articles, legal updates & industry news." },
    { service: "Contact Us Page", description: "Professional contact page with enquiry form, Google Maps integration, office address, phone numbers & email — with form submissions stored in admin panel." },
    { service: "SEO-Friendly Structure", description: "Clean URLs, meta titles & descriptions, Open Graph tags, XML sitemap, schema markup, image optimization, fast-loading pages & mobile-first indexing — ensuring strong search engine visibility." },
    { service: "Mobile-Responsive Design", description: "Fully responsive across all devices — mobile, tablet & desktop. Optimized navigation, readable typography & fast-loading pages for the best user experience." },
  ];

  const pageStructure = [
    { page: "Home Page", description: "Redesigned landing page showcasing all service categories with clear CTAs, trust signals & professional layout." },
    { page: "Startup", description: "All existing startup-related pages migrated as-is to WordPress with same content & structure." },
    { page: "IP India", description: "All existing IP India pages migrated as-is to WordPress with same content & structure." },
    { page: "Registration", description: "Licenses & Registration, Special Licenses, and Export Promotion Councils (2 subpages) — restructured and migrated to WordPress." },
    { page: "Compliance", description: "All existing compliance pages migrated as-is to WordPress with same content & structure." },
    { page: "Legal", description: "All existing legal service pages migrated as-is to WordPress with same content & structure." },
    { page: "Digitals", description: "3 subpages for digital services — migrated and restructured in WordPress with clean navigation." },
    { page: "Funding", description: "3 subpages for funding services — migrated and restructured in WordPress with clean navigation." },
    { page: "Franchise", description: "Dedicated franchise page with franchise model details, benefits & enquiry form." },
    { page: "About Us", description: "Company overview, mission, vision, team details & trust-building content." },
    { page: "Blog", description: "Dynamic blog section with categories, search, recent posts & SEO-optimized article pages." },
    { page: "Contact Us", description: "Contact form, Google Maps, office address, phone & email details." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment terms: 50% advance to begin work, remaining 50% upon project completion & go-live.",
    "Project scope covers complete migration of the existing legalmedia.in website from Laravel to WordPress, including all pages, content, and functionalities listed in this quotation.",
    "Client must provide all existing website credentials (hosting, domain, database, Laravel codebase access) for smooth migration.",
    "Content will be migrated as-is from the existing website. Any new content writing or copywriting is not included unless explicitly agreed upon.",
    "Up to 2 rounds of design revisions are included. Additional revisions will be charged separately.",
    "Estimated delivery timeline: 2 weeks from the date of advance payment and receipt of all required access credentials.",
    "Post-launch support: 15 days of bug-fix & minor adjustment support included after go-live.",
    "Domain & hosting charges are separate and borne by the client. Zan Services will assist with hosting setup & domain pointing.",
    "GST @ 18% is applicable on all charges and will be charged additionally.",
    "All source code, WordPress admin access, theme files, domain & hosting credentials will remain with the client.",
    "301 redirects will be set up to preserve existing SEO rankings and avoid broken links after migration.",
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
              <p className="text-muted-foreground mt-1 text-sm">Laravel to WordPress Migration — Website Redesign & Development</p>
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
                    <p className="text-lg font-semibold text-foreground">Legal Media</p>
                    <p className="text-muted-foreground text-sm mt-1">Legal, Business & Compliance Services</p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground mt-1"><Globe className="w-3.5 h-3.5 shrink-0" /><span>legalmedia.in</span></p>
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
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Project Overview</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete migration of the existing <strong>legalmedia.in</strong> website from <strong>Laravel</strong> to <strong>WordPress</strong> — with a professionally redesigned theme, SEO-optimized structure, partner login system, lead capture flow, blog section, and all existing service pages recreated in WordPress. The goal is a modern, easy-to-manage website that the Legal Media team can update independently without developer dependency.
              </p>
            </div>
          </div>

          {/* Migration Scope */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Migration & Development Scope</h2>
              <span className="quote-badge whitespace-nowrap">{"\u20b9"}80,000 + GST</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[30%]">Component</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {migrationServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Page Structure */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Layout className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Page Structure & Sitemap</h2>
              <span className="quote-badge whitespace-nowrap">12 Main Sections</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Page / Section</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {pageStructure.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.page}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2 italic">
              * Partner Login & Get Started functionality included as described in the scope above.
            </p>
          </div>

          {/* Delivery Timeline */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Delivery Timeline</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Day 1–3</p>
                <p className="text-[10px] text-muted-foreground mt-1">Setup, Theme Design & Homepage</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Day 4–7</p>
                <p className="text-[10px] text-muted-foreground mt-1">Service Pages & Content Migration</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Day 8–11</p>
                <p className="text-[10px] text-muted-foreground mt-1">Partner Login, Blog & Forms</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Day 12–14</p>
                <p className="text-[10px] text-muted-foreground mt-1">SEO, Testing & Go-Live</p>
              </div>
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
                  <p className="text-xs text-white/60 mt-1">Laravel to WordPress Migration — Complete Website Redesign & Development</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">{"\u20b9"}80,000/- <span className="text-sm font-normal text-white/70">+ GST (18%)</span></p>
                  <p className="text-lg font-semibold mt-2 text-white/90">{"\u20b9"}94,400/- <span className="text-sm font-normal text-white/70">Including GST</span></p>
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-card border border-quote-border rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary">{"\u20b9"}40,000</p>
                <p className="text-xs font-semibold text-foreground mt-1">Advance Payment</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">50% to begin work</p>
              </div>
              <div className="bg-card border border-quote-border rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary">{"\u20b9"}40,000</p>
                <p className="text-xs font-semibold text-foreground mt-1">On Completion</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">50% on go-live</p>
              </div>
              <div className="bg-card border border-quote-border rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary">2 Weeks</p>
                <p className="text-xs font-semibold text-foreground mt-1">Delivery Timeline</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">From advance & access received</p>
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
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Laravel to WordPress Migration + Complete Website Development</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">{"\u20b9"}80,000/- + GST (One-Time)</td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Domain & Hosting</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">Client-Borne | Separate</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Post-Launch Support (15 Days)</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">Included</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* What's Included */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Search className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">What's Included</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "WordPress Setup & Configuration",
                "Custom Theme Development",
                "All Page Migration & Recreation",
                "Partner Login Portal",
                "Get Started / Lead Capture",
                "Blog / News Section",
                "Contact Form & Google Maps",
                "SEO Optimization & Sitemap",
                "Mobile-Responsive Design",
                "301 Redirects (SEO Preservation)",
                "15 Days Post-Launch Support",
                "WordPress Admin Training",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground">{item}</p>
                </div>
              ))}
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
                  <span>50% advance ({"\u20b9"}40,000 + GST) to begin work — payable upon acceptance of this quotation.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground shrink-0">2.</span>
                  <span>Remaining 50% ({"\u20b9"}40,000 + GST) upon project completion & go-live.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground shrink-0">3.</span>
                  <span>Client must provide Laravel codebase access, hosting credentials & domain access before work begins.</span>
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
              Zan Services respects client confidentiality. All business data, website credentials, Laravel codebase, content, and brand assets shared during the engagement will be kept strictly confidential. No client data will be shared with third parties without prior consent. All source code, WordPress admin access, theme files, domain & hosting credentials will remain with the client at all times.
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
                  outlined in this quotation for Laravel to WordPress Migration & Website Development Services.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Legal Media</p>
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

export default LegalMediaProposal;
