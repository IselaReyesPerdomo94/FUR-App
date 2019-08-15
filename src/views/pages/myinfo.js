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
               <div class="content-image-add"
                <a href="">
                    <img src="./img/elements/camera.png" class="fur-photo"/>
                    Añadir foto
                </a>
                </div>
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
        const furName = document.getElementById('fur-name-input');
        const nickName = document.getElementById('nickname-input');
        const specie = document.getElementById('specie-input');
        const ageFur = document.getElementById('age-input');
        const ageFurTwo = document.getElementById('age-complement-input');
        const descriptionFur = document.getElementById('description-input');

        const saveFur = document.getElementById('save');
        const eraseInputs = () => {

        }
        const furCards = () => {
            const newFurCard = window.createFurCard(furName, nickName, specie, ageFur, ageFurTwo, descriptionFur);
            const cardFurSpace = document.getElementById('cards-fur-container');
            cardFurSpace.innerHTML += newFurCard;
        }
        saveFur.addEventListener('click', furCards)
    }


}


const petCard = {
    card: `
  <div class="card-myinfo">
  <div class="img-myinfo-content">
    <h3>*petName*</h3>
    <img src="*img*"/ class="img-myinfo">
  </div>
  <div class="txt-myinfo"> 
    <p>Apodos:<span>*nickName*</span></p>
    <p>Especie:<span>*specie*</span></p>
    <p>Edad:<span>*age*</span> <span>*age2*</span></p>
    <p>Acerca de:<span>*about*</span></p>
  </div>
</div>
`
}

export { petCard };
export default myInfo;