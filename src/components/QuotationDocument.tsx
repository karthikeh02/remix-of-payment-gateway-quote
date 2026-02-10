import { FileText, Mail, Phone, Globe, TrendingUp, Shield } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";

const QuotationDocument = () => {
  const currentDate = new Date();
  const validUntilDate = new Date(currentDate);
  validUntilDate.setDate(validUntilDate.getDate() + 4);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const services = [
    {
      service: "Home Page",
      description: "Hero section with stunning aquarium visuals, business introduction, key services overview, and call-to-action sections.",
    },
    {
      service: "About Us",
      description: "Brand story, mission & vision, team introduction, and business journey showcasing expertise in aquarium services.",
    },
    {
      service: "Services / Products",
      description: "Detailed showcase of aquarium services & products offered — fish varieties, tanks, accessories, maintenance services, and custom aquarium setups.",
    },
    {
      service: "Gallery",
      description: "Visual portfolio of aquarium setups, fish collections, and completed projects with high-quality image grid/lightbox layout.",
    },
    {
      service: "Contact Us",
      description: "Contact form, Google Maps integration, business address, phone number, email, working hours, and social media links.",
    },
  ];

  const extraFeatures = [
    { feature: "Additional Pages", description: "Extra pages beyond the 5 included (e.g., Blog, FAQ, Testimonials, Pricing)" },
    { feature: "E-commerce Integration", description: "Online store with product catalog, cart, payment gateway, and order management" },
    { feature: "SEO Optimization", description: "On-page SEO setup, meta tags, schema markup, and Google Search Console integration" },
    { feature: "Social Media Integration", description: "Social media feeds, sharing buttons, and profile linking across platforms" },
    { feature: "WhatsApp Chat Widget", description: "Floating WhatsApp button for instant customer communication" },
    { feature: "Content Writing", description: "Professional website copy and content creation for all pages" },
    { feature: "Logo & Branding", description: "Logo design, brand color palette, typography, and brand identity kit" },
    { feature: "Website Maintenance", description: "Monthly updates, security patches, backups, and performance optimization" },
  ];

  const termsAndConditions = [
    "This quotation is valid for 4 (four) days from the date of issue.",
    "This is a one-time website development project. Timeline: 10-15 working days from content & assets receipt.",
    "Payment terms: 50% advance to commence work, 50% before final delivery & domain pointing.",
    "Scope is limited to 5 pages as mentioned above. Any additional pages or features will be quoted separately.",
    "Client must provide all content (text, images, logos, videos) in a timely manner. Delays in content submission will extend the timeline.",
    "Up to 2 rounds of revisions are included. Additional revision rounds will be charged separately.",
    "Domain name registration and hosting charges are NOT included and will be billed separately or managed by the client.",
    "Third-party integrations (payment gateways, CRM, etc.) may incur additional charges depending on complexity.",
    "Website will be responsive (mobile, tablet & desktop compatible) and optimized for modern browsers.",
    "Post-delivery support: 15 days of free bug-fix support after website handover.",
    "Ownership of the website will be transferred to the client upon full payment.",
    "GST @ 18% is applicable on the quoted amount and will be charged additionally.",
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 print:py-0 print:px-0">
      <div className="quote-page rounded-lg overflow-hidden relative">
        {/* Background Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <img 
            src={zanLogo} 
            alt="" 
            className="w-[600px] opacity-[0.04] select-none"
          />
        </div>

        {/* Header */}
        <div className="quote-header-light relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <img src={zanLogo} alt="Zan Services" className="h-14 mb-3" />
              <h1 className="text-3xl font-bold tracking-tight font-display text-quote-header-bg">Quotation</h1>
              <p className="text-muted-foreground mt-1 text-sm">Website Development - 5 Page Business Website</p>
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
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Bill To</h3>
                    <p className="text-lg font-semibold text-foreground">La Aquaria</p>
                    <p className="text-muted-foreground text-sm mt-1">Kolkata, West Bengal</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Service Provider</h3>
                    <p className="text-lg font-semibold text-foreground">Zan Services</p>
                    <div className="text-sm text-muted-foreground mt-1 space-y-1">
                      <p className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5" />
                        zanservices.com
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5" />
                        +91 82408 25490
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5" />
                        operations@zanservices.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Table */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Services Included</h2>
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
                  {services.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Extra Features */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-quote-accent" />
              <h2 className="text-lg font-semibold text-foreground">Additional Features</h2>
              <span className="quote-badge">Extra Charges Apply</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-1/3">Feature</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {extraFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.feature}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              * Pricing for additional features will be provided upon request based on specific requirements.
            </p>
          </div>

          {/* Total Cost */}
          <div className="my-8">
            <div className="quote-total-box p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Website Development Fee</p>
                  <p className="text-xs text-white/60 mt-1">5 Page Business Website - One Time</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold">₹15,000/-</p>
                  <p className="text-white/70 text-sm mt-1">One Time • Excluding GST (18%)</p>
                  <p className="text-xl font-semibold mt-2 text-white/90">₹17,700/- <span className="text-sm font-normal text-white/70">Including GST</span></p>
                </div>
              </div>
            </div>

            {/* Domain & Hosting Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-4">
              <p className="text-sm font-semibold text-blue-800 mb-2">Domain & Hosting (Billed Separately)</p>
              <p className="text-xs text-blue-600">Domain registration and web hosting charges are not included in this quotation. These can be arranged by the client or managed by Zan Services at actual cost.</p>
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
            {/* Bank Details */}
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

            {/* Signature */}
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

          {/* Contact Bar */}
          <div className="mt-8 pt-6 border-t border-quote-border flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://zanservices.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              zanservices.com
            </a>
            <a href="tel:+918240825490" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 82408 25490
            </a>
            <a href="mailto:operations@zanservices.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              operations@zanservices.com
            </a>
          </div>
        </div>
      </div>

      {/* Print Button - Hidden on print */}
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
