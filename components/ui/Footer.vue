<template>
      <div class="subscribe">
    <div>
      <h1 class="section_title">Subscribe</h1>
     <div class="form">
        <div class="w-form">
          <form v-if="!message" id="wf-form-Subscribe" name="wf-form-Subscribe" data-name="Subscribe" method="get" class="form-2" data-wf-page-id="66f27cba76efd0f24ff955c7" data-wf-element-id="2c0e4e96-4a0a-ac46-cbdc-59fd2de202fe">
            <div class="form-group">
              <input v-model="form.first_name"  class="subscribe_input w-input input-border-disable" maxlength="256" name="first_name" data-name="Name 2" placeholder="First Name" type="text" id="name-2">
              <span class="text-red-500 font-bold" v-if="v$.first_name.$error">{{ v$.first_name.$errors[0].$message }}</span>
            </div>
<div class="form-group">
  <input v-model="form.last_name" class="subscribe_input w-input input-border-disable" maxlength="256" name="last_name" data-name="Email 3" placeholder="Last Name" type="text" id="email-3" required />
  <span class="text-red-500 font-bold" v-if="v$.last_name.$error">{{ v$.last_name.$errors[0].$message }}</span>
</div>
<div class="form-group">
  <input v-model="form.email" class="subscribe_input w-input input-border-disable" maxlength="256" name="email" data-name="Email 2" placeholder="E-Mail" type="email" id="email-2" required />
  <span class="text-red-500 font-bold" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
</div>

            <input type="submit" data-wait="Please wait..." class="button subscribe_button w-button" value="Subscribe" @click="submitForm" />
          </form>
          
          <!-- TODO - Update success page -->
          <div class="w-form-done" v-if="message">
            <div>Thank you! Your submission has been received!</div>
          </div>
    </div>
    </div>
</div>
</div>
<div class="footer">
<div class="footer_brand">
<a href="#" class="brand w-nav-brand">
<h1 class="logo footer_logo">MODULAR</h1>
</a>
</div>
<div class="footer_nav">
<a href="#" class="footer_nav_links w-inline-block">
<div>Privacy Policy</div>
</a>
<a href="#" class="footer_nav_links w-inline-block">
<div>Terms &amp; Conditions</div>
</a>
<a href="#" class="footer_nav_links w-inline-block">
<div>Shipping</div>
</a>
<a href="#" class="footer_nav_links w-inline-block">
<div>Returns</div>
</a>
</div>
<div class="footer_social">
<a href="#" class="footer_social_links w-inline-block"><img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a1bd99ee56a2889c0b6_bxl-facebook.svg" alt=""></a>
<a href="#" class="footer_social_links w-inline-block"><img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a26d99ee54c7189c0b9_bxl-twitter.svg" alt=""></a>
<a href="#" class="footer_social_links w-inline-block"><img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a2bd99ee560bf89c0bb_bxl-instagram.svg" alt=""></a>
</div>
</div>
</template>

<script setup lang="ts">
import useValidate from '@vuelidate/core';
import { required, maxLength, email } from '@vuelidate/validators';
const message = ref(false);

const form = reactive({
    first_name: '',
    last_name: '',
    email: '',
});

const rules = computed(() => {
    return {
        first_name: { required, maxLength: maxLength(256) },
        last_name: { required, maxLength: maxLength(256) },
        email: { required, email },
    }
});

const v$ = useValidate(rules, form);

const submitForm = (e: Event) => {
    e.preventDefault();

    v$.value.$validate();

    if (!v$.value.$pending && v$.value.$error) {
        return;
    } else {
        message.value = true;

        v$.value.$reset();
        form.first_name = '';
        form.last_name = '';
        form.email = '';

setTimeout(() => {
  message.value = false;
}, 3000);
    }

}
</script>

<style scoped>
.input-border-disable {
  border-top: none;
  border-left: none;
  border-right: none;
}

.form-group {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-right: 24px;
}

.form-group span {
  color: red;
  margin-top: 10px;
}
</style>