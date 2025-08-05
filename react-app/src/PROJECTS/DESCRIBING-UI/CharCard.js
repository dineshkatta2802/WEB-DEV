// FIXED version
export default function CharCard({ AnimeName, CharName, Power, Image, Size }) {
    return (
        <div style={{width : "100%", height : "100%"}}> 
            <h2>{AnimeName}</h2>
            <h3>{CharName}</h3>
            <p>Attack Name : {Power}</p>
            <img 
                src={Image} 
                alt={CharName}  
                style={{width : Size, height : Size, objectFit : "cover", border : "1px solid black"}} 
            />
        </div>
    );
}
