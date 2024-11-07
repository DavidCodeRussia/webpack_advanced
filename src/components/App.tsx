import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import About from '@/pages/about/About';
import AvatarPng from '@/assets/avatar.png';
import AvatarJpeg from '@/assets/avatar.jpg';
import CarSvg from '@/assets/car.svg';

function TODO() {
  // console.log('TODOFUNCTION')
  TODO2()
}
function TODO2() {
  // console.log('TODOFUNCTION')
  throw new Error
}

export const App = () => {
  // tree shaking
  // TODO('123')
  const [count,setCount] = useState(0)
  // if (__PLATFORM__ === 'desktop') {
  //   return <div>desktop</div>
  // }
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>mobile</div>
  // }
  // if (__ENV__ === 'development') {
  //   // addDevtools
  // }
  return (
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'Platform'}>PLATFORM {__PLATFORM__}</h1>
      <img src={AvatarPng} width={100} height={100} alt="" />
      <img src={AvatarJpeg} width={100} height={100} alt="" />
      <CarSvg width={50} height={50} className={classes.car} />
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <h1 className={classes.value}>App {count}</h1>
      <button className={classes.button} onClick={TODO}>plus</button>
      <Outlet />
      <About />
    </div>
  )
}