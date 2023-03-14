function sum(a){
    return (b)=>{
      return (c)=>{
        return ()=>{
            return a*b*c
        }
                }
    }
}
console.log(sum(10)(20)(30)());