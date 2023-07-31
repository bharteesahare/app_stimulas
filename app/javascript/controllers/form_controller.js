// import { Controller } from 'stimulus';

// export default class extends Controller {
//   static targets = ['field'];

//   validate(event) {
//     event.preventDefault();

//     let isValid = true;
//     this.fieldTargets.forEach((field) => {
//       if (!this.validateField(field)) {
//         isValid = false;
//       }
//     });

//     if (isValid) {
//       event.target.submit();
//     } else {
//       console.log('Form is invalid. Please correct the errors.');
//     }
//   }

//   validateField(field) {
//     const fieldValue = field.value.trim();
//     const minLength = parseInt(field.dataset.minLength, 10);

//     if (fieldValue === '') {
//       console.log(`Field ${field.name} is required.`);
//       return false;
//     }

//     if (minLength && fieldValue.length < minLength) {
//       console.log(`Field ${field.name} must be at least ${minLength} characters long.`);
//       return false;
//     }

//     return true;
//   }
// }



// app/javascript/controllers/form_controller.js
// app/javascript/controllers/form_controller.js
// app/javascript/controllers/form_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["field", "errorContainerForTitle", "errorContainerForSlug"];

  validateField(event) {
    const field = event.target;
    const fieldValue = field.value.trim();

    if (fieldValue === "") {
      this.displayErrorMessage(field, `Field ${field.name} is required.`);
    } else {
      this.clearErrorMessage(field);
    }
  }

  displayErrorMessage(field, message) {
    const errorContainer = this.errorContainerForField(field);
    errorContainer.textContent = message;
  }

  clearErrorMessage(field) {
    const errorContainer = this.errorContainerForField(field);
    errorContainer.textContent = "";
  }

  errorContainerForField(field) {
    const fieldName = field.getAttribute("name");
    return this[`errorContainerFor${fieldName}`];
  }
}

