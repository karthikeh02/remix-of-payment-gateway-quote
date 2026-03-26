import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, CheckCircle2, Settings, BarChart3, Shield, CreditCard, AlertTriangle } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const LinenStoryProposal = () => {
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
        filename: `Zan_Services_Linen_and_Stories_Quotation_${formatDate(currentDate).replace(/\//g, "-")}.pdf`,
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

  const partAServices = [
    { service: "E-Commerce Website Design & Development", description: "Fully responsive, dynamic product catalogue website showcasing bags, bedsheets, linen products & more \u2014 with category pages, product detail pages with images & pricing, search & filter functionality." },
    { service: "Custom CRM / Admin Panel", description: "Admin dashboard where you can add, edit & manage products \u2014 upload product photos, set prices, update descriptions, manage categories & control what\u2019s visible on the website. No developer needed for day-to-day updates." },
    { service: "WhatsApp & Call Order Flow", description: "Each product page includes a \u2018Order via WhatsApp\u2019 and \u2018Call to Order\u2019 CTA button. Customers browse products with prices, then place orders directly via WhatsApp message or phone call \u2014 no online payment gateway required." },
    { service: "Mobile-Responsive Design", description: "Optimized for mobile, tablet & desktop. Fast-loading pages, clean product grid layout, image zoom, and smooth browsing experience tailored for linen & home products." },
    { service: "SEO-Ready Structure", description: "Clean URLs, meta tags, image alt tags, sitemap, and Google-indexable product pages to ensure your products appear in search results from day one." },
  ];

  const partBServices = [
    { service: "Social Media Management", description: "Content strategy, post creation (graphics, reels, stories, carousels), scheduling & publishing across Instagram & Facebook \u2014 showcasing products, new arrivals, offers & customer testimonials." },
    { service: "Meta Ads (Facebook & Instagram)", description: "Ad campaign setup & management \u2014 product showcase ads, collection ads, retargeting campaigns targeting home d\u00e9cor, linen & lifestyle audiences. Audience targeting, A/B testing & performance optimization." },
    { service: "Google Ads", description: "Search & Display ad campaigns targeting keywords like \u2018buy bedsheets online\u2019, \u2018linen bags\u2019, \u2018home linen products\u2019. Campaign monitoring, bid optimization & monthly reporting." },
  ];

  const additionalServices = [
    { service: "Payment Gateway Integration", description: "Razorpay/PhonePe/UPI integration for online payments, checkout flow & order management if you decide to enable online ordering in the future." },
    { service: "Shipping Integration", description: "Shiprocket/Delhivery integration for automated shipping, tracking & delivery management." },
    { service: "WhatsApp Business API", description: "Automated order confirmations, dispatch updates & customer communication via WhatsApp Business API." },
    { service: "Email Marketing", description: "Newsletter campaigns, new arrival alerts, festive offer broadcasts & abandoned enquiry follow-ups." },
    { service: "Influencer Collaboration", description: "Home d\u00e9cor & lifestyle influencer partnerships for product showcases, unboxing & reviews." },
  ];

  const investmentTableRows = [
    { service: "E-Commerce Website + Custom CRM (One-Time)", cost: "PAID & DELIVERED" },
    { service: "Social Media + Meta Ads + Google Ads (Monthly)", cost: "\u20b910,000/- + GST / month" },
    { service: "Ad Spend (Meta + Google)", cost: "Client-Borne | separate" },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment terms: 50% advance to begin work, remaining 50% upon project completion & go-live.",
    "Website scope includes a dynamic product catalogue with CRM/admin panel for self-managed product uploads. No payment gateway or shipping integration is included in this quotation.",
    "Order flow: Customers browse products with prices on the website and place orders via WhatsApp or phone call. This is the agreed workflow \u2014 no online checkout or cart system is included.",
    "Social media management & ad campaign management is a recurring monthly service. Minimum commitment: 3 months recommended.",
    "Digital marketing fee is billed 100% in advance before each month.",
    "Ad spend budgets for Meta Ads & Google Ads are NOT included in this quotation and will be borne by the client separately.",
    "Client must provide product images, pricing, descriptions & brand assets in a timely manner. Delays will extend the delivery timeline.",
    "Up to 2 rounds of design revisions are included for the website. Additional revisions will be charged separately.",
    "All creative content and ad copies will be shared for client approval before publishing.",
    "GST @ 18% is applicable on all charges and will be charged additionally.",
    "All source code, domain, hosting credentials, CRM access, ad accounts & social media accounts will remain with the client.",
    "Website hosting & domain charges are separate and borne by the client. Zan Services will assist in setup.",
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
              <p className="text-muted-foreground mt-1 text-sm">E-Commerce Website + Custom CRM + Digital Marketing — Linen & Home Products</p>
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
                    <p className="text-lg font-semibold text-foreground">Linen and Stories</p>
                    <p className="text-muted-foreground text-sm mt-1">Bags, Bedsheets & Linen Products</p>
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

          {/* How It Works */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">How It Works</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">You Upload</p>
                <p className="text-[10px] text-muted-foreground mt-1">Add products via CRM panel</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Customer Browses</p>
                <p className="text-[10px] text-muted-foreground mt-1">Views products & prices</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Orders via WhatsApp</p>
                <p className="text-[10px] text-muted-foreground mt-1">Or calls to place order</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Ads Drive Traffic</p>
                <p className="text-[10px] text-muted-foreground mt-1">Meta & Google Ads</p>
              </div>
            </div>
          </div>

          {/* Part A — E-Commerce Website + Custom CRM */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Part A — E-Commerce Website + Custom CRM</h2>
              <span className="bg-green-100 text-green-700 text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">PAID & DELIVERED</span>
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
                  {partAServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Part B — Social Media & Ads Management */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Part B — Social Media & Ads Management</h2>
              <span className="quote-badge whitespace-nowrap">{"\u20b9"}10,000/month + GST</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[30%]">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {partBServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Services */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Additional Services</h2>
              <span className="quote-badge whitespace-nowrap">Extra Charges Apply</span>
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
                  {additionalServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2 italic">
              * Pricing for additional services will be provided upon request based on scope and requirements.
            </p>
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
                  <p className="text-white/80 text-sm uppercase tracking-wider">MONTHLY RETAINER</p>
                  <p className="text-xs text-white/60 mt-1">Social Media & Ads Management — Recurring Monthly</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">{"\u20b9"}10,000/month <span className="text-sm font-normal text-white/70">Excluding GST (18%) & Ad Spend</span></p>
                  <p className="text-lg font-semibold mt-2 text-white/90">{"\u20b9"}11,800/month <span className="text-sm font-normal text-white/70">Including GST</span></p>
                </div>
              </div>
            </div>

            {/* Two stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-green-600 line-through">{"\u20b9"}40,000</p>
                <p className="text-xs font-semibold text-green-700 mt-1">Website + CRM — PAID & DELIVERED</p>
                <p className="text-[10px] text-green-600 mt-0.5">Completed</p>
              </div>
              <div className="bg-card border-2 border-primary/30 rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary">{"\u20b9"}10,000/mo</p>
                <p className="text-xs font-semibold text-foreground mt-1">Social Media + Ads (Monthly) + GST</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">100% Advance • Excl. Ad Spend</p>
              </div>
            </div>

            {/* Amber warning box */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
              <h3 className="text-sm font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Ad Spend — Client-Borne (NOT Included)
              </h3>
              <p className="text-xs text-amber-700 leading-relaxed">
                Meta Ads (Facebook & Instagram) and Google Ads spend is paid directly to the respective platforms and is NOT included in the service fee. Zan Services will manage and optimize campaigns on your ad accounts. Recommended budget will be discussed based on your product range and target audience.
              </p>
            </div>

            {/* Investment Summary table */}
            <div className="overflow-hidden rounded-lg border border-quote-border mt-5">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[35%]">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {investmentTableRows.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-foreground align-top">{item.cost}</td>
                    </tr>
                  ))}
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
                  <span>Digital marketing fee of {"\u20b9"}10,000/month is billed 100% in advance before each month.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground shrink-0">2.</span>
                  <span>Website development: 50% advance to begin, 50% on completion & go-live.</span>
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
              Zan Services respects client confidentiality. All business data, product details, pricing information, CRM credentials, ad account access, and brand assets shared during the engagement will be kept strictly confidential. No client data will be shared with third parties without prior consent. All source code, hosting credentials, CRM access, and ad accounts remain with the client at all times.
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
                  outlined in this quotation for E-Commerce Website, Custom CRM, and Digital Marketing Services.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Linen and Stories</p>
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

export default LinenStoryProposal;
