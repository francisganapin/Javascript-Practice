from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=['*'],
    allow_headers=["*"],
)

class UserInput(BaseModel):
    name:str
    age:int

@app.post('/submit')
def recieve_data(data:UserInput):
    return {'message':f'Recieve {data.name}, age {data.age}'}
