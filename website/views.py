from flask import Blueprint, render_template
import mysql.connector

views = Blueprint('views', __name__)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="cearis_db"
)

# Check if the connection is established
if db.is_connected():
    print("Connected to" + " " +db.database)
else:
    print("Not connected to" + " " + db.database)

mycursor = db.cursor()

@views.route('/')
def home():
    return render_template("index.html")

@views.route('/student-rep')
def student_rep():
    
    mycursor.execute("SELECT * from users")
    
    myresult = mycursor.fetchall()
    
    return render_template("student-rep/student-rep-login.html", data = myresult)

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
