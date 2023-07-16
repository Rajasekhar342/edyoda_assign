import './App.css'
import Subscription from './subscription'
import expand_more from './img/expand_more.svg'
import Logo from './img/LOGO.svg'
import search from './img/search.svg'
import job from './img/job.svg'
import clock from './img/clockorg.svg'
import live from './img/live.svg'
import scholar from './img/scholarship.svg'
import ads from './img/ads.svg'

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='header_left'>
          <h2>
            <img src={Logo} alt='logo' className='logo' />
          </h2>
          <div className='courses'>
            <p>Courses</p>
            <img
              src={expand_more}
              alt={expand_more}
              width={20}
              className='expand_more'
            />
          </div>
          <div className='programmes'>
            <p>Programmes</p>

            <img
              src={expand_more}
              alt={expand_more}
              width={20}
              className='expand_more'
            />
          </div>
        </div>
        <div className='header_right'>
          <div className='search'>
            <img src={search} alt='search' width={25} />
          </div>
          <div className='login'>
            <p>Login</p>
          </div>
          <div className='button'>
            <button>JOIN NOW</button>
          </div>
        </div>
      </header>
      <div className='body_content'>
        <div className='body_left'>
          <div>
            <p className='head_line'>
              Access curated courses worth &#8377;
              <del className='old_price'>
                <span>18,500</span>
              </del>{' '}
              at just
              <span className='new_price'> &#8377; 99</span> per year!
            </p>
          </div>

          <div className='info'>
            <div className='job sub_info'>
              <img src={job} alt='job' />
              <p>
                <span className='highlight'>100+</span> Job relevant courses
              </p>
            </div>
            <div className='clock sub_info'>
              <img src={clock} alt='clock' />
              <p>
                <span className='highlight'>20,000+</span> Hours of content
              </p>
            </div>
            <div className='live sub_info'>
              <img src={live} alt='live' />
              <p>
                <span className='highlight'>Exclusive</span> webinar access
              </p>
            </div>
            <div className='scholar sub_info'>
              <img src={scholar} alt='scholar' />
              <p>
                Scholarship worth{' '}
                <span className='highlight'>&#8377;94,000</span>{' '}
              </p>
            </div>
            <div className='ads sub_info'>
              <img src={ads} alt='ads' />
              <p>
                <span className='highlight'>Ad Free</span> learning experience
              </p>
            </div>
          </div>
        </div>

        <div className='body_right'>
          <div className='signandsub'>
            <div className='signup'>
              <button>1</button>
              <p>Sign Up</p>
            </div>
            <div className='subscribe'>
              <button>2</button>
              <p>Subscribe</p>
            </div>
          </div>
          <Subscription />
        </div>
      </div>
    </div>
  )
}

export default App
