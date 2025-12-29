import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-purple-400 text-xs font-medium uppercase tracking-wider mb-6">
                        About Media House
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        We Don't Just Edit Videos. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">We Engineer Growth.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        The old agency model is broken. Slow turnaround, high retainers, and "creative strategy" based on guesswork.
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Media House was born to solve this. We combine creative psychology with AI velocity to produce high-performance ad creatives at scale. We are the growth engine for modern D2C brands.
                    </p>

                    <Link to="/manifesto" className="inline-flex px-8 py-4 rounded-full bg-gradient-to-b from-purple-500 to-purple-900 text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] border border-white/10 items-center gap-2">
                        Read Our Manifesto <ArrowRight size={20} />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent mix-blend-overlay" />
                        <img src="/mediahouse_ad.jpg" alt="About Media House" className="w-full h-full object-cover opacity-80" />

                        {/* Floating Stats */}
                        <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                            <div className="text-3xl font-bold text-white mb-1">500+</div>
                            <div className="text-sm text-gray-400">Ads Generated Monthly</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
