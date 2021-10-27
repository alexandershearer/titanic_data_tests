// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Returns a number.

const getTotalPassengers = (data) => {
	let count = 0
	data.forEach(() => count += 1)
	return count
}



// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

const getSurvivorCount = (data) => {
	let count = 0
	data.forEach(surv => {
		if (surv.fields.survived === "Yes") count += 1
	})
	return count
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// did not survive if their survived property is "No".
// Return a number.

const getCasualityCount = (data) => {
	let count = 0
	data.forEach(surv => {
		if (surv.fields.survived === "No") count += 1
	})
	return count
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Find all of the 
// passengers whose pclass matches and return the count. 
// Return a number

const countPassengersInClass = (data, pclass) => {
	return data.filter(p => p.fields.pclass === pclass).length
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. 
// Return the count of survivors in that pclass.

const getSurvivorCountForClass = (data, pclass) => {
	return data.filter(p => p.fields.survived === "Yes" && p.fields.pclass === pclass).length
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

const getCasualityCountForClass = (data, pclass) => {
	return data.filter(p => p.fields.survived === "No" && p.fields.pclass === pclass).length
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. 

const getMinAge = (data) => {
	const validAge = data.filter(p => p.fields.age !== undefined)
	const ages = validAge.map(p => p.fields.age)

	ages.sort((a, b) => a - b)
	return (ages[0])
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. Filter passengers where 
// age is missing.

const getMaxAge = (data) => {
	const validAge = data.filter(p => p.fields.age !== undefined)
	const ages = validAge.map(p => p.fields.age)

	ages.sort((a, b) => a - b)
	return (ages[ages.length - 1])
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. This function takes in the passenger data and the 
// embarkation code. Return the count of passenegers with that code.

const getEmbarkedCount = (data, embarked) => {
	return data.filter(p => p.fields.embarked === embarked).length
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out!

const getMinFare = (data) => {
	const validFare = data.filter(p => p.fields.fare !== undefined)
	const fares = validFare.map(p => p.fields.fare)
	const lowestFare = Math.min(...fares)

	return (lowestFare)
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare. Be sure to filter these! 

const getMaxFare = (data) => {
	const validFare = data.filter(p => p.fields.fare !== undefined)
	const fares = validFare.map(p => p.fields.fare)
	const highestFare = Math.max(...fares)

	return (highestFare)
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. Each passenger object has
// "sex" property that is either "male" or "female"

const getPassengersByGender = (data, gender) => {
	return data.filter(p => p.fields.sex === gender).length
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. This 
// function receives parameters of data and gender. Match the gender
// to the "sex" property and check the "survived" property. 

const getSurvivorsByGender = (data, gender) => {
	return data.filter(p => p.fields.survived === "Yes" && p.fields.sex === gender).length
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

const getCasualitiesByGender = (data, gender) => {
	return data.filter(p => p.fields.survived === "No" && p.fields.sex === gender).length
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid. Add up all of the fares and 
// return that number. Be sure to filter the passengers records 
// where the fare is missing! 

const getTotalFare = (data) => {
	const validFare = data.filter(p => p.fields.fare !== undefined)
	const fares = validFare.map(p => p.fields.fare)
	const total = fares.reduce((acc, num) => acc + num)

	return total
}

// 16 --------------------------------------------------------------
// Return the average fare paid. Add up all of the fares and divide 
// by the number of passengers. Be sure to filter passengers who are
// missing a fare! 

const getAverageFare = (data) => {
	const validFare = data.filter(p => p.fields.fare !== undefined)
	const fares = validFare.map(p => p.fields.fare)
	const total = fares.reduce((acc, num) => acc + num)

	const average = total / fares.length

	return average
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. Filter passengers who are 
// missing fares. Sort the passengers on the fare pick the one in
// the middle: [11,33,77] <- 33 is the median. If number of items 
// is even average the two middle values. For example: [2,4,5,16]
// 4 + 5 = 9 / 2 median is 4.5!

const getMedianFare = (data) => {
	const validFare = data.filter(p => p.fields.fare !== undefined)
	const fares = validFare.map(p => p.fields.fare)
	fares.sort((a, b) => a - b)

	const fareMedian = fares[Math.ceil(fares.length / 2)]

	return fareMedian
}

// 18 --------------------------------------------------------------
// Return the average age of all passengers. Add all ages and divide 
// by the number of passenegers. Be sure to filter where ages are not 
// available. 

const getAverageAge = (data) => {
	const validAge = data.filter(p => p.fields.age !== undefined)
	const ages = validAge.map(p => p.fields.age)
	const ageTotal = ages.reduce((acc, num) => acc + num)
	const averageAge = ageTotal / ages.length

	return averageAge
}

// 19 --------------------------------------------------------------
// Return the median age from passengers. Do that median thing of 
// finding the middle value. 

const getMedianAge = (data) => {
	const validAge = data.filter(p => p.fields.age !== undefined)
	const ages = validAge.map(p => p.fields.age)
	ages.sort((a, b) => a - b)

	const ageMedian = ages[Math.ceil(ages.length / 2)]

	return ageMedian
}

// 20 --------------------------------------------------------------
// Add up all of the ages for the gender provided and divide by the 
// the total number. 

const getAverageAgeByGender = (data, gender) => {
	let total = 0
	const validAgeSex = data.filter(p => p.fields.age !== undefined && p.fields.sex === gender)
	validAgeSex.forEach(p => total += p.fields.age)

	return total / validAgeSex.length
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getTotalPassengers,
	getSurvivorCount,
	getCasualityCount,
	countPassengersInClass,
	getSurvivorCountForClass,
	getCasualityCountForClass,
	getMinAge,
	getMaxAge,
	getEmbarkedCount,
	getMaxFare,
	getMinFare,
	getPassengersByGender,
	getSurvivorsByGender,
	getCasualitiesByGender,
	getTotalFare,
	getAverageFare,
	getMedianFare,
	getAverageAge,
	getMedianAge,
	getAverageAgeByGender
}