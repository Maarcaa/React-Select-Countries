import React from 'react';

const Logo = () => {
    return (
       <div className="logo">
        {/* Les images importées depuis la balise img src sont directement lié au dossier "public" qui contient toutes les images (assets)*/}
        <img src="./logo192.png" alt="logo react" />
        <h3>React world</h3>
       </div>
    );
};

export default Logo;