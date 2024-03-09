//The Tour Budget Calculator is a web-based tool designed to help travelers plan their expenses for various destinations over a specified duration. This calculator allows users to input their destination country, select their preferred travel category (normal, business, premium), and specify the number of months for their trip. Based on these inputs, the calculator provides a detailed breakdown of expenses including accommodation, transportation, meals, sightseeing, and miscellaneous costs. Additionally, it calculates the total cost for the specified duration and offers the option to download a comprehensive budget report for offline reference.

//**Features:**
//- Input fields for selecting destination country, travel category, and duration of the trip.
//- Calculation of total expenses based on selected inputs.
//- Detailed breakdown of expenses for each category (accommodation, transportation, meals, etc.).
//- Option to download a budget report in text format for offline reference.
//- Stylish and responsive user interface with animated backgrounds and gradient text effects.

//**Libraries/Frameworks Used:**
//- **HTML**: Markup language for structuring the webpage.
//- **CSS**: Styling language for enhancing the visual appearance of the webpage, including background images and gradient text effects.
//- **JavaScript**: Programming language for implementing the budget calculation logic and adding interactivity to the webpage.

const prices = {
    China: { normal: 1000, business: 2000, premium: 3000 },
    Taiwan: { normal: 1200, business: 2200, premium: 3200 },
    Japan: { normal: 1500, business: 2500, premium: 3500 },
    Korea: { normal: 1300, business: 2300, premium: 3300 },
    Vietnam: { normal: 800, business: 1800, premium: 2800 },
    Germany: { normal: 2000, business: 3000, premium: 4000 },
    Canada: { normal: 1800, business: 2800, premium: 3800 },
    Australia: { normal: 2200, business: 3200, premium: 4200 },
    Mexico: { normal: 900, business: 1900, premium: 2900 },
    Norway: { normal: 2500, business: 3500, premium: 4500 },
    Indonesia: { normal: 700, business: 1700, premium: 2700 },
    Thailand: { normal: 850, business: 1850, premium: 2850 },
    USA: { normal: 1800, business: 2800, premium: 3800 },
    UK: { normal: 1900, business: 2900, premium: 3900 }
  };

  const expenses = {
    normal: { accommodation: 500, transportation: 300, meals: 400, sightseeing: 200, miscellaneous: 100 },
    business: { accommodation: 1000, transportation: 500, meals: 800, sightseeing: 400, miscellaneous: 200 },
    premium: { accommodation: 1500, transportation: 800, meals: 1200, sightseeing: 600, miscellaneous: 300 }
  };

  function calculateBudget() {
    const country = document.getElementById('country').value;
    const category = document.getElementById('category').value;
    const months = parseInt(document.getElementById('months').value);

    const totalExpenses = Object.keys(expenses[category]).reduce((acc, key) => acc + expenses[category][key], 0);
    const totalCost = totalExpenses * months + prices[country][category] * months;

    const results = document.getElementById('results');
    results.innerHTML = `
      <p><strong>Cost Details for ${category} category:</strong></p>
      <ul>
        <li>Accommodation: $${expenses[category].accommodation} per month</li>
        <li>Transportation: $${expenses[category].transportation} per month</li>
        <li>Meals: $${expenses[category].meals} per month</li>
        <li>Sightseeing: $${expenses[category].sightseeing} per month</li>
        <li>Miscellaneous: $${expenses[category].miscellaneous} per month</li>
      </ul>
      <p>Total cost for ${months} months in ${country} (${category}): $${totalCost}</p>
    `;

    document.getElementById('downloadBtn').style.display = 'block';
    document.getElementById('downloadBtn').onclick = function() {
      downloadReport(`Tour_Budget_Report_${country}_${category}.txt`, results.innerHTML);
    };
  }

  function downloadReport(filename, text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }