const form = document.getElementById('library-form'),
    inputs = document.querySelectorAll('input:not(.form-check-input)'),
    submit = document.getElementById('submit');


function validate(inputID) {
  const input = document.getElementById(inputID)

  const validityState = input.validity

  if (validityState.valueMissing) {
    input.setCustomValidity('cannot leave this blank')
  } else if
     (validityState.tooShort) {
    input.setCustomValidity('name too short')
  } else if
     (validityState.rangeUnderflow) {
    input.setCustomValidity('too few pages')
  } else {
    input.setCustomValidity('')
  }

  input.reportValidity()
}

function applyFormValidation(input) {
  validate(input.id);

  input.style.borderColor = (input.checkValidity()) ? 'blue' : 'red'
}


submit.onclick = () => {
  for(let i=0; i<inputs.length; i++) {
    let input = inputs[i]

    applyFormValidation(input)
  }
}

form.oninput = (e) => { applyFormValidation(e.target) }
