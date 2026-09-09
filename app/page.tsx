import type { Metadata } from "next";
import { purchaseUrl } from "./config";

export const metadata: Metadata = {
  title: "The Paid Listening Starter Guide | Listen6",
  description:
    "A beginner guide to understanding paid listening, learning the skills, and knowing how to get started.",
};

const questions = [
  {
    question: "How Does Paid Listening Actually Work?",
    intro:
      "Why would someone pay another person just to listen? What are they really paying for? And where does the listener fit into all of this?",
    paragraphs: [
      "Paid listening is more than simply staying quiet while someone talks. People may be looking for a private, judgment-free space to talk about loneliness, relationships, stress, work, family, or everyday life.",
      "Paid listening turns that need into a service: a listener offers their time, attention, and conversation skills to people who are willing to pay for that experience.",
      "As a listener, your role is to help create that space — to listen carefully, ask the right questions, respond with empathy, and help the conversation continue naturally.",
    ],
    closing:
      "The guide shows you how the whole process fits together, from understanding the service to taking your first steps as a beginner.",
  },
  {
    question: "But What Would I Actually Say?",
    intro:
      "Someone starts telling you about their marriage, loneliness, stress, family problems, or something they have never felt comfortable saying out loud.",
    prompts: [
      "What do you say next?",
      "How do you help them keep talking?",
      "What questions should you ask?",
      "What if they suddenly go quiet?",
      "What if they become emotional?",
      "What if you simply have no idea what to say?",
    ],
    paragraphs: [
      "These are learnable skills.",
      "The guide teaches you how to listen actively, ask better questions, respond with empathy, handle silence, keep a conversation moving naturally, and know where your boundaries should be.",
    ],
    closing:
      "You’ll also see practical examples of what to say, what not to say, and how a good listening conversation actually feels.",
  },
  {
    question: "Okay… So How Do I Actually Start?",
    intro:
      "Understanding paid listening is one thing. Actually starting is another.",
    paragraphs: [
      "Once you know how the service works and how to handle a real listening conversation, you still need to know what to do next.",
    ],
    prompts: [
      "What should you prepare?",
      "Where can a beginner start?",
      "How should you present yourself?",
      "What do you need before offering your first listening service?",
      "And what should you do first, second, and third?",
    ],
    closing:
      "You won’t be left to figure that out on your own. You’ll know what to prepare, where to begin, how to set yourself up, and what to do next — in order. By the end, you won’t just understand paid listening. You’ll know what to do next.",
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
          <p className="eyebrow">THE SOCIAL CONNECTION SERVICES MARKET</p>
          <div className="market-stat-row">
            <p className="market-stat">$27.5<span>B</span></p>
            <p className="market-growth">33.8%<br /><span>ANNUAL GROWTH</span></p>
          </div>
          <h1>People are turning one of the most ordinary human skills — listening — into a paid service.</h1>
          <p className="market-copy">
            The social connection services market is projected to reach $27.5 billion by 2036 — growing at 33.8% a year.
          </p>
          <a className="market-next" href="#guide">
            So how does paid listening actually work — and how can a complete beginner get started? <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="guide" id="guide">
        <div className="section-shell guide-heading">
          <p className="eyebrow">THE PAID LISTENING STARTER GUIDE</p>
          <h2>You probably have a few questions.</h2>
        </div>

        <div className="section-shell question-list">
          {questions.map((item, index) => (
            <article className="question-card" key={item.question}>
              <span className="question-number">0{index + 1}</span>
              <h3>{item.question}</h3>
              <div className="question-body">
                <p className="question-intro">{item.intro}</p>
                {item.question === "But What Would I Actually Say?" && item.prompts && (
                  <ul className="question-prompts">
                    {item.prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}
                  </ul>
                )}
                {item.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {item.question !== "But What Would I Actually Say?" && item.prompts && (
                  <ul className="question-prompts">
                    {item.prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}
                  </ul>
                )}
                <p className="question-closing">{item.closing}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-shell guide-summary">
          <strong>You Don’t Have to Figure All of This Out by Yourself.</strong>
          <p>We’ve put the entire beginner path in one place — how paid listening works, how to handle real conversations, and how to take your first step.</p>
        </div>
      </section>

      <section className="purchase" id="pre-order">
        <div className="section-shell purchase-inner">
          <p className="eyebrow">LAUNCH PRE-ORDER</p>
          <h2>The Paid Listening<br />Starter Guide.</h2>
          <p className="purchase-copy">
            A practical beginner guide designed to take you from “I just discovered paid listening” to “I know what to do next.”
          </p>

          <ul className="purchase-includes" aria-label="What the guide includes">
            <li>A clear explanation of how paid listening works</li>
            <li>Real conversation examples and response guidance</li>
            <li>Step-by-step beginner starting instructions</li>
            <li>Practical checklists and tools to help you take action</li>
          </ul>

          <div className="price-row" aria-label="Price">
            <span>ONE-TIME PAYMENT</span>
            <strong>$39.90</strong>
          </div>

          <a className="buy-button" href={purchaseUrl}>Pre-Order Now — $39.90</a>
          {/* TODO: Before publishing, add the confirmed delivery date here:
              This is a pre-order. Your complete digital guide will be delivered by email on [actual date]. */}
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
