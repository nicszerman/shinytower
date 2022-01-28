from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/", StaticFiles(directory="web", html=True))
# html=True automatically loads index.html

# @app.get("/test")
# async def index():
#     return {"message": "Hello Shiny Tower test root"}

# @app.get("/")
# async def root():
#     return {"message": "Hello Shiny Tower"}


