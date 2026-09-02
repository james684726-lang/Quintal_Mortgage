"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Clock, 
  Shield, 
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Building2,
  Heart,
  Star,
  Award,
  TrendingUp,
  Zap
} from "lucide-react";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: Users,
      title: "34+ Years Experience",
      description: "Helping families achieve their homeownership dreams since 1992"
    },
    {
      icon: Clock,
      title: "Fast & Efficient",
      description: "Close in as little as 21 days on conforming loans"
    },
    {
      icon: Shield,
      title: "Trusted & Licensed",
      description: "NMLS #282449 with brokers licensed in multiple states"
    },
    {
      icon: Star,
      title: "Personalized Service",
      description: "Every client gets a dedicated loan advisor"
    }
  ];

  const questions = [
    "Will I be qualified?",
    "How long will it take to close?",
    "What documents do I need?",
    "How much can I borrow?"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <MessageCircle className="size-3.5" />
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em] sm:text-4xl lg:text-5xl">
            You tell us why and <span className="text-primary">we'll show you how.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We know you have questions. With over 34 years of helping buyers get into their homes, 
            we're here with answers.
          </p>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Award className="size-4" />
              Since 1992 - 34 Years Strong
            </div>

            {/* Main Description */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                With nearly 34 years of helping buyers get into their first homes and investment properties, 
                we've seen it all. Whether you're a first-time homebuyer or a seasoned investor, 
                we have the expertise to guide you through every step.
              </p>
              <p className="text-muted-foreground">
                We've been financing fine homes and income properties through every market cycle - 
                in the high time, in the worst time, and in the good times.
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="rounded-2xl border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary shrink-0">
                      <reason.icon className="size-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{reason.title}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Common Questions */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                Common Questions We Answer
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {questions.map((question, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="size-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{question}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Talk to an Expert
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/loan-programs"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-background/50 px-6 py-3.5 text-sm font-semibold transition-all hover:bg-primary/5 hover:border-primary"
              >
                Learn More
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Right Side - Image & Stats */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/40 to-primary/20">
                <Image
                  src="/img/buy.png"
                  alt="Family celebrating new home"
                  fill
                  className="object-cover mix-blend-overlay"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500/10 p-1.5">
                      <CheckCircle className="size-3.5 text-green-500" />
                    </div>
                    <span className="text-xs font-medium">99% Loan Types</span>
                  </div>
                  <p className="mt-1 text-xl font-bold text-primary">34+</p>
                  <p className="text-[10px] text-muted-foreground">Years Experience</p>
                </div>
                <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-blue-500/10 p-1.5">
                      <Zap className="size-3.5 text-blue-500" />
                    </div>
                    <span className="text-xs font-medium">Fast Closing</span>
                  </div>
                  <p className="mt-1 text-xl font-bold text-primary">&lt;21</p>
                  <p className="text-[10px] text-muted-foreground">Days to Close</p>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-3 -right-3 rounded-full bg-primary px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="size-4 text-white fill-white" />
                  <span className="text-sm font-bold text-white">4.9/5</span>
                  <span className="text-[10px] text-white/80">Rating</span>
                </div>
              </div>

              {/* Left Floating Badge */}
              <div className="absolute top-8 -left-3 rounded-2xl bg-white shadow-lg p-3 max-w-[140px]">
                <div className="flex items-center gap-2">
                  <Building2 className="size-4 text-primary" />
                  <div>
                    <p className="text-xs font-bold">17 Years</p>
                    <p className="text-[9px] text-muted-foreground">Incorporated</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 flex justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="size-4 text-primary" />
                <span>NMLS #282449</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="size-4 text-primary" />
                <span>1,000+ Families Served</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="size-4 text-primary" />
                <span>Licensed in 7 States</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}