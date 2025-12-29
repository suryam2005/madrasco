import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                {/* Main Card */}
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-[#0A0A0A]">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-50" />

                    <div className="relative z-10 px-6 py-16 md:py-24 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-200">Accepting 3 New Brands for Oct</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl"
                        >
                            Your Ad Account Is Begging For <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Better Creative.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
                        >
                            Don't let bad content be the bottleneck. Let us fill your feed with high-performing video assets.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-b from-purple-500 to-purple-900 text-white font-bold text-lg shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                                <span className="flex items-center gap-2">
                                    Book Your Creative Call
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </motion.div>
                        <p className="mt-6 text-sm text-gray-500 flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            No pressure. No pitch. Just value.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
