const app = Vue.createApp({
   
    data(){
        return{
            firstName: 'John',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    }
})
app.mount('#app')