const axios = require('axios')
const { sequelize } = require('./../sequelize')
const { Event, Student, User, Filiere, Specialite, Credential } = require('./../models/homeModel')
const bcrypt = require('bcrypt')
const countries = require('../data/countries.json')
const jwt = require('jsonwebtoken')
const my_filieres = require('../data/filieres.json')
const my_specialites = require('../data/specialites.json')
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
    // i18n.setLocale(req, req.headers['en'])
    const events = await Event.findAll().then(res => {
        return res
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    })

    const courses = await Filiere.findAll().then(res => {
        return res
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    })

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
     return res.render('home', {events:events,filiere:courses,path:req.path,detail: true,user: res.locals.user,etudiant:etudiant})
    }

        res.render('home', {translate:res.__,events:events,filiere:courses,path:req.path,detail: true,user:null,etudiant:null})
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
    res.render('about', {translate:res.__,path:req.path, detail: false,user: null})
}

    

const coursesView = async(req, res, next) => {

    const coures = await Filiere.findAll().then(res => {
        return res
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    })

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
        return res.render('courses', {filiere:coures,etudiant:etudiant,path:req.path, detail: false,user:res.locals.user})
    }
    res.render('courses', {filiere:coures,path:req.path, detail: false,user:null})
}

const eventView = async(req, res, next) => {
    const events = await Event.findAll().then(res => {
        return res
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    })

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
        return res.render('events', {events:events,etudiant:etudiant,path:req.path, detail: false,user:res.locals.user})
    }
    res.render('events', {events:events,path:req.path, detail: false,user:null})
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
        return  res.render('inscription', {specialites:my_specialites,path:req.path, detail: false,countries:Object.values(countries),filiere:my_filieres,user:res.locals.user,message:'',modifier:false})
   
    }
    res.render('inscription', {translate:res.__,specialites:my_specialites,path:req.path, detail: false,countries:Object.values(countries),filiere:my_filieres,user:null,message:'',modifier:false})
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

    // Student.sync().then(() => {
        await Student.create(
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
    //  })


    let mycredentials = generationAleatoireLoginPass()
        await Credential.create({
            login : mycredentials.Login,
            password : await hashPassword(mycredentials.Password),
            numero_cni : responce.numero_cni,
            email : responce.email,
            nom : responce.nom
        })

        const studentid = await Student.findOne({
            where : {nom:responce.nom, email:responce.email}
        }).then(res => {
            return res.dataValues.id
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        })

        if(studentid){
           await User.create(
                {
                    login:mycredentials.Login,
                    password: await hashPassword(mycredentials.Password),  
                    studentId: studentid
                },
            
                ).then(res => {
                    console.log(res)
                }).catch((error) => {
                    console.error('Failed to create a new record : ', error);
                });


                let nbr_inscrits = await Filiere.findOne({
                    where : {
                        id: responce.filiere
                    }
                }).then((res) => {
                    return res.dataValues.nbr_inscrits
                })

                nbr_inscrits = nbr_inscrits + 1
                await Filiere.update({
                    nbr_inscrits: nbr_inscrits
                },
                {
                    where : {
                        id: responce.filiere
                    }
                })



        }else{
        return res.render('inscription', {specialites:my_specialites,path:req.path, detail: false,countries:Object.values(countries),filiere:my_filieres,user:null,message:"Oups, quelque chose c'est mal passe",modifier:false})  
        
        }

       
            
      
  
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
    res.render("personalPage", {specialite:specialite,filiere:filiere, etudiant : etudiant,detail: false,path:req.path,user:res.locals.user,page:1,message:''})

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

    res.render("fiche",{filiere:filiere,specialite:specialite,etudiant : etudiant,detail: false,path:req.path,user:res.locals.user,page:0,message:''})
}


const coursesDetailView = async(req, res, next) => {
    const id = req.params.id
    const specialite = await Specialite.findAll({
        where : { filiereId: id}
    })

    const cours = await Filiere.findOne({
        where : {id : id}
    })

    const student = await Student.findAll({
        where : {filiereId : id}
    })

   
    
    if(req.query.token){
        return res.render('coursesDetails', {title: 'name',detail: false,path:req.path,user:res.locals.user})
    }
    res.render('coursesDetails', {student:student,cours:cours,specialite:specialite,title: 'name',detail: false,path:req.path,user:null})
}

const eventsDetailView = async (req, res, next) => {
    const id = req.params.id

    const events = await Event.findOne({
        where : {
            id : id
        }
    })

    if(req.query.token){
       
        return res.render('eventsDetails', {title: 'name',detail: false,path:req.path,user:res.locals.user})
    }
    
    res.render('eventsDetails', {events:events,title: 'name',detail: false,path:req.path,user:null})
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
    return res.render('inscription', {path:req.path, detail: false,etudiant:etudiant,countries:Object.values(countries),specialites:my_specialites,filiere:my_filieres,user:res.locals.user,message:'', modifier:true})  

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