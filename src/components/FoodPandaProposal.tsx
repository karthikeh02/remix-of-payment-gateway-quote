import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Loader2, Layout, Rocket, CreditCard, ArrowRight, Clock, Palette, Search, Smartphone, Shield, Utensils, MapPin, Star, Sparkles, Info, Download } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const FoodPandaProposal = () => {
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
        filename: `Zan_Services_FoodPanda_Website_${formatDate(currentDate).replace(/\//g, "-")}.pdf`,
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
    { page: "Home / Landing Page", icon: <Layout className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Hero section with brand identity, key highlights, featured menu items, order CTA, and trust badges." },
    { page: "Menu / Food Listing", icon: <Utensils className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Categorized food listings with item names, descriptions, prices, and images. Clean, appetising layout." },
    { page: "About Us", icon: <Star className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Brand story, mission, values, team highlights, and why customers choose Food Panda." },
    { page: "Contact Us", icon: <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Contact form, phone, email, address, embedded Google Map, and delivery area info." },
    { page: "Privacy Policy", icon: <Shield className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Full privacy policy covering data collection, storage, usage, cookies, and user rights." },
    { page: "Terms & Conditions", icon: <FileText className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Terms of use, ordering policy, refund & cancellation policy, liability disclaimers." },
  ];

  const modules = [
    { module: "UI/UX Design", icon: <Palette className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Custom design — wireframes, visual mockups, brand-consistent layouts for all pages. Mobile-first approach.", cost: "₹6,000" },
    { module: "Frontend Development", icon: <Layout className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Pixel-perfect static build. Fast, responsive across all devices — desktop, tablet, and mobile.", cost: "₹9,000" },
    { module: "Menu / Food Listing Page", icon: <Utensils className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Categorized menu layout with food images, names, descriptions, and prices.", cost: "₹3,500" },
    { module: "Privacy Policy & T&C", icon: <Shield className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Professionally written and formatted Privacy Policy and Terms & Conditions pages.", cost: "₹2,000" },
    { module: "Contact Form", icon: <Mail className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Functional contact/enquiry form with email notifications and spam protection.", cost: "₹1,500" },
    { module: "SEO & Performance", icon: <Search className="w-3.5 h-3.5 text-primary shrink-0" />, description: "On-page SEO, meta tags, Open Graph, sitemap, Google Analytics setup, and page speed optimization.", cost: "₹1,500" },
    { module: "Deployment & Domain Setup", icon: <Rocket className="w-3.5 h-3.5 text-primary shrink-0" />, description: "Cloud deployment (Vercel/Netlify), SSL certificate, domain configuration, and go-live.", cost: "₹1,500" },
  ];

  const baseCost = 25000;
  const animationAddon = 10000;
  const gstRate = 0.18;

  const baseCostWithGst = Math.round(baseCost * (1 + gstRate));
  const withAnimationCost = baseCost + animationAddon;
  const withAnimationCostWithGst = Math.round(withAnimationCost * (1 + gstRate));

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment: 50% advance on kickoff, 50% on final delivery & go-live. All payments are exclusive of GST (18%).",
    "Estimated delivery timeline: 7 days from project kickoff.",
    "The client will receive a preview/staging link before go-live for review and approval.",
    "Up to 2 rounds of design revisions are included. Additional revisions will be charged at ₹2,000 per round.",
    "Client must provide brand logo, colour palette, food images/photos, menu content, and all text for pages.",
    "Post-launch support: 15 days of free bug-fix support included after go-live.",
    "Source code and all assets will be transferred to the client upon receipt of full payment.",
    "Hosting costs post-launch (Vercel/Netlify free tier or ~₹500/mo for premium) are borne by the client.",
    "The 3D animation add-on (₹10,000 + GST) covers scroll-triggered animations, interactive 3D elements, and motion design on the home page. This is an optional upgrade.",
    "Any additional pages or features beyond the quoted scope will be charged separately.",
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
              <p className="text-muted-foreground mt-1 text-sm">Static Website — Food Brand with Menu & Legal Pages</p>
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
                    <p className="text-lg font-semibold text-foreground">Food Panda</p>
                    <p className="text-muted-foreground text-sm mt-1">Food Delivery Brand</p>
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
              <Utensils className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Project Overview</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A clean, fast-loading, and visually compelling <strong>static website for Food Panda</strong> that showcases the brand,
                highlights the menu, and builds trust with customers. Includes all legally required pages — Privacy Policy & Terms & Conditions.
                Fully responsive across all devices.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Layout className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">5–6 Pages</p>
                  <p className="text-[10px] text-muted-foreground">Fully designed & responsive</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Smartphone className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Mobile First</p>
                  <p className="text-[10px] text-muted-foreground">Optimised for all screens</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Shield className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Legal Pages</p>
                  <p className="text-[10px] text-muted-foreground">Privacy Policy + T&C included</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Clock className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">7 Days</p>
                  <p className="text-[10px] text-muted-foreground">Delivery from kickoff</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Layout className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Website Pages</h2>
              <span className="quote-badge whitespace-nowrap">5–6 Pages</span>
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
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.page}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Scope of Work</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {modules.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.module}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Options */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Pricing Options</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option A — Standard */}
              <div className="border-2 border-primary/30 rounded-xl p-5 bg-primary/5 relative">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-foreground uppercase tracking-wide">Option A — Standard Static</p>
                </div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Clean, professional static website with all pages, menu listing, contact form, Privacy Policy, and T&amp;C. No 3D animations.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> 5–6 fully designed pages</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> Mobile responsive</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> SEO optimised + Google Analytics</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> Privacy Policy + T&amp;C pages</li>
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-primary shrink-0" /> Deployment &amp; go-live included</li>
                </ul>
                <div className="border-t border-primary/20 pt-3">
                  <p className="text-2xl font-bold text-primary">₹25,000<span className="text-sm font-normal text-muted-foreground"> + GST</span></p>
                  <p className="text-xs text-muted-foreground mt-0.5">₹{baseCostWithGst.toLocaleString("en-IN")}/- Incl. GST (18%)</p>
                </div>
              </div>

              {/* Option B — With 3D Animation */}
              <div className="border-2 border-amber-400/60 rounded-xl p-5 bg-amber-50 relative">
                <div className="absolute -top-3 right-4">
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Premium Add-on</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-foreground uppercase tracking-wide">Option B — With 3D Animation</p>
                </div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Everything in Option A plus scroll-triggered 3D animations, interactive motion design, and immersive visual elements on the Home page.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                  <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-600 shrink-0" /> All features from Option A</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-500 shrink-0" /> Scroll-triggered 3D animations</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-500 shrink-0" /> Interactive motion design elements</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-500 shrink-0" /> Immersive hero section experience</li>
                  <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-500 shrink-0" /> Three.js / WebGL powered visuals</li>
                </ul>
                <div className="border-t border-amber-300 pt-3">
                  <p className="text-sm text-muted-foreground">Base: ₹25,000 + 3D Add-on: ₹10,000</p>
                  <p className="text-2xl font-bold text-amber-700">₹35,000<span className="text-sm font-normal text-muted-foreground"> + GST</span></p>
                  <p className="text-xs text-muted-foreground mt-0.5">₹{withAnimationCostWithGst.toLocaleString("en-IN")}/- Incl. GST (18%)</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
              <p className="text-xs text-blue-700 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>The <strong>3D Animation add-on</strong> can be selected at any time — even after the static site goes live. The upgrade cost remains ₹10,000 + GST.</span>
              </p>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Payment Terms</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">50%</p>
                <p className="text-xs text-muted-foreground mt-1">Advance on Project Kickoff</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">50%</p>
                <p className="text-xs text-muted-foreground mt-1">On Final Delivery & Go-Live</p>
              </div>
            </div>
          </div>

          {/* T&C */}
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

          {/* Signature */}
          <div className="quote-section">
            <div className="flex justify-between items-end mt-4">
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

export default FoodPandaProposal;
