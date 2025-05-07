function UserSearch() {
    const [search, setSearch] = React.useState('');
    const [users, setUsers] = React.useState([
        { name: "Monkey D. Luffy", description: "Le gusta comer carne y ser el Rey de los Piratas." },
        { name: "Roronoa Zoro", description: "Le gusta entrenar y coleccionar espadas." },
        { name: "Nami", description: "Le gusta dibujar mapas y recolectar tesoros." },
        { name: "Sanji", description: "Le gusta cocinar y proteger a las damas." },
        { name: "Tony Tony Chopper", description: "Le gusta ayudar a los demás como doctor." }
    ]);

    const [newUser, setNewUser] = React.useState({ name: '', description: '' });

    const filteredUsers = React.useMemo(() => {
        console.log("Filtrando usuarios...");
        return users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.description.toLowerCase().includes(search.toLowerCase())
        );
    }, [users, search]);

    const handleAddUser = () => {
        if (newUser.name && newUser.description) {
            setUsers([...users, newUser]);
            setNewUser({ name: '', description: '' });
        }
    };

    return (
        <div className="user-search-container">
            <h1>Filtro de Usuarios</h1>
            <input
                type="text"
                placeholder="Buscar usuarios..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="add-user">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={newUser.description}
                    onChange={(e) => setNewUser({ ...newUser, description: e.target.value })}
                />
                <button onClick={handleAddUser}>Agregar</button>
            </div>
            <h2>Usuarios Filtrados</h2>
            <ul>
                {filteredUsers.map((user, index) => (
                    <li key={index}>
                        <strong>{user.name}</strong>: {user.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Render the component
const rootElement = document.getElementById("root");
ReactDOM.render(<UserSearch />, rootElement);