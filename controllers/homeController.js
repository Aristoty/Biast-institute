const axios = require('axios')
const { sequelize } = require('./../sequelize')
const { Student, User, Filiere, Specialite, Credential } = require('./../models/homeModel')
const bcrypt = require('bcrypt')
const countries = require('../data/countries.json')
const jwt = require('jsonwebtoken')

const my_filieres = [
    {dataValues : {id:1, nom_filiere:'Géni Electrique',description: 'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}},
    {dataValues : {id:2, nom_filiere:'Géni Civil', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}},
    {dataValues : {id:3, nom_filiere:'Géni Mécanique et Productique', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}},
    {dataValues : {id:4, nom_filiere:'Réseaux et télécommuications', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}},
    {dataValues : {id:5, nom_filiere:'Géni Informatique', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}},
    {dataValues : {id:6, nom_filiere:'Commerce et Vente', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}},
    {dataValues : {id:7, nom_filiere:'Gestion', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}},
    {dataValues : {id:8, nom_filiere:'Agriculture et Elevage', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}},
    {dataValues : {id:9, nom_filiere:'Etude Medico-Sanitaire', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}},
    {dataValues : {id:10,nom_filiere:'Science et Techniques Biomedicale', description:'Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a Nullam augue augue.'}}
]

const my_specialites = [
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



var filiere = null
var specialites = null
var credential = null

const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}

async function getCredentials() {
    credential = await Credential.findAll().then(res => {
        return Object.values(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    })
}

async function getFiliere() {
    filiere = await Filiere.findAll().then(res => {
        return res
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    })
}

async function getSpecialities() {
    specialites = await Specialite.findAll().then(res => {
        return res
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    })
}

function generationAleatoireLoginPass(){
    let Login = generateRandomString(8)
    let Password = generateRandomString(6)
    let newcredentials = {Login:Login, Password:Password}

    return newcredentials
   
    }

async function hashPassword(plaintextPassword) {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    return hash
}

async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

getCredentials()
getFiliere()
getSpecialities()

    
const indexView = async (req, res, next) => {
    if(req.query.token){
        const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
     })  
     return res.render('home', {path:req.path,detail: true,user: res.locals.user,etudiant:etudiant})
    }

        res.render('home', {path:req.path,detail: true,user:null,etudiant:null})
}

const aboutView = async(req, res, next) => {
    if(req.query.token){
        const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
     })  
        return res.render('about', {etuduant:etudiant,path:req.path, detail: false,user: res.locals.user})
    }
    res.render('about', {path:req.path, detail: false,user: null})
}

    

const coursesView = async(req, res, next) => {
    if(req.query.token){
        const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
     })  
        return res.render('courses', {etudiant:etudiant,path:req.path, detail: false,user:res.locals.user})
    }
    res.render('courses', {path:req.path, detail: false,user:null})
}

const eventView = async(req, res, next) => {
    if(req.query.token){
        const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
     })  
        return res.render('events', {etudiant:etudiant,path:req.path, detail: false,user:res.locals.user})
    }
    res.render('events', {path:req.path, detail: false,user:null})
}

const connexionView = (req, res, next) => {
    if(req.query.token){
        return res.render('connexion', {path:req.path, detail: false, message:'',user: res.locals.user})
    }
    res.render('connexion', {path:req.path, detail: false, message:'',user: null})
    
    
}

const loginTraitement = async (req, res, next) => {
    const { login, password } = req.body
    console.log(password)
    if(login && password){
        const user = await User.findOne({
            where : {login : login}
        })
        if(user){
            const comp = await comparePassword(password,user.dataValues.password)
            if(comp){
                const token = jwt.sign({
                    idUser : user.dataValues.id,
                    login: user.dataValues.login,
                }, process.env.TOKEN_KEY)
                
                user.token = token
                // res.locals.user = user

                res.redirect(`/personalPage?token=${user.token}`)

           
                
            }else{
                console.log("Mot de passe Incorect")
                return res.render('connexion',{path:req.path, detail: false,message:"Mot de password invalide",user: null})
            }  
        }else{
          
            return res.render('connexion',{path:req.path, detail: false,message:"L'utilisateur N'existe pas veillez vous inscrire",user: null})
        }          
        
    }
}

const inscrptionView = (req, res, next) => {
    if(req.query.token){
        return  res.render('inscription', {specialites:specialites,path:req.path, detail: false,countries:Object.values(countries),filiere:my_filieres,user:res.locals.user,message:'',modifier:false})
   
    }
    res.render('inscription', {specialites:specialites,path:req.path, detail: false,countries:Object.values(countries),filiere:my_filieres,user:null,message:'',modifier:false})
}

const contactView = async(req, res, next) => {
    if(req.query.token){
        const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
     })  
        return res.render('contact', {path:req.path,detail: false,user:res.locals.user})
    }
    res.render('contact', {path:req.path,detail: false,user: null})
}

