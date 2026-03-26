import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Loader2, Layout, CreditCard, ArrowRight, Clock, CheckCircle2, Shield, Sparkles, Info, Download } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const InFlowProposal = () => {
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
        filename: `Zan_Services_InFlow_Automation_Quotation_${formatDate(currentDate).replace(/\//g, "-")}.pdf`,
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

  const pages = [
    { page: "Home", description: "Hero section, service highlights, key value propositions, client testimonials, and call-to-action sections." },
    { page: "About Us", description: "Company story, mission & vision, team overview, and brand identity showcase." },
    { page: "Services / Solutions", description: "Detailed breakdown of automation services offered with feature highlights and benefits." },
    { page: "Training Academy", description: "Course listings, training programs, certification details, and enrollment information." },
    { page: "Portfolio / Case Studies", description: "Showcase of completed projects, success stories, and client results." },
    { page: "Contact Us", description: "Contact form, office location with map integration, phone, email, and social media links." },
    { page: "Blog / Resources", description: "Blog listing page for articles, guides, and industry insights for organic growth." },
    { page: "Privacy Policy", description: "Comprehensive privacy policy page covering data collection, usage, and user rights." },
    { page: "Terms & Conditions", description: "Legal terms of service, disclaimers, and usage policies." },
  ];

  const scopeOfWork = [
    { service: "UI/UX Redesign", description: "Complete visual overhaul — modern layouts, intuitive navigation, and user-centric design aligned with brand colors and identity." },
    { service: "Brand Integration", description: "Consistent brand color palette, typography, logo placement, and visual language across all pages." },
    { service: "Responsive Development", description: "Fully responsive design optimized for desktop, tablet, and mobile devices with mobile-first approach." },
    { service: "SEO Foundations", description: "Clean semantic HTML, meta tags, Open Graph tags, sitemap, and basic on-page SEO setup." },
    { service: "Performance Optimization", description: "Optimized images, lazy loading, code splitting, and fast load times for better user experience." },
    { service: "Cross-Browser Compatibility", description: "Tested and optimized across Chrome, Firefox, Safari, and Edge browsers." },
    { service: "Contact Form Integration", description: "Functional contact form with email notifications and basic form validation." },
    { service: "Social Media Integration", description: "Social media links and sharing capabilities integrated across the website." },
  ];

  const framerMotionFeatures = [
    { feature: "Smooth Page Transitions", description: "Fluid page-to-page transitions with entrance and exit animations for seamless navigation." },
    { feature: "Scroll-Triggered Animations", description: "Elements animate into view as the user scrolls — fade-ins, slide-ups, and staggered reveals." },
    { feature: "Micro-Interactions", description: "Hover effects, button animations, card lifts, and interactive feedback for enhanced user engagement." },
    { feature: "Hero Section Animations", description: "Dynamic hero banners with parallax effects, text reveals, and animated CTAs." },
    { feature: "Loading Animations", description: "Smooth skeleton loaders and page transition indicators for polished user experience." },
    { feature: "SVG & Icon Animations", description: "Animated icons, progress indicators, and decorative SVG motion graphics." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment terms: 50% advance to commence work, 30% on mid-project milestone, 20% before final deployment and handover.",
    "Client must provide all content (text, images, logos, brand guidelines) in a timely manner. Delays in content delivery will extend the timeline.",
    "Up to 2 rounds of design revisions are included. Additional revision rounds will be charged at ₹2,000 per round.",
    "Domain, hosting, and SSL charges are NOT included and will be managed by the client or billed separately.",
    "The website will be built with modern web technologies ensuring fast load times, SEO readiness, and cross-browser compatibility.",
    "Post-delivery support: 15 days of free bug-fix support after final deployment.",
    "Source code and all assets will be handed over to the client upon full payment.",
    "Any additional pages, features, or integrations beyond the agreed scope will be quoted and charged separately.",
    "GST @ 18% is applicable on the quoted amount and will be charged additionally.",
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
              <p className="text-muted-foreground mt-1 text-sm">Website Revamp — UI/UX Redesign • Brand Integration • Modern Web Development</p>
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
                    <p className="text-lg font-semibold text-foreground">InFlow Automation & Training Academy</p>
                    <p className="text-muted-foreground text-sm mt-1">Business Website Revamp</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Service Provider</h3>
                    <p className="text-lg font-semibold text-foreground">Zan Services</p>
                    <p className="text-muted-foreground text-xs mt-0.5 italic">Web Development Division</p>
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

          {/* Section 1: Project Overview */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Layout className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Project Overview</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete redesign and revamp of the <strong>InFlow Automation & Training Academy</strong> website. The project involves a modern UI/UX overhaul aligned with your brand identity, improved user experience, and a professional digital presence that reflects your expertise in automation and training services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">7-9 Pages</p>
                <p className="text-[10px] text-muted-foreground">Complete Website</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Brand Aligned</p>
                <p className="text-[10px] text-muted-foreground">Custom UI/UX Design</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Responsive</p>
                <p className="text-[10px] text-muted-foreground">Mobile-First Approach</p>
              </div>
            </div>
          </div>

          {/* Section 2: Pages & Structure */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Pages & Structure</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Page</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.page}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Scope of Work */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Scope of Work</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {scopeOfWork.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Framer Motion & Animations */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Framer Motion & Animations</h2>
              <span className="quote-badge whitespace-nowrap">Premium</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Feature</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {framerMotionFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.feature}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
              <p className="text-xs text-green-700 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>The <strong>Framer Motion package</strong> transforms your website from a static experience into a dynamic, fluid interface that captivates visitors and elevates your brand perception.</span>
              </p>
            </div>
          </div>

          {/* Section 5: Investment Summary */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Investment Summary</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option A — Standard Package */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-foreground uppercase tracking-wide">Standard Package</p>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wide">Option A</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Professional website with clean modern design
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> 7-9 Pages</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> UI/UX Redesign</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> Brand Color Integration</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> Responsive Design</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> SEO Foundations</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> Contact Form</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> Social Media Links</li>
                </ul>
                <div className="border-t border-slate-200 pt-3">
                  <p className="text-2xl font-bold text-primary">₹30,000<span className="text-sm font-normal text-muted-foreground"> + GST</span></p>
                  <p className="text-xs text-muted-foreground mt-0.5">₹35,400/- Incl. GST (18%)</p>
                </div>
              </div>

              {/* Option B — Premium Package */}
              <div className="quote-total-box rounded-lg p-6 relative">
                <div className="absolute -top-3 right-4">
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Recommended</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-white uppercase tracking-wide">Premium Package</p>
                </div>
                <p className="text-xs text-white/70 mb-4 leading-relaxed">
                  Everything in Standard + Framer Motion animations
                </p>
                <ul className="text-xs text-white/80 space-y-1 mb-4">
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-white/60 shrink-0" /> Everything in Standard Package</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-300 shrink-0" /> Framer Motion Animations</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-300 shrink-0" /> Smooth Page Transitions</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-300 shrink-0" /> Scroll-Triggered Effects</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-300 shrink-0" /> Micro-Interactions & Hover Effects</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-300 shrink-0" /> Hero Section Animations</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-300 shrink-0" /> SVG & Icon Motion Graphics</li>
                </ul>
                <div className="border-t border-white/20 pt-3">
                  <p className="text-2xl font-bold text-white">₹45,000<span className="text-sm font-normal text-white/70"> + GST</span></p>
                  <p className="text-xs text-white/60 mt-0.5">₹53,100/- Incl. GST (18%)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Delivery Timeline */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Delivery Timeline</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">Day 1–4</p>
                <p className="text-xs text-muted-foreground mt-1">UI/UX Design & Brand Study</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">Day 5–9</p>
                <p className="text-xs text-muted-foreground mt-1">Development, Animations & Page Build</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">Day 10–12</p>
                <p className="text-xs text-muted-foreground mt-1">Testing, Refinements & Deployment</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
              <p className="text-xs text-blue-700 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>Estimated delivery: <strong>10-12 days</strong> from project kickoff and content/assets handover.</span>
              </p>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="quote-section">
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
                  outlined in this quotation for Website Revamp Services.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">InFlow Automation & Training Academy</p>
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

      {/* Download Buttons - Hidden on print */}
      <div className="max-w-4xl mx-auto mt-6 flex justify-center gap-4 no-print">
        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-70"
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
          className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors shadow-lg border border-quote-border"
        >
          <FileText className="w-4 h-4" />
          Print
        </button>
      </div>
    </div>
  );
};

export default InFlowProposal;
