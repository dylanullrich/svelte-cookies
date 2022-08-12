<script>
	const storeHours = [
		'6:00am',
		'7:00am',
		'8:00am',
		'9:00am',
		'10:00am',
		'11:00am',
		'12:00pm',
		'1:00pm',
		'2:00pm',
		'3:00pm',
		'4:00pm',
		'5:00pm',
		'6:00pm',
		'7:00pm'
	];

	// Holds Total by Hour
	let totalByHour = [];

	class CookieStore {
		constructor(cityName, customerMin, customerMax, avgCookieSoldPerPerson) {
			this.cityName = cityName;
			this.customerMin = customerMin;
			this.customerMax = customerMax;
			this.avgCookieSoldPerPerson = avgCookieSoldPerPerson;
			this.cookiesSoldPerHour = [];
			this.generateSalesPerHour();
			this.totalSalesPerDayPerLoc = [];
			this.generateDailySalesTotal();
		}

		generateSalesPerHour() {
			for (let i = 0; i < storeHours.length; i++) {
				let answerSoldPerHour = Math.floor(
					(Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin) *
						this.avgCookieSoldPerPerson
				);
				this.cookiesSoldPerHour.push(answerSoldPerHour);
			}
		}

		generateDailySalesTotal() {
			let sum = 0;
			for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
				sum += this.cookiesSoldPerHour[i];
			}
			this.totalSalesPerDayPerLoc.push(sum);
		}
	}

	export let cityName = '';
	export let customerMin = [];
	export let customerMax = [];
	export let avgCookieSoldPerPerson = [];

	function handleSubmit() {
		cityData.push(new CookieStore(cityName, customerMin, customerMax, avgCookieSoldPerPerson));
		cityData = cityData;
	}

	let cityData = [
		new CookieStore('Seattle', 23, 65, 6.3),
		new CookieStore('Tokyo', 3, 24, 1.2),
		new CookieStore('Dubai', 11, 38, 3.7),
		new CookieStore('Paris', 20, 38, 2.3),
		new CookieStore('Lima', 2, 16, 4.6)
	];

	function generateHourlySalesTotal() {
		for (let i = 0; i < storeHours.length; i++) {
			let sumHourlyTotal = 0;
			for (let j = 0; j < cityData.length; j++) {
				sumHourlyTotal += cityData[j].cookiesSoldPerHour[i];
			}
			totalByHour[i] = sumHourlyTotal;
		}
	}

	$: if (cityData) generateHourlySalesTotal();
</script>

<table>
	<tr>
		<th>Location</th>
		{#each storeHours as hour}
			<th>{hour}</th>
		{/each}
		<th>Total</th>
	</tr>
	{#each cityData as city}
		<tr>
			<!-- Store Location -->
			<td>{city.cityName}</td>
			<!-- Sales per hour -->
			{#each city.cookiesSoldPerHour as cookiesSoldPerHour}
				<td>{cookiesSoldPerHour}</td>
			{/each}
			{#each city.totalSalesPerDayPerLoc as totalPerLocation}
				<td>{totalPerLocation}</td>
			{/each}
		</tr>
	{/each}
	<tr>
		<td><strong>Total</strong></td>
		{#each totalByHour as hourly}
			<td>{hourly}</td>
		{/each}
	</tr>
</table>

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
</form>

<style>
	table,
	tr,
	th,
	td {
		border: 1px solid black;
	}
</style>
