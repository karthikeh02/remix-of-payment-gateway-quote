import { FileText, Mail, Phone, Globe, TrendingUp, Shield, MessageSquare, AlertCircle } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";

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
      service: "Super Admin Panel (Web)",
      description: "Company-side control panel — Create/activate/deactivate schools, manage subscription plans, set teacher license limits, trial period (14 days), payment status tracking, school/teacher/student analytics dashboard, send announcements, and reset school admin passwords.",
    },
    {
      service: "School Admin Panel (Web + Mobile)",
      description: "School management panel — Dashboard with student/teacher/fee stats, teacher management (add, assign class, disable, reset password, license slots), class & section management, student management (add, edit, shift, mark inactive), fees management (set monthly fee, due dates, late fine, mark paid, pending list, receipt generation), WhatsApp reminders (before/on/after due date, single/class/all), broadcast notices/homework/holidays, and class-wise & monthly collection reports.",
    },
    {
      service: "Teacher Panel (Mobile App)",
      description: "Teacher-specific access — View assigned class students only, add homework, send class messages to parents via WhatsApp, optional fee collection marking (if school allows). Teachers cannot delete students or access other classes.",
    },
    {
      service: "WhatsApp Integration",
      description: "Automated WhatsApp messaging to parents — Homework notifications, school notices, fee reminders (before/on/after due date). Editable message templates for all communication types. No separate parent app needed.",
    },
    {
      service: "Subscription & Licensing System",
      description: "14-day free trial with auto-expiry and login blocking. License-based teacher access (e.g., 8 paid licenses = 8 active teachers). Subscription management with renewal tracking.",
    },
    {
      service: "Play Store & App Store Deployment",
      description: "Complete mobile app deployment on Google Play Store and Apple App Store including developer account setup, app listing, screenshots, descriptions, and submission for review & approval.",
    },
  ];

  const extraFeatures = [
    { feature: "SMS Integration", description: "Fallback SMS notifications for parents without WhatsApp, with bulk SMS gateway integration" },
    { feature: "Online Fee Payment", description: "Payment gateway integration (Razorpay/Paytm) for online fee collection with automated receipts" },
    { feature: "Attendance Module", description: "Daily student & teacher attendance tracking with monthly reports and parent notifications" },
    { feature: "Exam & Result Management", description: "Exam scheduling, marks entry, report card generation, and result sharing with parents" },
    { feature: "Multi-Language Support", description: "Hindi, Bengali, and other regional language support for the entire application interface" },
    { feature: "Redis Caching Layer", description: "High-performance caching for faster data retrieval, reduced database load, and improved response times across all panels" },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Estimated project timeline: 60-90 working days from project kickoff and requirements finalization.",
    "Payment terms: 40% advance to commence work, 30% on mid-project milestone delivery, 30% before final deployment.",
    "Scope is limited to the modules mentioned above (Super Admin, School Admin, Teacher panels + WhatsApp integration + App Store deployment).",
    "Client must provide all branding assets (logo, colors, content) in a timely manner. Delays will extend the timeline accordingly.",
    "Up to 3 rounds of UI/UX revisions are included per module. Additional revision rounds will be charged separately.",
    "Cloud hosting, domain, and SSL charges are NOT included and will be billed separately or managed by the client.",
    "WhatsApp Business API costs (Meta conversation charges + BSP fees) are recurring and will be borne by the client separately (estimated ₹1,500–₹2,500/month for 10K messages).",
    "Play Store (₹2,100 one-time) and App Store (₹8,700/year) developer account fees are included in this quotation.",
    "Application will be built using Next.js (web), React Native (mobile), MongoDB with multi-tenant database architecture, AWS cloud infrastructure, and optional Redis caching layer.",
    "Post-delivery support: 30 days of free bug-fix support after final deployment. AMC (Annual Maintenance Contract) available separately.",
    "Source code and all credentials will be handed over to the client upon full payment.",
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
              <p className="text-muted-foreground mt-1 text-sm">School Management Web & Mobile Application</p>
              <p className="text-xs text-muted-foreground mt-2 font-medium">Tech Stack: Next.js • React Native • MongoDB • Multi-Tenant DB • AWS • Redis</p>
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
                     <p className="text-lg font-semibold text-foreground">Nikhil Rastogi</p>
                     <p className="text-muted-foreground text-sm mt-1">School Management System</p>
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
              <h2 className="text-lg font-semibold text-foreground">Modules & Services Included</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-1/3">Module</th>
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
                  <p className="text-white/80 text-sm uppercase tracking-wider">Project Development Fee</p>
                  <p className="text-xs text-white/60 mt-1">School Management System — Web + Mobile + Deployment</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold">₹3,50,000/-</p>
                  <p className="text-white/70 text-sm mt-1">One Time • Excluding GST (18%)</p>
                  <p className="text-xl font-semibold mt-2 text-white/90">₹4,13,000/- <span className="text-sm font-normal text-white/70">Including GST</span></p>
                </div>
              </div>
            </div>

            {/* WhatsApp Recurring Cost Note */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-4">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-2">WhatsApp API — Recurring Monthly Cost (Client-Borne)</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    WhatsApp Business API charges are separate and recurring. For ~10,000 messages/month: 
                    Meta conversation charges ≈ ₹1,150 + BSP (Business Solution Provider) fees ≈ ₹500–₹1,000. 
                    <strong> Estimated total: ₹1,500–₹2,500/month.</strong> Messages initiated by parents (replies) are often free.
                  </p>
                </div>
              </div>
            </div>

            {/* Hosting Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-2">Cloud Hosting & Domain (Billed Separately)</p>
                  <p className="text-xs text-blue-600">Cloud server hosting, domain registration, and SSL certificate charges are not included in this quotation. These will be billed separately based on usage and provider selected.</p>
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
