import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Zap, Globe, Users, Rocket, Cog, Bell, MapPin, CreditCard, BarChart, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function page() {
  const appTypes = [
    { icon: Smartphone, title: "Native Mobile Applications", description: "Superior performance and full access to device features for iOS and Android." },
    { icon: Globe, title: "Cross-Platform Mobile Applications", description: "Cost-effective solutions that work seamlessly across iOS and Android platforms." },
  ]

  const features = [
    { icon: Bell, title: "Push Notifications", description: "Keep users informed and engaged with timely updates, offers, and alerts." },
    { icon: MapPin, title: "Geolocation", description: "Provide location-based services such as local deals, store locators, or geofencing." },
    { icon: CreditCard, title: "In-App Purchases", description: "Monetize your app by offering premium content, subscriptions, or one-time purchases." },
    { icon: BarChart, title: "Analytics", description: "Track user behavior and performance metrics to optimize the app experience." },
  ]

  const benefits = [
    "Tailored Solutions",
    "Innovative Technologies",
    "Cross-Industry Expertise",
    "End-to-End Service",
  ]

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white p-8 py-[100px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Mobile App Development Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              At BigByteBerry, we specialize in building innovative mobile applications that empower businesses to engage their customers on-the-go. Whether you need a native app for iOS or Android, or a cross-platform solution that works seamlessly on both, our team has the expertise to deliver high-performance and feature-rich mobile apps tailored to your unique needs.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-[#8a2be2] rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#1a1a2e] rounded-lg -rotate-3 flex items-center justify-center">
              <Smartphone className="w-24 h-24 text-[#8a2be2]" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Our Mobile App Development Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {appTypes.map((type, index) => (
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

        <h2 className="text-3xl font-bold mb-6">Engage Your Customers on-the-Go</h2>
        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <p className="text-gray-300 mb-4">
            Mobile apps are essential for modern businesses to stay connected with their customers. Whether your goal is to enhance customer engagement, improve brand loyalty, or offer a new service, a mobile app provides a direct channel to your audience. With BigByteBerry, you can expect apps that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Enhance Engagement: Through push notifications, personalized content, and in-app messaging.</li>
            <li>Improve User Retention: By offering a seamless, enjoyable experience.</li>
            <li>Support Business Growth: Through in-app purchases, subscription models, or loyalty programs.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">App Features Tailored to Your Needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <feature.icon className="w-12 h-12 text-[#8a2be2] mb-4" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Why Choose BigByteBerry for Mobile App Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex items-center p-6">
                <CheckCircle className="w-6 h-6 text-[#8a2be2] mr-4 flex-shrink-0" />
                <p className="text-white font-semibold">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Ongoing Support & App Maintenance</h2>
          <p className="text-gray-300">
            At BigByteBerry, we don&apos;t just stop at launch. We provide ongoing support and maintenance to ensure your app remains up-to-date with platform updates, security patches, and evolving business needs. Whether it&apos;s adding new features or optimizing performance, we&apos;re here to help your app grow alongside your business.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-lg mb-6">
            Let&apos;s create a mobile app that takes your business to the next level. Our team is ready to bring your vision to life with cutting-edge technology and user-centric design.
          </p>
          <Button className="bg-[#8a2be2] hover:bg-[#9b4ddb] text-white font-bold py-2 px-4 rounded">
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