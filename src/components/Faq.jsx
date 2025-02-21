import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const faqs = [
    {
      question: "What does this platform do?",
      answer:
        "We help you create Solana-based memecoins and manage their liquidity directly on Raydium, making token creation and trading seamless.",
    },
    {
      question: "Do I need coding skills to create a token?",
      answer:
        "No! Our platform is fully automated, allowing you to create a token in minutes without any coding knowledge.",
    },
    {
      question: "How does liquidity management work?",
      answer:
        "We integrate with Raydium, enabling you to add liquidity, manage pools, and ensure your token is tradable right after creation.",
    },
    {
      question: "How much does it cost to create a token?",
      answer:
        "The cost includes Solana network fees and a small service fee, which will be displayed before confirming your transaction.",
    },
    {
      question: "Can I lock liquidity to prevent rug pulls?",
      answer:
        "Yes, you can lock liquidity for a set period to build trust and protect investors.",
    },
    {
      question: "Do I own my token after creation?",
      answer:
        "Yes! You have full ownership and control, with the option to renounce ownership for decentralization.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black py-16 px-6">
      <h2 className="text-5xl font-bold text-center text-white font-['Roboto'] mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#232323] bg-[#232323] p-4 rounded-lg cursor-pointer shadow-md transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">
                {faq.question}
              </h3>
              <span className="text-white text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-white mt-2 text-lg overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
