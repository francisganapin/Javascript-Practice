from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.db'
db = SQLAlchemy(app)


class Student(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100),nullable=False)
    grade = db.Column(db.String(10),nullable=False)

with app.app_context():
    db.create_all()


@app.route('/students',methods=['POST'])
def add_student():
    data = request.get_json()
    new_student = Student(name=data['name'],grade=data['grade'])
    db.session.add(new_student)
    db.session.commit()
    return jsonify({"message":'Student added'}), 201


@app.route('/students',methods=['GET'])
def get_students():
    students = Student.query.all()
    output = [{"id":s.id,"name":s.name,"grade":s.grade} for s in students]
    return jsonify(output)

@app.route('/students/<int:id>',methods=['GET'])
def get_student(id):
    students = Student.query.get_or_404(id)
    return jsonify({'id':students.id,'name':students.name,'grade':students.grade})

@app.route('/students/<int:id>',methods=['PUT'])
def update_student(id):
    data = request.get_json()
    student = Student.query.get_or_404(id)
    student.name = data.get('name',student.name)
    student.grade = data.get('grade',student.grade)
    db.session.commit()
    return jsonify({'message':'Student updated!'})

@app.route('/students/<int:id>',methods=['DELETE'])
def delete_student(id):
    student = Student.query.get_or_404(id)
    db.session.delete(student)
    db.session.commit()
    return jsonify({'message':'Student Deleted!'})

if __name__ == '__main__':
    app.run(debug=True)