import React from "react";
import {BlogNavBar} from './navbar'
import {BlogFooter} from './footer'

type LayoutProps = {
    children: JSX.Element
}
export const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <BlogNavBar />
            {children}
            <BlogFooter />
        </div>
    )
}