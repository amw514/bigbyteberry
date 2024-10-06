import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Zap, Globe, Users, Rocket, Cog, BarChart, TrendingUp, Link as LinkIcon, MapPin, Star, FileText, Activity, Smartphone, Database, PieChart, Mail, Facebook, Instagram, Linkedin, Twitter, DollarSign, Target, Layers, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const marketingComponents = [
    { icon: Search, title: "Search Engine Optimization (SEO)", description: "We optimize your website to rank higher in search results, bringing in more organic traffic and increasing visibility for your products or services." },
    { icon: DollarSign, title: "Pay-Per-Click (PPC) Advertising", description: "We target specific audiences based on their search intent, behavior, and demographics, ensuring you get the best return on your investment." },
    { icon: FileText, title: "Content Marketing", description: "We create engaging, informative, and SEO-optimized content tailored to your audience, positioning your brand as an industry leader." },
    { icon: Facebook, title: "Social Media Marketing", description: "We manage your presence on major social media platforms, creating compelling content that engages your audience and drives traffic to your website." },
    { icon: Mail, title: "Email Marketing", description: "We design and manage email campaigns that keep your audience engaged, nurture leads, and drive conversions." },
    { icon: TrendingUp, title: "Conversion Rate Optimization (CRO)", description: "We focus on optimizing your website and landing pages to maximize the percentage of visitors that convert into customers." },
    { icon: Users, title: "Influencer Marketing", description: "We connect your brand with the right influencers in your industry or niche, helping you reach a larger audience and build trust." },
    { icon: PieChart, title: "Analytics & Reporting", description: "We provide in-depth analytics and reporting, tracking key performance indicators (KPIs) to show the tangible impact of your digital marketing efforts." },
  ]

  const benefits = [
    { icon: Target, title: "Targeted Reach", description: "Digital marketing allows you to target specific demographics, interests, and behaviors." },
    { icon: DollarSign, title: "Cost-Effective", description: "Digital marketing offers a more affordable way to reach your audience with measurable results." },
    { icon: BarChart, title: "Measurable Results", description: "Every digital marketing campaign can be tracked and analyzed for performance." },
    { icon: Globe, title: "Brand Awareness", description: "Digital marketing helps build and maintain a strong online presence, improving brand awareness." },
    { icon: Zap, title: "Faster Results", description: "PPC and social media campaigns can deliver fast results and instant traffic boosts." },
    { icon: MessageCircle, title: "Enhanced Customer Engagement", description: "Foster stronger relationships with your audience through interactive content and engagement." },
  ]

  const industries = [
    "E-commerce", "Healthcare", "SaaS Companies", "Startups", "Real Estate",
    "Education & e-Learning", "Professional Services", "Hospitality & Travel", "Non-Profits"
  ]

  const approach = [
    { icon: Layers, title: "Strategy Development", description: "We develop a digital marketing strategy that aligns with your objectives and is tailored to your industry." },
    { icon: Cog, title: "Campaign Setup", description: "We implement the necessary tools and platforms to run your campaigns effectively." },
    { icon: FileText, title: "Content Creation", description: "Our creative team develops content that resonates with your audience and aligns with your brand." },
    { icon: Activity, title: "Launch and Monitor", description: "We launch the campaigns and monitor their performance in real-time, adapting our strategy as needed." },
    { icon: TrendingUp, title: "Optimization and Scaling", description: "We continually optimize campaigns to improve results and scale as your business grows." },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white p-8 py-[100px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Digital Marketing Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              At BigByteBerry, we offer comprehensive digital marketing strategies designed to grow your brand, increase conversions, and help you connect with your target audience. Our approach is data-driven, ensuring every decision is backed by insights to deliver measurable results.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-[#8a2be2] rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#1a1a2e] rounded-lg -rotate-3 flex items-center justify-center">
              <Globe className="w-24 h-24 text-[#8a2be2]" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">What is Digital Marketing?</h2>
        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <p className="text-gray-300">
            Digital marketing encompasses all marketing efforts that use the internet or electronic devices. It includes a range of strategies such as SEO, content marketing, social media marketing, email campaigns, and paid advertising to promote your brand and services across digital channels. With a well-rounded digital marketing plan, businesses can attract, engage, and convert leads, driving overall growth.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">Key Components of Our Digital Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {marketingComponents.map((component, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#8a2be2] flex items-center justify-center mb-4">
                  <component.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{component.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Benefits of Digital Marketing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <benefit.icon className="w-12 h-12 text-[#8a2be2] mb-4" />
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Industries We Serve with Digital Marketing</h2>
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

        <h2 className="text-3xl font-bold mb-6">Our Digital Marketing Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {approach.map((step, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <step.icon className="w-12 h-12 text-[#8a2be2] mb-4" />
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started with BigByteBerry&apos;s Digital Marketing Services Today!</h2>
          <p className="text-lg mb-6">
            Whether you&apos;re looking to grow brand awareness, drive more traffic, or increase conversions, our team at BigByteBerry is ready to help. Contact us today to discuss how our digital marketing services can elevate your business to new heights!
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