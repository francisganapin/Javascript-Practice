from flask import Flask,jsonify,request

app = Flask(__name__)

user = []

@app.route('/users',methods=['GET'])
def get_users():