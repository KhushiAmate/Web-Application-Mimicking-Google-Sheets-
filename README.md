Web Application Mimicking Google Sheets
Overview
This project is a web application that mimics the basic functionalities of Google Sheets. It provides a 10x10 editable spreadsheet with features for cell formatting, mathematical operations, data quality improvements, and file management (save and load). The application is designed using HTML, CSS, and JavaScript.

Features
Spreadsheet Initialization
Initializes a 10x10 editable spreadsheet grid with rows and columns labeled (A-J, 1-10).
Cell Selection and Formatting
Select a range of cells by specifying a column and row range.
Apply formatting options:
Bold
Italic
Underline
Mathematical Operations
Perform operations on selected cells with numerical values:
Sum
Average
Maximum
Minimum
Count
Data Quality Operations
Improve the quality of cell data with operations:
Trim whitespace
Convert to uppercase
Convert to lowercase
Remove duplicates
Find and Replace
Search for specific text within selected cells and replace it with new text.
File Management
Save: Export spreadsheet data as a JSON file.
Load: Import spreadsheet data from a JSON file to populate the grid.
Row and Column Management
Add or delete rows and columns dynamically.
Planned Features
Row and Column Resizing (not implemented yet).
Chart Generation (not implemented yet).
How to Use
1. Initialize Spreadsheet
The application initializes a 10x10 spreadsheet grid when the webpage loads.

2. Select Cells
Specify the column (e.g., A, B) and the start and end row (e.g., 1, 5) to select a range of cells for operations.

3. Apply Formatting
Click the format buttons to toggle formatting on the selected cells.

4. Perform Operations
Choose mathematical or data quality operations from the available options.

5. Save/Load Data
Save: Exports the spreadsheet data to a JSON file.
Load: Imports data from a JSON file and populates the spreadsheet.
6. Add/Delete Rows or Columns
Add Row/Column: Adds a new row or column to the spreadsheet.
Delete Row/Column: Removes the last row or column from the spreadsheet.
Folder Structure
bash
Copy code
root/
├── index.html      # Main HTML file
├── style.css       # Styles for the application
├── script.js       # JavaScript file containing the functionality
└── assets/         # Optional folder for assets like icons or images
Requirements
A modern web browser (Chrome, Firefox, Edge, etc.)
Basic understanding of spreadsheet usage.
