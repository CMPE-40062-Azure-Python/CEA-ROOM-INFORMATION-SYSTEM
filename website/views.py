from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("index.html")

@views.route('/student-rep')
def student_rep():
    return render_template("student-rep-login.html")

@views.route('/admin')
def admin():
    return render_template("admin-login.html")

@views.route('/site-map')
def site_map():
    return render_template("site-map.html")

@views.route('/use-cases')
def use_cases():
    return render_template("use-cases.html")
