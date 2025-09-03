from flask import Flask,request,jsonify
import jwt
import datetime
from functools import wraps

app = Flask(__name__)

SECRET_KEY = 'mysecretkey'

user = {
    'id':1,
    "username":"admin",
    "password":"1234"
}


def token_required(f):
    @wraps(f)
    def decorated(*args,**kwargs):
        auth_header = request.headers.get('Authorization')

        if not auth_header:
            return jsonify({"message":"No token provided"}),403
        
        try:
            token = auth_header.split('')[1]
            data = jwt.decoded(token,SECRET_KEY,algorithms=['HS256'])
            request.user = data
        except(IndexError,jwt.ExpiredSignatureError,jwt.InvalidTokenError):
            return jsonify({"message":"invalid Token"}),403
        
        return f(*args,**kwargs)
    return decorated

@app.route('/login',methods=['POST'])
def login():
    data = request.get_json()

    if not data:
        return jsonify({'message':"No input provided"}),400
    
    username = data.get('username')
    password = data.get('password')
    password_2 = data.get('password_2')

    if username == user['username'] and password == user['password'] and password == password_2:
        token = jwt.encode(
            {
                "id":user['id'],
                'username':user['username'],
                'exp':datetime.datetime.utcnow() +datetime.timedelta(hours=1)
            },
            SECRET_KEY,
            algorithm='HS256'
        )
        return jsonify({"message":"Login successful","token":token})
    else:
        return jsonify({"message":"Invalid credentials"}),401
    
@app.route('/protected',methods=['GET'])
@token_required
def protected():
    return jsonify({"message":"Welcome to protected router!","user":request.user})


if __name__ == "__main__":
    app.run(debug=True,port=3000)