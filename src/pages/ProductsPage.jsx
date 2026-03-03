import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronDown, ChevronRight, Search, SlidersHorizontal, X } from 'lucide-react';
import './ProductsPage.css';

const allProducts = [
    // Poultry
    { id: 'p1', name: 'TOXELIM-B GOLD', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Liquid supplement for toxin management and liver health in poultry.', slug: 'toxelim-b-gold', tag: 'NUTRITION' },
    { id: 'p2', name: 'QUIT STRESS', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Specialized formula to combat environmental and physiological stress.', slug: 'quit-stress', tag: 'STRESS RELIEF' },
    { id: 'p3', name: 'CALCIBOOST', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Highly bioavailable calcium and phosphorus supplement.', slug: 'calciboost', tag: 'MINERALS' },
    { id: 'p4', name: 'SUCCICAL-FS', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Precision mineral delivery system for layers and broilers.', slug: 'succical-fs', tag: 'MINERALS' },
    { id: 'p5', name: 'B-COM MORE', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Potent B-Complex fortified with liver stimulants.', slug: 'b-com-more-poultry', tag: 'VITAMINS' },
    { id: 'p6', name: 'TOXICLEAN', category: 'Poultry Science', section: 'Vitamin & Mineral Supplements', desc: 'Molecular detoxification and water quality stabilizer.', slug: 'toxiclean', tag: 'DETOX' },
    { id: 'p7', name: 'AVIGROW', category: 'Poultry Science', section: 'Growth Promoters & Speciality', desc: 'Synergistic growth promoter for optimal weight gain.', slug: 'avigrow', tag: 'GROWTH' },
    { id: 'p8', name: 'PROBOON WS & FS', category: 'Poultry Science', section: 'Growth Promoters & Speciality', desc: 'Probiotic complex for gut health and immunity.', slug: 'proboon', tag: 'PROBIOTIC' },
    { id: 'p9', name: 'ANTIPROL', category: 'Poultry Science', section: 'Growth Promoters & Speciality', desc: 'Speciality product for digestive resilience.', slug: 'antiprol', tag: 'DIGESTIVE' },
    { id: 'p10', name: 'LINEODX', category: 'Poultry Science', section: 'Growth Promoters & Speciality', desc: 'Metabolic facilitator for enhanced nutrient absorption.', slug: 'lineodx', tag: 'METABOLIC' },

    // Aquaculture
    { id: 'a1', name: 'BG CARE', category: 'Aquaculture', section: 'Ecosystem & Water Care', desc: 'Biological water quality stabilizer for intensive farming.', slug: 'bg-care', tag: 'ECO-CARE' },
    { id: 'a2', name: 'TOXICLEAN-FS', category: 'Aquaculture', section: 'Ecosystem & Water Care', desc: 'Rapid aquatic molecular detoxification systems.', slug: 'toxiclean-fs', tag: 'DETOX' },
    { id: 'a3', name: 'HUMISURE', category: 'Aquaculture', section: 'Ecosystem & Water Care', desc: 'Soil and water conditioner for pond preparation.', slug: 'humisure', tag: 'WATER CARE' },
    { id: 'a4', name: 'YUWIN', category: 'Aquaculture', section: 'Metabolic & Immunity', desc: 'Ammonia neutralizer and growth catalyst for shrimp and fish.', slug: 'yuwin', tag: 'IMMUNITY' },
    { id: 'a5', name: 'YUWIN-GOLD', category: 'Aquaculture', section: 'Metabolic & Immunity', desc: 'Potent molecular complex for enhanced aquatic resilience.', slug: 'yuwin-gold', tag: 'IMMUNITY' },

    // Large Animals
    { id: 'l1', name: 'METABOLIC HOMEOSTASIS', category: 'Large Animal Health', section: 'Clinical Nutrition', desc: 'Agents ensuring physiological balance in dairy populations.', slug: 'metabolic-homeostasis', tag: 'LIVESTOCK' },
    { id: 'l2', name: 'NUTRITIONAL BRIDGING', category: 'Large Animal Health', section: 'Clinical Nutrition', desc: 'Solutions designed for dairy, sheep, and goat genetics.', slug: 'nutritional-bridging', tag: 'NUTRITION' },

    // Small Ruminants
    { id: 's1', name: 'IMMUROON', category: 'Small Ruminants', section: 'Immunity & Resilience', desc: 'Potent immunostimulant for small ruminants.', slug: 'immuroon', tag: 'IMMUNITY' },
    { id: 's2', name: 'PARASITIC CONTROL', category: 'Small Ruminants', section: 'Immunity & Resilience', desc: 'Agents for biological defense against invasive pathogens.', slug: 'parasitic-control', tag: 'BIOSECURITY' },

    // Canine
    { id: 'c1', name: 'B-COM MORE', category: 'Canine Care', section: 'Nutritional & Growth Support', desc: 'Potent B-Complex fortified with liver stimulants for optimum growth and immunity.', slug: 'b-com-more-canine', tag: 'VITAMINS' },
    { id: 'c2', name: 'IMMUNOSTIMULANTS', category: 'Canine Care', section: 'Nutritional & Growth Support', desc: 'Advanced formulas to reinforce the natural defense systems of pets.', slug: 'immunostimulants', tag: 'IMMUNITY' },
    { id: 'c3', name: 'ECTOPARASITE CONTROL', category: 'Canine Care', section: 'Biosecurity & Protection', desc: 'Effective solutions for managing external parasites and ensuring skin health.', slug: 'ectoparasite-control', tag: 'BIOSECURITY' },
    { id: 'c4', name: 'BIOSECURITY AGENTS', category: 'Canine Care', section: 'Biosecurity & Protection', desc: 'Hospital-grade hygiene and safety protocols for domestic environments.', slug: 'biosecurity-agents', tag: 'BIOSECURITY' },
];

const categoryMeta = {
    'Poultry Science': { color: '#0f4c81', image: '/poultry_hero_new.png' },
    'Aquaculture': { color: '#0e7490', image: '/aquaculture_custom.png' },
    'Large Animal Health': { color: '#7c3aed', image: '/livestock_custom.png' },
    'Small Ruminants': { color: '#b45309', image: '/sheep_goat_division_premium.png' },
    'Canine Care': { color: '#065f46', image: '/canine_custom.png' },
};

const categories = Object.keys(categoryMeta);

const ProductsPage = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCats, setExpandedCats] = useState(categories.reduce((a, c) => ({ ...a, [c]: true }), {}));

    const toggleCategory = (cat) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const toggleExpand = (cat) => {
        setExpandedCats(prev => ({ ...prev, [cat]: !prev[cat] }));
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setSearchQuery('');
    };

    const filtered = useMemo(() => {
        return allProducts.filter(p => {
            const matchCat = selectedCategories.length === 0 || selectedCategories.includes(p.category);
            const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.desc.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [selectedCategories, searchQuery]);

    // Group filtered products by section label (category — section)
    const grouped = useMemo(() => {
        const map = {};
        filtered.forEach(p => {
            const key = `${p.category} — ${p.section}`;
            if (!map[key]) map[key] = { category: p.category, section: p.section, products: [] };
            map[key].products.push(p);
        });
        return Object.values(map);
    }, [filtered]);

    const hasFilters = selectedCategories.length > 0 || searchQuery.length > 0;

    return (
        <motion.div
            className="products-page"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Page Header */}
            <section className="products-hero">
                <div className="container">
                    <motion.div
                        className="hero-header"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hero-tag">
                            <BookOpen size={14} />
                            <span>Product Catalog // RRVHC</span>
                        </div>
                        <h1 className="hero-title">
                            Product <span className="text-gradient-blue">Catalog.</span>
                        </h1>
                        <p className="hero-desc">
                            Browse our complete range of veterinary health products by category.
                            Click any product to view full details and download brochures.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Catalog Layout */}
            <div className="container">
                <div className="catalog-layout-grid">

                    {/* Left Sidebar */}
                    <aside className="catalog-sidebar">
                        {/* Search */}
                        <div className="sidebar-search">
                            <Search size={16} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button className="search-clear" onClick={() => setSearchQuery('')}>
                                    <X size={14} />
                                </button>
                            )}
                        </div>

                        {/* Filter Header */}
                        <div className="sidebar-filter-head">
                            <div className="sfh-left">
                                <SlidersHorizontal size={15} />
                                <span>Filter by Category</span>
                            </div>
                            {hasFilters && (
                                <button className="clear-link" onClick={clearFilters}>Clear all</button>
                            )}
                        </div>

                        {/* Category Tree */}
                        <nav className="sidebar-tree">
                            {categories.map(cat => {
                                const sections = [...new Set(allProducts.filter(p => p.category === cat).map(p => p.section))];
                                const isChecked = selectedCategories.includes(cat);
                                const meta = categoryMeta[cat];
                                return (
                                    <div key={cat} className="tree-node">
                                        <div className="tree-row" onClick={() => toggleExpand(cat)}>
                                            <label
                                                className="tree-label"
                                                onClick={e => { e.stopPropagation(); toggleCategory(cat); }}
                                            >
                                                <span
                                                    className={`tree-check ${isChecked ? 'checked' : ''}`}
                                                    style={isChecked ? { background: meta.color, borderColor: meta.color } : {}}
                                                ></span>
                                                <span className="tree-cat-name">{cat}</span>
                                            </label>
                                            <ChevronDown
                                                size={15}
                                                className={`tree-chevron ${expandedCats[cat] ? 'open' : ''}`}
                                            />
                                        </div>
                                        <AnimatePresence>
                                            {expandedCats[cat] && (
                                                <motion.div
                                                    className="tree-children"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    {sections.map(sec => (
                                                        <div key={sec} className="tree-child">{sec}</div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </nav>
                    </aside>

                    {/* Right Product Grid */}
                    <main className="catalog-main">
                        {/* Result Count */}
                        <div className="catalog-result-bar">
                            <span className="result-count">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</span>
                            {selectedCategories.length > 0 && (
                                <div className="active-filters">
                                    {selectedCategories.map(cat => (
                                        <span key={cat} className="filter-chip" style={{ borderColor: categoryMeta[cat].color, color: categoryMeta[cat].color }}>
                                            {cat}
                                            <button onClick={() => toggleCategory(cat)}><X size={12} /></button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Groups */}
                        <AnimatePresence mode="wait">
                            {filtered.length === 0 ? (
                                <motion.div
                                    className="no-results"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <BookOpen size={48} />
                                    <h3>No products found</h3>
                                    <p>Try adjusting your search or filters.</p>
                                    <button className="premium-btn-outline" onClick={clearFilters}>Clear Filters</button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={`${selectedCategories.join()}-${searchQuery}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {grouped.map((group, gi) => {
                                        const meta = categoryMeta[group.category];
                                        return (
                                            <div key={`${group.category}-${group.section}`} className="product-group">
                                                <div className="product-group-head">
                                                    <span className="pghead-cat" style={{ color: meta.color }}>
                                                        {group.category}
                                                    </span>
                                                    <span className="pghead-section">{group.section}</span>
                                                    <div className="pghead-line"></div>
                                                    <span className="pghead-count">{group.products.length}</span>
                                                </div>
                                                <div className="product-cards-grid">
                                                    {group.products.map((product, pi) => (
                                                        <motion.div
                                                            key={product.id}
                                                            initial={{ opacity: 0, y: 16 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: pi * 0.06 }}
                                                        >
                                                            <Link
                                                                to={`/products/detail/${product.slug}`}
                                                                className="product-card-item"
                                                                style={{ '--card-color': meta.color }}
                                                            >
                                                                <div className="pci-top">
                                                                    <div className="pci-icon" style={{ background: `${meta.color}15`, color: meta.color }}>
                                                                        <BookOpen size={20} />
                                                                    </div>
                                                                    <span className="pci-tag" style={{ color: meta.color, background: `${meta.color}12` }}>{product.tag}</span>
                                                                </div>
                                                                <h3 className="pci-name">{product.name}</h3>
                                                                <p className="pci-desc">{product.desc}</p>
                                                                <div className="pci-footer">
                                                                    <span className="pci-view">View Details</span>
                                                                    <ChevronRight size={15} className="pci-arrow" />
                                                                </div>
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductsPage;
