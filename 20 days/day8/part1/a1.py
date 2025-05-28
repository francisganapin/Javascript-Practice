from flask import Flask,jsonify

app = Flask(__name__)

@app.route('/api/user/')
def get_user():
    user = [
            {'id':1,'username':'sweety'},
            {'id':2,'username':'pallavi'}
            ]
    return jsonify({'users':user})

if __name__ == '__main__':
    app.run()