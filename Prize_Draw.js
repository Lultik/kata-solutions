function rank(firstnames, weight, n) {
   const som = [];
   const winnerList = []

   if (firstnames.length === 0) return 'No participants'
   firstnames = firstnames.split(',')
   if (firstnames.length < n) return 'Not enough participants'

   firstnames.forEach(
      (item, index) => {
         let nameScore = item.toLowerCase().split('').map(
            letter => {
               return letter.charCodeAt(0) - 96;
            }
         ).reduce((acc, cur) => acc + cur)
         som.push((item.length + nameScore) * weight[index])
      }
   )
   const sortedSom = [...som];
   const winnerScore = sortedSom.sort((a, b) => a - b).reverse()[n - 1];

   let winnerSom = sortedSom[n - 1]

   for (let i = 0; i < som.length; i++) {
      if (som[i] === winnerScore) {
         winnerList.push(firstnames[i])
      }
   }

   return sortedSom[n - 1] === sortedSom[n - 2] ?  winnerList.sort()[1] : winnerList.sort()[0]
}