from pydantic import BaseModel,Field

class GameBase(BaseModel):
    game_name: str
    game_alias: str
    description: str

class GameCreate(GameBase):
    pass

class Game(GameBase):
    id: int
    #guides: list[Guide]= []
    #class Config:
    #    orm_mode = True

