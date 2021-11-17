// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
document.write(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;
let result = [];
let choiceString = `You turned to page`;

// Your Code Here.

let text = '\n What page would you like to go to?'



//Why function doesn't work with loop instead ??

function isEndingPage(currentPage) {
  currentPage = parseInt(currentPage);
  if(endingPages.indexOf(currentPage) > -1) 
  { 
    return true;
  }
  else
  {
    return false;
  }
}

currentPage = prompt(pages[0] + text);


while(currentPage !== null)
{
   
   isEndingPage(currentPage);

   if (!isEndingPage(currentPage))
   {
    
     result.push(currentPage);
     currentPage = prompt(pages[currentPage]);
     
   }
   else
   {
      
       result.push(currentPage);
       currentPage = null;

   }

}




//printed results from resultarr.
for (let i = 0; i < result.length; i++) {
    let element = result[i];
    document.write(`<p>${choiceString} ${element}</p>`)
    document.write(`<p> ${pages[element]}</p>`)
}













