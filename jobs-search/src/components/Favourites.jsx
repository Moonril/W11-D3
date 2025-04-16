import { Button, Col, Container, Row } from "react-bootstrap"
import { FaTrash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Favourites = function () {

    //ci riprendiamo l'array
    const favourites = useSelector((state) => {
        return state.favoriti.content
    })
    console.log('array', favourites)
    const dispatch = useDispatch()

    return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Your favourites</h1>
          <Link to={'/'}>Home</Link>
          <ul style={{ listStyle: 'none' }}>
                {favourites.map((fav, i) => {
                    return (
                        <li key={i} className="my-4">
                            {fav}
                            <Button
                            variant="danger"
                            onClick={() => {
                            dispatch({
                                type: 'REMOVE_FROM_FAV',
                                payload: i,
                            })
                            }}
                        > <FaTrash /> </Button>

                        </li>
                    )
                })

                }
          </ul>
          
        </Col>
      </Row>
    </Container>
    )
}

export default Favourites