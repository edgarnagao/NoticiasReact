import React from 'react';
import Noticia from './Noticia'

const ListaNoticias = ({noticias}) => {
    return (  
       
        <div className="row">
            <div className="col s12">
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </div>
        </div>
        
    );
}
 
export default ListaNoticias;