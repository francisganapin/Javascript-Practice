from flask import Flask

app = Flask(__name__)

@app.route('/multiply/<int:a>/<int:b>')
def multiply(a,b):
    return f'The result of a {a} * {b} is {a * b}'


if __name__ == '__main__':
    app.run(debug=True)