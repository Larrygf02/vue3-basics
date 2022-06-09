const app = Vue.createApp({
    data() {
        return {
            url: "http://www.thenetninja.co.uk",
            title: 'The final empire',
            author: 'Brandon Senderson',
            age: 45,
            show: true,
            books: [
                { title: "book 1", author: "author 1", isFav: true },
                { title: "book 2", author: "author 2", isFav: false },
                { title: "book 3", author: "author 3", isFav: true },
            ]
        }
    },
    methods: {
        changeTitle() {
            this.title = 'New final empire'
        },
        toggleBooks() {
            this.show = !this.show
        },
        handleEvent() {
            console.log('event')
        }
    }
    // template: '<h2>I am the template now</h2>'
})

app.mount('#app')