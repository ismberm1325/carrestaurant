class Auto {
  constructor(model, year, power, color) {
    this.model = model;
    this.year = year;
    this.power = power;
    this.color = color;
  }
  showInfo() {
    return `Модель авто: ${this.model}, год выпуска: ${this.year}, мощность двигателя: ${this.power}, цвет кузова: ${this.color}`;
  }
}

class electro extends Auto {
  constructor(model, year, power, color, battery) {
    super(model, year, power, color);
    this.battery = battery;
  }
  showInfo() {
    return super.showInfo() + ", ёмкость батареи: " + this.battery;
  }

  promote() {
    return `Покупайте электромобили. Используйте солнце а не горючее.`;
  }
}

const bmw = new Auto("BMW X7", 2021, "160hp", "black");
document.write(bmw.showInfo() + "<br>");

const tesla = new electro("Model X", 2021, "180hp", "gray", "140kv");
document.write(tesla.showInfo() + "<br>" + tesla.promote());