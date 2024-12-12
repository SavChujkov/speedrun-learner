from pydantic import BaseModel,Field

class GuideBase(BaseModel):
    set_name: str
    description: str
    creator: str
    url_to_pb: str
    fk_game_id: int

class GuideCreate(GuideBase):
    pass

class GuideIDRequest(BaseModel):
    id: int

class Guide(GuideBase):
    id: int
    #timings: list[Timing]= []
    #orm mode нужно чтобы в схему попали связанные 
    #class Config:
    #    orm_mode = True

