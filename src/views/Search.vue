<template>
	<v-text-field v-model="value" @click:clear="emit('clear')" @update:modelValue="onInput" prepend-inner-icon="mdi-magnify" bg-color="white" class="" clearable ></v-text-field>
</template>

<script setup>
import { ref} from "vue";

const value = ref(""); 

const emit = defineEmits(['input', 'clear']);

function onInput(val) {
	emit('input', val);
}
</script>

<style scoped>
.input-height{
	height:54px;
}
.v-text-field .v-field__outline::before,
.v-text-field .v-field__outline::after{
	display:none;
}

.v-text-field :deep(.v-field__outline){
	display:none;
}

.v-text-field :deep(.v-field__overlay){
	background-color:transparent;
}


.v-text-field :deep(.v-field__field),
.v-text-field :deep(.v-field__append-inner)
{
	background-color: rgb(var(--v-theme-superLight)) !important;
}



</style>
