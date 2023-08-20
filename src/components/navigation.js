import React, { useState } from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

const navLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Web Dev',
            path: '/web-dev'
        },
        {
            title: 'Cloud',
            path: '/cloud'
        },
        {
            title: 'Algorithms',
            path: '/algos'
        },
        {
            title: 'Brain Hacking',
            path: '/health'
        },
        {
            title: 'Login',
            path: '/login'
        }
    ]


    export default function Navigation () {
        const [menuActive, setMenuActive] = useState(false)
        return (
        <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
            <span className="menu-title">LS Blog</span>
            <div
                className="menu-content-container"
            >
                <ul>
                { navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                    ))
                }
                </ul>
                <div className="menu-avatar-container">
                    <Avatar size={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                    <span className="menu-avatar-name">Laurynas Seredochas</span>
                </div>
            </div>
            <i 
                className="icon ionicons ion-ios-menu"
                onClick={(ev) => setMenuActive(!menuActive)}
            />
        </nav>
      )
}