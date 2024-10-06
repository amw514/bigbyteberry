import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Zap, Globe, Users, Rocket, Cog, Bell, MapPin, CreditCard, BarChart, CheckCircle, Palette, Layout, UserCheck, Repeat, Smile, TrendingUp, Layers, Maximize } from "lucide-react"
import Link from "next/link"

export default function page() {
  const designTypes = [
    { icon: Palette, title: "UI (User Interface) Design", description: "We focus on the visual elements of your digital product—the look and feel. From color schemes and typography to buttons and icons, we design every aspect of your interface." },
    { icon: UserCheck, title: "UX (User Experience) Design", description: "We ensure that users can easily navigate through your app or website, complete tasks quickly, and have a positive experience from start to finish." },
  ]

  const approaches = [
    { icon: Users, title: "User-Centered Design", description: "We place your users at the heart of our design process, creating interfaces that are intuitive and easy to use." },
    { icon: Repeat, title: "Seamless User Journeys", description: "We design with the end user in mind, ensuring that every page and feature flows naturally." },
    { icon: Layers, title: "Modern Aesthetics", description: "Our UI designs focus on modern, attractive, and clean aesthetics, combining innovative design trends with your brand's identity." },
    { icon: Maximize, title: "Responsive Design", description: "We design responsive user interfaces that work seamlessly across all devices—desktops, tablets, and mobile phones." },
  ]

  const benefits = [
    { icon: Zap, title: "Enhanced Usability", description: "Well-designed interfaces reduce friction and make it easier for users to achieve their goals." },
    { icon: TrendingUp, title: "Increased User Engagement", description: "A captivating and easy-to-navigate design leads to more interaction, longer site visits, and higher conversion rates." },
    { icon: Rocket, title: "Boosted Conversions", description: "The smoother the experience, the higher the chance users will convert into customers." },
    { icon: Smile, title: "Improved Customer Satisfaction", description: "When users have an easy and enjoyable experience, they are more likely to return." },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white p-8 py-[100px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">UI/UX Design Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              At BigByteBerry, we craft intuitive and visually attractive user interfaces and experiences that are designed to enhance usability, simplify navigation, and drive user engagement. Our UI/UX design services are rooted in a deep understanding of your users&apos; needs, ensuring that every interaction with your website or app feels smooth, enjoyable, and purposeful.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-[#8a2be2] rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#1a1a2e] rounded-lg -rotate-3 flex items-center justify-center">
              <Layout className="w-24 h-24 text-[#8a2be2]" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">What is UI/UX Design?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {designTypes.map((type, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#8a2be2] flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Our Approach to UI/UX Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {approaches.map((approach, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex items-start p-6">
                <approach.icon className="w-8 h-8 text-[#8a2be2] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">{approach.title}</h3>
                  <p className="text-gray-300 text-sm">{approach.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Key Benefits of BigByteBerry&apos;s UI/UX Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex items-start p-6">
                <benefit.icon className="w-8 h-8 text-[#8a2be2] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">UI/UX Design for Web & Mobile</h2>
          <p className="text-gray-300 mb-4">
            We offer UI/UX design services for both web platforms and mobile applications, ensuring a cohesive, intuitive experience across every touchpoint:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Web UI/UX Design: Custom designs that make your website stand out. From landing pages to e-commerce platforms, we create layouts that are visually appealing and highly functional.</li>
            <li>Mobile App UI/UX Design: Whether it&apos;s for a native or cross-platform app, we create mobile interfaces that are optimized for touch interactions, easy to navigate, and responsive on all devices.</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your User Experience?</h2>
          <p className="text-lg mb-6">
            Let&apos;s create intuitive and visually stunning interfaces that delight your users and drive business growth. Our team is ready to bring your vision to life with innovative UI/UX design.
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