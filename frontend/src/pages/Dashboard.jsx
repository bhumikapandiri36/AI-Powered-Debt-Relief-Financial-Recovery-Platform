import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [hoverCard, setHoverCard] = useState("");
  const [hoverLogout, setHoverLogout] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  const navCards = [
    {
      id: "analysis",
      icon: "📊",
      title: "Debt Analysis",
      desc: "AI-driven insights into your debt structure",
      path: "/analysis",
    },
    {
      id: "letter",
      icon: "🤖",
      title: "AI Letter Generator",
      desc: "Generate professional recovery letters instantly",
      path: "/letter",
    },
    {
      id: "profile",
      icon: "👤",
      title: "My Profile",
      desc: "Manage your personal and account details",
      path: "/profile",
    },
  ];

  const statCards = [
    {
      label: "Monthly Income",
      value: "$4,250",
      icon: "💰",
      color: "#2563EB",
    },
    {
      label: "Total Debt",
      value: "$18,600",
      icon: "📉",
      color: "#EF4444",
    },
    {
      label: "Financial Health Score",
      value: "72 / 100",
      icon: "❤️",
      color: "#7C3AED",
    },
    {
      label: "Risk Level",
      value: "Moderate",
      icon: "⚠️",
      color: "#F59E0B",
    },
  ];

  const activities = [
    { text: "Debt analysis report generated", time: "2 hours ago" },
    { text: "AI recovery letter sent to Creditor A", time: "Yesterday" },
    { text: "Profile information updated", time: "3 days ago" },
    { text: "New financial health score calculated", time: "5 days ago" },
  ];

  const tips = [
    "Pay more than the minimum amount whenever possible to reduce interest.",
    "Prioritize high-interest debts first using the avalanche method.",
    "Keep track of your spending using monthly budget reviews.",
    "Avoid taking new credit while actively repaying existing debt.",
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      background:
        "linear-gradient(135deg, #EFF3FF 0%, #F5F3FF 50%, #EDE9FE 100%)",
      fontFamily:
        "'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    bgBlob1: {
      position: "absolute",
      top: "-120px",
      left: "-120px",
      width: "350px",
      height: "350px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0) 70%)",
      filter: "blur(10px)",
      pointerEvents: "none",
    },
    bgBlob2: {
      position: "absolute",
      bottom: "-150px",
      right: "-150px",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0) 70%)",
      filter: "blur(10px)",
      pointerEvents: "none",
    },
    navbar: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 32px",
      background: "rgba(255, 255, 255, 0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.5)",
      boxShadow: "0 4px 20px rgba(37, 99, 235, 0.08)",
      flexWrap: "wrap",
      gap: "12px",
    },
    navLeft: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    logoCircle: {
      width: "42px",
      height: "42px",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 16px rgba(124, 58, 237, 0.35)",
      flexShrink: 0,
    },
    logoText: {
      color: "#fff",
      fontSize: "18px",
      fontWeight: "700",
    },
    navTitle: {
      fontSize: "17px",
      fontWeight: "800",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      margin: 0,
    },
    navRight: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    profileIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: "rgba(124, 58, 237, 0.1)",
      border: "1.5px solid rgba(124, 58, 237, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },
    logoutButton: {
      padding: "10px 20px",
      borderRadius: "10px",
      border: "none",
      color: "#fff",
      fontSize: "13.5px",
      fontWeight: "700",
      cursor: "pointer",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      boxShadow: "0 6px 16px rgba(37, 99, 235, 0.3)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    container: {
      position: "relative",
      zIndex: 2,
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "32px 24px 60px",
    },
    welcomeSection: {
      marginBottom: "32px",
    },
    welcomeTitle: {
      fontSize: "26px",
      fontWeight: "800",
      color: "#1F2937",
      margin: "0 0 8px 0",
    },
    welcomeGradientSpan: {
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    welcomeDesc: {
      fontSize: "14.5px",
      color: "#6B7280",
      margin: 0,
      lineHeight: "1.6",
      maxWidth: "600px",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#1F2937",
      margin: "0 0 18px 0",
    },
    navCardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
      marginBottom: "40px",
    },
    navCard: {
      background: "rgba(255, 255, 255, 0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "20px",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      padding: "28px 24px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 24px rgba(37, 99, 235, 0.1)",
    },
    navCardIcon: {
      fontSize: "34px",
      marginBottom: "14px",
      display: "inline-block",
    },
    navCardTitle: {
      fontSize: "16.5px",
      fontWeight: "700",
      color: "#1F2937",
      margin: "0 0 8px 0",
    },
    navCardDesc: {
      fontSize: "13px",
      color: "#6B7280",
      margin: 0,
      lineHeight: "1.5",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginBottom: "40px",
    },
    statCard: {
      background: "rgba(255, 255, 255, 0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "18px",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      padding: "22px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      boxShadow: "0 8px 24px rgba(37, 99, 235, 0.08)",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },
    statIconWrap: (color) => ({
      width: "50px",
      height: "50px",
      borderRadius: "14px",
      background: `${color}1A`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "22px",
      flexShrink: 0,
    }),
    statLabel: {
      fontSize: "12.5px",
      color: "#6B7280",
      margin: "0 0 4px 0",
      fontWeight: "600",
    },
    statValue: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#1F2937",
      margin: 0,
    },
    twoColGrid: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "24px",
    },
    panel: {
      background: "rgba(255, 255, 255, 0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "20px",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      padding: "26px",
      boxShadow: "0 8px 24px rgba(37, 99, 235, 0.08)",
    },
    activityItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 0",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
    },
    activityText: {
      fontSize: "13.5px",
      color: "#374151",
      fontWeight: "600",
      margin: 0,
    },
    activityTime: {
      fontSize: "12px",
      color: "#9CA3AF",
      margin: 0,
      whiteSpace: "nowrap",
      marginLeft: "12px",
    },
    tipItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      padding: "12px 0",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
    },
    tipBullet: {
      fontSize: "16px",
      flexShrink: 0,
    },
    tipText: {
      fontSize: "13.5px",
      color: "#374151",
      lineHeight: "1.5",
      margin: 0,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.bgBlob1}></div>
      <div style={styles.bgBlob2}></div>

      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navLeft}>
          <div style={styles.logoCircle}>
            <span style={styles.logoText}>AI</span>
          </div>
          <h2 style={styles.navTitle}>AI Powered Debt Relief Platform</h2>
        </div>
        <div style={styles.navRight}>
          <div
            style={{
              ...styles.profileIcon,
              background: hoverProfile
                ? "rgba(124, 58, 237, 0.2)"
                : "rgba(124, 58, 237, 0.1)",
              transform: hoverProfile ? "scale(1.08)" : "scale(1)",
            }}
            onMouseEnter={() => setHoverProfile(true)}
            onMouseLeave={() => setHoverProfile(false)}
            onClick={() => navigate("/profile")}
            title="My Profile"
          >
            👤
          </div>
          <button
            style={{
              ...styles.logoutButton,
              transform: hoverLogout ? "translateY(-2px)" : "translateY(0)",
              boxShadow: hoverLogout
                ? "0 10px 22px rgba(124, 58, 237, 0.45)"
                : "0 6px 16px rgba(37, 99, 235, 0.3)",
            }}
            onMouseEnter={() => setHoverLogout(true)}
            onMouseLeave={() => setHoverLogout(false)}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={styles.container}>
        {/* Welcome Section */}
        <div style={styles.welcomeSection}>
          <h1 style={styles.welcomeTitle}>
            Welcome back, <span style={styles.welcomeGradientSpan}>User</span> 👋
          </h1>
          <p style={styles.welcomeDesc}>
            Here's an overview of your financial recovery journey. Explore
            AI-powered tools to analyze your debt, generate recovery letters,
            and track your progress toward financial freedom.
          </p>
        </div>

        {/* Navigation Cards */}
        <h2 style={styles.sectionTitle}>Quick Actions</h2>
        <div style={styles.navCardsGrid}>
          {navCards.map((card) => (
            <div
              key={card.id}
              style={{
                ...styles.navCard,
                transform:
                  hoverCard === card.id
                    ? "translateY(-6px)"
                    : "translateY(0)",
                boxShadow:
                  hoverCard === card.id
                    ? "0 16px 36px rgba(124, 58, 237, 0.25)"
                    : "0 8px 24px rgba(37, 99, 235, 0.1)",
              }}
              onMouseEnter={() => setHoverCard(card.id)}
              onMouseLeave={() => setHoverCard("")}
              onClick={() => navigate(card.path)}
            >
              <span style={styles.navCardIcon}>{card.icon}</span>
              <h3 style={styles.navCardTitle}>{card.title}</h3>
              <p style={styles.navCardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Statistics Cards */}
        <h2 style={styles.sectionTitle}>Your Financial Snapshot</h2>
        <div style={styles.statsGrid}>
          {statCards.map((stat, idx) => (
            <div
              key={idx}
              style={styles.statCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(124, 58, 237, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37, 99, 235, 0.08)";
              }}
            >
              <div style={styles.statIconWrap(stat.color)}>{stat.icon}</div>
              <div>
                <p style={styles.statLabel}>{stat.label}</p>
                <p style={styles.statValue}>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity + Quick Tips */}
        <div style={styles.twoColGrid} className="dashboard-two-col">
          <div style={styles.panel}>
            <h2 style={styles.sectionTitle}>Recent Activity</h2>
            {activities.map((act, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.activityItem,
                  borderBottom:
                    idx === activities.length - 1
                      ? "none"
                      : "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <p style={styles.activityText}>{act.text}</p>
                <p style={styles.activityTime}>{act.time}</p>
              </div>
            ))}
          </div>

          <div style={styles.panel}>
            <h2 style={styles.sectionTitle}>Quick Tips</h2>
            {tips.map((tip, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.tipItem,
                  borderBottom:
                    idx === tips.length - 1
                      ? "none"
                      : "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <span style={styles.tipBullet}>💡</span>
                <p style={styles.tipText}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dashboard-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}