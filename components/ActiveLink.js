import {withRouter} from 'next/router';

const ActiveLink = ({router,href,children}) =>{
(function prefetchPages(){
    if(typeof window !== "undefined"){
       router.prefetch(router.pathname) 
    }
})()
const handleClick = event => {
    event.preventDefault();
    router.push(href);
}
const isCurrentpath = router.pathname === href || router.asPath === href;
    return (
       <div>
           <a href={href} onClick={handleClick}
           style={{textDecoration:'none',marginRight:30,padding:0,fontWeight:isCurrentpath ? "bold" : "normal",color:isCurrentpath ? '#00B87C' : '#B0AFB0',borderBottom:isCurrentpath ? '2px solid #00B87C' :''}}>
            {children}
           </a>
       </div>
    )
  };

  export default withRouter(ActiveLink);
  
  