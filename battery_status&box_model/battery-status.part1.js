//IN: The script will read the battery status data (in %)
//FACT: the factory settings indicate how long does a % last
//OUT: calculate how many minutes our device has left

// 1. Will create variables 
// camelCase - rule to name variables (without prefixes: var, let, const) 
//name: a..zA..Z0...9_

batteryCharge = 70  //%

FULL_BATTERY = 100  //100% full charged   ! notice different naming convention !
chargePercentInMinutes = 10 //1% ~10 min work time



estWorkInMinutes    = batteryCharge  * chargePercentInMinutes 
