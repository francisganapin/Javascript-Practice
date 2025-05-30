from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///student1.db'
db = SQLAlchemy(app)

enrollments = db.Table('enrollments',
                       db.Column('student_id',db.Integer,db.ForeignKey('student.id')),
                       db.Column('course_id',db.Integer,db.ForeignKey('course.id'))
                       )

class Student(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100),nullable=False)
    course = db.relationship('Course',secondary=enrollments,backref='students')

class Course(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    title = db.Column(db.String(100),nullable=False)

with app.app_context():
    db.create_all()


@app.route('/students',methods=['POST'])
def add_student():
    data = request.get_json()
    student = Student(name=data['name'])
    db.session.add(student)
    db.session.commit()
    return jsonify({"message":"Stdeunt added"}),201

@app.route('/course',methods=['POST'])
def add_course():
    data = request.get_json()
    course = Course(title=data['title'])
    db.session.add(course)
    db.session.commit()
    return jsonify({"message":'Course added'}),201

@app.route('/enroll',methods=['POST'])
def enroll_student():
    data = request.get_json()
    student = Student.query.get(data['student_id'])
    course = Course.query.get(data['course_id'])

    if not student or not course:
        return jsonify({'error':'Student or Course not found'}),404
    
    student.courses.append(course)
    db.session.commit()
    return jsonify({"message":f'Student {student.name} enrooled in {course.title}'})

@app.route('/students/<int:id>/course',methods=['GET'])
def student_courses(id):
    student = Student.query.get_or_404(id)
    course_list = [c.title for c in student.course]
    return jsonify({"name":student.name,"course":course_list})


if __name__ == '__main__':
    app.run(debug=True)