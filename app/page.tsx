import type { Metadata } from "next";
import { getWhatsAppLink, siteConfig } from "./config";

export const metadata: Metadata = {
  title: "Build Your Paid Listening Business | Listen6",
  description:
    "Learn the skill, find clients, and build your own paid listening business.",
};

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="grid-glow" />
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Listen6 home">
            <img src="/listen6-logo.png" alt="Listen6" />
            <span className="brand-wordmark">LISTEN<span>6</span></span>
          </a>
          <span className="nav-status">A NEW SERVICE BUSINESS</span>
        </nav>

        <div className="hero-content section-shell">
          <p className="eyebrow">THE PAID LISTENING OPPORTUNITY</p>
          <h1>Build Your Own Paid Listening Business.</h1>
          <p className="hero-lede">Learn the skill. Find clients. Build a business.</p>
          <p className="hero-copy">
            People are already paying to be heard. Listen6 helps ordinary people
            learn how to enter this growing market and build a paid listening
            business from zero.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={getWhatsAppLink(siteConfig.ctaMessages.hero)}
              target="_blank"
              rel="noreferrer"
            >
              Talk to Our Team <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#market">
              See How It Works <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-proof section-shell" aria-label="Business foundations">
          <div><strong>01</strong><span>Skill</span></div>
          <div><strong>02</strong><span>Clients</span></div>
          <div><strong>03</strong><span>Business</span></div>
        </div>
      </section>

      <section className="section market-section" id="market">
        <div className="section-shell two-column intro-grid">
          <div>
            <p className="eyebrow">01 — THE DEMAND</p>
            <h2>The Market Is Already Here.</h2>
          </div>
          <div className="section-intro">
            <p>
              People want to be heard. Loneliness, emotional connection and
              companionship have become major global needs.
            </p>
            <p className="muted-copy">People are already looking for:</p>
            <ul className="need-list">
              <li>Human connection</li>
              <li>Someone to talk to</li>
              <li>Emotional support</li>
              <li>Someone who simply listens</li>
            </ul>
          </div>
        </div>

        <div className="section-shell data-grid" aria-label="Market data placeholders">
          <article className="data-card"><span>01</span><strong>[MARKET DATA]</strong><p>Global demand for connection and companionship.</p></article>
          <article className="data-card accent-card"><span>02</span><strong>[AI COMPANION DATA]</strong><p>Proof that people actively seek companionship.</p></article>
          <article className="data-card"><span>03</span><strong>[PAID LISTENING EXAMPLE]</strong><p>Real examples of people paying to be heard.</p></article>
        </div>
        <p className="section-conclusion section-shell">The demand already exists.</p>
      </section>

      <section className="section paying-section">
        <div className="section-shell split-heading">
          <p className="eyebrow">02 — PROOF OF PAYMENT</p>
          <h2>People Are Already Paying.</h2>
          <p className="section-summary">This isn&apos;t just a theoretical market. People are already spending money on:</p>
        </div>
        <div className="section-shell payment-list">
          <div><span>01</span><strong>Paid listening</strong></div>
          <div><span>02</span><strong>Emotional companionship</strong></div>
          <div><span>03</span><strong>Human connection services</strong></div>
          <div><span>04</span><strong>AI companion services</strong></div>
        </div>
        <div className="section-shell statement-card">
          <p>The market isn&apos;t waiting to be created.</p>
          <strong>It&apos;s already here.</strong>
        </div>
      </section>

      <section className="section opportunity-section" id="opportunity">
        <div className="section-shell opportunity-top">
          <p className="eyebrow">03 — THE OPENING</p>
          <h2>The Opportunity Is Still Early.</h2>
          <p>
            Paid listening already exists. People are already paying. But there
            still isn&apos;t a widely established path showing ordinary people how
            to build their own independent paid listening business from zero.
          </p>
          <p className="opportunity-line">That&apos;s the opportunity.</p>
        </div>
        <div className="section-shell learn-panel">
          <p className="panel-kicker">YOU DON&apos;T NEED TO KNOW EVERYTHING TO START.</p>
          <h3>You need to learn two things.</h3>
          <div className="skill-grid">
            <article className="skill-card"><span>01</span><h4>Learn the Skill</h4><p>Learn how to listen professionally and provide a service people value.</p></article>
            <article className="skill-card"><span>02</span><h4>Find Clients</h4><p>Learn how to attract people who are willing to pay for your service.</p></article>
          </div>
        </div>
        <div className="section-shell mid-cta">
          <p>Interested in building one of your own?</p>
          <a className="button button-primary" href={getWhatsAppLink(siteConfig.ctaMessages.opportunity)} target="_blank" rel="noreferrer">
            Explore How to Start <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="section growth-section">
        <div className="section-shell growth-heading">
          <p className="eyebrow">04 — THE PATH</p>
          <h2>Start as a Listener.<br /><span>Grow Into a Business Owner.</span></h2>
        </div>
        <div className="section-shell growth-path" aria-label="Business growth path">
          <div className="path-node path-start">YOU</div>
          <div className="path-arrow" aria-hidden="true">↓</div>
          <div className="path-node">Learn the Skill</div>
          <div className="path-arrow" aria-hidden="true">↓</div>
          <div className="path-node">Find Clients</div>
          <div className="path-arrow" aria-hidden="true">↓</div>
          <div className="path-node">Build Demand</div>
          <div className="path-arrow" aria-hidden="true">↓</div>
          <div className="path-node">Add Trained Listeners</div>
          <div className="path-arrow" aria-hidden="true">↓</div>
          <div className="path-node path-end">YOUR LISTENING BUSINESS</div>
        </div>
        <div className="section-shell growth-copy">
          <p>
            You can start as a one-person business. As your client acquisition
            grows beyond what you can personally handle, you can gradually bring
            other trained listeners into the business.
          </p>
          <strong>Start with yourself. Build something bigger.</strong>
        </div>
      </section>

      <section className="section listen6-section" id="listen6">
        <div className="section-shell listen6-intro">
          <p className="eyebrow">05 — LISTEN6</p>
          <h2>You Don&apos;t Have to Figure It Out Alone.</h2>
          <p>
            Listen6 helps you learn the skill, understand how to find clients,
            and build your listening business step by step.
          </p>
        </div>
        <div className="section-shell support-grid">
          <article className="support-card"><span>GUIDED</span><h3>You build it.<br />We guide you.</h3><p>For people who want to do the work themselves with a complete path and guidance.</p></article>
          <article className="support-card support-card-dark"><span>HANDS-ON</span><h3>We build it<br />with you.</h3><p>For people who want more team involvement and help as they get started.</p></article>
        </div>
      </section>

      <section className="final-section">
        <div className="section-shell final-inner">
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2>Ready to Build Your Listening Business?</h2>
          <p>You don&apos;t have to figure it out alone.</p>
          <a className="button button-primary" href={getWhatsAppLink(siteConfig.ctaMessages.final)} target="_blank" rel="noreferrer">
            Talk to Our Team <span aria-hidden="true">↗</span>
          </a>
        </div>
        <footer className="site-footer section-shell"><a className="brand" href="#top" aria-label="Listen6 home"><img src="/listen6-logo.png" alt="Listen6" /><span className="brand-wordmark">LISTEN<span>6</span></span></a><span>Paid listening, built with intention.</span></footer>
      </section>
    </main>
  );
}
