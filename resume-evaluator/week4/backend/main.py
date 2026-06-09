from fastapi import FastAPI
from routers import auth, evaluate, admin
from fastapi.middleware.cors import CORSMiddleware
from database import create_db
from models import User

app = FastAPI(title="Resume Evaluator API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(evaluate.router, prefix="/evaluate", tags=["evaluate"])
app.include_router(admin.router, prefix="/admin", tags=["admin"])


@app.on_event("startup")
def on_startup():
    create_db()
    
@app.get("/")
def root():
    return {"message": "Resume Evaluator API is running"}

@app.get("/ping")
def ping():
    return {"status": "ok"}

@app.get("/hello/{name}")
def hello(name: str):
    return {"message": f"Hello, {name}!"}
