document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("visibility-select");
    const documento1 = document.getElementById("documento_1");
    const documento2 = document.getElementById("documento_2");
    const documento3 = document.getElementById("documento_3");
    const documento4 = document.getElementById("documento_4");

    selectElement.addEventListener("change", () => {
        const selectedValue = selectElement.value;

        switch (selectedValue) {
            case "documento_1":
                documento1.classList.remove("hidden");
                documento2.classList.add("hidden");
                documento3.classList.add("hidden");
                documento4.classList.add("hidden");
                break;
            case "documento_2":
                documento2.classList.remove("hidden");
                documento1.classList.add("hidden");
                documento3.classList.add("hidden");
                documento4.classList.add("hidden");
                break;
            case "documento_3":
                documento3.classList.remove("hidden");
                documento1.classList.add("hidden");
                documento2.classList.add("hidden");
                documento4.classList.add("hidden");
                break;
            case "documento_4":
                documento4.classList.remove("hidden");
                documento1.classList.add("hidden");
                documento2.classList.add("hidden");
                documento3.classList.add("hidden");
                break;
            default:
                documento1.classList.add("hidden");
                documento2.classList.add("hidden");
                documento3.classList.add("hidden");
                documento4.classList.add("hidden");
                break;
        }
    });
});
