import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rocket, Clock, Target, Zap, Users, BarChart, DollarSign, Layers, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function page() {
  const benefits = [
    { icon: Target, title: "Validate Your Idea", description: "Test your product idea with real users and gather feedback early." },
    { icon: DollarSign, title: "Reduce Development Costs", description: "Focus on essential features, reducing initial costs and development time." },
    { icon: BarChart, title: "Minimize Risk", description: "Enter the market with a lean product to minimize the risk of building something unwanted." },
    { icon: Rocket, title: "Faster Time-to-Market", description: "Start testing your product with early adopters in as little as 30 days." },
    { icon: Zap, title: "Early Revenue Opportunities", description: "Attract paying users and generate interest even before the full product is ready." },
  ]

  const examples = [
    { title: "Dropbox", description: "Launched with just a demo video explaining the product's core functionality." },
    { title: "Airbnb", description: "Started with a simple website for renting out air mattresses in apartments." },
    { title: "Buffer", description: "Began with a landing page that explained the idea and allowed sign-ups for updates." },
  ]

  const industries = [
    { title: "Fintech", description: "Validate fintech apps or services with essential features." },
    { title: "Healthcare", description: "Launch health tech solutions like telemedicine platforms or wellness apps." },
    { title: "E-commerce", description: "Test online marketplaces or product ideas with key features." },
    { title: "EdTech", description: "Create learning management systems or educational platforms." },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white p-8 py-[100px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">MVP for Startups: Launch in 30 Days</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              At BigByteBerry, we understand the importance of getting your product to market quickly without sacrificing quality. Our Minimum Viable Product (MVP) development service is designed for startups looking to validate their business idea with core features before investing heavily in full-scale development.
            </p>
            <p className="text-lg mb-4">
              We help you launch your MVP in just 30 days, enabling you to test, refine, and enter the market with minimal risk.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-[#8a2be2] rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#1a1a2e] rounded-lg -rotate-3 flex items-center justify-center">
              <Rocket className="w-24 h-24 text-[#8a2be2]" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Why Startups Need an MVP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#8a2be2] flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

  

        <h2 className="text-3xl font-bold mb-6">Examples of Successful MVPs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {examples.map((example, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardHeader>
                <CardTitle className="text-white">{example.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{example.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex items-start p-6">
                <ArrowRight className="w-6 h-6 text-[#8a2be2] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Validate Your Product?</h2>
          <p className="text-lg mb-6">
            At BigByteBerry, we&apos;re passionate about helping startups succeed. With our fast, efficient MVP development services, you can test your product, gather user insights, and enter the market confidently.
          </p>
          <Button className="bg-[#8a2be2] hover:bg-[#9b4ddb] text-white font-bold py-2 px-4 rounded">
           <Link href="https://calendly.com/bigbyteberry/30min" target="_blank" rel="noopener noreferrer">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}