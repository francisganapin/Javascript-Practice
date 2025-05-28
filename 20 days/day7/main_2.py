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

@app.get('/books')
def get_books():
    return[
        {'id':1,'title':'python 101','author':'john'},
        {'id':2,'title':'Learn FastApi','author':'jane'},
    ]