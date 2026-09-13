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

const guideOutcomes = [
  "What paid listening actually is",
  "Why people pay for listening",
  "What beginners need to start",
  "How listening conversations work",
  "Where beginners can explore opportunities",
  "How to present yourself",
  "What first steps to take",
  "What common beginner mistakes to avoid",
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
          <ul className="hero-points" aria-label="Guide benefits">
            <li>Beginner-friendly</li>
            <li>No special degree required</li>
            <li>No complicated technology</li>
            <li>Learn where opportunities exist</li>
            <li>Learn the first steps</li>
          </ul>
          <PurchaseLink className="offer-link hero-cta">Get Instant Access — $19.90</PurchaseLink>
          <p className="offer-note hero-note">One-time payment · Instant access</p>
        </div>
      </section>

      <section className="advantages section-light" id="advantages">
        <div className="section-shell">
          <p className="eyebrow">THE OPPORTUNITY</p>
          <h2>Why Paid Listening Is Getting So Much Attention</h2>
          <p className="section-lead">
            It is a different kind of opportunity: simple to understand, human at its core, and worth exploring before you decide whether it is right for you.
          </p>
          <div className="advantage-grid">
            {advantages.map((advantage, index) => (
              <article className="advantage-card" key={advantage}>
                <span>0{index + 1}</span>
                <strong>{advantage}</strong>
              </article>
            ))}
          </div>
          <p className="foundation-copy">
            If people already come to you when they need someone to talk to, you may already understand the foundation of paid listening.
          </p>
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
            <p>Some people want a private, judgment-free space to talk about loneliness, relationships, stress, work, family, or everyday life.</p>
            <p>They are not always looking for advice. Often, they want attention, conversation, and someone who can help them feel heard.</p>
            <p>That is why paid listening exists as a real online service people are willing to explore and pay for.</p>
          </div>
        </div>
        <div className="section-shell market-proof">
          <div>
            <strong>$27.5<span>B</span></strong>
            <p>Projected social connection services market by 2036.</p>
          </div>
          <div>
            <strong>33.8%</strong>
            <p>Projected annual market growth.</p>
          </div>
          <p className="proof-note">The point is not to overwhelm you with numbers. It is to show that human connection is a real and growing area of demand.</p>
        </div>
      </section>

      <section className="client-section" id="first-client">
        <div className="section-shell client-inner">
          <p className="eyebrow">THE PART MOST BEGINNERS WANT TO KNOW</p>
          <h2>How Do I Find My First Paying Client?</h2>
          <p className="section-lead">The guide does more than explain the idea. It helps you understand where to look, how to show up, and how to take practical first steps.</p>
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

      <section className="outcomes-section section-light" id="what-youll-know">
        <div className="section-shell">
          <p className="eyebrow">THE ANSWERS YOU ARE LOOKING FOR</p>
          <h2>What You’ll Know After Going Through the Guide</h2>
          <p className="section-lead">For $19.90, the questions that brought you here become a much clearer path to explore.</p>
          <div className="outcome-grid">
            {guideOutcomes.map((outcome, index) => (
              <div className="outcome-item" key={outcome}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="decision-section">
        <div className="section-shell decision-inner">
          <p className="eyebrow">A SMALL DECISION, NOT A LIFE DECISION</p>
          <h2>You Don’t Need to Choose a New Career Today.</h2>
          <p>You do not need to decide today whether paid listening is your future. Just learn how it works, see where beginners can start, and decide for yourself whether it is worth exploring.</p>
        </div>
      </section>

      <section className="purchase" id="purchase">
        <div className="section-shell purchase-inner">
          <p className="eyebrow">THE PAID LISTENING BLUEPRINT</p>
          <h2>Get Clear on How to Start.</h2>
          <p className="purchase-copy">Understand the opportunity, learn the first steps, and see whether paid listening is worth exploring for you.</p>
          <PersistentOffer purchaseUrl={purchaseUrl} />
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
