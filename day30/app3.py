from flask import Flask,request,jsonify

app = Flask(__name__)

quiz = {
    "question":"What is the capital of France",
    "options":{
        "a":"Berlin",
        "b":"Madrid",
        "c":"Paris",
        "d":"Rome"
    },
    "answer":"c",
    "facts":"Capital of France was Paris"
}

@app.route('/question',methods=['GET'])
def get_question():
    return jsonify({
        'question':quiz['question'],
        'option':quiz['option']
    })

@app.route('/answer',methods=['POST'])
def check_answer():
    data = request.get_json()
    user_answer = data.get('answer')

    if not user_answer:
        return jsonify({"message":"Please provide an anser(a,b,c or d.)"}),

    if user_answer.lower() == quiz['answer']:
        return jsonify({'result':'Correct!'})
    else:
        return jsonify({'correct_answer':quiz['answer'],'facts':quiz['facts']})
    

if __name__ == '__main__':
    app.run(debug=True,port=3000)