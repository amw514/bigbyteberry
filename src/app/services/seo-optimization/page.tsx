import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Zap, Globe, Users, Rocket, Cog, BarChart, TrendingUp, Link as LinkIcon, MapPin, Star, FileText, Activity, Smartphone, Database, PieChart } from "lucide-react"
import Link from "next/link"

export default function page() {
  const seoAspects = [
    { icon: FileText, title: "On-Page SEO", description: "We optimize each page of your website for search engines, including keyword research, meta tags, content optimization, URL structure, and internal linking." },
    { icon: Cog, title: "Technical SEO", description: "We focus on backend elements like site speed optimization, mobile optimization, XML sitemaps, robots.txt, and schema markup to improve search rankings." },
    { icon: LinkIcon, title: "Off-Page SEO", description: "We build your site's authority through link building, social media integration, and brand mentions to enhance your online presence." },
    { icon: MapPin, title: "Local SEO", description: "We optimize your website for local search results, including Google My Business optimization, local citations, and customer reviews management." },
  ]

  const seoProcess = [
    { icon: Search, title: "SEO Audit", description: "We begin with a thorough SEO audit of your website to assess current performance and identify opportunities for improvement." },
    { icon: FileText, title: "Keyword Research & Strategy", description: "We conduct in-depth keyword research to identify high-value keywords that align with your business goals and audience." },
    { icon: Zap, title: "On-Page Optimization", description: "We optimize your site's content, meta tags, headings, URLs, and internal links for both users and search engines." },
    { icon: Cog, title: "Technical SEO Implementation", description: "We fix technical issues affecting your rankings, such as site speed, broken links, or poor mobile performance." },
    { icon: PieChart, title: "Content Creation & Optimization", description: "We create new content or optimize existing content with the right keywords to ensure it's informative and search-friendly." },
    { icon: LinkIcon, title: "Link Building & Off-Page Optimization", description: "We implement an effective link-building strategy to boost your site's authority and improve domain authority." },
    { icon: Activity, title: "Continuous Monitoring & Reporting", description: "We continuously monitor your website's performance, track keyword rankings, and adjust strategies based on new data." },
  ]

  const seoBenefits = [
    { icon: TrendingUp, title: "Higher Search Engine Rankings", description: "Effective SEO helps your website rank higher in search engine results pages (SERPs)." },
    { icon: Users, title: "Increased Organic Traffic", description: "We attract quality organic traffic to your website without relying on paid ads." },
    { icon: Smartphone, title: "Better User Experience", description: "SEO enhances user experience by improving site speed, mobile responsiveness, and navigation." },
    { icon: Rocket, title: "Long-Term Growth", description: "SEO is a long-term strategy that continues to drive traffic, leads, and revenue." },
    { icon: BarChart, title: "Higher Conversion Rates", description: "With targeted traffic and optimized content, SEO can increase the likelihood of conversions." },
  ]

  const industries = [
    "E-commerce", "Healthcare", "SaaS Platforms", "Real Estate", "Education & e-Learning",
    "Local Businesses", "Startups", "Technology", "Professional Services"
  ]

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white p-8 py-[100px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">SEO Optimization Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              At BigByteBerry, we offer comprehensive SEO optimization services designed to improve your website&apos;s online visibility, increase organic traffic, and enhance search engine rankings. Whether you&apos;re a startup or an established business, optimizing your site for search engines ensures that you stay ahead of the competition and attract the right audience.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-[#8a2be2] rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#1a1a2e] rounded-lg -rotate-3 flex items-center justify-center">
              <Search className="w-24 h-24 text-[#8a2be2]" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">What is SEO Optimization?</h2>
        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <p className="text-gray-300">
            SEO (Search Engine Optimization) is the practice of optimizing your website&apos;s content, structure, and performance to make it more attractive to search engines like Google, Bing, and Yahoo. When done correctly, SEO helps your site rank higher in search results, driving more organic traffic and increasing the likelihood that potential customers will discover your business.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">Key Aspects of Our SEO Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {seoAspects.map((aspect, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#8a2be2] flex items-center justify-center mb-4">
                  <aspect.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{aspect.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{aspect.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Our SEO Optimization Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {seoProcess.map((step, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <step.icon className="w-12 h-12 text-[#8a2be2] mb-4" />
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Why SEO Optimization is Critical for Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {seoBenefits.map((benefit, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <benefit.icon className="w-12 h-12 text-[#8a2be2] mb-4" />
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Industries We Serve with SEO Optimization</h2>
        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center">
                <Star className="w-4 h-4 text-[#8a2be2] mr-2" />
                <span className="text-gray-300">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Online Visibility?</h2>
          <p className="text-lg mb-6">
            Let&apos;s optimize your website for search engines and drive more organic traffic to your business. Our team of SEO experts is ready to create a tailored strategy for your success.
          </p>
          <Button className="bg-[#8a2be2] hover:bg-[#9b4ddb] text-white font-bold py-2 px-4 rounded-md">
            <Link
              href="https://calendly.com/bigbyteberry/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}