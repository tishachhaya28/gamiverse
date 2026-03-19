"use client";

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { submitContact } from '@/lib/api';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: (res: any) => {
      if (res.success) setSubmitted(true);
    },
    onError: (err: any) => {
      console.error("Submission error:", err);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight text-center">Contact Us</h1>
      
      {submitted ? (
        <div className="bg-green-50 border border-green-100 p-12 rounded-[3rem] text-center animate-in fade-in zoom-in duration-500">
           <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
           </div>
           <h2 className="text-2xl font-black text-green-900 mb-2 uppercase">Message Sent!</h2>
           <p className="text-green-700 font-medium">We'll get back to you within 24-48 hours. Thank you for reaching out!</p>
           <button onClick={() => setSubmitted(false)} className="mt-8 text-green-600 font-bold hover:underline">Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-blue-50/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
              <input 
                required 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-primary shadow-inner" 
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                required 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-primary shadow-inner" 
                placeholder="john@example.com" 
              />
            </div>
          </div>
          <div className="space-y-2 mb-8">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Subject</label>
            <input 
              required 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text" 
              className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-primary shadow-inner" 
              placeholder="Partnership Inquiry / Feedback" 
            />
          </div>
          <div className="space-y-2 mb-10">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Message</label>
            <textarea 
              required 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5} 
              className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-primary shadow-inner resize-none" 
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-primary-dark transition-all flex items-center justify-center space-x-3 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <>
                <span className="uppercase tracking-widest">Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      )}

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-sm">
         <div className="space-y-2">
            <h4 className="font-black text-gray-900 uppercase">Support</h4>
            <p className="text-gray-500">support@gamiverse.com</p>
         </div>
         <div className="space-y-2">
            <h4 className="font-black text-gray-900 uppercase">General</h4>
            <p className="text-gray-500">hello@gamiverse.com</p>
         </div>
         <div className="space-y-2">
            <h4 className="font-black text-gray-900 uppercase">Press</h4>
            <p className="text-gray-500">press@gamiverse.com</p>
         </div>
      </div>
    </div>
  );
}
