import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, CheckCircle2, Users, ArrowRight, Rocket, CreditCard, Brain, Clock, Shield, UserCheck, Wallet, BarChart3, Monitor, Award, Layers, Settings, MapPin, Car, Bike, Bus, Navigation, Star, Bell, CreditCard as Payment } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const KushChandProposal = () => {
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
        filename: `Zan_Services_KushChand_RideBooking_${formatDate(currentDate).replace(/\//g, '-')}.pdf`,
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
    { role: "Super Admin", icon: <Settings className="w-4 h-4 text-red-500" />, desc: "Full platform control — manage drivers, riders, fleet, pricing, commissions, support, analytics, and all operations." },
    { role: "Driver / Operator", icon: <UserCheck className="w-4 h-4 text-blue-500" />, desc: "Register on the platform, accept ride requests, manage availability, track earnings & payouts, rate passengers." },
    { role: "Passenger / User", icon: <Users className="w-4 h-4 text-green-500" />, desc: "Book cabs, bikes, or buses. Live tracking, fare estimation, multiple payment options, ride history, rate drivers." },
    { role: "Bus Operator (Partner)", icon: <Bus className="w-4 h-4 text-purple-500" />, desc: "List bus routes & schedules, manage seat inventory, set pricing, track bookings & revenue. RedBus-style partner model." },
  ];

  const phase1Modules = [
    { module: "Admin Dashboard", description: "Super admin panel — driver/user management, fleet management, ride analytics, pricing configuration, commission setup, support ticket management." },
    { module: "User App (Passenger)", description: "Passenger-facing app — signup/login, book cab/bike/bus, pickup & drop selection via map, fare estimation, live driver tracking, ride history, ratings & reviews." },
    { module: "Driver App", description: "Driver-facing app — registration & verification, accept/reject rides, navigation to pickup, earnings dashboard, availability toggle, ride history." },
    { module: "Cab & Bike Booking Engine", description: "Real-time ride matching — nearest driver allocation, surge pricing logic, ETA calculation, fare computation based on distance & time, ride categories (Mini, Sedan, SUV, Bike)." },
    { module: "Bus Booking System", description: "RedBus-style bus booking — route search, seat selection with layout view, operator listings, schedule management, ticket generation with QR code, cancellation & refund flow." },
    { module: "Parcel Delivery Services", description: "Dunzo/Porter-style parcel booking — sender/receiver details, parcel category & weight-based pricing, pickup & drop scheduling, real-time delivery tracking, delivery partner assignment & management." },
    { module: "Intercity Cab Booking", description: "City-to-city ride booking — intercity route management, one-way & round-trip options, scheduled/advance bookings, distance-based flat-rate pricing, driver allocation for long-distance rides." },
    { module: "Multi-Stop / Edit Stops", description: "Add or edit stops mid-ride — passengers can add multiple waypoints during a trip, dynamic fare recalculation at each stop, driver notified in real-time, route re-optimization via maps." },
    { module: "Payment Gateway Integration", description: "Razorpay/Stripe integration — wallet top-up, ride payments, bus ticket payments, driver payouts, refund processing, transaction history." },
    { module: "Live Tracking & Maps", description: "Google Maps / Mapbox integration — real-time driver location, route visualization, ETA updates, pickup/drop pin selection, distance calculation." },
    { module: "Notifications System", description: "Push notifications & SMS — ride confirmations, driver arrival alerts, payment receipts, booking reminders, promotional notifications." },
    { module: "Ratings & Reviews", description: "Two-way rating system — passengers rate drivers, drivers rate passengers. Average ratings, review moderation by admin." },
    { module: "UI/UX Design", description: "Complete platform design — wireframes and visual design for Admin Panel, Passenger App, Driver App, and Bus Booking interface. Mobile-first responsive design." },
    { module: "Deployment & Infrastructure", description: "Cloud deployment (AWS), database setup, SSL, domain configuration, CI/CD pipeline, load balancing, go-live." },
  ];

  const bookingFlow = [
    { step: "1", title: "User opens app & selects ride type", desc: "Passenger chooses Cab, Bike, or Bus. For cab/bike — enters pickup & drop. For bus — searches route & date." },
    { step: "2", title: "Fare estimation & vehicle selection", desc: "For cab/bike: shows fare estimate, ride categories (Mini, Sedan, SUV, Bike) with pricing. For bus: shows available operators, seats & pricing." },
    { step: "3", title: "Booking confirmed", desc: "Cab/Bike: nearest driver matched & assigned. Bus: seat selected, payment processed, e-ticket with QR generated." },
    { step: "4", title: "Live tracking & ride", desc: "Cab/Bike: real-time driver tracking on map, ETA updates, driver contact. Bus: boarding reminder, live bus tracking (if enabled)." },
    { step: "5", title: "Payment & completion", desc: "Auto-fare calculation, payment via wallet/UPI/card. Receipt generated. Commission auto-deducted for driver/operator payout." },
    { step: "6", title: "Rate & review", desc: "Both parties rate each other. Feedback stored for quality control. Repeat booking suggestions shown." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment structure: 50% advance on kickoff, 30% on mid-milestone delivery, 20% on final delivery & go-live. All payments are exclusive of GST (18%).",
    "The client will receive staging/preview builds at each milestone for review and feedback.",
    "Up to 2 rounds of design revisions are included. Additional revisions will be charged at ₹5,000 per round.",
    "Client must provide: brand guidelines, logo, business registration documents (for payment gateway), and any specific route/pricing data for bus operations.",
    "Payment gateway (Razorpay/Stripe) merchant account setup is the client's responsibility. Zan Services will handle technical integration.",
    "Google Maps API / Mapbox usage charges are borne by the client. Zan Services will optimize API calls to minimize costs.",
    "SMS & push notification service costs (e.g., Firebase, Twilio) are borne by the client post-launch.",
    "Post-launch support: 30 days of free bug-fix support after go-live.",
    "Source code and all assets will be transferred to the client upon full payment.",
    "Hosting & infrastructure costs (estimated ₹5,000–₹15,000/month depending on traffic) are borne by the client post-launch.",
    "App store submissions (Google Play ₹2,100 one-time, Apple Developer $99/year) are the client's responsibility. Zan Services will handle the build & submission process.",
    "The platform will be built using microservices architecture for scalability and independent service deployment.",
    "A contingency fund may be applicable depending on final-stage complexity, third-party API changes, infrastructure scaling, and additional scope. This will be mutually discussed and agreed upon.",
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
              <p className="text-muted-foreground mt-1 text-sm">Multi-Modal Ride Booking Platform — Cab, Bike, Bus, Parcel & Intercity</p>
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
                    <p className="text-lg font-semibold text-foreground">Mr. Kush Chand</p>
                    <p className="text-muted-foreground text-sm mt-1">Ride Booking & Transportation</p>
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
                A comprehensive <strong>multi-modal ride booking platform</strong> enabling users to book <strong>Cabs, Bikes, and Buses</strong> from a single application.
                The platform combines <strong>Ola/Uber-style cab & bike booking</strong> with real-time driver matching and live tracking,
                alongside a <strong>RedBus-style bus booking system</strong> with route search, seat selection, and operator partnerships.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Built with a multi-role architecture — <strong>Admin, Drivers, Passengers, and Bus Operators</strong> — with integrated payments, commission management, and analytics.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Car className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Cab Booking</p>
                  <p className="text-[10px] text-muted-foreground">Mini, Sedan, SUV</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Bike className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Bike Booking</p>
                  <p className="text-[10px] text-muted-foreground">Quick & affordable rides</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Bus className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Bus Booking</p>
                  <p className="text-[10px] text-muted-foreground">RedBus-style seat selection</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Navigation className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Live Tracking</p>
                  <p className="text-[10px] text-muted-foreground">Real-time GPS on map</p>
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

          {/* Booking Flow */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <ArrowRight className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">How It Works — Booking Flow</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {bookingFlow.map((item, index) => (
                <div key={index} className="quote-sla-card p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">{item.step}</span>
                    <p className="text-xs font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Service Types */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-3">
              <h4 className="text-xs font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" /> Ride Categories & Services
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="text-xs text-blue-700">
                  <p className="font-semibold mb-1 flex items-center gap-1"><Car className="w-3 h-3" /> Cab Booking</p>
                  <p>Mini, Sedan, SUV categories. Real-time driver matching, fare estimation, surge pricing, live tracking, in-app navigation.</p>
                </div>
                <div className="text-xs text-blue-700">
                  <p className="font-semibold mb-1 flex items-center gap-1"><Bike className="w-3 h-3" /> Bike Booking</p>
                  <p>Quick point-to-point rides. Lightweight & affordable. Same real-time matching and tracking as cabs.</p>
                </div>
                <div className="text-xs text-blue-700">
                  <p className="font-semibold mb-1 flex items-center gap-1"><Bus className="w-3 h-3" /> Bus Booking</p>
                  <p>Route search, operator listings, seat layout selection, e-ticket with QR, cancellation & refund, operator partner portal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Rocket className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Scope of Work</h2>
              <span className="quote-badge whitespace-nowrap">Full Build</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Complete end-to-end development — admin panel, passenger app, driver app, bus booking system, payments, live tracking, and deployment.</p>
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

          {/* Total Cost */}
          <div className="my-8">
            <div className="quote-total-box p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Total Project Investment</p>
                  <p className="text-xs text-white/60 mt-1">Multi-Modal Ride Booking Platform — Cab, Bike, Bus, Parcel & Intercity — Microservices Architecture</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹5,08,475/-</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-2 text-white/90">₹6,00,000/- <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>

            {/* Payment & Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <CreditCard className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">50 / 30 / 20</p>
                <p className="text-xs text-muted-foreground mt-1">Payment Split</p>
                <p className="text-[10px] text-muted-foreground">₹3.00L → ₹1.80L → ₹1.20L</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">30 Days</p>
                <p className="text-xs text-muted-foreground mt-1">Free Bug-Fix Support</p>
                <p className="text-[10px] text-muted-foreground">After go-live</p>
              </div>
              <div className="quote-sla-card p-4 rounded-lg text-center">
                <Monitor className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">Web + Mobile</p>
                <p className="text-xs text-muted-foreground mt-1">Platform Coverage</p>
                <p className="text-[10px] text-muted-foreground">Admin web + responsive apps</p>
              </div>
            </div>

            {/* Microservices Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-5">
              <div className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-2">Microservices Architecture</p>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    The platform will be built using a <strong>microservices architecture</strong> — each core service (ride matching, payments, notifications, parcel, bus booking, intercity) runs as an independent, scalable module. This ensures high availability, easier maintenance, and the ability to scale individual services based on demand.
                  </p>
                </div>
              </div>
            </div>

            {/* Contingency Fund Note */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-2">Contingency Fund</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    A <strong>contingency fund</strong> may be applicable apart from the quoted investment, depending on the final project scope, complexity encountered during the last stages of development, third-party API changes, infrastructure scaling requirements, and any additional feature requests during the build. The contingency amount will be discussed and mutually agreed upon based on project progress and actual requirements.
                  </p>
                  <p className="text-xs text-amber-700 leading-relaxed mt-2">
                    <strong>Note:</strong> All recurring costs are handled by the client — including third-party API charges (Google Maps, payment gateways, SMS/notification services), cloud hosting & infrastructure, app store fees, and any other non-development operational costs.
                  </p>
                </div>
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
                  { label: "Frontend", value: "Next.js / React Native" },
                  { label: "Backend", value: "Node.js / Express" },
                  { label: "Database", value: "PostgreSQL + Redis" },
                  { label: "Maps", value: "Google Maps / Mapbox" },
                  { label: "Payments", value: "Razorpay" },
                  { label: "Real-time", value: "WebSockets / Socket.io" },
                  { label: "Notifications", value: "Firebase + Twilio" },
                  { label: "Hosting", value: "AWS" },
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
                  { icon: <Users className="w-4 h-4" />, label: "Passenger App" },
                  { icon: <UserCheck className="w-4 h-4" />, label: "Driver App" },
                  { icon: <Car className="w-4 h-4" />, label: "Cab Booking" },
                  { icon: <Bike className="w-4 h-4" />, label: "Bike Booking" },
                  { icon: <Bus className="w-4 h-4" />, label: "Bus Booking" },
                  { icon: <Navigation className="w-4 h-4" />, label: "Live GPS Tracking" },
                  { icon: <CreditCard className="w-4 h-4" />, label: "Payment Gateway" },
                  { icon: <Wallet className="w-4 h-4" />, label: "Wallet System" },
                  { icon: <Star className="w-4 h-4" />, label: "Ratings & Reviews" },
                  { icon: <Bell className="w-4 h-4" />, label: "Push Notifications" },
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
              Zan Services respects client confidentiality. All business data, user information, and strategic plans shared during
              the engagement will be kept strictly confidential. Source code and all assets transferred to the client upon full payment.
              The platform will be built with data privacy best practices to protect user and driver information.
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
                  outlined in this proposal for the Multi-Modal Ride Booking Platform.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Mr. Kush Chand</p>
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

export default KushChandProposal;
