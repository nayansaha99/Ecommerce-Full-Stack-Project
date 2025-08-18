-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2024 at 12:21 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `next_com`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `brandName` varchar(50) NOT NULL,
  `brandImg` varchar(300) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brandName`, `brandImg`, `createdAt`, `updatedAt`) VALUES
(1, 'Apple', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55'),
(2, 'HP', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55'),
(3, 'Dell', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55'),
(4, 'Lenovo', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55'),
(5, 'Asus', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55'),
(6, 'Microsoft', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55'),
(7, 'Acer', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55'),
(8, 'Razer', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55'),
(9, 'Samsung', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55'),
(10, 'MSI', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:49:55', '2024-01-08 08:49:55');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL,
  `categoryImg` varchar(300) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `categoryName`, `categoryImg`, `createdAt`, `updatedAt`) VALUES
(1, 'Laptop', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25'),
(2, 'Mobile', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25'),
(3, 'Headphone', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25'),
(4, 'Smartwatch', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25'),
(5, 'Television', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25'),
(6, 'Camera', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25'),
(7, 'Printer', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25'),
(8, 'Keyboard', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25'),
(9, 'Mouse', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25'),
(10, 'Speaker', 'https://photo.teamrabbil.com/images/2023/08/15/Phones--Tablets-01-3944.png', '2024-01-08 08:51:25', '2024-01-08 08:51:25');

-- --------------------------------------------------------

--
-- Table structure for table `customer_profiles`
--

CREATE TABLE `customer_profiles` (
  `id` int(11) NOT NULL,
  `cus_name` varchar(100) NOT NULL,
  `cus_add` varchar(500) NOT NULL,
  `cus_city` varchar(50) NOT NULL,
  `cus_state` varchar(50) NOT NULL,
  `cus_postcode` varchar(50) NOT NULL,
  `cus_country` varchar(50) NOT NULL,
  `cus_phone` varchar(50) NOT NULL,
  `cus_fax` varchar(50) NOT NULL,
  `ship_name` varchar(100) NOT NULL,
  `ship_add` varchar(100) NOT NULL,
  `ship_city` varchar(100) NOT NULL,
  `ship_state` varchar(100) NOT NULL,
  `ship_postcode` varchar(100) NOT NULL,
  `ship_country` varchar(100) NOT NULL,
  `ship_phone` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer_profiles`
--

