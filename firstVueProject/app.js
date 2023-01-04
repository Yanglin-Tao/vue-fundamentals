const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Yanglin',
            middleName: '',
            lastName: 'Tao',
            url: 'https://www.google.com/',
            age: 20
        }
    },
    methods: {
        // fullName(){
        //     // method calls each time a change occurs on the page, e.g. increment/decrement the age
        //     // inefficient
        //     console.log('Full name method was called')
        //     return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        // },
        increment(){
            this.age++
        },
        decrement(){
            this.age--
        },
        updateLastName(msg, event){
            // event.preventDefault()
            // console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    },
    // computed property
    // save on performance and computation time compared to using methods (cache is used)
    computed: {
        fullName(){
            console.log('Full name computed property was called')
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    },
    // watchers
    watch:{
        // the age will be reverted to the original value 3 seconds after the change
        age(newVal, oldVal){
            setTimeout(() =>{
                this.age = 20
            }, 3000)
        }
    }

}).mount("#app")

// setTimeout(() => {
//     vm.firstName = "Veronica";
// }, 2000)