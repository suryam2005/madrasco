import { motion } from 'framer-motion';
import BeforeAfter from './BeforeAfter';
import HooksVariations from './HooksVariations';
import Services from './Services';

const Solution = () => {
    return (
        <section className="bg-black relative pt-12">
            <div className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <span className="text-blue-500 font-bold tracking-widest uppercase mb-4 block text-lg">
                        The Solution
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
                        Creative Velocity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">At Scale</span>
                    </h2>
                    <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
                        We don't just clear your backlog. We give you a strategic advantage by flooding your ad account with high-performing creatives.
                    </p>
                </motion.div>
            </div>

            {/* Components that demonstrate the solution */}
            <Services />
            <BeforeAfter />
            <HooksVariations />
        </section>
    );
};

export default Solution;
