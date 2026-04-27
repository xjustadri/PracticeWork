// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
const oneTimeTasks =[];
let monitoringTaskId = null;

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
	oneTimeTasks.push({func, delay});
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	oneTimeTasks.forEach(task => {
		setTimeout(task.func, task.delay);
	});
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	monitoringTaskId = setInterval(() => {
		console.log("Monitoring in progress...");
	},2000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	clearInterval(monitoringTaskId);
	monitoringTaskId = null;
}

// Task 6: Start Countdown Function
function startCountdown(duration){
let remaining = duration;

	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
	const countdowmId = setInterval(() => {
		console.log(`Time left: ${remaining}s`);
		remaining--;

		if(remaining < 0) {
			clearInterval(countdowmId);
			console.log("Liftoff!");
		}
	}, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
	addOneTimeTask(() =>{
		console.log("Pre-launch system check complete.");
	}, 1000);
	addOneTimeTask(()=>{
		console.log("Starting monitoring systems...");
		startMonitoring();
	}, 2000);
	addOneTimeTask(()=>{
		console.log("Stopping monitoring before launch...");
		stopMonitoring();
	}, 8000);
	addOneTimeTask(()=>{
		console.log("initiating countdown...");
		startCountdown(5);
	},9000);
}

scheduleMission(); // Starts the mission.
