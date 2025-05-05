from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/receive', methods=['POST'])
def receive_data():
    if request.is_json:
        data = request.get_json()
        print("Received data:", data)
        return jsonify({"message": "Data received", "data": data}), 200
    else:
        return jsonify({"error": "Invalid JSON"}), 400



if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
