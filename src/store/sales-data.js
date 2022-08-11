
import { writable } from 'svelte/store';
	
export let studentsArray = writable([
	{
		"Name" : "Seattle",
		"Min / Cust" : "1",
		"Max / Cust" : 14,
		"Average Cookie / sale": 13
	},
	{
		"Name" : "Tokyo",
		"Favorite Subject" : "1",
		"Age" : 13,
		"Average Cookie / sale": 13
	},
	{
		"Name" : "Dubai",
		"Favorite Subject" : "1",
		"Age" : 14,
		"Average Cookie / sale": 13
	},
	{
		"Name" : "Paris",
		"Favorite Subject" : "1",
		"Age" : 14,
		"Average Cookie / sale": 13
	},
	{
		"Name" : "Lima",
		"Favorite Subject" : "1",
		"Age" : 14,
		"Average Cookie / sale": 13
	},
]);
