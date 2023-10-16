import { Component } from 'react';
import './Style.css';

class Colorpick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,      
      selectedColor: null 
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      isOpen: false 
    });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor } = this.state;

    const pageStyle = {
      backgroundColor: selectedColor || 'transparent',
      width: '80vw',
      height: '80vh',
      position: 'fixed',
      top: 0,
      left: 0,
    };

    return (
      <div style={{height:"100vh",width:"100vw",backgroundColor:"#C7B3D8"}}>
        <h1>Color Picker</h1>
        <div className="color-picker" style={pageStyle}>
            <center>
          {isOpen && (
            <div className="color-list">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color-square"
                  style={{ backgroundColor: color }}
                  onClick={() => this.selectColor(color)}
                ></div>
              ))}
              
            </div>
            
          )}
          <button onClick={this.toggleColorList} style={{color:"white",backgroundColor:"green",border:"none"}}>Pick a color</button>
          </center>
        </div>
      </div>
    );
  }
}

export default Colorpick;
