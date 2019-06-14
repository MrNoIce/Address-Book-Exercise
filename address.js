const container = document.querySelector("#addressList");

document.querySelector("#saveEntry").addEventListener("click", event => {
  /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
  const personName = document.querySelector("#fullName").value;
  const personAddress = document.querySelector("#address").value;

  // Once you have collected all the values, update the DOM
  // with some HTML
  container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `;
});

const secondContainer = document.querySelector("#location");
document.querySelector("#saveAddy").addEventListener("click", event => {
  const storeName = document.querySelector("#storeName").value;
  const storeAddy = document.querySelector("#locationAddy").value;
  secondContainer.innerHTML += `
        <section>
            <h2>${storeName}</h2>
            <h3>${storeAddy}</h3>
        </section>
    `;
});
