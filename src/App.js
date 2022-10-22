import logo from './logo.svg';
import './App.css';
import { StarIcon } from './components/assets/Star';
import { Icon } from './components/assets/Icon';
import { Picture } from './components/assets/background'

function App() {
  return (
    <div className='Ez'>
      <div id='PinguWannabe'>
        <div id='work'>
          <div id='Img'> {[1, 2, 3, 4, 5].map(el => <StarIcon width={"30px"} height={"30px"} />)} </div>
          <div id='text1'>
            Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.
          </div>
        </div>
        <div id='Icon'>
          <Icon />
          <div id='Name'>
          Hulugen -2022
          </div>
        </div>
      </div>
      <div id='E'>
        <Picture />
        <div id='chingunwannabe'>
          <div id='text2'>
            Data-Driven Design is Killing Our Instincts 
          </div>
          <div id='text3'>
            Our latest updates and blogs about managing your team
            Our latest updates and blogs about managing your team
          </div>
          <div id='end'>
            <Icon />
            <div id='texts'>
              <div>Hulugen</div> 
              <div>|</div>
              <div>21st October,2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
