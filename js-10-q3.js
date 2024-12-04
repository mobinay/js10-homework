// According to your js10 session, write a code that shows why we shouldn't use var?


function Varscope() {
    if (true) {
      var message = "var";
    }
    console.log(message);
  }
  
  Varscope();
  
  function Letcope() {
    if (true) {
      let message = "let";
    }
    console.log(message);
  }