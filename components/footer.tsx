"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Facebook, Twitter, Instagram, Linkedin, Github, Send, ArrowRight } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
    setEmail("")
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-8 w-8 mr-2">
                <Image src="/images/logo.png" alt="CodeXS Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-xl font-bold text-primary">CodeXS</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Pioneering digital excellence with innovative solutions that drive growth and create lasting value.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Github size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/projects" text="Projects" />
              <FooterLink href="/careers" text="Careers" />
              <FooterLink href="/blog" text="Blog" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services" text="Web Development" />
              <FooterLink href="/services" text="Mobile Apps" />
              <FooterLink href="/services" text="UI/UX Design" />
              <FooterLink href="/services" text="Cloud Solutions" />
              <FooterLink href="/services" text="AI Integration" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <Input
                type="email"
                placeholder="Your email address"
                className="pr-12 bg-background border-border focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-0 top-0 h-full rounded-l-none bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CodeXS. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }) {
  return (
    <Link
      href={href}
      className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors group"
    >
      <span className="transform transition-transform duration-300 group-hover:scale-110">{icon}</span>
    </Link>
  )
}

function FooterLink({ href, text }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="h-3 w-3" />
        </span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">{text}</span>
      </Link>
    </li>
  )
}

