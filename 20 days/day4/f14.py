from flask import Flask, jsonify

app = Flask(__name__)

data = {
    'employees':[
        {'firstName':'John','lastName':'Doe'},
        {'firstName':'Anna','lastName':'Smith'},
        {'firstName':'Peter','lastName':'Jones'}
    ]
}


@app.route('/employee/<int:index>')
def get_employee(index):
    if 0 <= index  < len(data['employees']):
        return jsonify(data['employees'][index])
    
    return jsonify({'error':'Employee not found'}),404

if __name__ == '__main__':
    app.run(debug=True)