<script setup>
import BakedGoods from "./components/BakedGoods.vue";
import AddItem from "./components/AddItem.vue";
import FilterItems from "./components/FilterItems.vue";
import ItemService from "@/services/ItemService";
import { onMounted, reactive, ref } from "vue";

const searchTerm = ref("");
let bakedGoodsList = ref(null);

onMounted(() => {
	ItemService.getItems()
		.then((response) => {
			console.log(response);
			bakedGoodsList.value = response.data;
		})
		.catch((error) => {
			console.log(error);
		});
});

function handleAddItem(addItemData) {
	bakedGoodsList.value.push(addItemData._rawValue);

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
		<BakedGoods :data="bakedGoodsList" :search-term="searchTerm" />
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

.caption {
	position: fixed;
	top: 20px;
	left: 100px;
}
</style>
