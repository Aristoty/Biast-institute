-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 11 oct. 2023 à 16:10
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

-- use ba2ndivq93vckjxtbshv;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ba2ndivq93vckjxtbshv`
--

-- --------------------------------------------------------

--
-- Structure de la table `credentials`
--

CREATE TABLE `credentials` (
  `id` int(10) UNSIGNED NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `credentials`
--

INSERT INTO `credentials` (`id`, `login`, `password`, `createdAt`, `updatedAt`) VALUES
(1, '0cgYnxwF', '$2b$10$DQDAOdztebS3oAiwR/M2JeAM.ontTzfO2P45mR4OnpmEIflZ1HEpC', '2023-08-11 11:21:40', '2023-08-11 11:21:40'),
(2, 'MWK2w1DN', '$2b$10$5ndqMfy/DmqjJpGfNi8w9.8rKkNJH0woR5l2WfIC1nagoaqvHXGeS', '2023-08-11 12:54:19', '2023-08-11 12:54:19'),
(3, '0abRE8JJ', '$2b$10$zmgKsCCClsJqCWCJVIR6wOK1NDbrcH7hxO6b3KXqiOA7BBRkFDMr2', '2023-08-14 09:45:13', '2023-08-14 09:45:13'),
(4, 'vTt86499', '$2b$10$NAo0w09WfXpgBhAq4oJ2Tea1x.LHcdO6kRAEdnDnp0KbXmyO2meGa', '2023-08-14 09:52:00', '2023-08-14 09:52:00'),
(5, 'wVI1i1hi', '$2b$10$GN8/OpkzppTBBw5bdgSR5eRnIF/TBaUmfxbJGMXlx.ou4cUJ6Vf.q', '2023-08-14 14:30:25', '2023-08-14 14:30:25'),
(6, 'Mb04X76e', '$2b$10$AzTjIVJK3KFwpNk7IpUua.foKwHfeczfniUFJ1EyoOjl3hQG16J12', '2023-08-29 09:59:49', '2023-08-29 09:59:49');

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
  `lieu` varchar(255) DEFAULT NULL,
  `image_dsc` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `title`, `date`, `temps_debut`, `temps_fin`, `lieu`, `image_dsc`, `createdAt`, `updatedAt`) VALUES
(1, 'LA VISITE DE L’UNIVERSITÉ DE NANCY DE FRANCE', '2022-07-13', '12:30:00', '18:15:00', 'Institut Biast en face station OLA', 'visite.jpg', '2023-08-12 22:30:02', '2023-08-12 22:30:02'),
(2, 'PRÉSENTATION DES NOUVEAUX BACHELIERS', '2023-08-02', '10:00:00', '16:30:00', 'Institut Biast en face station OLA', 'presentation.jpg', '2023-08-12 22:36:55', '2023-08-12 22:36:55'),
(3, 'ÉPANOUISSEMENT DES ÉTUDIANTS DE L’INSTITUT BIAST', '2022-03-18', '12:30:00', '15:45:00', 'Institut Biast en face station OLA', 'biast.jpg', '2023-08-12 22:39:38', '2023-08-12 22:39:38'),
(4, 'EXPLICATION DES LEÇONS AUX ÉTUDIANTS DU GÉNIE CIVIL', '2023-06-14', '13:00:00', '16:00:00', 'Institut Biast en face station OLA', 'explication.jpg', '2023-08-12 22:41:35', '2023-08-12 22:41:35'),
(5, 'LA VISITE DU DOYEN DE DSCHANG ET SIGNATURE DES ACCORDS', '2023-08-15', '10:30:00', '17:30:00', 'Institut Biast en face station OLA', 'visite_doyen.jpg', '2023-08-18 14:06:47', '2023-08-18 14:06:47');

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
  `nbr_specialite` int(11) DEFAULT 0,
  `nbr_inscrits` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `filieres`
--

INSERT INTO `filieres` (`id`, `nom_filiere`, `description`, `createdAt`, `updatedAt`, `image_desc`, `nbr_specialite`, `nbr_inscrits`) VALUES
(1, 'Génie Electrique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-14 14:30:26', 'genie_electrique.jpg', 4, 5),
(2, 'Génie Civil', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-29 09:59:49', 'genie_civil.jpg', 4, 1),
(3, 'Génie Mécanique et Productique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'geni_mecanique.jpg', 5, 0),
(4, 'Génie Réseaux et télécommunications', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'telecom.jpg', 2, 0),
(5, 'Génie Informatique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-14 09:52:01', 'genie_informatique.jpg', 4, 1),
(6, 'Commerce et Vente', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'commerce_vente.jpeg', 2, 0),
(7, 'Gestion', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'management.jpg', 7, 0),
(8, 'Agriculture et Élevage', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'agriculture_elevage.jpg', 4, 0),
(9, 'Étude Médico-Sanitaire', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'etude_medico_sanitaire.jpg', 2, 0),
(10, 'Science et Techniques Biomedicale', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', '2023-08-01 13:03:47', '2023-08-01 13:03:47', 'science_biomedical.jpg', 2, 0);

-- --------------------------------------------------------

--
-- Structure de la table `specialites`
--

CREATE TABLE `specialites` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom_specialite` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `filiereId` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `specialites`
--

