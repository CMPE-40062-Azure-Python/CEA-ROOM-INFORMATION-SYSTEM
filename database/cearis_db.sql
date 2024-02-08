-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2024 at 02:26 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cearis_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `facultyNumber` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`facultyNumber`, `password`) VALUES
('facultyNumber#1', 'password');

-- --------------------------------------------------------

--
-- Table structure for table `cpe_dept_rooms`
--

CREATE TABLE `cpe_dept_rooms` (
  `roomNumber` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `schedule` time NOT NULL,
  `roomDescription` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cpe_dept_rooms`
--

INSERT INTO `cpe_dept_rooms` (`roomNumber`, `status`, `schedule`, `roomDescription`, `location`) VALUES
('RM 300', 'occupied', '00:00:00', 'CoE Lecture Room', 'Third Floor'),
('RM 301', 'occupied', '00:00:00', 'Microcomputer Laboratory', 'Third Floor'),
('RM 302', 'under maintenance', '00:00:00', 'Computer Control Laboratory', 'Third Floor'),
('RM 303a', 'available', '00:00:00', 'Help, Assist and Mobilized', 'Third Floor'),
('RM 303b', 'available', '00:00:00', 'Research and Development Office', ''),
('RM 304a', 'available', '00:00:00', 'Electronics Fundamentals and Laboratory', ''),
('RM 304b', 'available', '00:00:00', 'CoE Students Society', ''),
('RM 305a', 'available', '00:00:00', 'Electronics Fundamental and Laboratory', ''),
('RM 305b', 'available', '00:00:00', 'ECE Research and Development Unit', ''),
('RM 306a', 'available', '00:00:00', 'Electronics Workshop and Laboratory', ''),
('RM 306b', 'available', '00:00:00', 'ECE Laboratory Head Office', ''),
('RM 307', 'available', '00:00:00', 'CE Computer Room', ''),
('RM 308', 'available', '00:00:00', 'Automatic Control Laboratory', ''),
('RM 310', 'available', '00:00:00', 'PC Laboratory 1', ''),
('RM 311', 'available', '00:00:00', 'PC Laboratory 2', ''),
('RM 312', 'available', '00:00:00', 'PC Laboratory 3', ''),
('RM 313', 'available', '00:00:00', 'PC Laboratory 4', ''),
('RM 314', 'available', '00:00:00', 'PC Laboratory 5', ''),
('RM 315', 'available', '00:00:00', 'PC Laboratory 6', ''),
('RM 316', 'available', '00:00:00', 'Digital Circuit Laboratory', ''),
('RM 318', 'available', '00:00:00', 'Electronics Workshop', ''),
('RM 319', 'not available', '00:00:00', 'College of Engineering Research and Development Unit', ''),
('RM 320', 'not available', '00:00:00', 'Office of the Chief Special Project Officer (SPO)', ''),
('RM 321', 'not available', '00:00:00', 'Office of the Chairperson Engineering Sciences', ''),
('RM 322', 'not available', '00:00:00', 'Office of the Chairperson ECE Department', ''),
('RM 323', 'not available', '00:00:00', 'Office of the Chairperson CoE Department', '');

-- --------------------------------------------------------

--
-- Table structure for table `room_reservation`
--

CREATE TABLE `room_reservation` (
  `reservationID` int(11) NOT NULL,
  `roomNumber` varchar(255) NOT NULL,
  `reservationDate` varchar(255) NOT NULL,
  `reservationTime` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room_reservation`
--

INSERT INTO `room_reservation` (`reservationID`, `roomNumber`, `reservationDate`, `reservationTime`) VALUES
(14, 'RM 300', 'February 08, 2024', '2:00pm-4:00pm');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `studentNumber` varchar(255) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `contactNumber` int(11) NOT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `residentialAddress` varchar(255) NOT NULL,
  `verified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`studentNumber`, `fullName`, `birthdate`, `contactNumber`, `emailAddress`, `password`, `residentialAddress`, `verified`) VALUES
('2021-07915-MN-0', 'Carlo Alam ', '2003-01-28', 0, '1737@roc.com.ph', 'password', '', 0),
('2021-07916-MN-0', 'Carlo Alam ', '2003-01-28', 0, '1737@roc.com.ph', 'password', '', 0),
('2021-07986-MN-0', 'Kate Anne Marie Dalangin ', '2003-03-03', 0, '1737@roc.com.ph', 'password', '', 0),
('student#1', 'Student Number 1', '0000-00-00', 0, '', 'password', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`facultyNumber`);

--
-- Indexes for table `cpe_dept_rooms`
--
ALTER TABLE `cpe_dept_rooms`
  ADD PRIMARY KEY (`roomNumber`);

--
-- Indexes for table `room_reservation`
--
ALTER TABLE `room_reservation`
  ADD PRIMARY KEY (`reservationID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`studentNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `room_reservation`
--
ALTER TABLE `room_reservation`
  MODIFY `reservationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
