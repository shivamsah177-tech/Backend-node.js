Assignment Explanation — Node.js File System
This assignment demonstrates how to create, read, update, rename, and delete files in Node.js using the built-in File System (fs) module.
Task 1: Create Student Information File
We use fs.writeFile() to create student.txt and store student details such as name, course, and technology.
Method: fs.writeFile()

Purpose: Creates a new file or replaces an existing file's content.

Task 2: Read Student Information
We use fs.readFile() to read the information stored in student.txt and display it in the terminal.
Method: fs.readFile()

Purpose: Reads data from a file.

The "utf8" encoding converts the file data into readable text.

Task 3: Update Student Information
We use fs.appendFile() to add additional information without deleting the existing data.
The following details are added:

Experience: 1 Year
City: Kolkata
Method: fs.appendFile()
Purpose: Adds new content at the end of an existing file.

Task 4: Manage File Name
We use fs.rename() to change:
student.txt
to:
studentDetails.txt
Method: fs.rename()
Purpose: Changes the name or location of a file.

Task 5: Remove File
Finally, we use fs.unlink() to delete studentDetails.txt.
Method: fs.unlink()

Purpose: Permanently removes a file.

Overall Flow
Create File
    ↓
Write Student Information
    ↓
Read File
    ↓
Append New Information
    ↓
Rename File
    ↓
Delete File
Conclusion
This assignment helps us understand the basic Node.js File System operations. The fs module allows Node.js programs to interact with files and perform operations such as writing, reading, updating, renaming, and deleting files.


1. Create a folder
Create a folder, for example:
student-file-management
Put these files inside:
student-file-management/
├── app.js
└── package.json
2. Open the folder in VS Code
Open the folder in VS Code.
3. Open Terminal
In VS Code:
Terminal → New Terminal
4. Check Node.js
Run:
node --version
If you see something like:
v22.x.x
Node.js is installed.
5. Run the program
Since your package.json contains:
"start": "node app.js"
run:
npm start
Or directly:
node app.js
6. Check the output
You should see something like:
File created successfully

Student Information:
Name: Your Name
Course: Full Stack Development
Technology: Node.js

Data updated successfully
File renamed successfully
File deleted successfully
⚠️ Important
Because Task 5 deletes the file, after running the complete program, studentDetails.txt will disappear.
If you want to see the final file before deleting it, temporarily comment out Task 5:
// fs.unlink("studentDetails.txt", (err) => {
//   ...
// });
Then run:
node app.js


OUTPUT OF Student Information - 

File created successfully

Student Information:
Name: Your Name
Course: Full Stack Development
Technology: Node.js

Data updated successfully
File renamed successfully
File deleted successfully
