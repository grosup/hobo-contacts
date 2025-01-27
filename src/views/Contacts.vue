<template>
      <v-table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th class="text-right" ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filtered" @click="call"  :key="row.number">
            <td>{{ row.name }}</td>
            <td><a :href="callLink(row.number)" >{{ row.number }}</a></td>
			<td class="text-right">
				<v-btn icon variant="text">
					<v-icon>
						mdi-pencil
					</v-icon>
				</v-btn>
			</td>
          </tr>
        </tbody>
      </v-table>
</template>


<script setup lang="ts">
import {ref, watch, computed} from "vue";
const rows = ref([
	{
		name:"martin Grosup",
		number:"+420 603 31",
	},
	{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
		{
		name:"Tomas Grosup",
		number:"+420 12345",
	},
	
]);

const props = defineProps({
  filter: {
    type: String,
    default: "",
  }
});


const filtered = computed( () => {
		return rows.value.filter(item => {
			console.log(item);
			return item.name.toLowerCase().includes(props.filter.toLowerCase()) || item.number.toLowerCase().includes(props.filter.toLowerCase());
		});
});

function callLink(number){
	return "tel:" + number;
}


watch(() => props.filter, (newValue, oldValue) => {
 // React to prop changes
 console.log('Prop changed:', newValue);
});

</script>