INSERT INTO `specialites` (`id`, `nom_specialite`, `description`, `filiereId`, `createdAt`, `updatedAt`) VALUES
(1, 'Électrotechnique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 1, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(2, 'Maintenance des Appareils Biomédicaux', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 1, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(3, 'Énergies Renouvelables', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 1, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(4, 'Instrumentation et régulation', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 1, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(5, 'Bâtiment', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 2, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(6, 'Travaux publics', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 2, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(7, 'Géomètre Topographe', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 2, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(8, 'Géotechnique et Géologie Appliquée', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 2, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(9, 'Mécatronique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 3, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(10, 'Fabrication Mécanique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 3, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(11, 'Construction Mécanique', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 3, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(12, 'Chaudrerie et Soudure', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 3, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(13, 'Maintenance des Systèmes Industriels', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 3, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(14, 'Télécommunication', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 4, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(15, 'Réseaux et Sécurité', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 4, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(16, 'Genie Logiciel', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 5, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(17, 'Infographie et Web Design', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 5, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(18, 'Maintenance des Systèmes Informatiques', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 5, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(19, 'Informatique Industrielle et Automatisme', 'Cras ultricies lacus consectetur, coectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 5, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(20, 'Commerce Internationnal', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 6, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(21, 'Marketing-Commerce-Vente', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 6, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(22, 'Assurance', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 7, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(23, 'Assistant Manager', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 7, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(24, 'Banque et Finances', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 7, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(25, 'Comptabilité et Gestion des Entreprises', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 7, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(26, 'Gestion des Ressources Humaines', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 7, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(27, 'Gestion Logistique et Transport', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 7, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(28, 'Gestion des Collectivite Territorialles', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 7, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(29, 'Production Végétales', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 8, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(30, 'Production Animale', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 8, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(31, 'Entreprenariat Agropastoral', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 8, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(32, 'Conseiller Agropastoral', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 8, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(33, 'Sage-Femmes', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 9, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(34, 'Sciences Infirmière', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 9, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(35, 'Technique de Laboratoire et analyse medicales', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 10, '2023-08-01 13:04:01', '2023-08-01 13:04:01'),
(36, 'Techniques Pharmaceutiques', 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', 10, '2023-08-01 13:04:01', '2023-08-01 13:04:01');

-- --------------------------------------------------------

--
-- Structure de la table `students`
--

CREATE TABLE `students` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `date_de_naissance` datetime NOT NULL,
  `lieu_de_naissance` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `numero_cni` varchar(255) DEFAULT NULL,
  `status_matrimoniale` varchar(255) DEFAULT NULL,
  `pays` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `departement` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `langue` varchar(255) DEFAULT NULL,
  `nbr_enfant` varchar(255) DEFAULT NULL,
  `code_postal` varchar(255) DEFAULT NULL,
  `emploi` varchar(255) DEFAULT NULL,
  `handicape` varchar(255) DEFAULT NULL,
  `nom_pere` varchar(255) DEFAULT NULL,
  `nom_mere` varchar(255) DEFAULT NULL,
  `addresse_pere` varchar(255) DEFAULT NULL,
  `addresse_mere` varchar(255) DEFAULT NULL,
  `profession_pere` varchar(255) DEFAULT NULL,
  `profession_mere` varchar(255) DEFAULT NULL,
  `dernier_ecole` varchar(255) DEFAULT NULL,
  `moyenne_bac` float DEFAULT NULL,
  `type_formation` varchar(255) DEFAULT NULL,
  `filiereId` int(10) UNSIGNED NOT NULL,
  `specialiteId` int(10) UNSIGNED NOT NULL,
  `photo_profil` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `students`
--

INSERT INTO `students` (`id`, `nom`, `prenom`, `date_de_naissance`, `lieu_de_naissance`, `email`, `telephone`, `numero_cni`, `status_matrimoniale`, `pays`, `region`, `departement`, `ville`, `sexe`, `langue`, `nbr_enfant`, `code_postal`, `emploi`, `handicape`, `nom_pere`, `nom_mere`, `addresse_pere`, `addresse_mere`, `profession_pere`, `profession_mere`, `dernier_ecole`, `moyenne_bac`, `type_formation`, `filiereId`, `specialiteId`, `photo_profil`, `createdAt`, `updatedAt`) VALUES
(1, 'FOTSING TCHIDE', 'Bernoulli Riemann', '1999-08-09 00:00:00', 'Bafoussam', 'fotsingriemann@gmail.com', '656697017', '100884416', 'Celibataire', 'Cameroon', 'Ouest', 'Mifi', 'Dschang', 'Masculin', 'francais', '0', '', 'Sans emploi', 'Oui', 'FOTSING TCHINDEU Emmanuel', 'FEUZING POPBOU Sidonie Lidouce', '691910953', '696510944', 'Enseignant', 'Menagere', 'Lycee classique de dschang', 14.83, 'Fondamentale', 1, 1, 'bernoulli.png', '2023-08-04 14:51:28', '2023-08-04 14:51:28'),
(2, 'Bernoulli Riemann', 'Fotsing Tchide', '1998-08-11 00:00:00', 'Bamendjou', 'fotstuuymann@gmail.com', '656697017', '1100354', 'Celibataire et 0 enfant en charge', 'Algeria', 'France', 'Noun', 'Dschang', 'Masculin', NULL, '0', '', 'Sans emploi', 'Oui', '', '', '', '', '', '', 'Lycee classique de dschang', 14.78, 'Fondamentale', 1, 1, '', '2023-08-11 11:21:40', '2023-08-11 11:21:40'),
(3, 'Bernoulli Riemann', 'Fotsing Tchide', '2023-08-15 00:00:00', 'Bafoussam', 'fotsingrinn@gmail.com', '656697017', '1100237', 'Celibataire et 0 enfant en charge', 'Algeria', 'France', 'Mifi', 'Dschang', 'Masculin', NULL, '0', '', 'Sans emploi', 'Oui', '', '', '', '', '', '', 'Lycee classique de dschang', 14.78, 'Technique', 1, 1, 'bernoulli.png', '2023-08-11 12:54:19', '2023-08-11 12:54:19'),
(4, 'Archine', 'Prop', '2023-08-10 00:00:00', 'Bamendjou', 'fotsinemann@gmail.com', '+237656697017', '1100278', 'Celibataire et 0 enfant en charge', 'Cameroon', 'Ouest ', 'Mifi', 'Dschang', 'Masculin', NULL, '0', '', 'Sans emploi', 'Non', 'Fotsing ', 'Thdjd', 'Ysjid', 'Jfkfj', 'Jddj', 'Jdudj', 'Lycee classique de dschang', 14.83, 'Fondamentale', 1, 1, '', '2023-08-14 09:45:12', '2023-08-14 09:45:12'),
(5, 'Bernoulli Riemann', 'Fotsing Tchide', '1998-08-14 00:00:00', 'Bafoussam', 'Telestin@gmail.com', '656697017', '11002789', 'Celibataire et 0 enfant en charge', 'Cameroon', 'France', 'Mifi', 'Dschang', 'Masculin', NULL, '0', '', 'Sans emploi', 'Oui', '', '', '', '', '', '', 'Lycee classique de dschang', 14.78, 'Fondamentale', 5, 5, '', '2023-08-14 09:52:00', '2023-08-14 09:52:00'),
(6, 'Fopa', 'Kuete', '1999-08-09 00:00:00', 'Bafoussam', 'fopa@gmail.com', '656697017', '1100289', 'Celibataire et 0 enfant en charge', 'Cameroon', 'Ouest', 'Mifi', 'Dschang', 'Masculin', NULL, '0', '', 'Sans emploi', 'Non', '', '', '', '', '', '', 'Lycee classique de dschang', 14.83, 'Fondamentale', 1, 1, 'agriculture_elevage.jpg', '2023-08-14 14:30:25', '2023-08-16 08:31:31'),
(7, 'Tsamo', 'Pascal Junior', '2023-08-29 00:00:00', 'Bafoussam', 'tsamopascal@gmaol.com', '678744536', '1234567', 'Marie', 'Cameroon', 'Ouest', 'Mifi', 'Bafoussam', 'Masculin', NULL, '0', '99322', 'Sans emploi', 'Oui', 'Tsamo pascal', 'Pascaline', 'Dschang', 'Dschang', 'Enseignant', 'Menagere', 'Lycee classique de dschang', 13, 'Technique', 2, 2, NULL, '2023-08-29 09:59:49', '2023-08-29 09:59:49');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `studentId` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `studentId`, `createdAt`, `updatedAt`) VALUES
(2, 'PBFqFM17', '$2b$10$LDwcPUzHG/lrCPh/zEXYa.owGNoUup6Kn6odIRv3ZztPUqGUH6cZS', 1, '2023-08-08 08:49:11', '2023-08-10 13:01:54'),
(3, '0cgYnxwF', '$2b$10$lpFc.8Hf/uUeDxOadaxo3uW05Fa6ALL/3.rSTaNZX0Ti7K2sGTD4u', 2, '2023-08-11 11:21:41', '2023-08-11 11:21:41'),
(4, 'MWK2w1DN', '$2b$10$X/cY/iEolYwgugBpwy6wTeYfpPiRv0P4TzE3qW4TfT/eHI7t1WOTm', 3, '2023-08-11 12:54:19', '2023-08-11 12:54:19'),
(5, '0abRE8JJ', '$2b$10$.6xsCtHZQ6DjZ0bvKl9jP.UVb51bmzg.CYSAmyCOTAYkHR.46jFCO', 4, '2023-08-14 09:45:13', '2023-08-14 09:45:13'),
(6, 'vTt86499', '$2b$10$U/hLI4MArlQ.roK4URSa3elWBd71phImKmHAttyNlcYy9d/E855R6', 5, '2023-08-14 09:52:01', '2023-08-14 09:52:01'),
(7, 'wVI1i1hi', '$2b$10$sJrdyKoYc3UePDqqBSCMxOXvdTjoEJDNG.NNA8I9YhEFsWqpaOJyi', 6, '2023-08-14 14:30:26', '2023-08-14 14:30:26'),
(8, 'Mb04X76e', '$2b$10$PIVNbfAg0Okv2gzr31gQ2eS7ilnrAwelQcYIpsOQ7PtOIOOs504zC', 7, '2023-08-29 09:59:49', '2023-08-29 09:59:49');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `credentials`
--
ALTER TABLE `credentials`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `filieres`
--
ALTER TABLE `filieres`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `specialites`
--
ALTER TABLE `specialites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `filiereId` (`filiereId`);

--
-- Index pour la table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `filiereId` (`filiereId`),
  ADD KEY `specialiteId` (`specialiteId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `studentId` (`studentId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `credentials`
--
ALTER TABLE `credentials`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `filieres`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `specialites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

ALTER TABLE `students`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `specialites`
--
ALTER TABLE `specialites`
  ADD CONSTRAINT `specialites_ibfk_1` FOREIGN KEY (`filiereId`) REFERENCES `filieres` (`id`);

ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`filiereId`) REFERENCES `filieres` (`id`),
  ADD CONSTRAINT `students_ibfk_2` FOREIGN KEY (`specialiteId`) REFERENCES `specialites` (`id`);

ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `students` (`id`);
COMMIT;

