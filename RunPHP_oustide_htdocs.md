
Step 1 : cd XAMPP\apache\conf
Step 2 : open httpd.conf in vscode
Step 3 : find the word DocumentRoot 
It will be something like this
DocumentRoot "C:/Users/vms11/XAMPP/htdocs"
<Directory "C:/Users/vms11/XAMPP/htdocs">
change the directory inside the quotes with the directory of the project 
And there you go we can now run php files stored in the vs code workspace