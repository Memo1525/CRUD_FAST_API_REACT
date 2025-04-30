from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from passlib.context import CryptContext

from app.database.database import get_db
from app.models.manufacters import Manufacters
from app.schemas.manufacters import ManufactersCreate, ManufactersUpdate, ManufactersDelete, Manufacters

router = APIRouter()

@router.post("/manufacters/", response_model=Manufacters)
def create_manufacters(manufacters: ManufactersCreate, db: Session = Depends(get_db)):
    db_manufacters = Manufacters(**manufacters.model_dump() )
    db.add(db_manufacters)
    db.commit()
    db.refresh(db.manufacters)
    return db_manufacters

@router.get("/manufacters/", response_model=List[Manufacters])
def get_manufacters(db: Session = Depends(get_db)):
    manufacters = db.query(Manufacters).all()
    return manufacters

@router.get("/manufacters/{manufacters_id}", response_model=Manufacters)
def get_manufacters_by_id(manufacters_id: int, db: Session = Depends(get_db)):
    
    