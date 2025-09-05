function showMessage() {
    const menuSection = document.getElementById("menu");
    const message = document.createElement("p");
    message.textContent = "✅ Thank you for your order! We will contact you soon.";
    message.style.color = "#ff4081";
    message.style.fontWeight = "bold";
    message.style.marginTop = "15px";

    menuSection.appendChild(message);

    const button = document.querySelector("button");
    button.disabled = true;
    button.textContent = "Order Placed ✅";
    button.style.background = "linear-gradient(45deg, #ff9a9e, #fad0c4)";
}
