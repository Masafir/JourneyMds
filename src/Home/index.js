/**
 * NPM
 */
import React from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
/**
 * LOCAL
 */
import theme from '../theme';
const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const HeaderImage = styled.div`
  height: 100%;
  width: 100%;
  padding: 25px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${require('../images/ChateauAngers.png')});
`;
const ElementContainer = styled.div` 
  background: ${props => props.color};
  height: 100%;
  width: 100%;
  padding: 5px;
  display:flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Description = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  width: 50%;
  margin: 0 auto;
  font-size: 100%;
  @media (max-width: 500px) {
    font-size: 50%;
  }
`;
const ImageContainer = styled.div`

`;
const Picture = styled.img` 
  width: 50%;
  height: 300px;
`;
const Title = styled.div` 
  font-weight: 900;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  width: 100%;
`;
const InfoContainer = styled.div` 
  display: flex;
  width: 70%;
  margin: 10px auto;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
/**
 * CODE
 */
const HomePage = (props) => {

    return(
      <Container>
        <HeaderImage id='head'>
        
          <Title> Découvrir Angers selon MDS </Title>
          <InfoContainer>
            <ImageContainer>
              <Picture src={require('../images/mds.svg')} />
            </ImageContainer>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
              Ea dolores dignissimos sit alias est, 
            </Description>
          </InfoContainer>
        </HeaderImage>
        <ElementContainer color={theme.primary} id="barachat">
          <Title> Le bar à chats </Title>
          <InfoContainer>
            <ImageContainer>
              <Picture src={require('../images/barachat.png')} />
            </ImageContainer>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
              Ea dolores dignissimos sit alias est, 
            </Description>
          </InfoContainer>
        </ElementContainer>
        <ElementContainer color={theme.secondary} id="barclandestin">
          <Title> Le bar clandestin d'angers ... </Title>
          <InfoContainer>
              <ImageContainer>
                <Picture src={require('../images/gatsbar.png')} />
              </ImageContainer>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
              Ea dolores dignissimos sit alias est, 
            </Description>
          </InfoContainer>
        </ElementContainer>
        <ElementContainer color={theme.primary} id="petitpres">
          <Title> les petits près </Title>
          <InfoContainer>
            <ImageContainer>
              <Picture src={require('../images/petitpres.png')} />
            </ImageContainer>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
              Ea dolores dignissimos sit alias est, 
            </Description>
          </InfoContainer>
        </ElementContainer>
        <ElementContainer color={theme.secondary} id="freretoques">
          <Title> les fréres toques </Title>
          <InfoContainer>
          <ImageContainer>
            <Picture src={require('../images/freretoque.png')} />
          </ImageContainer>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
            Ea dolores dignissimos sit alias est, 
          </Description>
          </InfoContainer>
        </ElementContainer>
        <ElementContainer color={theme.primary} id="marcheAngers">
        <Title > Les marchés d'angers</Title>
          <InfoContainer>
            <ImageContainer>
              <Picture src={require('../images/marcheAngers.png')} />
            </ImageContainer>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
              Ea dolores dignissimos sit alias est, 
            </Description>
          </InfoContainer>
        </ElementContainer>
        <ElementContainer color={theme.secondary} id="filetsolidaires">
        <Title> les filets solidaires</Title>
          <InfoContainer>
            <ImageContainer>
              <Picture src={require('../images/filetsolidaire.png')} />
            </ImageContainer>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
              Ea dolores dignissimos sit alias est, 
            </Description>
          </InfoContainer>
        </ElementContainer>
      </Container>
    )
}
/**
 * EXPORT
 */
export default HomePage;