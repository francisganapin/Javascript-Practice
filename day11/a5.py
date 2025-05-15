from flask import Flask,jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017/')
db = client['gym_system_db']
collection = db['member_list']


@app.route('/members',methods=['GET'])
def get_members():
    members = list(collection.find({},{'_id':0}))
    return jsonify(members)

if __name__ == '__main__':
    app.run(debug=True)