const formData = ['name','email','password'];
const required = ['name','email'];


if (required.every(field => formData.includes(field))) {
    console.log('All required fields are present.');
  }