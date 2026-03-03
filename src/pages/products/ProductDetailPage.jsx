import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Download, ArrowUpRight, CheckCircle, ShieldCheck, Tag, ChevronRight } from 'lucide-react';
import './ProductDetailPage.css';

const allProducts = [
    { id: 'p1', name: 'TOXELIM-B GOLD', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Liquid supplement for toxin management and liver health in poultry.', slug: 'toxelim-b-gold', tag: 'NUTRITION', catSlug: 'poultry', benefits: ['Superior toxin binding capacity', 'Supports liver function and regeneration', 'Enhances egg production and weight gain', 'Improves feed conversion ratio'], composition: 'Mycotoxin binders, Liver tonics, Herbal extracts, Vitamins' },
    { id: 'p2', name: 'QUIT STRESS', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Specialized formula to combat environmental and physiological stress.', slug: 'quit-stress', tag: 'STRESS RELIEF', catSlug: 'poultry', benefits: ['Reduces heat and environmental stress', 'Boosts immune response under stress conditions', 'Maintains productivity during disease outbreaks', 'Improves feed intake'], composition: 'Vitamin C, Vitamin E, Electrolytes, Adaptogenic herbs' },
    { id: 'p3', name: 'CALCIBOOST', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Highly bioavailable calcium and phosphorus supplement.', slug: 'calciboost', tag: 'MINERALS', catSlug: 'poultry', benefits: ['Prevents cage layer fatigue', 'Improves eggshell quality and thickness', 'Supports bone health in broilers', 'Enhanced bioavailability formula'], composition: 'Calcium, Phosphorus, Vitamin D3, Magnesium' },
    { id: 'p4', name: 'SUCCICAL-FS', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Precision mineral delivery system for layers and broilers.', slug: 'succical-fs', tag: 'MINERALS', catSlug: 'poultry', benefits: ['Optimal calcium-phosphorus balance', 'Suitable for layers and broilers', 'Improves FCR and body weight', 'Reduces bone disorders'], composition: 'Calcium carbonate, Dicalcium phosphate, Vitamin D3' },
    { id: 'p5', name: 'B-COM MORE', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Potent B-Complex fortified with liver stimulants.', slug: 'b-com-more-poultry', tag: 'VITAMINS', catSlug: 'poultry', benefits: ['Complete B-vitamin profile', 'Liver protective action', 'Improves metabolism and energy', 'Enhances growth and performance'], composition: 'B1, B2, B6, B12, Folic Acid, Biotin, Liver extracts' },
    { id: 'p6', name: 'TOXICLEAN', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Molecular detoxification and water quality stabilizer.', slug: 'toxiclean', tag: 'DETOX', catSlug: 'poultry', benefits: ['Broad spectrum mycotoxin binder', 'Improves water quality in drinkers', 'Reduces gut inflammation', 'Protects intestinal villi'], composition: 'Bentonite, Activated charcoal, Silymarin, Organic acids' },
    { id: 'p7', name: 'AVIGROW', category: 'Poultry Science', section: 'Growth Promoters & Speciality', desc: 'Synergistic growth promoter for optimal weight gain.', slug: 'avigrow', tag: 'GROWTH', catSlug: 'poultry', benefits: ['Accelerates body weight gain', 'Improves feed conversion ratio', 'Natural growth promotion', 'Safe for all production stages'], composition: 'Growth factors, Amino acids, Enzyme complex, Vitamins' },
    { id: 'p8', name: 'PROBOON WS & FS', category: 'Poultry Science', section: 'Growth Promoters & Speciality', desc: 'Probiotic complex for gut health and immunity.', slug: 'proboon', tag: 'PROBIOTIC', catSlug: 'poultry', benefits: ['Multi-strain probiotic formula', 'Establishes healthy gut microflora', 'Improves nutrient absorption', 'Reduces mortality from gut issues'], composition: 'Lactobacillus, Bacillus, Saccharomyces, Prebiotic fibres' },
    { id: 'p9', name: 'ANTIPROL', category: 'Poultry Science', section: 'Growth Promoters & Speciality', desc: 'Speciality product for digestive resilience.', slug: 'antiprol', tag: 'DIGESTIVE', catSlug: 'poultry', benefits: ['Anti-proliferative activity', 'Supports intestinal integrity', 'Reduces scouring and loose droppings', 'Improves uniformity of the flock'], composition: 'Organic acids, Plant extracts, Enzymes' },
    { id: 'p10', name: 'LINEODX', category: 'Poultry Science', section: 'Growth Promoters & Speciality', desc: 'Metabolic facilitator for enhanced nutrient absorption.', slug: 'lineodx', tag: 'METABOLIC', catSlug: 'poultry', benefits: ['Improves nutrient bioavailability', 'Supports metabolic processes', 'Enhances feed efficiency', 'Reduces subclinical deficiencies'], composition: 'Enzyme complex, Organic acids, Trace minerals' },

    { id: 'a1', name: 'BG CARE', category: 'Aquaculture', section: 'Ecosystem & Water Care', desc: 'Biological water quality stabilizer for intensive farming.', slug: 'bg-care', tag: 'ECO-CARE', catSlug: 'aquaculture', benefits: ['Stabilizes pond water quality', 'Reduces harmful ammonia levels', 'Promotes beneficial bacterial growth', 'Improves dissolved oxygen'], composition: 'Beneficial bacteria, Enzymes, Minerals, Organic compounds' },
    { id: 'a2', name: 'TOXICLEAN-FS', category: 'Aquaculture', section: 'Ecosystem & Water Care', desc: 'Rapid aquatic molecular detoxification systems.', slug: 'toxiclean-fs', tag: 'DETOX', catSlug: 'aquaculture', benefits: ['Detoxifies aquatic environment rapidly', 'Removes heavy metal contaminants', 'Clarifies turbid water', 'Safe for fish and shrimp'], composition: 'Zeolite, Activated clay, Organic chelators' },
    { id: 'a3', name: 'HUMISURE', category: 'Aquaculture', section: 'Ecosystem & Water Care', desc: 'Soil and water conditioner for pond preparation.', slug: 'humisure', tag: 'WATER CARE', catSlug: 'aquaculture', benefits: ['Conditions pond bottom soil', 'Improves water holding capacity', 'Enhances natural productivity', 'Reduces pond preparation time'], composition: 'Humic acids, Fulvic acids, Organic carbon, Minerals' },
    { id: 'a4', name: 'YUWIN', category: 'Aquaculture', section: 'Metabolic & Immunity', desc: 'Ammonia neutralizer and growth catalyst for shrimp and fish.', slug: 'yuwin', tag: 'IMMUNITY', catSlug: 'aquaculture', benefits: ['Rapidly neutralizes toxic ammonia', 'Stimulates healthy growth rates', 'Enhances immunity of aquatic species', 'Safe for all aquaculture species'], composition: 'Yucca extract, Probiotics, Vitamins, Minerals' },
    { id: 'a5', name: 'YUWIN-GOLD', category: 'Aquaculture', section: 'Metabolic & Immunity', desc: 'Potent molecular complex for enhanced aquatic resilience.', slug: 'yuwin-gold', tag: 'IMMUNITY', catSlug: 'aquaculture', benefits: ['Premium immunity booster', 'Improves stress tolerance', 'Maximizes survival rates', 'Enhances coloration and quality'], composition: 'Premium yucca, Immune modulators, Antioxidants, Minerals' },

    { id: 'l1', name: 'METABOLIC HOMEOSTASIS', category: 'Large Animal Health', section: 'Clinical Nutrition', desc: 'Agents ensuring physiological balance in dairy populations.', slug: 'metabolic-homeostasis', tag: 'LIVESTOCK', catSlug: 'large-animals', benefits: ['Prevents metabolic disorders', 'Supports transition cow health', 'Improves milk production', 'Reduces periparturient diseases'], composition: 'Niacin, Calcium propionate, Choline, Magnesium, Vitamins' },
    { id: 'l2', name: 'NUTRITIONAL BRIDGING', category: 'Large Animal Health', section: 'Clinical Nutrition', desc: 'Solutions designed for dairy, sheep, and goat genetics.', slug: 'nutritional-bridging', tag: 'NUTRITION', catSlug: 'large-animals', benefits: ['Bridges nutritional gaps in large ruminants', 'Improves reproductive performance', 'Enhances growth rates', 'Suitable for multiple species'], composition: 'Protected amino acids, Bypass fats, Trace minerals, Vitamins' },

    { id: 's1', name: 'IMMUROON', category: 'Small Ruminants', section: 'Immunity & Resilience', desc: 'Potent immunostimulant for small ruminants.', slug: 'immuroon', tag: 'IMMUNITY', catSlug: 'sheep-goat', benefits: ['Boosts natural immune response', 'Reduces incidence of infectious diseases', 'Improves vaccine efficacy', 'Suitable for sheep and goats'], composition: 'Beta-glucans, Vitamins, Zinc, Selenium, Herbal extracts' },
    { id: 's2', name: 'PARASITIC CONTROL', category: 'Small Ruminants', section: 'Immunity & Resilience', desc: 'Agents for biological defense against invasive pathogens.', slug: 'parasitic-control', tag: 'BIOSECURITY', catSlug: 'sheep-goat', benefits: ['Reduces internal parasite burden', 'Supports immune-mediated parasite control', 'Improves body condition score', 'Reduces reliance on chemical dewormers'], composition: 'Tannin-rich plant extracts, Zinc, Copper, Vitamins' },

    { id: 'c1', name: 'B-COM MORE', category: 'Canine Care', section: 'Nutritional & Growth Support', desc: 'Potent B-Complex fortified with liver stimulants for optimum growth and immunity.', slug: 'b-com-more-canine', tag: 'VITAMINS', catSlug: 'canine', benefits: ['Supports liver health in dogs', 'Improves coat and skin condition', 'Enhances appetite and vitality', 'Promotes healthy growth in puppies'], composition: 'B-Complex vitamins, Liver extracts, Amino acids, Minerals' },
    { id: 'c2', name: 'IMMUNOSTIMULANTS', category: 'Canine Care', section: 'Nutritional & Growth Support', desc: 'Advanced formulas to reinforce the natural defense systems of pets.', slug: 'immunostimulants', tag: 'IMMUNITY', catSlug: 'canine', benefits: ['Strengthens immune system', 'Reduces susceptibility to infections', 'Improves vaccine response', 'Supports recovery from illness'], composition: 'Beta-glucans, Colostrum, Vitamins C & E, Zinc, Selenium' },
    { id: 'c3', name: 'ECTOPARASITE CONTROL', category: 'Canine Care', section: 'Biosecurity & Protection', desc: 'Effective solutions for managing external parasites and ensuring skin health.', slug: 'ectoparasite-control', tag: 'BIOSECURITY', catSlug: 'canine', benefits: ['Controls fleas, ticks, and mites', 'Promotes healthy skin and coat', 'Reduces secondary skin infections', 'Safe for dogs and puppies over 8 weeks'], composition: 'Natural pyrethrins, Neem extract, Aloe vera, Skin conditioners' },
    { id: 'c4', name: 'BIOSECURITY AGENTS', category: 'Canine Care', section: 'Biosecurity & Protection', desc: 'Hospital-grade hygiene and safety protocols for domestic environments.', slug: 'biosecurity-agents', tag: 'BIOSECURITY', catSlug: 'canine', benefits: ['Broad-spectrum disinfection', 'Safe for pets and owners', 'Eliminates kennel cough pathogens', 'Long-lasting residual protection'], composition: 'Quaternary ammonium compounds, Iodophors, Stabilizers' },
];

const categoryMeta = {
    'Poultry Science': { image: '/poultry_hero_new.png' },
    'Aquaculture': { image: '/aquaculture_custom.png' },
    'Large Animal Health': { image: '/livestock_custom.png' },
    'Small Ruminants': { image: '/sheep_goat_division_premium.png' },
    'Canine Care': { image: '/canine_custom.png' },
};

const ProductDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const product = allProducts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="pdp-not-found">
                <h2>Product not found</h2>
                <Link to="/products" className="premium-btn-primary">Back to Catalog</Link>
            </div>
        );
    }

    const meta = categoryMeta[product.category];
    const related = allProducts.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);
    const themeColor = '#00599a';

    return (
        <motion.div
            className="pdp-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
        >
            {/* Hero Banner */}
            <section className="pdp-hero" style={{ background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}cc 100%)` }}>
                <img src={meta.image} alt={product.category} className="pdp-hero-bg" />
                <div className="pdp-hero-overlay"></div>
                <div className="container pdp-hero-inner">
                    <button className="pdp-back-btn" onClick={() => navigate(-1)}>
                        <ArrowLeft size={16} /> Back to Catalog
                    </button>
                    <div className="pdp-hero-content">
                        <span className="pdp-cat-tag" style={{ background: 'rgba(255,255,255,0.15)' }}>{product.category}</span>
                        <h1 className="pdp-title">{product.name}</h1>
                        <p className="pdp-hero-desc">{product.desc}</p>
                        <div className="pdp-tag-pill">
                            <Tag size={12} />
                            {product.tag}
                        </div>
                    </div>
                </div>
            </section>

            {/* Detail Content */}
            <div className="container pdp-body">
                <div className="pdp-grid">

                    {/* Left: Main Info */}
                    <main className="pdp-main">
                        <motion.div
                            className="pdp-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="pdp-section-title">Key Benefits</h2>
                            <ul className="pdp-benefits-list">
                                {product.benefits.map((b, i) => (
                                    <li key={i} className="pdp-benefit-item">
                                        <CheckCircle size={18} style={{ color: themeColor }} />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="pdp-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="pdp-section-title">Composition</h2>
                            <p className="pdp-composition">{product.composition}</p>
                        </motion.div>

                        <motion.div
                            className="pdp-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="pdp-section-title">Product Details</h2>
                            <div className="pdp-details-grid">
                                <div className="pdp-detail-item">
                                    <span className="pdp-detail-label">Category</span>
                                    <span className="pdp-detail-value">{product.category}</span>
                                </div>
                                <div className="pdp-detail-item">
                                    <span className="pdp-detail-label">Sub-Category</span>
                                    <span className="pdp-detail-value">{product.section}</span>
                                </div>
                                <div className="pdp-detail-item">
                                    <span className="pdp-detail-label">Product Type</span>
                                    <span className="pdp-detail-value">{product.tag}</span>
                                </div>
                                <div className="pdp-detail-item">
                                    <span className="pdp-detail-label">Quality</span>
                                    <span className="pdp-detail-value">ISO 9001:2015 / GMP</span>
                                </div>
                            </div>
                        </motion.div>
                    </main>

                    {/* Right: Actions & Info */}
                    <aside className="pdp-aside">
                        <motion.div
                            className="pdp-action-card"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                            style={{ '--ac-color': themeColor }}
                        >
                            <div className="pdp-ac-icon" style={{ background: `${themeColor}18`, color: themeColor }}>
                                <BookOpen size={28} />
                            </div>
                            <h3>Product Brochure</h3>
                            <p>Download the full product specification sheet and brochure.</p>
                            {product.brochure ? (
                                <button className="pdp-download-btn" style={{ background: themeColor }}>
                                    <Download size={16} />
                                    Download Brochure
                                </button>
                            ) : (
                                <p style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: '1rem' }}>Brochure will be available soon for digital download.</p>
                            )}
                        </motion.div>

                        <motion.div
                            className="pdp-cert-card"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 }}
                        >
                            <ShieldCheck size={28} style={{ color: meta.color }} />
                            <h4>Quality Assured</h4>
                            <p>ISO 9001:2015 Certified & GMP Compliant manufacturing.</p>
                        </motion.div>

                        <motion.div
                            className="pdp-contact-card"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.35 }}
                        >
                            <h4>Need More Info?</h4>
                            <p>Contact our technical team for dosage, pricing, and availability.</p>
                            <Link to="/contact" className="pdp-contact-btn" style={{ borderColor: meta.color, color: meta.color }}>
                                Contact Us <ArrowUpRight size={15} />
                            </Link>
                        </motion.div>
                    </aside>
                </div>

                {/* Related Products */}
                {related.length > 0 && (
                    <section className="pdp-related">
                        <h2 className="pdp-related-title">More from <span style={{ color: meta.color }}>{product.category}</span></h2>
                        <div className="pdp-related-grid">
                            {related.map((rel, ri) => (
                                <motion.div
                                    key={rel.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: ri * 0.1 }}
                                >
                                    <Link to={`/products/detail/${rel.slug}`} className="pdp-related-card">
                                        <div className="prc-icon" style={{ background: `${meta.color}15`, color: meta.color }}>
                                            <BookOpen size={18} />
                                        </div>
                                        <h4>{rel.name}</h4>
                                        <p>{rel.desc}</p>
                                        <span className="prc-link">View Details <ChevronRight size={13} /></span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </motion.div>
    );
};

export default ProductDetailPage;
