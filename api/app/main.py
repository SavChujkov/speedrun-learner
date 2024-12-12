#1-ый модуль куда стоит заглянуть
#тут происходит запуск приложения

from app import app
import uvicorn


#это входной модуль приложения
#в uvicorn указываем модуль с объектом app, который является инстансом приложения

if __name__ == "__main__":
    uvicorn.run("main:app",reload=True)