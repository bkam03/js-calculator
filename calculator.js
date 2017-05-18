/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `_memory`
 * @variable PRIVATE { Number } `_total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule(){

  //private var
  var _memory = 0;
  var _total = 0;
  //private methods
  function validation(num){
    console.log(arguments);
    if(typeof num !== "number" || isNaN(num)) {
      throw new Error("err");
    }
  }
  //public var

  //public methods
  /**

   * sets the `_total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current _total
   */
  function load(num){
      validation(num);
        _total = num;
        return _total;
  }
    /**
   * Return the value of `_total`
   * @return { Number }
   */
  function getTotal(num){
    return _total;
  }

  /**
   * Sums the value passed in with `_total`
   * @param { Number } x
   */
  function add(num){
    validation(num);
    _total += num;
  }

  /**
   * Subtracts the value passed in from `_total`
   * @param  { Number } x
   */
  function subtract(num) {
    validation(num);
    _total -= num;
  }

  /**
   * Multiplies the value by `_total`
   * @param  { Number } x
   */

   function multiply(num) {
    validation(num);
     _total *= num;
   }

  /**
   * Divides the value passing in by `_total`
   * @param  { Number } x
   */
  function divide(num) {
    validation(num);
    _total /= num;
  }

  /**
   * Return the value stored at `_memory`
   * @return { Number }
   */
  function recallMemory() {
    return _memory;
  }

  /**
   * Stores the value of `_total` to `_memory`
   */
  function saveMemory(){
    _memory = _total;
  }

  /**
   * Clear the value stored at `_memory`
   */

  function clearMemory(){
    _memory = 0;
  }

  /**
   * Validation
   */

  return {
    load : load,
    getTotal : getTotal,
    add : add,
    subtract : subtract,
    multiply : multiply,
    divide : divide,
    recallMemory : recallMemory,
    saveMemory : saveMemory,
    clearMemory : clearMemory
  };
}




var myCalc = new calculatorModule();