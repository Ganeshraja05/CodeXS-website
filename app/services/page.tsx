import { Code, Database, Globe, Server, Cpu, LineChart, ShoppingCart, Smartphone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We offer a comprehensive range of IT solutions to help your business thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe className="h-12 w-12 text-blue-400" />}
              title="Web Development"
              description="Custom websites and web applications built with cutting-edge technologies to deliver exceptional user experiences."
              features={[
                "Responsive Design",
                "Progressive Web Apps",
                "E-commerce Solutions",
                "Content Management Systems",
              ]}
            />
            <ServiceCard
              icon={<Code className="h-12 w-12 text-violet-400" />}
              title="Frontend Development"
              description="Modern, interactive user interfaces built with React, Next.js, and other leading frontend technologies."
              features={[
                "React & Next.js Applications",
                "UI/UX Implementation",
                "Interactive Dashboards",
                "Performance Optimization",
              ]}
            />
            <ServiceCard
              icon={<Server className="h-12 w-12 text-indigo-400" />}
              title="Backend Development"
              description="Robust server-side solutions that power your applications with reliability and performance."
              features={["API Development", "Node.js & Express", "Database Design", "Authentication Systems"]}
            />
            <ServiceCard
              icon={<Database className="h-12 w-12 text-blue-400" />}
              title="Cloud Services"
              description="Scalable and secure cloud infrastructure to support your business applications and data."
              features={[
                "AWS & Azure Solutions",
                "Cloud Migration",
                "Serverless Architecture",
                "Infrastructure as Code",
              ]}
            />
            <ServiceCard
              icon={<Cpu className="h-12 w-12 text-violet-400" />}
              title="AI Solutions"
              description="Intelligent systems that automate processes, provide insights, and enhance decision-making."
              features={[
                "Machine Learning Integration",
                "Chatbots & Virtual Assistants",
                "Predictive Analytics",
                "Natural Language Processing",
              ]}
            />
            <ServiceCard
              icon={<LineChart className="h-12 w-12 text-indigo-400" />}
              title="Digital Strategy"
              description="Strategic guidance to help you navigate the digital landscape and achieve your business goals."
              features={[
                "Technology Consulting",
                "Digital Transformation",
                "Product Strategy",
                "Technical Roadmapping",
              ]}
            />
            <ServiceCard
              icon={<ShoppingCart className="h-12 w-12 text-blue-400" />}
              title="E-Commerce Solutions"
              description="End-to-end e-commerce platforms that drive sales and deliver exceptional customer experiences."
              features={[
                "Custom Online Stores",
                "Payment Gateway Integration",
                "Inventory Management",
                "Customer Experience Optimization",
              ]}
            />
            <ServiceCard
              icon={<Smartphone className="h-12 w-12 text-violet-400" />}
              title="Mobile Development"
              description="Native and cross-platform mobile applications that engage users and extend your digital reach."
              features={[
                "iOS & Android Apps",
                "React Native Development",
                "Mobile UI/UX Design",
                "App Store Optimization",
              ]}
            />
            <ServiceCard
              icon={<Shield className="h-12 w-12 text-indigo-400" />}
              title="Cybersecurity"
              description="Comprehensive security solutions to protect your digital assets and customer data."
              features={[
                "Security Audits",
                "Penetration Testing",
                "Secure Authentication",
                "Data Protection Compliance",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Discovery"
              description="We start by understanding your business goals, target audience, and project requirements."
            />
            <ProcessStep
              number="02"
              title="Planning"
              description="We create a detailed roadmap with timelines, milestones, and resource allocation."
            />
            <ProcessStep
              number="03"
              title="Development"
              description="Our team builds your solution using agile methodologies and regular client updates."
            />
            <ProcessStep
              number="04"
              title="Deployment"
              description="We launch your project with thorough testing and provide ongoing support."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 h-full group">
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-300">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 relative overflow-hidden group">
      <div className="absolute -top-4 -left-4 text-8xl font-bold text-slate-700/30 group-hover:text-blue-500/20 transition-colors duration-300">
        {number}
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  )
}

