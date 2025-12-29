import { ArrowLeft, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Manifesto = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <Navbar />
            <section className="pt-32 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-3xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        The Creative <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Manifesto.</span>
                    </h1>

                    <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        <p>
                            We believe the old way of advertising is dead. The era of spending weeks on a single "hero video" and praying it works is over.
                        </p>
                        <p>
                            Today, <strong>volume is the new variable for success.</strong>
                        </p>
                        <p>
                            But volume without quality is just noise. That's why we built Media House. To bridge the gap between high-frequency content and brand-safe quality.
                        </p>

                        <hr className="border-white/10 my-12" />

                        <h3 className="text-2xl font-bold text-white mb-4">Our Core Beliefs</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <CheckCircle className="text-purple-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="text-white block mb-1">Speed is a feature.</strong>
                                    If it takes 2 weeks to ship an ad, the trend is already gone. We ship in 24 hours.
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle className="text-purple-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="text-white block mb-1">Data over opinions.</strong>
                                    We don't care what we "like". We care what the algorithm rewards.
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle className="text-purple-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="text-white block mb-1">Fatigue is the enemy.</strong>
                                    The only way to win is to out-produce the decay of your winning ads.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to join the new era?</h3>
                        <button className="px-8 py-4 rounded-full bg-gradient-to-b from-purple-500 to-purple-900 text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] border border-white/10">
                            Book Creative Call
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Manifesto;
