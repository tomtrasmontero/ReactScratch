import React, { Component } from 'react';

// const withClass2 = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       {/* important to pass unknown props to this component using ... spread operator */}
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

// can also return a stateful component
const withClass2 = (WrappedComponent, className) => {
  return class extends Component{
    render() {
      return(
        <div className={className}>
          {/* important to pass unknown props to this component using ... spread operator */}
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}

export default withClass2;
