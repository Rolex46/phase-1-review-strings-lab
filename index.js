let currentUser = "Rolex";
let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
let excitedWelcomeMessage = welcomeMessage.toUpperCase();
let shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
// similar to : let shortGreeting = `Welcome, ${currentUser.charAt(0))}!`
console.log(shortGreeting);
