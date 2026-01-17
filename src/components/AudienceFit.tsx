import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const AudienceFit = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-zinc-950 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Who This Is For</h2>
                    <p className="text-gray-400 text-lg">We work best with ambitious brands ready to scale.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Ideal Client */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-green-950/10 border border-green-500/20"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle2 className="text-green-500" size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Ideally You Are...</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Spending $5k+ / month on ads",
                                "Found Product-Market Fit",
                                "Need volume to test new angles",
                                "Tired of managing reliable freelancers",
                                "Ready to scale aggressively"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={16} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not For */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-red-950/10 border border-red-500/20"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                                <XCircle className="text-red-500" size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">This is NOT for...</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Just starting out (Pre-revenue)",
                                "Looking for full marketing strategy",
                                "Micromanagers who need 10 revisions",
                                "Dropshippers with short term products",
                                "Brands with no existing assets"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <XCircle className="text-red-500 shrink-0 mt-1" size={16} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AudienceFit;
