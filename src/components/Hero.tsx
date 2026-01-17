import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Scarcity Banner */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 flex flex-col items-center gap-2"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider">
                    Beta Pricing - Jan Only
                </div>
                <div className="flex items-center gap-2 text-sm text-red-400 font-medium">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Only 2 spots left (Onboarding 5 total)
                </div>
            </motion.div>

            {/* Creating text hierarchy */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 max-w-4xl mx-auto text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
                The Unlimited Creative Engine <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500 drop-shadow-none">For D2C Brands.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 max-w-xl mx-auto text-base md:text-lg text-gray-400 mb-8"
            >
                We deliver studio-quality AI UGC, static ads, and video creatives on autopilot. Flat monthly rate. Pause anytime. No product shipping required.
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative z-10 flex flex-col items-center justify-center gap-5"
            >
                <div className='flex flex-wrap justify-center gap-4'>
                    <a href="#offer" className="px-8 py-4 rounded-full bg-gradient-to-b from-purple-500 to-purple-900 text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] border border-white/10 ring-1 ring-white/20">
                        Start Subscription
                    </a>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xs text-gray-500">
                        *Async Onboarding. Start in 5 minutes.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 border border-white/5 bg-white/[0.02] px-3 py-1 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        Capacity Updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-green-500" /> Dedicated Creative Team</span>
                    <span className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-indigo-500" /> Monthly Creative Refresh</span>
                    <span className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-purple-500" /> &lt; 24h Turnaround</span>
                </div>
            </motion.div>

            {/* Bottom Glow Horizon */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
        </section>
    );
};

export default Hero;
