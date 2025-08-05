export default function CharCard({ AnimeName, CharName, Power, Image, Size }) {
    return (
    <div style={{width: "100%", height: "100%",display: "flex",
                flexDirection: "column",alignItems: "center",justifyContent: "center",
                gap: "10px", padding: "20px", boxSizing: "border-box",}}>
        <h1 style={{fontSize : "40px"}}>{AnimeName}</h1>
        <h3 style={{fontSize : "25px"}}>{CharName}</h3>
        <p><strong>Attack Name :  </strong>" {Power} "</p>
        <img
        src={Image}
        alt={CharName}
        style={{width: Size, height: Size, objectFit: "cover", borderRadius: "8px"}}
        />
    </div>
    );
}
