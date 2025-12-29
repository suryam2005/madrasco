import { motion } from 'framer-motion';
import { Phone, Clapperboard, Rocket } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "The Download",
        description: "We ingest your brand assets, visual identity, and previous winners. We analyze what's working to build your unique creative profile.",
        icon: Phone,
        action: "Briefing"
    },
    {
        number: "02",
        title: "The Engine",
        description: "Our production team generates high-converting scripts and visuals in 24 hours. You get studio-quality assets ready to launch.",
        icon: Clapperboard,
        action: "Production"
    },
    {
        number: "03",
        title: "The Scale",
        description: "We don't stop. We continuously refresh your creative library with new angles and formats to fight ad fatigue and keep you trending.",
        icon: Rocket,
        action: "Refresh"
    }
];

const Process = () => {
    return (
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-medium uppercase tracking-wider mb-6"
                    >
                        Zero Confusion
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our Creative Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-xl mx-auto"
                    >
                        No complex dashboards. No media buying jargon. Just pure, high-quality content delivered on time.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group h-full"
                        >
                            <div className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                                {/* Icon Circle */}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                    <step.icon className="w-6 h-6 text-white" />
                                </div>

                                <span className="absolute top-6 right-6 text-5xl font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors font-sans select-none">
                                    {step.number}
                                </span>

                                <div className="uppercase tracking-widest text-xs font-bold text-indigo-400 mb-3">
                                    {step.action}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
