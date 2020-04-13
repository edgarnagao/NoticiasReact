import React from 'react';

const Noticia = ({noticia}) => {
    // Extraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img 
               
                height= "auto"
                vertical-align= "middle"
                src={urlToImage} 
                alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
    : null;

    

    return (  
        <div className="col s12 m6 l4">
            <div className="card large">
                
                    {imagen}
                
                <div className="card-content">
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_black"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn "
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
}
 
export default Noticia;