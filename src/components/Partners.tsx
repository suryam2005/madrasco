

const companies = [
    "BrandOne", "EcoFlow", "TechGear", "LuxeSkin", "UrbanWear", "FitLife", "PureGlow", "SwiftLogistics"
];

const Partners = () => {
    return (
        <section className="py-10 bg-black overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">Trusted by 50+ Fastest Growing Brands</p>
            </div>
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-scroll flex gap-12 whitespace-nowrap min-w-full items-center">
                    {companies.map((company, index) => (
                        <div key={index} className="flex items-center justify-center min-w-[150px]">
                            <span className="text-2xl font-bold text-white/20 uppercase font-sans hover:text-white/40 transition-colors">{company}</span>
                        </div>
                    ))}
                    {companies.map((company, index) => (
                        <div key={`duplicate-${index}`} className="flex items-center justify-center min-w-[150px]">
                            <span className="text-2xl font-bold text-white/20 uppercase font-sans hover:text-white/40 transition-colors">{company}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
