// 'use strict';

// export const storeHours = [
// 	'6:00am',
// 	'7:00am',
// 	'8:00am',
// 	'9:00am',
// 	'10:00am',
// 	'11:00am',
// 	'12:00pm',
// 	'1:00pm',
// 	'2:00pm',
// 	'3:00pm',
// 	'4:00pm',
// 	'5:00pm',
// 	'6:00pm',
// 	'7:00pm'
// ];

// export let cityName = '';
// export let customerMin;
// export let customerMax;
// export let avgCookieSoldPerPerson;

// export function handleSubmit() {
// 	console.log(cityData);
// 	// console.log(cityData);
// 	console.log(new CookieStore(cityName, customerMin, customerMax, avgCookieSoldPerPerson));
// 	cityData.push(new CookieStore(cityName, customerMin, customerMax, avgCookieSoldPerPerson));
// 	cityData = [...cityData, cityData.length + 1];
// }

// // Holds Total by Hour
// export let totalByHour = [];

// export default class CookieStore {
// 	constructor(cityName, customerMin, customerMax, avgCookieSoldPerPerson) {
// 		this.cityName = cityName;
// 		this.customerMin = customerMin;
// 		this.customerMax = customerMax;
// 		this.avgCookieSoldPerPerson = avgCookieSoldPerPerson;
// 		this.cookiesSoldPerHour = [];
// 		this.generateSalesPerHour();
// 		this.totalSalesPerDayPerLoc = [];
// 		this.generateDailySalesTotal();
// 	}

// 	generateSalesPerHour() {
// 		for (let i = 0; i < storeHours.length; i++) {
// 			let answerSoldPerHour = Math.floor(
// 				(Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin) *
// 					this.avgCookieSoldPerPerson
// 			);
// 			this.cookiesSoldPerHour.push(answerSoldPerHour);
// 		}
// 	}

// 	generateDailySalesTotal() {
// 		let sum = 0;
// 		for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
// 			sum += this.cookiesSoldPerHour[i];
// 		}
// 		this.totalSalesPerDayPerLoc.push(sum);
// 	}
// }
