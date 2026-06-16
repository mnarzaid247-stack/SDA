from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from database import get_session
from models import User
from schemas import UserResponse, AdminUpdateRole
from auth_utils import require_admin

router = APIRouter()
@router.get("/users", response_model=list[UserResponse])
def get_users(
    admin: User = Depends(require_admin), session: Session = Depends(get_session)):
    users = session.exec(select(User)).all()
    return users

@router.patch("/users/{email}/role", response_model=UserResponse)
def update_user_role(email: str, request: AdminUpdateRole, admin: User = Depends(require_admin), 
                     session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.email == email)).first()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    user.role = request.role
    session.add(user)
    session.commit()
    session.refresh(user)

    return UserResponse(email=user.email, role=user.role)


@router.delete("/users/{email}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(email: str, admin: User = Depends(require_admin), session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.email == email)).first()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    session.delete(user)
    session.commit()
    return None