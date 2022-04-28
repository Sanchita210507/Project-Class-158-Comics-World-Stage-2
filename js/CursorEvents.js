AFRAME.registerComponent("cursor-listener", {
    schema : {
        selectedItemId : { default : "", type : "string"},
    },

    init:function(){
        this.handleMouseEnterEvents()
        this.mouseLeaveEvents()
    },
    handleComicsListState:function(){
        const id = this.el.getAttribute("id");
        const comicsId = ["comic1","comic2","comic3","comic4"];

        if(comicsId.includes(id)){
            const comicsContainer = document.querySelector("#comics-container")
            comicsContainer.setAttribute("cursor-listener", {selectedItemId : id})
            this.el.setAttribute("material",{color : "#886aff", opacity : 1 })

        }

    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.handleComicsListState()
        })
    },

    mouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId} = this.data
            
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")

                if(id == selectedItemId){
                    el.setAttribute("material", { color : "black", opacity : 1})
                }
            }
        })
    }
});