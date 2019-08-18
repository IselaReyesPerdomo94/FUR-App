const myInfo = {

    render: async() => {
        const view = /*html*/
            `   
        <section class="mi-info">
            <section class="profile-photo">
                <h1> Mis mascotas</h1>
                <p>Cuentános sobre tus mascotas, para que la comunidad los conozca</p>
            </section>
            <div class="photo">
             <button type="button" class="button-agree" id="agree-fur" data-toggle="modal" data-target="#exampleModal">+ Nueva mascota</button> 
            </div>
            <div id="cards-fur-container" class="cards-fur-container">
                </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Añadir mascota</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                  <form>
            <div class="form-profile">
            <label for="name">Nombre de tu mascota</label><br>
            <input type="text" class="input-profile" id="fur-name-input"><br>
            <label for="nickname">Apodos</label><br>
            <input type="text" class="input-profile" id="nickname-input"><br>
            <label for="specie">Especie</label><br>
            <input type="text" class="input-profile" id="specie-input"><br><br>
            <div class="age">
            <label for="num-age">Edad</label>
            <input type="number" class="num-age" id="age-input">
            <select name="choose" class="input-age" id="age-complement-input">
            <option value="null" selected disabled></option>
            <option value="Años">Años</option>
            <option value="Meses">Meses</option>
           <option value="Semanas">Semanas</option><br>
           </select>
           </div>
           <div class="description-fur">
            <label for="description">Cuéntanos algo de tu mascota</label>
            <textarea rows="3" cols="50" id="description-input">
            </textarea>
            </div>
            <div class="photo-fur">
              <form id="form-imagenes"> 
                <label class="btn-img">
                   <input type="file" name="files-img" value="" id="photo" class="hidden">
                   <img type="file" src="./img/elements/camera.png" class="fur-photo" alt="add"/>
                   <div id="mensaje"></div>
                </label>
                
              </form> 
              
            </div>
            <div class="save">
            <button type="button" class="buttons" id="save" data-dismiss="modal">Guardar</button> 
            </div> 
            </div>    
            </div>
            </div> 
            <div class="modal-footer">
            
                    
                  </div>
                </div>
              </div>
            </div>          
            
  </div>          
  </div>
  </div>      
    </section>
    
  
            `
        return view
    },
    after_render: async() => {
        const firestore = firebase.firestore();
        const furName = document.getElementById('fur-name-input');
        const nickName = document.getElementById('nickname-input');
        const specie = document.getElementById('specie-input');
        const ageFur = document.getElementById('age-input');
        const ageFurTwo = document.getElementById('age-complement-input');
        const descriptionFur = document.getElementById('description-input');
        const cardFurSpace = document.getElementById('cards-fur-container');
        const saveFur = document.getElementById('save');
        const photo = document.getElementById('photo')

        const user = firebase.auth().currentUser;

        const eraseInputs = (furName, nickName, specie, ageFur, ageFurTwo,  descriptionFur) => {
            furName.value = '';
            nickName = '';
            specie = '';
            ageFur = '';
            ageFurTwo = '';
            descriptionFur = '';

        }

        const saveFurInfo = (namefur, furnickname, furspecie, furage, furagetwo,  furdescription) => {
            db.collection('pets').add({
                    userID: user.uid,
                    name: user.displayName,
                    petname: namefur,
                    petnickname: furnickname,
                    petspecie: furspecie,
                    petage: furage,
                    petagetwo: furagetwo,
                    petdescription: furdescription,
                    

                })
                .then((docRef) => {
                    console.log('Document written with ID', docRef);
                    console.log('Guardando mascota')
                })
                .then(() => {
                    const newPetCard = window.createFurCard(namefur, furnickname, furspecie, furage, furagetwo,  furdescription);
                    cardFurSpace.innerHTML += newPetCard;
                })
                .catch((error) => {
                    console.error('Error adding document: ', error);
                    console.error('Error al guardar mascota')
                });
        }  

        const gettingFurCardsfromFirebase = () => {
            firestore.collection('pets').where('userID', '==', user.uid)
                .get()
                .then((snapshot) => {
                    snapshot.forEach(element => {
                        const { petname, petnickname, petspecie, petage, petagetwo, petdescription} = element.data();
                        const newPetCard = window.createFurCard(petname, petnickname, petspecie, petage, petagetwo, petdescription)
                        cardFurSpace.innerHTML += newPetCard;
                    })
                })
              }

        

          gettingFurCardsfromFirebase();

          saveFur.addEventListener('click', () => {
            console.log('me estoy ejecutando')
              const namefur = furName.value;
              const furnickname = nickName.value;
              const furspecie = specie.value;
              const furage = ageFur.value;
              const furagetwo = ageFurTwo.value;
              const furdescription = descriptionFur.value;
              saveFurInfo(namefur, furnickname, furspecie, furage, furagetwo, furdescription)
              eraseInputs(furName, nickName, specie, ageFur, ageFurTwo,  descriptionFur);
          })

                   
          photo.addEventListener('change', (chargeimg)=>{
          const addImageFur = chargeimg.target.files[0];

          const refStorage = storageService.ref().child(`imagenesdemascotas/${addImageFur.name}`);
          const uploadTask = refStorage.put(addImageFur).then(() => console.log('Uploaded file!')).catch(err => {
            console.log('Error:')
            console.log(err)
          });
          
          });
               

    }

}




const petCard = {
    card: `
  <div class="card-myinfo">
  <div class="img-myinfo-content">
    <h3>*petName*</h3>
    <img src="*img*" class="img-myinfo" id="img-myinfo">
  </div>
  <div class="txt-myinfo"> 
    <p>Apodos: <span>*nickName*</span></p>
    <p>Especie: <span>*specie*</span></p>
    <p>Edad: <span>*age*</span> <span>*age2*</span></p>
    <p>Acerca de: <span>*about*</span></p>
  </div>
</div>
`
}

export { petCard };
export default myInfo