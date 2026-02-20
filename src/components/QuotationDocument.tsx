import { FileText, Mail, Phone, Globe, Search, Share2, BarChart3, Target, TrendingUp, Eye, Users, Megaphone, Shield, Settings } from "lucide-react";
import zanLogo from "@/assets/zan-logo.png";

const QuotationDocument = () => {
  const currentDate = new Date();
  const validUntilDate = new Date(currentDate);
  validUntilDate.setDate(validUntilDate.getDate() + 3);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const seoServices = [
    { feature: "Website SEO Audit & Analysis", description: "Complete technical audit of the website covering site speed, mobile-friendliness, crawl errors, indexing issues, and on-page optimization gaps." },
    { feature: "Keyword Research & Strategy", description: "In-depth keyword research targeting NGO, healthcare, foundation, and social cause-related terms. Long-tail and local keyword mapping for Thane & Maharashtra." },
    { feature: "On-Page SEO Optimization", description: "Title tags, meta descriptions, header tags, internal linking, image alt tags, schema markup, and content optimization for all key pages." },
    { feature: "Off-Page SEO & Link Building", description: "Quality backlink building through directory submissions, guest posts, social bookmarking, and outreach to relevant NGO/healthcare platforms." },
    { feature: "Local SEO (Google My Business)", description: "Google Business Profile optimization, local citations, NAP consistency, review management, and local map pack ranking strategy." },
    { feature: "Monthly SEO Reporting", description: "Detailed monthly reports with keyword rankings, organic traffic growth, backlink profile, and actionable insights for continuous improvement." },
  ];

  const smoServices = [
    { feature: "Social Media Strategy & Planning", description: "Customized content calendar and posting strategy for Facebook, Instagram, and LinkedIn tailored to Angel Care Foundation's mission and audience." },
    { feature: "Content Creation & Posting", description: "Engaging posts including graphics, reels, stories, and carousels highlighting foundation activities, events, success stories, and awareness campaigns." },
    { feature: "Community Management", description: "Active engagement with followers — responding to comments, messages, and building a supportive online community around the foundation's cause." },
    { feature: "Hashtag & Trend Strategy", description: "Relevant hashtag research, trending topic leveraging, and strategic use of awareness days/events to maximize organic reach." },
    { feature: "Monthly SMO Reporting", description: "Performance reports covering reach, engagement, follower growth, top-performing content, and recommendations for the next month." },
  ];

  const googleAdsServices = [
    { feature: "Google Ads Campaign Setup", description: "Search & Display campaign setup targeting relevant keywords related to healthcare, NGO donations, volunteering, and social causes across target regions." },
    { feature: "Keyword Targeting & Bid Management", description: "Strategic keyword selection, negative keyword filtering, bid optimization, and budget allocation to maximize ROI and lead quality." },
    { feature: "Ad Copy Creation", description: "Compelling ad copies with strong CTAs, sitelink extensions, callout extensions, and structured snippets to improve click-through rates." },
    { feature: "Landing Page Recommendations", description: "Suggestions for high-converting landing pages aligned with ad campaigns to improve quality score and conversion rates." },
    { feature: "Campaign Monitoring & Optimization", description: "Daily monitoring, A/B testing of ads, bid adjustments, and continuous optimization to reduce cost-per-click and improve conversions." },
    { feature: "Monthly Google Ads Reporting", description: "Detailed reports with impressions, clicks, CTR, CPC, conversions, and spend analysis with actionable recommendations." },
  ];

  const metaAdsServices = [
    { feature: "Meta Ads Campaign Setup", description: "Facebook & Instagram awareness campaigns designed to spread Angel Care Foundation's mission, events, and impact stories to a wider audience." },
    { feature: "Audience Targeting & Segmentation", description: "Custom audience creation based on demographics, interests, behaviors, and lookalike audiences to reach potential supporters and donors." },
    { feature: "Creative Ad Design", description: "Eye-catching image and video ads optimized for Facebook & Instagram feeds, stories, and reels to drive maximum awareness and engagement." },
    { feature: "Campaign Optimization", description: "Continuous A/B testing of creatives, audiences, and placements. Budget optimization to maximize reach and awareness at the lowest cost." },
    { feature: "Monthly Meta Ads Reporting", description: "Performance reports covering reach, impressions, engagement, cost-per-result, and audience insights with strategic recommendations." },
  ];

  const extraServices = [
    { feature: "Google Analytics & Tag Setup", description: "Complete Google Analytics 4 (GA4) and Google Tag Manager setup for tracking website visitors, conversions, and campaign performance." },
    { feature: "Competitor Analysis", description: "Monthly competitor benchmarking to identify gaps, opportunities, and strategies to stay ahead in the digital space." },
    { feature: "Reputation Management", description: "Online reputation monitoring, review response strategy, and brand mention tracking across search and social platforms." },
    { feature: "Email Campaign Support", description: "Support for monthly newsletters or email campaigns to donors, volunteers, and supporters (content & design assistance)." },
  ];

  const termsAndConditions = [
    "This quotation is valid for 3 (three) days from the date of issue.",
    "Payment terms: 100% advance before commencement of services each month.",
    "Service charges are exclusive of GST (18%). GST will be charged additionally on the service fee.",
    "Ad spend (Google Ads & Meta Ads) is NOT included in the service charges and must be paid separately by the client directly to the respective platforms or through us.",
    "Estimated monthly ad spend: Google Ads ₹800/day (~₹24,000/month) + Meta Ads ₹200/day (~₹6,000/month). Actual spend may vary based on campaign performance.",
    "Minimum commitment period: 3 months recommended for meaningful SEO & marketing results.",
    "All creative content, ad copies, and social media posts will be shared for client approval before publishing.",
    "Access to website backend, Google Analytics, Google Ads account, Meta Business Suite, and social media accounts must be provided by the client.",
    "Results from SEO are organic and may take 2–4 months to show significant ranking improvements.",
    "Zan Services reserves the right to recommend budget adjustments based on campaign performance and market conditions.",
    "Any additional services beyond the scope mentioned in this quotation will be charged separately after mutual agreement.",
    "Either party may terminate the engagement with 15 days written notice. No refund on services already rendered.",
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
              <p className="text-muted-foreground mt-1 text-sm">Digital Marketing Services — SEO, SMO, Google Ads & Meta Ads</p>
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
                    <p className="text-lg font-semibold text-foreground">Angel Care Foundation</p>
                    <p className="text-muted-foreground text-sm mt-1">Thane, Maharashtra</p>
                    <p className="text-muted-foreground text-sm">NGO / Healthcare Foundation</p>
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

          {/* SEO Services */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Search Engine Optimization (SEO)</h2>
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
                  {seoServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary shrink-0" />
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

          {/* SMO Services */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Social Media Optimization (SMO)</h2>
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
                  {smoServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary shrink-0" />
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

          {/* Google Ads Services */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Google Ads Management</h2>
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
                  {googleAdsServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-primary shrink-0" />
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

          {/* Meta Ads Services */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Meta Ads (Facebook & Instagram) — Awareness Campaigns</h2>
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
                  {metaAdsServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">
                        <div className="flex items-center gap-2">
                          <Megaphone className="w-4 h-4 text-primary shrink-0" />
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

          {/* Extra Services */}
          <div className="quote-section">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Additional Services (Included)</h2>
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
                  {extraServices.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "quote-table-row-stripe" : ""}>
                      <td className="py-3 px-4 text-sm font-medium text-foreground align-top">{item.feature}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing - No breakdown */}
          <div className="my-8 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Monthly Service Charges</h2>
            </div>

            {/* Total */}
            <div className="quote-total-box p-5 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Total Monthly Service Fee</p>
                  <p className="text-xs text-white/60 mt-1">SEO • SMO • Google Ads Management • Meta Ads Management</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹25,000/month</p>
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
                    GST @ 18% = <strong>₹4,500/month</strong> → Total with GST = <strong>₹29,500/month</strong>.
                    All invoices will be raised with applicable GST. Input tax credit (ITC) can be claimed by the client where applicable.
                  </p>
                </div>
              </div>
            </div>

            {/* Ad Spend - NOT included */}
            <div className="bg-red-50 border border-red-300 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-2">⚠️ Ad Spend (NOT Included in Service Charges)</p>
                  <p className="text-xs text-red-700 leading-relaxed mb-3">
                    The following ad spend is paid directly to Google & Meta platforms and is <strong>NOT included</strong> in the monthly service fee mentioned above. This is the budget that goes directly to running the ads.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/80 border border-red-200 rounded-lg p-3">
                      <p className="text-xs text-red-600 font-semibold uppercase tracking-wider">Google Ads Spend</p>
                      <p className="text-lg font-bold text-red-800 mt-1">₹800/day</p>
                      <p className="text-xs text-red-600 mt-1">~₹24,000/month</p>
                    </div>
                    <div className="bg-white/80 border border-red-200 rounded-lg p-3">
                      <p className="text-xs text-red-600 font-semibold uppercase tracking-wider">Meta Ads Spend</p>
                      <p className="text-lg font-bold text-red-800 mt-1">₹200/day</p>
                      <p className="text-xs text-red-600 mt-1">~₹6,000/month</p>
                    </div>
                  </div>
                  <p className="text-xs text-red-600 mt-3 font-medium">
                    Estimated Total Monthly Ad Spend: <strong>₹30,000/month</strong> (approx.) — Paid separately to platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Cost Summary */}
            <div className="bg-secondary/60 border border-quote-border rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Monthly Cost Summary</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Zan Services Fee (SEO + SMO + Ads Management)</span>
                  <span className="font-semibold text-foreground">₹25,000 + GST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Google Ads Spend (₹800/day × 30 days)</span>
                  <span className="font-semibold text-foreground">~₹24,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Meta Ads Spend (₹200/day × 30 days)</span>
                  <span className="font-semibold text-foreground">~₹6,000</span>
                </div>
                <div className="border-t border-quote-border pt-2 mt-2 flex justify-between">
                  <span className="font-semibold text-foreground">Estimated Total Monthly Outflow</span>
                  <span className="font-bold text-foreground text-base">~₹59,500/month*</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">*Service fee inclusive of GST + ad spend. Ad spend may vary based on campaign needs.</p>
              </div>
            </div>

            {/* Extra services note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Settings className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-2">Additional / Extra Services</p>
                  <p className="text-xs text-blue-600 leading-relaxed">
                    Any services beyond the scope mentioned in this quotation — such as website development, landing page creation, video production, influencer marketing, print media, or event promotions — will be quoted and charged separately after mutual discussion and agreement.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-secondary/60 border border-quote-border rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Payment Terms</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Service Fee</span>
                  <span className="font-semibold text-foreground">₹25,000 + GST (₹29,500)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Due</span>
                  <span className="font-semibold text-foreground">100% Advance (Before Month Start)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ad Spend</span>
                  <span className="font-semibold text-foreground">Paid Separately to Platforms</span>
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
              Zan Services respects client confidentiality. All data, account credentials, analytics access, 
              and business information shared during the engagement will be kept strictly confidential 
              and used only for delivering the agreed services. No client data will be shared with third parties without prior consent.
              All ad account access and credentials will remain with the client at all times.
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
