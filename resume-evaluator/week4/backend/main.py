from database import create_db

@app.on_event("startup")
def on_startup():
    create_db()