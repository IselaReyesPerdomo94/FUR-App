const profile = {

    render: async() => {
        const view = /*html*/ `
            <section class="profile">
                <div class="profile-header">
                    <div class="first">
                        <p>Soy: </p>
                    </div>
                    <div class="mid-photo">    
                    
                    </div>
                    <div class="third">
                        <figure>
                            <i class="fas fa-paw"></i>
                        </figure> 
                    </div>
                </div>

                <!-- Create post box -->       
                <div class="conteiner-post" data-toggle="modal" data-target="#exampleModal">          
                    <div class="crea-post" >
                        <p class="c-post">Crear post</p>
                    </div>
                    <div class="photo-post">
                        <p class="think">¿En qué piensas?</p>
                    </div>
                </div>

                <div id="root"></div>

                <!-- Modal post container -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">¡Realiza una publicación!
                                <img src="img/kitty.svg" alt="gatito" class="kitty">
                            </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <select name="tema" class="select-filter">
                                <option value="All">¿Sobre qué tema publicarás?</option>
                                <option value="Meme">Meme</option>
                                <option value="Veterinario">Veterinario</option>
                                <option value="PetFriendly">PetFriendly</option>
                                <option value="Tips">Tips</option>
                                <option value="Perdidos">Perdidos</option>
                            </select>
                            <textarea placeholder="¿En que piensas?" class="publicacion" id="publicacion"></textarea>
                        </div>
                        <div class="image">

                        </div> 
                        <div class="modal-footer">
                            <button type="button" class="btn-btn-primary" id="btn-post" data-toggle="modal" data-target="#exampleModal"><p class="btn-text">Publicar</p></button>
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
        const user = await firebase.auth().currentUser;
        const userInfoSpace = document.querySelector('.mid-photo');
        const userProfileInfo = window.createProfileInformation(user.displayName, user.photoURL);
        userInfoSpace.innerHTML = userProfileInfo;    
        const petsInfo = document.querySelector('.third');  
            
        const postsButton = document.querySelector('#btn-post');
        const selectFilter = document.querySelector('.select-filter');

        const savingPostData = (postInput, postFilter) => {   
            const currentDate = new Date();
            const strDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`     
        db.collection('posts').add({
          name : user.displayName,
          post : postInput,
          photo: user.photoURL,
          userID: user.uid,
          filter: postFilter, 
          date: strDate
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        })
      }
       
       postsButton.addEventListener('click', ()=> {
           console.log('me estoy ejecutando');
           const postInput = document.querySelector('#publicacion').value;
        //Guarda filtro seleccionado
        const postFilter =(selectFilter.options[selectFilter.selectedIndex].value);
           savingPostData(postInput, postFilter)
       })


       const gettingPetInfo = () => {
            firestore.collection('pets').where("userID", "==", user.uid)
                .get()
                .then((snapshot) => {
                    snapshot.forEach(element => {
                        const { petspecie, petname} = element.data();
                        const petInfo = `
                        <p>${petspecie}: ${petname}</p>
                        `
                        petsInfo.innerHTML += petInfo;
                    });
                })
        }

        gettingPetInfo();

        
        db.collection("posts").where("userID", "==", user.uid).orderBy('date','desc')
      .get()
      .then((querySnapshot) => {
        const root = document.querySelector("#root");
        //const rootProfile = document.querySelector("#root-1");
        let str = ' ';
        let strProfile = ' ';
         
        querySnapshot.forEach((doc) => {
          let theme = doc.data().filter;
          if(theme == undefined){
            
          theme = 'General';
        } 
            str += `
            <div class="post-print conteiner-post-home">
              <div class="profile-reactions">
                    <img src="${doc.data().photo}" alt="Foto de perfil" class="photo-profile">
                    <p class="think t">${doc.data().name}</p>
                <div class="reactions">
                    <i class="fas fa-smile-beam"></i>
                    <i class="fas fa-angry"></i>
                    <i class="fas fa-comment"></i>
                    <i class="fas fa-share-alt-square"></i>
                </div>
              </div>
                <div class="post-info-container">
                    <div class="post-content-theme-title">
                        <p class="th" id="tema">Tema: ${theme} </p><span>${doc.data().date}</span>
                    </div>
                    <p class="think th"> ${doc.data().post}</p>
                </div>
              </div>
              `;
              strProfile = `
              <div>
                  <img src="${user.photoURL}" alt="Foto de perfil" class="photo-profile">
            </div>
            `;

        });
        
        root.innerHTML = str;
      });

        }

    }

const userInfo = {
    profileInfo : `
        <figure>
            <img src="*photoURL*" alt="foto de perfil">
        </figure>
        <h3>*userName*</h3>
    `
}

export {userInfo}

export default profile;

