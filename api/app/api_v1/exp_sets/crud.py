from sqlalchemy.orm import Session,joinedload
from sqlalchemy import select

from . import schemas
from core import Guides as Guides_DB_Model
from core import Games as Games_DB_Model
#DDL operations (SELECT operations)

def get_all_guides(session:Session):
    query = select(Guides_DB_Model).order_by(Guides_DB_Model.id)
    result = session.execute(query)

    #parsed sqlalchemy object to list
    guides_db_result = result.scalars().all()
    return list(guides_db_result)


def get_guides_for_game(session: Session,game_id:int):
    #get guides for game id
    #select * from guides join games on games.id==guides.fk_game_id where games.id==game_id
    query = (
        select(Guides_DB_Model)
        .join(Guides_DB_Model.games)
        .order_by(Guides_DB_Model.id)
        .where(Guides_DB_Model.fk_game_id==game_id)
    )
    result = session.execute(query)
    guides_db_result = result.scalars().all()
    return list(guides_db_result)
   


#DML operations

def add_guide(session: Session, guide_data_in: schemas.GuideCreate) -> schemas.GuideCreate:
    guide = Guides_DB_Model(**guide_data_in.model_dump())
    session.add(guide)
    session.commit()
    return guide


def del_guide():
    pass


def modify_guide():
    pass
