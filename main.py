from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import engine
from app.models import item, user
from app.api import items, users

# Create database tables
item.Base.metadata.create_all(bind=engine)
user.Base.metadata.create_all(bind=engine)

# Create FastAPI instance
app = FastAPI(
    title="FastAPI CRUD Demo",
    description="A simple CRUD API built with FastAPI",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(items.router, tags=["items"])
app.include_router(users.router, tags=["users"])

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to FastAPI CRUD Demo"}

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"} 