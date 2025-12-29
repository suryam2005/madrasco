import { motion } from 'framer-motion';
import { Layers, Copy, Zap, Repeat } from 'lucide-react';

const HooksVariations = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-black relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-indigo-400 text-xs font-medium uppercase tracking-wider mb-6"
                    >
                        <Zap size={14} /> Maximum Testing
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">One Core Idea.<br />Infinite <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Hooks & Variations.</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">We don't bet on one horse. We run multiple hooks, visual styles, and angles to find the winner fast.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                            <Layers size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Visual Stacks</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Testing different aesthetic styles (3D, Cinematic, Minimal) to see what resonates with your audience.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
                            <Copy size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Hook Variations</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Scroll-stopping text overlays and opening frames. We test 10+ hooks for every concept.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                            <Repeat size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Format Adaptation</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Automatically resized and reformatted for Stories, Reels, Feeds, and Landscape placements.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HooksVariations;
