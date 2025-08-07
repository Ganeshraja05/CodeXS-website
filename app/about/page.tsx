"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Lightbulb, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About CodeXS</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a team of passionate developers and designers dedicated to creating exceptional digital
                experiences.
              </p>
            </motion>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-foreground leading-relaxed text-center">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and
                create lasting value in an ever-evolving technological landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, CodeXS has quickly established itself as a leading IT consultancy specializing in web
                development and digital transformation. Our team combines technical expertise with creative thinking to
                deliver solutions that exceed expectations.
              </p>
              <p className="text-muted-foreground">
                We believe in building long-term partnerships with our clients, understanding their unique challenges,
                and crafting tailored solutions that drive real business results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-lg p-8 border border-border"
            >
              <div className="space-y-6">
                <ValuePoint
                  icon={<Users className="h-6 w-6 text-primary" />}
                  title="Client-Focused Approach"
                  description="We prioritize your business goals and user needs in every project."
                />
                <ValuePoint
                  icon={<Lightbulb className="h-6 w-6 text-primary" />}
                  title="Innovation-Driven"
                  description="We stay at the forefront of technology to deliver cutting-edge solutions."
                />
                <ValuePoint
                  icon={<Target className="h-6 w-6 text-primary" />}
                  title="Results-Oriented"
                  description="We measure our success by the tangible outcomes we create for our clients."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Areas of Expertise
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={item}>
              <ExpertiseCard
                title="Frontend Development"
                items={[
                  "React.js & Next.js Applications",
                  "Responsive Web Design",
                  "Progressive Web Apps (PWAs)",
                  "UI/UX Implementation",
                ]}
              />
            </motion.div>
            <motion.div variants={item}>
              <ExpertiseCard
                title="Backend Development"
                items={[
                  "Node.js & Express.js",
                  "API Development",
                  "Database Design & Optimization",
                  "Authentication & Security",
                ]}
              />
            </motion.div>
            <motion.div variants={item}>
              <ExpertiseCard
                title="Cloud & DevOps"
                items={[
                  "AWS & Azure Solutions",
                  "CI/CD Pipeline Setup",
                  "Containerization with Docker",
                  "Infrastructure as Code",
                ]}
              />
            </motion.div>
            <motion.div variants={item}>
              <ExpertiseCard
                title="E-Commerce Solutions"
                items={[
                  "Custom Online Stores",
                  "Payment Gateway Integration",
                  "Inventory Management Systems",
                  "Customer Experience Optimization",
                ]}
              />
            </motion.div>
            <motion.div variants={item}>
              <ExpertiseCard
                title="AI & Machine Learning"
                items={[
                  "Intelligent Chatbots",
                  "Predictive Analytics",
                  "Data Processing Pipelines",
                  "AI-Powered Recommendations",
                ]}
              />
            </motion.div>
            <motion.div variants={item}>
              <ExpertiseCard
                title="Digital Strategy"
                items={[
                  "Technology Consulting",
                  "Digital Transformation Roadmaps",
                  "Performance Optimization",
                  "Scalability Planning",
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Tech Stack
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["React", "Next.js", "Node.js", "MongoDB", "AWS", "Docker"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background border border-border rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary transition-colors duration-300 group"
              >
                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                  <div className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300">
                    {tech[0]}
                  </div>
                </div>
                <p className="font-medium text-center">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Meet Our Team
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={item}>
              <TeamMember image="/placeholder.svg?height=300&width=300" name="Alex Johnson" role="Founder & CEO" />
            </motion.div>
            <motion.div variants={item}>
              <TeamMember image="/placeholder.svg?height=300&width=300" name="Sarah Chen" role="Lead Developer" />
            </motion.div>
            <motion.div variants={item}>
              <TeamMember
                image="/placeholder.svg?height=300&width=300"
                name="Michael Rodriguez"
                role="UX/UI Designer"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamMember image="/placeholder.svg?height=300&width=300" name="Emily Taylor" role="Project Manager" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ValuePoint({ icon, title, description }) {
  return (
    <div className="flex items-start group">
      <div className="mr-4 mt-1 text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function ExpertiseCard({ title, items }) {
  return (
    <Card className="bg-background border-border hover:border-primary transition-all duration-300 h-full overflow-hidden group">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
    </Card>
  )
}

function TeamMember({ image, name, role }) {
  return (
    <div className="bg-background border border-border rounded-lg overflow-hidden group hover:border-primary transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{name}</h3>
        <p className="text-primary">{role}</p>
      </div>
    </div>
  )
}

