import '../../scss/Sidebar.scss';

function Sidebar() {
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
            </div>
        </div>
    );
}

export default Sidebar;