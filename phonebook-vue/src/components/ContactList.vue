<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { architectSDK, Contact } from "../architectSDKConfig";
import Header from "./Header.vue";

const contacts = ref<Contact[]>([]);
const router = useRouter();

const getContacts = async () => {
  try {
    contacts.value = await architectSDK.contact.getAll();
  } catch (e) {
    console.log(e);
  }
};

const deleteContact = async (id: string) => {
  try {
    await architectSDK.contact.delete(id);
    contacts.value = contacts.value.filter(contact => contact.id !== id);
  } catch (e) {
    console.log(e);
  }
};

const editContact = (id: string) => router.push("/contact/" + id);

onMounted(getContacts);
</script>

<template>
  <Header />
  <div class="wrapper">
    <div class="list-header">
      <h3>Contact list</h3>
      <router-link to="/contact">
        <button class="btn btn-purple">Add contact</button>
      </router-link>
    </div>
    <ul>
      <li
        v-for="contact of contacts"
        :key="contact.id"
        @click="editContact(contact.id)"
      >
        <div class="info">
          <img
            v-if="contact.pictureUrl"
            :src="contact.pictureUrl"
            width="48"
            height="48"
          />
          <div class="personal-info">
            <div class="purple-text">
              {{ contact.firstName }} {{ contact.lastName }}
            </div>
            <div class="gray-text">{{ contact.phone }}</div>
          </div>
        </div>
        <div class="gray-text">{{ contact.email }}</div>
        <div>
          <button
            class="btn btn-danger"
            @click.stop="deleteContact(contact.id)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px;
  box-shadow: 0 0 0 2px rgb(216, 216, 216);
  margin: auto;
}
.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline-start: 40px;
}
ul {
  list-style-type: none;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  border-top: 1px solid rgb(216, 216, 216);
  padding: 10px 0;
  cursor: pointer;
}
.info {
  display: inline-flex;
  gap: 10px;
}
.personal-info > div {
  margin-bottom: 10px;
}
.purple-text {
  color: rgb(79, 70, 229);
  font-weight: 500;
}
.gray-text {
  color: rgb(107, 114, 128);
}
</style>
