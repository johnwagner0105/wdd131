const weather = 9;
const windSpeed = 5;

const windChill = (weather, windSpeed) => {
  return (
    13.12 +
    0.6215 * weather -
    11.37 * windSpeed ** 0.16 +
    0.3965 * weather * windSpeed ** 0.16
  );
};

let windChillContainer = document.getElementById("windChill");
windChillContainer.innerHTML = `
  ${Math.round(windChill(weather, windSpeed) * 10) / 10} °C`;
