module.exports = {
  convertBool (array) {
    const workingArray = [...array]; 
    workingArray.forEach(item => {
      item.completed === 0 ? item.completed = false : item.completed = true;
    }); 
    return workingArray;
  } 
}