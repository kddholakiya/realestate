"use client";

import React, { useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button"; // shadcn/ui Button
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // shadcn/ui Card
import { Input } from "@/components/ui/input"; // shadcn/ui Input
import { Textarea } from "@/components/ui/textarea"; // shadcn/ui Textarea
import { motion } from "framer-motion"; // Animations
import { Mail, Phone, MapPin } from "lucide-react"; // Icons

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e : any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call if needed)
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000); // Reset after 2 seconds
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4">
      <Head>
        <title>Contact Us | Real Estate</title>
        <meta
          name="description"
          content="Get in touch with our real estate team for assistance."
        />
      </Head>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
            <p className="text-lg text-slate-600">
              We’re here to help with all your real estate needs. Reach out today!
            </p>
          </motion.div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-slate-100 border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-black">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white text-black border-slate-300 focus:border-black"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white text-black border-slate-300 focus:border-black"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      
                      required
                      className="bg-white text-black border-slate-300 focus:border-black resize-none"
                    />
                    <Button
                      type="submit"
                      disabled={submitted}
                      className={`w-full ${
                        submitted
                          ? "bg-green-500 hover:bg-green-500"
                          : "bg-black hover:bg-slate-800"
                      } text-white font-semibold`}
                    >
                      {submitted ? "Sent! ✅" : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white border border-slate-200 shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-black">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-slate-600" />
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <p className="text-slate-700">support@realestate.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-slate-600" />
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <p className="text-slate-700">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-slate-600" />
                    <div>
                      <p className="font-medium text-black">Address</p>
                      <p className="text-slate-700">
                        123 Slate Street, Realty City, USA
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsPage;