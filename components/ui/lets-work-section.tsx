"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight, Calendar, Mail, Phone, MessageSquare } from "lucide-react"

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleBookMeeting = () => {
    window.open("https://cal.com/your-username/30min", "_blank")
  }

  const handleDropMessage = () => {
    window.location.href = "mailto:hello@example.com?subject=Project Inquiry"
  }

  const handleRequestCallback = () => {
    window.open("https://cal.com/your-username/callback", "_blank")
  }

  const handleLiveChat = () => {
    // Replace with your live chat integration (e.g., Intercom, Tawk.to, etc.)
    alert("Live chat feature - integrate with your preferred chat service")
  }

  return (
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
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60">hello@example.com</span>
        </div>
      </div>
    </section>
  )
}
