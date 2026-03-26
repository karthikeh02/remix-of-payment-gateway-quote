import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Loader2, Layout, CreditCard, ArrowRight, CheckCircle2, Shield, Info, Download, Brain, AlertTriangle } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const AmitKumarProposal = () => {
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
        filename: `Zan_Services_Amit_Kumar_Student_Fee_App_${formatDate(currentDate).replace(/\//g, "-")}.pdf`,
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

  const scopeOfWork = [
    { module: "Admin Dashboard (Web)", description: "Student registration & management, service assignment, payment status overview (paid/pending/overdue), fee collection summary, and basic reports." },
    { module: "Fee & Payment Management", description: "Set fee structure per student/service, mark payments as paid/pending, generate payment receipts, track overdue payments, and monthly collection reports." },
    { module: "Payment Gateway (Razorpay)", description: "Online payment integration — parents can pay fees directly through the app. Auto-reconciliation with admin dashboard. Payment receipts auto-generated." },
    { module: "Parent Mobile App (Android)", description: "Parents can view their child's profile, service details, payment history, pending dues, and make online payments via Razorpay." },
    { module: "Notifications & Reminders", description: "Automated payment reminders before and on due date. Payment confirmation alerts. Push notifications for important updates from admin." },
    { module: "Deployment & Go-Live", description: "Cloud deployment, SSL setup, Play Store submission for the parent app, and go-live support." },
  ];

  const flowSteps = [
    { step: 1, title: "Admin registers student", description: "Adds student details, assigns bus/van service, sets fee amount & due date." },
    { step: 2, title: "Parent gets access", description: "Parent downloads app, logs in with registered phone number, sees child profile & dues." },
    { step: 3, title: "Payment reminder sent", description: "Automated push notification sent before due date reminding parent to pay." },
    { step: 4, title: "Parent pays online", description: "Parent clicks 'Pay Now' in app, pays via Razorpay (UPI/Card/NetBanking)." },
    { step: 5, title: "Admin sees update", description: "Dashboard auto-updates — payment marked as received, receipt generated." },
    { step: 6, title: "Monthly reports", description: "Admin views collection summary — who paid, who's pending, total collected." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment structure: 50% advance on kickoff, 30% on mid-milestone delivery, 20% on final go-live. All payments exclusive of GST (18%).",
    "Estimated delivery: 4-5 weeks from project kickoff and content handover.",
    "Client will receive staging/preview builds at each milestone for review.",
    "Up to 2 rounds of design revisions included. Additional revisions charged at ₹3,000 per round.",
    "Razorpay merchant account setup is the client's responsibility. Zan Services will handle technical integration.",
    "Cloud hosting, domain, and SSL charges are NOT included and are borne by the client.",
    "Play Store developer account fee (₹2,100 one-time) is the client's responsibility.",
    "Post-launch support: 15 days of free bug-fix support after go-live.",
    "Source code and all assets transferred to client upon full payment.",
    "Any additional features beyond the agreed scope will be quoted and charged separately.",
    "GST @ 18% is applicable and will be charged additionally.",
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
              <p className="text-muted-foreground mt-1 text-sm">Student Fee Management & Payment Tracking Mobile Application</p>
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
                    <p className="text-lg font-semibold text-foreground">Amit Kumar</p>
                    <p className="text-muted-foreground text-sm mt-1">Student Fee Management App</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Service Provider</h3>
                    <p className="text-lg font-semibold text-foreground">Zan Services</p>
                    <p className="text-muted-foreground text-xs mt-0.5 italic">Software Development Division</p>
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
              <Brain className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Project Overview</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A lightweight mobile application for school bus/van service providers to manage student registrations and track fee payments. The admin can register students, assign services, track who has paid and who hasn't — with a clean dashboard for complete visibility. Parents receive payment reminders and can pay online.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Layout className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Admin Panel</p>
                  <p className="text-[10px] text-muted-foreground">Web Dashboard</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Layout className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Parent App</p>
                  <p className="text-[10px] text-muted-foreground">Mobile (Android)</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <CreditCard className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Razorpay</p>
                  <p className="text-[10px] text-muted-foreground">Online Payments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Scope of Work */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Scope of Work</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Module</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {scopeOfWork.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.module}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: How It Works — Flow */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <ArrowRight className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">How It Works — Flow</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {flowSteps.map((item) => (
                <div key={item.step} className="quote-sla-card p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">{item.step}</span>
                    <p className="text-sm font-bold text-foreground">{item.title}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Investment */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Investment</h2>
            </div>

            {/* Total Box */}
            <div className="quote-total-box rounded-lg p-6 text-center mb-4">
              <p className="text-3xl font-bold text-white">₹65,000<span className="text-base font-normal text-white/70"> + GST</span></p>
              <p className="text-sm text-white/80 mt-1">₹76,700/- Incl. GST (18%)</p>
              <p className="text-xs text-white/60 mt-2">Admin Dashboard + Parent App + Payment Gateway + Notifications</p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">50 / 30 / 20</p>
                <p className="text-xs text-muted-foreground mt-1">Payment Split</p>
                <p className="text-[10px] text-muted-foreground">₹32,500 → ₹19,500 → ₹13,000</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">4-5 Weeks</p>
                <p className="text-xs text-muted-foreground mt-1">Delivery Timeline</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-foreground">15 Days</p>
                <p className="text-xs text-muted-foreground mt-1">Free Bug-Fix Support</p>
              </div>
            </div>

            {/* Recurring costs warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-2">Recurring Costs (Client-Borne):</p>
                  <ul className="text-xs text-amber-700 space-y-1">
                    <li>• Cloud hosting: ~₹500–₹1,500/month</li>
                    <li>• Razorpay transaction fee: 2% per transaction (standard)</li>
                    <li>• Push notification service: Free tier sufficient for small scale</li>
                    <li>• Play Store developer account: ₹2,100 one-time</li>
                  </ul>
                </div>
              </div>
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
                  outlined in this quotation for Student Fee Management & Payment Tracking Mobile Application.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Amit Kumar</p>
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

export default AmitKumarProposal;
