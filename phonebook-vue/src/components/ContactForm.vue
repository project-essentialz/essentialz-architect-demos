<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { architectSDK, Contact } from "../architectSDKConfig";
import Header from "./Header.vue";

const route = useRoute();
const router = useRouter();
const firstName = ref("");
const lastName = ref("");
const phone = ref("");
const email = ref("");
const pictureUrl = ref("");
const file = ref<File | undefined>(undefined);

const image = computed(() => {
  if (image.value) {
    URL.revokeObjectURL(image.value);
  }
  if (file.value) {
    return URL.createObjectURL(file.value);
  }
});

const handleFileChange = (e: Event) => {
  file.value = (e.target as HTMLInputElement)?.files?.[0];
};

const discard = () => router.push("/contact-list");

const getContact = async () => {
  const id = route.params.id;
  if (id && typeof id === "string") {
    try {
      const contact = await architectSDK.contact.get(id);
      firstName.value = contact.firstName;
      lastName.value = contact.lastName;
      phone.value = contact.phone;
      email.value = contact.email;
      pictureUrl.value = contact.pictureUrl;
    } catch (e) {
      console.log(e);
    }
  }
};

onMounted(getContact);

const handleSubmit = async () => {
  const newContact = {
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
  } as Contact;

  try {
    if (file.value) {
      const { url } = await architectSDK.files.upload(file.value);
      newContact.pictureUrl = url;
    }
    if (route.params.id && typeof route.params.id === "string") {
      await architectSDK.contact.update(route.params.id, newContact);
    } else {
      await architectSDK.contact.create(newContact);
    }
    router.push("/contact-list");
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <Header />
  <div class="contact-wrapper">
    <div class="header">
      <h3>Title</h3>
    </div>
    <div class="form-wrapper">
      <form>
        <div class="form-field">
          <label for="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            v-model="firstName"
          />
        </div>
        <div class="form-field">
          <label for="lastName">Last name</label>
          <input type="text" name="lastName" id="lastName" v-model="lastName" />
        </div>
        <div class="form-field">
          <label for="phone">Phone</label>
          <input type="text" name="phone" id="phone" v-model="phone" />
        </div>
        <div class="form-field">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="email" />
        </div>
        <div class="file-wrapper">
          <img
            width="48"
            height="48"
            v-if="image || pictureUrl"
            :src="image || pictureUrl"
          />
          <label class="file-label" for="file">
            You can use <span>JPG or PNG</span> file
            <input
              type="file"
              class="file-input"
              accept=".jpg, .jpeg, .png"
              name="file"
              id="file"
              @change="handleFileChange"
            />
          </label>
        </div>
        <div @click.stop.prevent class="form-footer">
          <button class="btn btn-white" @click="discard">Discard</button>
          <button class="btn btn-purple" @click="handleSubmit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  padding: 20px;
  margin: auto;
  box-shadow: 0px 0px 0px 1px rgba(178, 204, 247, 0.5);
  border: 1px solid rgb(216, 215, 215);
}
.header {
  margin-bottom: 35px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.file-wrapper {
  height: 90px;
  border: 1px dashed rgb(209, 213, 219);
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.file-label {
  cursor: pointer;
  color: rgb(74, 74, 243);
}
input[type="file"] {
  height: 0;
  width: 0;
}
.form-footer {
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  width: 80%;
}
</style>
