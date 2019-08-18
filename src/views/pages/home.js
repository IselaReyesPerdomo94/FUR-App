
const home = {
    render: async() => {
        const view = /*html*/ `
            <section class="home">
            <hr class="line-1">
            <div class="flex-container">
            <div class="memes">
            <img src="img/happy-emoticon-with-one-tooth.svg" alt="Memes" id="memes">
            <p class="etiquetas-filtrado">Memes</p>
            </div>
            <div class="veterinario">
            <img src="img/vaccine.svg" alt="Veterinario" id="veterinario">
            <p class="etiquetas-filtrado">Veterinario</p>
            </div>
            <div class="pet-friendly">
            <img src="img/pet.svg" alt="PetFriendly" id="pet-friendly">
            <p class="etiquetas-filtrado">PetFriendly</p>
            </div>
            <div class="tips">
            <img src="img/elemental-tip.svg" alt="Tips" id="tips">
            <p class="etiquetas-filtrado">Tips</p>
            </div>
            <div class="perdidos">
            <img src="img/icon.svg" alt="Perdidos" id="perdidos">
            <p class="etiquetas-filtrado perdidos">Perdidos</p>
            </div>
            </div>
            <hr class="line-2">

            <!--Trigger modal -->
            <div class="conteiner-all-posts">
            <div class="conteiner-post" data-toggle="modal" data-target="#exampleModal">          
            <div class="crea-post" >
            <p class="c-post">Crear post</p>
            </div>
            <div class="photo-post">
            <div id="root-1"></div>
            <p class="think">¿En qué piensas?</p>
            </div>
           
            </div>
            <div id="root">
                    </div>
            </div>
            <!-- Modal -->
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
           <textarea placeholder="¿En que piensas?" class="publicacion" id="publicacion"></textarea>
           </div>
          <div class="image">
          </div> 
          <div class="modal-footer">
          <select name="" class="select-filter">
          <option value="All">¿Sobre qué tema publicarás?</option>
          <option value="Meme">Meme</option>
          <option value="Veterinario">Veterinario</option>
          <option value="PetFriendly">PetFriendly</option>
          <option value="Tips">Tips</option>
          <option value="Perdidos">Perdidos</option>
          </select>

          <button type="button" class="btn-btn-primary" data-dismiss="modal" id="cerrar-publicar"><p class="btn-text">Cerrar</p></button>
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
      const postsButton = document.querySelector('#btn-post');
      const selectFilter = document.querySelector('.select-filter');
      
      //Guardar data de los post
      const savingPostData = (postInput, postFilter) => {
        const user = firebase.auth().currentUser;

        
        db.collection('posts').add({
          name : user.displayName,
          post : postInput,
          photo: user.photoURL,
          userID: user.uid,
          filter: postFilter
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        })
      }

      console.log(savingPostData);

      //Método para obtener foto de perfil de los usuarios
          db.collection("posts")

        .get().then(() => {
          const user = firebase.auth().currentUser;
          const rootProfile = document.querySelector("#root-1");

          let strProfile = `
            <div>
            <img src="${user.photoURL}" alt="Foto de perfil" class="photo-profile">
            </div>
            `;
            
          rootProfile.innerHTML = strProfile;
          
        });
      
      //Parametros para crear data de post
      postsButton.addEventListener('click', () => {
        //Guarda data de los filtros
        const postInput = document.querySelector('#publicacion').value;
        //Guarda filtro seleccionado
        const postFilter =(selectFilter.options[selectFilter.selectedIndex].value);
        savingPostData(postInput, postFilter);
        
      })

      

      
      const filterPost = (fil) => {postsRef.where('filter', '==', fil )
      .get()
      .then((querySnapshot) => {
        const root = document.querySelector("#root");
        let str = ' ';

      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          str += `
          <div class="post-print conteiner-post-home">
          <div class="profile-reactions">
          <img src="${doc.data().photo}" alt="Foto de perfil" class="photo-profile">
          <p class="think t">${doc.data().name}</p>
          </div>
          <div>
          <p class="think th">Post: ${doc.data().post} </p>
          </div>
          </div>
          `;
      
      
        })
        root.innerHTML = str;
      
       })
      
  }
         //Funciones de filtros
      //const tips = 'Tips';
      //const memes = 'Memes';
         
      const postsRef = db.collection('posts');
      const filterTips = document.querySelector('.tips');
      const filterMemes = document.querySelector('.memes');
      const filterVeterinario = document.querySelector('.veterinario');
      const filterPetfriendly = document.querySelector('.pet-friendly');
      const filterPerdidos = document.querySelector('.perdidos');

       //seFilter.addEventListener('click', postView, true);
       
       filterMemes.addEventListener('click', filterPost('Meme'), true);
       filterTips.addEventListener('click', () =>
        {filterPost('Tips')}, true)
       //filterVeterinario.addEventListener('click', filterPost('Veterinario'), true);
       filterPetfriendly.addEventListener('click', () => {
         filterPost('PetFriendly')}
       , true);
       //filterPerdidos.addEventListener('click', filterPost('Perdidos'), true);
      
      

            
            
          
        
        
        


        
           
            
            
            
            
    }
        
      
    }

        
       
        
    

export default home;