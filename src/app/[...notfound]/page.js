import Link from 'next/link'
import './pagenotfound.css'
export default function PageNotFound(){
    return(
        <div className='page-not-found'>
            Opps ! Page Not Found
            <br/>
            <Link className='link' href={"/"}><button className='btn'>Go To Home</button></Link>
        </div>
    )
}