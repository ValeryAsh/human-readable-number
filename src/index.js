module.exports = function toReadable (number) {
  module.exports = function toReadable (number) {
    const units = ['','one','two','three','four', 'five','six','seven','eight','nine'];
    const twenty = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    const dozens = ['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    let a = number.toString().split('')
    let result = []
      if(a.length == 1){
          result.push(units[number])
          return result
      }
      if(a.length == 2){
          if(a[0] > 1){
              return dozens[+a[0]] + ' ' + units[+a[1]]
          }
          console.log(twenty[+a[1]])
          return twenty[+a[1]]
      }
      if(a.length == 3){
        if(a[0] >= 1){
            result.push(units[+a[0]] + ' hundred ')
        }
        if(a[1] == 0){
            result.push(
                units[a[2]]
            )
        }
        if( a[1] == 1){
            result.push(twenty[a[1]])
        }
        if(a[1] > 1){
            result.push(dozens[+a[1]] + ' ' + units[+a[2]])
        } 

        console.log(result.join(''))
        return  result.join('')
    }
}
}
