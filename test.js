const {sequelize} = require('./sequelize')
const { Filiere, Specialite } = require("./models/homeModel");

// sequelize.sync().then(() => {
//     Filiere.bulkCreate([
//         {
//             nom_filiere: "Géni Electrique",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//         {
//             nom_filiere: "Géni Civil",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//         {
//             nom_filiere: "Géni Mécanique et Productique",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//         {
//             nom_filiere: "Réseaux et télécommuications",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//         {
//             nom_filiere: "Géni Informatique",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//         {
//             nom_filiere: "Commerce et Vente",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//         {
//             nom_filiere: "Gestion",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//         {
//             nom_filiere: "Agriculture et Elevage",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//         {
//             nom_filiere: "Etude Medico-Sanitaire",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//         {
//             nom_filiere: "Science et Techniques Biomedicale",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//         },
//     ]).then(res => {
//             console.log(res)
//         }).catch((error) => {
//             console.error('Failed to create a new record : ', error);
//         });
    
//  })

// sequelize.sync().then(() => {
//     Specialite.bulkCreate([
//         {
//             nom_specialite: "Electrotechnique",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 1
//         },
//         {
//             nom_specialite: "Maintenance des Appareils Biomedicaux",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 1
//         },
//         {
//             nom_specialite: "Energies Renouvelables",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 1
//         },
//         {
//             nom_specialite: "Instrumentation et regulation",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 1
//         },
//         {
//             nom_specialite: "Batiment",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 2
//         },
//         {
//             nom_specialite: "Traveaux publics",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 2
//         },
//         {
//             nom_specialite: "Geometre Topographe",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 2
//         },
//         {
//             nom_specialite: "Geotechnique et Geologie Appliquee",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 2
//         },
//         {
//             nom_specialite: "Mecatronique",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 3
//         },
//         {
//             nom_specialite: "Fabrication Mecanique",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 3
//         },
//         {
//             nom_specialite: "Construction Mecanique",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 3
//         },
//         {
//             nom_specialite: "Chaudrerie et Soudure",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 3
//         },
//         {
//             nom_specialite: "Maintenance des Systemes Industriels",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 3
//         },
//         {
//             nom_specialite: "Telecommunication",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 4
//         },
//         {
//             nom_specialite: "Reseaux et Securite",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 4
//         },
//         {
//             nom_specialite: "Genie Logiciel",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 5
//         },
//         {
//             nom_specialite: "Infographie et Web Design",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 5
//         },
//         {
//             nom_specialite: "Maintenance des Systemes Informatiques",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 5
//         },
//         {
//             nom_specialite: "Informatique Industrielle et Automatisme",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 5
//         },
//         {
//             nom_specialite: "Commerce Internationnal",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 6
//         },
//         {
//             nom_specialite: "Marqueting-Commerce-Vente",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 6
//         },
//         {
//             nom_specialite: "Assurance",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 7
//         },
//         {
//             nom_specialite: "Assistant Manager",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 7
//         },
//         {
//             nom_specialite: "Banque et Finances",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 7
//         },
//         {
//             nom_specialite: "Comptabilite et Gestion des Entreprises",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 7
//         },
//         {
//             nom_specialite: "Gestion des Ressources Humaines",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 7
//         },
//         {
//             nom_specialite: "Gestion Logistique et Transport",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 7
//         },
//         {
//             nom_specialite: "Gestion des Collectivite Territorialles",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 7
//         },
//         {
//             nom_specialite: "Production Vegetale",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 8
//         },
//         {
//             nom_specialite: "Production Animale",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 8
//         },
//         {
//             nom_specialite: "Entreprenariat Agropastoral",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 8
//         },
//         {
//             nom_specialite: "Conseiller Agropastoral",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 8
//         },
//         {
//             nom_specialite: "Sage-Femmes",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 9
//         },
//         {
//             nom_specialite: "Sciences Infirmiere",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 9
//         },
//         {
//             nom_specialite: "Technique de Laboratoire et d'analyse medicales",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 10
//         },
//         {
//             nom_specialite: "Techniques Pharmaceutiques",
//             description: "Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.",
//             filiereId: 10
//         },
//     ]).then(res => {
//             console.log(res)
//         }).catch((error) => {
//             console.error('Failed to create a new record : ', error);
//         });
    
//  })