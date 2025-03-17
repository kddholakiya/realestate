"use client";

import React, { useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button"; // shadcn/ui Button
import { Card, CardContent } from "@/components/ui/card"; // shadcn/ui Card
import { motion } from "framer-motion"; // Animations
import { ChevronDown, ChevronUp } from "lucide-react"; // Icons

const KnockKnockPage = () => {
  const [knocked, setKnocked] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleKnock = () => {
    setKnocked(true);
    setTimeout(() => setKnocked(false), 2000); // Reset after 2 seconds
  };

  const faqs = [
    {
      question: "How do I list my property?",
      answer:
        "Visit the 'Sellers' page, create an account, and submit your property details. We’ll review and list it within 24-48 hours!",
    },
    {
      question: "What types of properties do you offer?",
      answer:
        "We have single-family homes, condos, townhouses, and luxury estates. Check the 'Properties' page for listings!",
    },
    {
      question: "How can I contact an agent?",
      answer:
        "Use the contact form on the 'Buyers' or 'Sellers' page, and we’ll connect you with an expert.",
    },
  ];

  // Animation variants for the knock button
  const buttonVariants = {
    idle: { scale: 1 },
    knocked: { scale: 1.1, rotate: [0, 5, -5, 0], transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Head>
        <title>Knock Knock | Real Estate</title>
        <meta
          name="description"
          content="Notify sellers of your interest and get answers to common questions!"
        />
      </Head>

      <div className="container mx-auto max-w-3xl">
        {/* Knock Knock Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold  mb-4">
            Knock Knock
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Send a knock to let sellers know you’re interested!
          </p>
          <motion.div
            variants={buttonVariants}
            animate={knocked ? "knocked" : "idle"}
          >
            <Button
              onClick={handleKnock}
              disabled={knocked}
              className={`text-lg px-8 py-3 rounded-lg shadow-md transition-all ${
                knocked
                  ? "bg-green-500 hover:bg-green-500"
                  : "bg-slate-600 hover:bg-slate-700"
              } text-white font-semibold`}
            >
              {knocked ? "Knocked! ✅" : "Knock Knock"}
            </Button>
          </motion.div>
        </motion.div>

        {/* FAQs Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent
                className="p-4 cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    {openFAQ === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-600 mt-2"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </div>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFAQ === index ? (
                      <ChevronUp className="text-gray-500" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnockKnockPage;