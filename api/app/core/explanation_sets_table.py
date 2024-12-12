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


class Guides(Base):
    __tablename__ = "guides_table"
    id: Mapped[int] = mapped_column(primary_key=True)
    set_name: Mapped[str]
    description: Mapped[str]
    creator: Mapped[str]
    url_to_pb: Mapped[str]


    #relationship one to many for games table
    fk_game_id = mapped_column(ForeignKey("games_table.id"))
    games: Mapped["Games"] = relationship(back_populates="guides")

    #relationship one to many for timings table
    timings: Mapped[List["Timings"]]= relationship(back_populates="guides")

    def __repr__(self) -> str:
        return f"Guides(id={self.id!r}, set_name={self.set_name!r}, linked_game={self.fk_game_id!r})"
    