from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
#from test_models import Base
from core import Base
from core import db_worker 
from contextlib import asynccontextmanager
from api_v1 import router as router_api_v1
from fastapi.middleware.cors import CORSMiddleware
#from core.config import env_settings

#Base.metadata.create_all(bind=engine)

@asynccontextmanager
async def my_lifespan(app: FastAPI):
    await db_worker.create_db(Base)
    yield

app = FastAPI( lifespan=my_lifespan)


#добавляем мидлвейр временно тут,потом сделаю красиво
#"http://localhost:8000","http://localhost:3000",
origins=["http://api:8000"]
app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_methods=["GET", "POST", "OPTIONS"],
                   allow_headers=["*"],  # Разрешённые заголовки
                   )

app.include_router(router_api_v1,prefix="/api")



