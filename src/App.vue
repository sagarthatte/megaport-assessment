<script setup>
import BakedGoods from "@/components/BakedGoods.vue";
import AddItem from "@/components/AddItem.vue";
import FilterItems from "@/components/FilterItems.vue";
import ItemService from "@/services/ItemService";
import { onMounted, ref } from "vue";

const searchTerm = ref("");
const itemsList = ref([]);

onMounted(() => {
	ItemService.getItems()
		.then((response) => {
			itemsList.value = response.data;
		})
		.catch((error) => {
			console.log(error);
		});
});

function handleAddItem(addItemData) {
	itemsList.value.unshift(addItemData);

	document.getElementById("addItemMessage").style.display = "inline";

	setTimeout(() => {
		document.getElementById("addItemMessage").style.display = "none";
	}, 3000);
}

function handleFilterItems(value) {
	searchTerm.value = value;
}
</script>

<template>
	<div class="bakedGoodsData">
		<h1 class="title">Baked Goods</h1>
		<FilterItems @filterItems="handleFilterItems" />
		<BakedGoods :data="itemsList" :search-term="searchTerm" />
	</div>

	<div class="addItemsForm">
		<h2 class="title">Add New Baked Good</h2>
		<AddItem @addItem="handleAddItem" />
	</div>
</template>

<style scoped>
.addItemsForm {
	margin: 52px 5px;
	flex-basis: 40%;
}
.bakedGoodsData {
	margin: 10px 5px;
	flex-basis: 60%;
}
</style>
