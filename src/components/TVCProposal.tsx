import { useRef, useState } from "react";
import { FileText, Mail, Phone, Globe, Download, Loader2, Settings, CheckCircle2, Film, Camera, Clapperboard, Palette, Music, MapPin, Users, Scissors, Monitor, Lightbulb, Car, Star } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";
import directorSignature from "@/assets/Screenshot from 2026-02-03 12-21-36.png";

const TVCProposal = () => {
  const documentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

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

  const handleDownloadPDF = async () => {
    if (!documentRef.current || isGenerating) return;
    setIsGenerating(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: 0,
        filename: `Zan_Services_Leisure_Audio_TVC_Production_${formatDate(currentDate).replace(/\//g, '-')}.pdf`,
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

  // ── National (India) Breakdown ──
  const nationalBreakdown = [
    { category: "Pre-Production", items: [
      { item: "Script Writing & Storyboarding", cost: "₹10,000" },
      { item: "Direction", cost: "₹50,000" },
      { item: "Assistant Direction", cost: "₹20,000" },
      { item: "Cinematography & Team", cost: "₹80,000" },
      { item: "Lights Setup", cost: "₹30,000" },
      { item: "Monitor & Gadgets", cost: "₹25,000" },
      { item: "Creative Head & Management", cost: "₹40,000" },
    ], subtotal: "₹2,55,000" },
    { category: "Production & Logistics", items: [
      { item: "Models & Talent", cost: "₹2,50,000" },
      { item: "Location, Car, Boat, Hotel, Stay, Food & Wages", cost: "₹2,00,000" },
      { item: "Lights Setup & Camera Equipment", cost: "₹80,000" },
    ], subtotal: "₹5,30,000" },
    { category: "Post-Production", items: [
      { item: "Editing (Stills & Video)", cost: "₹20,000" },
      { item: "Color Grading", cost: "₹30,000" },
      { item: "VFX & Motion Graphics", cost: "₹30,000" },
      { item: "Video Ad Edit", cost: "₹30,000" },
      { item: "Music, Mix, Mastering & Studio Recording", cost: "₹30,000" },
      { item: "Music Licensing & Composition", cost: "₹1,20,000" },
    ], subtotal: "₹2,60,000" },
  ];

  // ── International Shoot Breakdown ──
  const internationalBreakdown = [
    { category: "Pre-Production", items: [
      { item: "Script Writing & Storyboarding", cost: "₹10,000" },
      { item: "Direction", cost: "₹50,000" },
      { item: "Assistant Direction", cost: "₹20,000" },
      { item: "Cinematography & Team", cost: "₹80,000" },
      { item: "Lights", cost: "₹30,000" },
      { item: "Monitor & Gadgets", cost: "₹25,000" },
      { item: "Creative Head & Management", cost: "₹40,000" },
    ], subtotal: "₹2,55,000" },
    { category: "Production & Logistics", items: [
      { item: "International Location, Travel, Permits, Stay, Food & Wages", cost: "₹5,50,000" },
      { item: "Models & Talent (International)", cost: "₹3,50,000" },
      { item: "Lights Setup & Camera Equipment", cost: "₹80,000" },
    ], subtotal: "₹9,80,000" },
    { category: "Post-Production", items: [
      { item: "Editing (Stills & Video)", cost: "₹20,000" },
      { item: "Color Grading", cost: "₹30,000" },
      { item: "VFX & Motion Graphics", cost: "₹30,000" },
      { item: "Video Ad Edit", cost: "₹30,000" },
      { item: "Music, Mix, Mastering & Studio Recording", cost: "₹30,000" },
      { item: "Music Licensing & Composition", cost: "₹1,20,000" },
    ], subtotal: "₹2,60,000" },
  ];

  const cameraOptions = [
    { camera: "Sony FX3", spec: "Full-frame cinema camera with all lenses", rate: "₹40,000/day" },
    { camera: "Sony FX6", spec: "Full-frame cinema camera, professional grade", rate: "₹42,000/day" },
    { camera: "ARRI Alexa Mini", spec: "Industry-standard cinema camera", rate: "₹65,000/day" },
  ];

  const deliverables = [
    "Hero TVC (30-sec & 60-sec cuts)",
    "Social media cutdowns (15-sec Reels/Shorts)",
    "Behind-the-scenes content",
    "Product beauty shots (stills)",
    "Raw footage archive delivered to client",
    "Color-graded master files (4K)",
    "Music-licensed final masters",
  ];

  const termsAndConditions = [
    "This quotation is valid for 7 (seven) days from the date of issue.",
    "Payment terms: 100% advance payment before commencement of pre-production.",
    "All prices are exclusive of GST (18%). GST will be charged additionally.",
    "National (India) shoot total: ₹15,00,000 + GST. International shoot total: ₹18,00,000 + GST.",
    "Food, accommodation, travel, location permits, and all logistics costs are included in the quoted price.",
    "Camera equipment rental is charged per day and is included in the quoted totals. Camera selection (FX3/FX6/Alexa Mini) to be finalized during pre-production.",
    "Models and talent fees are included. Any additional talent requirements beyond the planned cast will be quoted separately.",
    "Up to 2 rounds of post-production revisions are included. Additional revisions will be charged at actuals.",
    "Music licensing and original composition costs are included. Any premium/exclusive licensing requests may incur additional charges.",
    "Client must provide product units for the shoot, brand guidelines, and any specific creative references in a timely manner.",
    "Shoot schedule and locations will be finalized during pre-production in consultation with the client.",
    "Weather-related delays for outdoor shoots may require schedule adjustments at no additional cost, subject to crew & location availability.",
    "All raw footage, final edits, and creative assets will be delivered to the client upon project completion.",
    "Either party may terminate the engagement with 15 days written notice. Fees for work completed up to termination date will be payable.",
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 print:py-0 print:px-0">
      <div ref={documentRef} className="quote-page rounded-lg overflow-hidden relative">
        {/* Background Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <img src={zanLogo} alt="" className="w-[600px] opacity-[0.04] select-none" />
        </div>

        {/* Header */}
        <div className="quote-header-light relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <img src={zanLogo} alt="Zan Services" className="h-14 mb-3" />
              <h1 className="text-3xl font-bold tracking-tight font-display text-quote-header-bg">Production Quotation</h1>
              <p className="text-muted-foreground mt-1 text-sm">TVC & Brand Film Production — Premium Audio Products</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Prepared For</h3>
                    <p className="text-lg font-semibold text-foreground">Leisure Audio</p>
                    <p className="text-muted-foreground text-sm mt-1">Premium Audio & Speaker Products</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Service Provider</h3>
                    <p className="text-lg font-semibold text-foreground">Zan Services</p>
                    <p className="text-muted-foreground text-xs mt-0.5 italic">Production Division</p>
                    <div className="text-sm text-muted-foreground mt-1 space-y-1">
                      <p className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 shrink-0" />
                        <span className="break-all">zanservices.com</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span>+91 82408 25490</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        <span className="break-all">operations@zanservices.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scope Overview */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Film className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Scope of Production</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end TVC & brand film production for <strong>Leisure Audio</strong> — from script to final delivery.
                Covering pre-production, principal photography, post-production, color grading, VFX, and music.
                All food, stay, travel, and logistics are <strong>included</strong> in the quoted price.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Clapperboard className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Pre-Production</p>
                  <p className="text-[10px] text-muted-foreground">Script, Direction, Planning</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Camera className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Production</p>
                  <p className="text-[10px] text-muted-foreground">Shoot, Crew, Talent</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Scissors className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Post-Production</p>
                  <p className="text-[10px] text-muted-foreground">Edit, Color, VFX</p>
                </div>
                <div className="quote-sla-card p-3 rounded-lg text-center">
                  <Music className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-foreground">Music & Audio</p>
                  <p className="text-[10px] text-muted-foreground">Score, Mix, Master</p>
                </div>
              </div>
            </div>
          </div>

          {/* Camera Options */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Camera className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Camera Equipment Options</h2>
              <span className="quote-badge whitespace-nowrap">Per Day Rental</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold">Camera</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Specification</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Rent/Day</th>
                  </tr>
                </thead>
                <tbody>
                  {cameraOptions.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground">
                        <div className="flex items-center gap-2">
                          {item.camera === "ARRI Alexa Mini" && <Star className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                          {item.camera}
                          {item.camera === "ARRI Alexa Mini" && <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">Premium</span>}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.spec}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-foreground">{item.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2 italic">
              Camera selection to be finalized during pre-production. Rental is included in the total quoted price.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* NATIONAL SHOOT — INDIA (GOA) */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">National Shoot — India</h2>
              <span className="quote-badge whitespace-nowrap">₹15,00,000 + GST</span>
            </div>

            {nationalBreakdown.map((section, sIdx) => (
              <div key={sIdx} className={`${sIdx > 0 ? "mt-4" : ""}`}>
                <div className="flex items-center gap-2 mb-2">
                  {sIdx === 0 && <Clapperboard className="w-4 h-4 text-primary" />}
                  {sIdx === 1 && <Camera className="w-4 h-4 text-primary" />}
                  {sIdx === 2 && <Scissors className="w-4 h-4 text-primary" />}
                  <h3 className="text-sm font-semibold text-foreground">{section.category}</h3>
                </div>
                <div className="overflow-hidden rounded-lg border border-quote-border">
                  <table className="w-full">
                    <thead>
                      <tr className="quote-table-header-green">
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">Item</th>
                        <th className="text-right py-2.5 px-4 text-xs font-semibold">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.items.map((item, iIdx) => (
                        <tr key={iIdx} className={iIdx % 2 === 1 ? "quote-table-row-stripe" : ""}>
                          <td className="py-2.5 px-4 text-sm text-muted-foreground">{item.item}</td>
                          <td className="py-2.5 px-4 text-sm font-medium text-foreground text-right">{item.cost}</td>
                        </tr>
                      ))}
                      <tr className="bg-primary/5 border-t border-quote-border">
                        <td className="py-2.5 px-4 text-sm font-semibold text-foreground">Subtotal</td>
                        <td className="py-2.5 px-4 text-sm font-bold text-primary text-right">{section.subtotal}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {/* National Total */}
            <div className="quote-total-box p-5 rounded-lg mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">National Shoot Total — India</p>
                  <p className="text-xs text-white/60 mt-1">All-inclusive: Food, stay, travel, location, models, crew, equipment & post-production</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹15,00,000/-</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-1 text-white/90">₹17,70,000/- <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* INTERNATIONAL SHOOT */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">International Shoot</h2>
              <span className="quote-badge whitespace-nowrap">₹18,00,000 + GST</span>
            </div>

            {internationalBreakdown.map((section, sIdx) => (
              <div key={sIdx} className={`${sIdx > 0 ? "mt-4" : ""}`}>
                <div className="flex items-center gap-2 mb-2">
                  {sIdx === 0 && <Clapperboard className="w-4 h-4 text-primary" />}
                  {sIdx === 1 && <Camera className="w-4 h-4 text-primary" />}
                  {sIdx === 2 && <Scissors className="w-4 h-4 text-primary" />}
                  <h3 className="text-sm font-semibold text-foreground">{section.category}</h3>
                </div>
                <div className="overflow-hidden rounded-lg border border-quote-border">
                  <table className="w-full">
                    <thead>
                      <tr className="quote-table-header-green">
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">Item</th>
                        <th className="text-right py-2.5 px-4 text-xs font-semibold">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.items.map((item, iIdx) => (
                        <tr key={iIdx} className={iIdx % 2 === 1 ? "quote-table-row-stripe" : ""}>
                          <td className="py-2.5 px-4 text-sm text-muted-foreground">{item.item}</td>
                          <td className="py-2.5 px-4 text-sm font-medium text-foreground text-right">{item.cost}</td>
                        </tr>
                      ))}
                      <tr className="bg-primary/5 border-t border-quote-border">
                        <td className="py-2.5 px-4 text-sm font-semibold text-foreground">Subtotal</td>
                        <td className="py-2.5 px-4 text-sm font-bold text-primary text-right">{section.subtotal}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {/* International Total */}
            <div className="quote-total-box p-5 rounded-lg mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">International Shoot Total</p>
                  <p className="text-xs text-white/60 mt-1">All-inclusive: International travel, permits, stay, food, models, crew, equipment & post-production</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">₹18,00,000/-</p>
                  <p className="text-white/70 text-sm mt-1">Excluding GST (18%)</p>
                  <p className="text-lg font-semibold mt-1 text-white/90">₹21,24,000/- <span className="text-sm font-normal text-white/70">Incl. GST</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Side-by-side Comparison */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Cost Comparison</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-quote-border">
              <table className="w-full">
                <thead>
                  <tr className="quote-table-header">
                    <th className="text-left py-3 px-4 text-sm font-semibold">Component</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold">National (India)</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold">International</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-sm text-muted-foreground flex items-center gap-2"><Clapperboard className="w-3.5 h-3.5 text-primary" /> Pre-Production</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground text-right">₹2,55,000</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground text-right">₹2,55,000</td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-sm text-muted-foreground flex items-center gap-2"><Camera className="w-3.5 h-3.5 text-primary" /> Production & Logistics</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground text-right">₹5,30,000</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground text-right">₹9,80,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-muted-foreground flex items-center gap-2"><Scissors className="w-3.5 h-3.5 text-primary" /> Post-Production</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground text-right">₹2,60,000</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground text-right">₹2,60,000</td>
                  </tr>
                  <tr className="quote-table-row-stripe">
                    <td className="py-3 px-4 text-sm text-muted-foreground flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Buffer & Contingency</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground text-right">₹4,55,000</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground text-right">₹3,05,000</td>
                  </tr>
                  <tr className="bg-primary/5 border-t-2 border-primary/20">
                    <td className="py-3 px-4 text-sm font-bold text-foreground">Total (Excl. GST)</td>
                    <td className="py-3 px-4 text-sm font-bold text-primary text-right">₹15,00,000</td>
                    <td className="py-3 px-4 text-sm font-bold text-primary text-right">₹18,00,000</td>
                  </tr>
                  <tr className="bg-primary/10">
                    <td className="py-3 px-4 text-sm font-bold text-foreground">Total (Incl. GST @ 18%)</td>
                    <td className="py-3 px-4 text-sm font-bold text-foreground text-right">₹17,70,000</td>
                    <td className="py-3 px-4 text-sm font-bold text-foreground text-right">₹21,24,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Deliverables */}
          <div className="quote-section">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Film className="w-5 h-5 text-primary shrink-0" />
              <h2 className="text-lg font-semibold text-foreground">Deliverables</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-2 quote-sla-card p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included callout */}
          <div className="quote-section">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="text-sm font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Everything Included in the Price
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: <Car className="w-4 h-4" />, label: "Travel & Transport" },
                  { icon: <MapPin className="w-4 h-4" />, label: "Hotel & Stay" },
                  { icon: <Users className="w-4 h-4" />, label: "Food & Wages" },
                  { icon: <Lightbulb className="w-4 h-4" />, label: "Equipment & Lights" },
                  { icon: <Camera className="w-4 h-4" />, label: "Camera Rental" },
                  { icon: <Users className="w-4 h-4" />, label: "Models & Talent" },
                  { icon: <Music className="w-4 h-4" />, label: "Music & Licensing" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Post-Production" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-green-700">
                    {item.icon}
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                ))}
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
              Zan Services respects client confidentiality. All business data, product pricing, creative concepts,
              production plans, and strategic information shared during the engagement will be kept strictly
              confidential. No client data will be shared with third parties without prior consent. All raw footage,
              final edits, and creative assets will be delivered to and remain with the client.
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

            {/* Director Signature */}
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

          {/* Acceptance Section */}
          <div className="mt-8 pt-6 border-t border-quote-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  By signing below, the client acknowledges and accepts the terms, pricing, scope, and deliverables
                  outlined in this quotation for TVC & Brand Film Production for Leisure Audio — including the
                  production breakdown, payment terms, and delivery schedule.
                </p>
              </div>
              <div className="text-right">
                <div className="h-12 mb-1"></div>
                <div className="quote-signature-line ml-auto mb-2"></div>
                <p className="text-sm font-semibold text-foreground">Client Signature</p>
                <p className="text-sm text-muted-foreground">Leisure Audio</p>
                <p className="text-xs text-muted-foreground mt-1">Date: ____/____/________</p>
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

      {/* Download Buttons */}
      <div className="max-w-4xl mx-auto mt-6 flex justify-center gap-4 no-print">
        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-70"
        >
          {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
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

export default TVCProposal;
