from pydantic import BaseModel

class UserCreate(BaseModel):
    full_name: str
    email: str
    phone: str
    monthly_income: int
    monthly_expenses: int
    total_debt: int


class DebtAnalysisRequest(BaseModel):
    monthly_income: int
    monthly_expenses: int
    total_debt: int