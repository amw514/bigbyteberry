import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Calendar, ClipboardList, Database, UserPlus, ShoppingCart, CreditCard, Megaphone, Cog, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const automationAreas = [
    { icon: Calendar, title: "Automated Booking & Scheduling", description: "Seamlessly handle appointment booking and scheduling through AI chatbots." },
    { icon: ClipboardList, title: "Task & Workflow Automation", description: "Streamline operations across departments with automated task routing and approvals." },
    { icon: Database, title: "Data Entry & Report Generation", description: "Automate data capture and report generation for real-time insights." },
    { icon: UserPlus, title: "Customer Onboarding & Support", description: "Implement automated workflows for smooth customer onboarding and support." },
    { icon: ShoppingCart, title: "Order Processing & Inventory Management", description: "Handle order processing and inventory updates automatically." },
    { icon: CreditCard, title: "Billing & Invoicing", description: "Streamline billing processes with automated invoice generation and reminders." },
  ]

  const features = [
    { icon: Cog, title: "Custom Workflow Design", description: "We build automation systems around your unique business needs." },
    { icon: Zap, title: "Cross-Platform Integration", description: "Integrate with a wide variety of platforms for a cohesive experience." },
    { icon: ArrowRight, title: "Trigger-Based Actions", description: "Execute specific actions based on defined triggers automatically." },
    { icon: Database, title: "Real-Time Monitoring and Reporting", description: "Keep track of automated workflows with real-time monitoring dashboards." },
    { icon: TrendingUp, title: "Scalability", description: "Our solutions are built to scale as your business grows." },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white p-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Automation Solutions: Streamline Workflows and Boost Productivity</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              At BigByteBerry, we offer cutting-edge automation solutions designed to help businesses automate routine tasks, enhance efficiency, and reduce operational costs. Whether it&apos;s booking appointments through chatbots, automating data entry, or setting up end-to-end workflows, our solutions enable businesses to focus on growth while leaving repetitive tasks to the power of automation.
            </p>
            <p className="text-lg mb-4">
              Our automation services are tailored for businesses of all sizes, allowing them to work smarter, not harder. By integrating automation tools into your operations, you can significantly reduce human error, save valuable time, and enhance overall productivity.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-[#8a2be2] rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#1a1a2e] rounded-lg -rotate-3 flex items-center justify-center">
              <Zap className="w-24 h-24 text-[#8a2be2]" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">What Can Automation Do for Your Business?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {automationAreas.map((area, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#8a2be2] flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Key Features of Our Automation Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex items-start p-6">
                <feature.icon className="w-8 h-8 text-[#8a2be2] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Industries Benefiting from Automation</h2>
        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li><span className="font-bold text-white">Healthcare:</span> Automate appointment scheduling, patient onboarding, prescription renewals, and billing processes.</li>
            <li><span className="font-bold text-white">Hospitality:</span> Streamline guest bookings, automate check-ins and check-outs, and offer concierge services through AI-powered chatbots.</li>
            <li><span className="font-bold text-white">E-Commerce:</span> Manage order fulfillment, inventory tracking, and customer queries seamlessly.</li>
            <li><span className="font-bold text-white">Professional Services:</span> Automate invoicing, client communications, and task assignment.</li>
            <li><span className="font-bold text-white">Education:</span> Automate student registration, grading, and feedback processes.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">Why Choose BigByteBerry for Automation Solutions?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-[#1a1a2e] border-none">
            <CardHeader>
              <CardTitle className="text-white">Tailored to Your Business</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">We design custom solutions that meet your specific needs, not one-size-fits-all approaches.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1a1a2e] border-none">
            <CardHeader>
              <CardTitle className="text-white">Proven Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Years of experience in automation and AI technologies across multiple industries.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1a1a2e] border-none">
            <CardHeader>
              <CardTitle className="text-white">Ongoing Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">We provide continuous support, updates, and optimization to ensure your systems evolve with your needs.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Let Automation Drive Your Business Forward</h2>
          <p className="text-lg mb-6">
            With BigByteBerry&apos;s automation solutions, you can optimize operations, reduce human error, and allow your team to focus on what truly matters—delivering value to your customers.
          </p>
          <Button className="bg-[#8a2be2] hover:bg-[#9b4ddb] text-white font-bold py-2 px-4 rounded">
           <Link href="https://calendly.com/bigbyteberry/30min" target="_blank" rel="noopener noreferrer">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}