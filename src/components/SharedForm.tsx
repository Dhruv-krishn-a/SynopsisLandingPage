'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, Loader2, ArrowRight } from 'lucide-react';

interface SharedFormProps {
  formId: string;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  onSuccess?: () => void;
}

export default function SharedForm({ formId, buttonText, buttonIcon, onSuccess }: SharedFormProps) {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const router = useRouter();

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error('API Request Failed');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        if (onSuccess) onSuccess();
        router.push('/thank-you');
      }, 1200);
      
    } catch(err) {
      console.error('Submission error:', err);
      // Fallback in case of error but want to let user know it failed
      // For now, if it fails because of invalid API key locally, we'll log it
      setSubmitStatus('idle');
      alert('Failed to send Request. Please check API Key configuration.');
    }
  };

  const defaultIcon = <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover/submitbtn:translate-x-1" />;

  const interactionFired = React.useRef(false);
  
  const handleInteraction = () => {
    if (formId !== 'popup' && !interactionFired.current) {
      interactionFired.current = true;
      window.dispatchEvent(new Event('formInteractionStarted'));
    }
  };

  return (
    <form className="space-y-5 w-full" onSubmit={handleSubmit} onFocus={handleInteraction} onClick={handleInteraction}>
      {/* Full Name */}
      <div className="relative group/field">
        <input 
          type="text"
          id={`${formId}-name`}
          className="peer w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors z-10 relative placeholder-transparent" 
          placeholder="Full Name"
          value={formState.name}
          onChange={(e) => setFormState({...formState, name: e.target.value})}
          required
        />
        <label htmlFor={`${formId}-name`} className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:px-1 peer-focus:bg-[#060D1A] peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-[#060D1A] peer-not-placeholder-shown:text-cyan-400 pointer-events-none z-20">Full Name</label>
        {formState.name.length > 2 && <Check className="absolute right-3 top-3.5 h-5 w-5 text-emerald-400 animate-[fadeSlideUp_0.3s_ease-out] drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] z-20" />}
      </div>

      {/* Phone Number */}
      <div className="relative group/field">
        <input 
          type="tel"
          id={`${formId}-phone`}
          className="peer w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors z-10 relative placeholder-transparent" 
          placeholder="Phone Number"
          value={formState.phone}
          onChange={(e) => setFormState({...formState, phone: e.target.value})}
          required
        />
        <label htmlFor={`${formId}-phone`} className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:px-1 peer-focus:bg-[#060D1A] peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-[#060D1A] peer-not-placeholder-shown:text-cyan-400 pointer-events-none z-20">Phone Number</label>
        {formState.phone.length > 6 && <Check className="absolute right-3 top-3.5 h-5 w-5 text-emerald-400 animate-[fadeSlideUp_0.3s_ease-out] drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] z-20" />}
      </div>

      {/* Email Address */}
      <div className="relative group/field">
        <input 
          type="email"
          id={`${formId}-email`}
          className="peer w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors z-10 relative placeholder-transparent" 
          placeholder="Email Address"
          value={formState.email}
          onChange={(e) => setFormState({...formState, email: e.target.value})}
          required
        />
        <label htmlFor={`${formId}-email`} className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:px-1 peer-focus:bg-[#060D1A] peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-[#060D1A] peer-not-placeholder-shown:text-cyan-400 pointer-events-none z-20">Email Address</label>
        {isValidEmail(formState.email) && <Check className="absolute right-3 top-3.5 h-5 w-5 text-emerald-400 animate-[fadeSlideUp_0.3s_ease-out] drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] z-20" />}
      </div>

      {/* Message */}
      <div className="relative group/field">
        <textarea 
          id={`${formId}-message`}
          rows={3}
          className="peer w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors z-10 relative placeholder-transparent resize-none" 
          placeholder="Message"
          value={formState.message}
          onChange={(e) => setFormState({...formState, message: e.target.value})}
          required
        ></textarea>
        <label htmlFor={`${formId}-message`} className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:px-1 peer-focus:bg-[#060D1A] peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-[#060D1A] peer-not-placeholder-shown:text-cyan-400 pointer-events-none z-20">Message</label>
        {formState.message.length > 5 && <Check className="absolute right-3 top-3.5 h-5 w-5 text-emerald-400 animate-[fadeSlideUp_0.3s_ease-out] drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] z-20" />}
      </div>

      {/* Submit Button */}
      <div className="relative group/submitbtn mt-6">
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 to-indigo-500 rounded-lg blur opacity-60 animate-pulse group-hover/submitbtn:opacity-100 transition duration-500"></div>
        <button 
          disabled={submitStatus !== 'idle'} 
          className={`w-full relative overflow-hidden rounded-lg py-4 font-black tracking-widest uppercase text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-transparent hover:border-cyan-400 active:scale-95 disabled:opacity-90 disabled:cursor-not-allowed ${submitStatus !== 'idle' ? 'text-white' : 'bg-white text-[#0A0F1C] hover:text-white'}`}
        >
          <div className={`absolute inset-0 bg-linear-to-r from-cyan-500 to-indigo-600 transform transition-transform duration-300 ease-in-out ${submitStatus !== 'idle' ? 'translate-y-0' : 'translate-y-full group-hover/submitbtn:translate-y-0'}`}></div>
          <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
            {submitStatus === 'idle' && <><span className="relative z-10">{buttonText}</span> {buttonIcon || defaultIcon}</>}
            {submitStatus === 'loading' && <><Loader2 className="h-5 w-5 animate-spin text-white" /> <span>Sending...</span></>}
            {submitStatus === 'success' && <><Check className="h-5 w-5 text-emerald-300" /> <span className="text-white relative z-10">Request Received!</span></>}
          </span>
        </button>
      </div>
    </form>
  );
}
