import styled from "styled-components";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../css/style.css"



const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider trusted_div">
          {/* my 1st img  */}
          <OwlCarousel className='owl-theme' item={3} autoplay={true}  loop margin={8} nav>
          <div className="slide">
            <img
              src="images/kamal.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/tangle.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/your.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/tangle.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/business.avif"
              alt="trusted-brands"
            />
          </div>
          </OwlCarousel>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;