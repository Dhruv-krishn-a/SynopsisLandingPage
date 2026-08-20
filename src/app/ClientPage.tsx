'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, BookOpen, Award, TrendingUp, Users, Clock, ShieldCheck, PenTool, Send, PhoneCall, ArrowRight, FileCheck2, Quote, Activity, Globe, CheckCircle, Star } from 'lucide-react';

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className={className}>
    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.183 1.605 5.998L.103 23.513l5.626-1.476A11.977 11.977 0 0 0 12.031 24c6.645 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm6.545 17.202c-.276.776-1.579 1.488-2.181 1.554-.565.06-1.32-.152-3.842-1.196-3.08-1.275-5.074-4.436-5.226-4.639-.153-.203-1.246-1.658-1.246-3.16 0-1.503.784-2.247 1.06-2.553.277-.305.602-.381.802-.381.2 0 .4.004.576.012.185.008.434-.07.671.498.241.578.826 2.015.898 2.167.073.152.12.33.023.523-.097.193-.146.315-.291.487-.145.173-.306.376-.436.488-.145.127-.298.269-.136.55.163.282.723 1.197 1.556 1.939.907.808 1.804 1.111 2.086 1.238.282.127.447.102.612-.081.165-.183.714-.827.904-1.111.191-.285.381-.238.638-.142.257.096 1.624.767 1.902.909.278.142.463.213.531.33.067.117.067.676-.209 1.452z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="url(#instagram-grad)" className={className}>
    <defs>
      <linearGradient id="instagram-grad" x1="2" y1="22" x2="22" y2="2">
        <stop offset="0%" stopColor="#FD1D1D" />
        <stop offset="50%" stopColor="#E1306C" />
        <stop offset="100%" stopColor="#405DE6" />
      </linearGradient>
    </defs>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm3.98-10.876a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const RichTextRenderer = ({ content, className }: { content: string, className?: string }) => {
  if (!content) return null;
  // If it contains HTML tags (from Quill), render as HTML
  if (/<[a-z][\s\S]*>/i.test(content)) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
  }
  // Otherwise, handle legacy text by replacing newlines with <br />
  return (
    <div className={className}>
      {content.split(/(?:\\n|\n)/).map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {line.trim()}
        </React.Fragment>
      ))}
    </div>
  );
};

import dynamic from 'next/dynamic';
import SharedForm from '@/components/SharedForm';
import ReviewCarousel from '@/components/ReviewCarousel';

const BackgroundEffect = dynamic(() => import('@/components/BackgroundEffect'), { ssr: false });
const AnimatedCounter = dynamic(() => import('@/components/AnimatedCounter'), { ssr: false });
const PopupForm = dynamic(() => import('@/components/PopupForm'), { ssr: false });

// Custom Hook for Scroll Progress (Mobile Process Line)
const useScrollProgress = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the element
      const start = rect.top - windowHeight / 2;
      const total = rect.height;
      let percent = (start * -1) / total;
      
      if (percent < 0) percent = 0;
      if (percent > 1) percent = 1;
      setProgress(percent * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
};

