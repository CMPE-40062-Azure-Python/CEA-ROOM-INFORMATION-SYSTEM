from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("index.html")

@views.route('/student-rep')
def student_rep():
    return render_template("student-rep/student-rep-login.html")

@views.route('/student-rep/register')
def student_rep_register():
    return render_template("student-rep/student-rep-register.html")

@views.route('/student-rep/home')
def student_rep_home():
    return render_template("student-rep/student-rep-home.html")

@views.route('/admin')
def admin():
    return render_template("admin/admin-login.html")

@views.route('/site-map')
def site_map():
    return render_template("site-map.html")

@views.route('/use-cases')
def use_cases():
    return render_template("use-cases.html")
