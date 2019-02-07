let vm = new Vue({
    el: '#app',
    data: {
        title: 'Мои планы',
        seen: true,
        taskText: '',
        errorMessage: '',
        hasError: false,
        todos: [
            { id: 0, text: 'Изучить JavaScript' },
            { id: 1, text: 'Изучить Vue' },
            { id: 2, text: 'Сделать что-нибудь классное' }
        ],
        nextTodoId: 4
    },
    methods: {
        toggle: function() {
            this.seen = !this.seen;
        },
        addTask: function() {
            if (this.taskText === '') {
                this.hasError = true;
                return this.errorMessage = 'Напишите что нибудь...';
            } else if (this.taskText && this.errorMessage) {
                this.hasError = false;
                this.errorMessage = '';
            }

            this.todos.push( { id: this.nextTodoId++, text: this.taskText} );
            this.taskText = '';
        },
        deleteTask: function(event) {
            let target = event.target;

            if (!target.classList.contains('app__button')) return;

            let appList = document.querySelector('.app__list').children;
            let taskIndex = [].indexOf.call(appList, target.parentNode);

            this.todos.splice(taskIndex, 1);
        }
    }
});

vm.$set(vm.todos, vm.todos.length, { id: vm.nextTodoId++, text: 'Поехать в Москву'});
Vue.set(vm.todos, vm.todos.length, { id: vm.nextTodoId++, text: 'Стать front-end разработчиком'});