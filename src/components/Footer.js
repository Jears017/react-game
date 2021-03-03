import React from 'react'
import rsLogoW from '../assets/Group_3.svg'
import rsLogoB from '../assets/Group_5.svg'

import gitLogoW from '../assets/gitHubW.png'
import gitLogoB from '../assets/gitHub.png'

export const Footer = () => {

    const logo = () => {
        if (!localStorage.color) {
            return rsLogoB
        } else if (localStorage.color === 'light') {
            return rsLogoB
        } else if (localStorage.color === 'dark') {
            return rsLogoW
        }
    }

    const git = () => {
        if (!localStorage.color) {
            return gitLogoB
        } else if (localStorage.color === 'light') {
            return gitLogoB
        } else if (localStorage.color === 'dark') {
            return gitLogoW
        }
    }

    const copyright = () => {
        switch (localStorage.color){
            case 'light':
                return 'd'
            case 'dark':
                return 'l'
            default:
                return 'd'
        }
    }


    return (
        <div className='footer'>
            <div className='footer-images-container'>
                <div className={`copyright f ${copyright()}`}>&copy;2021</div>
                <a href='https://rs.school/react/'><img className='footer-rs-logo f' src={logo()} alt=""/></a>
                <a href="https://github.com/Jears017/react-game"><img className='footer-gitHub-logo f' src={git()} alt=""/></a>
            </div>
        </div>
    )
}