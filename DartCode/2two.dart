
// mimic the OOPS 

int add(int a , int b ){
  return a+b;
}

product (int x , int y ){
  return x*y;
}
// class based programming 
class node {
  int ?x;

  node(this.x);
  // node.namedConstructor(int x ){
  //   this.x = x;
  // }

  void show(){
    print("X is $x");
  }
}


void main(){
  int x = add(20, 89);
  print("sum is $x");
  int z = product(10, 23);
  print("Product is $z");
  node n =  node(1000);
  n.show();
}