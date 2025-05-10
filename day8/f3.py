from flask import Flask,jsonify

app = Flask(__name__)

@app.route('/api/user/')
def get_user():
    user =[{'id':1,'username':'Alice'},{'id':2,'username':'bob'}]
    return jsonify(user),200

if __name__ == '__main__':
    app.run()