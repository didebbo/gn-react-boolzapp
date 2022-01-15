import '../../scss/Sidebar.scss';

function Sidebar(props) {
    console.log(props.data.contacts);
    return (
        <div className="Sidebar">
            <div className="header">
                <div className="user">
                    <div className="avatar">
                        <img src={require('../../images/avatar_io.jpg')} alt="Me" />
                    </div>
                    <div className="name">
                        Giada
                    </div>
                </div>
                <div className="actions">
                    <i className="fas fa-circle-notch"></i>
                    <i className="fas fa-comment-alt"></i>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div className="body">
                <div className="notifiche">
                    <div className="icon">
                        <i className="fas fa-bell-slash"></i>
                    </div>
                    <div className="content">
                        <strong>
                            Ricevi notifiche di nuovi messaggi
                        </strong>
                        <small>
                            Attiva notifiche desktop
                        </small>
                    </div>
                </div>
                <div className="search">
                    <div className="search-button">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="search-input">
                        <input type="text" placeholder="Cerca o inizia una nuova chat" />
                    </div>
                </div>
                <div className="users-list">
                    <ul className="users">
                        {
                            props.data.contacts.map((contact, index) => (
                                <li className="user" key={index}>
                                    <div className="avatar">
                                        <img src={require('../../images/avatar' + contact.avatar + '.jpg')} alt="Avatar" />
                                    </div>
                                    <div className="name">{contact.name}</div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;