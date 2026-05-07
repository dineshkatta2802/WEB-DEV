export function createConnection(roomId, serverURL){
    return{
        connect() {
            alert(`Connected to the ${roomId} at ${serverURL}`);
        },
        disconnect() {
            alert(`Disconnected from the ${roomId} at ${serverURL}`);
        }
    }
}