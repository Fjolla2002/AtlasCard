const determineColors = (backgroundColor) => {
    let firstColor, secondColor;
  
    if (backgroundColor === '#141414') {
      firstColor = '#f7f7f2';
      secondColor = '#ffffff66';
    } else if (backgroundColor === '#f7f7f2') {
      firstColor = '#141414';
      secondColor = '#00000080';
    } 
  
    return { firstColor, secondColor };  
};


export {
  determineColors
}