from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from .database import Base, engine, SessionLocal
from .models import User
from .schemas import UserCreate, DebtAnalysisRequest

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Powered Debt Relief & Financial Recovery Platform"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)

# Database Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {
        "message": "Welcome to AI Powered Debt Relief & Financial Recovery Platform"
    }


@app.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    new_user = User(
        full_name=user.full_name,
        email=user.email,
        phone=user.phone,
        monthly_income=user.monthly_income,
        monthly_expenses=user.monthly_expenses,
        total_debt=user.total_debt
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User Registered Successfully",
        "user_id": new_user.id
    }
@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users
@app.post("/analyze")
def analyze_debt(data: DebtAnalysisRequest):

    disposable_income = data.monthly_income - data.monthly_expenses
    debt_ratio = (data.total_debt / data.monthly_income) * 100

    if debt_ratio < 30:
        risk = "Low"
        advice = "Your debt is manageable. Continue saving regularly."
    elif debt_ratio < 60:
        risk = "Medium"
        advice = "Reduce unnecessary expenses and pay high-interest loans first."
    else:
        risk = "High"
        advice = "Seek professional debt counseling and create a strict repayment plan."

    return {
        "risk_level": risk,
        "debt_ratio": round(debt_ratio, 2),
        "disposable_income": disposable_income,
        "ai_advice": advice
    }