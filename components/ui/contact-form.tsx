"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'

interface ContactFormProps {
  onClose?: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:bharathkumaracharips@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    if (onClose) onClose()
  }

  return (
    <Card className="mx-auto max-w-lg p-8 sm:p-12 bg-background border-border transition-colors duration-300 relative">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      )}
      
      <div>
        <h2 className="text-2xl font-semibold text-foreground transition-colors duration-300">Send me a message</h2>
        <p className="mt-4 text-sm text-muted-foreground transition-colors duration-300">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground transition-colors duration-300">
            Full name *
          </Label>
          <Input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="transition-colors duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground transition-colors duration-300">
            Email *
          </Label>
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="transition-colors duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-foreground transition-colors duration-300">
            Subject *
          </Label>
          <Input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            className="transition-colors duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground transition-colors duration-300">
            Message *
          </Label>
          <Textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="transition-colors duration-300"
          />
        </div>

        <Button type="submit" className="w-full transition-colors duration-300">
          Send Message
        </Button>
      </form>
    </Card>
  )
}
