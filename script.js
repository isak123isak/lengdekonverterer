// HENT
const submitValue = document.querySelector('#submitValue');
console.log(submitValue);

// SEND
submitValue.addEventListener('click', () => {
  // HENT
  const inputValue = document.querySelector('#inputValue').value;
  console.log(inputValue);

  // HENT
  const displayValue = document.querySelector('#displayValue');
  console.log(displayValue);
  // MODIFISER
  displayValue.textContent = inputValue;
  //  HENT
  const fromValue = document.querySelector('#fromValue').value;
  console.log(fromValue);
  // HENT
  const toValue = document.querySelector('#toValue').value;
  console.log(toValue);
  let result;
  if ((fromValue === 'CM') & (toValue === 'M')) {
    // Kalkulering
    result = inputValue / 100;
  } else if ((fromValue === 'CM') & (toValue === 'KM')) {
    // Kalkulering
    result = inputValue / 100000;
  } else if ((fromValue === 'M') & (toValue === 'CM')) {
    // Kalkulering
    result = inputValue * 100;
  } else if ((fromValue === 'M') & (toValue === 'KM')) {
    // Kalkulering
    result = inputValue / 1000;
  } else if ((fromValue === 'KM') & (toValue === 'CM')) {
    // Kalkulering
    result = inputValue * 100000;
  } else if ((fromValue === 'KM') & (toValue === 'M')) {
    // Kalkulering
    result = inputValue * 1000;
  } else {
    console.log('Choose two different options!');
  }

  displayValue.textContent = result;
});
