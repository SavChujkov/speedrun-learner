from fastapi import APIRouter, HTTPException, status, Depends,Response
from core import db_worker
from sqlalchemy.orm import Session,joinedload
#часто используемый код для получения игры из БД, вынесли в зависимости
#from .dependencies import get_game_by_id
#import schemas
from . import crud
from . import schemas

router = APIRouter(tags=["Guides"])



@router.post("/guides_of_game",response_model=list[schemas.Guide])
def get_guide_by_game(game_id_in_body:schemas.GuideIDRequest, db: Session = Depends(db_worker.get_db)):
    db_guide = crud.get_guides_for_game(session=db, game_id=game_id_in_body.id)
    if db_guide is None:
        raise HTTPException(status_code=404, detail=f"Guides for id game {game_id_in_body.id} not found.")
    return db_guide


@router.get("/guides_all",response_model=list[schemas.Guide])
def get_all_guides(db:Session = Depends(db_worker.get_db)):
    db_all_guides = crud.get_all_guides(session=db)
    if db_all_guides is None:
        raise HTTPException(status_code=404, detail=f"Error querying all guides")
    return db_all_guides

@router.post("/add_guide")
def add_guide(guide: schemas.GuideCreate, db: Session = Depends(db_worker.get_db)):
    db_added_guide = crud.add_guide(session=db,guide_data_in=guide)
    return db_added_guide
