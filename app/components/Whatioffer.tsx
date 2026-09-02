"use client";

import { useState, useEffect } from "react";
import {
  User,
  Phone,
  Mail,
  Building,
  Award,
  Calendar,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
  Home,
  FileText,
  Star,
  Clock,
  Shield,
  Target,
  Heart,
  ThumbsUp,
  MessageCircle,
  GraduationCap,
  Sparkles,
  TrendingDown,
  Gift,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Whatioffer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Advanced Mortgage LLC - What We Offer Slides
  const portfolioSlides = [
    {
      id: 1,
      title: "34 Years of Mortgage Excellence",
      icon: <Award className="w-12 h-12 text-primary" />,
      description:
        "Since 1992, Quintal Mortgage Co. has been financing fine homes and income properties. With 34 years of industry experience, we make your next mortgage loan secured, faster, easier, and cheaper.",
      details: [
        "Broker originating since 1992 (34 yrs strong)",
        "Licensed since 2000 (26 yrs strong)",
        "Incorporated since 2009 (17 yrs strong)",
        "Broker NMLS ID: 346403",
        "Company NMLS ID: 282449",
      ],
      image: "/img/hero.png",
    },
    {
      id: 2,
      title: "Our Mission & Core Values",
      icon: <Target className="w-12 h-12 text-primary" />,
      description:
        "At Quintal Mortgage Co., our mission is to serve individuals and families with the utmost integrity, honesty, professionalism, and competency.",
      details: [
        "Integrity in every transaction",
        "Honest communication always",
        "Professional service excellence",
        "Altruism & genuine care for clients",
        "Industry knowledge & expertise",
      ],
      image: "/img/tes3.jpg",
    },
    {
      id: 3,
      title: "99% of All Loan Types Available",
      icon: <Building className="w-12 h-12 text-primary" />,
      description:
        "We can offer you just about 99% of all mortgage loan types currently in the market. From government-backed to non-QM products, we have a solution for every borrower.",
      details: [
        "Government Backed (FHA, VA, USDA)",
        "Conventional & Conforming Loans",
        "Jumbo Loans (up to $15M)",
        "Non-QM: DSCR, Bank Statement, 1099 Only",
        "Niche: Foreign National, ITIN, Condotel",
        "HELOC & Home Equity Loans",
      ],
      image: "/img/home.jpg",
    },
    {
      id: 4,
      title: "Building Partnerships for Life",
      icon: <Heart className="w-12 h-12 text-primary" />,
      description:
        "We build partnerships, one loan at a time. The average borrower will obtain 11 loans in their lifetime, and we aim to be your trusted partner for every single one.",
      details: [
        "Personalized service from application to closing",
        "Fast closing in as little as 21 days",
        "Knowledge, experience & speed guaranteed",
        "Capped compensation at $10,000",
        "We beat any local bank's Loan Estimate",
        "Serving clients nationwide",
      ],
      image: "/img/we.jpg",
    },
    {
      id: 5,
      title: "Current Promotions & Offers",
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      description:
        "Take advantage of our current promotions! Up to 120 bps in better pricing on jumbo loans, up to 87.5 bps on temporary rate buydowns, and various closing cost credits available.",
      details: [
        "Up to 120 bps better pricing on Jumbo Loans",
        "Up to 87.5 bps on Temporary Rate Buydowns",
        "$600 credit toward appraisal fee",
        "$500 credit toward title work fee",
        "$200 credit toward credit report fee",
        "Capped origination fee at $10,000",
        "Valid through June 30, 2026",
      ],
      image: "/img/home.jpg",
    },
    {
      id: 6,
      title: "The Mamdani Special",
      icon: <Star className="w-12 h-12 text-primary" />,
      description:
        "New Florida residents fleeing NYC pay only $5,000 on origination fee for jumbo loans between $1M and $15M. We'll beat any local bank's or credit union's Loan Estimate offer.",
      details: [
        "For new Florida residents",
        "Only $5,000 origination fee",
        "Jumbo loans $1M - $15M",
        "Purchase transactions only",
        "We beat any local bank's offer",
        "Valid through Q2 2026",
      ],
      image: "/img/tes3.jpg",
    },
    {
      id: 7,
      title: "Built-in Reward Program",
      icon: <Gift className="w-12 h-12 text-primary" />,
      description:
        "Earn rewards on your mortgage just like you do with your credit cards, travel, gas, and even coffee! Ask us how you can benefit from our innovative reward program.",
      details: [
        "Earn rewards on your mortgage",
        "Similar to credit card rewards",
        "Travel, gas, and coffee rewards",
        "Ask us HOW!",
        "Exclusive program for our borrowers",
      ],
      image: "/img/we.jpg",
    },
    {
      id: 8,
      title: "Temporary Rate Buydown Program",
      icon: <TrendingDown className="w-12 h-12 text-primary" />,
      description:
        "Lower your interest rate for the first 12 to 36 months with our seller-paid, lender-paid, or borrower-paid Temporary Rate Buydown options.",
      details: [
        "Lower rates for 12-36 months",
        "Seller-paid, lender-paid, borrower-paid",
        "Up to 87.5 bps better pricing",
        "On LPC Conforming & Government Loans",
        "Valid through June 30, 2026",
      ],
      image: "/img/hero.png",
    },
];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(
      (prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ── Section Header ── */}
      <div className="text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-primary mb-2">
          About Advanced Mortgage
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          What <span className="text-primary">We Offer</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      {/* ── Portfolio Carousel ── */}
      <div className="bg-card rounded-2xl shadow-xl border border-border p-8 mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          What <span className="text-primary">We Offer</span>
        </h3>
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {portfolioSlides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 p-4 md:p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* LEFT SIDE: Text Content */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-4 p-4 bg-primary/10 rounded-2xl">
                      {slide.icon}
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {slide.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {slide.description}
                    </p>
                    <ul className="space-y-2 w-full max-w-md">
                      {slide.details.map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle
                            size={16}
                            className="text-primary flex-shrink-0"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT SIDE: Image */}
                  <div className="relative w-full aspect-[3/4] md:aspect-square flex items-center justify-center mt-6 md:mt-0">
                    <div className="absolute inset-0 bg-[#F71607] rounded-3xl md:rounded-[40px] transform md:rotate-[-3deg] scale-105 z-0" />
                    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={slide.image || "/path/to/default-image.jpg"}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary rounded-full p-2 shadow-lg z-20">
                        <div className="text-white font-serif text-2xl leading-none">
                          “
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-muted-foreground"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {portfolioSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-muted-foreground"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-105 shadow-lg shadow-primary/25"
        >
          Get Started Today
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Whatioffer;