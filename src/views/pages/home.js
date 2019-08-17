
const home = {
    render: async() => {
        const view = /*html*/ `
            <section class="home">
              <hr class="line-1">
              <div class="flex-container">
              <div>
            <img src="img/happy-emoticon-with-one-tooth.svg" alt="Memes" class="memes">
            <p class="etiquetas-filtrado">Memes</p>
            </div>
            <div>
            <img src="img/vaccine.svg" alt="Veterinario" class="veterinario">
            <p class="etiquetas-filtrado">Veterinario</p>
            </div>
            <div>
            <img src="img/pet.svg" alt="PetFriendly" class="pet-friendly">
            <p class="etiquetas-filtrado">PetFriendly</p>
            </div>
            <div>
            <img src="img/elemental-tip.svg" alt="Tips" class="tips">
            <p class="etiquetas-filtrado">Tips</p>
            </div>
            <div>
            <img src="img/icon.svg" alt="Perdidos" class="perdidos">
            <p class="etiquetas-filtrado">Perdidos</p>
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

      //Método para obtener la data de los post
      db.collection("posts").get().then((querySnapshot) => {
        const user = firebase.auth().currentUser;
        const root = document.querySelector("#root");
        const rootProfile = document.querySelector("#root-1");
        let str = ' ';
        let strProfile = ' ';
         
        querySnapshot.forEach((doc) => {
          let theme = doc.data().filter;
          if(theme == undefined){
            
          theme = 'General';
          console.log('se cambio theme por', theme)
        } 
            str += `
            <div class="post-print conteiner-post-home">
              <div class="profile-reactions">
                <img src="${doc.data().photo}" alt="Foto de perfil" class="photo-profile">
                <p class="think t">${doc.data().name}</p>
              </div>
              <div>
                <p class="think th" id="tema">Tema: ${theme} </p>
                <p class="think th"> ${doc.data().post} </p>
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
        rootProfile.innerHTML = strProfile;
      });
      postsButton.addEventListener('click', () => {
        //Guarda data de los filtros
        const postInput = document.querySelector('#publicacion').value;
        //Guarda filtro seleccionado
        const postFilter =(selectFilter.options[selectFilter.selectedIndex].value);
        savingPostData(postInput, postFilter);
        
      })
       
  
          }
        
      
    }

        
       
        
    

export default home;