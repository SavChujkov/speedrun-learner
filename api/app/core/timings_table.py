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
class Timings(Base):
    __tablename__ = "timings"
    id: Mapped[int] = mapped_column(primary_key=True)
    timing: Mapped[int]
    timing_name: Mapped[str]
    description: Mapped[str]
    difficulty_level: Mapped[str]
    severity_level: Mapped[str]
    url_to_skip: Mapped[str]

    #relationship for guides table
    fk_guide_id = mapped_column(ForeignKey("guides_table.id"))
    guides: Mapped["Guides"] = relationship("Guides",back_populates="timings")


    def __repr__(self) -> str:
        return f"Timings(id={self.id!r}, timing_name={self.timing_name!r}, timing_in_seconds={self.timing!r})"
    

