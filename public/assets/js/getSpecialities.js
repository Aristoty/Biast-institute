

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}

const getSpecialities = async () => {
    filiere = document.getElementById('filiere')
    specialite = document.getElementById('specialite')      
    removeAllChildNodes(specialite)
      
    try {
      const response = await axios.get(`http://localhost:3000/specialities/`);
  
      const data = Object.values(response.data);
     
      for(let i = 0; i<data.length; i++){
        if(data[i].dataValues.filiereId == filiere.value){
                var option = document.createElement("option");
                option.value= data[i].dataValues.id;
                option.innerHTML = data[i].dataValues.nom_specialite;
                specialite.appendChild(option)
        }
      }
      

    } catch (errors) {
      console.error(errors);
    }
  };

// function toastify(){
 
 
// }

    
   
  // }


  // const response = await axios.get(`http://localhost:3000/specialities/`);
         
  
   