import Carousel from 'react-bootstrap/Carousel';
import './carou.css';
import photo1 from './1pho.jpg';
import photo2 from './2pho.jpg';
import photo3 from './3pho.jpg';
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='res' style={{width:"100vw", border: "2px solid black"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
   
  );
}

export default DarkVariantExample;