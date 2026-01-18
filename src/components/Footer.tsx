import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/10 bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">T</div>
                    <span className="text-xl font-bold tracking-tight text-white">Thesis Creative</span>
                </div>

                <div className="flex items-center gap-8">
                    <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                        <Linkedin size={20} />
                    </a>
                </div>

                <div className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Thesis Creative. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
