import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';

const Job = function ({ data }) {

  const alreadyFav = useSelector((state) => {
    return state.favoriti.content
  })
 // console.log('alreadyfav', alreadyFav)
  const dispatch = useDispatch()
  
  return(

  <Row
  className="mx-0 mt-3 p-3"
  style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3} className='text-start d-flex justify-content-between'>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      <Button variant='success' onClick={() => {
        alreadyFav.includes(data.company_name) ? alert('already in your favourites') : (
          dispatch({
            type: 'ADD_TO_FAV',
            payload: data.company_name,
          })

        )
      }}>
        {
          alreadyFav.includes(data.company_name) ? <FaStar /> : <FaRegStar />
        }
        </Button>
    </Col>
    <Col xs={9} className='text-start'>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  )

}

export default Job
