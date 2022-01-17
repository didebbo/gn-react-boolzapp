import '../../scss/Main.scss';

export default function Main(props) {
    const getAvatarImage = () => {
        let src = require('../../images/avatar_' + (props.data.currentContact + 1) + ".jpg");
        return src;
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
                            Name here...
                        </div>
                        <div className="last-see">
                            Ultimo accesso: ...
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-paperclip"></i>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
        </div>
    );
}