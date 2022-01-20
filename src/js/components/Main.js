import '../../scss/Main.scss';

export default function Main(props) {
    let currentContact = props.data.currentContact;
    let contacts = props.data.contacts;
    let messages = contacts[currentContact].messages;
    let name = props.data.contacts[currentContact].name;
    let lastSee = props.data.contacts[currentContact].lastSee;

    const getAvatarImage = () => {
        return require('../../images/avatar_' + (currentContact + 1) + ".jpg");
    };
    const getLastSee = () => {
        if (lastSee === 'Online') return lastSee;
        else return 'Ultimo accesso: ' + lastSee;
    }
    const togglemenu = () => {
        let showMenu = !props.data.showMenu;
        props.setData({ ...props.data, showMenu });
    }
    const toggleDarkMode = () => {
        let darkMode = !props.data.darkMode;
        props.setData({ ...props.data, darkMode })
    }
    const getPushClass = (message) => {
        let className = "push " + message.status;
        return className;
    }

    const seenAt = (message) => {
        let className = "at";
        if (message.seen) className += " seen";
        return className;
    }

    const deleteMessage = (index) => {
        contacts[currentContact].messages.splice(index, 1);
        props.setData({ ...props.data, contacts });
    }

    const openMenu = (index) => {
        let showMessageMenu = props.data.showMessageMenu;
        if (showMessageMenu.index === index) showMessageMenu.status = !showMessageMenu.status;
        else showMessageMenu.status = true;
        if (showMessageMenu.status) showMessageMenu.index = index;
        // props.setData({ ...props.data, showMessageMenu });
    }

    return (
        <div className="Main">
            <div className="header">
                <div className="user">
                    <div className="avatar">
                        <img src={getAvatarImage()} alt="Avatar" />
                    </div>
                    <div className="content">
                        <div className="name">
                            {name}
                        </div>
                        <div className="last-see">
                            {getLastSee()}
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <i className="fas fa-search" onClick={togglemenu}></i>
                    <i className="fas fa-paperclip"></i>
                    <i className="fas fa-ellipsis-v" onClick={toggleDarkMode}></i>
                </div>
            </div>
            <div id="chat" className='chat'>
                {
                    messages.map((message, index) => (
                        <div key={currentContact + "_" + index} className={getPushClass(message)} onClick={() => openMenu(index)}>
                            {
                                !message.audio ?
                                    <div className="text">
                                        {message.message}
                                    </div>
                                    :
                                    <audio src={message.message} controls></audio>
                            }
                            {
                                (message.status === "sent") && (
                                    <div className={seenAt(message)}>
                                        <i className="fas fa-check-double"></i>
                                    </div>
                                )
                            }
                            {
                                (props.data.showMessageMenu.status && props.data.showMessageMenu.index === index) && (
                                    <div className="messageMenu">
                                        <ul>
                                            <li>
                                                Info Messaggio
                                            </li>
                                            <li onClick={() => deleteMessage(index)}>
                                                Elimina Messaggio
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div >
    );
}