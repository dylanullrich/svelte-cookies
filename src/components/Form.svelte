<!-- <script>
	// import { createEventDispatcher } from 'svelte';
	import CookieStore, { cityData } from './SalesTable/SalesTableLogic';

	// const dispatch = createEventDispatcher();

	// function updateTable() {
	// 	dispatch('updateTable', {
	// 		newStore: 'Hello!'
	// 	});
	// }

	export let cityName = '';
	// console.log(cityName);
	export let customerMin;
	// console.log(customerMin);
	export let customerMax;
	// console.log(customerMax);
	export let avgCookieSoldPerPerson;

	// export function handleSubmit() {
	// 	console.log(cityData);
	// 	// console.log(cityData);
	// 	console.log(new CookieStore(cityName, customerMin, customerMax, avgCookieSoldPerPerson));
	// 	cityData.push(new CookieStore(cityName, customerMin, customerMax, avgCookieSoldPerPerson));
	// 	cityData = [...cityData, cityData.length + 1];
	// }
</script>

<form on:submit|preventDefault={handleSubmit}>
	<fieldset>
		<legend><strong>Add Cookie Stand</strong></legend>
		<input bind:value={cityName} placeholder="Location" required />
		<input bind:value={customerMin} placeholder="Customer Minimum" type="number" required />

		<input bind:value={customerMax} placeholder="Customer Maximum" type="number" required />

		<input
			bind:value={avgCookieSoldPerPerson}
			placeholder="Sold Per Person"
			type="float"
			required
		/>

		<button type="submit">Submit</button>
	</fieldset>
</form> -->
