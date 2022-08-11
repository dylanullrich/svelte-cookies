<script>
	import { storeHours, totalByHour, cityData } from './SalesTableLogic';
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

<style>
	table,
	tr,
	th,
	td {
		border: 1px solid black;
	}
</style>
