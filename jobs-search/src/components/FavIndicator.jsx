import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const FavIndicator = () => {
    const navigate = useNavigate()
    

    const favLength = useSelector((state) => {
      return state.favoriti.content.length
    })
  
    return (
      <div className="d-flex justify-content-end my-4">
        <Button
          onClick={() => navigate('/favourites/:company')}
          className="d-flex align-items-center"
        >
            <p className="m-0">Preferiti: <span className="ms-2">{favLength}</span></p>
          
        </Button>
      </div>
    )
  }
  
  export default FavIndicator