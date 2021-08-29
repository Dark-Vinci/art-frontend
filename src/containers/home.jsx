import { useState } from 'react';

import NavContext from '../context/home';
import Header from '../components/main/header';
import Footer from '../components/main/footer';
import Body from '../components/main/body';

function Home () {
    const [ open, setOpen ] = useState(false);
    // const [ width, setWidth ] = useState(0);
    // const el = useRef(null);

    const openChangeHandler = () => {
        console.log('here');
        setOpen(!open);
    }

    // useEffect(() => {
    //     setWidth(el.current.getBoundingClientRect().width);
    //     console.log(width)
    // });

    return (
        <div style={{ maxWidth: '100vw' }}>
            <NavContext.Provider value={{ 
                value: open, 
                valueHandler: openChangeHandler
                // shouldUse: width < 800
            }}>
                <Header />
                <Body />
                <Footer />
            </NavContext.Provider>
        </div>
    );
}

export default Home;