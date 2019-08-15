
let home = {

    render: async() => {
        let view = /*html*/ `
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
           
            <!-- Button trigger modal -->
<button type="button" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModal">
+ Agregar Publicación
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">¡Realiza una publicación de tus mascotas!
        <img src="img/kitty.svg" alt="gatito" class="kitty">
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <textarea placeholder="Escribe una publicación...pio pio" class="publicacion" id="publicacion"></textarea>
      </div>
      <div class="image">
      </div> 
      <div class="modal-footer">
      <button type="button" class="btn-btn-primary" data-dismiss="modal" id="cerrar-publicar"> <img src="img/picture.svg" alt="Agregar imagen" class="add-image"></button>
        <button type="button" class="btn-btn-primary" data-dismiss="modal" id="cerrar-publicar">Cerrar</button>
        <button type="button" class="btn-btn-primary" id="btn-publicar">Publicar</button>
      </div>
    </div>
  </div>
</div>
           
            </section>

        `
        return view
    },
    after_render: async() => {
        const publicationInput = document.getElementById('publicacion').value;
        const post = document.getElementById('btn-publicar');
        const user = firebase.auth().currentUser;
        
        //Cloud Firestore Collections
        const profiles = db.collection('profile');
        const posts = db.collection('posts');
        const likes = db.collection('likes');

        //Añadir perfil desde Firestore
        profiles.add({
          email : user.email, 
          name : user.displayName,
          photo : user.photoURL,
          uidUser : user.uid
        })
        .then((docRef) => {
          console.log('este es el Id:', docRef.id);
        }) 
        .catch((error) => {
          console.error('agregando error del documento: ',error);
        });
    }
}
export default home;