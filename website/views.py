from flask import Blueprint, render_template, request, redirect, url_for
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

@views.route('/student-rep', methods=['GET', 'POST'])
def student_rep_login():
    if request.method == 'POST':
        student_number = request.form['student_number']
        password = request.form['password']

        # Print the credentials for debugging purposes
        print(f"Attempting login with student_number: {student_number}, password: {password}")

        # Query the database to check for authentication
        mycursor.execute("SELECT * FROM users WHERE studentNumber = %s AND password = %s", (student_number, password))
        user = mycursor.fetchone()

        if user:
            # Authentication successful, reirect to the student_rep_home route
            return redirect(url_for('views.student_rep_home'))

    return render_template("student-rep/student-rep-login.html", error="Invalid student number or password")

@views.route('/student-rep/register', methods=['GET', 'POST'])
def student_rep_register():
    if request.method == 'POST':
        # Get data from the form
        last_name = request.form['last_name']
        first_name = request.form['first_name']
        student_number = request.form['student_number']
        birth_month = request.form['birth_month']
        birth_day = request.form['birth_day']
        birth_year = request.form['birth_year']
        email = request.form['email']
        password = request.form['password']

        # Create a full name
        full_name = f"{first_name} {last_name} "

        # Create a birthdate string
        birthdate = f"{birth_year}-{birth_month}-{birth_day}, "

        # Insert data into the database
        sql = "INSERT INTO users (studentNumber, fullName, birthdate, emailAddress, password) VALUES (%s, %s, %s, %s, %s)"
        val = (student_number, full_name, birthdate, email, password)

        mycursor.execute(sql, val)
        db.commit()

        return redirect(url_for('views.student_rep'))

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