const USD = 5.86;
const EUR = 6.3;
const GBP = 7.3;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const description = document.querySelector("#description");
const footer = document.querySelector("main footer");
result = document.querySelector("#result");

amount.addEventListener("input", () => {
  const hasCaractersRexes = /\D+/g;
  if (hasCaractersRexes.test(amount.value)) {
    amount.value = amount.value.replace(hasCaractersRexes, "");
  }
});

form.onsubmit = (event) => {
  event.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");

      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");

      break;
  }
};

function convertCurrency(amount, price, Symbol) {
  try {
    description.textContent = `${Symbol} 1 = ${formatCurrencyBrl(price)} `;

    let total = amount * price;
     
    result.textContent = formatCurrencyBrl(total);

    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("Ocorreu um erro, tente novamente");
  }
}


function formatCurrencyBrl(value) {
 return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}