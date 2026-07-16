import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hoverRegister, setHoverRegister] = useState(false);
  const [focusField, setFocusField] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(135deg, #EFF3FF 0%, #F5F3FF 50%, #EDE9FE 100%)",
      fontFamily:
        "'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: "20px",
      boxSizing: "border-box",
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
        "radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0) 70%)",
      filter: "blur(10px)",
    },
    bgBlob2: {
      position: "absolute",
      bottom: "-150px",
      right: "-150px",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(124,58,237,0) 70%)",
      filter: "blur(10px)",
    },
    card: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "460px",
      background: "rgba(255, 255, 255, 0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "24px",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      boxShadow:
        "0 8px 32px rgba(37, 99, 235, 0.15), 0 4px 16px rgba(124, 58, 237, 0.1)",
      padding: "40px 36px",
      boxSizing: "border-box",
    },
    logoWrap: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "18px",
    },
    logoCircle: {
      width: "60px",
      height: "60px",
      borderRadius: "16px",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 20px rgba(124, 58, 237, 0.35)",
    },
    logoText: {
      color: "#fff",
      fontSize: "26px",
      fontWeight: "700",
    },
    title: {
      fontSize: "22px",
      fontWeight: "800",
      textAlign: "center",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      margin: "0 0 8px 0",
      lineHeight: "1.3",
    },
    subtitle: {
      fontSize: "13.5px",
      color: "#6B7280",
      textAlign: "center",
      margin: "0 0 30px 0",
      lineHeight: "1.5",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
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
    inputWrap: {
      position: "relative",
      display: "flex",
      alignItems: "center",
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
    toggleIcon: {
      position: "absolute",
      right: "12px",
      cursor: "pointer",
      fontSize: "13px",
      color: "#7C3AED",
      fontWeight: "600",
      userSelect: "none",
    },
    button: {
      marginTop: "8px",
      width: "100%",
      padding: "13px",
      borderRadius: "12px",
      border: "none",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
      boxShadow: "0 6px 18px rgba(37, 99, 235, 0.35)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    loginText: {
      marginTop: "22px",
      textAlign: "center",
      fontSize: "13.5px",
      color: "#6B7280",
    },
    loginLink: {
      color: "#7C3AED",
      fontWeight: "700",
      textDecoration: "none",
      marginLeft: "4px",
    },
  };

  const getInputStyle = (fieldName, hasToggle) => ({
    ...styles.inputBase,
    border:
      focusField === fieldName
        ? "1.5px solid #7C3AED"
        : "1.5px solid #E5E7EB",
    boxShadow:
      focusField === fieldName
        ? "0 0 0 4px rgba(124, 58, 237, 0.12)"
        : "none",
    paddingRight: hasToggle ? "48px" : "14px",
  });

  return (
    <div style={styles.page}>
      <div style={styles.bgBlob1}></div>
      <div style={styles.bgBlob2}></div>

      <div style={styles.card}>
        <div style={styles.logoWrap}>
          <div style={styles.logoCircle}>
            <span style={styles.logoText}>AI</span>
          </div>
        </div>

        <h1 style={styles.title}>
          AI Powered Debt Relief &amp; Financial Recovery Platform
        </h1>
        <p style={styles.subtitle}>
          Create your account to start your recovery journey
        </p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onFocus={() => setFocusField("fullName")}
              onBlur={() => setFocusField("")}
              style={getInputStyle("fullName", false)}
              required
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusField("email")}
              onBlur={() => setFocusField("")}
              style={getInputStyle("email", false)}
              required
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 234 567 8900"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => setFocusField("phone")}
              onBlur={() => setFocusField("")}
              style={getInputStyle("phone", false)}
              required
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <div style={styles.inputWrap}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusField("password")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("password", true)}
                required
              />
              <span
                style={styles.toggleIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div style={styles.inputWrap}>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setFocusField("confirmPassword")}
                onBlur={() => setFocusField("")}
                style={getInputStyle("confirmPassword", true)}
                required
              />
              <span
                style={styles.toggleIcon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            style={{
              ...styles.button,
              transform: hoverRegister ? "translateY(-2px)" : "translateY(0)",
              boxShadow: hoverRegister
                ? "0 10px 24px rgba(124, 58, 237, 0.45)"
                : "0 6px 18px rgba(37, 99, 235, 0.35)",
            }}
            onMouseEnter={() => setHoverRegister(true)}
            onMouseLeave={() => setHoverRegister(false)}
          >
            Register
          </button>
        </form>

        <p style={styles.loginText}>
          Already have an account?
          <Link to="/" style={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}