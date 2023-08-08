

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
  
      const data = response.data;
      data.map((elem) => {
        if(elem.filiereId == filiere.value){
            var option = document.createElement("option");
            option.value= elem.id;
            option.innerHTML = elem.nom_specialite;
            specialite.appendChild(option)
        }
      })

    } catch (errors) {
      console.error(errors);
    }
  };

// function toastify(){
 
 
// }

    
   
  // }


  // const response = await axios.get(`http://localhost:3000/specialities/`);
         
  
   