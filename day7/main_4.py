from flask import Flask,render_template,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process',methods=['POST'])
def process():
    data = request.get_json()
    name = data.get('name','Guest')
    return jsonify({'message':f"Hello,{name}!"})

if __name__ == '__main__':
    app.run(debug=True)