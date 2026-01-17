import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Upload, Trash2, AlertCircle } from 'lucide-react';
import { adsData, categories, Ad } from '../data/ads';
import Navbar from '../components/Navbar';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [ads, setAds] = useState<Ad[]>(adsData);
    const [isAdding, setIsAdding] = useState(false);

    // Form state
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(categories[0]);
    const [type, setType] = useState('Video Ad');
    const [views, setViews] = useState('0K');
    const [file, setFile] = useState<File | null>(null);
    const [previewSrc, setPreviewSrc] = useState<string>('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple hardcoded password for demonstration
        if (password === 'admin123') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Invalid password');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreviewSrc(URL.createObjectURL(selectedFile));
        }
    };

    const handleAddAd = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock new ad creation
        const newAd: Ad = {
            title,
            category,
            type,
            views,
            src: previewSrc || '/mediahouse_ad.jpg', // Fallback
        };

        setAds([newAd, ...ads]);
        setIsAdding(false);
        resetForm();
    };

    const deleteAd = (index: number) => {
        const newAds = [...ads];
        newAds.splice(index, 1);
        setAds(newAds);
    };

    const resetForm = () => {
        setTitle('');
        setCategory(categories[0]);
        setType('Video Ad');
        setViews('0K');
        setFile(null);
        setPreviewSrc('');
    };

    const isVideo = (src: string) => {
        // Simple check, in real app check file type
        return src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.mov') || src.toLowerCase().endsWith('.webm') || (file?.type.startsWith('video/'));
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="max-w-md w-full p-8 rounded-3xl bg-[#0A0A0A] border border-white/10">
                    <h2 className="text-2xl font-bold mb-6 text-center">Admin Access</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                                placeholder="Enter password"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all"
                        >
                            Login
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-4">
                            Default password: admin123
                        </p>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
            {/* Navbar for context, or simple header */}
            <Navbar />

            <div className="pt-32 px-6 max-w-7xl mx-auto pb-24">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Ad Management</h1>
                        <p className="text-gray-400">Manage your creative library assets</p>
                    </div>
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all"
                    >
                        <Plus size={20} /> Add New Ad
                    </button>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10">
                        <div className="text-gray-400 text-sm font-medium mb-1">Total Assets</div>
                        <div className="text-3xl font-bold">{ads.length}</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10">
                        <div className="text-gray-400 text-sm font-medium mb-1">Video Ads</div>
                        <div className="text-3xl font-bold">{ads.filter(a => a.type.includes('Video') || a.src.endsWith('.mov') || a.src.endsWith('.mp4')).length}</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10">
                        <div className="text-gray-400 text-sm font-medium mb-1">Latest Update</div>
                        <div className="text-3xl font-bold">Today</div>
                    </div>
                </div>

                {/* Ads Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ads.map((ad, index) => (
                        <div key={index} className="group relative rounded-2xl bg-[#0A0A0A] border border-white/10 overflow-hidden hover:border-white/20 transition-all">
                            <div className="aspect-video relative bg-gray-900 border-b border-white/5">
                                {ad.src.endsWith('.mp4') || ad.src.endsWith('.mov') || ad.src.startsWith('blob:') ? (
                                    <video src={ad.src} className="w-full h-full object-cover" muted loop playsInline onMouseEnter={e => e.currentTarget.play()} onMouseLeave={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }} />
                                ) : (
                                    <img src={ad.src} alt={ad.title} className="w-full h-full object-cover" />
                                )}
                                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => deleteAd(index)} className="p-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all backdrop-blur-md border border-red-500/20">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/60 backdrop-blur text-[10px] font-bold uppercase border border-white/10">
                                    {ad.type}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg truncate pr-4">{ad.title}</h3>
                                    <span className="text-xs font-mono text-gray-500">{ad.views}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">{ad.category}</p>
                                <div className="flex gap-2 text-xs text-gray-600 font-mono break-all">
                                    {ad.src.split('/').pop()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add Modal */}
                <AnimatePresence>
                    {isAdding && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setIsAdding(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="w-full max-w-2xl bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                                    <h2 className="text-xl font-bold">Add New Creative</h2>
                                    <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                        <X size={20} />
                                    </button>
                                </div>

                                <form onSubmit={handleAddAd} className="p-8 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={title}
                                                    onChange={e => setTitle(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                                                    placeholder="e.g. Summer Campaign V1"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                                                <select
                                                    value={category}
                                                    onChange={e => setCategory(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 appearance-none"
                                                >
                                                    {categories.map(c => <option key={c} value={c} className="bg-black">{c}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Type</label>
                                                <input
                                                    type="text"
                                                    value={type}
                                                    onChange={e => setType(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                                                    placeholder="e.g. Video Ad, UGC"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Views (Display)</label>
                                                <input
                                                    type="text"
                                                    value={views}
                                                    onChange={e => setViews(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                                                    placeholder="e.g. 1.2M"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="h-full">
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Upload Asset</label>
                                                <div className="h-[calc(100%-2rem)] min-h-[200px] border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center relative bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer overflow-hidden">
                                                    <input
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        className="absolute inset-0 opacity-0 cursor-pointer z-20"
                                                        accept="image/*,video/*"
                                                    />
                                                    {previewSrc ? (
                                                        <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
                                                            {isVideo(previewSrc) ? (
                                                                <video src={previewSrc} className="w-full h-full object-contain" />
                                                            ) : (
                                                                <img src={previewSrc} className="w-full h-full object-contain" />
                                                            )}
                                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <p className="font-bold">Change File</p>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="text-center p-6">
                                                            <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 text-indigo-400">
                                                                <Upload size={24} />
                                                            </div>
                                                            <p className="font-medium mb-1">Click to upload</p>
                                                            <p className="text-xs text-gray-500">MP4, MOV, PNG, JPG</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-amber-400 text-xs bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/20">
                                            <AlertCircle size={14} />
                                            <span>Preview Mode: Changes are local only</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setIsAdding(false)}
                                                className="px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-medium"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-bold shadow-lg shadow-indigo-500/20"
                                            >
                                                Add Creative
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Admin;
