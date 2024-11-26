document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    let totalPrice = 0;

    const updateTotalPrice = (price) => {
        totalPrice += price;
        totalPriceEl.textContent = totalPrice.toFixed(2);
    };

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (e) => {
            const itemName = e.target.getAttribute("data-name");
            const itemPrice = parseFloat(e.target.getAttribute("data-price"));

            // Adicionar item ao carrinho
            const li = document.createElement("li");
            li.textContent = `${itemName} - R$ ${itemPrice.toFixed(2)}`;
            cartItems.appendChild(li);

            // Atualizar preço total
            updateTotalPrice(itemPrice);
        });
    });
});
