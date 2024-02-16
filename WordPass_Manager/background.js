// This script will handle background tasks such as storing and retrieving data

// Example function to save username and password to Chrome's storage
function saveCredentials(website, username, password) {
    // Construct an object to store username and password
    var credentials = {
      username: username,
      password: password
    };
  
    // Use Chrome's storage API to save the credentials
    chrome.storage.sync.set({[website]: credentials}, function() {
      console.log('Credentials saved successfully:', credentials);
    });
  }
  
  // Example function to retrieve username and password from Chrome's storage
  function getCredentials(website, callback) {
    // Use Chrome's storage API to retrieve the credentials
    chrome.storage.sync.get(website, function(result) {
      var credentials = result[website];
      if (credentials) {
        console.log('Credentials retrieved successfully:', credentials);
        callback(credentials.username, credentials.password);
      } else {
        console.log('No credentials found for', website);
        callback(null, null);
      }
    });
  }
  
  // Example function to delete username and password from Chrome's storage
  function deleteCredentials(website) {
    // Use Chrome's storage API to remove the credentials
    chrome.storage.sync.remove(website, function() {
      console.log('Credentials removed for', website);
    });
  }
  