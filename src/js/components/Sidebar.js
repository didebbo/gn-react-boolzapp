import '../../scss/Sidebar.scss';

export default function Sidebar(props) {

    let avatar = require('../../images/avatar_io.jpg');
    let searchInput = props.data.searchInput;
    let contacts = props.data.contacts;

    const setSearchInput = (e) => {
        searchInput = e.target.value;
        contacts.forEach(contact => {
            if (contact.name.toLowerCase().includes(searchInput.toLowerCase())) contact.visible = true;
            else contact.visible = false;
        });
        props.setData({ ...props.data, searchInput, contacts });
    };

    const showSidebar = () => {
        let className = 'Sidebar';
        if (props.data.showMenu) className += " show";
        return className;
    };

    const toggleDarkMode = () => {
        let darkMode = !props.data.darkMode;
        props.setData({ ...props.data, darkMode })
    };

    const classUser = (index) => {
        let className = 'user';
        if (index === props.data.currentContact) className += " active";
        return className;
    }

    const changeContact = (index) => {
        let currentContact = index;
        let showMenu = !props.data.showMenu;
        let showMessageMenu = props.data.showMessageMenu;
        showMessageMenu.status = false;
        props.setData({ ...props.data, currentContact, showMenu, showMessageMenu });
        // autoScrollMessage(); 
    }

    // const autoScrollMessage = () => {
    //     setTimeout(() => {
    //         const chat = document.getElementById("chat");
    //         chat.scrollTop = chat.scrollHeight;
    //     }, 0);
    // }

    return (
        <div className={showSidebar()}>
            <div className="header">
                <div className="user">
                    <div className="avatar">
                        <img src={avatar} alt="Me" />
                    </div>
                    <div className="name">
                        Giada
                    </div>
                </div>
                <div className="actions">
                    <i className="fas fa-circle-notch"></i>
                    <i className="fas fa-comment-alt"></i>
                    <i className="fas fa-ellipsis-v" onClick={toggleDarkMode}></i>
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
                        <input type="text" value={searchInput} onChange={setSearchInput} placeholder="Cerca o inizia una nuova chat" />
                    </div>
                </div>
                <div className="users-list">
                    <ul className="users">
                        {
                            contacts.map((contact, index) => (
                                contact.visible ?
                                    <li className={classUser(index)} key={index} onClick={() => changeContact(index)}>
                                        <div className="avatar">
                                            <img src={require('../../images/avatar' + contact.avatar + '.jpg')} alt="Avatar" />
                                        </div>
                                        <div className="name">{contact.name}</div>
                                    </li>
                                    : null
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}