/*
* @Author: Ime Iquoho Iquoho
* @StudentID: 460765
* @Date: 1/16/2025 (Backdated to January 2025)
* @Description: Graded Learning Activity focusing on HTML manipulation, exploring JavaScript fundamentals including variables, functions, CSS styling, input validation, and an interactive calculator.
*/

document.addEventListener('DOMContentLoaded', function () {
    // *********************************************
    // Step 1: Create an Introduction Section
    // *********************************************
    const introDiv = document.createElement('div');
    introDiv.id = 'intro';
    introDiv.style.cssText = "text-align: center; margin: 20px; font-size: 1.2em;";
    introDiv.innerHTML = `
      <p>Hello! I am Ime Iquoho Iquoho, a creative web developer passionate about dynamic designs and vibrant colors. I enjoy crafting engaging web experiences using HTML, CSS, and JavaScript.</p>
      <p>Contact me at: <a href="mailto:imeiquoho@yahoo.com">imeiquoho@yahoo.com</a> | Phone: (403) 899-7959</p>
    `;
    document.querySelector('main').appendChild(introDiv);
    
    // *********************************************
    // Step 2: Create an Interactive Calculator
    // *********************************************
    function createElementWithStyles(tag, styles = {}, attributes = {}) {
      const element = document.createElement(tag);
      Object.assign(element.style, styles);
      Object.assign(element, attributes);
      return element;
    }
    
    const container = createElementWithStyles('div', {
      textAlign: 'center',
      backgroundColor: '#333',
      color: '#FFF',
      padding: '20px',
      borderRadius: '10px',
      width: '50%',
      margin: '20px auto',
    });
    
    const input1 = createElementWithStyles('input', {
      margin: '10px',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #CCC',
      width: '30%',
      fontSize: '1em',
      color: '#333',
      backgroundColor: '#F9F9F9',
      outline: 'none',
    });
    
    const input2 = createElementWithStyles('input', {
      margin: '10px',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #CCC',
      width: '30%',
      fontSize: '1em',
      color: '#333',
      backgroundColor: '#F9F9F9',
      outline: 'none',
    });
    
    const button = createElementWithStyles('button', {
      display: 'inline-block',
      margin: '10px',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#AA0061',
      color: '#FFF',
      cursor: 'pointer',
    });
    button.textContent = 'Calculate Sum';
    
    const resultDiv = createElementWithStyles('div', {
      marginTop: '20px',
      fontSize: '1.5em',
      color: '#28A745',
      fontWeight: 'bold',
    });
    
    container.append(input1, input2, button, resultDiv);
    document.querySelector('main').appendChild(container);
    
    // Add event listener for calculator
    button.addEventListener('click', function () {
      const values = [input1.value.trim(), input2.value.trim()];
      const valid = values.map((value, i) => {
        const input = i === 0 ? input1 : input2;
        if (isNaN(value) || value === '') {
          input.style.borderColor = '#D40404';
          return false;
        }
        input.style.borderColor = '#28a745';
        return parseFloat(value);
      });
      
      if (valid.includes(false)) {
        resultDiv.textContent = 'Please enter valid numbers.';
      } else {
        const sum = valid.reduce((a, b) => a + b, 0);
        resultDiv.textContent = `Sum: ${sum}`;
        // Animate the result (fade-out then fade-in)
        resultDiv.style.transition = "opacity 1.5s";
        resultDiv.style.opacity = "0";
        setTimeout(() => {
          resultDiv.style.opacity = "1";
        }, 1500);
      }
    });
    
    // *********************************************
    // Step 3: Set Footer Content
    // *********************************************
    const footer = document.querySelector('footer');
    footer.innerHTML = `<p style="text-align: center; font-size: 0.9em;">&copy; January 2025 Ime Iquoho Iquoho</p>`;
  });
  