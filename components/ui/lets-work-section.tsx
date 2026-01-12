"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight, Calendar, Mail, Phone, MessageSquare, Linkedin } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import AIChatCard from "./ai-chat"
import ContactForm from "./contact-form"
import CallbackForm from "./callback-form"

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [showChat, setShowChat] = useState(false)
  const [showMessageOptions, setShowMessageOptions] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showCallbackForm, setShowCallbackForm] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleBookMeeting = () => {
    window.open("https://cal.com/ps-bharath-kumar-achari-cc3req", "_blank")
  }

  const handleDropMessage = () => {
    setShowMessageOptions(true)
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/918074272172", "_blank")
    setShowMessageOptions(false)
  }

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/ps-bharath-kumar/", "_blank")
    setShowMessageOptions(false)
  }

  const handleEmail = () => {
    setShowMessageOptions(false)
    setShowContactForm(true)
  }

  const handleRequestCallback = () => {
    setShowCallbackForm(true)
  }

  const handleLiveChat = () => {
    setShowChat(true)
  }

  return (
    <>
      {/* Chat Modal */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowChat(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AIChatCard onClose={() => setShowChat(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Options Modal */}
      <AnimatePresence>
        {showMessageOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowMessageOptions(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-border rounded-2xl p-8 max-w-md w-full"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Choose your platform</h3>
              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <WhatsAppIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat on WhatsApp</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <button
                  onClick={handleLinkedIn}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect on LinkedIn</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <button
                  onClick={handleEmail}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">Send an email</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="my-8"
            >
              <ContactForm onClose={() => setShowContactForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Callback Form Modal */}
      <AnimatePresence>
        {showCallbackForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setShowCallbackForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="my-8"
            >
              <CallbackForm onClose={() => setShowCallbackForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="flex min-h-screen items-center justify-center px-6 bg-background transition-colors duration-300">
      <div className="relative flex flex-col items-center gap-12">
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          {/* Elegant heading */}
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              Perfect
            </span>
            <h3
              className="text-3xl font-light tracking-tight text-foreground transition-all duration-500 sm:text-4xl"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              Let's talk
            </h3>
          </div>

          {/* Contact Options Grid */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl transition-all duration-500"
            style={{
              opacity: showSuccess ? 1 : 0,
              transform: showSuccess ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "150ms",
            }}
          >
            {/* Book a Meeting */}
            <button
              onClick={handleBookMeeting}
              onMouseEnter={() => setHoveredButton('meeting')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative flex items-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <div
                className="relative flex items-center gap-3 overflow-hidden rounded-xl border px-6 py-4 w-full transition-all duration-300"
                style={{
                  borderColor: hoveredButton === 'meeting' ? "hsl(var(--foreground))" : "hsl(var(--border))",
                  backgroundColor: hoveredButton === 'meeting' ? "hsl(var(--foreground))" : "transparent",
                  boxShadow: hoveredButton === 'meeting' ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
                }}
              >
                <Calendar
                  className="size-5 transition-all duration-300"
                  strokeWidth={1.5}
                  style={{
                    color: hoveredButton === 'meeting' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  }}
                />
                <span
                  className="text-sm font-medium transition-all duration-300 flex-1 text-left"
                  style={{
                    color: hoveredButton === 'meeting' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  }}
                >
                  Book a Meeting
                </span>
                <ArrowUpRight
                  className="size-4 transition-all duration-300"
                  strokeWidth={1.5}
                  style={{
                    color: hoveredButton === 'meeting' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                    transform: hoveredButton === 'meeting' ? "translate(2px, -2px)" : "translate(0, 0)",
                  }}
                />
              </div>
            </button>

            {/* Drop a Message */}
            <button
              onClick={handleDropMessage}
              onMouseEnter={() => setHoveredButton('message')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative flex items-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <div
                className="relative flex items-center gap-3 overflow-hidden rounded-xl border px-6 py-4 w-full transition-all duration-300"
                style={{
                  borderColor: hoveredButton === 'message' ? "hsl(var(--foreground))" : "hsl(var(--border))",
                  backgroundColor: hoveredButton === 'message' ? "hsl(var(--foreground))" : "transparent",
                  boxShadow: hoveredButton === 'message' ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
                }}
              >
                <Mail
                  className="size-5 transition-all duration-300"
                  strokeWidth={1.5}
                  style={{
                    color: hoveredButton === 'message' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  }}
                />
                <span
                  className="text-sm font-medium transition-all duration-300 flex-1 text-left"
                  style={{
                    color: hoveredButton === 'message' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  }}
                >
                  Drop a Message
                </span>
                <ArrowUpRight
                  className="size-4 transition-all duration-300"
                  strokeWidth={1.5}
                  style={{
                    color: hoveredButton === 'message' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                    transform: hoveredButton === 'message' ? "translate(2px, -2px)" : "translate(0, 0)",
                  }}
                />
              </div>
            </button>

            {/* Request Callback */}
            <button
              onClick={handleRequestCallback}
              onMouseEnter={() => setHoveredButton('callback')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative flex items-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <div
                className="relative flex items-center gap-3 overflow-hidden rounded-xl border px-6 py-4 w-full transition-all duration-300"
                style={{
                  borderColor: hoveredButton === 'callback' ? "hsl(var(--foreground))" : "hsl(var(--border))",
                  backgroundColor: hoveredButton === 'callback' ? "hsl(var(--foreground))" : "transparent",
                  boxShadow: hoveredButton === 'callback' ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
                }}
              >
                <Phone
                  className="size-5 transition-all duration-300"
                  strokeWidth={1.5}
                  style={{
                    color: hoveredButton === 'callback' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  }}
                />
                <span
                  className="text-sm font-medium transition-all duration-300 flex-1 text-left"
                  style={{
                    color: hoveredButton === 'callback' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  }}
                >
                  Request Callback
                </span>
                <ArrowUpRight
                  className="size-4 transition-all duration-300"
                  strokeWidth={1.5}
                  style={{
                    color: hoveredButton === 'callback' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                    transform: hoveredButton === 'callback' ? "translate(2px, -2px)" : "translate(0, 0)",
                  }}
                />
              </div>
            </button>

            {/* Live Chat */}
            <button
              onClick={handleLiveChat}
              onMouseEnter={() => setHoveredButton('chat')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative flex items-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <div
                className="relative flex items-center gap-3 overflow-hidden rounded-xl border px-6 py-4 w-full transition-all duration-300"
                style={{
                  borderColor: hoveredButton === 'chat' ? "hsl(var(--foreground))" : "hsl(var(--border))",
                  backgroundColor: hoveredButton === 'chat' ? "hsl(var(--foreground))" : "transparent",
                  boxShadow: hoveredButton === 'chat' ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
                }}
              >
                <MessageSquare
                  className="size-5 transition-all duration-300"
                  strokeWidth={1.5}
                  style={{
                    color: hoveredButton === 'chat' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  }}
                />
                <span
                  className="text-sm font-medium transition-all duration-300 flex-1 text-left"
                  style={{
                    color: hoveredButton === 'chat' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  }}
                >
                  Live Chat Request
                </span>
                <ArrowUpRight
                  className="size-4 transition-all duration-300"
                  strokeWidth={1.5}
                  style={{
                    color: hoveredButton === 'chat' ? "hsl(var(--background))" : "hsl(var(--foreground))",
                    transform: hoveredButton === 'chat' ? "translate(2px, -2px)" : "translate(0, 0)",
                  }}
                />
              </div>
            </button>
          </div>

          {/* Subtle subtext */}
          <span
            className="text-xs tracking-widest uppercase text-muted-foreground/50 transition-all duration-500"
            style={{
              transform: showSuccess ? "translateY(0)" : "translateY(10px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "450ms",
            }}
          >
            Choose your preferred way to connect
          </span>
        </div>

        <div
          className="flex items-center gap-3 transition-all duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Available for projects
          </span>
        </div>

        <div
          className="group relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <h2
              className="relative text-center text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  Let's work
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  <span className="text-muted-foreground/60">together</span>
                </span>
              </span>
            </h2>

            <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isClicked ? "hsl(var(--foreground))" : isHovered ? "hsl(var(--foreground))" : "hsl(var(--border))",
                  backgroundColor: isClicked ? "transparent" : isHovered ? "hsl(var(--foreground))" : "transparent",
                  transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <ArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color: isHovered && !isClicked ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>
          </div>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
            <div
              className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
            <div
              className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Have a project in mind? I'd love to hear about it. Let's create something exceptional together.
          </p>
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60">bharathkumaracharips@gmail.com</span>
        </div>
      </div>
    </section>
    </>
  )
}
