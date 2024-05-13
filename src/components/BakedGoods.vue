<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
	data: Array,
	searchTerm: String
});


const sortKey = ref('');
const sortOrder = ref('asc');

// Need to create a computed list, so that the list gets re-rendered each time ??
const filteredList = computed(() => {
	let { data, searchTerm } = props;
	const key = sortKey.value;
	const order = sortOrder.value;


	// Filter by search term
	if (searchTerm) {
		data = data.filter((row) => {
			return Object.keys(row).some((key) => {
				return String(row[key]).toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
			});
		});
	}

	// Sorting based on order
	if (key) {
		data = data.slice().sort((a, b) => {
			a = a[key];
			b = b[key];
			return (a === b ? 0 : a > b ? 1 : -1) * (order === 'desc' ? -1 : 1);
		});
	}
	return data;
})

function sortBakedGoods(prop, order='asc') {
	sortKey.value = prop;
	sortOrder.value = order;
}

</script>

<template>
	<div id="bakedGoodsGrid">
		<table>
			<thead>
				<tr>
					<th style="width:5%">
						ID <button @click="sortBakedGoods('id', 'asc')">&#8593;</button>
						<button @click="sortBakedGoods('id', 'desc')">&#8595;</button>
					</th>
					<th style="width:30%">
						Type <button @click="sortBakedGoods('type', 'asc')">&#8593;</button>
						<button @click="sortBakedGoods('type', 'desc')">&#8595;</button>
					</th>
					<th>
						Name
					</th>
					<th>
						Topping <button @click="sortBakedGoods('topping', 'asc')">&#8593;</button>
						<button @click="sortBakedGoods('topping', 'desc')">&#8595;</button>
					</th>
				</tr>
			</thead>
			<tbody>
				<template v-if="filteredList.length">
					<tr v-for="item in filteredList" :key="item.id">
						<td>{{ item.id }}</td>
						<td>{{ item.type }}</td>
						<td>{{ item.name }}</td>
						<td>{{ item.topping }}</td>
					</tr>
				</template>
				<template v-else>
					<tr>
						<td colspan="4">No matching data</td>
					</tr>
				</template>
			</tbody>
		</table>
	</div>
</template>

<style>

	#bakedGoodsGrid {
		display: block;
		align-items: center;
	}
	
	table {
		border: 2px solid #f9f9f9;
		border-radius: 3px;
		background-color: #fff
	}

	th {
		background-color: #4445E5;
		color: #fff;
		cursor: pointer;
		user-select: none;
		text-align: center;
	}

	td {
		background-color: #f9f9f9;
		text-align: center;
	}

	th, td {
		min-width: 120px;
		padding: 10px 20px;
		align-items: center;
	}
	
	th.active {
		color: #fff;
	}
</style>