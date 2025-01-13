// Initialize 10x10 Spreadsheet
const initializeSpreadsheet = () => {
    const spreadsheet = document.getElementById('spreadsheet');
    const thead = spreadsheet.querySelector('thead tr');
    const tbody = spreadsheet.querySelector('tbody');
  
    // Clear current table
    thead.innerHTML = '<th></th>';
    tbody.innerHTML = '';
  
    // Generate column headers
    for (let i = 0; i < 10; i++) {
      const th = document.createElement('th');
      th.textContent = String.fromCharCode(65 + i); // A, B, C, ...
      thead.appendChild(th);
    }
  
    // Generate rows with columns
    for (let i = 1; i <= 10; i++) {
      const row = document.createElement('tr');
      const headerCell = document.createElement('td');
      headerCell.textContent = i; // Row number
      row.appendChild(headerCell);
  
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        cell.contentEditable = true;
        row.appendChild(cell);
      }
  
      tbody.appendChild(row);
    }
  };
  
  const getSelectedCells = () => {
    const col = document.getElementById('col-select').value.toUpperCase();
    const rowStart = parseInt(document.getElementById('row-start').value, 10);
    const rowEnd = parseInt(document.getElementById('row-end').value, 10);
    const colIndex = col.charCodeAt(0) - 65;
  
    const cells = [];
    for (let i = rowStart; i <= rowEnd; i++) {
      const row = document.querySelector(`#spreadsheet tbody tr:nth-child(${i})`);
      if (row) {
        const cell = row.children[colIndex + 1];
        if (cell) cells.push(cell);
      }
    }
  
    return cells;
  };
  
  const applyFormat = (format) => {
    const selectedCells = getSelectedCells();
    selectedCells.forEach(cell => {
      switch (format) {
        case 'bold':
          cell.style.fontWeight = (cell.style.fontWeight === 'bold') ? 'normal' : 'bold';
          break;
        case 'italic':
          cell.style.fontStyle = (cell.style.fontStyle === 'italic') ? 'normal' : 'italic';
          break;
        case 'underline':
          cell.style.textDecoration = (cell.style.textDecoration === 'underline') ? 'none' : 'underline';
          break;
      }
    });
  };
  
  const performMathFunction = (func) => {
    const selectedCells = getSelectedCells();
    const values = selectedCells.map(cell => parseFloat(cell.textContent)).filter(val => !isNaN(val));
  
    let result;
    switch (func) {
      case 'sum':
        result = values.reduce((acc, val) => acc + val, 0);
        break;
      case 'average':
        result = values.reduce((acc, val) => acc + val, 0) / values.length;
        break;
      case 'max':
        result = Math.max(...values);
        break;
      case 'min':
        result = Math.min(...values);
        break;
      case 'count':
        result = values.length;
        break;
    }
  
    document.getElementById('result-display').textContent = `Result: ${result}`;
  };
  
  const performDataQuality = (operation) => {
    const selectedCells = getSelectedCells();
  
    selectedCells.forEach(cell => {
      switch (operation) {
        case 'trim':
          cell.textContent = cell.textContent.trim();
          break;
        case 'upper':
          cell.textContent = cell.textContent.toUpperCase();
          break;
        case 'lower':
          cell.textContent = cell.textContent.toLowerCase();
          break;
        case 'removeDuplicates':
          const uniqueValues = [...new Set(selectedCells.map(cell => cell.textContent))];
          selectedCells.forEach((cell, index) => {
            cell.textContent = uniqueValues[index] || '';
          });
          break;
      }
    });
  };
  
  const performFindAndReplace = () => {
    const findText = prompt("Enter text to find:");
    const replaceText = prompt("Enter text to replace with:");
    const selectedCells = getSelectedCells();
  
    selectedCells.forEach(cell => {
      cell.textContent = cell.textContent.replace(new RegExp(findText, 'g'), replaceText);
    });
  };
  
  const saveFile = () => {
    const spreadsheet = document.getElementById('spreadsheet');
    const data = [];
  
    const rows = spreadsheet.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const rowData = [];
      const cells = row.querySelectorAll('td');
      cells.forEach(cell => {
        rowData.push(cell.textContent);
      });
      data.push(rowData);
    });
  
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'spreadsheet.json';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  const loadFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        const spreadsheet = document.getElementById('spreadsheet');
        const tbody = spreadsheet.querySelector('tbody');
  
        // Clear current table
        tbody.innerHTML = '';
  
        data.forEach((rowData, rowIndex) => {
          const row = document.createElement('tr');
          const headerCell = document.createElement('td');
          headerCell.textContent = rowIndex + 1;
          row.appendChild(headerCell);
  
          rowData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.contentEditable = true;
            cell.textContent = cellData;
            row.appendChild(cell);
          });
  
          tbody.appendChild(row);
        });
      };
      reader.readAsText(file);
    };
    input.click();
  };
  
  const performOperation = () => {
    // Implement your perform operation logic here
    alert('Perform operation function not yet implemented.');
  };
  
  const generateChart = () => {
    // Implement your chart generation logic here
    alert('Chart generation function not yet implemented.');
  };
  
  const addRow = () => {
    const spreadsheet = document.getElementById('spreadsheet').querySelector('tbody');
    const newRow = document.createElement('tr');
    const rowCount = spreadsheet.childNodes.length + 1;
    const headerCell = document.createElement('td');
    headerCell.textContent = rowCount;
    newRow.appendChild(headerCell);
  
    const colCount = document.getElementById('spreadsheet').querySelector('thead tr').childElementCount - 1;
    for (let i = 0; i < colCount; i++) {
      const cell = document.createElement('td');
      cell.contentEditable = true;
      newRow.appendChild(cell);
    }
    spreadsheet.appendChild(newRow);
  };
  
  const deleteRow = () => {
    const spreadsheet = document.getElementById('spreadsheet').querySelector('tbody');
    if (spreadsheet.lastChild) {
      spreadsheet.removeChild(spreadsheet.lastChild);
    }
  };
  
  const resizeRow = () => {
    // Implement your row resizing logic here
    alert('Row resizing function not yet implemented.');
  };
  
  const addColumn = () => {
    const spreadsheet = document.getElementById('spreadsheet');
    const thead = spreadsheet.querySelector('thead tr');
    const colCount = thead.childElementCount;
  
    const th = document.createElement('th');
    th.textContent = String.fromCharCode(64 + colCount);
    thead.appendChild(th);
  
    const rows = spreadsheet.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const cell = document.createElement('td');
      cell.contentEditable = true;
      row.appendChild(cell);
    });
  };
  
  const deleteColumn = () => {
    const spreadsheet = document.getElementById('spreadsheet');
    const thead = spreadsheet.querySelector('thead tr');
    const colCount = thead.childElementCount;
  
    if (colCount > 1) {
      thead.removeChild(thead.lastChild);
  
      const rows = spreadsheet.querySelectorAll('tbody tr');
      rows.forEach(row => {
        row.removeChild(row.lastChild);
      });
    }
  };
  
  const resizeColumn = () => {
    // Implement your column resizing logic here
    alert('Column resizing function not yet implemented.');
  };
  
  // Initialize the spreadsheet on page load
  window.onload = initializeSpreadsheet;
  