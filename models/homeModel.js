const { Sequelize } = require('sequelize');
const { sequelize, authenticate, DataTypes } = require('./../sequelize')

authenticate()

const Student = sequelize.define('students', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_de_naissance: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    lieu_de_naissance: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero_cni: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status_matrimoniale: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pays: {
        type: DataTypes.STRING,
        allowNull: true
    },
    region: {
        type: DataTypes.STRING,
        allowNull: true
    },
    departement: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ville: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sexe: {
        type: DataTypes.STRING,
        allowNull: true
    },
    langue: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nbr_enfant: {
        type: DataTypes.STRING,
        allowNull: true
    },
    code_postal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    emploi: {
        type: DataTypes.STRING,
        allowNull: true
    },
    handicape: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nom_pere: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nom_mere: {
        type: DataTypes.STRING,
        allowNull: true
    },
    addresse_pere: {
        type: DataTypes.STRING,
        allowNull: true
    },
    addresse_mere: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profession_pere: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profession_mere: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dernier_ecole: {
        type: DataTypes.STRING,
        allowNull: true
    },
    moyenne_bac: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    type_formation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    filiereId: {
        type : DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    specialiteId: {
        type : DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    photo_profil: {
        type: DataTypes.STRING,
        allowNull: true
    },
  });


const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    login: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    studentId: {
        type : DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
});

const Filiere = sequelize.define('filieres', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    nom_filiere: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image_desc: {
        type:DataTypes.STRING(255),
        allowNull:true
    },
    nbr_specialite: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nbr_inscrits:{
        type:DataTypes.INTEGER,
        defaultValue: 0
    }
})

const Specialite = sequelize.define('specialites', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    nom_specialite: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    filiereId : {
        type : DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }
})

const Credential = sequelize.define('credentials', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    login: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
})

const Event = sequelize.define('events', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    temps_debut: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    temps_fin: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    lieu: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    image_dsc:{
        type: DataTypes.STRING(255),
        allowNull: true,
    }
})

// sequelize.sync().then(() => {
//     console.log('Migration made successfully!');
//     }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });


Filiere.hasMany(Specialite, { as: "specialites" });
Specialite.belongsTo(Filiere, {
  foreignKey: "filiereId",
  as: "filieres",
});

Filiere.hasMany(Student, { as: "students" });
Student.belongsTo(Filiere, {
  foreignKey: "filiereId",
  as: "filieres",
});

Specialite.hasMany(Student, { as: "students" });
Student.belongsTo(Specialite, {
  foreignKey: "specialiteId",
  as: "specialites",
});


module.exports = {
    Student,
    User,
    Filiere,
    Specialite,
    Credential,
    Event,
    sequelize
}


