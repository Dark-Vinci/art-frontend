import ArtCard from './artCard';

function ArtCards ({ data }) {
    return (
        <div className="container">
            {
                data.map((art) => {
                    return <ArtCard 
                            key={ art._id }
                            id={ art._id }
                            name={ art.name }
                            createdAt={ art.createdAt }
                        />
                })
            }
        </div>
    );
}

export default ArtCards;