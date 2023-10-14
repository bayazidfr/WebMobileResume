new Vue({
    el: '#app',
    data: {
        name: '',
        surname: '',
        email: '',
        message: ''
    },
    methods: {
        sendMessage() {
            const composedMessage = `Name: ${this.name}\nSurname: ${this.surname}\nEmail: ${this.email}\n\nMessage:\n${this.message}`;
            alert(`Message to be sent:\n\n${composedMessage}`);
        }
    }
});



function redirectToInstagram() {
    var instagramUrl = 'https://www.instagram.com/bayazid.fr';
    window.open(instagramUrl, '_blank');
}

function redirectToLinkedIn() {
    var linkedInUrl = 'https://www.linkedin.com/in/b%C9%99yazid-%C9%99l%C9%99kb%C9%99rli-32368a22a';
    window.open(linkedInUrl, '_blank');
}
