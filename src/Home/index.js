/**
 * NPM
 */
import React from 'react';
import styled from 'styled-components';
/**
 * LOCAL
 */
const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const HeaderImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${require('../images/ChateauAngers.png')});
`;
const ElementContainer = styled.div` 
  background: blue;
  height: 100%;
  width: 100%;
`;
const Description = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  width: 50%;
  margin: 0 auto;
`;
const NavigationBar = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  color: white;
  justify-content: space-around;
  text-align: center;
  backdrop-filter: blur(2px);
  padding: 5px;
`;
const NavElement = styled.div`

`;
const ImageContainer = styled.div`

`;
const Picture = styled.img` 
  width: 250px;
  height: 300px;
`;
/**
 * CODE
 */
const HomePage = (props) => {

    return(
      <Container>
        <HeaderImage>
        <NavigationBar> 
          <NavElement>
           Nav 
          </NavElement>
          <NavElement>
           Nav 
          </NavElement>  
          <NavElement>
           Nav 
          </NavElement>   
        </NavigationBar>
        <Description>
          <ImageContainer>
            <Picture src={require('../images/barachat.png')} />
          </ImageContainer>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
          Ea dolores dignissimos sit alias est, 
        </Description>
        </HeaderImage>
        <ElementContainer>
        <ImageContainer>
            <Picture src={require('../images/gatsbar.png')} />
          </ImageContainer>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
            Ea dolores dignissimos sit alias est, 
          </Description>
        </ElementContainer>
        <ElementContainer>
        <ImageContainer>
            <Picture src={require('../images/petitpres.png')} />
          </ImageContainer>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
            Ea dolores dignissimos sit alias est, 
          </Description>
        </ElementContainer>
        <ElementContainer>
          <ImageContainer>
            <Picture src={require('../images/freretoque.png')} />
          </ImageContainer>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
            Ea dolores dignissimos sit alias est, 
          </Description>
        </ElementContainer>
        <ElementContainer>
          <ImageContainer>
            <Picture src={require('../images/marcheAngers.png')} />
          </ImageContainer>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
            Ea dolores dignissimos sit alias est, 
          </Description>
        </ElementContainer>
        <ElementContainer>
          <ImageContainer>
            <Picture src={require('../images/filetsolidaire.png')} />
          </ImageContainer>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
            Ea dolores dignissimos sit alias est, 
          </Description>
        </ElementContainer>
      </Container>
    )
}
/**
 * EXPORT
 */
export default HomePage;