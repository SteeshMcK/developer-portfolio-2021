import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
    return ( 
        <header>
            <div className={ styles.nameDiv }>
                <p>Stesha McKindle + Web Creations</p>
            </div>
            <div className={ styles.headshot }>
                <Image src='/headshot.jpg' width={500} height={500} alt='my headshot' />
            </div>
            <div className={ styles.personalInfo }>
                <p>email: steshamckindle@gmail.com</p>
                <p>phone: 503-840-9044</p>
            </div>
            <div className={ styles.projectsResume}>
                <Link href='/projects'>
                    <a className={ styles.anchors }>Projects</a>
                </Link>
                <Link href='/resume'>
                    <a className={ styles.anchors }>Resume</a>
                </Link>
            </div>
        </header>
     );
} 
 
export default Header;