
<template>
    <div id="contact-form" class="contact-form">
		<h1 class="contact-form_title">Booking</h1>
		<div class="separator"></div>

		<div v-if="isSending" class="loading">Sendig...</div>

		<form class="form" action="https://cors-anywhere.herokuapp.com/https://formspree.io/mrgyynad" method="POST">
			<input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
			<input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
            <input required name="mobile-number" v-model="contact.mobile" placeholder="Mobile Number" autocomplete="off">
            <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
		   <button class="button" type="submit">Send</button>
		</form>
	</div>
</template>



<script>
import { date } from 'quasar'
import { mapActions } from 'vuex'
export default {
  name: 'PageContact',
  data() {
		return {
            contact: {
			name: '',
			email: '',
            message: '',
            mobile: ''
		},

		isSending: false
        }
	},

	methods: {

        /**
         * Clear the form
         */	
        clearForm() {
            for (let field in this.contact) {
                this.contact[field] = ''
            }
        },

        /**
         * Handler for submit
         */	
        onSubmit(evt) {
            evt.preventDefault();

            this.isSending = true;

            setTimeout(() => {
                // Build for data
                let form = new FormData();
                for (let field in this.contact) {
                    form.append(field, this.contact[field]);
                }

                // Send form to server	
                this.$http.post('/app.php', form).then((response) => {
                    console.log(response);
                    this.clearForm();
                    this.isSending = false;
                }).catch((e) => {
                    console.log(e)
                });

            }, 1000);
        }
    }
}
</script>

<style lang="sass">
    .contact-form
        font-family: 16px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    .contact-form .separator 
        border-bottom: solid 1px #ccc;
        margin-bottom: 15px;
    .contact-form .form
        display: flex;
        flex-direction: column;
        font-size: 16px;
    .contact-form_title
        color: #333;
        text-align: left;
        font-size: 28px;

    .contact-form input[type="email"],
    .contact-form input[type="number"],
    .contact-form input[type="text"],
    .contact-form textarea 
        border: solid 1px #e8e8e8;
        font-family: 'Roboto', sans-serif;
        padding: 10px 7px;
        margin-bottom: 15px;
        outline: none;

    .contact-form textarea 
        resize: none;

    .contact-form .button 
        background: #da552f;
        border: solid 1px #da552f;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        text-transform: uppercase;

    .contact-form .button:hover
        background: #ea532a;
        border: solid 1px #ea532a;
    .contact-form input[type="email"],
    .contact-form input[type="text"],
    .contact-form input[type="number"],
    .contact-form textarea,
    .contact-form .button 
        font-size: 15px;
        border-radius: 3px
</style>
