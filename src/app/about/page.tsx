"use client";

import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // shadcn/ui Card
import { motion } from "framer-motion"; // Animations

const AboutUsPage = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4">
      <Head>
        <title>About Us | Real Estate</title>
        <meta
          name="description"
          content="Learn more about our real estate team and mission."
        />
      </Head>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">About Us</h1>
            <p className="text-lg text-slate-600">
              Your trusted partner in real estate, delivering exceptional
              service with a timeless approach.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div variants={itemVariants}>
            <Card className="bg-slate-100 border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-black">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We aim to simplify the real estate process, connecting buyers
                  and sellers with transparency and integrity. Whether you’re
                  finding your dream home or selling a property, we’re here to
                  guide you every step of the way.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Our Team */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white border border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-black">
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Our team consists of experienced real estate professionals
                  dedicated to your success:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>
                    <span className="font-medium text-black">John Doe</span> -
                    Lead Agent with over 15 years of experience.
                  </li>
                  <li>
                    <span className="font-medium text-black">Jane Smith</span> -
                    Property Specialist focused on luxury estates.
                  </li>
                  <li>
                    <span className="font-medium text-black">Alex Brown</span> -
                    Marketing Expert ensuring your listings shine.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={itemVariants}>
            <Card className="bg-slate-100 border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-black">
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>✔ Personalized service tailored to your needs.</li>
                  <li>✔ Expert knowledge of the local market.</li>
                  <li>✔ Commitment to honesty and professionalism.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;