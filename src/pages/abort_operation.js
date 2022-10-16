import InfoMessageSkeleton from "../components/skeletons/info_message_skeleton";
import PageObject from "../util/page_object";
import ItemSelection from "./item_selecton";
import WaitForItem from "./wait_for_item";

const AbortOperation = ({setPage} = {}) =>{
    return(
        <InfoMessageSkeleton 
            setPage={setPage}
            text="Vennligst fjern varen"
            Extra={() => <button 
                className="cheat_button"
                onClick={() => setPage(new PageObject(() => <WaitForItem setPage={setPage}/>))}>
                    Trykk for å gå videre
                </button>
            }/>
    );
}

export default AbortOperation;