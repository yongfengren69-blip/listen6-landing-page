import type { Metadata } from "next";
import { PersistentOffer } from "./components/PersistentOffer";
import { purchaseUrl } from "./config";

export const metadata: Metadata = {
  title: "The Paid Listening Blueprint | Listen6",
  description:
    "A beginner-friendly guide to understanding paid listening and exploring your first steps.",
};

const advantages = [
  "Beginner Friendly",
  "No Special Degree Required",
  "No Complicated Technology",
  "Can Be Explored Online",
  "Built Around a Skill You Already Understand",
  "A Flexible Way to Explore Extra Income",
];

const listeningSkills = [
  "Keep a conversation moving naturally",
  "Give someone space when they go quiet",
  "Respond with empathy instead of advice",
  "Handle emotional expression with more confidence",
  "Help people feel genuinely heard",
];

const clientSteps = [
  "Where beginners can look for paid listening opportunities",
  "How to present your listening service clearly",
  "How to start connecting with potential clients",
  "What first steps are worth taking",
  "How to explore getting a first paying client",
];

function PurchaseLink({ children, className = "offer-link" }: { children: React.ReactNode; className?: string }) {
  return <a className={className} href={purchaseUrl}>{children}</a>;
}

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
          <span className="nav-label">THE PAID LISTENING BLUEPRINT</span>
        </nav>

        <div className="market-content section-shell">
          <p className="eyebrow">A BEGINNER-FRIENDLY WAY TO EXPLORE PAID LISTENING</p>
          <h1>People Are Getting Paid to Listen.<br />Now Learn How You Can Get Started.</h1>
          <p className="market-copy">
            A simple guide to understanding paid listening, where opportunities exist, and what your first steps can look like.
          </p>
          <PurchaseLink className="offer-link hero-cta">Get Instant Access — $19.90</PurchaseLink>
          <p className="offer-note hero-note">One-time payment · Instant access</p>
        </div>
      </section>

      <section className="advantages section-light" id="advantages">
        <div className="section-shell">
          <p className="eyebrow">THE OPPORTUNITY</p>
          <h2>Why Paid Listening Is Getting So Much Attention</h2>
          <div className="advantage-grid">
            {advantages.map((advantage, index) => (
              <article className="advantage-card" key={advantage}>
                <span>0{index + 1}</span>
                <strong>{advantage}</strong>
              </article>
            ))}
          </div>
          <PurchaseLink>Show Me How to Start — $19.90</PurchaseLink>
        </div>
      </section>

      <section className="skill-section" id="listening-skills">
        <div className="section-shell split-layout">
          <div>
            <p className="eyebrow">THE SKILL YOU ALREADY UNDERSTAND</p>
            <h2>You Already Know How to Listen.<br />Now Learn How to Do It Better.</h2>
          </div>
          <div className="skill-copy">
            <p>You do not need to be an expert to start learning. Listening is already a human skill you understand; this guide gives it simple methods and a clearer structure.</p>
            <ul className="check-list">
              {listeningSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
            <p className="skill-close">You are not starting from zero. You are learning a better way to use a skill you already have.</p>
          </div>
        </div>
      </section>

      <section className="proof-section section-light" id="how-it-works">
        <div className="section-shell split-layout">
          <div>
            <p className="eyebrow">THE SERVICE IS REAL</p>
            <h2>How Does Paid Listening Actually Work?</h2>
          </div>
          <div className="proof-copy">
            <p>Some people are not looking for advice. They want attention, conversation, and someone who can help them feel heard.</p>
            <p>That is why paid listening exists as a real online service.</p>
          </div>
        </div>
      </section>

      <section className="client-section" id="first-client">
        <div className="section-shell client-inner">
          <p className="eyebrow">THE PART MOST BEGINNERS WANT TO KNOW</p>
          <h2>How Do I Find My First Paying Client?</h2>
          <div className="client-step-grid">
            {clientSteps.map((step, index) => (
              <div className="client-step" key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <p className="client-close">You will not be left with a vague idea. You will have a clearer direction for what to explore next.</p>
          <PurchaseLink>Get the Complete Starter Guide — $19.90</PurchaseLink>
        </div>
      </section>

      <section className="purchase" id="purchase">
        <div className="section-shell purchase-inner">
          <p className="eyebrow">THE PAID LISTENING BLUEPRINT</p>
          <h2>Get Clear on How to Start.</h2>
          <PersistentOffer purchaseUrl={purchaseUrl} />
        </div>

        <footer className="site-footer section-shell">
          <a className="brand" href="#top" aria-label="Listen6 home">
            <img src="/listen6-logo.png" alt="" />
            <span>LISTEN<span>6</span></span>
          </a>
          <div className="footer-copy">
            <p className="support-contact">Customer support: <a href="mailto:help@listen6.com">help@listen6.com</a></p>
            <p>Listen6 provides educational content. Results are not guaranteed.</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
