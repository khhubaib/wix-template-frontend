<script>
export default {
    name: 'FormComp',

    props:{
        picture: String,
        overlay: String,
    }
}
</script>

<template>
    <div class="form-comp">
        <div class="form-img">
            <img :src="picture" alt="">

            <div v-if="overlay" class="form-overlay">
                <p v-threed>Contact Us</p>
                <h1 v-threed>GET IN TOUCH WITH US TODAY</h1>
            </div>
        </div>
        <div class="form">
            <div class="form-container">
                <div class="form-headings">
                    <p class="subtitle">Get in Touch</p>
                <h1>CONTACT US</h1>
                <p class="info-text">
                    Have a question or need more information?<br>
                    Reach out to us using the form below.
                </p>
                </div>
                
            <div class="actual-form">
                <form>
                    <label for="firstName">First name *</label>
                    <input type="text" id="firstName" name="firstName" required>

                    <label for="lastName">Last name *</label>
                    <input type="text" id="lastName" name="lastName" required>

                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
                
            </div>
        </div>
    </div>
</template>

<style>

</style>
