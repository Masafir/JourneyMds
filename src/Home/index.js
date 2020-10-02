/**
 * NPM
 */
import React from 'react';
import styled from 'styled-components';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
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
  padding: 25px 5px;
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
  padding: 5px;
  word-break: break-word;
  height: 100%;
  color: white;
  width: 100%;
  margin: 0 auto;

  font-size: 100%;
  @media (max-width: 500px) {
    font-size: 50%;
  }
`;
const ImageContainer = styled.div`
`;
const Picture = styled.img` 
  width: 100%;
  height: 100%;
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
  margin: 25px auto 10px auto;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border-radius: 5px;
  background-color: ${props => props.color ? props.color : null};
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Address = styled.div`
  color: white;
  & > a {
    color: ${props => props.color};
    text-decoration: underline;
    font-weight: 900;
  }
`;
const Footer = styled.div`
  height: 50%;
  padding: 25px 5px;
  width: 100%;
  background-color: black;
  @media (max-width: 500px) {
    height: auto;
  }
`;
const AvatarGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Avatar = styled.div`
  padding: 5px 0px;
  @media (max-width: 500px) {
    padding: 20px 0px;
  }
`;
const AvatarPic = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
`;
const AvatarDescription = styled.div` 
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWFzYWZpciIsImEiOiJja2ZyMXhpbWUwcWliMzJwNmc3Ynl0azRwIn0.6FZbplQCVPhh04Zq88YXYg'
});
/**
 * CODE
 */

