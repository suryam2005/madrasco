import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const BeforeAfter = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Stop using <span className="text-red-500 line-through decoration-red-500/50">boring ads.</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg">See the difference AI-driven creativity makes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center px-2 md:px-0">
                    {/* Before */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative group h-full"
                    >
                        <div className="absolute -inset-1 bg-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-6 bg-white/5 rounded-3xl border border-white/10 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                                <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                                    <X size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Traditional Ads</h3>
                                    <p className="text-xs text-gray-400">Low engagement, expensive</p>
                                </div>
                            </div>

                            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6 grayscale opacity-80 border border-white/5">
                                <img src="/before.png" alt="Generic Ad" className="w-full h-full object-cover" />
                            </div>

                            <ul className="space-y-3 mt-auto">
                                <li className="flex items-center gap-3 text-gray-400 text-sm">
                                    <X size={16} className="text-red-500 shrink-0" /> Slow turnaround time (weeks)
                                </li>
                                <li className="flex items-center gap-3 text-gray-400 text-sm">
                                    <X size={16} className="text-red-500 shrink-0" /> Expensive production costs
                                </li>
                                <li className="flex items-center gap-3 text-gray-400 text-sm">
                                    <X size={16} className="text-red-500 shrink-0" /> Generic stock footage
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* After */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative group h-full"
                    >
                        <div className="absolute -inset-1 bg-primary/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-emerald-400 to-cyan-400" />
                        <div className="relative p-6 bg-gray-900 rounded-3xl border border-emerald-500/30 ring-1 ring-emerald-500/20 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                    <Check size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Media House Creative</h3>
                                    <p className="text-xs text-gray-400">High CTR, Vibrant, Brand-Aligned</p>
                                </div>
                            </div>

                            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6 border border-emerald-500/20 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                                <img src="/mediahouse_ad.jpg" alt="High Converting Ad" className="w-full h-full object-cover" />
                            </div>

                            <ul className="space-y-3 mt-auto">
                                <li className="flex items-center gap-3 text-white text-sm font-medium">
                                    <Check size={16} className="text-emerald-400 shrink-0" /> 3D Elements & Dynamic Shadows
                                </li>
                                <li className="flex items-center gap-3 text-white text-sm font-medium">
                                    <Check size={16} className="text-emerald-400 shrink-0" /> Key Benefits highlighted clearly
                                </li>
                                <li className="flex items-center gap-3 text-white text-sm font-medium">
                                    <Check size={16} className="text-emerald-400 shrink-0" /> Scroll-stopping color psychology
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
