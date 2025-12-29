import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Play, X } from 'lucide-react';
import { useState } from 'react';

const categories = ['All Industries', 'E-commerce', 'SaaS', 'Beauty', 'Food & Beverage', 'Tech', 'Health & Wellness'];

const libraryAds = [
    { title: "Yoga Bar Energy", category: "Food & Beverage", type: "Image Ad", views: "1.2M", src: "/mediahouse_ad.jpg" },
    { title: "Tech Gadget V2", category: "Tech", type: "Video Ad", views: "850K", src: "/after.png" },
    { title: "Generic To Premium", category: "SaaS", type: "Before/After", views: "2.1M", src: "/after.png" },
    { title: "SkinCare Glow", category: "Beauty", type: "UGC Style", views: "3.4M", src: "/mediahouse_ad.jpg" },
    { title: "Fitness App", category: "Health & Wellness", type: "Motion Graphic", views: "900K", src: "/mediahouse_ad.jpg" },
    { title: "Subscription Box", category: "E-commerce", type: "Unboxing", views: "1.5M", src: "/after.png" },
    { title: "Luxury Watch", category: "E-commerce", type: "Product Showcase", views: "2.8M", src: "/mediahouse_ad.jpg" },
    { title: "AI Assistant", category: "SaaS", type: "Explainer", views: "1.1M", src: "/after.png" },
];

const AdLibrary = () => {
    const [activeCategory, setActiveCategory] = useState('All Industries');
    const [selectedAd, setSelectedAd] = useState<any>(null);

    const filteredAds = activeCategory === 'All Industries'
        ? libraryAds
        : libraryAds.filter(ad => ad.category === activeCategory);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-40 pointer-events-none"></div>
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-purple-400 text-xs font-medium uppercase tracking-wider mb-6"
                    >
                        Winning Creative Library
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                        className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Ad <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Library</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto"
                    >
                        Filter through our high-converting top performers across every major industry.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 ${activeCategory === category
                                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredAds.map((ad) => (
                            <motion.div
                                key={ad.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="group relative rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all shadow-2xl"
                            >
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <img
                                        src={ad.src}
                                        alt={ad.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={() => setSelectedAd(ad)}
                                            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 border border-white/20"
                                        >
                                            <Play fill="white" size={24} className="ml-1" />
                                        </button>
                                    </div>

                                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest border border-white/10">
                                        {ad.type}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">{ad.title}</h3>
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            {ad.views} Views
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm font-medium mb-6">{ad.category}</p>
                                    <button
                                        onClick={() => setSelectedAd(ad)}
                                        className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2"
                                    >
                                        View Case Study <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredAds.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="py-20 text-center"
                    >
                        <p className="text-gray-500 text-xl font-medium">No ads found in this category yet.</p>
                        <button
                            onClick={() => setActiveCategory('All Industries')}
                            className="mt-4 text-indigo-400 font-bold hover:underline"
                        >
                            View All Ads
                        </button>
                    </motion.div>
                )}

                <div className="mt-24 text-center">
                    <div className="p-16 rounded-[48px] bg-[#0A0A0A] border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <h2 className="text-4xl font-bold mb-6 relative z-10">Ready for your own <br />winning creatives?</h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
                            We've produced over 1,000+ top-performing ads for the world's fastest growing brands.
                        </p>
                        <button className="relative z-10 px-10 py-5 rounded-full bg-white text-black font-extrabold text-lg transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                            Book Your Creative Audit
                        </button>
                    </div>
                </div>

            </main>

            {/* Ad Preview Modal */}
            <AnimatePresence>
                {selectedAd && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
                        onClick={() => setSelectedAd(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="relative max-w-5xl w-full bg-[#0A0A0A] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedAd(null)}
                                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="aspect-[4/5] bg-black">
                                    <img
                                        src={selectedAd.src}
                                        alt={selectedAd.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-12 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                                        Creative Breakdown
                                    </div>
                                    <h2 className="text-4xl font-bold mb-4">{selectedAd.title}</h2>
                                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                        This {selectedAd.type} was designed for the {selectedAd.category} industry, achieving over {selectedAd.views} views with a record-breaking ROAS.
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-10">
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                            <div className="text-2xl font-bold mb-1">4.2%</div>
                                            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Avg. CTR</div>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                            <div className="text-2xl font-bold mb-1">82%</div>
                                            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Hook Rate</div>
                                        </div>
                                    </div>

                                    <button className="w-full py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/20">
                                        Adopt This Strategy
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};


export default AdLibrary;
