from flask import Flask,request,jsonify

app = Flask(__name__)


quiz = {
    "question":"what is the capital of France",
    "options":{
        "a":"Berlin",
        "b":"Madrid",
        "c":"Paris",
        "d":"Rome"
    },
    "answer":"c"
}

@app.route("/question",methods=['GET'])
def get_question():
    return jsonify({
        "question":quiz["question"],
        "option":quiz['options']
    })

@app.route('/answer',methods=["POST"])
def check_answer():
    data = request.get_json()
    user_answer = data.get('answer')

    if not user_answer:
        return jsonify({"message":"Please provide an answer (a,b,c, or d.)"}),

    if user_answer.lower() == quiz['answer']:
        return jsonify({'result':"Correct!"})
    else:
        return jsonify({'result':"wrong!","correct_answer":quiz['answer']})
    
if __name__ == "__main__":
    app.run(debug=True,port=3000)