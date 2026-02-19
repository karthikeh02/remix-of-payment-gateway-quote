import { FileText, Mail, Phone, Globe, Smartphone, Shield, Camera, Wifi, Bell, BarChart3, Users, Settings, Zap } from "lucide-react";
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

  const coreFeatures = [
    { feature: "Employee Authentication", icon: Shield, description: "Secure login system with company-issued credentials. Role-based access (Field Employee, Sales Manager, Admin). Session management with auto-logout for security." },
    { feature: "Photo Capture & Upload", icon: Camera, description: "In-app camera integration to photograph construction sites, new building projects, and potential leads. Multiple photo capture per lead with auto-compression for faster uploads." },
    { feature: "Lead Submission Form", icon: FileText, description: "Simple, intuitive form — Site Name, Address/Location, Notes, Contact Details (if available). GPS auto-tagging for location accuracy. Quick-submit with minimal taps." },
    { feature: "CRM API Integration", icon: Zap, description: "Direct integration with your existing CRM via REST API. Real-time data push on lead submission. API credentials and endpoints to be provided by Shakambhari Group." },
    { feature: "Push Notifications", icon: Bell, description: "Instant notification to Sales Team on new lead submission. Status update alerts to the submitting employee. Incentive earned notifications on lead conversion." },
    { feature: "Offline Mode & Data Sync", icon: Wifi, description: "Full offline functionality — capture photos, fill forms, and save leads locally. Automatic background sync when internet connection is restored. No data loss guaranteed." },
  ];

  const trackingFeatures = [
    { feature: "Lead Status Tracking", description: "Real-time tracking of every lead — Open → In Progress → Converted / Lost. Sales team can update status from their end. Field employees can view their submitted leads and current status." },
    { feature: "Incentive & Rewards System", description: "Automatic incentive tracking when a lead converts to a sale. Employee-wise incentive dashboard showing total leads, conversions, and rewards earned. Monthly incentive summary and notification." },
    { feature: "Employee Dashboard", description: "Personal dashboard for each employee — Total Leads Submitted, Converted Leads, Pending Leads, Incentives Earned. Leaderboard to encourage healthy competition among field staff." },
  ];

  const adminPanelFeatures = [
    { feature: "Admin Web Dashboard", description: "Comprehensive web-based admin panel for managers to oversee all leads, employee activity, conversion rates, and incentive payouts." },
    { feature: "Analytics & Reports", description: "Visual reports — Lead volume trends, area-wise lead heatmap, employee performance charts, conversion funnel analysis. Exportable to Excel/PDF." },
    { feature: "Employee Management", description: "Add/remove employees, assign roles, manage credentials, view individual performance history and incentive records." },
  ];

  const extraFeatures = [
    { feature: "WhatsApp Lead Sharing", description: "One-tap share lead details with internal team via WhatsApp for quick coordination." },
    { feature: "Lead Assignment Engine", description: "Auto-assign or manually assign leads to specific sales reps based on area, product type, or availability." },
    { feature: "Follow-Up Reminders", description: "Automated follow-up reminders for sales team on pending leads. Configurable reminder intervals (24hr, 48hr, 7 days)." },
    { feature: "Multi-Language Support", description: "App interface in English and Hindi for ease of use by all field employees across regions." },
  ];

  const costBreakdown = [
    { item: "Mobile App Development (Android + iOS)", description: "React Native cross-platform app with all core features", amount: "₹1,80,000" },
    { item: "Admin Web Dashboard", description: "Next.js web panel for managers & admins", amount: "₹50,000" },
    { item: "CRM API Integration & Notifications", description: "REST API integration + Push notification setup", amount: "₹35,000" },
    { item: "Incentive & Rewards Module", description: "Conversion tracking, incentive calculation & dashboard", amount: "₹25,000" },
    { item: "Extra Features Pack", description: "WhatsApp sharing, Lead Assignment, Follow-ups, Multi-language", amount: "₹30,000" },
  ];

  const termsAndConditions = [
    "This quotation is valid for 4 (four) days from the date of issue.",
    "Payment terms: 40% advance before project commencement, 30% upon development milestone, 30% on final delivery & deployment.",
    "Estimated delivery timeline: 45–60 working days from project kickoff (post advance payment & CRM API documentation received).",
    "Client must provide CRM API documentation, endpoints, and test credentials within 7 days of project start.",
    "All branding assets (company logo, brand colors, employee list) to be provided by the client.",
    "App will be developed using React Native (cross-platform for Android & iOS) and Admin Panel using Next.js.",
    "Up to 3 rounds of UI/UX design revisions are included. Additional revisions will be charged at ₹5,000 per round.",
    "App Store (Google Play + Apple App Store) publishing will be handled by Zan Services. Developer account fees (₹2,100 for Google Play one-time, $99/year for Apple) are to be borne by the client.",
    "Offline data sync uses local device storage — data is automatically pushed to the server when connectivity is restored.",
    "Server/cloud hosting costs (AWS/equivalent) are NOT included and will be billed separately or managed by the client.",
    "Post-delivery support: 30 days free bug-fix support included after final delivery.",
    "Ongoing maintenance & support available at ₹10,000/month (covers bug fixes, minor updates, server monitoring).",
    "All prices mentioned are exclusive of GST (18%). GST will be charged additionally.",
    "Source code and intellectual property will be handed over to the client upon full payment.",
    "Either party may terminate the project with 15 days written notice. Work completed till date will be billed proportionally.",
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
              <p className="text-muted-foreground mt-1 text-sm">Sales Lead Capture Mobile App — Steel Manufacturing Industry</p>
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
                    <p className="text-lg font-semibold text-foreground">Pragati Pagaria</p>
                    <p className="text-muted-foreground text-sm mt-1">Trainee — Shakambhari Group</p>
                    <p className="text-muted-foreground text-sm">Steel Manufacturing Company</p>
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

          {/* Core Features */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Core App Features — Android & iOS</h2>
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
                  {coreFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-primary shrink-0" />
                          {item.feature}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Lead Tracking & Incentive */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Lead Tracking & Incentive System</h2>
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
                  {trackingFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.feature}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admin Panel */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Admin Web Dashboard (Manager Panel)</h2>
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
                  {adminPanelFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.feature}</td>
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
              <Zap className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Extra Features (Included)</h2>
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
          </div>

          {/* Tech Stack */}
          <div className="my-6 p-5 bg-secondary/60 border border-quote-border rounded-lg">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Settings className="w-4 h-4 text-primary" /> Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-card p-3 rounded-lg border border-quote-border text-center">
                <p className="font-semibold text-foreground">React Native</p>
                <p className="text-xs text-muted-foreground">Mobile App (Android + iOS)</p>
              </div>
              <div className="bg-card p-3 rounded-lg border border-quote-border text-center">
                <p className="font-semibold text-foreground">Next.js</p>
                <p className="text-xs text-muted-foreground">Admin Web Dashboard</p>
              </div>
              <div className="bg-card p-3 rounded-lg border border-quote-border text-center">
                <p className="font-semibold text-foreground">Node.js + REST API</p>
                <p className="text-xs text-muted-foreground">Backend & CRM Integration</p>
              </div>
              <div className="bg-card p-3 rounded-lg border border-quote-border text-center">
                <p className="font-semibold text-foreground">AWS / Cloud</p>
                <p className="text-xs text-muted-foreground">Hosting & Storage</p>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="my-8 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Cost Breakdown</h2>
            </div>

            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold">Item</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Details</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.item}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.description}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-foreground text-right whitespace-nowrap">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total */}
            <div className="quote-total-box p-5 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Total Project Cost</p>
                  <p className="text-xs text-white/60 mt-1">Android + iOS App • Admin Dashboard • CRM Integration • All Features</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹3,20,000/-</p>
                  <p className="text-white/70 text-sm mt-1">Exclusive of GST (18%)</p>
                </div>
              </div>
            </div>

            {/* GST Note */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-2">GST & Final Amount</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    GST @ 18% = <strong>₹57,600</strong> → Total with GST = <strong>₹3,77,600/-</strong>.
                    All invoices will be raised with applicable GST. Input tax credit (ITC) can be claimed by the client where applicable.
                  </p>
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Settings className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-2">Ongoing Maintenance & Support (Optional)</p>
                  <p className="text-xs text-blue-600 leading-relaxed">
                    Post-delivery maintenance available at <strong>₹10,000/month + GST</strong>. Includes bug fixes, minor feature updates, server monitoring, app store updates, and priority support. First 30 days of bug-fix support are included free with the project.
                  </p>
                </div>
              </div>
            </div>

            {/* Hosting Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-2">Server & Hosting (Billed Separately)</p>
                  <p className="text-xs text-blue-600 leading-relaxed">
                    Cloud hosting (AWS/equivalent), database, and storage costs are not included in this quotation. Estimated monthly hosting: ₹3,000–₹8,000/month depending on usage and storage requirements. App Store developer account fees (Google Play ₹2,100 one-time, Apple $99/year) are to be borne by the client.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Schedule */}
            <div className="bg-secondary/60 border border-quote-border rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Payment Schedule</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">40% — Advance (Project Kickoff)</span>
                  <span className="font-semibold text-foreground">₹1,28,000 + GST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">30% — Development Milestone (Beta Delivery)</span>
                  <span className="font-semibold text-foreground">₹96,000 + GST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">30% — Final Delivery & Deployment</span>
                  <span className="font-semibold text-foreground">₹96,000 + GST</span>
                </div>
                <div className="border-t border-quote-border pt-2 mt-2 flex justify-between">
                  <span className="font-semibold text-foreground">Total Project Cost</span>
                  <span className="font-bold text-foreground text-base">₹3,20,000 + GST (₹3,77,600/-)</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-secondary/60 border border-quote-border rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Estimated Project Timeline — 45 to 60 Working Days</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phase 1 — UI/UX Design & Wireframes</span>
                  <span className="font-semibold text-foreground">Week 1–2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phase 2 — Core App Development & API Integration</span>
                  <span className="font-semibold text-foreground">Week 3–6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phase 3 — Admin Dashboard & Analytics</span>
                  <span className="font-semibold text-foreground">Week 5–7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phase 4 — Testing, QA & Bug Fixes</span>
                  <span className="font-semibold text-foreground">Week 7–8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phase 5 — Deployment & App Store Publishing</span>
                  <span className="font-semibold text-foreground">Week 8–9</span>
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
              CRM API details, and technical specifications shared during the project will be kept strictly confidential 
              and used only for project execution. No client data will be shared with third parties without prior consent. 
              Source code, app credentials, and all project assets will be handed over to the client upon full payment. 
              Employee data captured through the app will be stored securely with encryption at rest and in transit.
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
