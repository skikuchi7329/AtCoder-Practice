function welcome(a: number, b: number, c: number, s: string) {
  if(1 <= a && a<= 1000 && 1 <= b && b <= 1000 && 1 <= c && c <= 1000 && 1 <= s.length && s.length <= 100) {
  console.log(a + b + c + " " +`${s}`);
  } else {
    console.log("error");
  }
}

welcome(1,2,3,"aaa");