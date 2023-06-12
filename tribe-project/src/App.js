
import './App.css';
import image from './images/n-logo.png';
import image2 from './images/ss.png';
import image3 from './images/sum.png';
import image4 from './images/micro.png';
import image5 from './images/veri.png';

function App() {
  return (
    <div className="App">

      <header className='App-header'>

        <div className='text-block'>

          <p>DAILY UI</p>

        </div>

        <div className='text-block2'>

          <p>Become a better designer in 100 days</p>

        </div>

        <div className='text-block3'>

          <p>Daily UI is a series of daily Design Challenges<br />
            Inspiration and Surprise Rewards</p>

        </div>

        <div className='input'>

          <form>
            <label for="Email">
              <input type="text" name="Email" placeholder='Email Address' />
            </label>
            <input type="submit" value="→" />

            <div className='input2'>

                
                  
                
            </div>

          </form>

        </div>

        <div className="text-block4">

        <p>Join Over 320,104+ of the World's Best UI & UX Designers</p>
       
        </div> 
      <div class="container">

        <div className="row">

          <div className="column">  

             <img src={image} alt='netflix logo' height={50} width={100}  />

          </div>

          <div className="column">  

            <img src={image2} alt='disnep logo' height={50} width={100}  />
        
          </div>

          <div className="column">  

            <img src={image3} alt='samsung logo' height={50} width={100}  />

          </div>
        
        
          <div className="column">  

            <img src={image4} alt='microsoft logo' height={50} width={100}  />

          </div>

          <div className="column">  

             <img src={image5} alt='verizon logo' height={50} width={100}  />

          </div>

        </div>

      </div>

      <div className='navbar'> 
          <div className='navbar a'>
            <div className='navbar a:hover'>
              <div className='navbar a.active'>
                <div className='navbar .icon'>
                    <nav>
                      <a href='about us'>about us</a>
                      <a href='Be Featured'>Be Featured</a>
                      <a href='Follow Along'>Follow Along</a>
                      <a href='Sponsorship'>Sponsorship</a>

                    </nav>

              </div>
             </div>
           </div>
         </div>
      </div>
          </header>
  
            
            
            
        
    
    </div>
  );
}

export default App;