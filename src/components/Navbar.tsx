import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/5"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="MediaHouse" className="w-8 h-8 rounded-lg" />
                        <Link to="/" className="text-xl font-bold tracking-tight">THESIS</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                        <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
                        <a href="/#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
                        <a href="/#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
                        <Link to="/ad-library" className="text-sm text-gray-400 hover:text-white transition-colors">Our Work</Link>
                        <a href="/#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#offer" className="hidden md:flex group relative px-6 py-2 rounded-full bg-gradient-to-b from-purple-500 to-purple-900 text-white font-medium text-sm overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Start ($550/mo)
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-black flex flex-col md:hidden"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <img src="/logo.png" alt="MediaHouse" className="w-8 h-8 rounded-lg" />
                                <span className="text-xl font-bold tracking-tight">MEDIAHOUSE</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-white/70 hover:text-white transition-colors"
                            >
                                <X />
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <div className="flex flex-col gap-8 text-center justify-center flex-1 p-6">
                            <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-white">Home</Link>
                            <a href="/#about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-white">About</a>
                            <a href="/#services" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-white">Services</a>
                            <Link to="/ad-library" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-white">Our Work</Link>
                            <a href="/#faq" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-white">FAQ</a>

                            <a href="#offer" onClick={() => setIsOpen(false)} className="mt-8 group relative px-8 py-4 rounded-full bg-gradient-to-b from-purple-500 to-purple-900 text-white font-bold text-xl overflow-hidden transition-all flex items-center justify-center">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Start ($550/mo)
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
