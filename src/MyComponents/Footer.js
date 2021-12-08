import React from 'react'

export const Footer = () => {
    const footerStyle={
        position:"relative",
        width:"100%",
        top:"110vh"
    }
    return (
    
            <footer className="bg-dark text-light py-3" style={footerStyle}>
                <p className="text-center">copyright &copy;</p>
            </footer>
        
    )
}
