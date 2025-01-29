<template>
  <v-app>

    <v-app-bar density="default" color="primaryLight" elevation="0"  class="pl-4 pl-md-12 pr-4 pr-md-12 pt-0 pt-md-4 pb-4 pb-md-2 v-topbar">
		<v-row class="mt-2">
			<v-col cols="12" md=3 />
			<v-col cols="12" md="6">
				<v-row>
					<Search @input="onInput" @clear="onClear"/>
			    </v-row>
			</v-col>
			<v-spacer />
			<!--
				  <v-btn color="primary" class="input-heigt mr-0"><v-icon class="mr-4">mdi-plus</v-icon>Add contact</v-btn>
			-->
		</v-row>

      
    </v-app-bar>

    <v-main>
      <v-container fluid class="page-wrapper pt-7 pt-md-16">
		  <v-row>
			<v-col cols="3" />
			<v-col cols="12" md="6">
			  <v-card class="pa-5">
				  <Contacts :filter="filter" />
			  </v-card>
			</v-col>
		  </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup >
import { ref } from "vue";
import Contacts from "./Contacts.vue";
import Search from "./Search.vue";

const filter = ref("");

function onInput(val){
	filter.value = val;
}

function onClear(){
    filter.value("");
}

</script>

<style scoped>
.input-height{
	height:54px;
}
</style>