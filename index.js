/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str)
{
  let arr = str.split(":");
  let returnStr;
  if(arr[0].parseInt() < 12)
  {
    returnStr = "Good Morning";
  }
  else {
    if(arr[0].parseInt() > 5)
    {
      returnStr = "Good Evening";
    }
    else {
      returnStr = "Good Afternoon";
    }
  }
  return returnStr;
}

/* Write your implementation of displayMessage() */
function displayMessage(str)
{
  document.getElementById("greeting").innerText = str; 
}

