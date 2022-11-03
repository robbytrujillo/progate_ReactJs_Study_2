import React from 'react';

class Language extends React.Component {
  render(
    // const languageList = [
    //   {
    //     name: 'HTML & CSS',
    //     image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
    //   },
    //   {
    //     name: 'JavaScript',
    //     image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
    //   },
    //   {
    //     name: 'React',
    //     image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
    //   },
    //   {
    //     name: 'Ruby',
    //     image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
    //   },
    //   {
    //     name: 'Ruby on Rails',
    //     image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
    //   },
    //   {
    //     name: 'Python',
    //     image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
    //   }
    // ];
    ) {
    return (
      <div className='language-item'>
        <div className='language-name'>{this.props.name}</div>
        <img 
          className='language-image' 
          src={this.props.image} 
        />
      </div>
    );
  }
}

export default Language;