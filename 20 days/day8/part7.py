from flask import Flask,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

books = [
    {'title': 'To Kill a Mockingbird', 'author': 'Harper Lee'},
    {'title': '1984', 'author': 'George Orwell'},
    {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald'}
]


@app.route('/api/book/list')
def get_users():
    return jsonify(books)


if __name__ == '__main__':
    app.run(debug=True)