const fs = require("fs");

// Task 1: Create Student Information File
fs.writeFile(
  "student.txt",
  `Name: Shivam Sah
Course: Full Stack Development
Technology: Node.js`,
  (err) => {
    if (err) {
      console.log("Error creating file:", err);
      return;
    }

    console.log("File created successfully");

    // Task 2: Read Student Information
    fs.readFile("student.txt", "utf8", (err, data) => {
      if (err) {
        console.log("Error reading file:", err);
        return;
      }

      console.log("\nStudent Information:");
      console.log(data);

      // Task 3: Update Student Information
      fs.appendFile(
        "student.txt",
        `\nExperience: 1 Year
City: Kolkata`,
        (err) => {
          if (err) {
            console.log("Error updating file:", err);
            return;
          }

          console.log("\nData updated successfully");

          // Task 4: Rename File
          fs.rename("student.txt", "studentDetails.txt", (err) => {
            if (err) {
              console.log("Error renaming file:", err);
              return;
            }

            console.log("File renamed successfully");

            // Task 5: Remove File
            fs.unlink("studentDetails.txt", (err) => {
              if (err) {
                console.log("Error deleting file:", err);
                return;
              }

              console.log("File deleted successfully");
            });
          });
        }
      );
    });
  }
);