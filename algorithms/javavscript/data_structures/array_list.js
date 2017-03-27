class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  
  pop() {
    const val = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return val;
  }
  
  get(index) {
    return this.data[index];
  }
  
  delete(index) {
    const val = this.data[index];
    this._collapseTo(index);
    return val;
  }
  
  _collapseTo(index) {
    for (var i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    
    delete this.data[this.length-1];
    
    this.length--;
  }
}

module.exports = ArrayList;
