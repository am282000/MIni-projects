-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2020 at 07:00 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `banking_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `balance` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `balance`, `image`) VALUES
(1, 'Ashish Madaan', 'ashishmadaan@gmail.com', 9700, 'ashishmadaan.jpg'),
(2, 'Riya Chawla', 'riyachawla@gmail.com', 12000, 'riyachawla.jpeg'),
(3, 'Kanchan', 'kanchansharma@gmail.com', 14100, 'kanchansharma.jpeg'),
(4, 'Sahil Roy', 'sahilroy@gmail.com', 7000, 'sahilroy.jpeg'),
(5, 'Rupali', 'rupalidesicrew@gmail.com', 15000, 'rupali.jpeg'),
(6, 'Jatin Chhachhia', 'jatinchhachhia@gmail.com', 6200, 'jatin.jpeg'),
(7, 'Prachi', 'prachiarora@gmail.com', 22000, 'prachi.jpg'),
(8, 'Leeza Galhotra', 'leezagalhotra@gmail.com', 21000, 'leeza.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `transfers`
--

CREATE TABLE `transfers` (
  `transfer_date` text NOT NULL,
  `from_acc` int(11) NOT NULL,
  `from_acc_name` text NOT NULL,
  `to_acc` int(11) NOT NULL,
  `transfer_amt` int(11) NOT NULL,
  `transfer_msg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transfers`
--

INSERT INTO `transfers` (`transfer_date`, `from_acc`, `from_acc_name`, `to_acc`, `transfer_amt`, `transfer_msg`) VALUES
('13-11-2020 17:03:29 pm', 1, 'Ashish Madaan', 2, 100, 'aish kr'),
('13-11-2020 17:04:35 pm', 1, 'Ashish Madaan', 2, 100, 'aish kr'),
('13-11-2020 17:48:46 pm', 1, 'Ashish Madaan', 2, 100, 'aish kr'),
('13-11-2020 18:48:32 pm', 1, 'Ashish Madaan', 3, 100, 'aish kr'),
('13-11-2020 18:51:38 pm', 1, 'Ashish Madaan', 3, 100, 'aish kr'),
('13-11-2020 18:52:16 pm', 1, 'Ashish Madaan', 6, 200, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
