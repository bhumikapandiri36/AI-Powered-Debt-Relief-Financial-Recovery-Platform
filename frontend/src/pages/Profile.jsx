import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [hoverBtn, setHoverBtn] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    monthlyIncome: "4250",
    monthlyExpenses: "2600",
    totalDebt: "18600",
    riskLevel: "Moderate",
  });

  const handleFieldChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const debtRatio =
    profile.monthlyIncome && Number(profile.monthlyIncome) > 0
      ? ((Number(profile.totalDebt) / (Number(profile.monthlyIncome) * 12)) * 100).toFixed(1) + "%"
      : "N/A";

  const disposableIncome =
    profile.monthlyIncome && profile.monthlyExpenses
      ? "$" + (Number(profile.monthlyIncome) - Number(profile.monthlyExpenses)).toLocaleString()
      : "N/A";

  const healthScore = "72 / 100";

  const activities = [
    { label: "Last Debt Analysis", value: "2 days ago", icon: "📊" },
    { label: "Last AI Letter Generated", value: "5 days ago", icon: "🤖" },
    { label: "Account Status", value: "Active & Verified", icon: "✅" },
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
      padding: "0 0 60px 0",
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
    container: {
      position: "relative",
      zIndex: 2,
      maxWidth: "950px",
      margin: "0 auto",
      padding: "40px 24px",
    },

    heroCard: {
      background: "rgba(255, 255, 255, 0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "24px",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      boxShadow:
        "0 8px 32px rgba(37, 99, 235, 0.15), 0 4px 16px rgba(124, 58, 237, 0.1)",
      padding: "36px",
      marginBottom: "28px",
      display: "flex",
      alignItems: "center",
      gap: "24px",
      flexWrap: "wrap",
    },
    avatar: {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "36px",
      fontWeight: "800",
      color: "#fff",
      boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
      flexShrink: 0,
    },
    heroText: {
      flex: 1,
      minWidth: "200px",
    },
    welcomeTitle: {
      fontSize: "22px",
      fontWeight: "800",
      color: "#1F2937",
      margin: "0 0 6px 0",
    },
    gradientSpan: {
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    heroSubtitle: {
      fontSize: "13.5px",
      color: "#6B7280",
      margin: 0,
    },

    sectionTitle: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#1F2937",
      margin: "0 0 18px 0",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },

    card: {
      background: "rgba(255, 255, 255, 0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "24px",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      boxShadow:
        "0 8px 32px rgba(37, 99, 235, 0.15), 0 4px 16px rgba(124, 58, 237, 0.1)",
      padding: "36px",
      boxSizing: "border-box",
      marginBottom: "28px",
    },

    infoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "18px",
    },
    fieldGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    label: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#374151",
    },
    inputBase: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "12px",
      fontSize: "14px",
      outline: "none",
      boxSizing: "border-box",
      background: "rgba(255,255,255,0.8)",
      border: "1.5px solid #E5E7EB",
      transition: "all 0.25s ease",
    },
    readOnlyValue: {
      padding: "12px 14px",
      borderRadius: "12px",
      fontSize: "14px",
      background: "rgba(255,255,255,0.5)",
      border: "1.5px solid transparent",
      color: "#1F2937",
      fontWeight: "600",
    },
    riskBadge: {
      display: "inline-block",
      padding: "6px 16px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "700",
      background: "rgba(245, 158, 11, 0.15)",
      color: "#B45309",
      width: "fit-content",
    },

    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginBottom: "28px",
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

    activityItem: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "14px 0",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
    },
    activityIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "12px",
      background: "rgba(124, 58, 237, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      flexShrink: 0,
    },
    activityLabel: {
      fontSize: "13.5px",
      color: "#374151",
      fontWeight: "600",
      margin: "0 0 2px 0",
    },
    activityValue: {
      fontSize: "12.5px",
      color: "#6B7280",
      margin: 0,
    },

    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginTop: "8px",
    },
    primaryButton: {
      flex: "1",
      minWidth: "180px",
      padding: "13px",
      borderRadius: "12px",
      border: "none",
      color: "#fff",
      fontSize: "14.5px",
      fontWeight: "700",
      cursor: "pointer",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      boxShadow: "0 6px 18px rgba(37, 99, 235, 0.35)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    secondaryButton: {
      flex: "1",
      minWidth: "180px",
      padding: "13px",
      borderRadius: "12px",
      border: "1.5px solid #2563EB",
      color: "#2563EB",
      background: "rgba(255,255,255,0.7)",
      fontSize: "14.5px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },
    dangerButton: {
      flex: "1",
      minWidth: "180px",
      padding: "13px",
      borderRadius: "12px",
      border: "1.5px solid #DC2626",
      color: "#DC2626",
      background: "rgba(255,255,255,0.7)",
      fontSize: "14.5px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.bgBlob1}></div>
      <div style={styles.bgBlob2}></div>

      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.heroCard}>
          <div style={styles.avatar}>
            {profile.fullName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div style={styles.heroText}>
            <h1 style={styles.welcomeTitle}>
              Welcome, <span style={styles.gradientSpan}>{profile.fullName}</span>
            </h1>
            <p style={styles.heroSubtitle}>
              AI Powered Debt Relief &amp; Financial Recovery Platform
            </p>
          </div>
        </div>

        {/* Profile Information */}
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>👤 Profile Information</h2>
          <div style={styles.infoGrid}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Full Name</label>
              {isEditing ? (
                <input
                  style={styles.inputBase}
                  value={profile.fullName}
                  onChange={(e) => handleFieldChange("fullName", e.target.value)}
                />
              ) : (
                <div style={styles.readOnlyValue}>{profile.fullName}</div>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Email</label>
              {isEditing ? (
                <input
                  style={styles.inputBase}
                  value={profile.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                />
              ) : (
                <div style={styles.readOnlyValue}>{profile.email}</div>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Phone Number</label>
              {isEditing ? (
                <input
                  style={styles.inputBase}
                  value={profile.phone}
                  onChange={(e) => handleFieldChange("phone", e.target.value)}
                />
              ) : (
                <div style={styles.readOnlyValue}>{profile.phone}</div>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Monthly Income</label>
              {isEditing ? (
                <input
                  style={styles.inputBase}
                  value={profile.monthlyIncome}
                  onChange={(e) => handleFieldChange("monthlyIncome", e.target.value)}
                />
              ) : (
                <div style={styles.readOnlyValue}>${profile.monthlyIncome}</div>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Monthly Expenses</label>
              {isEditing ? (
                <input
                  style={styles.inputBase}
                  value={profile.monthlyExpenses}
                  onChange={(e) => handleFieldChange("monthlyExpenses", e.target.value)}
                />
              ) : (
                <div style={styles.readOnlyValue}>${profile.monthlyExpenses}</div>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Total Debt</label>
              {isEditing ? (
                <input
                  style={styles.inputBase}
                  value={profile.totalDebt}
                  onChange={(e) => handleFieldChange("totalDebt", e.target.value)}
                />
              ) : (
                <div style={styles.readOnlyValue}>${profile.totalDebt}</div>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Debt Risk Level</label>
              <div>
                <span style={styles.riskBadge}>{profile.riskLevel}</span>
              </div>
            </div>
          </div>

          <div style={styles.buttonRow}>
            <button
              style={{
                ...styles.primaryButton,
                transform: hoverBtn === "edit" ? "translateY(-2px)" : "translateY(0)",
                boxShadow:
                  hoverBtn === "edit"
                    ? "0 10px 24px rgba(124, 58, 237, 0.45)"
                    : "0 6px 18px rgba(37, 99, 235, 0.35)",
              }}
              onMouseEnter={() => setHoverBtn("edit")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "💾 Save Profile" : "✏️ Edit Profile"}
            </button>

            <button
              style={{
                ...styles.secondaryButton,
                transform:
                  hoverBtn === "dashboard" ? "translateY(-2px)" : "translateY(0)",
                boxShadow:
                  hoverBtn === "dashboard"
                    ? "0 10px 22px rgba(37, 99, 235, 0.2)"
                    : "none",
              }}
              onMouseEnter={() => setHoverBtn("dashboard")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={() => navigate("/dashboard")}
            >
              🏠 Go to Dashboard
            </button>

            <button
              style={{
                ...styles.dangerButton,
                transform:
                  hoverBtn === "logout" ? "translateY(-2px)" : "translateY(0)",
                boxShadow:
                  hoverBtn === "logout"
                    ? "0 10px 22px rgba(220, 38, 38, 0.2)"
                    : "none",
              }}
              onMouseEnter={() => setHoverBtn("logout")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={() => navigate("/")}
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Statistics */}
        <h2 style={styles.sectionTitle}>📈 Financial Statistics</h2>
        <div style={styles.statsGrid}>
          <div
            style={styles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 14px 30px rgba(124, 58, 237, 0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 235, 0.08)";
            }}
          >
            <div style={styles.statIconWrap("#2563EB")}>📉</div>
            <div>
              <p style={styles.statLabel}>Debt Ratio</p>
              <p style={styles.statValue}>{debtRatio}</p>
            </div>
          </div>

          <div
            style={styles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 14px 30px rgba(124, 58, 237, 0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 235, 0.08)";
            }}
          >
            <div style={styles.statIconWrap("#7C3AED")}>💰</div>
            <div>
              <p style={styles.statLabel}>Disposable Income</p>
              <p style={styles.statValue}>{disposableIncome}</p>
            </div>
          </div>

          <div
            style={styles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 14px 30px rgba(124, 58, 237, 0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 235, 0.08)";
            }}
          >
            <div style={styles.statIconWrap("#16A34A")}>❤️</div>
            <div>
              <p style={styles.statLabel}>AI Financial Health Score</p>
              <p style={styles.statValue}>{healthScore}</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>🕒 Recent Financial Activity</h2>
          {activities.map((act, idx) => (
            <div
              key={idx}
              style={{
                ...styles.activityItem,
                borderBottom:
                  idx === activities.length - 1 ? "none" : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div style={styles.activityIcon}>{act.icon}</div>
              <div>
                <p style={styles.activityLabel}>{act.label}</p>
                <p style={styles.activityValue}>{act.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}