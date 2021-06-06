new Vue({
    el: '#app',
    data: {
        isEditing: false,
        selectedIndex: null,
        todo: '',
        todos: []
    },

    methods: {
        storeTodo(){
            this.todos.push(this.todo)
            this.todo = ''
        },

        editTodo(index, todo){
            this.todo = todo
            this.selectedIndex = index
            this.isEditing = true
        },

        updateTodo(){
       this.todos.splice(this.selectedIndex, 1, this.todo)
       this.isEditing = false
       this.todo = ''
        },

        deleteTodo(index){
            // this will remove a single item from an array with that particular index
            this.todos.splice(index, 1)
        }
    }

    
})