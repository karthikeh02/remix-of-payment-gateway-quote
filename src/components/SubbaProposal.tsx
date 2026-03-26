import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, CheckCircle2, Settings, Shield, CreditCard, Building, BarChart3, AlertTriangle, Layout } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const SubbaProposal = () => {
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
        filename: `Zan_Services_Subba_Property_Listing_Quotation_${formatDate(currentDate).replace(/\//g, "-")}.pdf`,
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

  const websiteServices = [
    { service: "Property Listing Website", description: "Professionally designed, fully responsive website showcasing all your flats/properties — with high-quality images, amenities, location details, pricing, availability calendar & booking CTAs that redirect guests to your listings on Airbnb, MakeMyTrip, Booking.com & other platforms." },
    { service: "Property Management Dashboard", description: "Admin panel to add, edit & manage property listings — upload photos, update pricing, manage availability, track bookings across platforms & control what's visible on the website. Single dashboard to oversee all your properties." },
    { service: "Multi-Platform Booking Integration", description: "Each property page features 'Book on Airbnb', 'Book on MakeMyTrip', 'Book on Booking.com' etc. CTA buttons — directing guests to the respective platform listing for seamless booking." },
    { service: "Mobile-Responsive Design", description: "Optimized for mobile, tablet & desktop. Fast-loading pages, image galleries, property grid layout & smooth browsing experience tailored for property/vacation rental discovery." },
    { service: "SEO-Ready Structure", description: "Clean URLs, meta tags, image alt tags, sitemap, schema markup for vacation rentals & Google-indexable property pages to drive organic traffic and direct bookings." },
    { service: "Contact & Enquiry System", description: "Direct enquiry form, WhatsApp CTA & phone call button on each property page for guests who want to enquire or book directly." },
  ];

  const listingPlatforms = [
    { platform: "Airbnb", description: "Global leader in vacation rentals & short-term stays. Account setup, property profile creation, professional listing with optimized title, description, amenities, house rules, pricing & high-quality photo upload." },
    { platform: "MakeMyTrip", description: "India's largest travel platform. Property registration, listing setup with room types, tariff plans, amenities, photos, cancellation policies & availability configuration." },
    { platform: "Booking.com", description: "World's largest accommodation booking platform. Property registration, listing optimization, room/unit setup, rate plans, availability calendar, guest policies & photo gallery." },
    { platform: "Ixigo", description: "Popular Indian travel & hotel booking platform. Property onboarding, listing creation with photos, pricing, amenities & availability sync." },
    { platform: "Goibibo", description: "Leading Indian travel platform (MakeMyTrip group). Property listing setup, rate configuration, room inventory, photos & policy setup." },
    { platform: "Agoda", description: "Asia-focused booking platform with strong international reach. Property registration, listing creation, competitive pricing setup & photo optimization." },
    { platform: "TripAdvisor (Rentals)", description: "Global travel review & booking platform. Vacation rental listing setup with professional descriptions, photos, pricing & availability." },
  ];

  const managementServices = [
    { service: "Pricing & Rate Management", description: "Regular pricing updates across all platforms based on demand, season, local events & competition — ensuring optimal occupancy and revenue." },
    { service: "Availability & Calendar Sync", description: "Keeping availability calendars in sync across all platforms to avoid double bookings and ensure real-time accuracy." },
    { service: "Guest Communication", description: "Responding to guest enquiries, pre-booking questions, check-in instructions & post-stay follow-ups across all platforms." },
    { service: "Review Management", description: "Monitoring & responding to guest reviews on all platforms — maintaining high ratings and addressing feedback professionally." },
    { service: "Listing Optimization", description: "Ongoing optimization of listing titles, descriptions, photos & amenities based on platform algorithm changes, search trends & competitor analysis." },
    { service: "Performance Reporting", description: "Monthly reports covering occupancy rates, revenue, booking trends, guest ratings, platform-wise performance & actionable insights." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment terms: Website — 50% advance to begin work, remaining 50% upon completion & go-live. Platform listing — 100% advance before listing work begins. Monthly management — 100% in advance before each month.",
    "Platform listing setup is a one-time service. It includes account creation, property onboarding & listing creation on all specified platforms.",
    "Platform commissions, service fees & subscription charges (if any) levied by Airbnb, MakeMyTrip, Booking.com, Ixigo, Goibibo, Agoda, TripAdvisor etc. are NOT included and will be borne by the client directly.",
    "Client must provide high-quality property photos, accurate descriptions, pricing, amenity details, house rules & all required documentation for platform registration.",
    "Monthly listing management is a recurring service. Minimum commitment: 3 months recommended for consistent results.",
    "Up to 2 rounds of design revisions are included for the website. Additional revisions will be charged separately.",
    "Estimated delivery: Website — 2 weeks. Platform listings — 1 week (after receiving all property details & documents).",
    "Post-launch support: 15 days of bug-fix & minor adjustment support included for the website after go-live.",
    "Domain & hosting charges are separate and borne by the client. Zan Services will assist in setup.",
    "GST @ 18% is applicable on all charges and will be charged additionally.",
    "All source code, website credentials, platform login access & listing ownership will remain with the client.",
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
              <p className="text-muted-foreground mt-1 text-sm">Property Listing Website + Multi-Platform Listing Setup + Listing Management</p>
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
                    <p className="text-lg font-semibold text-foreground">Subba</p>
                    <p className="text-muted-foreground text-sm mt-1">Property / Vacation Rental Business</p>
                    <p className="text-muted-foreground text-sm mt-1">Hyderabad, Telangana</p>
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

          {/* Project Overview */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Project Overview</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end property listing solution for <strong>Subba</strong> — covering a <strong>custom property listing website</strong> that showcases all flats/properties with booking links to major travel platforms, <strong>multi-platform listing setup</strong> on Airbnb, MakeMyTrip, Booking.com, Ixigo, Goibibo, Agoda & TripAdvisor, and <strong>ongoing listing management</strong> to maximize occupancy, revenue & guest satisfaction.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">How It Works</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">We List</p>
                <p className="text-[10px] text-muted-foreground mt-1">Properties on 7+ platforms</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Website Showcases</p>
                <p className="text-[10px] text-muted-foreground mt-1">All properties in one place</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">Guests Book</p>
                <p className="text-[10px] text-muted-foreground mt-1">Via Airbnb, MakeMyTrip etc.</p>
              </div>
              <div className="quote-sla-card p-3 rounded-lg text-center">
                <p className="text-sm font-bold text-foreground">We Manage</p>
                <p className="text-[10px] text-muted-foreground mt-1">Pricing, reviews & bookings</p>
              </div>
            </div>
          </div>

          {/* Part A — Property Listing Website */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Building className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Part A — Property Listing Website + Dashboard</h2>
              <span className="quote-badge whitespace-nowrap">{"\u20b9"}45,000 + GST (One-Time)</span>
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
                  {websiteServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Part B — Platform Listing Setup */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Layout className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Part B — Multi-Platform Listing Setup</h2>
              <span className="quote-badge whitespace-nowrap">{"\u20b9"}20,000 + GST (One-Time)</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header-green">
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[25%]">Platform</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Listing Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {listingPlatforms.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.platform}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Platform fees warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-4">
              <h3 className="text-sm font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Platform Commissions & Fees — Client-Borne (NOT Included)
              </h3>
              <p className="text-xs text-amber-700 leading-relaxed">
                Each platform charges its own commission or service fee on bookings (e.g., Airbnb charges 3% host fee, Booking.com charges 15–20% commission, MakeMyTrip charges 15–25% commission, etc.). These fees are paid directly to the respective platforms and are <strong>NOT included</strong> in Zan Services' charges. Our fee covers only the listing setup and management — platform commissions are borne entirely by the client.
              </p>
            </div>
          </div>

          {/* Part C — Monthly Listing Management */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Part C — Monthly Listing Management</h2>
              <span className="quote-badge whitespace-nowrap">{"\u20b9"}15,000/month + GST (Recurring)</span>
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
                  {managementServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.service}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground align-top leading-relaxed">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                  <p className="text-white/80 text-sm uppercase tracking-wider">TOTAL UPFRONT COST</p>
                  <p className="text-xs text-white/60 mt-1">Website + Platform Listing Setup + First Month Management</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">{"\u20b9"}80,000/- <span className="text-sm font-normal text-white/70">+ GST (18%)</span></p>
                  <p className="text-lg font-semibold mt-2 text-white/90">{"\u20b9"}94,400/- <span className="text-sm font-normal text-white/70">Including GST</span></p>
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-card border border-quote-border rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary">{"\u20b9"}45,000</p>
                <p className="text-xs font-semibold text-foreground mt-1">Website + Dashboard</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">One-Time + GST</p>
              </div>
              <div className="bg-card border border-quote-border rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary">{"\u20b9"}20,000</p>
                <p className="text-xs font-semibold text-foreground mt-1">Platform Listing Setup</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">One-Time + GST</p>
              </div>
              <div className="bg-card border border-quote-border rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary">{"\u20b9"}15,000/mo</p>
                <p className="text-xs font-semibold text-foreground mt-1">Listing Management</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Recurring Monthly + GST</p>
              </div>
            </div>

            {/* Investment table */}
            <div className="overflow-hidden rounded-lg border border-quote-border mt-5">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold w-[35%]">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Property Listing Website + Management Dashboard</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">{"\u20b9"}45,000/- + GST (One-Time)</td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Multi-Platform Listing Setup (7 Platforms)</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">{"\u20b9"}20,000/- + GST (One-Time)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Monthly Listing Management</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">{"\u20b9"}15,000/- + GST / Month</td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Platform Commissions & Fees</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">Client-Borne | Separate</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">Domain & Hosting</td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">Client-Borne | Separate</td>
                  </tr>
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
                  <span>Website development: 50% advance ({"\u20b9"}22,500 + GST) to begin, 50% on completion & go-live.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground shrink-0">2.</span>
                  <span>Platform listing setup: 100% advance ({"\u20b9"}20,000 + GST) before listing work begins.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground shrink-0">3.</span>
                  <span>Monthly listing management: {"\u20b9"}15,000/month + GST — billed 100% in advance before each month.</span>
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
              Zan Services respects client confidentiality. All property details, business data, platform credentials, pricing strategies, guest information, and brand assets shared during the engagement will be kept strictly confidential. No client data will be shared with third parties without prior consent. All website source code, platform account credentials, listing ownership & hosting access will remain with the client at all times.
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
                  outlined in this quotation for Property Listing Website, Multi-Platform Listing Setup & Monthly Listing Management Services.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Subba</p>
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

export default SubbaProposal;
