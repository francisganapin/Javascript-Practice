from flask import Flask,jsonify,request

app = Flask(__name__)

books = [
    {"id": 1, "title": "Concept of Physics", "author": "H.C Verma"},
    {"id": 2, "title": "Gunahon ka Devta", "author": "Dharamvir Bharti"},
    {"id": 3, "title": "Problems in General Physsics", "author": "I.E Irodov"}
]


@app.route('/books',methods=['GET'])
def get_books():
    return jsonify(books)


if __name__ == '__main__':
    app.run(debug=True)