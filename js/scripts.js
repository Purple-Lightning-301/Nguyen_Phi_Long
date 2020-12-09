openWeb = () => {
  let userChoice = document.getElementById("userChoice").value;
  switch (userChoice) {
    case "1": {
      window.open("https://quantrimang.com");
      break;
    }
    case "2": {
      window.open("https://download.com.vn");
      break;
    }
    case "3": {
      window.open("https://vndoc.com");
      break;
    }
    default:
      window.open("https://meta.vn");
  }
};

tongArr = () => {
  let myArray = [1, 2, 3, 4, 6, 8, 8, 7];
  let sum = 0;
  myArray.forEach((x) => (sum += x));
  let result = String(sum);
  console.log(result);
  document.getElementById("sumArray").innerHTML = "Tong day so: " + result;
};

changeFormat = () => {
document.getElementsByTagName("h1")[0].innerHTML = "HELLO2";
document.getElementsByTagName("h1")[0].outerHTML = "<h2> HELLO2 </h2>";
document.getElementsByTagName("h2")[1].style.color = "red";
};