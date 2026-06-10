

so My Calculator Web App

I built a simple calculator web app from scratch using HTML, CSS, and pure JavaScript to handle basic math like addition, subtraction, multiplication, division, and percentages. Honestly, my main goal here was just to get better at JavaScript basics, specifically dealing with DOM manipulation, event handling, and logic.

For the setup, I used a clean, dark-mode design inspired by modern phone calculators. I used CSS Grid to arrange the circular buttons and set the input screen to readonly so users are forced to use the actual UI buttons.

On the JavaScript side, I attached an event listener to all the buttons at once as soon as the page loads. When a user hits the equals button, the script swaps out visual symbols like the multiplication sign for code operators and runs the calculation. I wrapped the whole math engine in a try-catch block, meaning if someone enters a broken expression, the screen just shows a clean "Error" instead of crashing the browser.

The biggest headache was operator spam, like users typing multiple plus signs in a row. I fixed this by writing a quick check that looks at the very last character entered before allowing a new operator to go through.

This project really helped me get comfortable managing raw user input and handling errors dynamically. If I upgrade it next time, I want to add keyboard support and a calculation history log. Most importantly, I need to ditch the eval function and write a custom calculation algorithm from scratch, since eval is generally bad practice for security.