<script>
	export let tableData = [
			{
				vitae : "dolorem",
				lectus : "ipsum",
				quisquam : "quia"
			},
			{
				vitae : "amet",
				lectus : "consectetur",
				quisquam : "adipisci"
			}
		];
	export let style;
</script>

<table class={style}>
	<thead>
		<tr>
			{#each Object.keys(tableData[0]) as columnHeading}
				<th>{columnHeading}</th>
			{/each}
		<tr/>
	</thead>
	<tbody>
		{#each Object.values(tableData) as row}
			<tr>
				{#each Object.values(row) as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table, th, td {
		border: 1px solid;
		border-collapse: collapse;
		margin-bottom: 10px;
	}
	
	table.redTable {
		border: 2px solid #A40808;
		background-color: #EEE7DB;
		width: 100%;
		text-align: center;
		border-collapse: collapse;
	}
	table.redTable td, table.redTable th {
		border: 1px solid #AAAAAA;
		padding: 3px 2px;
	}
	table.redTable tbody td {
		font-size: 13px;
	}
	table.redTable tr:nth-child(even) {
		background: #F5C8BF;
	}
	table.redTable thead {
		background: #A40808;
		background: -moz-linear-gradient(top, #bb4646 0%, #ad2020 66%, #A40808 100%);
		background: -webkit-linear-gradient(top, #bb4646 0%, #ad2020 66%, #A40808 100%);
		background: linear-gradient(to bottom, #bb4646 0%, #ad2020 66%, #A40808 100%);
	}
	table.redTable thead th {
		font-size: 19px;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		border-left: 2px solid #A40808;
	}
	table.redTable thead th:first-child {
		border-left: none;
	}
  </style>
