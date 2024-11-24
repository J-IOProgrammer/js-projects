const countries = document.getElementById('country');

countries.onchange = () => {
    document.getElementById('selected_country').innerHTML = countries.value + ' :';
}