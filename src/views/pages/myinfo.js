let myInfo = {

    render: async() => {
        let view = /*html*/
            `   
        <section class="mi-info">
            <section class="profile-photo">
                <h1> Mi info</h1>
            </section>
            <div class="photo">
             <img src="./img/elements/foto.png" class="element-photo"/>
             <h1 id="user-name"></h1>
             <button type="button" class="button-agree" id="agree-fur" data-toggle="modal" data-target="#exampleModal">+ Agregar mascotas</button> 
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
            <input type="text" class="input-profile"><br>
            <label for="nickname">Apodos</label><br>
            <input type="text" class="input-profile"><br>
            <label for="specie">Especie</label><br>
            <input type="text" class="input-profile"><br><br>
            <div class="age">
            <label for="num-age">Edad</label>
            <input type="number" class="num-age">
            <select name="choose" class="input-age">
            <option value="null" selected disabled></option>
            <option value="opt1">Años</option>
            <option value="opt2">Meses</option>
           <option value="opt3">Semanas</option><br>
           </select>
           </div>
           <div class="description-fur">
            <label for="description">Cuéntanos algo de tu mascota</label>
            <textarea rows="3" cols="50">
            </textarea>
            <div class="photo-fur">
               <div class="content-image-add"
                <a href="">
                    <img src="./img/elements/camera.png" class="fur-photo"/>
                    Añadir foto
                </a>
                </div>
            </div>
            </div>
            <div class="modal-footer">
            <div class="save">
            <button type="button" class="buttons" id="save">Guardar</button> 
            </div>
                    
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

    }
}
export default myInfo;