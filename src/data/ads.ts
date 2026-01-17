export interface Ad {
    title: string;
    category: string;
    type: string;
    views: string;
    src: string;
}

export const adsData: Ad[] = [
    { title: "Yoga Bar Energy", category: "Food & Beverage", type: "Image Ad", views: "1.2M", src: "/mediahouse_ad.jpg" },
    { title: "Tech Gadget V2", category: "Tech", type: "Video Ad", views: "850K", src: "/after.png" },
    { title: "Generic To Premium", category: "SaaS", type: "Before/After", views: "2.1M", src: "/after.png" },
    { title: "SkinCare Glow", category: "Beauty", type: "UGC Style", views: "3.4M", src: "/mediahouse_ad.jpg" },
    { title: "Fitness App", category: "Health & Wellness", type: "Motion Graphic", views: "900K", src: "/mediahouse_ad.jpg" },
    { title: "Subscription Box", category: "E-commerce", type: "Unboxing", views: "1.5M", src: "/after.png" },
    { title: "Luxury Watch", category: "E-commerce", type: "Product Showcase", views: "2.8M", src: "/mediahouse_ad.jpg" },
    { title: "AI Assistant", category: "SaaS", type: "Explainer", views: "1.1M", src: "/after.png" },
    { title: "My Trio Rings", category: "E-commerce", type: "Video Ad", views: "5.2M", src: "/ads/MYTRIORINGS-2-revised - HD 1080p.mov" },
    { title: "True Classic", category: "E-commerce", type: "Video Ad", views: "4.1M", src: "/ads/TRUECLASSIC3 - HD 1080p.mov" },
    { title: "Pod Company", category: "Tech", type: "Video Ad", views: "3.8M", src: "/ads/PODCOMPANY2 - HD 1080p.mov" },
    { title: "Grounding Co", category: "Health & Wellness", type: "Video Ad", views: "2.9M", src: "/ads/GroundingCo-1.mp4" },
    { title: "Smart Quote", category: "SaaS", type: "Explainer", views: "1.7M", src: "/ads/SMARTQUOTE - HD 1080p.mov" },
    { title: "Remade Tech", category: "Tech", type: "Motion Graphic", views: "950K", src: "/ads/REMADE1-REV - HD 1080p.mov" },
    { title: "The Last Bookstore", category: "E-commerce", type: "Static Ad", views: "820K", src: "/ads/LAST BOOK STORE.png" },
    { title: "Viral Creative", category: "Tech", type: "UGC Style", views: "3.1M", src: "/ads/LdjWuQnFy829Ehqu8BKOc.png" },
    { title: "UGC Testimonial", category: "Beauty", type: "UGC Style", views: "1.4M", src: "/ads/UGC WOMAN.png" },
    { title: "Campaign Poster", category: "E-commerce", type: "Poster", views: "650K", src: "/ads/poster.jpeg" },
    { title: "Good Bug", category: "Health & Wellness", type: "Static Ad", views: "2.2M", src: "/ads/good bug.png" },
    { title: "Cinematic 4K", category: "Tech", type: "Static Ad", views: "1.9M", src: "/ads/4k image.jpeg" },
];

export const categories = ['All Industries', 'E-commerce', 'SaaS', 'Beauty', 'Food & Beverage', 'Tech', 'Health & Wellness'];
