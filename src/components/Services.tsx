import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-purple-400 text-xs font-medium uppercase tracking-wider mb-6">
                    Our Capabilities
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Performance.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0A0A0A] rounded-[32px] border border-white/5 overflow-hidden hover:border-white/10 transition-colors p-2"
                    >
                        <Link to={`/services/${service.id}`} className="block h-full">
                            {/* Top Content */}
                            <div className="p-6 pb-2">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                                        <service.icon size={24} />
                                    </div>
                                    <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                                <p className="text-sm text-gray-400 font-medium mb-6">{service.subtitle}</p>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12 line-clamp-3">
                                    {service.description}
                                </p>
                            </div>

                            {/* Bottom Image */}
                            <div className="w-full h-48 rounded-[24px] overflow-hidden relative mt-auto">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
