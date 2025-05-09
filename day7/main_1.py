from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/items')
def read_items():
    return [
        {'id':1,'name':'Apple','price':10},
        {'id':2,'name':'Orange','price':17},
        {'id':3,'name':'Cherry','price':15},
    ]