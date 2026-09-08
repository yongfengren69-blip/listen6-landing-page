import type { Metadata } from "next";
import { purchaseUrl } from "./config";

export const metadata: Metadata = {
  title: "The Paid Listening Starter Guide | Listen6",
  description:
    "A short starter guide to understand, learn, and begin a paid listening service.",
};

const questions = [
  {
    question: "How does this business actually work?",
    answer: "THE ROADMAP",
    description:
      "Understand how paid listening works and see the complete path from starting at zero to building your own service.",
  },
  {
    question: "What if I don’t know how to do it?",
    answer: "THE SKILLS",
    description:
      "Learn the core skills behind real paid conversations: how to listen, ask, respond, show empathy, and handle a real exchange.",
  },
  {
    question: "How do I actually get started?",
    answer: "THE STARTING METHOD",
    description:
      "Get a clear, practical starting method: what to prepare, what to do next, and how to take the first step.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="market" id="top">
        <div className="market-grid" aria-hidden="true" />
        <nav className="site-nav section-shell" aria-label="Listen6">
          <a className="brand" href="#top" aria-label="Listen6 home">
            <img src="/listen6-logo.png" alt="" />
            <span>LISTEN<span>6</span></span>
          </a>
          <span className="nav-label">STARTER GUIDE</span>
        </nav>

        <div className="market-content section-shell">
          <p className="eyebrow">A GROWING HUMAN-NEED MARKET</p>
          <p className="market-stat">$27.5<span>B</span></p>
          <h1>A market built around one thing people still need.</h1>
          <p className="market-copy">
            The social connection services market is projected to reach $27.5
            billion by 2036, growing at 33.8% annually.
          </p>
          <a className="market-next" href="#guide">
            So how do you become part of it? <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="guide" id="guide">
        <div className="section-shell guide-heading">
          <p className="eyebrow">THE PAID LISTENING STARTER GUIDE</p>
          <h2>Three questions.<br />Three clear answers.</h2>
        </div>

        <div className="section-shell question-list">
          {questions.map((item, index) => (
            <article className="question-card" key={item.answer}>
              <span className="question-number">0{index + 1}</span>
              <h3>{item.question}</h3>
              <div className="question-answer">
                <strong>{item.answer}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-shell guide-summary">
          <p>THE ROADMAP + THE SKILLS + THE STARTING METHOD</p>
          <strong>Understand it. Learn it. Start it.</strong>
        </div>
      </section>

      <section className="purchase" id="pre-order">
        <div className="section-shell purchase-inner">
          <p className="eyebrow">LAUNCH PRE-ORDER</p>
          <h2>The Paid Listening<br />Starter Guide.</h2>
          <p className="purchase-copy">
            A concise guide to understand the opportunity, learn the core
            skills, and see how to take the first step.
          </p>

          <div className="price-row" aria-label="Price">
            <span>ONE-TIME PAYMENT</span>
            <strong>$39.90</strong>
          </div>

          <a className="buy-button" href={purchaseUrl}>
            Pre-Order Now <span aria-hidden="true">→</span> $39.90
          </a>
          <p className="delivery-note">
            Digital guide delivered to your email on <strong>[DELIVERY DATE]</strong>.
          </p>
        </div>

        <footer className="site-footer section-shell">
          <a className="brand" href="#top" aria-label="Listen6 home">
            <img src="/listen6-logo.png" alt="" />
            <span>LISTEN<span>6</span></span>
          </a>
          <p>Listen6 provides educational content. Results are not guaranteed.</p>
        </footer>
      </section>
    </main>
  );
}
