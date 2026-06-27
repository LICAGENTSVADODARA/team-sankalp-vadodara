const form = document.getElementById('leadForm');
const note = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      'Hello Rahul Sharma, I am interested in LIC Agent Vadodara / LIC Advisor Vadodara guidance with Team Sankalp.',
      '',
      'Name: ' + data.get('name'),
      'Mobile: ' + data.get('mobile'),
      'City: ' + data.get('city'),
      'Occupation: ' + data.get('occupation'),
      'Already in insurance: ' + data.get('insurance')
    ].join('\n');

    note.textContent = 'Opening WhatsApp with your application details.';
    window.open('https://wa.me/918160895724?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  });
}
