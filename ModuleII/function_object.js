

function calculate(n)
{
    let f = 1
    for (i=1; i<=n; i++)
    {
        f = f * i;
    }
    
    let s = 0
    for (i=1; i<=n; i++)
    {
        s = s + i;
    }
    return{
         f,
         s
    };
}
let ret_val = calculate(5);
console.log(ret_val);