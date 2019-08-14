let activities = {
    render: async() => {
        let view = /*html*/ `
            <section class="activities">
                <h1> Tus actividades </h1>
                <h3 id="user-activities"></h3>
                <p>En este lugar puedes agregar las citas o actividades 
                relacionadas con tus mascotas y así no olvidarlas. Si deseas agregar una solo da click en agregar actividad</p>

                <div id="cards-act">
                </div>
                <!-- Triggering modal -->
                <button class="button-agree" value="+ Agregar actividad" id="plus-activitie" data-toggle="modal" data-target="#exampleModal">
                + Agregar actividad</button>

                <!-- Modal -->

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nueva actividad</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="activitie-modal">
                            <p>Nombre de la actividad</p>
                            <input type="text" class="act-name" id="title">
                            <div class="item-container">
                                <label>Fecha</label>
                                <input type="date" id="date">
                            </div>
                            <div class="item-container">
                                <label>Hora</label>
                                <input type="time" id="hour" min="00:00" max="24:00">
                            </div>
                            <div class="item-container">
                                <label>Prioridad</label>
                                <select name="priority" id="priority">
                                    <option value="low">Baja</option>
                                    <option value="mid">Media</option>
                                    <option value="high">Alta</option>
                                </select>
                            </div>
                            <p>Descripción (opcional)</p>
                            <textarea rows="2" cols="35" id="description">
                            </textarea>
                            <div class="item-container">
                                <label>Recordatorio</label>
                                <select name="reminder">
                                    <option value="low">1 día antes</option>
                                    <option value="mid">1 hora antes</option>
                                    <option value="high">5 minutos antes</option>
                                </select>
                            </div>
                            </div>
                        </div>
                    <div class="modal-footer">
                        <button type="button" class="buttons" id="save-act"data-dismiss="modal">Guardar</button>
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
        const titleInput = document.getElementById('title');
        const dateInput = document.getElementById('date');
        const timeInput = document.getElementById('hour');
        const descriptionInput = document.getElementById('date');
        const priorityInput = document.getElementById('priority')

        const saveButtonActivitie = document.getElementById('save-act');
        const eraseInputs = () => {

        }
        const printCards = () => {
            const newCards = window.createActivityCard(titleInput, dateInput, timeInput, descriptionInput, priorityInput);
            const cardsSpace = document.getElementById('cards-act');
            cardsSpace.innerHTML += newCards;
        }
        saveButtonActivitie.addEventListener('click', printCards)
    }
}


const components = {
       card : `<div class="card-act">
                    <h1>*title*</h1>
                    <span>Fecha: <span>*date*</span></span>
                    <span>Hora: <span>*time*</span></span>
                    <span>Descripción: <span>*description*</span></span>     
              </div>`
    }

    export {components};

export default activities;