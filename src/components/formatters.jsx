export const formatUrl = (state) => {
    let { search } = state;
    let u = ''
    if( search ) {
        u += '?'
        if(search) {
            u+=`search=${state.search}&`
        }
       
    }
    
    return u;
}