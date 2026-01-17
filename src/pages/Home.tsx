import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import AudienceFit from '../components/AudienceFit';
import Authority from '../components/Authority';
import Process from '../components/Process';
import Offer from '../components/Offer';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-40 pointer-events-none"></div>
            <div className="fixed inset-0 z-[-1] bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none fade-bottom"></div>
            {/* Leaking Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2 mix-blend-screen"></div>

            <Navbar />
            <Hero />
            <Problem />
            <Solution />
            <AudienceFit />
            <Authority />
            <Process />
            <Offer />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
