<form>
	<fieldset>
		<legend><strong>Add Cookie Stand</strong></legend>
		<label for="name">Location</label>
		<input type="text" name="storeLocation" required />

		<label for="customerMin">Customer Minimum</label>
		<input type="number" name="customerMin" required />

		<label for="customerMax">Customer Maximum</label>
		<input type="number" name="customerMax" required />

		<label for="avgCookieSoldPerPerson">Average Cookies Sold Per Person</label>
		<input type="number" name="avgCookieSoldPerPerson" step="0.1" required />

		<button>Submit</button>
	</fieldset>
</form>
