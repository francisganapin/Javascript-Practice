from flask import Flask,request,jsonify

app = Flask(__name__)


@app.route('/low',methods=['POST'])
def check_quantity():
    data = request.get_json()
    quantity = data.get('quantity')

    if quantity is None:
        return jsonify({'error':'Missing quantity'}),400
    
    status = 'ok' if quantity > 200 else 'low'
    return jsonify({'status':status})

app.run()