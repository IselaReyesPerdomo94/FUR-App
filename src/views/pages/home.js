let home = {

    render: async() => {
        let view = /*html*/ `
            <section class="home">
                <h1> This is our home </h1>
            </section>
        `
        return view
    },
    after_render: async() => {

    }
}
export default home;