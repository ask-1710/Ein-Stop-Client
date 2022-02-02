const priceFormatter = (price) => {
    if (price > 99999 && price < 10000000) {
      let dec = price.toString().slice(-6, -3);
      price = price.toString().slice(0, -6);
      if(price==="") price="0"
      return price + "." + dec + " M";
    } else if (price > 9999999999) {
      let dec = price.toString().slice(-9, -6);
      price = price.toString().slice(0, -9);
      if(price==="") price="0"
      return price + "." + dec + " B";
    } else {
      return price;
    }
  };
  
  export default priceFormatter;

  // 1 B = 100 Cr = 1000 M = 10000 L