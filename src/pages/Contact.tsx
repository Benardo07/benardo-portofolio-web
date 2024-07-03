"use client"
import RevealRL from '@/components/animations/revealIRL';
import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors on input change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: FormErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "0c789c75-d2e2-44df-bfde-b3315dafea9a",
            ...formData,
          }),
        });

        const result = await response.json();
        if (result.success) {
          console.log(result);
          alert("Form submitted successfully!");
          setFormData({ name: '', email: '', message: '' }); // Reset form
          setErrors({ name: '', email: '', message: '' }); // Clear errors
        } else {
          console.error("Submission failed", result.message);
          alert("Submission failed: " + result.message);
        }
      } catch (error) {
        console.error("Network error", error);
        alert("Network error: " + error);
      }
    }
  }

  return (
    <div className='w-full h-lvh flex items-center justify-center flex-col'>
        <div className="h-28 w-full flex flex-row items-center justify-center gap-10 px-10">
            <div className="border-b-8 border-[#00ffff] w-full"></div>  {/* Line before ABOUT ME */}
            <h1 className="text-white whitespace-nowrap font-bold text-2xl md:text-4xl lg:text-6xl mt-2 mb-2">CONTACT ME</h1>
            <div className="border-b-8 border-[#00ffff] w-full"></div>  {/* Line after ABOUT ME */}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-3/4 max-w-[700px] mx-auto my-10 flex flex-col gap-5">
            
            <RevealRL custom={1}>
                <div>
                    <label htmlFor="name" className="block text-2xl font-bold text-white">Name</label>
                    <input type="text" name="name" value={formData.name} required placeholder="Your name"
                            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={handleChange}/>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
            </RevealRL>
            <RevealRL custom={2}>
                <div>
                    <label htmlFor="email" className="block text-2xl font-bold text-white">Email</label>
                    <input type="email" name="email" value={formData.email} required placeholder="email@example.com"
                            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={handleChange}/>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
            </RevealRL>
            <RevealRL custom={3}>
                <div>
                    <label htmlFor="message" className="block text-2xl font-bold text-white">Message</label>
                    <textarea name="message" value={formData.message} required rows={5} placeholder="Enter your message"
                                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={handleChange}></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
            </RevealRL>
            <RevealRL custom={3.5}>
                <button type="submit" className="w-[150px] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#00ffff] text-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit Form
                </button>
            </RevealRL>
        </form>
    </div>
  );
}
