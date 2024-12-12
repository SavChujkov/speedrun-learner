from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os


#for vscode 
#SQLALCHEMY_DATABASE_URL = "sqlite:///./sql-test-package/app/core/db_for_test/sql_app.db"

#for container
SQLALCHEMY_DATABASE_URL = "sqlite:///./core/db_for_test/sql_app.db"

print(os.getcwd(), "THIS IS CURR DIR")

class DatabaseWorker:
    def __init__(self,echo:bool = False):
        
        self.engine = create_engine(SQLALCHEMY_DATABASE_URL, 
                                    connect_args={"check_same_thread": False})
        self.SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)

    async def create_db(self,base_model):
        base_model.metadata.create_all(bind=self.engine)
        

    def get_db(self):
        db = self.SessionLocal()
        try:
            yield db
        finally:
            db.close()

db_worker = DatabaseWorker()