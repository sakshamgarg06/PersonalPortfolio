
const form = document.getElementById('form');
const fields = document.querySelectorAll('.item');
const errorTexts = document.querySelectorAll('.error-txt');

form.addEventListener('submit', function(e) {
  let valid = true;

  fields.forEach((field, index) => {
    if (field.value.trim() === '') {
      errorTexts[index].style.display = 'block';
      valid = false;
    } else {
      errorTexts[index].style.display = 'none';
    }
  });

  if (!valid) {
    e.preventDefault(); // Stop submission if invalid
  }
});