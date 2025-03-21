const apiKey = 'AIzaSyCWvzM33WQDV7QBsab9g65KS-h8_UTcQSk'; // Substitua pela sua chave de API

document.getElementById('energy-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const residents = document.getElementById('residents').value;
    const region = document.getElementById('region').value;
    const appliances = document.getElementById('appliances').value;

    const prompt = `Dê dicas de economia de energia para uma casa com ${residents} moradores na região ${region} do Brasil, que utilizam os seguintes eletrodomésticos: ${appliances}.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCWvzM33WQDV7QBsab9g65KS-h8_UTcQSk`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: prompt,
                }],
            }],
        }),
    });

    const data = await response.json();
    document.getElementById('result').textContent = data.candidates[0].content.parts[0].text;
});