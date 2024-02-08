from flask import Blueprint, render_template, request, redirect, url_for, jsonify
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

        return redirect(url_for('views.student_rep_login'))

    return render_template("student-rep/student-rep-register.html")

from flask import render_template

@views.route('/student-rep/home')
def student_rep_home():
    mycursor.execute("SELECT COUNT(*) FROM cpe_dept_rooms WHERE status = 'available'")
    available_count = mycursor.fetchone()[0]

    mycursor.execute("SELECT COUNT(*) FROM cpe_dept_rooms WHERE status = 'occupied'")
    occupied_count = mycursor.fetchone()[0]

    mycursor.execute("SELECT COUNT(*) FROM cpe_dept_rooms WHERE status = 'under maintenance'")
    maintenance_count = mycursor.fetchone()[0]

    return render_template("student-rep/student-rep-home.html",
                           available_count=available_count,
                           occupied_count=occupied_count,
                           maintenance_count=maintenance_count)

@views.route('/student-rep/home/rooms', methods=['GET', 'POST'])
def student_rep_home_rooms():
    mycursor.execute("SELECT roomNumber FROM cpe_dept_rooms")
    
    # Fetch all the results from the query
    room_numbers = mycursor.fetchall()
    
    # You can set a default value for searchInput or get it from somewhere
    search_input = request.args.get('searchInput', '')

    room_data_list = []
    
    # Fetch data for each roomNumber
    for room_number in room_numbers:
        mycursor.execute("SELECT * FROM cpe_dept_rooms WHERE roomNumber = %s", (room_number[0],))
        room_data = mycursor.fetchone()

        # You may want to check if room_data is None and handle accordingly

        # Convert non-serializable elements to a JSON-serializable format
        serializable_room_data = {
            'room_number': room_data[0],
            'room_name': room_data[1],
            'status': str(room_data[2]),  # Convert to a serializable type (e.g., string)
            'location': room_data[3],
        }

        room_data_list.append(serializable_room_data)

    if request.method == 'POST':
        # Get data from the form
        reservationDate = request.json['reservationDate']
        reservationTime = request.json['reservationTime']


        # Insert data into the database
        sql = "INSERT INTO room_reservation (reservationDate, reservationTime) VALUES (%s, %s)"
        val = (reservationDate, reservationTime)

        mycursor.execute(sql, val)
        db.commit()
        
        return 'Reservation submitted successfully.'

    # Pass the room numbers and searchInput to the template
    return render_template("student-rep/student-rep-home-rooms.html", room_numbers=room_numbers, searchInput=search_input)

@views.route('/admin', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        faculty_number = request.form['faculty_number']
        password = request.form['password']

        # Print the credentials for debugging purposes
        print(f"Attempting login with faculty_number: {faculty_number}, password: {password}")

        # Query the database to check for authentication
        mycursor.execute("SELECT * FROM admin WHERE facultyNumber = %s AND password = %s", (faculty_number, password))
        admin = mycursor.fetchone()

        if admin:
            # Authentication successful, reirect to the student_rep_home route
            return redirect(url_for('views.student_rep_home'))

    return render_template("admin/admin-login.html", error="Invalid faculty number or password")

@views.route('/student-rep/home/reservation')
def student_rep_home_reservation():
    return render_template("student-rep/student-rep-home-reservation.html")

@views.route('/site-map')
def site_map():
    return render_template("site-map.html")

@views.route('/use-cases')
def use_cases():
    return render_template("use-cases.html")

