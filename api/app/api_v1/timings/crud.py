
from sqlalchemy.orm import Session,joinedload
from sqlalchemy import select

from . import schemas

from core import Timings as Timings_DB_Model

#DDL operations (SELECT operations)

def get_all_timings(session:Session):
    query = select(Timings_DB_Model).order_by(Timings_DB_Model.id)
    result = session.execute(query)

    #parsed sqlalchemy object to list
    timings_db_result = result.scalars().all()
    return list(timings_db_result)

def get_timings_for_guide(session:Session,guide_id:int):
    #get guides for game id
    #select * from timings join guides on timings.id==guides.fk_timing_id where guide.id==guide_id
    #джойним гайды с таймингами, выбираем тайминги только для интересующего гайда
    query = (
        select(Timings_DB_Model)
        .join(Timings_DB_Model.guides)
        .order_by(Timings_DB_Model.id)
        .where(Timings_DB_Model.fk_guide_id==guide_id)
    )
    result = session.execute(query)
    timings_db_result = result.scalars().all()
    return list(timings_db_result)
   

#DML operations (modify table)

def add_timing(session:Session, timing_data_in: schemas.TimingCreate) -> schemas.TimingCreate:
    timing = Timings_DB_Model(**timing_data_in.model_dump())
    session.add(timing)
    session.commit()
    return timing

def del_timing():
    pass


def modify_timing():
    pass