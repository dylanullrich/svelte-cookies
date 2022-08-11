<script>
	import Nav from '../components/Nav.svelte';
	import Table from '../components/Table.svelte';
	import { studentsArray } from '../store/sales-data';
	import Input from '../components/Input.svelte'
	
	let redStyle = "redTable";
</script>

<h1>Salmon Cookies</h1>
<h2>SALES</h2>

<style>
</style>

<Table tableData={$studentsArray} style={redStyle}/>

<Input/>