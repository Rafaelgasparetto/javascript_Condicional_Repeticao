var n1 = 0;
var n2 = 1;
var res;

for (var i = 1; i <= 15; i++)
     {
    console.log(n1);
    res = n1 + n2;
    n1 = n2;
    n2 = res;
}