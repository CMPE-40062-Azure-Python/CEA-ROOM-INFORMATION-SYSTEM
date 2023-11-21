# CEA Room Information System

---

## Table of Contents

- [Description](#description)
  - [Technologies](#technologies)
- [How to Use](#how-to-use)
  - [Install Locally](#install-locally)

---

## Description

The CEA Room Information System is a versatile web-based application designed to streamline the management and accessibility of classroom-related information within the College of Engineering and Architecture (CEA) building at the Polytechnic University of the Philippines.

### Technologies

- Python 3
- Flask 2

[&#9650; Back to the Top](#cea-room-information-system)

---

## How to Use

### Install Locally

- Clone [this repository](https://github.com/Deep-Computer-Vision/image-data-asset-management-tool-deep-computer-vision-team). ([Not sure how?](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))

- Install [Python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/latest/installation/#installation).

- Run the following to command to ensure that Python and pip are installed correctly: ([Not on Path?](https://realpython.com/add-python-to-path/))

  - On Windows
    ```
    python --version && pip --version
    ```
  - On Linux/Unix or MacOS
    ```
    python3 --version && pip --version
    ```
    Versions of installed Python and pip should be displayed.

- On the root directory of the project, run the following command to install necessary [Python packages](https://github.com/CMPE-40062-Azure-Python/CEA-ROOM-INFORMATION-SYSTEM/blob/main/requirements.txt) using pip.

  ```
  pip install -r requirements.txt
  ```

- Download python's latest version if error occurs (version mismatch):

  https://www.python.org/downloads/

- Access MySQL Database, download XAMPP version 8.1.17 / PHP 8.1.17:

https://www.apachefriends.org/download.html

- Copy the following files inside this gdrive link to C:\xampp\mysql\data (replace the files inside):

https://drive.google.com/drive/folders/19906weiZ3z_ZrKzd4uAfQ5OnGncCyZKZ

- Open XAMPP Control Panel and start Apache and MySQL Module then click MSQL Admin or follow this link:

http://localhost/phpmyadmin

- On the root directory of the project, run the following command to start the project.

  ```
  flask run
  ```

- Enter the following to the address bar of a browser.

  ```
  localhost:5000
  ```

- If an error occurs, try repeating the steps.

[&#9650; Back to the Top](#cea-room-information-system)
