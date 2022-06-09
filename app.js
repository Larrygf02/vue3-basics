const app = Vue.createApp({
    data() {
        return {
            title: 'The final empire',
            author: 'Brandon Senderson',
            age: 45
        }
    },
    methods: {
        changeTitle() {
            this.title = 'New final empire'
        }
    }
    // template: '<h2>I am the template now</h2>'
})

app.mount('#app')