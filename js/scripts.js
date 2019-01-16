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
    $("#output").text("Additon Result: "+result);
  });
  $("form#subtract").submit(function(event){
    var subInput1 = parseInt($("input#sub1").val());
    var subInput2 = parseInt($("input#sub2").val());
    var result = subtract(subInput1, subInput2);
    event.preventDefault();
    $("#output").text("Subtraction Result: "+ result);
  });
  $("form#multiply").submit(function(event) {
    var multInput1 = parseInt($("#mult1").val());
    var multInput2 = parseInt($("#mult2").val());
    var result = multiply(multInput1, multInput2);
    event.preventDefault();
    $("#output").text("Multiplication Result: " + result);
  });
  $("form#divide").submit(function(event){
    var divide1 = parseInt($("input#divide1").val());
    var divide2 = parseInt($("input#divide2").val());
    var result = divide(divide1,divide2);
    event.preventDefault();
    $("#output").text("Division Result: "+ result);
  })
});
