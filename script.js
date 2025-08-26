function convertText(type) {
  const input = document.getElementById('inputText').value;
  let output = '';

  if (type === 'upper') {
    output = input.toUpperCase();
  } else if (type === 'lower') {
    output = input.toLowerCase();
  } else if (type === 'capital') {
    output = input
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  document.getElementById('outputText').value = output;
}

function clearText() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
}
