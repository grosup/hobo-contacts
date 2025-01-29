<template>
      <v-table>
        <thead>
          <tr>
            <th>Name</th>
            <th class="text-right">Number</th>
			<!--
            <th class="text-right" ></th>
			-->
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filtered" @click="call" >
            <td>{{ row.name }}</td>
            <td class="text-right"><a :href="callLink(row.number)" >{{ row.number }}</a></td>
			<!--
			<td class="text-right">
				<v-btn icon variant="text">
					<v-icon>
						mdi-pencil
					</v-icon>
				</v-btn>
			</td>
			-->
          </tr>
        </tbody>
      </v-table>
</template>


<script setup>
import {ref, watch, computed} from "vue";
import axios from "axios";
import credentials from "@/config/config.js";

const contacts = ref();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
let options = {};
console.log("on prod: " + import.meta.env.PROD);
console.log("on production: " + import.meta.env.PRODUCTION);
if (import.meta.env.PROD){
	options = { 
		auth:{
			username: credentials.username,
			password: credentials.password
		}
	};
}
console.log("options" + JSON.stringify(options));
axios.get(`/`, options)
     .then((response) => {
		contacts.value = response.data.contacts;
	 })
     .catch();

const props = defineProps({
  filter: {
    type: String,
    default: "",
  }
});

const filtered = computed( () => {
		return !contacts.value ? [] : contacts.value.filter(item => {
			return item.name.toLowerCase().includes(props.filter.toLowerCase()) || item.number.toLowerCase().includes(props.filter.toLowerCase());
		});
});

function callLink(number){
	return "tel:" + number;
}



</script>


