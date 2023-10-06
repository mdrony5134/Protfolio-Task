import img1 from '../image/html-5.png'
import img2 from '../image/css (1).png'
import img3 from '../image/javascript.png'
import img4 from '../image/react.png'
import '../components/css/skill.css'
const Skill = () => {
  return (
    <div>
     <div className='container'>
        <h2>Tech Stack</h2>
          <div className='tech-stack'>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
          </div>
     </div>
    </div>
  )
}

export default Skill