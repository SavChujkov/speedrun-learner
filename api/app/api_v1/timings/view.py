from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session,joinedload
#часто используемый код для получения игры из БД, вынесли в зависимости
from core import db_worker
from . import schemas
from . import crud


router = APIRouter(tags=["Timings"])


@router.get("/timings_all", response_model=list[schemas.Timing])
def get_all_timings(db:Session = Depends(db_worker.get_db)):
    db_all_timings = crud.get_all_timings(session=db)
    if db_all_timings is None:
        raise HTTPException(status_code=404, detail=f"Error querying all timings")
    return db_all_timings


#@router.options("/timings_of_guide")
#async def options_handler():
#    return {"message": "OK"}

@router.post("/timings_of_guide",response_model=list[schemas.Timing])
def get_timings_by_guide_id(guide_in_body:schemas.TimingIDRequest,db:Session = Depends(db_worker.get_db)):
    db_timings = crud.get_timings_for_guide(session=db, guide_id=guide_in_body.id)
    if db_timings is None:
        raise HTTPException(status_code=404, detail=f"Timings for guide with id {guide_in_body.id} not found")
    return db_timings


@router.post("/add_timing")
def add_timing(timing: schemas.TimingCreate, db: Session = Depends(db_worker.get_db)):
    db_added_timing = crud.add_timing(session=db,timing_data_in=timing)
    return db_added_timing