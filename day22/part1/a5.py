from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)






@app.route('/hello',methods=['GET'])
def hello():
    return jsonify({'message':'Hello from Flask'})

@app.route('/greet',methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name','Guest')
    return jsonify({"greeting": f"Hello, {name}!"})

@app.route('/items',methods=['POST'])
def items():
    data = request.get_json()
    items = data.get('items',[])
    return jsonify({'count':len(items),'items':items})


if __name__ == '__main__':
    app.run(debug=True)