INSERT INTO `customer_profiles` (`id`, `cus_name`, `cus_add`, `cus_city`, `cus_state`, `cus_postcode`, `cus_country`, `cus_phone`, `cus_fax`, `ship_name`, `ship_add`, `ship_city`, `ship_state`, `ship_postcode`, `ship_country`, `ship_phone`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Dhaka', 'Dhaka1', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 1, '2024-01-08 09:19:42', '2024-01-08 05:04:10'),
(2, 'Dhaka', 'Dhaka1', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 'Dhaka', 3, '2024-01-08 05:05:10', '2024-01-08 05:05:10');

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `img` varchar(300) NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `features`
--

INSERT INTO `features` (`id`, `name`, `img`, `description`) VALUES
(1, 'Free Delivery', 'https://photo.teamrabbil.com/images/2023/10/09/f1.png', 'For All Orders Over $99'),
(2, '90 Days Return', 'https://photo.teamrabbil.com/images/2023/10/09/f2.png', 'If goods have problem'),
(3, 'Secure Payment', 'https://photo.teamrabbil.com/images/2023/10/09/f3.png', '100% Secure Payment'),
(4, '24/7 Support', 'https://photo.teamrabbil.com/images/2023/10/09/f4.png', 'Dedicated Support');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `total` double NOT NULL,
  `vat` double NOT NULL,
  `payable` double NOT NULL,
  `cus_details` varchar(500) NOT NULL,
  `ship_details` varchar(500) NOT NULL,
  `tran_id` varchar(100) NOT NULL,
  `val_id` varchar(100) NOT NULL DEFAULT '0',
  `delivery_status` enum('Pending','Processing','Completed') NOT NULL,
  `payment_status` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_products`
--

CREATE TABLE `invoice_products` (
  `id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `qty` double NOT NULL,
  `sale_price` double NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE `policies` (
  `id` int(11) NOT NULL,
  `type` enum('about','refund','terms','contact','complain') NOT NULL,
  `des` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`id`, `type`, `des`) VALUES
(1, 'about', '<h3>Marayan Tong, Bandarban</h3>\r\n\r\n<p>Marayan Tong is the name of a hill belonging to the Marinja Range. This hilltop in Bandarban&rsquo;s Alikadam area is extremely popular for camping among the nature lovers. From the peak as far as the eyes can travel, there are only hills covered in lush green. And in the morning, there are faraway hills covered in sheer clouds to be amazed at. It&rsquo;s an extraordinary experience to enjoy sunrise from up there. As soon as the sun rises, the whole valley gets flooded with its golden rays. And as the hour passes away, the natural beauty of the hill keeps changing constantly throughout the day.</p>\r\n\r\n<h3>Char Kukri-Mukri, Bhola</h3>\r\n\r\n<p>Though its called a char (shoal), Kukri-Mukri is an island actually. This island from Bhola&rsquo;s Char Fashion is located at the confluence of Meghna and Tentulia rivers right on the edge of the Bay of Bengal.Seeing the dense forest and the crowd of mangrove trees in Char Kukri-Mukri, you would get the feeling of being deep inside the Sundarbans.The forest and the surrounding waters easily make you forget the complexity of the urban life. And you can spend hours looking at the star-studded sky in the silence of the night.</p>\r\n\r\n<h3>Sonadia Island, Cox&rsquo;s Bazar &nbsp;</h3>\r\n\r\n<p>Cox&rsquo;s Bazar sea beach is at the top of traveler&rsquo;s list of favourite destinations. But for people who don&rsquo;t like the crowd of tourists, there is Sonadia sea beach.There&rsquo;s nothing but the sound of the sea in Moheshkhali&rsquo;s Sonadia. The night stay in tent on this beach could be one of the best moments of your life. And, if it&rsquo;s a full moon night nothing can be better than that.Then you can take a walk barefoot on the beach basking in the golden ray of the rising sun. You can also enjoy a bit of hide and seek with the red crabs on the beach during this time. And, you can spend hours without a break swaying on a hammock tied inside the grove of tamarisk (Jhau) trees.</p>\r\n\r\n<h3>Rema-Kalenga, Habiganj</h3>\r\n\r\n<p>I had read somewhere that forests should be visited at night for its environment and the beauty keeps changing with the depth of night. But, I believe if you want to feel the forest in your heart, you can just arrive in the Rema-Kalenga reserved forest with a tent. A deep silence possesses the forest at night. The orchestra of crickets in the forest keeps chirping relentlessly with full enthusiasm. But that sound gets blended seamlessly with the environment of the forest. The Rema-Kalenga reserved forest is located in Chunarughat upazila of Habiganj.</p>\r\n\r\n<h3>Monpura, Bhola</h3>\r\n\r\n<p>Monpura is the perfect destination for cycling and camping. This island upazila of Bhola is surrounded by the river Meghna on three sides and by the Bay of Bengal on the other side. Also there&rsquo;s not much hassle to reach Monpura. If you board any Betua or Hatia bound launch from Sadarghat, it will drop you off at Monpura even before the sunrise. One of the significant attractions of this island is its mangrove forest stretched for miles after miles. And the forest is surrounded by rivers on all sides. You can easily spend an amusing night setting up the tent on the banks of the river. Besides, Sakuchia sea beach, Upazila parishad&rsquo;s Pach Dighi, Chowwdhury Fisheries Project and Monpura landing station are the popular tourist sites there.</p>\r\n\r\n<h3>Nijhum Dwip, Noakhali</h3>\r\n\r\n<p>Nijhum Dwip is located inside the Bay of Bengal on the estuary of Meghna River. This island detached from the mainland of Hatia is a government-announced national park.In the past, spotted deer had been released in this park and they now roam freely there in herds. And in winter, migratory birds arrive in flocks. You can set up the tent near the beach or the forest. Even the forest department can arrange for the tents. If you contact beforehand, you can comfortably spend two nights there in rented tents.</p>\r\n\r\n<h3>Kaptai, Rangamati</h3>\r\n\r\n<p>The banks of the Karnaphuli river, the banks of the lake or the base of the high hills, no matter wherever you set up the tent in Kaptai it turns into a great camping site in a jiffy. Seeing the beauty of the lake covered in the blanket of fog through the opening of the tent takes you to land of dreams. There isn&rsquo;t the solitude of the forest or the unnecessary hostility of noise there. And that&rsquo;s why many commercial camping sites have mushroomed in Kaptai. Alongside tenting, you can go for a swim or go kayaking in the crystal-clear lake. &nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n'),
(2, 'refund', '<h3>Marayan Tong, Bandarban</h3>\r\n\r\n<p>Marayan Tong is the name of a hill belonging to the Marinja Range. This hilltop in Bandarban&rsquo;s Alikadam area is extremely popular for camping among the nature lovers. From the peak as far as the eyes can travel, there are only hills covered in lush green. And in the morning, there are faraway hills covered in sheer clouds to be amazed at. It&rsquo;s an extraordinary experience to enjoy sunrise from up there. As soon as the sun rises, the whole valley gets flooded with its golden rays. And as the hour passes away, the natural beauty of the hill keeps changing constantly throughout the day.</p>\r\n\r\n<h3>Char Kukri-Mukri, Bhola</h3>\r\n\r\n<p>Though its called a char (shoal), Kukri-Mukri is an island actually. This island from Bhola&rsquo;s Char Fashion is located at the confluence of Meghna and Tentulia rivers right on the edge of the Bay of Bengal.Seeing the dense forest and the crowd of mangrove trees in Char Kukri-Mukri, you would get the feeling of being deep inside the Sundarbans.The forest and the surrounding waters easily make you forget the complexity of the urban life. And you can spend hours looking at the star-studded sky in the silence of the night.</p>\r\n\r\n<h3>Sonadia Island, Cox&rsquo;s Bazar &nbsp;</h3>\r\n\r\n<p>Cox&rsquo;s Bazar sea beach is at the top of traveler&rsquo;s list of favourite destinations. But for people who don&rsquo;t like the crowd of tourists, there is Sonadia sea beach.There&rsquo;s nothing but the sound of the sea in Moheshkhali&rsquo;s Sonadia. The night stay in tent on this beach could be one of the best moments of your life. And, if it&rsquo;s a full moon night nothing can be better than that.Then you can take a walk barefoot on the beach basking in the golden ray of the rising sun. You can also enjoy a bit of hide and seek with the red crabs on the beach during this time. And, you can spend hours without a break swaying on a hammock tied inside the grove of tamarisk (Jhau) trees.</p>\r\n\r\n<h3>Rema-Kalenga, Habiganj</h3>\r\n\r\n<p>I had read somewhere that forests should be visited at night for its environment and the beauty keeps changing with the depth of night. But, I believe if you want to feel the forest in your heart, you can just arrive in the Rema-Kalenga reserved forest with a tent. A deep silence possesses the forest at night. The orchestra of crickets in the forest keeps chirping relentlessly with full enthusiasm. But that sound gets blended seamlessly with the environment of the forest. The Rema-Kalenga reserved forest is located in Chunarughat upazila of Habiganj.</p>\r\n\r\n<h3>Monpura, Bhola</h3>\r\n\r\n<p>Monpura is the perfect destination for cycling and camping. This island upazila of Bhola is surrounded by the river Meghna on three sides and by the Bay of Bengal on the other side. Also there&rsquo;s not much hassle to reach Monpura. If you board any Betua or Hatia bound launch from Sadarghat, it will drop you off at Monpura even before the sunrise. One of the significant attractions of this island is its mangrove forest stretched for miles after miles. And the forest is surrounded by rivers on all sides. You can easily spend an amusing night setting up the tent on the banks of the river. Besides, Sakuchia sea beach, Upazila parishad&rsquo;s Pach Dighi, Chowwdhury Fisheries Project and Monpura landing station are the popular tourist sites there.</p>\r\n\r\n<h3>Nijhum Dwip, Noakhali</h3>\r\n\r\n<p>Nijhum Dwip is located inside the Bay of Bengal on the estuary of Meghna River. This island detached from the mainland of Hatia is a government-announced national park.In the past, spotted deer had been released in this park and they now roam freely there in herds. And in winter, migratory birds arrive in flocks. You can set up the tent near the beach or the forest. Even the forest department can arrange for the tents. If you contact beforehand, you can comfortably spend two nights there in rented tents.</p>\r\n\r\n<h3>Kaptai, Rangamati</h3>\r\n\r\n<p>The banks of the Karnaphuli river, the banks of the lake or the base of the high hills, no matter wherever you set up the tent in Kaptai it turns into a great camping site in a jiffy. Seeing the beauty of the lake covered in the blanket of fog through the opening of the tent takes you to land of dreams. There isn&rsquo;t the solitude of the forest or the unnecessary hostility of noise there. And that&rsquo;s why many commercial camping sites have mushroomed in Kaptai. Alongside tenting, you can go for a swim or go kayaking in the crystal-clear lake. &nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n'),
(3, 'terms', '<h3>Marayan Tong, Bandarban</h3>\r\n\r\n<p>Marayan Tong is the name of a hill belonging to the Marinja Range. This hilltop in Bandarban&rsquo;s Alikadam area is extremely popular for camping among the nature lovers. From the peak as far as the eyes can travel, there are only hills covered in lush green. And in the morning, there are faraway hills covered in sheer clouds to be amazed at. It&rsquo;s an extraordinary experience to enjoy sunrise from up there. As soon as the sun rises, the whole valley gets flooded with its golden rays. And as the hour passes away, the natural beauty of the hill keeps changing constantly throughout the day.</p>\r\n\r\n<h3>Char Kukri-Mukri, Bhola</h3>\r\n\r\n<p>Though its called a char (shoal), Kukri-Mukri is an island actually. This island from Bhola&rsquo;s Char Fashion is located at the confluence of Meghna and Tentulia rivers right on the edge of the Bay of Bengal.Seeing the dense forest and the crowd of mangrove trees in Char Kukri-Mukri, you would get the feeling of being deep inside the Sundarbans.The forest and the surrounding waters easily make you forget the complexity of the urban life. And you can spend hours looking at the star-studded sky in the silence of the night.</p>\r\n\r\n<h3>Sonadia Island, Cox&rsquo;s Bazar &nbsp;</h3>\r\n\r\n<p>Cox&rsquo;s Bazar sea beach is at the top of traveler&rsquo;s list of favourite destinations. But for people who don&rsquo;t like the crowd of tourists, there is Sonadia sea beach.There&rsquo;s nothing but the sound of the sea in Moheshkhali&rsquo;s Sonadia. The night stay in tent on this beach could be one of the best moments of your life. And, if it&rsquo;s a full moon night nothing can be better than that.Then you can take a walk barefoot on the beach basking in the golden ray of the rising sun. You can also enjoy a bit of hide and seek with the red crabs on the beach during this time. And, you can spend hours without a break swaying on a hammock tied inside the grove of tamarisk (Jhau) trees.</p>\r\n\r\n<h3>Rema-Kalenga, Habiganj</h3>\r\n\r\n<p>I had read somewhere that forests should be visited at night for its environment and the beauty keeps changing with the depth of night. But, I believe if you want to feel the forest in your heart, you can just arrive in the Rema-Kalenga reserved forest with a tent. A deep silence possesses the forest at night. The orchestra of crickets in the forest keeps chirping relentlessly with full enthusiasm. But that sound gets blended seamlessly with the environment of the forest. The Rema-Kalenga reserved forest is located in Chunarughat upazila of Habiganj.</p>\r\n\r\n<h3>Monpura, Bhola</h3>\r\n\r\n<p>Monpura is the perfect destination for cycling and camping. This island upazila of Bhola is surrounded by the river Meghna on three sides and by the Bay of Bengal on the other side. Also there&rsquo;s not much hassle to reach Monpura. If you board any Betua or Hatia bound launch from Sadarghat, it will drop you off at Monpura even before the sunrise. One of the significant attractions of this island is its mangrove forest stretched for miles after miles. And the forest is surrounded by rivers on all sides. You can easily spend an amusing night setting up the tent on the banks of the river. Besides, Sakuchia sea beach, Upazila parishad&rsquo;s Pach Dighi, Chowwdhury Fisheries Project and Monpura landing station are the popular tourist sites there.</p>\r\n\r\n<h3>Nijhum Dwip, Noakhali</h3>\r\n\r\n<p>Nijhum Dwip is located inside the Bay of Bengal on the estuary of Meghna River. This island detached from the mainland of Hatia is a government-announced national park.In the past, spotted deer had been released in this park and they now roam freely there in herds. And in winter, migratory birds arrive in flocks. You can set up the tent near the beach or the forest. Even the forest department can arrange for the tents. If you contact beforehand, you can comfortably spend two nights there in rented tents.</p>\r\n\r\n<h3>Kaptai, Rangamati</h3>\r\n\r\n<p>The banks of the Karnaphuli river, the banks of the lake or the base of the high hills, no matter wherever you set up the tent in Kaptai it turns into a great camping site in a jiffy. Seeing the beauty of the lake covered in the blanket of fog through the opening of the tent takes you to land of dreams. There isn&rsquo;t the solitude of the forest or the unnecessary hostility of noise there. And that&rsquo;s why many commercial camping sites have mushroomed in Kaptai. Alongside tenting, you can go for a swim or go kayaking in the crystal-clear lake. &nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n'),
(4, 'contact', '<h3>Marayan Tong, Bandarban</h3>\r\n\r\n<p>Marayan Tong is the name of a hill belonging to the Marinja Range. This hilltop in Bandarban&rsquo;s Alikadam area is extremely popular for camping among the nature lovers. From the peak as far as the eyes can travel, there are only hills covered in lush green. And in the morning, there are faraway hills covered in sheer clouds to be amazed at. It&rsquo;s an extraordinary experience to enjoy sunrise from up there. As soon as the sun rises, the whole valley gets flooded with its golden rays. And as the hour passes away, the natural beauty of the hill keeps changing constantly throughout the day.</p>\r\n\r\n<h3>Char Kukri-Mukri, Bhola</h3>\r\n\r\n<p>Though its called a char (shoal), Kukri-Mukri is an island actually. This island from Bhola&rsquo;s Char Fashion is located at the confluence of Meghna and Tentulia rivers right on the edge of the Bay of Bengal.Seeing the dense forest and the crowd of mangrove trees in Char Kukri-Mukri, you would get the feeling of being deep inside the Sundarbans.The forest and the surrounding waters easily make you forget the complexity of the urban life. And you can spend hours looking at the star-studded sky in the silence of the night.</p>\r\n\r\n<h3>Sonadia Island, Cox&rsquo;s Bazar &nbsp;</h3>\r\n\r\n<p>Cox&rsquo;s Bazar sea beach is at the top of traveler&rsquo;s list of favourite destinations. But for people who don&rsquo;t like the crowd of tourists, there is Sonadia sea beach.There&rsquo;s nothing but the sound of the sea in Moheshkhali&rsquo;s Sonadia. The night stay in tent on this beach could be one of the best moments of your life. And, if it&rsquo;s a full moon night nothing can be better than that.Then you can take a walk barefoot on the beach basking in the golden ray of the rising sun. You can also enjoy a bit of hide and seek with the red crabs on the beach during this time. And, you can spend hours without a break swaying on a hammock tied inside the grove of tamarisk (Jhau) trees.</p>\r\n\r\n<h3>Rema-Kalenga, Habiganj</h3>\r\n\r\n<p>I had read somewhere that forests should be visited at night for its environment and the beauty keeps changing with the depth of night. But, I believe if you want to feel the forest in your heart, you can just arrive in the Rema-Kalenga reserved forest with a tent. A deep silence possesses the forest at night. The orchestra of crickets in the forest keeps chirping relentlessly with full enthusiasm. But that sound gets blended seamlessly with the environment of the forest. The Rema-Kalenga reserved forest is located in Chunarughat upazila of Habiganj.</p>\r\n\r\n<h3>Monpura, Bhola</h3>\r\n\r\n<p>Monpura is the perfect destination for cycling and camping. This island upazila of Bhola is surrounded by the river Meghna on three sides and by the Bay of Bengal on the other side. Also there&rsquo;s not much hassle to reach Monpura. If you board any Betua or Hatia bound launch from Sadarghat, it will drop you off at Monpura even before the sunrise. One of the significant attractions of this island is its mangrove forest stretched for miles after miles. And the forest is surrounded by rivers on all sides. You can easily spend an amusing night setting up the tent on the banks of the river. Besides, Sakuchia sea beach, Upazila parishad&rsquo;s Pach Dighi, Chowwdhury Fisheries Project and Monpura landing station are the popular tourist sites there.</p>\r\n\r\n<h3>Nijhum Dwip, Noakhali</h3>\r\n\r\n<p>Nijhum Dwip is located inside the Bay of Bengal on the estuary of Meghna River. This island detached from the mainland of Hatia is a government-announced national park.In the past, spotted deer had been released in this park and they now roam freely there in herds. And in winter, migratory birds arrive in flocks. You can set up the tent near the beach or the forest. Even the forest department can arrange for the tents. If you contact beforehand, you can comfortably spend two nights there in rented tents.</p>\r\n\r\n<h3>Kaptai, Rangamati</h3>\r\n\r\n<p>The banks of the Karnaphuli river, the banks of the lake or the base of the high hills, no matter wherever you set up the tent in Kaptai it turns into a great camping site in a jiffy. Seeing the beauty of the lake covered in the blanket of fog through the opening of the tent takes you to land of dreams. There isn&rsquo;t the solitude of the forest or the unnecessary hostility of noise there. And that&rsquo;s why many commercial camping sites have mushroomed in Kaptai. Alongside tenting, you can go for a swim or go kayaking in the crystal-clear lake. &nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n'),
(5, 'complain', '<h3>Marayan Tong, Bandarban</h3>\r\n\r\n<p>Marayan Tong is the name of a hill belonging to the Marinja Range. This hilltop in Bandarban&rsquo;s Alikadam area is extremely popular for camping among the nature lovers. From the peak as far as the eyes can travel, there are only hills covered in lush green. And in the morning, there are faraway hills covered in sheer clouds to be amazed at. It&rsquo;s an extraordinary experience to enjoy sunrise from up there. As soon as the sun rises, the whole valley gets flooded with its golden rays. And as the hour passes away, the natural beauty of the hill keeps changing constantly throughout the day.</p>\r\n\r\n<h3>Char Kukri-Mukri, Bhola</h3>\r\n\r\n<p>Though its called a char (shoal), Kukri-Mukri is an island actually. This island from Bhola&rsquo;s Char Fashion is located at the confluence of Meghna and Tentulia rivers right on the edge of the Bay of Bengal.Seeing the dense forest and the crowd of mangrove trees in Char Kukri-Mukri, you would get the feeling of being deep inside the Sundarbans.The forest and the surrounding waters easily make you forget the complexity of the urban life. And you can spend hours looking at the star-studded sky in the silence of the night.</p>\r\n\r\n<h3>Sonadia Island, Cox&rsquo;s Bazar &nbsp;</h3>\r\n\r\n<p>Cox&rsquo;s Bazar sea beach is at the top of traveler&rsquo;s list of favourite destinations. But for people who don&rsquo;t like the crowd of tourists, there is Sonadia sea beach.There&rsquo;s nothing but the sound of the sea in Moheshkhali&rsquo;s Sonadia. The night stay in tent on this beach could be one of the best moments of your life. And, if it&rsquo;s a full moon night nothing can be better than that.Then you can take a walk barefoot on the beach basking in the golden ray of the rising sun. You can also enjoy a bit of hide and seek with the red crabs on the beach during this time. And, you can spend hours without a break swaying on a hammock tied inside the grove of tamarisk (Jhau) trees.</p>\r\n\r\n<h3>Rema-Kalenga, Habiganj</h3>\r\n\r\n<p>I had read somewhere that forests should be visited at night for its environment and the beauty keeps changing with the depth of night. But, I believe if you want to feel the forest in your heart, you can just arrive in the Rema-Kalenga reserved forest with a tent. A deep silence possesses the forest at night. The orchestra of crickets in the forest keeps chirping relentlessly with full enthusiasm. But that sound gets blended seamlessly with the environment of the forest. The Rema-Kalenga reserved forest is located in Chunarughat upazila of Habiganj.</p>\r\n\r\n<h3>Monpura, Bhola</h3>\r\n\r\n<p>Monpura is the perfect destination for cycling and camping. This island upazila of Bhola is surrounded by the river Meghna on three sides and by the Bay of Bengal on the other side. Also there&rsquo;s not much hassle to reach Monpura. If you board any Betua or Hatia bound launch from Sadarghat, it will drop you off at Monpura even before the sunrise. One of the significant attractions of this island is its mangrove forest stretched for miles after miles. And the forest is surrounded by rivers on all sides. You can easily spend an amusing night setting up the tent on the banks of the river. Besides, Sakuchia sea beach, Upazila parishad&rsquo;s Pach Dighi, Chowwdhury Fisheries Project and Monpura landing station are the popular tourist sites there.</p>\r\n\r\n<h3>Nijhum Dwip, Noakhali</h3>\r\n\r\n<p>Nijhum Dwip is located inside the Bay of Bengal on the estuary of Meghna River. This island detached from the mainland of Hatia is a government-announced national park.In the past, spotted deer had been released in this park and they now roam freely there in herds. And in winter, migratory birds arrive in flocks. You can set up the tent near the beach or the forest. Even the forest department can arrange for the tents. If you contact beforehand, you can comfortably spend two nights there in rented tents.</p>\r\n\r\n<h3>Kaptai, Rangamati</h3>\r\n\r\n<p>The banks of the Karnaphuli river, the banks of the lake or the base of the high hills, no matter wherever you set up the tent in Kaptai it turns into a great camping site in a jiffy. Seeing the beauty of the lake covered in the blanket of fog through the opening of the tent takes you to land of dreams. There isn&rsquo;t the solitude of the forest or the unnecessary hostility of noise there. And that&rsquo;s why many commercial camping sites have mushroomed in Kaptai. Alongside tenting, you can go for a swim or go kayaking in the crystal-clear lake. &nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `short_des` varchar(500) NOT NULL,
  `price` double NOT NULL,
  `discount` tinyint(1) NOT NULL,
  `discount_price` double NOT NULL,
  `image` varchar(200) NOT NULL,
  `stock` tinyint(1) NOT NULL,
  `star` double NOT NULL,
  `remark` enum('popular','new','top','special','trending','regular') NOT NULL,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `short_des`, `price`, `discount`, `discount_price`, `image`, `stock`, `star`, `remark`, `category_id`, `brand_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'popular', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(2, 'Asus 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'popular', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(3, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'popular', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(4, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'popular', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(5, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'new', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(6, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'new', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(7, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'new', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(8, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'top', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(9, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'top', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(10, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'top', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(11, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'special', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(12, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'special', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(13, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'special', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(14, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'trending', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(15, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'trending', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(16, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'trending', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(17, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'regular', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(18, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'regular', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37'),
(19, 'Apple 15 Inch MacBook Air (2023)', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 1000, 0, 890, 'https://photo.teamrabbil.com/images/2023/10/03/Apple2.png', 1, 4, 'regular', 1, 1, '2024-01-08 08:59:37', '2024-01-08 08:59:37');

-- --------------------------------------------------------

--
-- Table structure for table `product_carts`
--

CREATE TABLE `product_carts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `color` varchar(200) NOT NULL,
  `size` varchar(200) NOT NULL,
  `qty` double NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE `product_details` (
  `id` int(11) NOT NULL,
  `img1` varchar(200) NOT NULL,
  `img2` varchar(200) NOT NULL,
  `img3` varchar(200) NOT NULL,
  `img4` varchar(200) NOT NULL,
  `img5` varchar(200) NOT NULL,
  `img6` varchar(200) NOT NULL,
  `img7` varchar(200) NOT NULL,
  `img8` varchar(200) NOT NULL,
  `des` longtext NOT NULL,
  `color` varchar(200) NOT NULL,
  `size` varchar(200) NOT NULL,
  `product_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_details`
--

INSERT INTO `product_details` (`id`, `img1`, `img2`, `img3`, `img4`, `img5`, `img6`, `img7`, `img8`, `des`, `color`, `size`, `product_id`, `createdAt`, `updatedAt`) VALUES
(1, 'https://photo.teamrabbil.com/images/2023/10/08/7.jpeg', 'https://photo.teamrabbil.com/images/2023/10/08/scaled.jpeg', 'https://photo.teamrabbil.com/images/2023/10/08/scaled.jpeg', 'https://photo.teamrabbil.com/images/2023/10/08/scaled.jpeg', 'https://photo.teamrabbil.com/images/2023/10/08/scaled.jpeg', 'https://photo.teamrabbil.com/images/2023/10/08/scaled.jpeg', 'https://photo.teamrabbil.com/images/2023/10/08/scaled.jpeg', 'https://photo.teamrabbil.com/images/2023/10/08/scaled.jpeg', '<p>&nbsp;</p>\\n<p><strong>Processor</strong></p>\\n<table class=\\\"data-table flex-table\\\" style=\\\"height: 133px;\\\" border=\\\"0.5\\\" width=\\\"554\\\" cellspacing=\\\"0\\\" cellpadding=\\\"0\\\">\\n<tbody>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 328.283px;\\\">Processor Brand</td>\\n<td class=\\\"value\\\" style=\\\"width: 225.717px;\\\">Apple</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 328.283px;\\\">Processor Model</td>\\n<td class=\\\"value\\\" style=\\\"width: 225.717px;\\\">M1 chip</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 328.283px;\\\">Processor Frequency</td>\\n<td class=\\\"value\\\" style=\\\"width: 225.717px;\\\">2.06 - 3.8GHz</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 328.283px;\\\">Processor Core</td>\\n<td class=\\\"value\\\" style=\\\"width: 225.717px;\\\">8</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 328.283px;\\\">Processor Thread</td>\\n<td class=\\\"value\\\" style=\\\"width: 225.717px;\\\">8</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 328.283px;\\\">CPU Cache</td>\\n<td class=\\\"value\\\" style=\\\"width: 225.717px;\\\">16 MB</td>\\n</tr>\\n</tbody>\\n</table>\\n<p><strong>Display</strong></p>\\n<table class=\\\"data-table flex-table\\\" style=\\\"height: 123px;\\\" border=\\\"0.5\\\" width=\\\"600\\\" cellspacing=\\\"0\\\" cellpadding=\\\"0\\\">\\n<tbody>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 130.983px;\\\">Display Size</td>\\n<td class=\\\"value\\\" style=\\\"width: 469.017px;\\\">13.3-inch</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 130.983px;\\\">Display Type</td>\\n<td class=\\\"value\\\" style=\\\"width: 469.017px;\\\">Retina display with IPS technology</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 130.983px;\\\">Display Resolution</td>\\n<td class=\\\"value\\\" style=\\\"width: 469.017px;\\\">2560 X 1600</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 130.983px;\\\">Touch Screen</td>\\n<td class=\\\"value\\\" style=\\\"width: 469.017px;\\\">No</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 130.983px;\\\">Display Features</td>\\n<td class=\\\"value\\\" style=\\\"width: 469.017px;\\\">LED-backlit; 227 pixels per inch with support for millions of colors</td>\\n</tr>\\n</tbody>\\n</table>\\n<p><strong>Memory</strong></p>\\n<table class=\\\"data-table flex-table\\\" style=\\\"height: 59px;\\\" border=\\\"0.5\\\" width=\\\"391\\\" cellspacing=\\\"0\\\" cellpadding=\\\"0\\\">\\n<tbody>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 159.367px;\\\">RAM</td>\\n<td class=\\\"value\\\" style=\\\"width: 231.633px;\\\">8GB</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 159.367px;\\\">RAM Type</td>\\n<td class=\\\"value\\\" style=\\\"width: 231.633px;\\\">Unified memory</td>\\n</tr>\\n<tr>\\n<td class=\\\"name\\\" style=\\\"width: 159.367px;\\\">Removable</td>\\n<td class=\\\"value\\\" style=\\\"width: 231.633px;\\\">No</td>\\n</tr>\\n</tbody>\\n</table>', 'Red,Black,Blue', '13,14,17', 1, '2024-01-08 09:06:33', '2024-01-08 09:06:33');

-- --------------------------------------------------------

--
-- Table structure for table `product_reviews`
--

CREATE TABLE `product_reviews` (
  `id` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `rating` varchar(10) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_reviews`
--

INSERT INTO `product_reviews` (`id`, `description`, `rating`, `customer_id`, `product_id`, `createdAt`, `updatedAt`) VALUES
(1, 'This strategy stores globally shared application code in the root app directory and splits more specific application ', '4', 1, 1, '2024-01-08 09:20:19', '2024-01-08 09:20:19'),
(2, 'This strategy stores globally shared application code in the root app directory and splits more specific application ', '4', 1, 1, '2024-01-08 09:20:19', '2024-01-08 09:20:19'),
(3, 'This strategy stores globally shared application code in the root app directory and splits more specific application ', '4', 1, 1, '2024-01-08 09:20:19', '2024-01-08 09:20:19'),
(4, 'This strategy stores globally shared application code in the root app directory and splits more specific application ', '4', 1, 1, '2024-01-08 09:20:19', '2024-01-08 09:20:19'),
(5, 'This strategy stores globally shared application code in the root app directory and splits more specific application ', '4', 1, 1, '2024-01-08 09:20:19', '2024-01-08 09:20:19');

-- --------------------------------------------------------

--
-- Table structure for table `product_sliders`
--

CREATE TABLE `product_sliders` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `short_des` varchar(500) NOT NULL,
  `price` varchar(100) NOT NULL,
  `image` varchar(200) NOT NULL,
  `product_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_sliders`
--

INSERT INTO `product_sliders` (`id`, `title`, `short_des`, `price`, `image`, `product_id`, `createdAt`, `updatedAt`) VALUES
(1, 'First slide label 1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', '1000', 'https://photo.teamrabbil.com/images/2023/10/03/Apple.png', 1, '2024-01-08 09:04:31', '2024-01-08 09:04:31'),
(3, 'First slide label 2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', '1000', 'https://photo.teamrabbil.com/images/2023/10/03/Apple.png', 2, '2024-01-08 09:04:31', '2024-01-08 09:04:31'),
(4, 'First slide label 3', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', '1000', 'https://photo.teamrabbil.com/images/2023/10/03/Apple.png', 3, '2024-01-08 09:04:31', '2024-01-08 09:04:31');

-- --------------------------------------------------------

--
-- Table structure for table `product_wishes`
--

CREATE TABLE `product_wishes` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sslcommerz_accounts`
--

CREATE TABLE `sslcommerz_accounts` (
  `id` int(11) NOT NULL,
  `store_id` varchar(255) NOT NULL,
  `store_passwd` varchar(255) NOT NULL,
  `currency` varchar(255) NOT NULL,
  `success_url` varchar(255) NOT NULL,
  `fail_url` varchar(255) NOT NULL,
  `cancel_url` varchar(255) NOT NULL,
  `ipn_url` varchar(255) NOT NULL,
  `init_url` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `otp` varchar(10) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `otp`, `createdAt`, `updatedAt`) VALUES
(1, 'engr.rabbil@yahoo.com', '0', '2024-01-08 09:18:31', '2024-01-08 04:46:47'),
(3, 'rabbilidlc@gmail.com', '0', '2024-01-08 04:59:24', '2024-01-08 05:04:58');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('8aa0879b-b7b0-4b9c-9e39-fbf41549de4f', '0ee67ecb4a789b9fa48b46ceb0d5ab45f34e6e19e61605ec99f439fbbd030af8', '2024-01-08 07:08:12.658', '20240108070811_sad', NULL, NULL, '2024-01-08 07:08:11.097', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `brands_brandName_key` (`brandName`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_categoryName_key` (`categoryName`);

--
-- Indexes for table `customer_profiles`
--
ALTER TABLE `customer_profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customer_profiles_user_id_key` (`user_id`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoices_user_id_fkey` (`user_id`);

--
-- Indexes for table `invoice_products`
--
ALTER TABLE `invoice_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoice_products_invoice_id_fkey` (`invoice_id`),
  ADD KEY `invoice_products_product_id_fkey` (`product_id`),
  ADD KEY `invoice_products_user_id_fkey` (`user_id`);

--
-- Indexes for table `policies`
--
ALTER TABLE `policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_brand_id_fkey` (`brand_id`),
  ADD KEY `products_category_id_fkey` (`category_id`);

--
-- Indexes for table `product_carts`
--
ALTER TABLE `product_carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_carts_product_id_fkey` (`product_id`),
  ADD KEY `product_carts_user_id_fkey` (`user_id`);

--
-- Indexes for table `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_details_product_id_key` (`product_id`);

--
-- Indexes for table `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_reviews_customer_id_fkey` (`customer_id`),
  ADD KEY `product_reviews_product_id_fkey` (`product_id`);

--
-- Indexes for table `product_sliders`
--
ALTER TABLE `product_sliders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_sliders_product_id_key` (`product_id`);

--
-- Indexes for table `product_wishes`
--
ALTER TABLE `product_wishes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_wishes_product_id_fkey` (`product_id`),
  ADD KEY `product_wishes_user_id_fkey` (`user_id`);

--
-- Indexes for table `sslcommerz_accounts`
--
ALTER TABLE `sslcommerz_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `customer_profiles`
--
ALTER TABLE `customer_profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoice_products`
--
ALTER TABLE `invoice_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `policies`
--
ALTER TABLE `policies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `product_carts`
--
ALTER TABLE `product_carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_details`
--
ALTER TABLE `product_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_reviews`
--
ALTER TABLE `product_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product_sliders`
--
ALTER TABLE `product_sliders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product_wishes`
--
ALTER TABLE `product_wishes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sslcommerz_accounts`
--
ALTER TABLE `sslcommerz_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_profiles`
--
ALTER TABLE `customer_profiles`
  ADD CONSTRAINT `customer_profiles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `invoice_products`
--
ALTER TABLE `invoice_products`
  ADD CONSTRAINT `invoice_products_invoice_id_fkey` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `invoice_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `invoice_products_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `product_carts`
--
ALTER TABLE `product_carts`
  ADD CONSTRAINT `product_carts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `product_carts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `product_details`
--
ALTER TABLE `product_details`
  ADD CONSTRAINT `product_details_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD CONSTRAINT `product_reviews_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customer_profiles` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `product_reviews_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `product_sliders`
--
ALTER TABLE `product_sliders`
  ADD CONSTRAINT `product_sliders_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `product_wishes`
--
ALTER TABLE `product_wishes`
  ADD CONSTRAINT `product_wishes_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `product_wishes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
