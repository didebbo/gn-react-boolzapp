import { useState, useEffect } from 'react';
import '../../scss/Main.scss';

export default function Main(props) {

    // const [data, setData] = useState(props.data);
    let currentContact = props.data.currentContact;
    let contacts = [...props.data.contacts];
    let messages = [...contacts[currentContact].messages];
    let name = contacts[currentContact].name;
    let lastSee = contacts[currentContact].lastSee;
    let currentInput = props.data.currentInput;
    let eventKey = props.data.eventKey;


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
        props.setData({ ...props.data, showMessageMenu });
    }

    const onChangeCurrentInput = (e) => {
        currentInput = e.target.value;
        props.setData({ ...props.data, currentInput });
    }

    const sendMessage = (e) => {
        let eventKey = e.key;
        props.setData({ ...props.data, eventKey });
        if (eventKey === "Enter") {
            if (currentInput === "") return;
            contacts[currentContact].messages.push({
                seen: false,
                message: currentInput,
                status: 'sent'
            });
            currentInput = "";
            props.setData({ ...props.data, contacts, currentInput });
            props.data.scrollChat();
        }
    }

    // WORK IN PROGRESS
    const replayMessage = () => {
        setTimeout(() => {
            contacts[currentContact].lastSee = "Online";
            props.setData({ ...props.data, contacts });
            setTimeout(() => {
                seeMessageLoop();
                setTimeout(() => {
                    if (contacts[currentContact].lastSee !== "Online") return;
                    contacts[currentContact].messages.push(
                        {
                            seen: true,
                            message: messages[Math.floor(Math.random() * messages.length)],
                            status: 'received'
                        }
                    );
                    props.setData({ ...props.data, contacts });
                    props.data.scrollChat();
                    setTimeout(() => {
                        contacts[currentContact].lastSee = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString('us-US', { hour12: false });
                        props.setData({ ...props.data, contacts });
                    }, 1000 * Math.floor(Math.random() * 10 + 1));
                }, 1000 * Math.floor(Math.random() * 10 + 1));
            }, 1000 * Math.floor(Math.random() * 5 + 1));
        }, 1000 * Math.floor(Math.random() * 10 + 1));
    }

    // WORK IN PROGRESS
    const seeMessageLoop = () => {
        const loop = setInterval(() => {
            if (contacts[currentContact].lastSee !== "Online") clearInterval(loop);
            contacts[currentContact].messages.forEach((message) => {
                message.seen = true;
            });
        }, 0);
        props.setData({ ...props.data, contacts });
    }

    // useEffect(() => {
    //     let eventKey = props.data.eventKey;
    //     if (eventKey !== "Enter") return;
    //     eventKey = null;
    //     props.setData({ ...props.data, eventKey });
    //     alert("Enter");
    // }, [eventKey]);

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
            <div className="bottom-bar">
                <i className="far fa-smile"></i>
                <input type="text" value={currentInput} onChange={(e) => onChangeCurrentInput(e)} onKeyPress={(e) => sendMessage(e)} placeholder="Scrivi un messaggio..." />
                <i className="fas fa-microphone"></i>
            </div>
        </div >
    );
}