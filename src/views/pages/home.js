let home = {

    render: async() => {
        let view = /*html*/ `
            <section class="home">
            <hr>
            <div class="flex-container">
            <div>
            <img src="img/happy-emoticon-with-one-tooth.svg" alt="Memes" class="memes">
            <p>Memes</p>
            </div>
            <div>
            <img src="img/vaccine.svg" alt="Veterinario" class="veterinario">
            <p>Veterinario</p>
            </div>
            <div>
            <img src="" alt="Veterinario" class="veterinario">
            </div>
            <div>
            <img src="img/vaccine.svg" alt="Veterinario" class="veterinario">
            </div>
            </div>
            
            

            <hr>
            </section>
        `
        return view
    },
    after_render: async() => {

    }
}
export default home;