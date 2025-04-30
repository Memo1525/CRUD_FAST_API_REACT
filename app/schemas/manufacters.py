from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class ManufactersBase(BaseModel):
    name: str
    email: EmailStr
    phone: str
    country: str

class ManufactersCreate(ManufactersBase):
     pass

class ManufactersUpdate(ManufactersBase):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    country: Optional[str] = None

class ManufactersDelete(BaseModel):
    id: int

class Manufacters(ManufactersBase):
    id: int

    class Config:
        from_attributes = True
