
import Navbar from '../src/Components/Navbar'
import Sidebar from '../src/Components/Sidebar'
import Page1 from './Components/Pages/Page1'
import Page2 from './Components/Pages/Page2'
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div><Sidebar /></div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, lineHeight: '24.2px' }}>

          <div style={{ backgroundColor: '#F5F8F8', display: 'flex', flexDirection: 'column', flex: 1, lineHeight: '24.2px' }}>
            <p style={{ fontSize: '24px', fontWeight: '600', lineHeight: '36px', fontFamily: 'Poppins', textAlign: 'left', padding: '10px 30px', color: '#121114', margin: '0' }}>Zippyy wallet configuration
            </p>

            <div>
              <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: '8px', margin: '0 30px', padding: '20px' }}>
                <Page1 />
                <Page2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
