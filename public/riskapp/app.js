
// Dummy simulation loop
let interval;
function startSim() {
  interval = setInterval(() => {
    console.log("Simulating step...");
    // Update canvas and chart here in real build
  }, 1000);
}
function stopSim() {
  clearInterval(interval);
}
