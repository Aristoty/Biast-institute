


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}

const data = [
  {dataValues :{id:1, nom_specialite:'Electrotechnique', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:1}},
  {dataValues :{id:2, nom_specialite:'Maintenance des Appareils Biomedicaux', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.',filiereId: 1}},
  {dataValues :{id:3, nom_specialite:'Energies Renouvelables', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:1}},
  {dataValues :{id:4, nom_specialite:'Instrumentation et regulation', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:1}},
  {dataValues :{id:5, nom_specialite:'Batiment', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:2}},
  {dataValues :{id:6, nom_specialite:'Traveaux publics', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.',filiereId: 2}},
  {dataValues :{id:7, nom_specialite:'Geometre Topographe', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.',filiereId: 2}},
  {dataValues :{id:8, nom_specialite:'Geotechnique et Geologie Appliquee',description: 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.',filiereId: 2}},
  {dataValues :{id:9, nom_specialite:'Mecatronique', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:3}},
  {dataValues :{id:10, nom_specialite:'Fabrication Mecanique', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:3}},
  {dataValues :{id:11, nom_specialite:'Construction Mecanique', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:3}},
  {dataValues :{id:12, nom_specialite:'Chaudrerie et Soudure', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:3}},
  {dataValues :{id:13, nom_specialite:'Maintenance des Systemes Industriels', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.',filiereId: 3}},
  {dataValues :{id:14, nom_specialite:'Telecommunication', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:4}},
  {dataValues :{id:15, nom_specialite:'Reseaux et Securite', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:4}},
  {dataValues :{id:16, nom_specialite:'Genie Logiciel', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:5}},
  {dataValues :{id:17, nom_specialite:'Infographie et Web Design', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.',filiereId: 5}},
  {dataValues :{id:18, nom_specialite:'Maintenance des Systemes Informatiques', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.',filiereId: 5}},
  {dataValues :{id:19, nom_specialite:'Informatique Industrielle et Automatisme', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:5}},
  {dataValues :{id:20, nom_specialite:'Commerce Internationnal',description: 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:6}},
  {dataValues :{id:21, nom_specialite:'Marqueting-Commerce-Vente', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.',filiereId: 6}},
  {dataValues :{id:22, nom_specialite:'Assurance', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:7}},
  {dataValues :{id:23, nom_specialite:'Assistant Manager', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:7}},
  {dataValues :{id:24, nom_specialite:'Banque et Finances', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:7}},
  {dataValues :{id:25, nom_specialite:'Comptabilite et Gestion des Entreprises', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:7}},
  {dataValues :{id:26, nom_specialite:'Gestion des Ressources Humaines',description: 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:7}},
  {dataValues :{id:27, nom_specialite:'Gestion Logistique et Transport', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:7}},
  {dataValues :{id:28, nom_specialite:'Gestion des Collectivite Territorialles', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:7}},
  {dataValues :{id:29, nom_specialite:'Production Vegetale', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:8}},
  {dataValues :{id:30, nom_specialite:'Production Animale', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:8}},
  {dataValues :{id:31, nom_specialite:'Entreprenariat Agropastoral', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:8}},
  {dataValues :{id:32, nom_specialite:'Conseiller Agropastoral', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:8}},
  {dataValues :{id:33, nom_specialite:'Sage-Femmes', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:9}},
  {dataValues :{id:34, nom_specialite:'Sciences Infirmiere', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:9}},
  {dataValues :{id:35, nom_specialite:'Technique de Laboratoire et d\'analyse medicales', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:10}},
  {dataValues :{id:36, nom_specialite:'Techniques Pharmaceutiques', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.', filiereId:10}}
  
  ]


const language = document.querySelector('#language')


language.addEventListener("change", (e) => {
    let url = window.location.href; 
    url = url.replace("&lang=en", "")
    url = url.replace("&lang=fr", "")
    url = url.replace("?lang=en", "")
    url = url.replace("?lang=fr", "")
    if(url.indexOf('?') > -1)  {
      window.location.href = `${url}&lang=${e.target.value}`;
    }else{
      window.location.href = `${url}?lang=${e.target.value}`;
    }
    
})

const verify = (table, item) => {
  for(let i = 0; i<table.length; i++){
    if(table[i] == item){
      return true
    }
  }
  return false
}