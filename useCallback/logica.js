function CartaDeElementos() {
    const [randomNumber, setRandomNumber] = React.useState(0);
    const [counter, setCounter] = React.useState(0);

    const createRandom = React.useCallback(() => {
        const newRandom = Math.floor(Math.random() * 100);
        setRandomNumber(newRandom);
        console.log("createRandom ejecutado");
    }, []);

    const addCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
        console.log("addCounter ejecutado");
    };

    return (
        <div className="card-container">
            <h1>Carta de Elementos</h1>
            <p>Número aleatorio: {randomNumber}</p>
            <p>Contador: {counter}</p>
            <div className="buttons">
                <ButtonOptimizado onClick={createRandom}>Generar Aleatorio</ButtonOptimizado>
                <ButtonNormal onClick={addCounter}>Incrementar Contador</ButtonNormal>
            </div>
        </div>
    );
}

const ButtonOptimizado = React.memo(({ onClick, children }) => {
    console.log("ButtonOptimizado renderizado");
    return (
        <button className="btn optimizado" onClick={onClick}>
            {children}
        </button>
    );
});

const ButtonNormal = ({ onClick, children }) => {
    console.log("ButtonNormal renderizado");
    return (
        <button className="btn normal" onClick={onClick}>
            {children}
        </button>
    );
};

// Render the component
const rootElement = document.getElementById("root");
ReactDOM.render(<CartaDeElementos />, rootElement);
