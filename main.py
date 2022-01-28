from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/", StaticFiles(directory="web", html=True))
# html=True automatically loads index.html

@app.get("/api")
async def api_root():
    return {"message": "This is Shiny Tower's API :)"}

# @app.get("/")
# async def root():
#     return {"message": "Hello Shiny Tower"}


