import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DebtAnalysis() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [totalDebt, setTotalDebt] = useState("");

  const [focusField, setFocusField] = useState("");
  const [hoverBtn, setHoverBtn] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleRegisterUser = async () => {
    setError("");
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          phone: phone,
        }),
      });
      const data = await response.json();
      console.log("Register response:", data);
    } catch (err) {
      console.error(err);
      setError("Unable to register user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeDebt = async () => {
    setError("");
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          phone: phone,
          monthly_income: monthlyIncome,
          monthly_expenses: monthlyExpenses,
          total_debt: totalDebt,
        }),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Unable to analyze debt. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
      maxWidth: "900px",
      margin: "0 auto",
      padding: "40px 24px",
    },
    headerRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "28px",
      flexWrap: "wrap",
      gap: "12px",
    },
    titleWrap: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    logoCircle: {
      width: "48px",
      height: "48px",
      borderRadius: "14px",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 18px rgba(124, 58, 237, 0.35)",
      flexShrink: 0,
      fontSize: "22px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "800",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      margin: 0,
    },
    subtitle: {
      fontSize: "13.5px",
      color: "#6B7280",
      margin: "4px 0 0 0",
    },
    backButton: {
      padding: "10px 20px",
      borderRadius: "10px",
      border: "1.5px solid #7C3AED",
      color: "#7C3AED",
      background: "rgba(255,255,255,0.6)",
      fontSize: "13.5px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.25s ease",
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
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "18px",
      marginBottom: "10px",
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
      transition: "all 0.25s ease",
    },
    errorText: {
      color: "#DC2626",
      fontSize: "13px",
      fontWeight: "600",
      marginTop: "10px",
    },
    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginTop: "24px",
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
    resultsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
    },
    resultCard: {
      background: "rgba(255, 255, 255, 0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "18px",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      padding: "22px",
      boxShadow: "0 8px 24px rgba(37, 99, 235, 0.1)",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },
    resultIcon: {
      fontSize: "28px",
      marginBottom: "10px",
      display: "inline-block",
    },
    resultLabel: {
      fontSize: "12.5px",
      color: "#6B7280",
      fontWeight: "600",
      margin: "0 0 6px 0",
    },
    resultValue: {
      fontSize: "17px",
      fontWeight: "800",
      color: "#1F2937",
      margin: 0,
      lineHeight: "1.4",
    },
    adviceCard: {
      gridColumn: "1 / -1",
    },
  };

  const getInputStyle = (fieldName) => ({
    ...styles.inputBase,
    border:
      focusField === fieldName
        ? "1.5px solid #7C3AED"
        : "1.5px solid #E5E7EB",
    boxShadow:
      focusField === fieldName
        ? "0 0 0 4px rgba(124, 58, 237, 0.12)"
        : "none",
  });

  return (
    <div style={styles.page}>
      <div style={styles.bgBlob1}></div>
      <div style={styles.bgBlob2}></div>

      <div style={styles.container}>
        <div style={styles.headerRow}>
          <div style={styles.titleWrap}>
            <div style={styles.logoCircle}>📊</div>
            <div>
              <h1 style={styles.title}>AI Debt Analysis</h1>
              <p style={styles.subtitle}>
                Enter your financial details for an AI-powered assessment
              </p>
            </div>
          </div>
          <button
            style={{
              ...styles.backButton,
              background:
                hoverBtn === "back"
                  ? "rgba(124, 58, 237, 0.1)"
                  : "rgba(255,255,255,0.6)",
              transform:
                hoverBtn === "back" ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHoverBtn("back")}
            onMouseLeave={() => setHoverBtn("")}
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Form Card */}
        <div style={styles.card}>
          <div style={styles.formGrid}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setFocusField("fullName")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("fullName")}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusField("email")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("email")}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Phone Number</label>
              <input
                type="tel"
                placeholder="+1 234 567 8900"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={() => setFocusField("phone")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("phone")}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Monthly Income</label>
              <input
                type="number"
                placeholder="4000"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                onFocus={() => setFocusField("monthlyIncome")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("monthlyIncome")}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Monthly Expenses</label>
              <input
                type="number"
                placeholder="2500"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(e.target.value)}
                onFocus={() => setFocusField("monthlyExpenses")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("monthlyExpenses")}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Total Debt</label>
              <input
                type="number"
                placeholder="15000"
                value={totalDebt}
                onChange={(e) => setTotalDebt(e.target.value)}
                onFocus={() => setFocusField("totalDebt")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("totalDebt")}
              />
            </div>
          </div>

          {error && <p style={styles.errorText}>{error}</p>}

          <div style={styles.buttonRow}>
            <button
              style={{
                ...styles.secondaryButton,
                transform:
                  hoverBtn === "register"
                    ? "translateY(-2px)"
                    : "translateY(0)",
                boxShadow:
                  hoverBtn === "register"
                    ? "0 10px 22px rgba(37, 99, 235, 0.2)"
                    : "none",
              }}
              onMouseEnter={() => setHoverBtn("register")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={handleRegisterUser}
              disabled={loading}
            >
              Register User
            </button>

            <button
              style={{
                ...styles.primaryButton,
                transform:
                  hoverBtn === "analyze"
                    ? "translateY(-2px)"
                    : "translateY(0)",
                boxShadow:
                  hoverBtn === "analyze"
                    ? "0 10px 24px rgba(124, 58, 237, 0.45)"
                    : "0 6px 18px rgba(37, 99, 235, 0.35)",
              }}
              onMouseEnter={() => setHoverBtn("analyze")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={handleAnalyzeDebt}
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Analyze Debt"}
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div style={styles.resultsGrid}>
            <div
              style={styles.resultCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(124, 58, 237, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37, 99, 235, 0.1)";
              }}
            >
              <span style={styles.resultIcon}>⚠️</span>
              <p style={styles.resultLabel}>Risk Level</p>
              <p style={styles.resultValue}>
                {result.risk_level ?? "N/A"}
              </p>
            </div>

            <div
              style={styles.resultCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(124, 58, 237, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37, 99, 235, 0.1)";
              }}
            >
              <span style={styles.resultIcon}>📉</span>
              <p style={styles.resultLabel}>Debt Ratio</p>
              <p style={styles.resultValue}>
                {result.debt_ratio ?? "N/A"}
              </p>
            </div>

            <div
              style={styles.resultCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(124, 58, 237, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37, 99, 235, 0.1)";
              }}
            >
              <span style={styles.resultIcon}>💰</span>
              <p style={styles.resultLabel}>Disposable Income</p>
              <p style={styles.resultValue}>
                {result.disposable_income ?? "N/A"}
              </p>
            </div>

            <div
              style={{ ...styles.resultCard, ...styles.adviceCard }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(124, 58, 237, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37, 99, 235, 0.1)";
              }}
            >
              <span style={styles.resultIcon}>🤖</span>
              <p style={styles.resultLabel}>AI Advice</p>
              <p style={styles.resultValue}>
                {result.ai_advice ?? "No advice available"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}