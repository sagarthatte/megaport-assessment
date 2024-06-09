<script setup>
	import { ref } from 'vue';

	const emit = defineEmits(['addItem']);

	const formValues = ref({
		id: '0001',
		type: '',
		name: '',
		topping: ''
	});

	function handleAddItem () {
		const addItemData = { ...formValues };
		// Emit event with form data for main app.
		emit('addItem', addItemData);

		formValues.value = {
			id: '0001',
			type: '',
			name: '',
			topping: ''
		};
	}
</script>

<template>
	<form @submit.prevent="handleAddItem()">
		<div class="formElems">
			<div>
				<label for="id">ID:</label>
				<input type="text" id="id" v-model="formValues.id" required />
			</div>
			<div>
				<label for="type">Type:</label>
				<input type="text" id="type" v-model="formValues.type" required />
			</div>
			<div>
				<label for="name">Name:</label>
				<input type="text" id="name" v-model="formValues.name" required />
			</div>
			<div>
				<label for="topping">Topping:</label>
				<input type="text" id="topping" v-model="formValues.topping" required />
			</div>
			<div>
				<button type="submit">Add</button>
			</div>
			<div>
				<span id="addItemMessage">New Item Added !</span>
			</div>
		</div>
		
	</form>
</template>

<style>

	#addItemMessage {
		display: none;
		font-weight: medium;
		color: #00dd39;
	}
	button[type='submit'] {
		height: 25px;
		margin: 5px 0px;
		background-color: #4445E5;
		color: #f9f9f9;
		border-radius: 3px;
		font-weight: bold;
	}
	label {
		font-weight:600;
	}
	
	.formElems {
		border: 1px solid #4445E5;
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.formElems div {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>