const HomePage = (props) => {
 
    /* mapboxgl.accessToken = 'pk.eyJ1IjoibWFzYWZpciIsImEiOiJja2ZyMXhpbWUwcWliMzJwNmc3Ynl0azRwIn0.6FZbplQCVPhh04Zq88YXYg';
    const Map = new mapboxgl.Map({
    container: 'YOUR_CONTAINER_ELEMENT_ID',
    style: 'mapbox://styles/mapbox/streets-v11'
    }); */
    return(
      <Container>
        <HeaderImage id='head'>
        
          <Title> Découvrir Angers selon  des étudiants de MDS </Title>
          <InfoContainer style={{
  backdropFilter: 'blur(5px)'}}>
            <ImageContainer>
              <Picture src={require('../images/mds.svg')} />
            </ImageContainer>
            <Description>
            « Discover Angers » c'est le blog de 5 Angevins qui vous partage les endroits incontournables de la ville ! Cette semaine notre team a été missionnée de vous faire découvrir le thème de la restauration & alimentation. Nous avons alors sélectionné, pour vous, quelques lieux à ne pas manquer lors de votre escapade à Angers. N’hésitez pas à nous partager vos bonnes adresses en commentaires et c'est avec plaisir que nous irons les tester à notre tour !
            </Description>
          </InfoContainer>
        </HeaderImage>
        <ElementContainer color={theme.primary} id="barachat">
          <Title> Manger des chats et caresser des cookies </Title>
          <InfoContainer color={theme.darkprimary}>
            <ImageContainer>
              <Picture src={require('../images/barachat.png')} />
            </ImageContainer>
            <Description>
            Nous avons eu l’occasion de visiter « Cats and cookies » le premier bar à chat d’Angers. Situé au 13 rue de la Roë, ce jeune établissement ouvert du mardi au dimanche de 12h à 21h vous propose de vous restaurer ou de vous désaltérer en compagnie des neufs chats présents. Les produits sont préparés sur place avec des produits locaux.
            Alix et Nathan les gérants, ont noués un partenariat avec l’association « Sauvetage et chats en détresse » afin de servir de famille d’accueil pour ces petites boules de poiles. Vous avez donc la possibilité d’adopter les chats présents sur place.
            Alors si vous souhaiter passer un bon moment tout en soutenant l’économie locale, nous vous invitons à visiter ce lieu unique sur Angers.
            </Description>
          </InfoContainer>
          
          <Address color={theme.secondary}> Cats and Cookie ,13 Rue de Roë, 49100 Angers <a href="https://www.facebook.com/BarachatAngers/"> Infos supplémentaires </a> </Address>
        </ElementContainer>
        <ElementContainer color={theme.secondary} id="barclandestin">
          <Title> Le bar clandestin d'angers ... </Title>
          <InfoContainer color={theme.lightsecondary}>
              <ImageContainer>
                <Picture src={require('../images/gatsbar.png')} />
              </ImageContainer>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero veritatis nihil aspernatur fugiat architecto sunt laboriosam aperiam, illum expedita. Sit aut accusamus inventore modi illum labore necessitatibus maiores suscipit dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa ipsam perferendis possimus, totam fuga harum sint reiciendis veritatis illo excepturi atque, dolore dolor dignissimos. Veniam dicta dolorum enim quaerat.
              Ea dolores dignissimos sit alias est, 
            </Description>
          </InfoContainer>
          <Address color={theme.primary}> Le Gatsby Bar <a href="https://legatsbybar.com/"> Infos supplémentaires </a> </Address>
        </ElementContainer>
        <ElementContainer color={theme.primary} id="petitpres">
          <Title> les petits près </Title>
          <InfoContainer color={theme.darkprimary}>
            <ImageContainer>
              <Picture src={require('../images/petitpres.png')} />
            </ImageContainer>
            <Description>
            Les petits prés c’est le restaurant de Samuel ALBERT le gagnant de TopChef !
            Situé au cœur d’Angers (6 Place du Ralliement), cet établissement vous propose des mets élaborés vous faisant voyager entre l’Europe, l’Asie et l’Amérique. Dans un cadre chaleureux et convivial, vous pouvez suivre depuis un écran la préparation de vos plats.
            Aux petits prés il y en a pour tous les goûts ! En plus d’une carte qui évolue à toutes les saisons, des plats végétariens sont proposés.
            Pour les beaux jours, une terrasse située sur la place du ralliement vous permet de profiter de la douceur angevine.
            </Description>
          </InfoContainer>
          <Address color={theme.secondary}> Le restaurant les petits prés <a href="https://www.lespetitspres.fr/"> Infos supplémentaires </a> </Address>
        </ElementContainer>
        <ElementContainer color={theme.secondary} id="freretoques">
          <Title> les fréres toques </Title>
          <InfoContainer color={theme.lightsecondary}>
          <ImageContainer>
            <Picture src={require('../images/freretoque.png')} />
          </ImageContainer>
          <Description>
          Les Frères Toques a été créé par 3 jeunes amoureux de la région angevin. Les
          restaurants font partie des meilleures d’Angers, principalement pour la qualité de
          leurs plats et de leurs produits.
          Lors de notre visite des magnifiques rue d’Angers, nous devions prendre une photo
          devant leur boutique ainsi qu’avec un des livreurs malheureusement nous sommes
          tombés devant une porte close.
          </Description>
          </InfoContainer>
  
          <Address color={theme.primary}> Les frères toques <a href="https://www.frerestoque.fr/"> Infos supplémentaires </a> </Address>
        </ElementContainer>
        <ElementContainer color={theme.primary} id="marcheAngers">
        <Title > Bien manger à Angers </Title>
          <InfoContainer color={theme.darkprimary}>
            <ImageContainer>
              <Picture src={require('../images/marcheAngers.png')} />
            </ImageContainer>
            <Description style={{flexDirection: 'column'}}>
              Voici une liste de 5 marchés d'Angers : 
              <ul>
                <li> Quartier NEY CHALOUERE, place Ney - Essentiellement le Mardi</li> 
                <li> Quatier du Centre Ville d’angers, Place Lafayette  </li> 
                <li> Quartier La Doutre Saint-Jacques, place du docteur Bichon </li> 
                <li> Quartier de Monplaisir, boulevard Auguste Allonneau </li> 
                <li> Quartier Belle-Beille, Place Marcel Vigne </li> 
              </ul>
            </Description>
          </InfoContainer>
          <Address color={theme.secondary}> Liste des marchés d'angers <a href="http://www.angers.fr/vivre-a-angers/voirie-deplacements/la-gestion-des-voies-publiques/les-marches-d-angers/index.html"> Infos supplémentaires </a> </Address>
        </ElementContainer>
        <ElementContainer color={theme.secondary} id="filetsolidaires">
        <Title>Les filets solidaires : coup d’œil sur une action solidaire et innovante </Title>
          <InfoContainer color={theme.lightsecondary}>
            <ImageContainer>
              <Picture src={require('../images/filetsolidaire.png')} />
            </ImageContainer>
            <Description>
              Nous avons souhaité mettre en avant les oeuvres caritatives des « Filets solidaires ». Mais quel est le concept ? C'est l'histoire d’une trentaine de partenaires et d'associations qui ont mis en perspective un réseau de distribution pour lutter contre le gaspillage. Les « Filets solidaires », vise également à faciliter l'achat de produits frais par des habitants à revenus modestes. En plus de limiter le gaspillage, les associations locales proposent des animations éducatives telles que : des dégustations, des recettes, cours de cuisine ….
              De plus une aide alimentaire est mise en œuvre par le Jardin de Cocagne angevin.
            </Description>
          </InfoContainer>
          <Address color={theme.primary}> Le Jardin de Cocagne d'Angers <a href="https://www.jardin-cocagne-angers.org/aide-alimentaire-tri-et-valorisation.html"> Infos supplémentaires </a> </Address>
        </ElementContainer>
        <Footer id="footer">
          <AvatarGrid>
            <Avatar> 
              <AvatarPic> <img src={require('../images/ambre.jpeg')} /> </AvatarPic>
              <AvatarDescription> Ambre Le Faucheux <div style={{padding: '5px'}} > MBA Expert marketing digital </div> <a href='https://www.linkedin.com/in/ambre-lefaucheux-9a6789151/'> Linkedin </a> </AvatarDescription> 
              </Avatar>
            <Avatar> <AvatarPic> <img src={require('../images/naomi.jpeg')} /> </AvatarPic>
              <AvatarDescription> Naomi Le Bail <div style={{padding: '5px'}} > MBA Expert marketing digital </div> <a href='https://www.linkedin.com/in/naomi-le-bail-%E2%98%85-31411b170/'> Linkedin </a> </AvatarDescription>  </Avatar>
            <Avatar> <AvatarPic> <img src={require('../images/paulhenry.jpeg')} /> </AvatarPic>
              <AvatarDescription> Paul-Henri Balavoine <div style={{padding: '5px'}} > MBA Expert marketing digital </div> <a href='https://www.linkedin.com/in/paul-henri-balavoine/'> Linkedin </a> </AvatarDescription>  </Avatar>
            <Avatar> <AvatarPic> <img src={require('../images/amir.jpeg')} /> </AvatarPic>
              <AvatarDescription> Amir Lachemet <div style={{padding: '5px'}} > MBA Expert en Système d'informations </div> <a href='https://www.linkedin.com/in/amir-lachemet/'> Linkedin </a> </AvatarDescription>  </Avatar>
            <Avatar> <AvatarPic> <img src={require('../images/leo.jpeg')} /> </AvatarPic>
              <AvatarDescription> Léo Graton <div style={{padding: '5px'}} > MBA Expert en UX/UI </div> <a href='https://www.linkedin.com/in/l%C3%A9o-graton-67940a193/'> Linkedin </a> </AvatarDescription>  </Avatar>
          </AvatarGrid>
        </Footer>
      </Container>
    )
}
/**
 * EXPORT
 */
export default HomePage;