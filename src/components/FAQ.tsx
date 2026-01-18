import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "Why no meetings?",
        answer: "Meetings kill momentum. By working asynchronously, we deliver in 48 hours what takes traditional agencies 2 weeks."
    },
    {
        question: "How do I give feedback?",
        answer: "Everything happens in your dashboard. Leave a comment, and we’ll have the revision back to you within 24 hours."
    },
    {
        question: "Is this real UGC or AI UGC?",
        answer: "We specialize in AI UGC. This means we use AI avatars and synthesized voices to create 'user-generated' style content without the hassle of shipping products or managing creators. It's faster, cheaper, and perfectly consistent."
    },
    {
        question: "What formats do you deliver?",
        answer: "We deliver AI Static Ads and AI Video Ads. Whether you need scroll-stopping image variations or high-retention video hooks, our AI engine generates platform-native assets for Meta, TikTok, and YouTube."
    },
    {
        question: "Is there a long-term contract?",
        answer: "Never. We operate on a month-to-month flat rate. You can pause or cancel anytime if your creative needs change. We earn your business every single month."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Left Side: Header */}
                <div className="lg:col-span-5 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-medium uppercase tracking-wider mb-6"
                    >
                        Trust Builder
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Objection Killer
                    </motion.h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Everything you need to know before we scale together. No hidden fees, no surprises.
                    </p>
                    <button className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors">
                        Ask a Question
                    </button>
                </div>

                {/* Right Side: Accordion */}
                <div className="lg:col-span-7 space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.04] transition-colors"
                            >
                                <span className="font-bold text-lg pr-4">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-indigo-400 shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                                )}
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="p-6 pt-0 text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
