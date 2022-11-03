import React from 'react';

class Language extends React.Component {
  render() {
    return (
      <div className='language-item'>
        {/* Ganti code di bawah agar mendisplay prop name */}
        {/* <div className='language-name'>HTML & CSS</div> */}
        <div className='language-name'>
        {this.props.name}
        </div>
        {/* Ganti nilai atribut src agar mendisplay prop image */}
        <img 
          className = 'language-image'
          // src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
          src = {this.props.image}
        />
      
      </div>
    );
  }
}

export default Language;
