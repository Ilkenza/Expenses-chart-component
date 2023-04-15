fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const chartElements = document.querySelectorAll('.char');
    chartElements.forEach((element, index) => {
      const amount = data[index].amount;
      element.setAttribute('data-chartAmount', '$' + amount);
    });
  })
  .catch(error => console.error(error));