import { FileText, Mail, Phone, Globe, TrendingUp, Shield, BarChart3 } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";

const QuotationDocument = () => {
  const currentDate = new Date();
  const validUntilDate = new Date(currentDate);
  validUntilDate.setDate(validUntilDate.getDate() + 2);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const websitePages = [
    { page: "Home Page", description: "Hero section with business overview, all services detailed (open well digging, ground leveling, earthmoving, JCB/machinery services), project gallery, trust signals, contact form with Google Maps (Salem location), WhatsApp chat button, and strong call-to-action for enquiries." },
    { page: "About Us", description: "Company story, years of experience, mission & vision, team overview, machinery/equipment showcase, and completed project highlights across Tamil Nadu." },
  ];

  const digitalMarketingServices = [
    { service: "Google Ads Campaign Setup", description: "Complete Google Ads account setup, campaign structure, ad group creation, keyword research targeting open well, borewell, earthmoving, ground leveling services across Pan Tamil Nadu." },
    { service: "Keyword Research & Targeting", description: "In-depth keyword research for high-intent searches like 'open well contractors near me', 'ground leveling services Tamil Nadu', 'JCB rental Salem' etc." },
    { service: "Geo-Targeting (Pan Tamil Nadu)", description: "Location-based targeting across all districts of Tamil Nadu — Salem, Chennai, Coimbatore, Madurai, Trichy, and surrounding areas." },
    { service: "Campaign Monitoring & Optimization", description: "Daily bid adjustments, negative keyword updates, quality score improvement, CTR optimization, and conversion tracking." },
    { service: "Monthly Performance Reports", description: "Detailed monthly reports with metrics — impressions, clicks, CTR, cost per lead, conversions, and ROI analysis." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 2 (two) days from the date of issue.",
    "Payment terms: 100% advance payment before commencement of work.",
    "Website delivery timeline: 7-10 working days from content & branding assets received.",
    "Digital marketing services are billed monthly (₹10,000/month including GST) — payable in advance each month.",
    "Google Ads spend of ₹500-600/day (₹15,000-₹18,000/month) is to be paid directly by the client to Google via the Ads account.",
    "Client must provide all branding assets (logo, photos of machinery, project images) in a timely manner.",
    "Up to 2 rounds of website design revisions are included. Additional revisions will be charged separately.",
    "Domain registration and hosting charges are NOT included and will be billed separately or managed by the client.",
    "Website will be fully responsive, mobile-optimized, fast-loading, and SEO-friendly.",
    "Google Ads results depend on market competition, budget, and seasonal demand. No guaranteed leads are promised.",
    "Either party may terminate the digital marketing retainer with 15 days written notice.",
    "All prices mentioned are inclusive of GST (18%).",
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 print:py-0 print:px-0">
      <div className="quote-page rounded-lg overflow-hidden relative">
        {/* Background Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <img src={zanLogo} alt="" className="w-[600px] opacity-[0.04] select-none" />
        </div>

        {/* Header */}
        <div className="quote-header-light relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <img src={zanLogo} alt="Zan Services" className="h-14 mb-3" />
              <h1 className="text-3xl font-bold tracking-tight font-display text-quote-header-bg">Quotation</h1>
              <p className="text-muted-foreground mt-1 text-sm">Website Development & Google Ads Management — Open Well & Earthmoving Services</p>
              <div className="quote-accent-bar mt-4"></div>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-sm mt-1">Date: {formatDate(currentDate)}</p>
              <p className="text-muted-foreground text-sm">Valid Until: {formatDate(validUntilDate)}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-10 py-8 relative z-10">
          {/* Client & Provider Info */}
          <div className="flex justify-between items-start mb-8 gap-8">
            <div className="flex-1">
              <div className="quote-highlight-box p-5 rounded-lg">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Prepared For</h3>
                    <p className="text-lg font-semibold text-foreground">Siva Kumar</p>
                    <p className="text-muted-foreground text-sm mt-1">Open Well & Earthmoving Contractor</p>
                    <p className="text-muted-foreground text-sm">Salem, Tamil Nadu</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Service Provider</h3>
                    <p className="text-lg font-semibold text-foreground">Zan Services</p>
                    <div className="text-sm text-muted-foreground mt-1 space-y-1">
                      <p className="flex items-center gap-2"><Globe className="w-3.5 h-3.5" />zanservices.com</p>
                      <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" />+91 82408 25490</p>
                      <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" />operations@zanservices.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Website Pages */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Website Development — 2 Pages</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-1/3">Page</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {websitePages.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.page}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Digital Marketing Services */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Google Ads Management — Pan Tamil Nadu</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-1/3">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {digitalMarketingServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="my-8 space-y-4">
            {/* Website Cost */}
            <div className="quote-total-box p-5 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Website Development (2 Pages)</p>
                  <p className="text-xs text-white/60 mt-1">Responsive • SEO-Friendly • Mobile Optimized</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹10,000/-</p>
                  <p className="text-white/70 text-sm mt-1">One Time • Including GST</p>
                </div>
              </div>
            </div>

            {/* Digital Marketing Cost */}
            <div className="quote-total-box p-5 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Google Ads Management Fee</p>
                  <p className="text-xs text-white/60 mt-1">Campaign Setup • Optimization • Monthly Reports</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹10,000/month</p>
                  <p className="text-white/70 text-sm mt-1">Monthly Retainer • Including GST</p>
                </div>
              </div>
            </div>

            {/* Google Ad Spend */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-2">Google Ads Spend — Paid Directly to Google by Client</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    Daily ad budget: <strong>₹500–₹600/day</strong> → Monthly ad spend: <strong>₹15,000–₹18,000/month</strong>.
                    This amount is paid directly to Google through the Google Ads account and is separate from our management fee.
                    Ad spend gives you visibility across all of Tamil Nadu for searches related to open well digging, ground leveling, earthmoving, and heavy machinery services.
                  </p>
                </div>
              </div>
            </div>

            {/* Total Summary */}
            <div className="bg-secondary/60 border border-quote-border rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Monthly Cost Summary</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Website Development (One-Time)</span>
                  <span className="font-semibold text-foreground">₹10,000/-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Google Ads Management (Monthly)</span>
                  <span className="font-semibold text-foreground">₹10,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Google Ad Spend (Monthly, paid to Google)</span>
                  <span className="font-semibold text-foreground">₹15,000–₹18,000/month</span>
                </div>
                <div className="border-t border-quote-border pt-2 mt-2 flex justify-between">
                  <span className="font-semibold text-foreground">First Month Total (Approx.)</span>
                  <span className="font-bold text-foreground text-base">₹35,000–₹38,000/-</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-muted-foreground">Recurring Monthly (from 2nd month)</span>
                  <span className="font-bold text-muted-foreground">₹25,000–₹28,000/month</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">* All prices are inclusive of GST (18%).</p>
            </div>

            {/* Domain & Hosting Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-2">Domain & Hosting (Billed Separately)</p>
                  <p className="text-xs text-blue-600">Domain registration and web hosting charges are not included in this quotation. These will be billed separately based on the hosting provider selected.</p>
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

          {/* Privacy Policy */}
          <div className="mt-6 p-5 bg-secondary/50 rounded-lg">
            <h3 className="text-sm font-semibold text-foreground mb-2">Privacy & Confidentiality</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Zan Services respects client confidentiality. All data, credentials, business information, 
              and technical details shared during the project will be kept strictly confidential and used only for 
              project execution. No client data will be shared with third parties without prior consent, except 
              where required by law or platform policies. Website source files and access credentials will be 
              handed over to the client upon full payment.
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
                    <tr>
                      <td className="text-muted-foreground py-1 pr-4">Bank Name:</td>
                      <td className="font-medium text-foreground">Kotak Mahindra Bank</td>
                    </tr>
                    <tr>
                      <td className="text-muted-foreground py-1 pr-4">Account Number:</td>
                      <td className="font-medium text-foreground">0050897766</td>
                    </tr>
                    <tr>
                      <td className="text-muted-foreground py-1 pr-4">IFSC Code:</td>
                      <td className="font-medium text-foreground">KKBK0006573</td>
                    </tr>
                    <tr>
                      <td className="text-muted-foreground py-1 pr-4">GST:</td>
                      <td className="font-medium text-foreground">19AAEFZ0696D1ZW</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="text-right">
                <div className="h-20 mb-2"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Authorised Signatory</p>
                <p className="text-sm text-muted-foreground">Zan Services</p>
                <p className="text-xs text-muted-foreground mt-1">Date: {formatDate(currentDate)}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-quote-border flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://zanservices.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />zanservices.com
            </a>
            <a href="tel:+918240825490" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />+91 82408 25490
            </a>
            <a href="mailto:operations@zanservices.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />operations@zanservices.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6 flex justify-center no-print">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg"
        >
          <FileText className="w-4 h-4" />
          Download / Print PDF
        </button>
      </div>
    </div>
  );
};

export default QuotationDocument;
