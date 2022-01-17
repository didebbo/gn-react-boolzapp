import '../../scss/Main.scss';

export default function Main(props) {
    let currentContact = props.data.currentContact;
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
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
        </div>
    );
}