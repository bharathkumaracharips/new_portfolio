"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Blockchain",
    description: "Smart contracts, DeFi platforms, and NFT marketplaces with security audits",
    price: 5000,
    yearlyPrice: 50000,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    serviceLink: "/services/blockchain",
    includes: [
      "Blockchain Development:",
      "Smart Contract Development",
      "Security Audit & Testing",
      "Gas Optimization",
      "Integration Support",
      "Documentation",
      "3 Months Support",
    ],
  },
  {
    name: "Backend",
    description: "RESTful APIs, microservices, and database optimization for scalable systems",
    price: 3000,
    yearlyPrice: 30000,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    serviceLink: "/services/backend",
    includes: [
      "Backend Systems:",
      "RESTful/GraphQL APIs",
      "Database Design",
      "Authentication & Authorization",
      "Performance Optimization",
      "CI/CD Setup",
      "2 Months Support",
    ],
  },
  {
    name: "Classes",
    description: "Personalized 1-on-1 or group training on blockchain, backend, and algorithms",
    price: 100,
    yearlyPrice: 10000,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    serviceLink: "/services/classes",
    includes: [
      "Private Classes:",
      "Personalized Curriculum",
      "Blockchain & Web3",
      "Backend Development",
      "Data Structures & Algorithms",
      "Interview Preparation",
      "Flexible Scheduling",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-muted border border-border p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-primary-foreground" : "text-muted-foreground"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-sm border-primary bg-primary"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Per Project</span>
        </button>
        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-primary-foreground" : "text-muted-foreground"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-sm border-primary bg-primary"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Retainer</span>
        </button>
      </div>
    </div>
  );
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
    hidden: {
      filter: "blur(8px)",
      y: 40,
      opacity: 0,
      scale: 0.95,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      id="pricing"
      className="min-h-screen h-screen mx-auto relative bg-background overflow-hidden transition-colors duration-300 flex items-center"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        once={true}
        className="absolute top-0 h-full w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={800}
          speed={3}
          size={2}
          minSize={0.5}
          color="hsl(var(--primary))"
          opacity={0.6}
          minOpacity={0.1}
          opacitySpeed={2}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        once={true}
        className="absolute left-0 top-[-114px] w-full h-full flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0 pointer-events-none"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full opacity-20"
            style={{
              border: "200px solid hsl(var(--primary))",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 1"
          ></div>
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full opacity-20"
            style={{
              border: "200px solid hsl(var(--primary))",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 2"
          ></div>
        </div>
      </TimelineContent>

      <div className="w-full relative z-10">
        <article className="text-center mb-6 max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              Plans that work best for you
            </VerticalCutReveal>
          </h2>
          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            once={true}
            className="text-sm text-muted-foreground"
          >
            Trusted by clients worldwide. Explore which option is right for you.
          </TimelineContent>
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            once={true}
          >
            <PricingSwitch onSwitch={togglePricingPeriod} />
          </TimelineContent>
        </article>

        <div
          className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
            opacity: 0.6,
            mixBlendMode: "multiply",
          }}
        />

        <div className="grid md:grid-cols-3 max-w-6xl gap-4 mx-auto px-4">
          {plans.map((plan, index) => (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={2 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
              once={true}
            >
              <Card
                className={`relative text-foreground border-border hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-card via-muted to-card shadow-[0px_-13px_100px_0px_hsl(var(--primary)/0.4)] border-primary/50"
                    : "bg-gradient-to-r from-card via-muted to-card"
                } transition-all duration-300`}
              >
                <CardHeader className="text-left p-4">
                  <div className="flex justify-between">
                    <h3 className="text-2xl mb-1">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-semibold">
                      $
                      <NumberFlow
                        format={{
                          currency: "USD",
                        }}
                        value={isYearly ? plan.yearlyPrice : plan.price}
                        className="text-3xl font-semibold"
                      />
                    </span>
                    <span className="text-muted-foreground ml-1 text-sm">
                      /{isYearly ? "year" : "project"}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0 p-4">
                  <div className="space-y-2">
                    <Link href={plan.serviceLink}>
                      <button
                        className="w-full p-3 text-base rounded-xl transition-all duration-300 bg-secondary text-secondary-foreground border border-border hover:bg-muted"
                      >
                        View Works
                      </button>
                    </Link>
                    <button
                      onClick={handleContactClick}
                      className={`w-full p-3 text-base rounded-xl transition-all duration-300 ${
                        plan.popular
                          ? "bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      Contact Admin
                    </button>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-border mt-4">
                    <h4 className="font-medium text-sm mb-2">
                      {plan.includes[0]}
                    </h4>
                    <ul className="space-y-1.5">
                      {plan.includes.slice(1).map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 bg-primary rounded-full grid place-content-center flex-shrink-0"></span>
                          <span className="text-xs text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          ))}
        </div>
      </div>
    </div>
  );
}
