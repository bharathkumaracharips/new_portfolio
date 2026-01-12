"use client"

import { useEffect, useId, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

interface SparklesProps {
  className?: string
  size?: number
  minSize?: number | null
  density?: number
  speed?: number
  minSpeed?: number | null
  opacity?: number
  opacitySpeed?: number
  minOpacity?: number | null
  color?: string
  background?: string
  options?: any
}

export function Sparkles({
  className,
  size = 1.2,
  minSize = null,
  density = 1200,
  speed = 1.5,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
  options = {},
}: SparklesProps) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setIsReady(true)
    })
  }, [])

  const id = useId()

  const defaultOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: false,
        },
      },
    },
    particles: {
      color: {
        value: color,
      },
      move: {
        enable: true,
        direction: "bottom",
        random: true,
        speed: speed,
        straight: false,
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        attract: {
          enable: false,
        },
        bounce: false,
      },
      number: {
        value: density,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: true,
          speed: opacitySpeed,
          sync: false,
          startValue: "random",
          destroy: "none",
        },
      },
      size: {
        value: {
          min: minSize || size / 2.5,
          max: size,
        },
        animation: {
          enable: false,
        },
      },
      shape: {
        type: "circle",
      },
      life: {
        duration: {
          sync: false,
          value: 0,
        },
        count: 0,
      },
    },
    detectRetina: true,
  }

  return isReady && <Particles id={id} options={{ ...defaultOptions, ...options }} className={className} />
}
