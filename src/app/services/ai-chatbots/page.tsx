import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, DollarSign, UserPlus, TrendingUp, Brain } from "lucide-react"
import Link from "next/link"

export default function page() {
  const benefits = [
    { icon: Clock, title: "24/7 Availability", description: "Provide instant customer support any time of day, improving response times and customer satisfaction." },
    { icon: TrendingUp, title: "Increased Efficiency", description: "Automate routine tasks, allowing your human team to focus on more complex customer needs." },
    { icon: DollarSign, title: "Cost Savings", description: "Reduce operational costs by automating repetitive customer service interactions." },
    { icon: UserPlus, title: "Personalized Experience", description: "Provide personalized responses and tailored solutions using customer data." },
    { icon: TrendingUp, title: "Seamless Scalability", description: "Easily handle an increasing volume of inquiries as your business grows." },
  ]

  const features = [
    "Natural Language Understanding (NLU)",
    "Multi-Channel Integration",
    "Automated Learning",
    "Rich Conversational Flow",
    "Customizable Personality",
  ]

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white p-8 py-[100px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">AI Chatbots: Elevating Customer Interactions </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              At BigByteBerry, we specialize in developing AI-powered chatbots that transform how businesses engage with their customers. These intelligent bots are designed to automate responses, provide real-time support, and improve customer experiences across various channels.
            </p>
            <p className="text-lg mb-4">
              Our AI chatbots utilize cutting-edge natural language processing (NLP) technology to understand customer inquiries, respond in a human-like manner, and even anticipate customer needs based on historical data.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-[#8a2be2] rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#1a1a2e] rounded-lg -rotate-3 flex items-center justify-center">
              <MessageCircle className="w-24 h-24 text-[#8a2be2]" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Why AI Chatbots?</h2>
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

        <h2 className="text-3xl font-bold mb-6">Key Features of Our AI Chatbots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex items-center p-6">
                <Brain className="w-8 h-8 text-[#8a2be2] mr-4" />
                <p className="text-white font-semibold">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li><span className="font-bold text-white">Understanding Your Needs:</span> We start by understanding your business goals and the types of customer interactions you want to automate.</li>
            <li><span className="font-bold text-white">Bot Development:</span> Our AI developers and designers create a chatbot that reflects your brand&apos;s personality and delivers the functionality you need.</li>
            <li><span className="font-bold text-white">Training the Bot:</span> Using data from your business, we train the AI chatbot to handle various customer queries.</li>
            <li><span className="font-bold text-white">Testing and Iteration:</span> We rigorously test the bot in real-world scenarios to ensure it works as expected.</li>
            <li><span className="font-bold text-white">Deployment and Monitoring:</span> Once deployed, we continue to monitor the chatbot&apos;s performance.</li>
            <li><span className="font-bold text-white">Continuous Improvement:</span> We provide ongoing support to help your bot learn from new data and customer interactions.</li>
          </ol>
        </div>

        <h2 className="text-3xl font-bold mb-6">Ready to Transform Customer Interactions?</h2>
        <p className="text-lg mb-6">
          If you&apos;re looking to enhance customer engagement and automate routine tasks, our AI chatbots are the solution you need. Get in touch today to discuss how BigByteBerry can help you build an intelligent, scalable chatbot for your business.
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
  )
}