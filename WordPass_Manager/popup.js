// Function to handle adding passwords
function addPassword() {
    var website = document.getElementById('website').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if required fields are not empty
    if (website && username && password) {
      // Send message to background script to save the credentials
      chrome.runtime.sendMessage({action: 'addPassword', website: website, username: username, password: password}, function(response) {
        console.log(response.message);
      });
  
      // Clear input fields after adding password
      document.getElementById('website').value = '';
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
  
      alert('Password added successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  // Function to handle deleting passwords
  function deletePassword() {
    var website = document.getElementById('website').value;
  
    // Check if website field is not empty
    if (website) {
      // Send message to background script to delete the password
      chrome.runtime.sendMessage({action: 'deletePassword', website: website}, function(response) {
        console.log(response.message);
      });
  
      // Clear input fields after deleting password
      document.getElementById('website').value = '';
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
  
      alert('Password deleted successfully!');
    } else {
      alert('Please enter a website to delete its password.');
    }
  }
  
  // Function to handle generating passwords
  function generatePassword() {
    // Generate a random password (you can customize this according to your requirements)
    var password = Math.random().toString(36).slice(-8); // Generates an 8-character random alphanumeric string
  
    // Set the generated password in the password input field
    document.getElementById('password').value = password;
  }
  