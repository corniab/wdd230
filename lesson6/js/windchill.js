// Calculates and returns windchill factor.
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windspeed = parseFloat(document.getElementById("windspeed").textContent);

const windchill = Math.round(35.74 + (.6215*temperature) - (35.75*Math.pow(windspeed, .16)) + (.4725*temperature*Math.pow(windspeed, .16)))

document.getElementById("windchill").textContent = windchill