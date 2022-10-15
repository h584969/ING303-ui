const InfoPanel = ({Content = () => <div></div>} = {}) => {
    return(
        <div className="info_panel">
            <Content />
        </div>
    )
};

export default InfoPanel;