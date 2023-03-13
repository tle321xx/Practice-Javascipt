let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`Runner ${raceNumber} will race at 9:30 am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18 ) {

  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`);
} else if (age === 25 && registeredEarly) {
  console.log(`Runner ${raceNumber} will race at 9:30 am.`);
} else if (age === 25 && !registeredEarly) {
  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age === 16 && registeredEarly) {
  (`Runner ${raceNumber} will race at 12:30 pm.`);
} else if (age === 16 && !registeredEarly) {
  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age === 18) {
  console.log('Please see the registration desk.');
} else if (age < 18) {
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`);
}































