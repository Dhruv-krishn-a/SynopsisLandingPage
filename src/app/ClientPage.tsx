'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, BookOpen, Award, TrendingUp, Users, Clock, ShieldCheck, PenTool, Send, PhoneCall, ArrowRight, FileCheck2, Quote, Activity, Globe, CheckCircle, Star, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import SharedForm from '@/components/SharedForm';
import ReviewCarousel from '@/components/ReviewCarousel';
import MouseGlowEffect from '@/components/MouseGlowEffect';

const AnimatedCounter = dynamic(() => import('@/components/AnimatedCounter'), { ssr: false });
const PopupForm = dynamic(() => import('@/components/PopupForm'), { ssr: false });

const useScrollProgress = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top - windowHeight / 2;
      const total = rect.height;
      let percent = (start * -1) / total;
      if (percent < 0) percent = 0;
      if (percent > 1) percent = 1;
      setProgress(percent * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);
  return progress;
};

// Fast-Loading FadeIn Component (Pre-triggers 400px before reaching viewport)
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.01, rootMargin: '400px 0px 400px 0px' });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ClientPage({ initialContent }: { initialContent: any }) {
  const content = initialContent;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [winScrollY, setWinScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const processRef = useRef<HTMLDivElement>(null);
  const processProgress = useScrollProgress(processRef);
  
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setWinScrollY(window.scrollY);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollPercent(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const handleResize = () => {
      if (footerRef.current) setFooterHeight(footerRef.current.offsetHeight);
    };
    window.addEventListener('resize', handleResize);
    
    setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const IconMap: Record<string, any> = { ChevronDown, BookOpen, Award, TrendingUp, Users, Clock, ShieldCheck, PenTool, Send, PhoneCall, ArrowRight, FileCheck2, Quote, Activity, Globe, CheckCircle, Star };
  const getIcon = (iconName: string, defaultIcon: any) => IconMap[iconName] || defaultIcon;

  return (
    <main className="min-h-screen bg-[#07050f] text-stone-300 font-sans selection:bg-purple-700/40 relative overflow-x-hidden">      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUpFade { 
          from { opacity: 0; transform: translateY(20px); filter: blur(4px); } 
          to { opacity: 1; transform: translateY(0); filter: blur(0); } 
        }
        @keyframes shimmer {
          100% { transform: translateX(150%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}} />

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#07050f]/90 backdrop-blur-2xl border-b border-violet-500/20 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer active:scale-95 transition-transform duration-200">
            <Image priority={true} src="/WrirkLogoOld.png" alt="WRIrk Logo" width={80} height={80} className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.7)] group-hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.9)] transition-all duration-300" />
            <span className="font-serif text-[18px] lg:text-[22px] tracking-widest font-normal text-white uppercase drop-shadow-md translate-y-[2px]">WRIRK</span>
          </div>
          <nav className="hidden lg:flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.1em]">
            {['Services', 'Process', 'Testimonials', 'FAQs'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-stone-300 hover:text-violet-400 transition-colors duration-300">
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-violet-400 group-hover:w-full group-hover:left-0 transition-all duration-300 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
              </a>
            ))}
          </nav>
          <a href="#final-cta" className="relative px-5 py-2 rounded-full border border-violet-500/40 bg-violet-500/10 backdrop-blur-md hover:border-violet-400 text-xs font-semibold uppercase tracking-[0.1em] text-stone-200 hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(139,92,246,0.2)] group overflow-hidden hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
            <span className="relative z-10 flex items-center gap-2">Consult Us <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" /></span>
          </a>
        </div>
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-violet-500 via-purple-400 to-indigo-500 shadow-[0_0_8px_rgba(139,92,246,0.9)] transition-all duration-150 ease-out z-50" style={{ width: `${scrollPercent}%` }}></div>
      </header>

      {/* Main Content Wrapper (For Footer Curtain Reveal) */}
      <div style={{ marginBottom: footerHeight }} className="relative z-10 bg-[#07050f] shadow-[0_20px_50px_rgba(0,0,0,1)] transition-all duration-300">
        
        <MouseGlowEffect />
        
        {/* Deep Violet & Indigo Backdrop Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-purple-950/15 to-transparent pointer-events-none z-0"></div>

        {/* Hero Section (Side-by-Side: Text Left, Form Right) */}
        <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 px-6 md:px-12 z-10" id="hero">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            
            {/* Left Side: Headline & Description */}
            <div className="lg:col-span-7 text-left space-y-6 pt-2">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] drop-shadow-xl flex flex-wrap gap-x-3 gap-y-1">
                {content.hero.headline.value.split(' ').map((word: string, i: number) => (
                  <span 
                    key={i} 
                    className={`inline-block transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} 
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              
              <div 
                className={`h-px w-20 bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.9)] transition-all duration-1000 ease-out ${mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                style={{ transitionDelay: '600ms' }}
              ></div>

              <p 
                className={`text-base md:text-xl text-stone-200 font-light leading-relaxed drop-shadow-md transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '800ms' }}
              >
                {content.hero.description.map((p: any) => p.value).join(' ')}
              </p>

              {/* Feature Badges */}
              <div className={`flex flex-wrap gap-3 pt-2 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '1000ms' }}>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-200 text-xs font-semibold backdrop-blur-md shadow-[0_0_12px_rgba(139,92,246,0.15)]">
                  <ShieldCheck className="h-4 w-4 text-violet-400" /> 1-on-1 PhD Mentorship
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-200 text-xs font-semibold backdrop-blur-md shadow-[0_0_12px_rgba(139,92,246,0.15)]">
                  <Award className="h-4 w-4 text-violet-400" /> Topic & Framework
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-200 text-xs font-semibold backdrop-blur-md shadow-[0_0_12px_rgba(139,92,246,0.15)]">
                  <CheckCircle className="h-4 w-4 text-violet-400" /> 100% Authentic Guidance
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form Card */}
            <div className="lg:col-span-5 w-full" id="contact">
              <FadeIn delay={200}>
                <div className="bg-[#07050f]/95 backdrop-blur-2xl border border-violet-500/35 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-violet-500/60 transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-56 h-56 bg-violet-500/20 rounded-full blur-[70px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
                  <h2 className="text-xl md:text-2xl font-serif text-white mb-6 text-center border-b border-white/10 pb-3 drop-shadow-sm">Request a Confidential Review</h2>
                  <SharedForm formId="hero" buttonText="Submit Details" />
                </div>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-10 md:py-14 border-y border-violet-500/20 bg-black/40 backdrop-blur-md z-10 relative">
          <FadeIn>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                 {content.metrics.map((metric: any, i: number) => {
                   const cleanValue = metric.value.replace(/,/g, '');
                   const numMatch = cleanValue.match(/\d+/);
                   const num = numMatch ? parseInt(numMatch[0]) : null;
                   const suffix = metric.value.replace(/[\d,]+/, '').trim();
                   return (
                     <div key={i} className="text-center px-3 relative group">
                        <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none">
                          <Star className="w-20 h-20 text-violet-400" />
                        </div>
                        <div className="text-3xl md:text-4xl font-serif text-white mb-2 drop-shadow-md relative z-10">
                          {num !== null ? <AnimatedCounter end={num} suffix={suffix} duration={2000} /> : metric.value}
                        </div>
                        <div className="text-[11px] text-violet-400/90 font-bold uppercase tracking-[0.12em] relative z-10">{metric.label}</div>
                     </div>
                   );
                 })}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* What is Synopsis Guidance Section (trustedPartner Content) */}
        <section className="py-14 md:py-18 px-6 relative z-10 bg-gradient-to-b from-[#07050f] via-[#120b24]/40 to-[#07050f] border-b border-violet-500/20">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
                  <ShieldCheck className="h-4 w-4 text-violet-400" /> {content.trustedPartner?.ctaText1?.value}
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 drop-shadow-md">
                  {content.trustedPartner?.heading?.value}
                </h2>
                <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed">
                  {content.trustedPartner?.ctaText2?.value}
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(content.trustedPartner?.features || []).map((feat: any, idx: number) => {
                const Icon = getIcon(feat.icon, ShieldCheck);
                return (
                  <FadeIn key={idx} delay={idx * 80}>
                    <div className="bg-white/5 backdrop-blur-xl border border-violet-500/20 p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-violet-400/50 hover:bg-violet-500/10 transition-all duration-500 group shadow-lg">
                      <div className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/30 text-violet-400 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif text-white mb-1.5">{feat.title}</h3>
                        <p className="text-stone-300 font-light text-xs md:text-sm leading-relaxed">{feat.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={300}>
              <div className="mt-10 p-4 rounded-xl bg-violet-500/10 border border-violet-500/30 text-center max-w-2xl mx-auto">
                <p className="text-violet-200 text-sm md:text-base font-medium">
                  {content.trustedPartner?.ctaHeading?.value}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Trust Us / Sticky Scroll */}
        <section className="py-14 md:py-18 px-6 relative z-10" id="why-publish">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            <div className="lg:col-span-5 relative">
              <FadeIn>
                <div className="lg:sticky lg:top-36 mb-8 lg:mb-0">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-4 drop-shadow-md leading-tight">{content.whyTrustUs.heading?.value}</h2>
                  <div className="h-px w-14 bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.9)] mb-4"></div>
                  <p className="text-stone-300 font-light text-base leading-relaxed">Explore how our step-by-step guidance helps you build an approved research synopsis.</p>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              {(content.whyTrustUs.features || []).map((f: any, idx: number) => {
                const Icon = getIcon(f.icon, TrendingUp);
                return (
                  <FadeIn key={idx}>
                    <div className="bg-white/5 backdrop-blur-xl border border-violet-500/20 p-6 md:p-8 rounded-xl flex gap-5 items-start hover:bg-violet-500/10 hover:border-violet-500/40 transition-all duration-500 group shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                      <div className="shrink-0 p-3.5 bg-black/50 rounded-lg border border-violet-500/30 text-violet-400 shadow-inner group-hover:scale-110 transition-transform duration-500">
                        <Icon className="h-7 w-7 stroke-[1.5]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif text-white mb-2">{f.title}</h3>
                        <p className="text-stone-300 font-light text-sm leading-relaxed">{f.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </section>

        {/* Quote Banner */}
        <section className="py-20 relative z-10 bg-purple-950/20 border-y border-violet-500/20 backdrop-blur-md overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16rem] font-serif text-violet-400 opacity-10 pointer-events-none leading-none select-none transition-transform duration-75"
            style={{ transform: `translate(-50%, calc(-50% + ${(winScrollY * 0.15) - 150}px))` }}
          >
            "
          </div>
          <FadeIn>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <Quote className="h-10 w-10 text-violet-400 mx-auto mb-6 opacity-80" />
              <p className="text-2xl md:text-4xl font-serif text-violet-100 leading-snug drop-shadow-xl">
                 "{content.whyTrustUs.quote.value}"
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Services List */}
        <section className="py-14 md:py-18 px-6 relative z-10 group/services" id="services">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-serif text-white mb-4 drop-shadow-md">{content.services.heading?.value}</h2>
                <div className="h-px w-14 bg-violet-400 md:mx-0 mx-auto shadow-[0_0_10px_rgba(139,92,246,0.9)]"></div>
              </div>
            </FadeIn>

            <div className="space-y-5">
              {(content.services.cards || []).map((srv: any, idx: number) => {
                const Icon = getIcon(srv.icon, PenTool);
                return (
                  <FadeIn key={srv.id}>
                    <div className="bg-white/5 backdrop-blur-xl border border-violet-500/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 transition-all duration-500 group-hover/services:opacity-40 hover:!opacity-100 hover:scale-[1.01] hover:bg-violet-500/10 hover:border-violet-500/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
                      <div className="shrink-0 p-4 bg-black/50 border border-violet-500/30 rounded-lg text-violet-400 group-hover/services:text-violet-400 transition-all shadow-inner">
                        <Icon className="h-8 w-8 stroke-[1.5]" />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-serif text-white mb-2 drop-shadow-sm">{srv.title}</h3>
                        <p className="text-stone-300 font-light leading-relaxed text-sm md:text-base max-w-2xl">{srv.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-14 md:py-18 px-6 relative z-10 bg-black/30 backdrop-blur-sm border-y border-white/5" id="process" ref={processRef}>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="text-2xl md:text-4xl font-serif text-white mb-4 drop-shadow-md">{content.process.heading?.value}</h2>
                <div className="h-px w-14 bg-violet-400 mx-auto shadow-[0_0_10px_rgba(139,92,246,0.9)]"></div>
              </div>
            </FadeIn>

            <div className="relative ml-4 md:ml-8 py-4 space-y-10">
              {/* Background empty line */}
              <div className="absolute left-[1.15rem] top-0 bottom-0 w-1 bg-white/10 rounded-full"></div>
              {/* Active scroll drawing line */}
              <div 
                className="absolute left-[1.15rem] top-0 w-1 bg-violet-400 rounded-full shadow-[0_0_15px_rgba(139,92,246,1)] transition-all duration-300 ease-out"
                style={{ height: `${processProgress}%` }}
              ></div>

              {content.process.steps.map((step: any, idx: number) => {
                const isActive = processProgress > (idx * 25);
                return (
                  <FadeIn key={idx}>
                    <div className="relative pl-10 md:pl-16 group">
                      <div className={`absolute -left-1 top-1 h-9 w-9 rounded-full border-[3px] flex items-center justify-center font-serif text-base transition-all duration-500 shadow-lg ${isActive ? 'border-violet-400 bg-purple-950 text-white shadow-[0_0_20px_rgba(139,92,246,0.8)] scale-110' : 'bg-black border-white/20 text-stone-500'}`}>
                        {step.step}
                      </div>
                      <div className={`bg-white/5 backdrop-blur-md border rounded-xl p-5 md:p-6 transition-all duration-500 ${isActive ? 'border-violet-400/50 shadow-[0_10px_25px_rgba(139,92,246,0.15)]' : 'border-white/10'}`}>
                        <h3 className={`text-xl font-serif mb-2 transition-colors duration-500 ${isActive ? 'text-violet-100' : 'text-white'}`}>{step.title}</h3>
                        <p className="text-stone-300 font-light leading-relaxed text-sm md:text-base">{step.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Scholar Success (Full Width Carousel Section) */}
        <section className="py-14 md:py-18 relative z-10 w-full overflow-hidden" id="testimonials">
          <div className="w-full">
            <FadeIn>
              <div className="text-center mb-10 px-6">
                 <h2 className="text-2xl md:text-4xl font-serif text-white mb-4 drop-shadow-md">Scholar Success</h2>
                 <div className="h-px w-14 bg-violet-400 mx-auto shadow-[0_0_10px_rgba(139,92,246,0.9)]"></div>
              </div>
            </FadeIn>
            <div className="w-full relative mt-4">
               <ReviewCarousel reviews={content.reviews} />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 md:py-18 px-6 relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/5" id="faqs">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-serif text-white mb-4 drop-shadow-md">{content.faqs.heading?.value}</h2>
                <div className="h-px w-14 bg-violet-400 mx-auto shadow-[0_0_10px_rgba(139,92,246,0.9)]"></div>
              </div>
            </FadeIn>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {content.faqs.items.map((faq: any, i: number) => (
                <FadeIn key={i}>
                  <div className="py-4">
                    <button 
                      className="w-full flex items-center justify-between text-left focus:outline-none group py-2"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className={`font-serif text-base md:text-lg transition-colors ${openFaq === i ? 'text-violet-400' : 'text-white group-hover:text-violet-200'}`}>{faq.q}</span>
                      <div className={`shrink-0 flex items-center justify-center h-7 w-7 rounded-full border transition-all duration-300 ${openFaq === i ? 'border-violet-400 bg-violet-500/20' : 'border-white/10 bg-white/5 group-hover:border-violet-400/50'}`}>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-violet-400' : 'text-stone-400'}`} />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 mt-4 opacity-100 blur-none' : 'max-h-0 opacity-0 blur-sm'}`}>
                      <p className="text-stone-300 font-light leading-relaxed text-sm md:text-base pl-2 border-l-2 border-violet-400/50 pb-2">{faq.a}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final Bottom CTA Banner with Live Form */}
        <section className="py-16 md:py-20 px-6 relative z-10 overflow-hidden" id="final-cta">
          <FadeIn>
            <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#07050f] via-[#160f29] to-[#07050f] border border-violet-500/40 rounded-3xl p-8 md:p-12 relative shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden group">
              
              {/* Ambient lighting */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700/15 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Left Side: Headline & Copy */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 text-violet-400" /> Start Your Synopsis
                  </div>

                  <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight drop-shadow-md">
                    Get Expert Guidance to Build a Strong Research Synopsis
                  </h2>

                  <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed">
                    Connect with our research mentors today for 1-on-1 personalized guidance on topic selection, research objectives, and methodology framework.
                  </p>

                  <div className="pt-2 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-stone-200 text-sm font-medium">
                      <CheckCircle className="h-4 w-4 text-violet-400 shrink-0" />
                      <span>University & Committee Approved Structure</span>
                    </div>
                    <div className="flex items-center gap-3 text-stone-200 text-sm font-medium">
                      <CheckCircle className="h-4 w-4 text-violet-400 shrink-0" />
                      <span>100% Confidential & Authentic Guidance</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Embedded Live Contact Form */}
                <div className="lg:col-span-6">
                  <div className="bg-black/60 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-6 md:p-8 shadow-2xl relative">
                    <h3 className="text-xl font-serif text-white mb-6 text-center border-b border-white/10 pb-3">Request Synopsis Review</h3>
                    <SharedForm formId="bottom-cta" buttonText="Request Confidential Review" />
                  </div>
                </div>

              </div>

            </div>
          </FadeIn>
        </section>

      </div> {/* End Main Content Wrapper */}

      {/* Footer */}
      <footer ref={footerRef} className="fixed bottom-0 w-full z-0 bg-black pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-[24px] tracking-widest text-white uppercase">WRIRK</span>
              </div>
              <p className="text-stone-400 font-light max-w-sm leading-relaxed text-sm mb-4">
                {content.footer?.description.map((p: any) => p.value).join(' ')}
              </p>
              <a href="mailto:contact@wrirk.com" className="text-violet-400 hover:text-violet-300 text-sm transition-colors">contact@wrirk.com</a>
            </div>
            <div className="flex flex-col md:items-end justify-center">
               <h3 className="text-white font-serif text-lg mb-3">Connect With Us</h3>
               <div className="flex gap-5 text-sm">
                 <a href={content.footer?.socials?.whatsapp} className="text-stone-400 hover:text-violet-400 transition-colors">WhatsApp</a>
                 <a href={content.footer?.socials?.linkedin} className="text-stone-400 hover:text-violet-400 transition-colors">LinkedIn</a>
                 <a href={content.footer?.socials?.youtube} className="text-stone-400 hover:text-violet-400 transition-colors">YouTube</a>
               </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-xs font-light">
            <p>© 2026 MPRW Research Work LLP. All rights Reserved.</p>
            <p className="tracking-[0.2em] font-semibold">INDIA <span className="text-red-800 ml-1">❤️</span></p>
          </div>
        </div>
      </footer>
      
      <PopupForm />
    </main>
  );
}
