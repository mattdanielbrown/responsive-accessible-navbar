'use strict';

function main() {
  console.log('This is the main function');
}

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  main();
});
