// Fetch stored passwords from Chrome's storage
chrome.storage.sync.get(null, function(data) {
    var passwordList = document.getElementById('passwordList');
    
    // Iterate over the stored data and create table rows
    Object.keys(data).forEach(function(key) {
      var passwordEntry = data[key];
      var siteName = key;
      var username = passwordEntry.username;
      var password = passwordEntry.password;
  
      // Create table row
      var row = document.createElement('tr');
      var siteNameCell = document.createElement('td');
      var usernameCell = document.createElement('td');
      var passwordCell = document.createElement('td');
  
      // Set cell content
      siteNameCell.textContent = siteName;
      usernameCell.textContent = username;
      passwordCell.textContent = password;
  
      // Append cells to the row
      row.appendChild(siteNameCell);
      row.appendChild(usernameCell);
      row.appendChild(passwordCell);
  
      // Append row to the table
      passwordList.appendChild(row);
    });
  });
  