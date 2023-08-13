-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 13 août 2023 à 21:35
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `biastdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE `events` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `temps_debut` time DEFAULT NULL,
  `temps_fin` time DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `image_dsc` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `title`, `date`, `temps_debut`, `temps_fin`, `createdAt`, `updatedAt`, `lieu`, `image_dsc`) VALUES
(1, 'VISITE DE L’UNIVERSITÉ DE NANCY DE FRANCE', '2022-07-13', '12:30:00', '18:15:00', '2023-08-12 22:30:02', '2023-08-12 22:30:02', 'Institut Biast en face station OLA', 'visite.jpg'),
(2, 'PRÉSENTATION DES NOUVEAUX BACHELIERS', '2023-08-02', '10:00:00', '16:30:00', '2023-08-12 22:36:55', '2023-08-12 22:36:55', 'Institut Biast en face station OLA', 'presentation.jpg'),
(3, 'ÉPANOUISSEMENT DES ÉTUDIANT DE L’INSTITUT BIAST', '2022-03-18', '12:30:00', '15:45:00', '2023-08-12 22:39:38', '2023-08-12 22:39:38', 'Institut Biast en face station OLA', 'biast.jpg'),
(4, 'EXPLICATION DES LEÇONS AUX ÉTUDIANTS DU GÉNIE CIVIL', '2023-06-14', '13:00:00', '16:00:00', '2023-08-12 22:41:35', '2023-08-12 22:41:35', 'Institut Biast en face station OLA', 'explication.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
