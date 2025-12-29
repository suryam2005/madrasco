import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/5"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="MediaHouse" className="w-8 h-8 rounded-lg" />
                    <Link to="/" className="text-xl font-bold tracking-tight">MEDIAHOUSE</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                    <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
                    <a href="/#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
                    <a href="/#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
                    <Link to="/ad-library" className="text-sm text-gray-400 hover:text-white transition-colors">Ad Library</Link>
                    <a href="/#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:flex group relative px-6 py-2 rounded-full bg-gradient-to-b from-purple-500 to-purple-900 text-white font-medium text-sm overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        <span className="relative z-10 flex items-center gap-2">
                            Book Creative Call
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10 mt-4 -mx-6 px-6"
                    >
                        <div className="flex flex-col gap-4 py-8">
                            <Link to="/" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white">Home</Link>
                            <a href="/#about" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white">About</a>
                            <a href="/#services" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white">Services</a>
                            <Link to="/ad-library" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white">Ad Library</Link>
                            <a href="/#faq" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white">FAQ</a>

                            <button className="w-full mt-4 group relative px-6 py-3 rounded-full bg-gradient-to-b from-purple-500 to-purple-900 text-white font-medium text-lg overflow-hidden transition-all">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Book Creative Call
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
