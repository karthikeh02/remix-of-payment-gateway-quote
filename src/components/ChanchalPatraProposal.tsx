import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, CheckCircle2, Users, Calendar, Video, BookOpen, Layout, Rocket, CreditCard, Brain, ArrowRight, Clock, Shield, GraduationCap, UserCheck, Wallet, BarChart3, Monitor, Award, Layers, Settings } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const ChanchalPatraProposal = () => {
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
        filename: `Zan_Services_Chanchal_Patra_AbacusPlatform_${formatDate(currentDate).replace(/\//g, '-')}.pdf`,
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

  const roles = [
    { role: "Super Admin", icon: <Settings className="w-4 h-4 text-red-500" />, desc: "Full platform control — manage teachers, students, commissions, content, exams, and financials." },
    { role: "Teacher (Franchise)", icon: <UserCheck className="w-4 h-4 text-blue-500" />, desc: "Self-register on the platform, onboard students via wallet balance, earn commission, access training modules, conduct classes, track student progress." },
    { role: "Student", icon: <GraduationCap className="w-4 h-4 text-green-500" />, desc: "Subscribe to levels, attend online classes & exams, use interactive Abacus tool, track own progress." },
    { role: "Parent", icon: <Users className="w-4 h-4 text-purple-500" />, desc: "Dedicated dashboard to monitor kid's progress, attendance, exam results, and level completion." },
  ];

  const phase1Modules = [
    { module: "Admin Dashboard", description: "Super admin panel — teacher/student management, commission configuration, wallet management, analytics overview.", cost: "₹80,000" },
    { module: "Teacher Portal", description: "Franchise teacher dashboard — wallet-based student onboarding, commission tracking, student list, class scheduling.", cost: "₹65,000" },
    { module: "Student Portal", description: "Student dashboard — level subscription, class schedule, progress tracking, exam history, profile management.", cost: "₹55,000" },
    { module: "Parent Dashboard", description: "Parent view — kid's progress, attendance records, exam scores, level completion status, notifications.", cost: "₹40,000" },
    { module: "8-Level Subscription System", description: "Individual level subscriptions with payment gateway integration. Each level independently purchasable with progression tracking.", cost: "₹45,000" },
    { module: "Commission & Wallet Engine", description: "Teacher wallet system with balance-based student onboarding. Configurable commission % split between teacher and super admin for both teacher-onboarded and self-onboarded students.", cost: "₹50,000" },
    { module: "Attendance & Tracking", description: "Automated attendance marking for online classes. Student activity tracking, login history, and engagement metrics.", cost: "₹30,000" },
    { module: "UI/UX Design", description: "Complete platform design — wireframes, visual design for all dashboards (Admin, Teacher, Student, Parent). Mobile-responsive.", cost: "₹60,000" },
    { module: "Deployment & Infrastructure", description: "Cloud deployment (AWS/Vercel), database setup, SSL, domain configuration, CI/CD pipeline, go-live.", cost: "₹25,000" },
  ];

  const phase2Modules = [
    { module: "Interactive Abacus Exam Engine", description: "Graphical Abacus tool for online exams — students calculate math using an interactive virtual abacus. Timed exams with auto-grading.", cost: "₹1,00,000" },
    { module: "Online Class Integration", description: "In-app video classes or Google Meet integration. Class scheduling, joining links, recording support.", cost: "₹60,000" },
    { module: "Teacher Training Module", description: "Video-based training courses for teachers. Exams and criteria-based certification — teachers must qualify before onboarding students.", cost: "₹70,000" },
    { module: "Vedic Math Module", description: "Separate module for teen students — Vedic math curriculum, exercises, exams, and progress tracking.", cost: "₹70,000" },
    { module: "Advanced Reporting & Analytics", description: "Detailed analytics — student performance trends, revenue reports, teacher performance, commission reports, exam analytics.", cost: "₹50,000" },
  ];

  const phase1Total = 450000;
  const phase2Total = 350000;
  const grandTotal = 800000;

  const platformFlow = [
    { step: "1", title: "Teacher self-registers", desc: "Teacher signs up on the platform, completes profile. Admin approves and sets commission %, teacher gets wallet access." },
    { step: "2", title: "Teacher onboards students", desc: "Teacher uses wallet balance to onboard students. Commission auto-split between teacher & admin." },
    { step: "3", title: "OR Student self-registers", desc: "Student signs up directly. Admin assigns a teacher. Different commission % applies." },
    { step: "4", title: "Student subscribes to levels", desc: "Student/parent purchases individual levels (1-8). Payment processed, access granted instantly." },
    { step: "5", title: "Student attends classes & exams", desc: "Online classes via Meet/in-app. Interactive Abacus exams with auto-grading and progress tracking." },
    { step: "6", title: "Parent monitors progress", desc: "Parent dashboard shows attendance, exam scores, level progress, and teacher feedback." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment structure: 40% advance on kickoff, 30% on Phase 1 completion, 30% on Phase 2 delivery & go-live. All payments are exclusive of GST (18%).",
    "Modular approach: Phase 1 (core platform) will be delivered first to enable primary business operations. Phase 2 (advanced features) will be iterated upon post Phase 1 launch.",
    "Estimated delivery: Phase 1 — 8–10 weeks from kickoff. Phase 2 — 4–6 weeks after Phase 1 go-live.",
    "The client will receive a staging/preview link at each milestone for review and feedback.",
    "Up to 2 rounds of design revisions per phase are included. Additional revisions will be charged at ₹5,000 per round.",
    "Client must provide: brand guidelines, logo, level curriculum content, exam question banks, training videos (for teacher module), and any educational content.",
    "Payment gateway integration (Razorpay/Stripe) — merchant account must be set up by the client. Zan Services will handle technical integration.",
    "Google Meet API or third-party video integration may require paid API access — cost borne by the client.",
    "Post-launch support: 30 days of free bug-fix support after each phase go-live.",
    "Source code and all assets will be transferred to the client upon full payment.",
    "Hosting & infrastructure costs (estimated ₹3,000–₹8,000/month depending on scale) are borne by the client post-launch.",
    "Reference site: abacusclassesonline.com — the platform will be built as a custom clone with improvements and client-specific features.",
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
              <h1 className="text-3xl font-bold tracking-tight font-display text-quote-header-bg">Proposal</h1>
              <p className="text-muted-foreground mt-1 text-sm">Abacus & Vedic Math — Online Education Platform</p>
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
                    <p className="text-lg font-semibold text-foreground">Mr. Chanchal Patra</p>
                    <p className="text-muted-foreground text-sm mt-1">Abacus & Vedic Math Education</p>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2"><Phone className="w-3.5 h-3.5 shrink-0" /><span>+91 97758 17084</span></p>
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

          {/* Project Overview */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Brain className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Project Overview</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A comprehensive <strong>online education platform</strong> for teaching <strong>Abacus Math (8 levels)</strong> and <strong>Vedic Math</strong> to students.
                The platform features a multi-role system — <strong>Super Admin, Teachers (Franchise), Students, and Parents</strong> — with wallet-based onboarding,
                commission distribution, interactive exams with graphical Abacus, online classes, attendance tracking, and teacher training modules.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong>Reference:</strong> abacusclassesonline.com — built as a custom clone with improvements tailored to client requirements.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong>Approach:</strong> Modular delivery — Phase 1 launches the core business platform, Phase 2 adds advanced features iteratively.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Layers className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">8 Levels</p>
                  <p className="text-[10px] text-muted-foreground">Individual subscriptions</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Users className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">4 Roles</p>
                  <p className="text-[10px] text-muted-foreground">Admin, Teacher, Student, Parent</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Wallet className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Wallet System</p>
                  <p className="text-[10px] text-muted-foreground">Commission & onboarding</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <GraduationCap className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Interactive Exams</p>
                  <p className="text-[10px] text-muted-foreground">Graphical Abacus tool</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Roles */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Platform Roles & Access</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {roles.map((item, index) => (
                <div key={index} className="quote-sla-card p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <p className="text-sm font-semibold text-foreground">{item.role}</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Flow */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <ArrowRight className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">How It Works — Platform Flow</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {platformFlow.map((item, index) => (
                <div key={index} className="quote-sla-card p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">{item.step}</span>
                    <p className="text-xs font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Commission Flow */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-3">
              <h4 className="text-xs font-semibold text-amber-800 mb-2 flex items-center gap-2">
                <Wallet className="w-3.5 h-3.5" /> Commission Distribution Model
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="text-xs text-amber-700">
                  <p className="font-semibold mb-1">Teacher-Onboarded Student:</p>
                  <p>Teacher uses wallet balance to onboard → Commission % (configurable by admin) goes to the teacher, remainder to super admin.</p>
                </div>
                <div className="text-xs text-amber-700">
                  <p className="font-semibold mb-1">Self-Registered Student:</p>
                  <p>Student registers directly → Admin assigns a teacher → Different commission % applies (typically lower for teacher since they didn't source the student).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 1 — Scope */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Rocket className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Phase 1 — Core Platform</h2>
              <span className="quote-badge whitespace-nowrap">MVP Launch</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Everything needed to launch and run the primary business — admin controls, teacher franchise system, student onboarding, subscriptions, and parent tracking.</p>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Module</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {phase1Modules.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.module}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Phase 2 — Scope */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Phase 2 — Advanced Features</h2>
              <span className="bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded whitespace-nowrap">Post-Launch Iteration</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Advanced modules added after Phase 1 is live — interactive exams, online classes, teacher training, and Vedic math curriculum.</p>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Module</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {phase2Modules.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.module}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Grand Total */}
          <div className="my-8">
            {/* Phase Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <div className="quote-sla-card p-4 rounded-lg text-center border-2 border-primary/20">
                <Rocket className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Phase 1</p>
                <p className="text-xl font-bold text-foreground mt-1">₹4,50,000</p>
                <p className="text-[10px] text-muted-foreground mt-1">Core Platform (MVP)</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center border-2 border-green-200">
                <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Phase 2</p>
                <p className="text-xl font-bold text-foreground mt-1">₹3,50,000</p>
                <p className="text-[10px] text-muted-foreground mt-1">Advanced Features</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center border-2 border-amber-200 bg-amber-50/50">
                <CreditCard className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Total</p>
                <p className="text-xl font-bold text-foreground mt-1">₹8,00,000</p>
                <p className="text-[10px] text-muted-foreground mt-1">Excluding GST</p>
              </div>
            </div>

            <div className="quote-total-box p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Total Project Investment</p>
                  <p className="text-xs text-white/60 mt-1">Abacus & Vedic Math Education Platform — Full Build (Phase 1 + Phase 2)</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹8,00,000/-</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-2 text-white/90">₹9,44,000/- <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>

            {/* Payment & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <CreditCard className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">40 / 30 / 30</p>
                <p className="text-xs text-muted-foreground mt-1">Payment Split</p>
                <p className="text-[10px] text-muted-foreground">₹3.2L → ₹2.4L → ₹2.4L</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">8–10 Weeks</p>
                <p className="text-xs text-muted-foreground mt-1">Phase 1 Delivery</p>
                <p className="text-[10px] text-muted-foreground">Core platform go-live</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">4–6 Weeks</p>
                <p className="text-xs text-muted-foreground mt-1">Phase 2 Delivery</p>
                <p className="text-[10px] text-muted-foreground">After Phase 1 launch</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">30 Days</p>
                <p className="text-xs text-muted-foreground mt-1">Free Bug-Fix Support</p>
                <p className="text-[10px] text-muted-foreground">Per phase after go-live</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-primary" />
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Frontend", value: "Next.js / React" },
                  { label: "Backend", value: "Node.js / Express" },
                  { label: "Database", value: "PostgreSQL" },
                  { label: "Auth", value: "Role-Based Access Control" },
                  { label: "Payments", value: "Razorpay" },
                  { label: "Video", value: "Google Meet API" },
                  { label: "Hosting", value: "AWS / Vercel" },
                  { label: "Real-time", value: "WebSockets" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-5 mt-5">
              <h3 className="text-sm font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Everything Included in the Build
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: <Settings className="w-4 h-4" />, label: "Admin Dashboard" },
                  { icon: <UserCheck className="w-4 h-4" />, label: "Teacher Portal" },
                  { icon: <GraduationCap className="w-4 h-4" />, label: "Student Portal" },
                  { icon: <Users className="w-4 h-4" />, label: "Parent Dashboard" },
                  { icon: <Wallet className="w-4 h-4" />, label: "Wallet & Commission" },
                  { icon: <Layers className="w-4 h-4" />, label: "8-Level Subscription" },
                  { icon: <Calendar className="w-4 h-4" />, label: "Attendance Tracking" },
                  { icon: <CreditCard className="w-4 h-4" />, label: "Payment Gateway" },
                  { icon: <BookOpen className="w-4 h-4" />, label: "Interactive Exams" },
                  { icon: <Video className="w-4 h-4" />, label: "Online Classes" },
                  { icon: <Award className="w-4 h-4" />, label: "Teacher Training" },
                  { icon: <Shield className="w-4 h-4" />, label: "SSL & Security" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-green-700">
                    {item.icon}
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
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
              Zan Services respects client confidentiality. All business data, content, student information, and strategic plans shared during
              the engagement will be kept strictly confidential. Source code and all assets transferred to the client upon full payment.
              The platform will be built with data privacy best practices to protect student and parent information.
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
                  outlined in this proposal for the Abacus & Vedic Math Online Education Platform.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Mr. Chanchal Patra</p>
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

export default ChanchalPatraProposal;
