<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["filterItems"]);
const searchKey = ref("");

watch(searchKey, () => {
	if (searchKey.value) {
		emit("filterItems", searchKey.value);
	}
});
</script>

<template>
	<div class="search">
		<label for="searchTerm">Search: &nbsp;</label>
		<input
			type="text"
			name="searchTerm"
			id="searchTerm"
			v-model="searchKey"
			style="height: 25px"
		/>
	</div>
</template>

<style>
.search {
	align-items: center;
}
</style>
