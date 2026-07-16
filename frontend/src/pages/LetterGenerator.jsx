import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LetterGenerator() {
  const navigate = useNavigate();
  const letterRef = useRef(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [bankName, setBankName] = useState("");
  const [loanType, setLoanType] = useState("Personal Loan");
  const [outstandingAmount, setOutstandingAmount] = useState("");
  const [hardshipReason, setHardshipReason] = useState("");
  const [requestedRelief, setRequestedRelief] = useState("EMI Reduction");

  const [focusField, setFocusField] = useState("");
  const [hoverBtn, setHoverBtn] = useState("");
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleGenerateLetter = () => {
    const letter = `Date: ${today}

To,
The Manager,
${bankName || "[Bank Name]"}

Subject: Request for ${requestedRelief} on ${loanType}

Dear Sir/Madam,

I, ${fullName || "[Full Name]"}, holder of a ${loanType} with an outstanding amount of ${
      outstandingAmount ? "$" + outstandingAmount : "[Outstanding Amount]"
    }, am writing to formally request ${requestedRelief.toLowerCase()} on my account.

Due to recent circumstances, I have experienced significant financial hardship. ${
      hardshipReason ||
      "[Please describe your financial hardship in the form above]"
    }

This situation has made it difficult for me to continue meeting my repayment obligations under the current terms. I have always valued my relationship with ${
      bankName || "your institution"
    } and remain committed to resolving this debt responsibly.

I kindly request that you consider my application for ${requestedRelief.toLowerCase()} so that I may continue to meet my financial obligations without further hardship. I am open to discussing a revised repayment plan that works for both parties.

I can be reached at ${email || "[Email Address]"} for any further documentation or discussion regarding this matter. Thank you for your understanding and support during this difficult time.

Sincerely,
${fullName || "[Full Name]"}`;

    setGeneratedLetter(letter);
  };

  const handleCopyLetter = () => {
    if (!generatedLetter) return;
    navigator.clipboard.writeText(generatedLetter).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleDownloadLetter = () => {
    if (!generatedLetter) return;
    const blob = new Blob([generatedLetter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Debt_Negotiation_Letter.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
      maxWidth: "950px",
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
      fontSize: "23px",
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
    fullWidth: {
      gridColumn: "1 / -1",
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
      fontFamily: "inherit",
    },
    textarea: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "12px",
      fontSize: "14px",
      outline: "none",
      boxSizing: "border-box",
      background: "rgba(255,255,255,0.8)",
      transition: "all 0.25s ease",
      fontFamily: "inherit",
      resize: "vertical",
      minHeight: "100px",
    },
    select: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "12px",
      fontSize: "14px",
      outline: "none",
      boxSizing: "border-box",
      background: "rgba(255,255,255,0.8)",
      transition: "all 0.25s ease",
      cursor: "pointer",
      fontFamily: "inherit",
    },
    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginTop: "24px",
    },
    primaryButton: {
      flex: "1",
      minWidth: "200px",
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
      minWidth: "160px",
      padding: "13px",
      borderRadius: "12px",
      border: "1.5px solid #2563EB",
      color: "#2563EB",
      background: "rgba(255,255,255,0.7)",
      fontSize: "14px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },
    previewHeaderRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
      flexWrap: "wrap",
      gap: "10px",
    },
    previewTitle: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#1F2937",
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    copyBadge: {
      fontSize: "12px",
      fontWeight: "700",
      color: "#16A34A",
      background: "rgba(22, 163, 74, 0.1)",
      padding: "5px 12px",
      borderRadius: "8px",
    },
    letterPaper: {
      background: "rgba(255,255,255,0.85)",
      borderRadius: "16px",
      border: "1px solid rgba(0,0,0,0.06)",
      padding: "30px",
      fontSize: "14px",
      lineHeight: "1.8",
      color: "#1F2937",
      whiteSpace: "pre-wrap",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.02)",
      minHeight: "200px",
    },
    placeholderText: {
      color: "#9CA3AF",
      fontStyle: "italic",
      fontFamily: "inherit",
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

  const getTextareaStyle = (fieldName) => ({
    ...styles.textarea,
    border:
      focusField === fieldName
        ? "1.5px solid #7C3AED"
        : "1.5px solid #E5E7EB",
    boxShadow:
      focusField === fieldName
        ? "0 0 0 4px rgba(124, 58, 237, 0.12)"
        : "none",
  });

  const getSelectStyle = (fieldName) => ({
    ...styles.select,
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
            <div style={styles.logoCircle}>🤖</div>
            <div>
              <h1 style={styles.title}>AI Debt Negotiation Letter Generator</h1>
              <p style={styles.subtitle}>
                Generate a professional letter to negotiate with your bank
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
              <label style={styles.label}>Bank Name</label>
              <input
                type="text"
                placeholder="XYZ Bank"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                onFocus={() => setFocusField("bankName")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("bankName")}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Loan Type</label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                onFocus={() => setFocusField("loanType")}
                onBlur={() => setFocusField("")}
                style={getSelectStyle("loanType")}
              >
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Auto Loan</option>
                <option>Credit Card Debt</option>
                <option>Business Loan</option>
                <option>Student Loan</option>
              </select>
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Outstanding Amount</label>
              <input
                type="number"
                placeholder="12000"
                value={outstandingAmount}
                onChange={(e) => setOutstandingAmount(e.target.value)}
                onFocus={() => setFocusField("outstandingAmount")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("outstandingAmount")}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Requested Relief</label>
              <select
                value={requestedRelief}
                onChange={(e) => setRequestedRelief(e.target.value)}
                onFocus={() => setFocusField("requestedRelief")}
                onBlur={() => setFocusField("")}
                style={getSelectStyle("requestedRelief")}
              >
                <option>EMI Reduction</option>
                <option>Loan Restructuring</option>
                <option>Settlement</option>
                <option>Payment Extension</option>
              </select>
            </div>

            <div style={{ ...styles.fieldGroup, ...styles.fullWidth }}>
              <label style={styles.label}>Reason for Financial Hardship</label>
              <textarea
                placeholder="Describe your financial hardship (e.g., job loss, medical emergency, reduced income)..."
                value={hardshipReason}
                onChange={(e) => setHardshipReason(e.target.value)}
                onFocus={() => setFocusField("hardshipReason")}
                onBlur={() => setFocusField("")}
                style={getTextareaStyle("hardshipReason")}
              />
            </div>
          </div>

          <div style={styles.buttonRow}>
            <button
              style={{
                ...styles.primaryButton,
                transform:
                  hoverBtn === "generate"
                    ? "translateY(-2px)"
                    : "translateY(0)",
                boxShadow:
                  hoverBtn === "generate"
                    ? "0 10px 24px rgba(124, 58, 237, 0.45)"
                    : "0 6px 18px rgba(37, 99, 235, 0.35)",
              }}
              onMouseEnter={() => setHoverBtn("generate")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={handleGenerateLetter}
            >
              ✨ Generate AI Letter
            </button>

            <button
              style={{
                ...styles.secondaryButton,
                transform:
                  hoverBtn === "download"
                    ? "translateY(-2px)"
                    : "translateY(0)",
                boxShadow:
                  hoverBtn === "download"
                    ? "0 10px 22px rgba(37, 99, 235, 0.2)"
                    : "none",
              }}
              onMouseEnter={() => setHoverBtn("download")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={handleDownloadLetter}
            >
              ⬇ Download Letter
            </button>

            <button
              style={{
                ...styles.secondaryButton,
                transform:
                  hoverBtn === "copy" ? "translateY(-2px)" : "translateY(0)",
                boxShadow:
                  hoverBtn === "copy"
                    ? "0 10px 22px rgba(37, 99, 235, 0.2)"
                    : "none",
              }}
              onMouseEnter={() => setHoverBtn("copy")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={handleCopyLetter}
            >
              📋 Copy Letter
            </button>
          </div>
        </div>

        {/* Preview Card */}
        <div style={styles.card} ref={letterRef}>
          <div style={styles.previewHeaderRow}>
            <h2 style={styles.previewTitle}>📄 Letter Preview</h2>
            {copySuccess && (
              <span style={styles.copyBadge}>Copied to clipboard!</span>
            )}
          </div>
          <div style={styles.letterPaper}>
            {generatedLetter || (
              <span style={styles.placeholderText}>
                Your AI-generated debt negotiation letter will appear here
                once you click "Generate AI Letter".
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}