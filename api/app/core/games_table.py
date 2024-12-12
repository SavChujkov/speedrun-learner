from typing import List
from typing import Optional
from sqlalchemy import ForeignKey
from sqlalchemy import String
#from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from .base import Base

class Games(Base):
    __tablename__ = "games_table"
    id: Mapped[int] = mapped_column(primary_key=True)
    game_name: Mapped[str] = mapped_column(String(50))
    game_alias: Mapped[str] = mapped_column(String(10))
    description: Mapped[str]

    #relation to guides
    #guides : Mapped[List["Guides"]] = relationship("Guides",back_populates="game")
    #guides = relationship("Guides",back_populates="game")
    guides: Mapped[List["Guides"]]= relationship(back_populates="games")

    def __repr__(self) -> str:
        return f"Game(id={self.id!r}, game_name={self.game_name!r}, game_alias={self.game_alias!r})"
