from pydantic import BaseModel,Field


class TimingBase(BaseModel):
    timing: int
    timing_name: str
    description: str
    difficulty_level: str
    severity_level: str
    url_to_skip: str
    fk_guide_id:int

class TimingIDRequest(BaseModel):
    id: int

class TimingCreate(TimingBase):
    pass

class Timing(TimingBase):
    id: int

