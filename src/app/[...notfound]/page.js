import Link from 'next/link'
import './pagenotfound.css'
export default function PageNotFound(){
    return(
        <div className='page-not-found'>
            Opps ! Page Not Found
            <br/>
            <Link className='link1' href={"/"}><button className='btn1'>Go To Home</button></Link>
        </div>
    )
}