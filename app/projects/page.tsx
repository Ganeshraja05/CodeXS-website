"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

// This is a client component
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore our portfolio of successful projects that showcase our expertise and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filter */}
      <ProjectsSection />
    </div>
  )
}

// Client component for projects with filtering
function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web-development",
      image: "/placeholder.svg?height=400&width=600",
      description: "A modern e-commerce platform built with Next.js and Stripe integration.",
      client: "RetailTech Inc.",
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB"],
      challenge:
        "The client needed a scalable e-commerce solution with a seamless checkout experience and inventory management.",
      solution:
        "We developed a custom e-commerce platform with real-time inventory tracking, secure payment processing, and a responsive design optimized for mobile shopping.",
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      category: "ai-solutions",
      image: "/placeholder.svg?height=400&width=600",
      description: "An intelligent analytics dashboard that provides actionable insights from complex data.",
      client: "DataVision Corp",
      technologies: ["React", "TensorFlow.js", "D3.js", "Node.js"],
      challenge:
        "The client had vast amounts of data but struggled to extract meaningful insights for business decisions.",
      solution:
        "We created an AI-powered analytics platform that processes data in real-time, identifies patterns, and presents actionable insights through an intuitive dashboard.",
    },
    {
      id: 3,
      title: "Cloud Migration Project",
      category: "cloud-services",
      image: "/placeholder.svg?height=400&width=600",
      description: "A successful migration of legacy systems to a modern cloud infrastructure.",
      client: "Global Finance Group",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      challenge:
        "The client needed to migrate their legacy systems to the cloud while ensuring zero downtime and maintaining data integrity.",
      solution:
        "We implemented a phased migration strategy using containerization and infrastructure as code, resulting in improved performance and significant cost savings.",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "mobile-development",
      image: "/placeholder.svg?height=400&width=600",
      description: "A secure and user-friendly mobile banking application with advanced features.",
      client: "NextGen Bank",
      technologies: ["React Native", "Node.js", "GraphQL", "Biometric Authentication"],
      challenge:
        "The client wanted to modernize their mobile banking experience while maintaining the highest security standards.",
      solution:
        "We developed a feature-rich mobile app with biometric authentication, real-time transactions, and personalized financial insights.",
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      category: "web-development",
      image: "/placeholder.svg?height=400&width=600",
      description: "A complete redesign of a corporate website with improved UX and performance.",
      client: "Innovate Industries",
      technologies: ["Next.js", "Framer Motion", "Contentful CMS", "Vercel"],
      challenge:
        "The client's existing website was outdated, slow, and difficult to maintain, resulting in poor user engagement.",
      solution:
        "We redesigned the website with a modern aesthetic, optimized performance, and implemented a headless CMS for easy content management.",
    },
    {
      id: 6,
      title: "Supply Chain Management System",
      category: "enterprise-solutions",
      image: "/placeholder.svg?height=400&width=600",
      description: "An end-to-end supply chain management system with real-time tracking and analytics.",
      client: "Global Logistics Ltd",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      challenge:
        "The client needed to optimize their supply chain operations and gain visibility into their global logistics network.",
      solution:
        "We built a comprehensive system that provides real-time tracking, predictive analytics, and automated workflows to streamline operations.",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
          <div className="flex justify-center">
            <TabsList className="bg-slate-900">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web-development">Web Development</TabsTrigger>
              <TabsTrigger value="ai-solutions">AI Solutions</TabsTrigger>
              <TabsTrigger value="cloud-services">Cloud Services</TabsTrigger>
              <TabsTrigger value="mobile-development">Mobile</TabsTrigger>
              <TabsTrigger value="enterprise-solutions">Enterprise</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="bg-slate-900 border-slate-800 max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-slate-400">{selectedProject.description}</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Client</h3>
                      <p className="text-slate-300">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="bg-slate-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Challenge</h3>
                      <p className="text-slate-300">{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Solution</h3>
                      <p className="text-slate-300">{selectedProject.solution}</p>
                    </div>
                  </div>

                  <Button className="mt-6 bg-blue-500 hover:bg-blue-600">
                    View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden group cursor-pointer hover:border-blue-500 transition-all duration-300"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="bg-slate-800 px-2 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-slate-800 px-2 py-1 rounded-full text-xs">+{project.technologies.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  )
}

