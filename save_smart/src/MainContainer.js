import React, { useState } from "react";
import "./MainContainer.css";

/**
 * Color Palette & Theme
 * primary:   #4CAF50 (main action/buttons, highlights)
 * secondary: #FFC107 (navigation, accent blocks)
 * accent:    #FF5722 (progress, badges, active, error)
 * Theme:     Light
 */

/* Feature Modules Placeholder - these will be implemented in detail later */
const Placeholder = ({ label, description }) => (
  <section className="feature-placeholder">
    <div className="feature-title">{label}</div>
    <div className="feature-desc">{description}</div>
    <div className="feature-api">API integration scaffolded here</div>
  </section>
);

/* Navigation items corresponding to feature clusters */
const NAV_ITEMS = [
  { key: "goals", label: "Goals", icon: "🎯" },
  { key: "tracker", label: "Progress", icon: "📈" },
  { key: "habits", label: "Habits", icon: "🔔" },
  { key: "gamify", label: "Gamify", icon: "🏅" },
  { key: "calendar", label: "Calendar", icon: "🗓️" },
  { key: "settings", label: "Settings", icon: "⚙️" },
];

const FEATURE_DESCRIPTIONS = {
  goals: [
    {
      label: "Goal-Based Savings Planner",
      description: "Set savings goals, define purpose, amount, and timeframe.",
    },
    {
      label: "Smart Contribution Calculator",
      description:
        "Let SaveSmart recommend regular contributions based on your goal, income, and habits.",
    },
    {
      label: "Multiple Goals Management",
      description:
        "Manage and edit multiple goals in parallel. Switch, prioritize, reorder.",
    },
    {
      label: "Goal Templates & Bundles",
      description:
        "Start from pre-made popular goals or group multiple goals as bundles.",
    },
    {
      label: "Contribution from Family/Friends",
      description:
        "Generate shareable links to invite or receive contributions from others.",
    },
    {
      label: "Goal Management API",
      description: "API placeholder for create, update, delete goals.",
    },
    {
      label: "User Management API",
      description: "Profile, privacy settings, and preferences management.",
    },
  ],
  tracker: [
    {
      label: "Visual Progress Tracker",
      description:
        "See progress with visual bars, milestones, and achievement markers.",
    },
    {
      label: "Progress Tracking API",
      description: "Update and retrieve progress for each savings goal.",
    },
  ],
  habits: [
    {
      label: "Auto Reminders & Habit Builder",
      description:
        "Get automated reminders, build savings habits, and receive nudges.",
    },
    {
      label: "Reminders API",
      description: "Set, update, and query reminders for goals.",
    },
  ],
  gamify: [
    {
      label: "Gamification & Motivation",
      description:
        "Earn badges, maintain streaks, and play quizzes to motivate saving.",
    },
    {
      label: "Gamification API",
      description:
        "API integration for badges, streaks, and gamified interactions.",
    },
  ],
  calendar: [
    {
      label: "Calendar Integration",
      description: "Sync reminders with Google or Apple calendars.",
    },
  ],
  settings: [
    {
      label: "User Management API",
      description:
        "Manager user privacy, notification preferences, export settings.",
    },
  ],
};

/**
 * PUBLIC_INTERFACE
 * MainContainer - Container for SaveSmart web app, integrating navigation and all feature modules.
 */
function MainContainer() {
  // Navigation state
  const [activeNav, setActiveNav] = useState("goals");

  // App Header Bar
  const Header = () => (
    <nav className="ss-navbar">
      <div className="ss-navbar-logo">
        <span className="ss-logo-symbol">💰</span>
        <span className="ss-logo-text">SaveSmart</span>
      </div>
      {/* Future: notification/profile icons */}
    </nav>
  );

  // App Navigation Sidebar (top nav for mobile)
  const Navigation = () => (
    <nav className="ss-sidenav">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.key}
          className={
            "ss-nav-item" +
            (activeNav === item.key ? " ss-nav-item-active" : "")
          }
          onClick={() => setActiveNav(item.key)}
          aria-label={item.label}
        >
          <span className="ss-nav-icn">{item.icon}</span>
          <span className="ss-nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );

  // Main Content: switch per feature cluster, map to scaffolded feature placeholders
  const MainContent = () => (
    <div className="ss-main-content">
      {FEATURE_DESCRIPTIONS[activeNav].map((f, i) => (
        <Placeholder key={i} label={f.label} description={f.description} />
      ))}
    </div>
  );

  return (
    <div className="ss-app-root light-theme">
      <Header />
      <div className="ss-app-layout">
        <Navigation />
        <main className="ss-content-layout">
          <MainContent />
        </main>
      </div>
    </div>
  );
}

export default MainContainer;
