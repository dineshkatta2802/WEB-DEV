//Passing the props
export default function CharCard({ AnimeName, CharName, Attack, Power, Image, Size,Captain }) {
    // Conditional Rendering
    if(Captain){
        return (
    <div style={{width: "100%", height: "100%",display: "flex",
                flexDirection: "column",alignItems: "center",justifyContent: "center",
                gap: "10px", boxSizing: "border-box",}}>
        <h1 style={{fontSize : "40px", margin : "0"}}>{AnimeName}</h1>
        <h3 style={{fontSize : "25px", margin : "0"}}>{CharName} 🌟CAPTAIN</h3>
        <p><strong style={{fontSize : "20px", margin : "0"}}>Power : </strong>" {Power} "</p>
        <p><strong style={{fontSize : "20px", margin : "0"}}>Attack Name :  </strong>" {Attack} "</p>
        <img
        src={Image}
        alt={CharName}
        style={{width: Size, height: Size, objectFit: "cover", borderRadius: "8px"}}
        />
    </div>
    );
    }

    return (
    <div style={{width: "100%", height: "100%",display: "flex",
                flexDirection: "column",alignItems: "center",justifyContent: "center",
                gap: "10px", padding: "20px", boxSizing: "border-box",}}>
        <h1 style={{fontSize : "40px", margin : "0"}}>{AnimeName}</h1>
        <h3 style={{fontSize : "25px", margin : "0"}}>{CharName}</h3>
        <p><strong style={{fontSize : "20px", margin : "0"}}>Power : </strong>" {Power} "</p>
        <p><strong style={{fontSize : "20px", margin : "0"}}>Attack Name :  </strong>" {Attack} "</p>
        <img
        src={Image}
        alt={CharName}
        style={{width: Size, height: Size, objectFit: "cover", borderRadius: "8px"}}
        />
    </div>
    );
}
