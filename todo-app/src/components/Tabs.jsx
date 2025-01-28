export function Tabs() {
    const tabs = ['All' , 'Open' , 'Completed'];
    // every elemetent in this array return button
    return (
        <nav className="tab-container" >

            {tabs.map( (tab, tabIndex) => {
                return (
                    <button key={tabIndex} className="tab-button"  >
                        <h4>{tab} <span>(0)</span> </h4>
                    </button>
                )
            } )}
            
        </nav>
    )
}