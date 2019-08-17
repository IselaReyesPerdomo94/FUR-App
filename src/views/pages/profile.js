const profile = {

    render: async() => {
        const view = /*html*/ `
            <section class="profile">
                <div class="profile-header">
                    <div class="first">
                        <p>Soy: </p>
                    </div>
                    <div class="mid-photo">
                        
                        <h1 id="user-name"></h1>
                    </div>
                    <div class="third">
                        <figure>
                            <i class="fas fa-paw"></i>
                        </figure>
                        <p>Perro: Fetuccini </p>
                    </div>
                </div>
                <div class="conteiner-posts">
                    <div class="conteiner-post" data-toggle="modal" data-target="#exampleModal">
                    <div class="photo-post">

                    </div>
                    <div class="crea-post" >
                        <p class="c-post">Crear post</p>
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
                                <button type="button" class="btn-btn-primary" data-dismiss="modal" id="cerrar-publicar"> <img src="img/picture.svg" alt="Agregar imagen" class="add-image"></button>
                                <button type="button" class="btn-btn-primary" data-dismiss="modal" id="cerrar-publicar">Cerrar</button>
                                <button type="button" class="btn-btn-primary" id="btn-post">Publicar</button>
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
        const user = firebase.auth().currentUser;
        const userName = document.querySelector('#user-name');
        const photo = user.photoURL;
        
        const addingName = () =>{
            userName.innerHTML = user.displayName;
        }
        

        const addingUrlPhoto = () => {

        }

    }
}


export default profile;