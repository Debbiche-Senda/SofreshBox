import "./card.css"
import { Card, Button} from "react-bootstrap"

const ProductCard = ({el}) => {
    return (

      
        <div className="mycard">


<Card style={{ width: '18rem' }}>
  <Card.Img  variant="top" src="https://img.cuisineaz.com/680x357/2017/09/06/i132233-boeuf-bourguignon-au-companion.jpeg"
  // {el.photo}
   />
  <Card.Body>
    <Card.Title>{el.article}</Card.Title>
    <Card.Text style={{backgroundColor:"#FFEDDF", width:"30%", borderRadius:"30px", fontWeight:"lighter", paddingLeft:"10px"}}> 
    {el.famille}
    </Card.Text>
    <Card.Text style={{backgroundColor:"#FFEDDF", width:"30%", borderRadius:"30px", fontWeight:"lighter", paddingLeft:"10px"}}>
    {el.catégorie}
    </Card.Text>
    <Button className="signUpBtn"
            style={{marginBottom:"20px", backgroundColor: "#E73700", 
            color: "white", 
            fontWeight: "bold", 
            borderRadius: "30px",
            border: "none"}} 
            variant="outlined"
    >
      Détails
      </Button>
  </Card.Body>
</Card>

            {/* <span className='title'>{post.title}</span>
            <img src={post.img} alt="" className="img" />
            <p className="desc">{post.desc}</p>
            <button className="cardButton">Read More</button> */}
        </div>
        
    )
}

export default ProductCard 
