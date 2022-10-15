const HeaderButton = ({Icon=null, onClick = () => {}} = {}) => {
    var icon =  <Icon className="app-header-button" onClick={onClick} />;
    return icon;
}

export default HeaderButton;