const TraitementInscription = async (req, res, next) => {
    let responce = req.body
    console.log(responce.image)
    const student_by_cni = await Student.findOne({
        where : {
            numero_cni : responce.numero_cni
        }
    })

    const student_by_email = await Student.findOne({
        where : {
            email : responce.email
        }
    })

    if(student_by_cni){
        return res.render('inscription', {specialites:my_specialites,path:req.path, detail: false,countries:Object.values(countries),filiere:my_filieres,user:null,message:"Ce numero de CNI a deja ete utiliser",modifier:false})  
    }

    if(student_by_email){
        return res.render('inscription', {specialites:my_specialites,path:req.path, detail: false,countries:Object.values(countries),filiere:my_filieres,user:null,message:"Cet Email a deja ete utiliser", modifier:false})  
    }

    Student.sync().then(() => {
        Student.create(
            {
                nom:responce.nom,
                prenom: responce.prenom,
                date_de_naissance: responce.date,
                lieu_de_naissance: responce.lieu,
                email: responce.email,
                telephone: responce.telephone,
                numero_cni: responce.numero_cni,
                status_matrimoniale: responce.status_matrimonial,
                pays: responce.pays,
                region: responce.region,
                departement: responce.departement,
                ville: responce.ville,
                sexe: responce.sexe,
                language:responce.language,
                nbr_enfant:responce.enfant,
                code_postal:responce.code,
                emploi:responce.situation,
                handicape:responce.handicape,
                nom_pere: responce.nom_pere,
                nom_mere: responce.nom_mere,
                addresse_pere: responce.addr_pere,
                addresse_mere: responce.addr_mere,
                profession_pere: responce.prof_pere,
                profession_mere: responce.prof_mere,
                dernier_ecole: responce.dernEtab,
                moyenne_bac: responce.moyenne_bac,
                type_formation: responce.type_form,
                filiereId: responce.filiere,
                specialiteId: responce.specialite,
                photo_profil: responce.test
            },
        
            ).then(res => {
                console.log(res)
            }).catch((error) => {
                console.error('Failed to create a new record : ', error);
            });
     })


    let mycredentials = generationAleatoireLoginPass()
        Credential.create({
            login : mycredentials.Login,
            password : await hashPassword(mycredentials.Password),
            numero_cni : responce.numero_cni,
            email : responce.email,
            nom : responce.nom
        })
        User.create(
            {
                login:mycredentials.Login,
                password: await hashPassword(mycredentials.Password),  
                studentId: await Student.findOne({
                    where : {nom:responce.nom, email:responce.email}
                }).then(res => {
                    return res.dataValues.id
                }).catch((error) => {
                    console.error('Failed to retrieve data : ', error);
                })
            },
        
            ).then(res => {
                console.log(res)
            }).catch((error) => {
                console.error('Failed to create a new record : ', error);
            });
            
      
  
    res.render('after_inscription',{specialites:my_specialites,credential:mycredentials, surname:responce.prenom, name:responce.nom,path:req.path, detail: false,user:null})
}

const mesInfos = async (req, res, next) => {
    const etudiant =  await Student.findOne({
        where : {id : await User.findOne({
            where: {id : res.locals.user.idUser}
        }).then(
            res => {
                return res.dataValues.studentId
            }
        )
    }
 })  

 const filiere = await Filiere.findOne({
   where : { id: etudiant.dataValues.filiereId}
 }).then(
    res => {
        return res.dataValues.nom_filiere
    }
 )

 const specialite = await Specialite.findOne({
    where : { id: etudiant.dataValues.specialiteId}
  }).then(
     res => {
         return res.dataValues.nom_specialite
     }
  )
    res.render("personalPage", {specialite:specialite,filiere:my_filieres, etudiant : etudiant,detail: false,path:req.path,user:res.locals.user,page:1,message:''})

}


const ficheInscription = async (req, res, next) => {
    const etudiant =  await Student.findOne({
        where : {id : await User.findOne({
            where: {id : res.locals.user.idUser}
        }).then(
            res => {
                return res.dataValues.studentId
            }
        )
    }
 })  
 const filiere = await Filiere.findOne({
    where : { id: etudiant.dataValues.filiereId}
  }).then(
     res => {
         return res.dataValues.nom_filiere
     }
  )
 
  const specialite = await Specialite.findOne({
     where : { id: etudiant.dataValues.specialiteId}
   }).then(
      res => {
          return res.dataValues.nom_specialite
      }
   )

    res.render("fiche",{filiere:my_filieres,specialite:specialite,etudiant : etudiant,detail: false,path:req.path,user:res.locals.user,page:0,message:''})
}


const coursesDetailView = (req, res, next) => {
    if(req.query.token){
        return res.render('coursesDetails', {title: 'name',detail: false,path:req.path,user:res.locals.user})
    }
    res.render('coursesDetails', {title: 'name',detail: false,path:req.path,user:null})
}

const eventsDetailView = async (req, res, next) => {
    if(req.query.token){
       
        return res.render('eventsDetails', {title: 'name',detail: false,path:req.path,user:res.locals.user})
    }
    
    res.render('eventsDetails', {title: 'name',detail: false,path:req.path,user:null})
}


const getSpecialityByFK = (req, res, next) => {
    res.send(my_specialites)
}

