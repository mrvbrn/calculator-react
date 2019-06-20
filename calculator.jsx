
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: '', num2: ''};

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.adding = this.adding.bind(this);
    this.substract = this.substract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }



setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1});
    
}

setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 })
}

adding(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState ({result});

}
substract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
}
multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
}
divide(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
}

clear(e) {
    e.preventDefault();
    this.setState({result: 0, num1: '', num2: '' })

}




render() {
   return(
    <form>
            <input value = {this.state.num1} onChange={this.setNum1}/>
            <input value = {this.state.num2}  onChange={this.setNum2}/>
            <h1> {this.state.result}</h1>
        <button onClick={this.adding}> + </button>
        <button onClick={this.substract}> - </button>
        <button onClick={this.multiply}> * </button>
        <button onClick={this.divide}> / </button>
        <button onClick={this.clear}> clear </button>
    </form>
    );
  }
}