export default function ClientPage({ initialContent }: { initialContent: any }) {
  const content = initialContent;
// --- DYNAMIC DATA ARRAYS ---
  
  const renderHeading = (text: string | undefined, highlightClass: string) => {
    if (!text) return null;
    const words = text.trim().split(' ');
    if (words.length <= 1) {
       return <span className={highlightClass}>{text}</span>;
    }
    // Highlight the last 2 words
    const numHighlight = Math.min(2, words.length - 1);
    const regularWords = words.slice(0, words.length - numHighlight).join(' ');
    const highlightWords = words.slice(words.length - numHighlight).join(' ');
    
    return (
      <>
        {regularWords} <span className={highlightClass}>{highlightWords}</span>
      </>
    );
  };

  const faqs = content.faqs.items;
  const processSteps = content.process.steps;
  const googleReviews = content.reviews;

  const renderParagraphs = (arr: any[]) => {
    if (!arr || !Array.isArray(arr)) return null;
    return arr.map((p: any, i: number) => (
      <React.Fragment key={i}>
        {p.value}
        {i < arr.length - 1 && <><br/><br/></>}
      </React.Fragment>
    ));
  };

  
  const IconMap: Record<string, any> = {
    ChevronDown, BookOpen, Award, TrendingUp, Users, Clock, ShieldCheck, PenTool, Send, PhoneCall, ArrowRight, FileCheck2, Quote, Activity, Globe, CheckCircle, Star
  };
  const getIcon = (iconName: string, defaultIcon: any) => IconMap[iconName] || defaultIcon;
  
  const whyPublicationsMatter = (content.whyTrustUs.features || []).map((f: any, i: number) => ({
    title: f.title,
    desc: f.description,
    icon: getIcon(f.icon, TrendingUp)
  }));

  const trustCards = (content.trustedPartner.features || []).map((f: any, i: number) => ({
    title: f.title,
    desc: f.description,
    icon: getIcon(f.icon, ShieldCheck)
  }));

  const servicesColors = [
    { glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:border-cyan-400', iconColor: 'text-cyan-400' },
    { glow: 'hover:shadow-[0_0_30px_rgba(129,140,248,0.4)] active:shadow-[0_0_15px_rgba(129,140,248,0.6)] hover:border-indigo-400', iconColor: 'text-indigo-400' },
    { glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] active:shadow-[0_0_15px_rgba(52,211,153,0.6)] hover:border-emerald-400', iconColor: 'text-emerald-400' },
    { glow: 'hover:shadow-[0_0_30px_rgba(244,114,182,0.4)] active:shadow-[0_0_15px_rgba(244,114,182,0.6)] hover:border-pink-400', iconColor: 'text-pink-400' }
  ];
  
  const services = (content.services.cards || []).map((srv: any, i: number) => ({
    icon: getIcon(srv.icon, PenTool),
    id: srv.id || `srv-${i}`,
    title: srv.title,
    desc: srv.desc,
    ...servicesColors[i % servicesColors.length]
  }));



  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  const processRef = useRef<HTMLDivElement>(null);
  const processProgress = useScrollProgress(processRef);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    let observer: IntersectionObserver;
    
    // Defer the observer setup slightly to prevent blocking initial hydration
    const timeoutId = setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, []);

  const revealClass = "reveal opacity-0 translate-y-12 transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";

  return (
    <main className="min-h-screen bg-[#02050D] text-slate-100 font-sans selection:bg-cyan-500/40 relative overflow-x-hidden">
      {/* Hide Scrollbar for carousels */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
      
      <BackgroundEffect />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex flex-col gap-4 reveal opacity-0 scale-95 transition-all duration-700 delay-500">
        <a 
          href={`https://wa.me/${content.globalSettings.whatsappNumber.value.replace(/\+/g, '')}`} 
          target="_blank"
          rel="noreferrer"
          aria-label="Contact us on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#0A0F1C]/90 backdrop-blur-md border border-emerald-500/50 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] hover:bg-emerald-500 active:scale-90 active:bg-emerald-600 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-emerald-400 group-hover:text-white drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] group-hover:drop-shadow-none transition-all duration-300 relative z-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span className="hidden md:block absolute right-16 bg-[#0A0F1C] text-emerald-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            WhatsApp Us
          </span>
        </a>
        
        <a 
          href={`tel:${content.globalSettings.callNumber?.value || content.globalSettings.whatsappNumber.value}`}
          aria-label="Call us"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#0A0F1C]/90 backdrop-blur-md border border-indigo-500/50 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] hover:bg-indigo-500 active:scale-90 active:bg-indigo-600 transition-all duration-300"
        >
          <PhoneCall className="h-6 w-6 text-indigo-400 group-hover:text-[#0A0F1C] transition-colors duration-300 relative z-10" />
          <span className="hidden md:block absolute right-16 bg-[#0A0F1C] text-indigo-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            Call {content.globalSettings.callNumber?.value || '+91 95485 21866'}
          </span>
        </a>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#02050D]/90 backdrop-blur-xl border-b border-cyan-900/50 py-3 md:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-5 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer active:scale-95 transition-transform duration-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image priority={true} src="/WrirkLogoOld.png" alt="WRIrk Logo" width={80} height={80} className="h-16 w-16 md:h-20 md:w-20 object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)] transition-all duration-300" />
                <span className="font-libre text-[18px] lg:text-[1.5vw] tracking-wider lg:tracking-[0.2vw] px-2 lg:px-[0.8vw] font-normal text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] translate-y-[2px]">WRIRK</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-slate-200">
            {['Services', 'Process', 'Testimonials', 'FAQs'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 active:scale-95 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-200">{item}</a>
            ))}
          </nav>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-indigo-500 rounded-xl md:rounded-md blur opacity-60 animate-pulse group-hover:opacity-100 transition duration-500"></div>
            <a href="#contact" className="relative flex px-5 py-2.5 md:px-7 md:py-3 rounded-xl md:rounded-md overflow-hidden bg-[#0A0F1C] border border-cyan-500/50 hover:border-cyan-400 active:scale-95 transition-all duration-300">
              <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <div className="absolute inset-0 translate-x-[-150%] animate-[shimmer_4s_infinite_ease-in-out] bg-linear-to-r from-transparent via-cyan-400/20 to-transparent skew-x-[-15deg] z-0"></div>
              <span className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-cyan-400 group-hover:text-white drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                Contact <span className="hidden md:inline">Us</span> <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-24 lg:pt-52 lg:pb-32 px-5 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className={`lg:col-span-7 space-y-8 relative ${revealClass}`}>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] tracking-tight animate-[fadeSlideUp_0.8s_ease-out_forwards] opacity-0">
              {renderHeading(content.hero.headline.value, "text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]")}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 font-medium max-w-xl leading-relaxed drop-shadow-md animate-[fadeSlideUp_1s_ease-out_forwards] opacity-0 delay-200">
              {renderParagraphs(content.hero.description)}
            </p>

            <div className="bg-[#0A1326]/80 border-l-4 border-cyan-400 p-5 rounded-r-lg shadow-lg animate-[fadeSlideUp_1s_ease-out_forwards] opacity-0 delay-300">
              <p className="text-sm md:text-base text-cyan-50 font-medium leading-relaxed">
                <strong className="text-cyan-300">{content.hero.integrityBold.value}</strong><br/>
                {renderParagraphs(content.hero.integrityText)}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-[fadeSlideUp_1s_ease-out_forwards] opacity-0 delay-500">
              <a href="#contact" className="px-6 py-4 bg-linear-to-r from-cyan-500 to-indigo-600 rounded-lg text-white font-black uppercase tracking-widest text-xs md:text-sm text-center shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:scale-95 transition-all">
                {content.hero.button1.value}
              </a>
              <a href={`tel:${content.globalSettings.callNumber?.value || content.globalSettings.whatsappNumber.value}`} className="px-6 py-4 bg-[#0A0F1C] border border-cyan-500/50 hover:border-cyan-400 rounded-lg text-cyan-400 hover:text-white font-black uppercase tracking-widest text-xs md:text-sm text-center active:scale-95 transition-all">
                {content.hero.button2.value}
              </a>
            </div>
            

          </div>

          <div className={`lg:col-span-5 relative group perspective-1000 ${revealClass} delay-200`}>
            <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-indigo-500 rounded-2xl blur-md opacity-50 animate-pulse md:group-hover:opacity-80 transition-opacity duration-700"></div>
            
            <div className="relative bg-[#060D1A]/90 backdrop-blur-xl p-7 md:p-10 rounded-2xl border border-cyan-900/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 md:hover:-translate-y-1 transform-gpu">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-default text-center">Contact <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Us</span></h2>
              
              <SharedForm formId="hero" buttonText="Request Free Consultation" />

              <div className="mt-5 text-center flex items-center justify-center gap-2 text-slate-400 text-xs font-medium">
                <span>🔒 Your information remains completely confidential.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact / Metrics - Animated Counters */}
      <section className={`relative z-10 py-10 md:py-16 px-4 md:px-6 ${revealClass}`}>
        <div className="max-w-7xl mx-auto relative z-10 py-10 md:py-12 border border-white/40 bg-white/95 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.15)] rounded-3xl lg:rounded-[2.5rem] px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 w-full max-w-7xl mx-auto">
             {content.metrics.map((metric: any, i: number) => {
               const MetricIcon = getIcon(metric.icon, Clock);
               
               const cleanValue = metric.value.replace(/,/g, '');
               const numMatch = cleanValue.match(/\d+/);
               const num = numMatch ? parseInt(numMatch[0]) : null;
               const suffix = metric.value.replace(/[\d,]+/, '').trim();
               
               return (
                 <div key={i} className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 text-black active:scale-95 transition-transform duration-200 text-center md:text-left relative">
                    <MetricIcon className="h-10 w-10 text-black drop-shadow-sm shrink-0" />
                    <div>
                      <div className="text-3xl font-black drop-shadow-sm flex justify-center md:justify-start leading-tight">
                        {num !== null ? <AnimatedCounter end={num} suffix={suffix} duration={2000} /> : metric.value}
                      </div>
                      <div className="text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">{metric.label}</div>
                    </div>
                    {/* Right Border Divider for LG screens */}
                    {i < content.metrics.length - 1 && (
                      <div className="hidden lg:block absolute right-[-12px] top-1/2 -translate-y-1/2 w-px h-12 bg-slate-300"></div>
                    )}
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* Why Publication Matters */}
      <section className="relative z-10 py-20 md:py-24" id="why-publish">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className={`text-center mb-12 md:mb-16 ${revealClass}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{renderHeading(content.whyTrustUs.heading?.value || "Your Research Deserves Global Recognition", "text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {whyPublicationsMatter.map((item: any, idx: number) => (
              <div key={idx} className={`group bg-[#060D1A] p-7 md:p-8 rounded-2xl border border-white/5 transition-all duration-500 active:scale-[0.98] md:hover:-translate-y-2 md:hover:rotate-1 md:hover:scale-105 md:hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)] md:hover:border-cyan-500/50 overflow-hidden relative ${revealClass}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors duration-500 pointer-events-none"></div>
                
                {/* Mobile Parallax Icon Background */}
                <div className="absolute -right-8 -bottom-8 opacity-5 text-cyan-400 pointer-events-none transition-transform duration-1000 group-hover:-translate-y-4 group-hover:-translate-x-4">
                   <item.icon className="h-40 w-40" />
                </div>

                <div className="relative z-10">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-[#030712] border border-cyan-900/50 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-white mb-2 md:mb-3 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{item.title}</h3>
                  <p className="text-slate-300 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`max-w-3xl mx-auto text-center border-t border-b border-cyan-900/50 py-8 relative ${revealClass}`}>
            <div className="absolute inset-0 bg-cyan-500/5 blur-xl pointer-events-none"></div>
            <Quote className="h-8 w-8 text-cyan-400 mx-auto mb-4 opacity-50" />
            <p className="text-xl md:text-2xl font-bold text-white italic drop-shadow-md">
              &quot;
              {content.whyTrustUs.quote.value.split(/(?:\\n|\n)/).map((line: string, i: number) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line.trim()}
                </React.Fragment>
              ))}
              &quot;
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="relative z-10 py-20 md:py-24 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          
          <div className={`text-center mb-12 md:mb-16 ${revealClass}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 whitespace-pre-line">{renderHeading(content.trustedPartner.heading?.value || "More Than Publication Support-\nA Trusted Research Partner", "text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {trustCards.map((card: any, idx: number) => (
              <div key={idx} className={`group bg-[#060D1A] p-7 rounded-2xl border border-white/5 transition-all duration-500 active:scale-[0.98] md:hover:-translate-y-2 md:hover:border-indigo-500/50 md:hover:shadow-[0_15px_30px_rgba(99,102,241,0.15)] relative overflow-hidden ${revealClass}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex flex-col h-full relative z-10">
                  <card.icon className="h-10 w-10 text-indigo-400 mb-5 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                  <h3 className="text-xl font-black text-white mb-3 drop-shadow-md">{card.title}</h3>
                  <p 
                    className="text-slate-300 font-medium text-sm leading-relaxed [&>a]:text-cyan-400 [&>a]:hover:underline [&>a]:transition-colors [&>a]:font-bold [&>a]:cursor-pointer"
                    dangerouslySetInnerHTML={{ __html: card.desc }}
                  ></p>
                </div>
              </div>
            ))}
          </div>

          <div className={`relative bg-linear-to-r from-[#0A1326] to-[#030712] border border-cyan-900/50 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] ${revealClass}`}>
            <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-md">{renderHeading(content.trustedPartner.ctaHeading?.value || "Research with Integrity. Publish with Confidence.", "text-cyan-400")}</h3>
              <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
                {content.trustedPartner.ctaText1.value}<br className="hidden md:block" /> {content.trustedPartner.ctaText2.value}
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <a href="#contact" className="px-8 py-4 bg-white text-[#0A0F1C] hover:bg-cyan-50 border border-transparent rounded-lg font-black uppercase tracking-widest text-sm text-center shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95 transition-all inline-block">
                Start Your Journey
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* Our Services */}
      <section className="relative z-10 py-20 md:py-24 overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className={`text-center mb-10 md:mb-20 ${revealClass}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{renderHeading(content.services.heading?.value || "Our Services", "text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]")}</h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {services.map((srv: any, idx: number) => (
              <div key={srv.id} className={`group relative bg-[#060D1A] border border-white/10 rounded-2xl p-8 md:p-12 transition-all duration-500 active:scale-[0.97] lg:hover:-translate-y-2 lg:hover:bg-[#0A1326] ${srv.glow} flex flex-col h-full items-center text-center ${revealClass}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="relative z-10 flex flex-col h-full items-center">
                  <div className={`h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-[#030712] border border-white/10 flex shrink-0 items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 shadow-lg relative overflow-hidden mx-auto`}>
                    <div className="absolute inset-0 bg-white/5 opacity-0 active:opacity-100 transition-opacity"></div>
                    <srv.icon className={`h-8 w-8 md:h-10 md:w-10 ${srv.iconColor} drop-shadow-[0_0_10px_currentColor]`} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-5 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{srv.title}</h3>
                  <div className="w-12 h-1.5 bg-white/10 rounded-full mb-6 group-hover:w-24 group-hover:bg-cyan-500/50 transition-all duration-500 mx-auto"></div>
                  <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base flex-grow max-w-sm">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 md:py-24 bg-black/20 border-y border-white/5 overflow-hidden" id="testimonials">
        <div className="max-w-7xl mx-auto px-5 md:px-6 mb-12 md:mb-16 text-center">
             <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{renderHeading("Scholar Success", "text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]")}</h2>
        </div>
        <div className="w-full relative mt-8">
             <ReviewCarousel reviews={googleReviews} />
        </div>
      </section>

      {/* Our Process - Scroll Linked Line */}
      <section className="relative z-10 py-20 md:py-24" id="process" ref={processRef}>
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className={`text-center mb-16 md:mb-20 ${revealClass}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{renderHeading(content.process.heading?.value || "Our Support Process", "text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]")}</h2>
            </div>

          <div className="relative pl-10 md:pl-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-14 left-16 right-16 h-0.5 bg-white/10 z-0 overflow-hidden rounded-full">
               <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-indigo-500 to-cyan-500 w-full animate-[slide_3s_linear_infinite]"></div>
            </div>

            {/* Mobile Vertical Scroll Line */}
            <div className="absolute left-6.5 top-4 bottom-8 w-0.5 bg-white/10 z-0 md:hidden rounded-full overflow-hidden">
              <div 
                className="w-full bg-gradient-to-b from-cyan-400 to-indigo-500 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(34,211,238,1)]" 
                style={{ height: `${processProgress}%` }}
              ></div>
            </div>

            {processSteps.map((step: { step: string, title: string, desc: string }, idx: number) => {
              // Mobile activation state based on scroll progress
              const isActiveOnMobile = processProgress > (idx * 25);
              return (
                <div key={idx} className={`relative z-10 group ${revealClass}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                  <div className={`bg-[#060D1A] border ${isActiveOnMobile ? 'border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.2)]' : 'border-white/10'} rounded-2xl p-6 md:p-8 h-full md:hover:border-indigo-500/50 transition-all duration-500 active:scale-[0.96] md:hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] md:hover:-translate-y-2 relative`}>
                    
                    {/* Node indicator */}
                    <div className={`absolute -left-12 top-10 md:relative md:left-0 md:top-0 h-10 w-10 md:h-16 md:w-16 rounded-full bg-[#030712] border-2 ${isActiveOnMobile ? 'border-indigo-400 text-white bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]' : 'border-white/20 text-slate-300'} flex items-center justify-center text-sm md:text-xl font-black mb-5 md:mb-6 md:group-hover:bg-indigo-500 md:group-hover:border-indigo-400 md:group-hover:text-white transition-all duration-300 mx-auto md:mx-0 md:group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]`}>
                      {step.step}
                    </div>
                    
                    <h3 className={`text-lg md:text-xl font-black mb-2 md:mb-3 text-left drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] transition-colors duration-300 ${isActiveOnMobile ? 'text-indigo-100' : 'text-white'}`}>{step.title}</h3>
                    <p className="text-slate-300 font-medium text-left leading-relaxed text-sm md:text-base">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs - Enhanced Active Morphing */}
      <section className="relative z-10 py-20 md:py-24 bg-black/30 border-y border-white/5" id="faqs">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <div className={`text-center mb-12 md:mb-16 ${revealClass}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{renderHeading(content.faqs.heading?.value || "Frequently Asked Questions", "text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]")}</h2>
            </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq: { q: string, a: string }, i: number) => (
              <div 
                key={i} 
                className={`border-2 rounded-xl transition-all duration-500 overflow-hidden ${openFaq === i ? 'bg-[#0A1326]/90 backdrop-blur-lg border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.15)] scale-[1.01]' : 'bg-[#060D1A] border-white/5 md:hover:border-white/20'}`}
                style={{ transitionDelay: `${(i % 5) * 50}ms` }}
              >
                <button 
                  className="w-full px-5 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group active:scale-[0.99] transition-transform"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`font-black text-sm md:text-lg pr-4 md:pr-8 transition-colors duration-300 tracking-wide ${openFaq === i ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]' : 'text-white md:group-hover:text-cyan-200'}`}>{faq.q}</span>
                  <div className={`shrink-0 flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full border-2 transition-all duration-500 ${openFaq === i ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400 rotate-180 shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'border-white/10 text-slate-400 bg-[#030712] md:group-hover:border-cyan-500/50 md:group-hover:text-cyan-400'}`}>
                    <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${openFaq === i ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className={`transition-transform duration-500 ${openFaq === i ? 'translate-y-0' : '-translate-y-4'}`}>
                    <RichTextRenderer content={faq.a} className="text-slate-200 font-medium text-sm md:text-base leading-relaxed px-5 md:px-8 pb-6 md:pb-8 pt-1 md:pt-2 border-t border-white/5 mt-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Contact Form */}
      <section className="relative z-10 py-24 md:py-32" id="contact">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <div className={`relative rounded-4xl md:rounded-3xl overflow-hidden bg-[#060D1A] border border-cyan-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group md:hover:border-cyan-400 transition-colors duration-700 ${revealClass}`}>
            
            <div className="absolute top-0 right-0 w-75 md:w-125 h-75 md:h-125 bg-cyan-500/10 rounded-full blur-[80px] md:blur-[100px] md:group-hover:bg-cyan-500/20 transition-colors duration-1000 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative p-6 py-12 md:p-16 text-center backdrop-blur-xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-10 md:mb-12 hover:scale-105 transition-transform duration-300 cursor-default">{renderHeading("Contact Us", "text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]")}</h2>
              
              <div className="max-w-lg mx-auto text-left">
                <SharedForm formId="contact" buttonText="Submit Inquiry" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-10 md:py-12 bg-[#02050D] border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#02050D] to-[#02050D] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 mb-8">
            
            {/* Left Side: Branding & Description (Spans 6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-6 cursor-pointer group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="/WrirkLogoOld.png" alt="WRIrk Logo" width={80} height={80} className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.6)] group-hover:scale-110 transition-transform duration-500" />
                <span className="font-libre text-2xl md:text-3xl tracking-[0.2em] text-white uppercase drop-shadow-lg">WRIRK</span>
              </div>
              
              <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 w-full">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm shrink-0 inline-block">
                  <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest block mb-2">A Product Of</span>
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg md:text-xl font-black text-white whitespace-nowrap">MPRW Research Work</h2>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src="/MPRW-Logo.png" alt="MPRW Logo" width={40} height={40} className="h-10 w-10 object-contain" />
                  </div>
                </div>
                
                <div className="text-slate-400 font-medium leading-relaxed text-sm max-w-sm">
                  {renderParagraphs(content.footer?.description)}
                </div>
              </div>
            </div>

            {/* Middle: Social Links (Spans 3 cols) */}
            <div className="lg:col-span-3 flex flex-col lg:items-center justify-center pt-2">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Connect With Us</h3>
              <div className="flex gap-4">
                {[
                  { id: 'whatsapp', icon: WhatsappIcon, url: content.footer?.socials?.whatsapp, glow: 'rgba(37, 211, 102, 0.4)', borderGlow: 'rgba(37, 211, 102, 0.6)', delay: '0s' },
                  { id: 'facebook', icon: FacebookIcon, url: content.footer?.socials?.facebook, glow: 'rgba(24, 119, 242, 0.4)', borderGlow: 'rgba(24, 119, 242, 0.6)', delay: '0.2s' },
                  { id: 'instagram', icon: InstagramIcon, url: content.footer?.socials?.instagram, glow: 'rgba(225, 48, 108, 0.4)', borderGlow: 'rgba(225, 48, 108, 0.6)', delay: '0.4s' },
                  { id: 'linkedin', icon: LinkedinIcon, url: content.footer?.socials?.linkedin, glow: 'rgba(10, 102, 194, 0.4)', borderGlow: 'rgba(10, 102, 194, 0.6)', delay: '0.6s' },
                  { id: 'youtube', icon: YoutubeIcon, url: content.footer?.socials?.youtube, glow: 'rgba(255, 0, 0, 0.4)', borderGlow: 'rgba(255, 0, 0, 0.6)', delay: '0.8s' }
                ].map((social) => social.url ? (
                  <a 
                    key={social.id} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-300 hover:scale-[1.15] animate-social-float z-10"
                    style={{ 
                      '--glow-color': social.glow, 
                      '--border-glow': social.borderGlow, 
                      animationDelay: social.delay 
                    } as React.CSSProperties}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ) : null)}
              </div>
            </div>

            {/* Right Side: CTA (Spans 3 cols) */}
            <div className="lg:col-span-3 flex flex-col lg:items-end justify-center pt-2">
               <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="group relative inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-[#02050D] px-6 py-3 rounded-lg font-black text-sm transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] overflow-hidden"
               >
                 <span className="relative z-10 flex items-center gap-2">
                   Book a Consultation
                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                 </span>
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
               </button>
            </div>

          </div>
          
          {/* Bottom Copyright Center */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative">
            <p className="text-slate-400 font-medium text-xs">Copyright © 2026 MPRW Research Work LLP. All rights Reserved</p>
            <p className="text-slate-400 font-bold text-xs tracking-widest uppercase flex items-center gap-2">
              INDIA <span className="text-red-500 animate-pulse text-lg">❤️</span>
            </p>
          </div>

        </div>
      </footer>
      
      <PopupForm />
    </main>
  );
}
