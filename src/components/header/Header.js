import React, {useState, useEffect} from 'react'
import './Header.css'
import CheckInButton from './checkinbuttons/CheckInButton';
import { SearchOutlined, Language, Menu } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import Calender from './calender/Calender';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';

function Header() {

    const [colorChange, setColorchange] = useState(false);
    const [showBig, setShowBig] = useState(false);
    const [showBelow, setShowBelow] = useState(false);
    const [showCheckInCalender, setShowCheckInCalender] = useState(false);
    const [showCheckOutCalender, setShowCheckOutCalender] = useState(false);

    useEffect(()=>{
        if(window.innerWidth <= 945){
            setShowBelow(true);
        }else if(window.innerWidth > 945){
            setShowBelow(false);
        }
    },[])

    

    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
         setShowBig(false);
       } else {
        setColorchange(false);
       }
    };

    window.addEventListener('scroll', changeNavbarColor);

    const handleResize = () => {
        if(window.innerWidth <= 945){
            setShowBelow(true);
        }else{
            setShowBelow(false);
        }
    }
  

    window.addEventListener('resize', handleResize);

  return (
      <div className="headercontainer">
          <div className="header__above" style={{backgroundColor: colorChange ? 'white' : 'transparent', borderBottom: colorChange ? '1px solid lightgray' : 'none'}}>
                <div className="header__above__search">
                    <SearchOutlined />
                    <input type="text" placeholder="Where are you going?"/>
                </div>
          </div>
    <div className="header" style={{backgroundColor: colorChange ? 'white' : 'black', color: colorChange ? 'black' : 'white'}}>
        <Link to="/"><img className="header__logo" src={colorChange ? "https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" : "https://www.pngkey.com/png/full/60-606021_horizontal-white-transparent-for-web-airbnb-logo-white.png"} alt="airbnb"/></Link>
        <div className="header__links" style={{display: colorChange===true && showBig===false ? 'none' : 'flex'}}>
            <ul className="header__ul">
                <li className="header__li" style={{borderBottom: colorChange ? '1px solid black' : '1px solid white'}}>Places to stay</li>
                <li className="header__li" style={{borderBottom: colorChange ? '1px solid black' : '1px solid white'}}>Experiences</li>
                <li className="header__li" style={{borderBottom: colorChange ? '1px solid black' : '1px solid white'}}>Online Experiences</li>
            </ul>
        </div>

        <div className="header__searchbar" style={{display: colorChange===true && showBig===false ? 'flex' : 'none'}} onClick={()=>{setShowBig(true);}}>
            <div className="header__searchbar__text">Start your search</div>
            <div className="header__searchbar__iconcontainer">
                <SearchOutlined />
            </div>
        </div>

        <div className="header__searchcalendercontainer" style={{display: colorChange===true && showBig===false ? 'none' : 'flex'}}>
            <div className="header__search">
            <div className="header__search__input">
                <div style={{fontSize: '15px', color: 'black'}}>
                    Location
                </div>
                <input type="text" placeholder="Where are you going?" style={{background: 'none', border: 'none', outline: 'none'}}/>
            </div>
            |
            <div className="header__search__button" onClick={()=>{setShowCheckOutCalender(false); setShowCheckInCalender(true); }}>
                <CheckInButton 
                    toptext="Check in"
                    bottomtext="Add dates"
                />
            </div>
           { /* below div will show only when check in component is active */}
            <div style={{marginLeft: '-19%', backgroundColor: 'lightgray', display: showCheckInCalender ? 'flex' : 'none'}} className="header__search__button" onClick={()=>{setShowCheckOutCalender(false); setShowCheckInCalender(false); }}>
                <CheckInButton 
                    toptext="Check in"
                    bottomtext="Add dates"
                />
            </div>
            
            |
            <div className="header__search__button" onClick={()=>{setShowCheckInCalender(false); setShowCheckOutCalender(!showCheckOutCalender);}}>
                <CheckInButton 
                    toptext="Check out"
                    bottomtext="Add dates"
                />
            </div>
            { /* below div will show only when check out component is active */}
            <div style={{marginLeft: '-19%', backgroundColor: 'lightgray', display: showCheckOutCalender ? 'flex' : 'none'}} className="header__search__button" onClick={()=>{setShowCheckInCalender(false); setShowCheckOutCalender(false); }}>
                <CheckInButton 
                    toptext="Check out"
                    bottomtext="Add dates"
                />
            </div>
            |
            <div className="header__search__button">
                <CheckInButton 
                    toptext="Guests"
                    bottomtext="Add guests"
                />
            </div>
            <div className="header__search__searchicon">
                <SearchOutlined />
            </div>
            </div>

            <div className="header__calender" style={{display: (showCheckInCalender || showCheckOutCalender) ? 'flex' : 'none'}}>
                <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setShowCheckInCalender(false);
                            setShowCheckOutCalender(false);
                        }}
                    >
                        <Calender />
                    </OutsideClickHandler>
                </div>
            </div>
            
           
        </div>
        <div className="header__right">
            <button className="header__right__button" style={{color: colorChange ? 'black' : 'white'}}>
                Become a host
            </button>
            <button className="header__right__button" style={{color: colorChange ? 'black' : 'white'}}>
                <Language />
            </button>
            &ensp;
            <div style={{backgroundColor: 'white', color: 'gray', display: 'flex', padding: '5px 10px', alignItems: 'center', borderRadius: '30px', height: '30px', cursor: 'pointer'}}>
                <Menu />
                &ensp;
                <Avatar style={{width: '25px', height: '25px'}}/>
            </div>
        </div>
    </div>
    <div className="header__below" style={{display: (showBelow && !colorChange) || (showBig && showBelow) ? 'flex' : 'none' ,backgroundColor : colorChange ? 'white' : 'black', color: colorChange ? 'black' : 'white'}}>
        <div className="header__links">
            <ul className="header__ul">
                <li className="header__li" style={{borderBottom: colorChange ? '1px solid black' : '1px solid white'}}>Places to stay</li>
                <li className="header__li" style={{borderBottom: colorChange ? '1px solid black' : '1px solid white'}}>Experiences</li>
                <li className="header__li" style={{borderBottom: colorChange ? '1px solid black' : '1px solid white'}}>Online Experiences</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Header