const protectionRoute = (req, res, next) => {
    const token = req.query.token
    if(token){
        jwt.verify(token, process.env.TOKEN_KEY,(err, user) => {
            if(err){
                return res.redirect('/connexion')
            }
            next()
        })
    }else{
        return res.redirect('/connexion')
    }
}

const deconnexion = (req, res, next) => {
   res.locals.user = undefined
   return res.redirect('/connexion')
}

const personalPage = async (req, res, next) => {
     const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
     })  

    res.render("personalPage", {etudiant : etudiant,detail: false,path:req.path,user:res.locals.user,page:0,message:''})
}

const modifierInfos = async (req, res, next) => {
    const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
    })
    return res.render('inscription', {path:req.path, detail: false,etudiant:etudiant,countries:Object.values(countries),specialites:specialites,filiere:my_filieres,user:res.locals.user,message:'', modifier:true})  


}

const updateInscription = async (req, res, next) => {
    responce = req.body
    await Student.update(
        {
            nom:responce.nom,
            prenom: responce.prenom,
            date_de_naissance: responce.date,
            lieu_de_naissance: responce.lieu,
            email: responce.email,
            telephone: responce.telephone,
            numero_cni: responce.numero_cni,
            status_matrimoniale: responce.status_matrimonial,
            pays: responce.pays,
            region: responce.region,
            departement: responce.departement,
            ville: responce.ville,
            sexe: responce.sexe,
            language:responce.language,
            nbr_enfant:responce.enfant,
            code_postal:responce.code,
            emploi:responce.situation,
            handicape:responce.handicape,
            nom_pere: responce.nom_pere,
            nom_mere: responce.nom_mere,
            addresse_pere: responce.addr_pere,
            addresse_mere: responce.addr_mere,
            profession_pere: responce.prof_pere,
            profession_mere: responce.prof_mere,
            dernier_ecole: responce.dernEtab,
            moyenne_bac: responce.moyenne_bac,
            type_formation: responce.type_form,
            filiereId: responce.filiere,
            specialiteId: responce.specialite,
        },
        {
          where: {id : await User.findOne({
            where: {id : res.locals.user.idUser}
                }).then(
                    res => {
                        return res.dataValues.studentId
                    }
                )
            }
        }
      );
      
}

const modifPassword = async (req, res, next) => {
    const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
    })

    res.render("personalPage", {specialite:null,filiere:my_filieres, etudiant : etudiant,detail: false,path:req.path,user:res.locals.user,page:2,message:''})

}

const modifPhoto = async (req, res, next) => {
   
    const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
    })

    res.render("personalPage", {specialite:null,filiere:my_filieres, etudiant : etudiant,detail: false,path:req.path,user:res.locals.user,page:3,message:''})

}

const modifPhotoTraitement = async (req, res, next) => {
    const etudiant =  await Student.findOne({
        where : {id : await User.findOne({
                where: {id : res.locals.user.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
    })

    const { test } = req.body
    if( test ){
        await Student.update(
            {
                photo_profil : test
            },
            {
                where : {
                    id: etudiant.dataValues.id
                }
            }
        )
    }

    return res.render("personalPage", {specialite:null,filiere:my_filieres, etudiant : etudiant,detail: false,path:req.path,user:res.locals.user,page:0, message:""})

}

const modifPasswordTraitement = async (req, res, next) => {
    const etudiant =  await Student.findOne({
        where : {id : await User.findOne({
            where: {id : res.locals.user.idUser}
        }).then(
            res => {
                return res.dataValues.studentId
            }
        )
    }
  })

    const {ancien, nouveau, confirm} = req.body
    if(ancien && nouveau && confirm){
        if(nouveau != confirm){
            return res.render("personalPage", {specialite:null,filiere:my_filieres, etudiant : etudiant,detail: false,path:req.path,user: res.locals.user,page:2, message:"Le mot nouveau de passe doit etre similaire a la confirmation"})
        }

        const user = await User.findOne({
            where : {id : res.locals.user.idUser}
        })

        const comp = await comparePassword(ancien,user.dataValues.password)
        if(!comp){
            return res.render("personalPage", {specialite:null,filiere:my_filieres, etudiant : etudiant,detail: false,path:req.path,user: res.locals.user,page:2, message:"Cet ancien mot de passe est incorrect"})
        }
           
        await User.update(
            {
                password : await hashPassword(nouveau),
            },
            {
                where : {
                    id: res.locals.user.idUser
                }
            }

        )

        return res.render("personalPage", {specialite:null,filiere:my_filieres, etudiant : etudiant,detail: false,path:req.path,user: res.locals.user,page:0, message:""})

    }

}

module.exports = {
    indexView,
    aboutView,
    coursesView,
    eventView,
    contactView,
    connexionView,
    inscrptionView,
    coursesDetailView,
    eventsDetailView,
    getSpecialityByFK,
    TraitementInscription,
    protectionRoute,
    loginTraitement,
    deconnexion,
    personalPage,
    mesInfos,
    ficheInscription,
    modifierInfos,
    updateInscription,
    modifPassword,
    modifPhoto,
    modifPasswordTraitement,
    modifPhotoTraitement
}