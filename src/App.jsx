import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Combos from './components/Combos';
import Footer from './components/Footer';

function App() {

const [catalogue, setCatalogue] = useState()

  const productos = [
    { id: 1, name: 'Netflix', price: '12.500', avatar: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg?tf=3840x', src: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456' },

    { id: 2, name: 'Prime Video', price: "7.000", avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', src: 'https://play-lh.googleusercontent.com/Y7drWZZo_F2GBE1RhjR1irOkE3yrtPorHS1U9YkLKAu1DnTjQ8gNbcRmrBtkd3tnHQ' },

    { id: 3, name: 'Disney+', price: "7.000", avatar: 'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg', src: 'https://seeklogo.com/images/D/disney-logo-575AED0F1D-seeklogo.com.png' },

    { id: 4, name:'Star+', price: "8.000", avatar:'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png', src: 'https://pbs.twimg.com/media/E1S_HhQXMAUYBBQ?format=jpg&name=large' },

    { id: 5, name: 'HBO Max', price: "8.000", avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png?w=360', src: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png' },

    { id: 6, name: 'Paramount+', price: "8.000", avatar: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png', src: 'https://play-lh.googleusercontent.com/rdzfnSN_CJ0930nHwaZbD8my6X_s8xAFORVg6gvdUTiNz5qgYqObKEVIT8mOzapaUB4T' },

    { id: 7, name: 'Crunchyroll', price: "8.000", avatar: 'https://img.freepik.com/free-icon/user_318-219670.jpg', src: 'https://yt3.googleusercontent.com/ytc/AGIKgqOQYwc_F7oRllUnUATJpu47bOLy7K2n8M-AHRy_Zw=s900-c-k-c0x00ffffff-no-rj' },

    { id: 8, name: 'Funimation', price: "9.000", avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNbSU_JOKegoblQ1eSpxjCbfZ8myAlGUEC6xMb6YvykE8CUFgKco7AzwmLefjhmqx_Fc&usqp=CAU', src: 'https://blog.funimation.com/wp-content/uploads/2021/03/fuojdP4H_400x400.jpeg' },

    { id: 9, name: 'Plex', price: "7.000", avatar: 'https://img.freepik.com/iconos-gratis/hombre_318-860796.jpg', src: 'https://techcrunch.com/wp-content/uploads/2015/07/plex-logo.jpg?w=730&crop=1' },

    { id: 10, name: 'Vix+', price: "10.000", avatar: 'https://img.freepik.com/iconos-gratis/hombre_318-860806.jpg', src: 'https://play-lh.googleusercontent.com/s2G05IFOkSB2E6w_lBAgVOJT8rYVSIX7cT5dRR7HjWhUM0smh606nQ3uqWM8sLPk7BI' },

    { id: 11, name: 'Porn Hub', price: "10.000", avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCI9FVM3otrPC0kAOIoYeTbNYv1wZy4-ig9iKKRBwXcPWbB2NlEKvaHn4BZ9JEBVdU_Zk&usqp=CAU', src: 'https://cdn6.aptoide.com/imgs/c/5/a/c5ac69de476a7d58efe3cb45fe9d4dc1_fgraphic.jpg' },

    { id: 12, name: 'IPTV Smarters', price: "13.000", avatar: 'https://img.freepik.com/iconos-gratis/profesor_318-201555.jpg', src: 'https://image.winudf.com/v2/image1/Y29tLnR2b24uaXB0dnNtYXJ0ZXJzcHJvX3NjcmVlbl8wXzE1OTc2MzY4MzhfMDQ2/screen-0.webp?fakeurl=1&type=.webp' },

    { id: 13, name: 'Spotify 3 Meses', price: "15.000", avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', src: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/spotify_tile_logo_icon_170708.png' },

    { id: 14, name: 'Youtube Premiun x4 meses', price: "18.000", avatar: 'https://cdn-icons-png.flaticon.com/512/186/186313.png', src: 'https://img.freepik.com/vector-premium/fondo-youtube-icono-youtube-iconos-redes-sociales-logotipo-realista-vector-zaporizhzhia-ucrania-10-mayo-2021_399089-1047.jpg?w=2000' },

    { id: 15, name: 'Canva', price: "12.000", avatar: 'https://cdn-icons-png.flaticon.com/512/4975/4975733.png', src: 'https://www.appdegestion.com/app/395_canva/logo/395_canva.png' },

    { id: 16, name: 'Xbox Game Pass', price: "15.000", avatar: 'https://cdn-icons-png.flaticon.com/512/4975/4975733.png', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Xbox_app_logo.svg/2048px-Xbox_app_logo.svg.png' },

    { id: 17, name: 'Viki Rakuten', price: "9.000", avatar: 'https://cdn-icons-png.flaticon.com/512/4975/4975733.png', src: 'https://cdn-www.bluestacks.com/bs-images/ef48d8fbf54b619f23607fd825d00ce3.png' },

    { id: 18, name: 'Profe Net', price: "15.000", avatar: 'https://cdn-icons-png.flaticon.com/512/4975/4975733.png', src: 'https://www.elprofenet.co/img/LOGO%20EL%20PROFE%20PNG.png' },

    { id: 19, name: 'Apple TV x3 meses +MLS 30 dias', price: "15.000", avatar: 'https://cdn-icons-png.flaticon.com/512/4975/4975733.png', src: 'https://logodownload.org/wp-content/uploads/2023/05/apple-tv-logo.png' }
   
];

const combo = {
  item1: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
  item2: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
  item3: 'https://play-lh.googleusercontent.com/Y7drWZZo_F2GBE1RhjR1irOkE3yrtPorHS1U9YkLKAu1DnTjQ8gNbcRmrBtkd3tnHQ', 
  price: '20.000'
}

const combo2 = {
  item1:  'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
  item2: 'https://play-lh.googleusercontent.com/Y7drWZZo_F2GBE1RhjR1irOkE3yrtPorHS1U9YkLKAu1DnTjQ8gNbcRmrBtkd3tnHQ',
  item3: 'https://seeklogo.com/images/D/disney-logo-575AED0F1D-seeklogo.com.png',
  price: '20.000'
}
const combo3 = {
  item1:  'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
  item2: 'https://pbs.twimg.com/media/E1S_HhQXMAUYBBQ?format=jpg&name=large',
  item3: 'https://yt3.googleusercontent.com/ytc/AGIKgqOQYwc_F7oRllUnUATJpu47bOLy7K2n8M-AHRy_Zw=s900-c-k-c0x00ffffff-no-rj',
  price: '20.000'
}
const combo4 = {
  item1:  'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
  item2: 'https://play-lh.googleusercontent.com/rdzfnSN_CJ0930nHwaZbD8my6X_s8xAFORVg6gvdUTiNz5qgYqObKEVIT8mOzapaUB4T' ,
  item3: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
  price: '20.000'
}
const combo5 = {
  item1:  'https://yt3.googleusercontent.com/ytc/AGIKgqOQYwc_F7oRllUnUATJpu47bOLy7K2n8M-AHRy_Zw=s900-c-k-c0x00ffffff-no-rj',
  item2: 'https://play-lh.googleusercontent.com/Y7drWZZo_F2GBE1RhjR1irOkE3yrtPorHS1U9YkLKAu1DnTjQ8gNbcRmrBtkd3tnHQ' ,
  item3: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
  price: '17.000'
}
const combo6 = {
  item1:  'https://play-lh.googleusercontent.com/Y7drWZZo_F2GBE1RhjR1irOkE3yrtPorHS1U9YkLKAu1DnTjQ8gNbcRmrBtkd3tnHQ',
  item2: 'https://seeklogo.com/images/D/disney-logo-575AED0F1D-seeklogo.com.png' ,
  item3: 'https://play-lh.googleusercontent.com/rdzfnSN_CJ0930nHwaZbD8my6X_s8xAFORVg6gvdUTiNz5qgYqObKEVIT8mOzapaUB4T',
  price: '17.000'
}



useEffect(() => {
  setCatalogue(productos)
},[])

  return (
    <div className='app'>      
     <Navbar/>
<h2 className='combo__title'>Cuentas por Pantalla</h2>
     <div className='app__cards'>

{
  catalogue?.map(item => (
    <Products 
    catalogue={item}
    key={item.id}/>
    ))
}
    </div>
    <h2 className='combo__title'>Combos</h2>
<div className='app__combos'>
<Combos combo ={combo}/>
<Combos combo ={combo2}/>
<Combos combo ={combo3}/>
<Combos combo ={combo4}/>
<Combos combo ={combo5}/>
<Combos combo ={combo6}/>
</div>
<Footer/>
    </div>
  )
}

export default App
