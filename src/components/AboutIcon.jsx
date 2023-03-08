import {Link} from 'react-router-dom'
import {FaQuestionCircle} from 'react-icons/fa'

function AboutIcon() {
  return (
    <div className="about-link">
        <Link to={{
            pathname: '/about',
            search: '?sort=name',
            hash: '#hello'
        }}>
            <FaQuestionCircle size={30} />
        </Link>
    </div>
  )
}

export default AboutIcon