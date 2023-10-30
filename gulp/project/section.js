// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
      return "Invalid input. Length and width must be positive numbers.";
    }
  
    var area = length * width;
    return area;
  }
  
  // Test the function
  var rectangleLength = 5;
  var rectangleWidth = 8;
  var result = calculateRectangleArea(rectangleLength, rectangleWidth);
  console.log("The area of the rectangle is: " + result);