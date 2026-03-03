import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, BookOpen, ArrowUpRight, Download, ShieldCheck, Microscope, Bird, Fish, Activity, Zap, Dog, Filter, ChevronDown } from 'lucide-react';
import './ProductCategoryPage.css';

const productData = {
    poultry: {
        title: 'Poultry Science',
        icon: <Bird size={18} />,
        hero: '/poultry_hero_new.png',
        contentImage: '/poultry_division_premium.png',
        desc: 'Advanced nutritional supplements and healthcare solutions engineered for commercial poultry performance since 1994.',
        sections: [
            {
                name: 'Vitamin & Mineral Supplements',
                items: [
                    {
                        name: 'TOXELIM-B GOLD',
                        slug: 'toxelim-b-gold',
                        desc: 'Liquid supplement for toxin management and liver health in poultry.',
                        brochure: null
                    },
                    {
                        name: 'QUIT STRESS',
                        slug: 'quit-stress',
                        desc: 'Specialized formula to combat environmental and physiological stress.',
                        brochure: null
                    },
                    {
                        name: 'CALCIBOOST',
                        slug: 'calciboost',
                        desc: 'Highly bioavailable calcium and phosphorus supplement.',
                        brochure: null
                    },
                    {
                        name: 'SUCCICAL-FS',
                        slug: 'succical-fs',
                        desc: 'Precision mineral delivery system for layers and broilers.',
                        brochure: null
                    },
                    {
                        name: 'B-Com More',
                        slug: 'b-com-more-poultry',
                        desc: 'Potent B-Complex fortified with liver stimulants.',
                        brochure: null
                    },
                    {
                        name: 'TOXICLEAN',
                        slug: 'toxclean',
                        desc: 'Molecular detoxification and water quality stabilizer.',
                        brochure: null
                    }
                ]
            },
            {
                name: 'Growth Promoters & Speciality',
                items: [
                    {
                        name: 'AVIGROW',
                        slug: 'avigrow',
                        desc: 'Synergistic growth promoter for optimal weight gain.',
                        brochure: null
                    },
                    {
                        name: 'PROBOON - WS & FS',
                        slug: 'proboon',
                        desc: 'Probiotic complex for gut health and immunity.',
                        brochure: null
                    },
                    {
                        name: 'ANTIPROL',
                        slug: 'antiprol',
                        desc: 'Speciality product for digestive resilience.',
                        brochure: null
                    },
                    {
                        name: 'LINEODX',
                        slug: 'lineodx',
                        desc: 'Metabolic facilitator for enhanced nutrient absorption.',
                        brochure: null
                    }
                ]
            }
        ]
    },
    aquaculture: {
        title: 'Aquaculture Care',
        icon: <Fish size={18} />,
        hero: '/aquaculture_premium_hero_1772433528334.png',
        contentImage: '/aquaculture_custom.png',
        desc: 'Sustainable industrial catalysts for high-yield aquatic ecosystems and water quality management.',
        sections: [
            {
                name: 'Ecosystem & Water Care',
                items: [
                    {
                        name: 'BG CARE',
                        slug: 'bg-care',
                        desc: 'Biological water quality stabilizer for intensive farming.',
                        brochure: null
                    },
                    {
                        name: 'TOXICLEAN-FS',
                        slug: 'toxiclean-fs',
                        desc: 'Rapid aquatic molecular detoxification systems.',
                        brochure: null
                    },
                    {
                        name: 'HUMISURE',
                        slug: 'humisure',
                        desc: 'Soil and water conditioner for pond preparation.',
                        brochure: null
                    }
                ]
            },
            {
                name: 'Metabolic & Immunity',
                items: [
                    {
                        name: 'YUWIN',
                        slug: 'yuwin',
                        desc: 'Ammonia neutralizer and growth catalyst for shrimp and fish.',
                        brochure: null
                    },
                    {
                        name: 'YUWIN-GOLD',
                        slug: 'yuwin-gold',
                        desc: 'Potent molecular complex for enhanced aquatic resilience.',
                        brochure: null
                    }
                ]
            }
        ]
    },
    'large-animals': {
        title: 'Large Animal Health',
        icon: <Activity size={18} />,
        hero: '/livestock_custom.png',
        // contentImage: '/livestock_custom.png',
        desc: 'Quality products for large animals assisting in the management of nutritional deficiencies and improving livestock productivity.',
        sections: [
            {
                name: 'Clinical Nutrition',
                items: [
                    {
                        name: 'Metabolic Homeostasis',
                        slug: 'metabolic-homeostasis',
                        desc: 'Agents ensuring physiological balance in dairy populations.',
                        brochure: null
                    },
                    {
                        name: 'Nutritional Bridging',
                        slug: 'nutritional-bridging',
                        desc: 'Solutions designed for dairy, sheep, and goat genetics.',
                        brochure: null
                    }
                ]
            }
        ]
    },
    'sheep-goat': {
        title: 'Small Ruminants',
        icon: <Zap size={18} />,
        hero: '/small_ruminants_premium_hero_1772433793721.png',
        contentImage: '/sheep_goat_division_premium.png',
        desc: 'Strategically formulated nutritional feed supplements that prevent parasitic and infectious diseases by reinforcing the immune system.',
        sections: [
            {
                name: 'Immunity & Resilience',
                items: [
                    {
                        name: 'Immuroon',
                        slug: 'immuroon',
                        desc: 'Potent immunostimulant for small ruminants.',
                        brochure: null
                    },
                    {
                        name: 'Parasitic Control',
                        slug: 'parasitic-control',
                        desc: 'Agents for biological defense against invasive pathogens.',
                        brochure: null
                    }
                ]
            }
        ]
    },
    canine: {
        title: 'Canine Care',
        icon: <Dog size={18} />,
        hero: '/canine_custom.png',
        contentImage: '/canine_custom.png',
        desc: 'Specialized healthcare solutions for companion animals, focusing on metabolic homeostasis, immunity, and advanced biosecurity.',
        sections: [
            {
                name: 'Nutritional & Growth Support',
                items: [
                    {
                        name: 'B-Com More',
                        slug: 'b-com-more-canine',
                        desc: 'Potent B-Complex fortified with liver stimulants for optimum growth and immunity.',
                        brochure: null
                    },
                    {
                        name: 'Immunostimulants',
                        slug: 'immunostimulants',
                        desc: 'Advanced formulas to reinforce the natural defense systems of pets.',
                        brochure: null
                    }
                ]
            },
            {
                name: 'Biosecurity & Protection',
                items: [
                    {
                        name: 'Ectoparasite Control',
                        slug: 'ectoparasite-control',
                        desc: 'Effective solutions for managing external parasites and ensuring skin health.',
                        brochure: null
                    },
                    {
                        name: 'Biosecurity Agents',
                        slug: 'biosecurity-agents',
                        desc: 'Hospital-grade hygiene and safety protocols for domestic environments.',
                        brochure: null
                    }
                ]
            }
        ]
    }
};

