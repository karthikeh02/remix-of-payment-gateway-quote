import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, CheckCircle2, Users, Calendar, Video, BookOpen, Layout, Rocket, CreditCard, Brain, ArrowRight, ExternalLink, Clock, Palette, Search, Smartphone, Shield } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const ChandraniWebsiteProposal = () => {
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
        filename: `Zan_Services_Chandrani_Mukherjee_Website_${formatDate(currentDate).replace(/\//g, '-')}.pdf`,
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

  const pages = [
    { page: "Home / Landing Page", description: "Professional hero section with headline, introduction, credentials, trust indicators, testimonials carousel, and clear CTA to book a session." },
    { page: "About", description: "Detailed biography, qualifications, certifications, treatment approach, and a personal message to build trust with potential patients." },
    { page: "Services", description: "List of services offered — individual therapy, couples counseling, group sessions, etc. Each service with description, duration, and pricing." },
    { page: "Book a Session", description: "Embedded Calendly widget where patients select service type, pick an available slot, and confirm booking. Auto-generates Google Meet / Zoom link." },
{ page: "Blog", description: "Simple blog with articles on mental health, wellness tips, and professional insights. SEO-optimized for organic growth." },
    { page: "Contact", description: "Contact form, email, phone, clinic address (if any), embedded Google Map, and social media links." },
  ];

  const modules = [
    { module: "UI/UX Design", description: "Custom design — wireframes, visual mockups, mobile-responsive layouts for all 6 pages.", cost: "₹15,000" },
    { module: "Frontend Development", description: "Pixel-perfect build using Next.js/React. Fast loading, SEO-optimized, fully responsive across all devices.", cost: "₹25,000" },
    { module: "Calendly Integration", description: "Embedded Calendly booking widget on the Book a Session page. Service-based slot selection with automatic Google Meet / Zoom link generation upon booking.", cost: "₹5,000" },
    { module: "Blog Setup", description: "Markdown/CMS-based blog with categories, tags, SEO meta tags, and social sharing buttons.", cost: "₹8,000" },
    { module: "Contact Form & Email", description: "Functional contact form with email notifications. Spam protection included.", cost: "₹3,000" },
    { module: "SEO & Performance", description: "On-page SEO setup, meta tags, Open Graph tags, sitemap, robots.txt, Google Analytics, page speed optimization.", cost: "₹5,000" },
    { module: "Deployment & Domain Setup", description: "Cloud deployment (Vercel/Netlify), SSL certificate, domain configuration, go-live.", cost: "₹4,000" },
  ];

  const flowSteps = [
    { step: "1", title: "Patient visits website", desc: "Discovers services, reads about Mrs. Mukherjee, builds trust." },
    { step: "2", title: "Clicks 'Book a Session'", desc: "Lands on the booking page with embedded Calendly." },
    { step: "3", title: "Selects service & time slot", desc: "Picks session type (e.g., Individual Therapy — 60 min) and available slot from Calendly." },
    { step: "4", title: "Confirms booking", desc: "Enters name, email, phone. Calendly auto-confirms the appointment." },
    { step: "5", title: "Receives confirmation email", desc: "Both patient and Mrs. Mukherjee get an email with session details + Google Meet / Zoom link." },
    { step: "6", title: "Joins session at scheduled time", desc: "Patient clicks the meeting link. Session happens on Google Meet or Zoom — no extra setup needed." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment: 50% advance on kickoff, 50% on final delivery & go-live. All payments are exclusive of GST (18%).",
    "Estimated delivery timeline: 2–3 weeks from project kickoff.",
    "The client will receive a preview/staging link before go-live for review and feedback.",
    "Up to 2 rounds of design revisions are included. Additional revisions will be charged at ₹3,000 per round.",
    "Calendly account (Free or Pro) must be set up by the client. Zan Services will handle the integration and configuration.",
    "Google Meet or Zoom account must be connected to Calendly by the client. Zan Services will assist with the setup.",
    "Blog content (articles) must be provided by the client. Zan Services will handle formatting and publishing.",
    "Client must provide brand guidelines, logo, professional photos, service descriptions, and any content for pages.",
    "Post-launch support: 15 days of free bug-fix support after go-live.",
    "Source code and all assets will be transferred to the client upon full payment.",
    "Hosting cost (Vercel/Netlify free tier or ~₹500/mo for premium) is borne by the client post-launch.",
    "This is a static/semi-static website. For a full-stack web application with patient management, video conferencing, AI transcription, and CMS — please refer to our separate Web Application Quotation.",
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
              <p className="text-muted-foreground mt-1 text-sm">Professional Website — Psychology Practice with Online Booking</p>
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

          {/* Project Overview */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Brain className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Project Overview</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A clean, professional, and fast-loading website for <strong>Mrs. Chandrani Mukherjee</strong> to establish her online presence,
                showcase her services, and allow patients to <strong>book sessions directly via Calendly</strong> with automatic
                <strong> Google Meet / Zoom</strong> video conferencing links. Includes a blog for organic growth and SEO.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Layout className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">6 Pages</p>
                  <p className="text-[10px] text-muted-foreground">Fully designed & responsive</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Calendar className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Calendly</p>
                  <p className="text-[10px] text-muted-foreground">Embedded booking system</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Video className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Meet / Zoom</p>
                  <p className="text-[10px] text-muted-foreground">Auto-generated links</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <BookOpen className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Blog + SEO</p>
                  <p className="text-[10px] text-muted-foreground">Organic growth ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Flow */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <ArrowRight className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">How It Works — Patient Booking Flow</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {flowSteps.map((item, index) => (
                <div key={index} className="quote-sla-card p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">{item.step}</span>
                    <p className="text-xs font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
              <p className="text-xs text-blue-700 flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <span><strong>No manual work needed.</strong> Once Calendly is set up with Google Meet/Zoom, everything from booking to video link generation is fully automatic.</span>
              </p>
            </div>
          </div>

          {/* Pages */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Layout className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Website Pages</h2>
              <span className="quote-badge whitespace-nowrap">6 Pages</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[22%]">Page</th>
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

          {/* Module Breakdown */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Cost Breakdown</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold w-[12%]">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {modules.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                        <div className="flex items-center gap-2">
                          {index === 0 && <Palette className="w-3.5 h-3.5 text-primary shrink-0" />}
                          {index === 1 && <Layout className="w-3.5 h-3.5 text-primary shrink-0" />}
                          {index === 2 && <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />}
                          {index === 3 && <BookOpen className="w-3.5 h-3.5 text-primary shrink-0" />}
                          {index === 4 && <Mail className="w-3.5 h-3.5 text-primary shrink-0" />}
                          {index === 5 && <Search className="w-3.5 h-3.5 text-primary shrink-0" />}
                          {index === 6 && <Rocket className="w-3.5 h-3.5 text-primary shrink-0" />}
                          <span>{item.module}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-foreground text-right align-top">{item.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-primary/5 border-t-2 border-primary/20">
                    <td colSpan={2} className="py-3 px-4 text-sm font-bold text-foreground">Total (Excluding GST)</td>
                    <td className="py-3 px-4 text-sm font-bold text-primary text-right">₹65,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Total Cost Box */}
          <div className="my-8">
            <div className="quote-total-box p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Total Project Cost</p>
                  <p className="text-xs text-white/60 mt-1">7-page website + Calendly booking + Google Meet/Zoom + Blog + SEO</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹65,000/-</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-2 text-white/90">₹76,700/- <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>

            {/* Payment & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <CreditCard className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">50 / 50</p>
                <p className="text-xs text-muted-foreground mt-1">Payment Split</p>
                <p className="text-[10px] text-muted-foreground">₹32.5K advance + ₹32.5K on delivery</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">2–3 Weeks</p>
                <p className="text-xs text-muted-foreground mt-1">Delivery Timeline</p>
                <p className="text-[10px] text-muted-foreground">From kickoff to go-live</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">15 Days</p>
                <p className="text-xs text-muted-foreground mt-1">Free Bug-Fix Support</p>
                <p className="text-[10px] text-muted-foreground">After go-live</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-5 mt-5">
              <h3 className="text-sm font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Everything Included
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: <Palette className="w-4 h-4" />, label: "Custom Design" },
                  { icon: <Smartphone className="w-4 h-4" />, label: "Mobile Responsive" },
                  { icon: <Calendar className="w-4 h-4" />, label: "Calendly Booking" },
                  { icon: <Video className="w-4 h-4" />, label: "Meet/Zoom Links" },
                  { icon: <BookOpen className="w-4 h-4" />, label: "Blog" },
                  { icon: <Search className="w-4 h-4" />, label: "SEO Setup" },
                  { icon: <Shield className="w-4 h-4" />, label: "SSL Certificate" },
                  { icon: <Users className="w-4 h-4" />, label: "Contact Form" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-green-700">
                    {item.icon}
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade Path */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-5">
              <h3 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Future Upgrade Path
              </h3>
              <p className="text-xs text-blue-700 leading-relaxed">
                This website is a perfect starting point. As the practice grows, it can be upgraded to a <strong>full-stack web application</strong> with
                patient profile management, role-based access, integrated video conferencing with payments, AI-powered session transcription,
                automated notifications, and a CMS for courses. A separate quotation for the full platform is available upon request.
              </p>
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
              Zan Services respects client confidentiality. All business data, content, and strategic plans shared during
              the engagement will be kept strictly confidential. Source code and all assets transferred to the client upon full payment.
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
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  By signing below, the client acknowledges and accepts the terms, pricing, scope, and deliverables
                  outlined in this quotation for the Professional Website with Online Booking for Mrs. Chandrani Mukherjee.
                </p>
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

export default ChandraniWebsiteProposal;
