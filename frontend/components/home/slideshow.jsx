import React from 'react';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {slideIndex: 0, numImages: 3};
    this.plusSlides = this.plusSlides.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
    this.loopSlides = this.loopSlides.bind(this);
  }

  componentDidMount() {
    this.loopSlides();
  }

  loopSlides() {
    this.plusSlides(1)();
    setTimeout(this.loopSlides, 8000);
  }

  plusSlides(n) {
    return () => {
      if (this.state.slideIndex === 0) {
        this.setState({slideIndex: this.state.numImages + n});
      } else {
        this.setState({slideIndex: this.state.slideIndex + n});
      }
    };
  }

  currentSlide(n) {
    return () => this.setState({slideIndex: n});
  }

  render () {
    let image1, image2, image3, dot1, dot2, dot3;
    if (this.state.slideIndex % this.state.numImages === 0) {
      image1 = "show-image";
      dot1 = "active";
    } else if (this.state.slideIndex % this.state.numImages === 1) {
      image2 = "show-image";
      dot2 = "active";
    } else if (this.state.slideIndex % this.state.numImages === 2) {
      image3 = "show-image";
      dot3 = "active";
    }
    return (
      <section>
        <div className="slideshow-container">
          <div className={`mySlides fade ${image1}`}>
            <img src="https://i.imgur.com/qhreoJw.png"/>
            <div className="text">Dallas and Austin became best friends after meeting through FindFriends</div>
          </div>

          <div className={`mySlides fade ${image2}`}>
            <img src="https://i.imgur.com/vGf2Wf8.png"/>
            <div className="text">Jessie and Alex found each other on FindFriends through their shared interest in travel</div>
          </div>

          <div className={`mySlides fade ${image3}`}>
            <img src="https://i.imgur.com/KsA6Rve.jpg"/>
            <div className="text">Rita and Trevor met through FindFriends and now they run together every morning</div>
          </div>

          <a className="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={this.plusSlides(1)}>&#10095;</a>
        </div>

        <div className="slideshow-circle-buttons">
          <span className={`dot ${dot1}`} onClick={this.currentSlide(0)}></span>
          <span className={`dot ${dot2}`} onClick={this.currentSlide(1)}></span>
          <span className={`dot ${dot3}`} onClick={this.currentSlide(2)}></span>
        </div>
      </section>
    );
  }
}

export default Slideshow;