const ProductCategoryPage = () => {
    const { category } = useParams();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const data = productData[category] || productData.poultry;

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMobileMenuOpen(false);
    }, [category]);

    return (
        <motion.div
            className="product-category-page"
            initial={false}
            animate={{ opacity: 1 }}
        >
            {/* <section className="category-hero">
                <img src={data.hero} alt={data.title} className="hero-bg" />
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="category-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-tag">Product Catalog</span>
                        <h1 className="hero-title">{data.title}</h1>
                        <p className="hero-desc">{data.desc}</p>
                    </motion.div>
                </div>
            </section> */}

            <div className="container section-spacing">
                {/* Mobile Filter Dropdown */}
                <div className="mobile-filter-container">
                    <button
                        className={`mobile-filter-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="toggle-left">
                            <Filter size={18} />
                            <span>Select Category</span>
                        </div>
                        <div className="toggle-right">
                            <span className="current-cat">{data.title}</span>
                            <ChevronDown size={18} className={`chevron ${isMobileMenuOpen ? 'rotate' : ''}`} />
                        </div>
                    </button>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                className="mobile-dropdown-menu"
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                {Object.keys(productData).map((key) => (
                                    <Link
                                        key={key}
                                        to={`/products/${key}`}
                                        className={`mobile-dropdown-link ${key === category ? 'active' : ''}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="link-icon-mini">{productData[key].icon}</span>
                                        <span>{productData[key].title}</span>
                                        {key === category && <div className="active-dot"></div>}
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="category-layout">
                    <aside className="category-sidebar">
                        <div className="sidebar-inner">
                            <span className="sidebar-label">Product Sectors</span>
                            <nav className="sidebar-nav">
                                {Object.keys(productData).map((key) => (
                                    <Link
                                        key={key}
                                        to={`/products/${key}`}
                                        className={`sidebar-link ${key === category ? 'active' : ''}`}
                                    >
                                        <div className="link-content">
                                            <span className="link-icon">{productData[key].icon}</span>
                                            <span>{productData[key].title}</span>
                                        </div>
                                        <ChevronRight size={14} className="chevron" />
                                    </Link>
                                ))}
                            </nav>

                            <div className="sidebar-cta mt-3">
                                <ShieldCheck size={40} className="mb-4 text-accent-vivid" />
                                <h4>Certified Quality</h4>
                                <p>All products are ISO 9001:2015 and GMP compliant.</p>
                            </div>
                        </div>
                    </aside>

                    <main className="category-main">
                        <AnimatePresence>
                            <motion.div
                                key={category}
                                initial={{ opacity: 1, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {data.sections.map((section) => (
                                    <div key={section.name} className="product-section-block">
                                        <div className="section-head">
                                            <h2>{section.name}</h2>
                                            <div className="head-line"></div>
                                        </div>
                                        <div className="product-grid">
                                            {section.items.map((item, i) => (
                                                <motion.div
                                                    key={item.name}
                                                    className="product-card brochure-card"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <Link to={`/products/detail/${item.slug}`} className="product-card-link">
                                                        <div className="pc-icon brochure-icon">
                                                            <BookOpen size={22} />
                                                        </div>
                                                        <div className="brochure-body">
                                                            <h3>{item.name}</h3>
                                                            <p>{item.desc}</p>
                                                        </div>
                                                    </Link>
                                                    <div className="brochure-actions">
                                                        {item.brochure && (
                                                            <>
                                                                <a
                                                                    href={item.brochure}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="brochure-btn view-btn"
                                                                >
                                                                    <ArrowUpRight size={15} />
                                                                    View Brochure
                                                                </a>
                                                                <a
                                                                    href={item.brochure}
                                                                    download
                                                                    className="brochure-btn download-btn"
                                                                >
                                                                    <Download size={15} />
                                                                    Download
                                                                </a>
                                                            </>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCategoryPage;
