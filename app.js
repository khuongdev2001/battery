let batteryIsCharging = false;
navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;
  alert(battery.level);


  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});