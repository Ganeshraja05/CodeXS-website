"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Cpu, Database, Globe, Layers, Smartphone } from "lucide-react"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={ref} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 w-full h-full">
          <ParticleBackground />
        </div>

        <motion.div style={{ y, opacity }} className="container relative z-10 mx-auto px-4 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative h-24 w-24 animate-float">
                <Image src="/images/logo.png" alt="CodeXS Logo" width={96} height={96} className="object-contain" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Pioneering Digital Excellence – CodeXS
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build cutting-edge web solutions that help businesses thrive in the digital landscape.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in delivering high-quality digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Web Development"
              description="Custom websites and web applications built with the latest technologies."
            />
            <ServiceCard
              icon={<Smartphone className="h-10 w-10 text-primary" />}
              title="Mobile Development"
              description="Native and cross-platform mobile applications for iOS and Android."
            />
            <ServiceCard
              icon={<Layers className="h-10 w-10 text-primary" />}
              title="UI/UX Design"
              description="User-centered design that creates intuitive and engaging experiences."
            />
            <ServiceCard
              icon={<Database className="h-10 w-10 text-primary" />}
              title="Cloud Services"
              description="Scalable and secure cloud infrastructure for your business applications."
            />
            <ServiceCard
              icon={<Cpu className="h-10 w-10 text-primary" />}
              title="AI Solutions"
              description="Intelligent systems that automate processes and provide valuable insights."
            />
            <ServiceCard
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="Digital Strategy"
              description="Strategic guidance to help you navigate the digital landscape."
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent work that showcases our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="/placeholder.svg?height=300&width=500"
              title="E-Commerce Platform"
              category="Web Development"
            />
            <ProjectCard
              image="/placeholder.svg?height=300&width=500"
              title="AI-Powered Analytics"
              category="AI Solutions"
            />
            <ProjectCard
              image="/placeholder.svg?height=300&width=500"
              title="Cloud Migration"
              category="Cloud Services"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've worked with amazing companies across various industries.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative h-12 w-32 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-lg font-bold text-muted-foreground">Client {i}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business thrive in the digital world.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="bg-background border-border hover:border-primary transition-all duration-300 h-full group overflow-hidden">
      <CardContent className="pt-6">
        <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{icon}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
    </Card>
  )
}

function ProjectCard({ image, title, category }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-primary">{category}</p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-300 rounded-lg"></div>
    </div>
  )
}

function ParticleBackground() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))

    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
      <div className="absolute inset-0 backdrop-blur-[100px]"></div>
    </div>
  )
}

