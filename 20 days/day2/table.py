from flask import Flask,render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy
from flask import Flask,jsonify

app = Flask(__name__)

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Avoids a warning

db = SQLAlchemy(app)

@app.route('/user')
def get_user():
    print('Using jsonigy')
    users = [{'id':1,'username':'sweety'},
             {'id':2,'username':'pallavi'}
             ]
    return jsonify({'users':users})





if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
