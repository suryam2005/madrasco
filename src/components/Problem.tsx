import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, XCircle } from 'lucide-react';

const problems = [
    {
        icon: Clock,
        title: "Slow Turnaround",
        description: "Traditional agencies take weeks to deliver one creative concept. By then, the trend is dead."
    },
    {
        icon: DollarSign,
        title: "High Retainers",
        description: "Paying $5k+ monthly retainers for 'strategy' calls with zero tangible output?"
    },
    {
        icon: AlertTriangle,
        title: "Ad Fatigue",
        description: "Your winners die out in days. You need volume to combat fatigue, but you can't afford it."
    },
    {
        icon: XCircle,
        title: "Inconsistent Quality",
        description: "Freelancers are hit or miss. One good video, three bad ones. No reliability."
    }
];

const Problem = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        The <span className="text-red-500">Old Way</span> is Broken.
                    </motion.h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Scaling ads in 2025 requires velocity and variety. Traditional creative workflows can't keep up.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900 transition-colors"
                        >
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                                <item.icon className="text-red-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
