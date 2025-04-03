function pizza() {
    function orderPizza(pizzaCount = 1, drinkCount = 0) {
        const pizzaPrice = 150;
        const drinkPrice = 50;
        const maxPizzas = 10;
        const maxDrinks = 20;

        if (isNaN(pizzaCount) || isNaN(drinkCount) || pizzaCount < 1 || pizzaCount > maxPizzas || drinkCount < 0 || drinkCount > maxDrinks) {
            return "Ви можете замовити лише від 1 до 10 піц за один раз та не від'ємну кількість напоїів :)";
        }

        let totalPrice = (pizzaCount * pizzaPrice) + (drinkCount + drinkPrice);

        return {
            message: `Ваше замовлення: ${pizzaCount} піц та ${drinkCount} напоїв. \nЗагальна вартість: ${totalPrice} грн.`,
            total: totalPrice
        };
    }

    let pizzas = parseInt(prompt("Введіть кількість піц від 1 до 10 які б ви хотіли замовити"), 10);
    let drinks = parseInt(prompt("Введіть кількість напоїв від 1 до 10 які б ви хотіли замовити"), 10);

    let result = orderPizza(pizzas, drinks);
    alert(result.message);
    console.log("Вартість замовлення", result.total);
}