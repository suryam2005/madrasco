import { motion } from 'framer-motion';
import BeforeAfter from './BeforeAfter';
import HooksVariations from './HooksVariations';
import Services from './Services';

const Solution = () => {
    return (
        <section className="bg-black relative">
            <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6">
                        The Solution
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Creative Velocity at Scale
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
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
