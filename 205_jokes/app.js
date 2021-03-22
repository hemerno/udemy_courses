document.querySelector('.get-quotes').addEventListener('click', getQuotes);

function getQuotes(event) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.kanye.rest', true);

  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);

    let output = '';

    if (xhr.statusText === 'OK') {
      output += `<li>${response.quote}</li>`;
    } else {
      output += '<li>ERROR</li>';
    }

    document.querySelector('.quotes').innerHTML += output;
  };

  xhr.send();

  event.preventDefault();
}
