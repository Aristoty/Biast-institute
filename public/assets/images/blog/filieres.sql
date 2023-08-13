-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 13 août 2023 à 21:47
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
-- Structure de la table `filieres`
--

CREATE TABLE `filieres` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom_filiere` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `image_desc` varchar(255) DEFAULT NULL,
  `nbr_specialite` int(11) DEFAULT NULL,
  `nbr_inscrits` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `filieres`
--

INSERT INTO `filieres` (`id`, `nom_filiere`, `description`, `createdAt`, `updatedAt`, `image_desc`, `nbr_specialite`, `nbr_inscrits`) VALUES
(1, 'Géni Electrique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'genie_electrique.jpg', 4, 1),
(2, 'Géni Civil', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-12 13:56:49', 'genie_civil.jpg', 4, 2),
(3, 'Géni Mécanique et Productique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'geni_mecanique.jpg', 5, 0),
(4, 'Réseaux et télécommuications', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'telecom.jpg', 2, 0),
(5, 'Géni Informatique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'genie_informatique.jpg', 4, 0),
(6, 'Commerce et Vente', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'commerce_vente.jpeg', 2, 0),
(7, 'Gestion', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'management.jpg', 7, 0),
(8, 'Agriculture et Elevage', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'agriculture_elevage.jpg', 4, 0),
(9, 'Etude Medico-Sanitaire', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'etude_medico_sanitaire.jpg', 2, 0),
(10, 'Science et Techniques Biomedicale', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'science_biomedical.jpg', 2, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `filieres`
--
ALTER TABLE `filieres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `nom_filiere` (`nom_filiere`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `filieres`
--
ALTER TABLE `filieres`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
