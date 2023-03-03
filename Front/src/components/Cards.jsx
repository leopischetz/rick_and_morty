import Card from './Card';
import styled from "styled-components";

const DivCards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin: 5%;
`

export default function Cards({characters, onClose}) {   
  
   const renderizedIds = new Set();

   return (
     <DivCards>
       {characters.map(({ id, name, species, gender, image }) => {
         // Verificar si el id ya ha sido renderizado
         if (renderizedIds.has(id)) {
           return null;
         }
          
         renderizedIds.add(id);
 
         return (
           <Card
             key={id}
             name={name}
             species={species}
             gender={gender}
             image={image}
             id={id}
             onClose={() => onClose(id)}
           />
         );
       })}
     </DivCards>
   );
}
