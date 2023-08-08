const axios = require('axios')
const { sequelize } = require('./../sequelize')
const { Student, User, Filiere, Specialite, Credential } = require('./../models/homeModel')
const bcrypt = require('bcrypt')
const countries = require('../data/countries.json')


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
    if(req.session.idUser){
        const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : req.session.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
     })  
     return res.render('home', {path:req.path,detail: true,ifConnected: req.session.idUser,etudiant:etudiant})
    }

        res.render('home', {path:req.path,detail: true,ifConnected: req.session.idUser,etudiant:null})
}

const aboutView = (req, res, next) => {
    res.render('about', {path:req.path, detail: false,ifConnected: req.session.idUser})
}

const coursesView = (req, res, next) => {
    res.render('courses', {path:req.path, detail: false,ifConnected: req.session.idUser})
}

const eventView = (req, res, next) => {
    res.render('events', {path:req.path, detail: false,ifConnected: req.session.idUser})
}

const connexionView = (req, res, next) => {
    
    res.render('connexion', {path:req.path, detail: false, message:'',ifConnected: req.session.idUser})
    
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
                req.session.idUser = user.dataValues.id
                res.redirect("/personalPage")
            
                
            }else{
                console.log("Mot de passe Incorect")
                res.render('connexion',{path:req.path, detail: false,message:"Mot de password invalide",ifConnected: req.session.idUser})
            }  
        }else{
          
            res.render('connexion',{path:req.path, detail: false,message:"L'utilisateur N'existe pas veillez vous inscrire",ifConnected: req.session.idUser})
        }          
        
    }
}

const inscrptionView = (req, res, next) => {
    res.render('inscription', {path:req.path, detail: false,countries:Object.values(countries),filiere:filiere,ifConnected: req.session.idUser,message:'',modifier:false})
}

const contactView = (req, res, next) => {
    res.render('contact', {path:req.path,detail: false,ifConnected: req.session.idUser})
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
        return res.render('inscription', {path:req.path, detail: false,countries:Object.values(countries),filiere:filiere,ifConnected: req.session.idUser,message:"Ce numero de CNI a deja ete utiliser",modifier:false})  
    }

    if(student_by_email){
        return res.render('inscription', {path:req.path, detail: false,countries:Object.values(countries),filiere:filiere,ifConnected: req.session.idUser,message:"Cet Email a deja ete utiliser", modifier:false})  
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
            
      
  
    res.render('after_inscription',{credential:mycredentials, surname:responce.prenom, name:responce.nom,path:req.path, detail: false,ifConnected: req.session.idUser})
}

const mesInfos = async (req, res, next) => {
    const etudiant =  await Student.findOne({
        where : {id : await User.findOne({
            where: {id : req.session.idUser}
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
    res.render("personalPage", {specialite:specialite,filiere:filiere, etudiant : etudiant,detail: false,path:req.path,ifConnected: req.session.idUser,page:1,message:''})

}


const ficheInscription = async (req, res, next) => {
    const etudiant =  await Student.findOne({
        where : {id : await User.findOne({
            where: {id : req.session.idUser}
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

    res.render("fiche",{filiere:filiere,specialite:specialite,etudiant : etudiant,detail: false,path:req.path,ifConnected: req.session.idUser,page:0,message:''})
}


const coursesDetailView = (req, res, next) => {
    res.render('coursesDetails', {
        title: 'name',
        detail: false,
        path:req.path,
        ifConnected: req.session.idUser
    })
}

const eventsDetailView = (req, res, next) => {
    let name = req.params.name
    console.log(name)
    res.render('eventsDetails', {
        title: 'name',
        detail: false,
        path:req.path,
        ifConnected: req.session.idUser
    })
}


const getSpecialityByFK = (req, res, next) => {
    res.send(specialites)
}

const protectionRoute = (req, res, next) => {
    if(!req.session.idUser){
        res.redirect('/connexion')
    }else{
        next()
    }
}

const deconnexion = (req, res, next) => {
    req.session.destroy((err) => {
        if(err){
            return res.render("connexion")
        }
        res.clearCookie(process.env.SESSION_NAME)
        return res.redirect("/connexion")
    })
}

const personalPage = async (req, res, next) => {
     const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : req.session.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
     })  

    res.render("personalPage", {etudiant : etudiant,detail: false,path:req.path,ifConnected: req.session.idUser,page:0,message:''})
}

const modifierInfos = async (req, res, next) => {
    const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : req.session.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
    })
    return res.render('inscription', {path:req.path, detail: false,etudiant:etudiant,countries:Object.values(countries),specialites:specialites,filiere:filiere,ifConnected: req.session.idUser,message:'', modifier:true})  


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
            where: {id : req.session.idUser}
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
                where: {id : req.session.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
    })





    res.render("personalPage", {specialite:null,filiere:filiere, etudiant : etudiant,detail: false,path:req.path,ifConnected: req.session.idUser,page:2,message:''})

}

const modifPhoto = async (req, res, next) => {
   
    const etudiant =  await Student.findOne({
            where : {id : await User.findOne({
                where: {id : req.session.idUser}
            }).then(
                res => {
                    return res.dataValues.studentId
                }
            )
        }
    })

    res.render("personalPage", {specialite:null,filiere:filiere, etudiant : etudiant,detail: false,path:req.path,ifConnected: req.session.idUser,page:3,message:''})

}

const modifPhotoTraitement = async (req, res, next) => {
    const etudiant =  await Student.findOne({
        where : {id : await User.findOne({
                where: {id : req.session.idUser}
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

    return res.render("personalPage", {specialite:null,filiere:filiere, etudiant : etudiant,detail: false,path:req.path,ifConnected: req.session.idUser,page:0, message:""})

}

const modifPasswordTraitement = async (req, res, next) => {
    const etudiant =  await Student.findOne({
        where : {id : await User.findOne({
            where: {id : req.session.idUser}
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
            return res.render("personalPage", {specialite:null,filiere:filiere, etudiant : etudiant,detail: false,path:req.path,ifConnected: req.session.idUser,page:2, message:"Le mot nouveau de passe doit etre similaire a la confirmation"})
        }

        const user = await User.findOne({
            where : {id : req.session.idUser}
        })

        const comp = await comparePassword(ancien,user.dataValues.password)
        if(!comp){
            return res.render("personalPage", {specialite:null,filiere:filiere, etudiant : etudiant,detail: false,path:req.path,ifConnected: req.session.idUser,page:2, message:"Cet ancien mot de passe est incorrect"})
        }
           
        await User.update(
            {
                password : await hashPassword(nouveau),
            },
            {
                where : {
                    id: req.session.idUser
                }
            }

        )

        return res.render("personalPage", {specialite:null,filiere:filiere, etudiant : etudiant,detail: false,path:req.path,ifConnected: req.session.idUser,page:0, message:""})

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