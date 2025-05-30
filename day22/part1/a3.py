from flask import Flask,jsonify,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)




@app.route('/items',methods=['POST'])
def items():
    data = request.get_json()
    item = data.get('items',[])
    return jsonify({'recieved_count':len(items)})


if __name__ == '__main__':
    app.run(debug=True)