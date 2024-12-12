from sqlalchemy.orm import Session,joinedload
from sqlalchemy import select

from . import schemas
from core import Games as Games_DB_Model

#DDL operations (SELECT operations)
def get_all_games(session: Session):
    query = select(Games_DB_Model).order_by(Games_DB_Model.id)
    result = session.execute(query)

    #parsed sqlalchemy object to list
    games_db_result = result.scalars().all()
    return list(games_db_result)

def get_game(session: Session,game_id:int):
    #get game by id
    
    #old way of query through session, use select now
    #return db.query(models.Games).filter(models.Games.id == game_id).first()

    #было
    #query = select(Games_DB_Model).where(Games_DB_Model.id ==game_id)
    #result = session.execute(query)
    #стало
    result = session.get(Games_DB_Model, game_id)
    
    #game = result.scalar_one()
    return result


#DML OPERATIONS
def add_game(session: Session, game_data_in: schemas.GameCreate) -> schemas.Game:
    game = Games_DB_Model(**game_data_in.model_dump())
    session.add(game)
    session.commit()
    return game


def del_game():
    pass


def modify_game():
    pass