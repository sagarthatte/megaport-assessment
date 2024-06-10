<script setup></script>

<template>
	<div class="search">
		<label for="searchTerm">Search: &nbsp;</label>
		<input
			type="text"
			name="searchTerm"
			id="searchTerm"
			@input="$emit('filterItems', $event.target.value)"
			style="height: 25px"
		/>
	</div>
</template>

<style>
.search {
	align-items: center;
}
</style>
