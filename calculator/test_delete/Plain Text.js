function calculate() {
    var frontGear = document.getElementById("frontGear").value;
    var rearGear = document.getElementById("rearGear").value;
    var tireSize = document.getElementById("tireSize").value;
    var cadence = document.getElementById("cadence").value;
  
    var gearRatio = frontGear / rearGear;
    var gearStep = (tireSize * gearRatio) / 1000;
    var speed = (cadence * tireSize * gearRatio) * 0.00006;
  
    document.getElementById("gearRatioResult").innerHTML = "Передаточное число: " + gearRatio;
    document.getElementById("gearStepResult").innerHTML = "Шаг укладка: " + gearStep;
    document.getElementById("speedResult").innerHTML = "Скорость велосипеда: " + speed;
  }

function formula() {
    alert("Формулы: \n" +
      "1) Передаточное число = передняя звезда / задняя звезда\n" +
      "2) Шаг укладка = (размер покрышки * передаточное число) / 1000\n" +
      "3) Скорость велосипеда = (Каденс * размер покрышки * передаточное число) * 0,00006\n\n" +
      "1. Чем больше передаточное число, тем тяжелее крутить педали, но и скорость после разгона будет больше. В случае с маленьким передаточным числом все наоборот.\n" +
      "2. Чем меньше укладка, тем лучше тяга велосипеда на данной передаче, но меньше скорость.\n" +
      "3. Скорость велосипеда же определяется по вышеуказанным параметрам.\n");
}