document.getElementById("copyright").textContent = 
  new Date().getFullYear();
  
document.getElementById("lastUpdated").textContent = 
  new Date(document.lastModified).toLocaleDateString("en-US");