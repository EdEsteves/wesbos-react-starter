import React from 'react'
import PropTypes from 'prop-types'

// STATELESS COMPONENT BY VARIABLE RECEIVING A FUNCTION
const Header = (props) => {
  return (
    <header className='top'>
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 className='tagline'>
          <span>{props.tagline}</span>
        </h3>
      </header>
  )
}

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header;

// STATELESS COMPONENT BY FUNCTION
// function Header(props){
//   return (
//     <header className='top'>
//         <h1>
//           Catch
//           <span class="ofThe">
//             <span className="of">of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className='tagline'>
//           <span>{props.tagline}</span>
//         </h3>
//       </header>
//   )
// }

// STATEFUL COMPONENT
// export default class Header extends Component{
//   render(){
//     let { tagline } = this.props;
//     return (
//       <header className='top'>
//         <h1>
//           Catch
//           <span class="ofThe">
//             <span className="of">of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className='tagline'>
//           <span>{tagline}</span>
//         </h3>
//       </header>
//     )
//   }
// }