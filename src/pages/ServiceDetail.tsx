import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/services';
import { ArrowLeft, Check, Zap } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <Link to="/#services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 mb-8">
                            <service.icon size={32} />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
                        <p className="text-xl text-indigo-400 font-medium mb-8">{service.subtitle}</p>

                        <div className="prose prose-invert prose-lg text-gray-300 mb-12">
                            <div className="whitespace-pre-line leading-relaxed">
                                {service.fullDescription.trim().split('\n').map((line, i) => (
                                    <p key={i}>{line.trim()}</p>
                                ))}
                            </div>
                        </div>

                        <a href="#offer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors">
                            <Zap className="fill-black" size={20} />
                            Start {service.title} ($550/mo)
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-[4/5]"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                            <h3 className="text-lg font-bold mb-2">Capabilities</h3>
                            <ul className="grid grid-cols-2 gap-2">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check size={14} className="text-green-500" />
                                    Fast Turnaround
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check size={14} className="text-green-500" />
                                    Unlimited Revisions
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check size={14} className="text-green-500" />
                                    Source Files
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check size={14} className="text-green-500" />
                                    Dedicated Support
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ServiceDetail;
