from sqlalchemy.orm import Session,joinedload
from fastapi import APIRouter, HTTPException, status, Depends
from core import db_worker
from . import crud
from . import schemas

router = APIRouter(tags=["Games"])


@router.get("/games_all",response_model=list[schemas.Game])
def get_all_games(db: Session = Depends(db_worker.get_db)):
    db_all_games = crud.get_all_games(session=db)
    if db_all_games is None:
        raise HTTPException(status_code=404, detail=f"Error querying all games")
    print(db_all_games,"all games return value")
    return db_all_games

@router.get("/game_by_id",response_model=schemas.Game)
def get_game(game_id:int, db: Session = Depends(db_worker.get_db)):
    db_game = crud.get_game(session=db, game_id=game_id)
    if db_game is None:
        raise HTTPException(status_code=404, detail=f"Game with id {game_id} not found.")
    return db_game




@router.post("/add_game",response_model=schemas.GameCreate)
def add_game(game: schemas.GameCreate, db: Session = Depends(db_worker.get_db)):
    db_added_game = crud.add_game(game_data_in=game,session=db)
    print(db_added_game,"added game")
    return db_added_game




