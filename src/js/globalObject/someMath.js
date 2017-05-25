var SomeMath = {
  modulo: function(a, b){
    if(a<0) a=b+a;
    return a % b;
  }
};