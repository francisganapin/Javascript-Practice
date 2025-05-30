from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

items_db = {"apple":5,"banana":3,"grape":8}


@app.route('/items/<item_name>',methods=['PUT'])
def update_item(item_name):
    data = request.get_json()
    quantity = data.get('quantity')
    if item_name in items_db:
        items_db[item_name] = quantity
        return jsonify({item_name:quantity})
    else:
        return jsonify({'error':'item not found'}),404
    

@app.route('/items/<item_name>',methods=['DELETE'])
def delete_item(item_name):
    if item_name in items_db:
        del items_db[item_name]
        return jsonify({'message':f"{item_name} Delete"})
    else:
        return jsonify({'error':'Item not found'}),404

if __name__ == '__main__':
    app.run(debug=True)