import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Offer = () => {
    useEffect(() => {
        // Ensure PayPal script is loaded
        const containerId = '#paypal-button-container-P-92A18540G9148843ENFYKYMA';

        const renderPayPalButton = () => {
            if ((window as any).paypal) {
                const container = document.querySelector(containerId);
                if (container) {
                    container.innerHTML = ""; // Clear existing buttons to prevent duplicates

                    try {
                        (window as any).paypal.Buttons({
                            style: {
                                shape: 'pill',
                                color: 'gold',
                                layout: 'vertical',
                                label: 'subscribe'
                            },
                            createSubscription: function (data: any, actions: any) {
                                return actions.subscription.create({
                                    plan_id: 'P-92A18540G9148843ENFYKYMA'
                                });
                            },
                            onApprove: function (data: any, actions: any) {
                                alert("Subscription successful! ID: " + data.subscriptionID);
                            }
                        }).render(containerId);
                    } catch (err) {
                        console.error("PayPal render error:", err);
                    }
                }
            }
        };

        // If script is already loaded
        if ((window as any).paypal) {
            renderPayPalButton();
        } else {
            // Poll for it briefly if not yet ready (though it's in head)
            const interval = setInterval(() => {
                if ((window as any).paypal) {
                    clearInterval(interval);
                    renderPayPalButton();
                }
            }, 500);
            return () => clearInterval(interval);
        }

    }, []);

    return (
        <section id="offer" className="py-24 px-6 md:px-12 bg-black relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-medium uppercase tracking-wider mb-6">
                        Simple Pricing
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        One Plan. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Unlimited Growth.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">No hidden fees. Pause or cancel anytime.</p>
                </div>

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-[#0A0A0A] border border-purple-500/30 rounded-[40px] p-8 md:p-12 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Creative Velocity</h3>
                            <p className="text-gray-400 mb-8">Everything you need to scale your ad accounts.</p>

                            <div className="flex flex-col gap-2 mb-8">
                                <div className="inline-flex w-fit items-center gap-2 px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase tracking-wider">
                                    Beta Access: Join our Performance Council (Limited to 5 Founder-Led Brands)
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-5xl font-bold text-white">$550</span>
                                        <span className="text-gray-500">/month</span>
                                    </div>
                                    <p className="text-sm text-gray-400">Flat rate. Pause or cancel anytime.</p>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-red-400 font-medium mt-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    Includes: Unlimited Requests, 48h Turnaround, Unlimited Revisions
                                </div>
                            </div>

                            <div id="paypal-button-container-P-92A18540G9148843ENFYKYMA" className="mb-6 z-0 relative"></div>

                            <p className="text-center text-xs text-gray-500">Async onboarding. Cancel anytime.</p>
                        </div>

                        <div className="space-y-4">
                            <p className="font-semibold text-white mb-4">What's Included:</p>
                            {[
                                "Unlimited Performance Requests (Active one at a time)",
                                "48-Hour Rapid Deployment (Average turnaround)",
                                "High-Fidelity AI Renders (Nano-Native quality)",
                                "Strategic Hook & Headline Variations",
                                "Static, Motion & UGC Post-Production",
                                "Direct Async Communication (No meetings, just execution)",
                                "Full Ownership & Native Source Files"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                        <Check size={14} className="text-purple-400" />
                                    </div>
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Offer;
