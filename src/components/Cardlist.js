import React from 'react';
import Card from './Card.js';

const Cardlist = ({robots,}) => {
	return(
		<React.Fragment>
		{
			robots.map((user,i)=>
				<Card 
				key= {robots[i].id}
			    name= {robots[i].name} 
			    email ={robots[i].email} 
			    id={robots[i].id}/>)
		}
		
		</React.Fragment>
	);
}

export default Cardlist;