function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

$(function() {
  $("form#add").submit(function(event) {
    var addInput1 = parseInt($("#add1").val());
    var addInput2 = parseInt($("#add2").val());
    var result = add(addInput1, addInput2);
    event.preventDefault();
    $("#output").text(result);
  });
});
