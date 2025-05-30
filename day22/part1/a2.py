from flask import Flask,jsonify,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/hello',methods=['GET'])
def hello():
    return jsonify({'message':'Hello from Flask!'})

@app.route('/greet',methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name','Guest')
    return jsonify({'greeting':f'Hello,{name}!'})

if __name__ == "__main__":
    app.run(debug=True)