from flask import Flask,jsonify,request

app = Flask(__name__)

cats = [
    {'id':1,'name':'Whiskers','age':2,'breed':'Siamese'},
    {'id':2,'name':'Mitten','age':4,'breed':'Maine Coon'}
]

@app.route('/cats',methods=['GET'])
def get_cats():
    return jsonify(cats),200

@app.route('/cats/<int:cat_id>',methods=['GET'])
def get_cat(cat_id):
    cat = next((c for c in cats if c['id'] == cat_id),None)

    if cat:
        return jsonify(cat),200
    return jsonify({'error':'Cat not found'}),404

if __name__ == '__main__':
    app.run()