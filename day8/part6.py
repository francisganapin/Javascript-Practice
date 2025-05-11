from flask import Flask,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/item')
def get_item():
    items = [
    {'item': 'Laptop', 'price': 1200},
    {'item': 'Phone', 'price': 800},
    {'item': 'Headphones', 'price': 150}
    ]
    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True)