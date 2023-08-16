const express = require('express')


const {
    indexView, 
    aboutView, 
    coursesView, 
    eventView, 
    connexionView, 
    inscrptionView, 
    contactView, 
    coursesDetailView, 
    eventsDetailView,
    getSpecialityByFK,
    TraitementInscription,
    loginTraitement,
    protectionRoute,
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
    
} = require('../controllers/homeController')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../../tmp'))
    },

    filename : (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

const router = express.Router()

router.get('/', indexView)
router.get('/about', aboutView)
router.get('/courses', coursesView)
router.get('/events', eventView)
router.get('/connexion', connexionView)
router.get('/inscription', inscrptionView)
router.get('/contact', contactView)
router.get('/courses/(:id)', coursesDetailView)
router.get('/events/(:id)', eventsDetailView)
router.get('/specialities',getSpecialityByFK)
router.post('/studentInscrip',upload.single("image"),TraitementInscription)
router.get('/deconnexion', deconnexion)
router.post('/connexion', loginTraitement)
router.get('/personalPage',protectionRoute, personalPage)
router.get('/personalPage/mesInfos',protectionRoute, mesInfos)
router.get('/personalPage/ma_fiche_inscription',protectionRoute, ficheInscription)
router.get('/personalPage/modifierInfos',protectionRoute,modifierInfos)
router.post('/personalPage/modifierInfos',protectionRoute,updateInscription)
router.get('/personalpage/modifPassword', protectionRoute, modifPassword)
router.get('/personalpage/modifPhoto',protectionRoute, modifPhoto )
router.post('/personalpage/modifPassword', protectionRoute, modifPasswordTraitement)
router.post('/personalpage/modifPhoto', protectionRoute,upload.single("image"), modifPhotoTraitement)
module.exports = {
    routes:router
}