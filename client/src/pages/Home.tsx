/**
 * PIXEL CARD — Precision Vault design system
 * Neo-industrial, dark editorial product presentation with signal-orange calibration details.
 * Product and technical clarity remain more prominent than decorative effects.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleHelp,
  Layers3,
  Menu,
  MoveDiagonal2,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const EBAY_LISTING_URL = "https://www.ebay.co.uk/sch/i.html?_nkw=35pt+toploader+25+pack";

const specs = [
  { value: "35PT", label: "Card thickness compatibility", index: "01" },
  { value: '3” × 4”', label: "Toploader format", index: "02" },
  { value: "76 × 102", suffix: "MM", label: "External dimensions", index: "03" },
  { value: "25", suffix: "PACK", label: "Toploaders included", index: "04" },
  { value: "RIGID PVC", label: "High-clarity construction", index: "05" },
];

const faqs = [
  {
    question: "What size is the Toploader?",
    answer: "The Toploader measures approximately 3” × 4” (76mm × 102mm).",
  },
  {
    question: "What card thickness does it support?",
    answer: "It is designed for cards up to approximately 35PT thickness.",
  },
  {
    question: "How many are included?",
    answer: "Each pack contains 25 Toploaders.",
  },
  {
    question: "Should I use a penny sleeve?",
    answer:
      "Yes. We recommend placing your trading card inside a penny sleeve before inserting it into the Toploader.",
  },
  {
    question: "Can I use it for Pokémon cards?",
    answer:
      "It is suitable for standard-size trading cards where the card dimensions and thickness are compatible.",
  },
  {
    question: "Can I use it for sports cards?",
    answer:
      "Yes, provided the card dimensions and thickness are compatible with a 35PT Toploader.",
  },
];

const launchChecklist = [
  {
    title: "Listing basics",
    items: [
      "Product title with size, thickness, quantity, and card use case.",
      "Category: Trading Card Supplies / Toploaders or Card Holders.",
      "Item specifics: brand, type, material, compatible card size, pack quantity.",
    ],
  },
  {
    title: "Photos to prepare",
    items: [
      "Main white-background pack shot for eBay search results.",
      "Lifestyle angle showing the pack and clear Toploaders.",
      "Close-up of thickness, opening, and 76mm × 102mm size reference.",
    ],
  },
  {
    title: "Sales details",
    items: [
      "Unit price, multi-pack option, and stock count.",
      "Shipping method, dispatch time, packaging protection, and delivery regions.",
      "Returns wording, condition, and note to use penny sleeves before insertion.",
    ],
  },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

function Eyebrow({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return (
    <p className={`eyebrow ${inverse ? "eyebrow-inverse" : ""}`}>
      <span className="eyebrow-dot" />
      {children}
    </p>
  );
}

function EbayButton({
  children,
  kind = "solid",
  className = "",
}: {
  children: React.ReactNode;
  kind?: "solid" | "line";
  className?: string;
}) {
  return (
    <a
      className={`cta ${kind === "line" ? "cta-line" : ""} ${className}`}
      href={EBAY_LISTING_URL}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={2.2} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PIXEL CARD home">
          <BrandMark />
          <span className="brand-type">
            PIXEL<span>CARD</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#specifications">Specifications</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a
          className="header-buy"
          href={EBAY_LISTING_URL}
          target="_blank"
          rel="noreferrer"
        >
          Buy on eBay <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-trigger"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
            <a href="#specifications" onClick={() => setMenuOpen(false)}>Specifications</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href={EBAY_LISTING_URL} target="_blank" rel="noreferrer" className="mobile-buy">
              Buy on eBay <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" />
          <div className="hero-lane lane-left" />
          <div className="hero-lane lane-right" />
          <div className="hero-copy">
            <Eyebrow inverse>PIXEL CARD / PROTECTION SERIES</Eyebrow>
            <h1 id="hero-title">
              PROTECT<br />
              <em>WHAT</em> YOU<br />
              COLLECT.
            </h1>
            <p className="hero-summary">
              Crystal-clear protection. Extra-rigid construction. Built for collectors.
            </p>
            <div className="hero-actions">
              <EbayButton>Buy on eBay</EbayButton>
              <a className="text-link" href="#product">
                Explore the product <ArrowDownRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-product-stage hero-photo-stage" aria-label="PIXEL CARD Toploader product presentation">
            <div className="product-coordinate coordinate-top">PCS / 25 / 001</div>
            <div className="product-coordinate coordinate-bottom">35PT / 76 × 102MM</div>
            <div className="pack-info">
              <span>PIXEL CARD</span>
              <strong>TOPLOADER</strong>
              <small>35PT · 3” × 4” · 25 PACK</small>
            </div>
            <img
              className="hero-product-image"
              src={`${import.meta.env.BASE_URL}product-pack-single.png`}
              alt="PIXEL CARD 35PT Toploader 25 pack displayed in black packaging"
            />
            <div className="material-frame frame-a" />
            <div className="material-frame frame-b" />
            <span className="orange-orbit orbit-one" />
            <span className="orange-orbit orbit-two" />
          </div>

          <div className="hero-spec-line">
            <span>35PT</span><i />
            <span>3” × 4”</span><i />
            <span>25 PACK</span>
          </div>
          <a className="hero-scroll" href="#product" aria-label="Scroll to product overview">
            <span>Scroll to inspect</span><ArrowDownRight size={18} />
          </a>
        </section>

        <section id="product" className="intro section-anchor" aria-labelledby="intro-title">
          <div className="section-rail"><span>01</span><i /></div>
          <div className="intro-heading">
            <Eyebrow>THE STANDARD, MADE CLEAR</Eyebrow>
            <h2 id="intro-title">CLEAR PROTECTION<br />FOR YOUR COLLECTION.</h2>
          </div>
          <div className="intro-body">
            <p>
              PIXEL CARD Toploaders provide a rigid outer layer of protection while keeping the card inside clearly visible. A precise, straightforward format for the cards you collect, store, trade, and ship.
            </p>
            <div className="product-id">
              <span>PRODUCT / 01</span>
              <strong>PIXEL CARD TOPLOADER <em>35PT</em></strong>
            </div>
          </div>
          <div className="benefit-cards">
            <article>
              <div className="benefit-icon"><Sparkles size={22} /></div>
              <span className="benefit-num">01</span>
              <h3>CRYSTAL<br />CLEAR</h3>
              <p>High-clarity PVC keeps the card clearly visible.</p>
            </article>
            <article>
              <div className="benefit-icon"><ShieldCheck size={22} /></div>
              <span className="benefit-num">02</span>
              <h3>EXTRA<br />RIGID</h3>
              <p>Rigid construction provides additional protection against bending and everyday handling.</p>
            </article>
            <article>
              <div className="benefit-icon"><PackageCheck size={22} /></div>
              <span className="benefit-num">03</span>
              <h3>COLLECTOR<br />READY</h3>
              <p>Made for standard-size cards across collecting, storage, trading, and shipping.</p>
            </article>
          </div>
        </section>

        <section id="specifications" className="specs section-anchor" aria-labelledby="specs-title">
          <div className="specs-image-panel">
            <img
              src={`${import.meta.env.BASE_URL}product-pack-duo.png`}
              alt="Two PIXEL CARD Toploader packs showing clear rigid card holders and packaging"
            />
            <div className="image-overlay-spec"><span>01 / MATERIAL STUDY</span><b>HIGH-CLARITY<br />RIGID PVC</b></div>
            <div className="dimension-line vertical"><span>102 MM</span></div>
            <div className="dimension-line horizontal"><span>76 MM</span></div>
          </div>
          <div className="specs-copy">
            <Eyebrow inverse>SPECIFICATION / PRECISE BY DESIGN</Eyebrow>
            <h2 id="specs-title">THE DETAILS<br />THAT <em>FIT.</em></h2>
            <p>Know the format before you protect your collection. Every Toploader is made for a specific card profile.</p>
            <div className="spec-list">
              {specs.map((spec) => (
                <div className="spec-row" key={spec.index}>
                  <span className="spec-index">{spec.index}</span>
                  <strong>{spec.value} {spec.suffix && <small>{spec.suffix}</small>}</strong>
                  <span className="spec-label">{spec.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how section-anchor" aria-labelledby="how-title">
          <div className="how-topline">
            <div><Eyebrow>USE / A SIMPLE PROTECTION ROUTINE</Eyebrow><h2 id="how-title">THREE STEPS.<br />ONE CLEAR <em>STANDARD.</em></h2></div>
            <p>For a better fit, use your PIXEL CARD Toploader with a standard penny sleeve.</p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-no">01</span>
              <div className="step-visual sleeve-visual"><span /></div>
              <div className="step-copy"><h3>SLEEVE YOUR CARD</h3><p>Place the trading card into a penny sleeve.</p></div>
            </article>
            <article className="step">
              <span className="step-no">02</span>
              <div className="step-visual insert-visual"><span /><i /></div>
              <div className="step-copy"><h3>INSERT</h3><p>Carefully insert the sleeved card into the PIXEL CARD Toploader.</p></div>
            </article>
            <article className="step">
              <span className="step-no">03</span>
              <div className="step-visual protect-visual"><span /><i /><b /></div>
              <div className="step-copy"><h3>PROTECT</h3><p>Your card now has an additional rigid layer for collecting, storage, trading, or shipping.</p></div>
            </article>
          </div>
        </section>

        <section className="launch-prep" aria-labelledby="launch-title">
          <div className="launch-copy">
            <Eyebrow inverse>EBAY LAUNCH / READY BEFORE YOU LIST</Eyebrow>
            <h2 id="launch-title">WHAT TO<br />PREPARE<br /><em>FIRST.</em></h2>
            <p>
              Use this as your launch list before publishing on eBay. The product page gives buyers confidence; these are the practical details eBay will ask you for.
            </p>
          </div>
          <div className="launch-grid">
            {launchChecklist.map((group, index) => (
              <article className="launch-card" key={group.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="collection" aria-labelledby="collection-title">
          <div className="collection-photo">
            <img
              src={`${import.meta.env.BASE_URL}product-pack-single.png`}
              alt="PIXEL CARD Toploader pack with clear protectors shown on a dark reflective surface"
            />
            <span className="collection-photo-note">COLLECT / STORE / TRADE / SHIP</span>
          </div>
          <div className="collection-copy">
            <Eyebrow>COLLECTOR COMPATIBILITY</Eyebrow>
            <h2 id="collection-title">MADE FOR THE<br />CARDS THAT<br /><em>MATTER.</em></h2>
            <p>PIXEL CARD creates straightforward protection products for collectors. Clear materials. Rigid construction. No unnecessary distractions.</p>
            <div className="collector-list">
              <span><Check size={16} /> Pokémon cards</span>
              <span><Check size={16} /> Trading Card Games</span>
              <span><Check size={16} /> Sports cards</span>
              <span><Check size={16} /> Collectible cards</span>
            </div>
            <p className="fineprint">Suitable where card dimensions and thickness are compatible with a 35PT Toploader.</p>
          </div>
        </section>

        <section className="detail-strip" aria-label="PIXEL CARD Toploader physical details">
          <div className="detail-title"><span>PHYSICAL PRODUCT / 02</span><h2>ENGINEERED TO<br />STAY <em>OUT OF<br />THE WAY.</em></h2></div>
          <div className="detail-tiles">
            <div className="detail-tile transparent-tile"><Layers3 size={28} /><span>Clear material<br />for full visibility</span></div>
            <div className="detail-tile edge-tile"><MoveDiagonal2 size={28} /><span>Rigid edge profile<br />for daily handling</span></div>
            <div className="detail-tile quantity-tile"><b>25</b><span>Toploaders<br />per pack</span></div>
            <div className="detail-tile format-tile"><Ruler size={28} /><span>Standard<br />3” × 4” format</span></div>
          </div>
        </section>

        <section id="faq" className="faq section-anchor" aria-labelledby="faq-title">
          <div className="faq-heading">
            <Eyebrow>FAQ / PRODUCT CLARITY</Eyebrow>
            <h2 id="faq-title">ASK BEFORE<br />YOU <em>PROTECT.</em></h2>
            <p>A quick guide to the PIXEL CARD Toploader format and everyday use.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<ChevronDown size={20} /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="cta-title">
          <div className="cta-lines" />
          <div className="final-product-code">PX / TL / 35 / 25</div>
          <div className="final-mark-wrap"><BrandMark className="final-mark" /></div>
          <Eyebrow inverse>PIXEL CARD TOPLOADER / 35PT</Eyebrow>
          <h2 id="cta-title">READY TO PROTECT<br />YOUR COLLECTION?</h2>
          <p>35PT · 3” × 4” · 25 PACK</p>
          <EbayButton className="final-button">Buy now on eBay</EbayButton>
          <span className="secure-note"><CircleHelp size={15} /> Secure purchase through eBay</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top"><BrandMark /><span className="brand-type">PIXEL<span>CARD</span></span></a>
        <span>© {new Date().getFullYear()} PIXEL CARD. Protection, made visible.</span>
        <a href="#top">Back to top <ArrowUpRight size={15} /></a>
      </footer>

      <a className="mobile-sticky-buy" href={EBAY_LISTING_URL} target="_blank" rel="noreferrer">
        <span>Buy on eBay</span><ArrowUpRight size={18} />
      </a>
    </div>
  );
}
