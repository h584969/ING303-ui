const HeaderButton = ({Icon=null, onClick = () => {}} = {}) => {
    return <Icon className="app-header-button" onClick={onClick} />;
}

export default HeaderButton;