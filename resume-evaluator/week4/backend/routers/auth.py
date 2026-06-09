from fastapi import APIRouter, Depends, HTTPException, status
from schemas import RegisterRequest, LoginRequest, UserResponse, TokenResponse, EvaluateRequest, EvaluateResponse
from store import users
from auth_utils import hash_password, verify_password, create_access_token, get_current_user

router = APIRouter()

@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register(request: RegisterRequest):
    if request.email in users:
        raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="Email already registered"
    )
    user = UserResponse(email=request.email, role="user")
    users[request.email] = {
    "email": request.email,
    "hashed_password": hash_password(request.password),
    "role": "user"
    }
    return user

@router.post("/login", response_model=TokenResponse)
def login(request: LoginRequest):
    user = users.get(request.email)
    if not user or not verify_password(request.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    return TokenResponse(access_token=create_access_token(request.email))


@router.get("/me")
def get_me(current_user: str = Depends(get_current_user)):
    return {"email": current_user}