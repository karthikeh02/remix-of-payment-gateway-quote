import { FileText, Mail, Phone, Globe, CheckCircle2, AlertCircle, CreditCard, Shield } from "lucide-react";

const QuotationDocument = () => {
  const currentDate = new Date();
  const validUntilDate = new Date(currentDate);
  validUntilDate.setDate(validUntilDate.getDate() + 7);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const services = [
    {
      service: "Payment Gateway Integration",
      description: "Complete integration of payment gateway (Stripe/Razorpay) with your website or application including checkout flow, payment processing, and order confirmation."
    },
    {
      service: "Secure Payment Processing",
      description: "Implementation of PCI DSS compliant payment handling with SSL/TLS encryption, tokenization, and secure data transmission."
    },
    {
      service: "Webhook Configuration",
      description: "Setup of payment webhooks for real-time payment status updates, order fulfillment triggers, and notification systems."
    },
    {
      service: "Testing & Deployment",
      description: "Comprehensive testing in sandbox/test environment followed by production deployment with payment verification."
    },
  ];

  const extraFeatures = [
    { feature: "Refund Management System", description: "Full or partial refund processing capability with tracking" },
    { feature: "Multi-Gateway Support", description: "Integration of multiple payment providers for failover and redundancy" },
    { feature: "Admin Dashboard", description: "Custom admin panel for transaction monitoring, reporting, and management" },
    { feature: "Subscription/Recurring Payments", description: "Automated recurring billing and subscription management" },
    { feature: "Multi-Currency Support", description: "Accept payments in multiple currencies with auto-conversion" },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Scope is limited to services mentioned above. Any additional requirements will be quoted separately.",
    "Client must provide timely access to hosting, codebase, and payment gateway merchant accounts.",
    "Transaction fees charged by payment service providers (Stripe, Razorpay, etc.) are NOT included in this quotation and shall be paid directly by the client to the respective service provider as per their pricing.",
    "Gateway merchant account creation and KYC verification must be completed by the client. We can assist with documentation if required.",
    "Integration timeline: 5-10 business days depending on project complexity and client responsiveness.",
    "Any delays caused by client-side dependencies (access, approvals, documentation) may extend the timeline.",
    "50% advance payment required to commence work. Remaining 50% upon completion and before production deployment.",
    "Post-deployment support: 15 days of bug fixes and minor adjustments at no extra cost.",
    "GST @ 18% is applicable on the quoted amount and will be charged additionally.",
    "All payment integrations will follow the latest security standards and compliance requirements of the chosen payment provider.",
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 print:py-0 print:px-0">
      <div className="quote-page rounded-lg overflow-hidden">
        {/* Header */}
        <div className="quote-header">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-display">Quotation</h1>
              <p className="text-white/80 mt-1 text-sm">Payment Integration Services</p>
              <div className="quote-accent-bar mt-4"></div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <FileText className="w-5 h-5" />
                <span className="text-lg font-semibold">ZAN-2026-0127</span>
              </div>
              <p className="text-white/70 text-sm mt-1">Date: {formatDate(currentDate)}</p>
              <p className="text-white/70 text-sm">Valid Until: {formatDate(validUntilDate)}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-10 py-8">
          {/* Client & Provider Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="quote-highlight-box p-5 rounded-lg">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Bill To</h3>
              <p className="text-lg font-semibold text-foreground">Rahul Kumar</p>
              <p className="text-muted-foreground text-sm mt-1">Client</p>
            </div>
            <div className="p-5 border border-quote-border rounded-lg">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Service Provider</h3>
              <p className="text-lg font-semibold text-foreground">Zan Services</p>
              <div className="text-sm text-muted-foreground mt-2 space-y-1">
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

          {/* Services Table */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary" />
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
                  <p className="text-white/80 text-sm uppercase tracking-wider">Total Project Cost</p>
                  <p className="text-xs text-white/60 mt-1">For base payment integration services</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold">₹30,000/-</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800">Important: Transaction Fees</p>
              <p className="text-sm text-amber-700 mt-1">
                All transaction/processing fees charged by payment service providers (Stripe, Razorpay, etc.) 
                are NOT included in this quotation. These fees will be paid directly by the client to the 
                respective service provider as per their published pricing structure.
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

          {/* Privacy Policy */}
          <div className="mt-6 p-5 bg-secondary/50 rounded-lg">
            <h3 className="text-sm font-semibold text-foreground mb-2">Privacy & Confidentiality</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Zan Services respects client confidentiality. All data, API keys, credentials, business information, 
              and technical details shared during the project will be kept strictly confidential and used only for 
              service execution. No client data will be shared with third parties without prior consent, except 
              where required by law or platform policies.
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
