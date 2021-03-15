//IN: our script reads the child content width, padding, border, margin in px
// also the script reads the parent content width
//FACT: we know the mode of the box-sizing (content/border) and the formula
//OUT: print total width of the child, print if it fits, print the overflow offset


//  <div>            <- parent
//      <div></div>   <- child
//   </div>

//unit - pixels
childWidth      = 100
childPadding    = 10 
childBorder     = 1
childMargin     = 20

parentWidth     = 110

childSize  =  childWidth + ( childPadding + childBorder + childMargin ) * 2
overflow   = childSize > parentWidth  //DATA TYPE: Boolean

alert( "Horizontal child size is " + childSize + "px " )
alert( "child overflow?  " + overflow )

//HW2: print how much overflow in px 
overflowSize =  childSize - parentWidth 
alert("The total overflow size is " +  overflowSize + "px ")

overflowSizeEach = ( childSize - parentWidth ) / 2
alert("The overflow size on each side is " +  overflowSizeEach + "px ")